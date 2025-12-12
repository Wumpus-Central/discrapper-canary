n.d(t, {
    $P: () => E,
    Fi: () => r,
    Fr: () => l,
    Sq: () => _,
    pE: () => o,
});
let r = "?",
    i = /\(error: (.*)\)/,
    a = /captureMessage|captureException/;
function o(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
    return (e, n = 0, o = 0) => {
        let _ = [],
            c = e.split("\n");
        for (let e = n; e < c.length; e++) {
            let n = c[e];
            if (n.length > 1024) continue;
            let r = i.test(n) ? n.replace(i, "$1") : n;
            if (!r.match(/\S*Error: /)) {
                for (let e of t) {
                    let t = e(r);
                    if (t) {
                        _.push(t);
                        break;
                    }
                }
                if (_.length >= 50 + o) break;
            }
        }
        var E = _.slice(o);
        if (!E.length) return [];
        let l = Array.from(E);
        return (
            /sentryWrapped/.test(s(l).function || "") && l.pop(),
            l.reverse(),
            a.test(s(l).function || "") && (l.pop(), a.test(s(l).function || "") && l.pop()),
            l.slice(0, 50).map((e) => ({
                ...e,
                filename: e.filename || s(l).filename,
                function: e.function || r,
            }))
        );
    };
}
function _(e) {
    return Array.isArray(e) ? o(...e) : e;
}
function s(e) {
    return e[e.length - 1] || {};
}
let c = "<anonymous>";
function E(e) {
    try {
        if (!e || "function" != typeof e) return c;
        return e.name || c;
    } catch (e) {
        return c;
    }
}
function l(e) {
    let t = e.exception;
    if (t) {
        let e = [];
        try {
            return (
                t.values.forEach((t) => {
                    t.stacktrace.frames && e.push(...t.stacktrace.frames);
                }),
                e
            );
        } catch (e) {}
    }
}
