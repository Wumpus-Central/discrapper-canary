"use strict";
n.d(t, { EH: () => c, WA: () => d, kx: () => o, l9: () => u, tf: () => _ });
var r = n(989349),
    i = n.n(r),
    s = n(405269),
    a = n(927813);
let o = {
    t: (e) => (0, s.i$)(e, "LT"),
    T: (e) => (0, s.i$)(e, "LTS"),
    d: (e) => (0, s.i$)(e, "L"),
    D: (e) => (0, s.i$)(e, "LL"),
    f: (e) => (0, s.i$)(e, "LLL"),
    F: (e) => (0, s.i$)(e, "LLLL"),
    s: (e) => (0, s.i$)(e, "L LT"),
    S: (e) => (0, s.i$)(e, "L LTS"),
    R: (e) => {
        let t = i().relativeTimeThreshold("s");
        i().relativeTimeThreshold("s", 60);
        let n = i().relativeTimeThreshold("ss");
        i().relativeTimeThreshold("ss", -1);
        let r = i().relativeTimeThreshold("m");
        i().relativeTimeThreshold("m", 60);
        let s = null;
        try {
            s = i()(e.toDate()).fromNow();
        } catch (e) {}
        return (
            i().relativeTimeThreshold("s", t),
            i().relativeTimeThreshold("ss", n),
            i().relativeTimeThreshold("m", r),
            s ?? i()(e.toDate()).fromNow()
        );
    },
};
Object.setPrototypeOf(o, null);
let l = Object.keys(o).join("|"),
    u = RegExp(`^<t:(-?\\d{1,17})(?::(${l}))?>`);
function d(e) {
    let { timestamp: t, format: n } = e,
        r = i()(Number(t) * a.A.Millis.SECOND);
    if (!r.isValid()) return null;
    let s = null != n ? o[n] : void 0;
    return null == s && (s = o.f), { timestamp: t, format: n, parsed: r, full: o.F(r), formatted: s(r) };
}
function c(e, t) {
    return d({ timestamp: e, format: t });
}
function _(e, t) {
    return null != t ? `<t:${e}:${t}>` : `<t:${e}>`;
}
