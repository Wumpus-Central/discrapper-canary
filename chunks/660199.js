n.d(t, {
    Ay: () => u,
    He: () => p,
    K_: () => l,
    Qh: () => s,
    ZB: () => f,
    tC: () => d,
}),
    n(413496),
    n(433524),
    n(35282);
var r = n(913527),
    i = n.n(r),
    a = n(55935),
    o = n(70956);
let s = {
        t: (e) => (0, a.vc)(e, "LT"),
        T: (e) => (0, a.vc)(e, "LTS"),
        d: (e) => (0, a.vc)(e, "L"),
        D: (e) => (0, a.vc)(e, "LL"),
        f: (e) => (0, a.vc)(e, "LLL"),
        F: (e) => (0, a.vc)(e, "LLLL"),
        s: (e) => (0, a.vc)(e, "L LT"),
        S: (e) => (0, a.vc)(e, "L LTS"),
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
                null != a ? a : i()(e.toDate()).fromNow()
            );
        },
    },
    l = "f";
Object.setPrototypeOf(s, null);
let c = Object.keys(s).join("|"),
    u = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(c, "))?>"));
function d(e) {
    let { timestamp: t, format: n } = e,
        r = i()(Number(t) * o.Z.Millis.SECOND);
    if (!r.isValid()) return null;
    let a = null != n ? s[n] : void 0;
    return (
        null == a && (a = s[l]),
        {
            timestamp: t,
            format: n,
            parsed: r,
            full: s.F(r),
            formatted: a(r),
        }
    );
}
function f(e, t) {
    return d({
        timestamp: e,
        format: t,
    });
}
function p(e, t) {
    return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">");
}
