a.d(e, {
    $P: () => E,
    Fi: () => r,
    Fr: () => l,
    Sq: () => i,
    pE: () => _
});
let r = '?',
    n = /\(error: (.*)\)/,
    o = /captureMessage|captureException/;
function _(...t) {
    let e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
    return (t, a = 0, _ = 0) => {
        let i = [],
            s = t.split('\n');
        for (let t = a; t < s.length; t++) {
            let a = s[t];
            if (a.length > 1024) continue;
            let r = n.test(a) ? a.replace(n, '$1') : a;
            if (!r.match(/\S*Error: /)) {
                for (let t of e) {
                    let e = t(r);
                    if (e) {
                        i.push(e);
                        break;
                    }
                }
                if (i.length >= 50 + _) break;
            }
        }
        return (function (t) {
            if (!t.length) return [];
            let e = Array.from(t);
            return (
                /sentryWrapped/.test(c(e).function || '') && e.pop(),
                e.reverse(),
                o.test(c(e).function || '') && (e.pop(), o.test(c(e).function || '') && e.pop()),
                e.slice(0, 50).map((t) => ({
                    ...t,
                    filename: t.filename || c(e).filename,
                    function: t.function || r
                }))
            );
        })(i.slice(_));
    };
}
function i(t) {
    return Array.isArray(t) ? _(...t) : t;
}
function c(t) {
    return t[t.length - 1] || {};
}
let s = '<anonymous>';
function E(t) {
    try {
        if (!t || 'function' != typeof t) return s;
        return t.name || s;
    } catch (t) {
        return s;
    }
}
function l(t) {
    let e = t.exception;
    if (e) {
        let t = [];
        try {
            return (
                e.values.forEach((e) => {
                    e.stacktrace.frames && t.push(...e.stacktrace.frames);
                }),
                t
            );
        } catch (t) {}
    }
}
