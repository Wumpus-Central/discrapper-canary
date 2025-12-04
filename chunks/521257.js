r.d(t, {
    $P: () => E,
    Fi: () => n,
    Fr: () => l,
    Sq: () => _,
    pE: () => o,
});
let n = "?",
    a = /\(error: (.*)\)/,
    i = /captureMessage|captureException/;
function o(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
    return (e, r = 0, o = 0) => {
        let _ = [],
            c = e.split("\n");
        for (let e = r; e < c.length; e++) {
            let r = c[e];
            if (r.length > 1024) continue;
            let n = a.test(r) ? r.replace(a, "$1") : r;
            if (!n.match(/\S*Error: /)) {
                for (let e of t) {
                    let t = e(n);
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
            i.test(s(l).function || "") && (l.pop(), i.test(s(l).function || "") && l.pop()),
            l.slice(0, 50).map((e) => ({
                ...e,
                filename: e.filename || s(l).filename,
                function: e.function || n,
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
