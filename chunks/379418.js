"use strict";
n.d(t, { EH: () => u, WA: () => _, kx: () => o, l9: () => d, tf: () => c });
var i = n(989349),
    r = n.n(i),
    s = n(58703),
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
        let t = r().relativeTimeThreshold("s");
        r().relativeTimeThreshold("s", 60);
        let n = r().relativeTimeThreshold("ss");
        r().relativeTimeThreshold("ss", -1);
        let i = r().relativeTimeThreshold("m");
        r().relativeTimeThreshold("m", 60);
        let s = null;
        try {
            s = r()(e.toDate()).fromNow();
        } catch (e) {}
        return (
            r().relativeTimeThreshold("s", t),
            r().relativeTimeThreshold("ss", n),
            r().relativeTimeThreshold("m", i),
            s ?? r()(e.toDate()).fromNow()
        );
    },
};
Object.setPrototypeOf(o, null);
let l = Object.keys(o).join("|"),
    d = RegExp(`^<t:(-?\\d{1,17})(?::(${l}))?>`);
function _(e) {
    let { timestamp: t, format: n } = e,
        i = r()(Number(t) * a.A.Millis.SECOND);
    if (!i.isValid()) return null;
    let s = null != n ? o[n] : void 0;
    return null == s && (s = o.f), { timestamp: t, format: n, parsed: i, full: o.F(i), formatted: s(i) };
}
function u(e, t) {
    return _({ timestamp: e, format: t });
}
function c(e, t) {
    return null != t ? `<t:${e}:${t}>` : `<t:${e}>`;
}
