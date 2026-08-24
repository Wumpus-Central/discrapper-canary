"use strict";
n.d(t, { EH: () => u, WA: () => c, kx: () => l, l9: () => d, tf: () => _ });
var i = n(536637),
    r = n.n(i),
    a = n(58703),
    s = n(927813);
let l = {
    t: (e) => (0, a.i$)(e, "LT"),
    T: (e) => (0, a.i$)(e, "LTS"),
    d: (e) => (0, a.i$)(e, "L"),
    D: (e) => (0, a.i$)(e, "LL"),
    f: (e) => (0, a.i$)(e, "LLL"),
    F: (e) => (0, a.i$)(e, "LLLL"),
    s: (e) => (0, a.i$)(e, "L LT"),
    S: (e) => (0, a.i$)(e, "L LTS"),
    R: (e) => {
        let t = r().relativeTimeThreshold("s");
        r().relativeTimeThreshold("s", 60);
        let n = r().relativeTimeThreshold("ss");
        r().relativeTimeThreshold("ss", -1);
        let i = r().relativeTimeThreshold("m");
        r().relativeTimeThreshold("m", 60);
        let a = null;
        try {
            a = r()(e.toDate()).fromNow();
        } catch (e) {}
        return (
            r().relativeTimeThreshold("s", t),
            r().relativeTimeThreshold("ss", n),
            r().relativeTimeThreshold("m", i),
            a ?? r()(e.toDate()).fromNow()
        );
    },
};
Object.setPrototypeOf(l, null);
let o = Object.keys(l).join("|"),
    d = RegExp(`^<t:(-?\\d{1,17})(?::(${o}))?>`);
function c(e) {
    let { timestamp: t, format: n } = e,
        i = r()(Number(t) * s.A.Millis.SECOND);
    if (!i.isValid()) return null;
    let a = null != n ? l[n] : void 0;
    return null == a && (a = l.f), { timestamp: t, format: n, parsed: i, full: l.F(i), formatted: a(i) };
}
function u(e, t) {
    return c({ timestamp: e, format: t });
}
function _(e, t) {
    return null != t ? `<t:${e}:${t}>` : `<t:${e}>`;
}
