a.d(e, {
    $P: () => E,
    Fi: () => r,
    Fr: () => l,
    Sq: () => i,
    pE: () => o
});
let r = '?',
    n = /\(error: (.*)\)/,
    _ = /captureMessage|captureException/;
function o(...t) {
    let e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
    return (t, a = 0, o = 0) => {
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
                if (i.length >= 50 + o) break;
            }
        }
        var E = i.slice(o);
        if (!E.length) return [];
        let l = Array.from(E);
        return (
            /sentryWrapped/.test(c(l).function || '') && l.pop(),
            l.reverse(),
            _.test(c(l).function || '') && (l.pop(), _.test(c(l).function || '') && l.pop()),
            l.slice(0, 50).map((t) => ({
                ...t,
                filename: t.filename || c(l).filename,
                function: t.function || r
            }))
        );
    };
}
function i(t) {
    return Array.isArray(t) ? o(...t) : t;
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
