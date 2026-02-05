"use strict";
n.d(t, { $z: () => l, EH: () => _, WA: () => d, kx: () => o, l9: () => c, tf: () => f });
var r = n(989349),
    i = n.n(r),
    a = n(405269),
    s = n(927813);
let o = {
        t: (e) => (0, a.i$)(e, "LT"),
        T: (e) => (0, a.i$)(e, "LTS"),
        d: (e) => (0, a.i$)(e, "L"),
        D: (e) => (0, a.i$)(e, "LL"),
        f: (e) => (0, a.i$)(e, "LLL"),
        F: (e) => (0, a.i$)(e, "LLLL"),
        s: (e) => (0, a.i$)(e, "L LT"),
        S: (e) => (0, a.i$)(e, "L LTS"),
        R: (e) => {
            let t = i().relativeTimeThreshold("s");
            i().relativeTimeThreshold("s", 60);
            let n = i().relativeTimeThreshold("ss");
            i().relativeTimeThreshold("ss", -1);
            let r = i().relativeTimeThreshold("m");
            i().relativeTimeThreshold("m", 60);
            let a = null;
            try {
                a = i()(e.toDate()).fromNow();
            } catch (e) {}
            return (
                i().relativeTimeThreshold("s", t),
                i().relativeTimeThreshold("ss", n),
                i().relativeTimeThreshold("m", r),
                a ?? i()(e.toDate()).fromNow()
            );
        },
    },
    l = "f";
Object.setPrototypeOf(o, null);
let u = Object.keys(o).join("|"),
    c = RegExp(`^<t:(-?\\d{1,17})(?::(${u}))?>`);
function d(e) {
    let { timestamp: t, format: n } = e,
        r = i()(Number(t) * s.A.Millis.SECOND);
    if (!r.isValid()) return null;
    let a = null != n ? o[n] : void 0;
    return null == a && (a = o[l]), { timestamp: t, format: n, parsed: r, full: o.F(r), formatted: a(r) };
}
function _(e, t) {
    return d({ timestamp: e, format: t });
}
function f(e, t) {
    return null != t ? `<t:${e}:${t}>` : `<t:${e}>`;
}
