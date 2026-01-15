n.d(t, {
    _: () => E,
    h: () => g,
});
var r = n(473749),
    i = n(442837),
    a = n(607070),
    o = n(451478);
let s = 0,
    l = 2,
    c = 3,
    u = 0.03,
    d = -45,
    f = 3,
    p = 1,
    _ = 0.5,
    h = "inset 0 0 0 2px var(--yellow-360), inset 0 0 0 3px var(--background-base-lower)";
function m(e, t) {
    return _ + (t - _) / (1 + Math.exp(-u * (e - d)));
}
var g = (function (e) {
    return (e.BOTH = "BOTH"), (e.INSET_ONLY = "INSET_ONLY"), (e.OUTSET_ONLY = "OUTSET_ONLY"), e;
})({});
function E(e) {
    let {
            isSpeaking: t,
            isLatched: n,
            voiceDb: u,
            spreadDirection: d = "BOTH",
            maxOuterSpreadRadius: _ = f,
            maxInnerSpreadRadius: g = p,
            hideIfVolumeMissing: E = !1,
        } = e,
        { shouldReduceMotion: b, isAppFocused: y } = (0, i.cj)([a.Z, o.Z], () => ({
            shouldReduceMotion: a.Z.useReducedMotion,
            isAppFocused: o.Z.isAppFocused(),
        }));
    return r.useMemo(() => {
        let e = {};
        if (u === -1 / 0 && E) return e;
        if (t) {
            let t = s,
                n = l,
                r = c;
            u !== -1 / 0 &&
                !b &&
                y &&
                ((t = "INSET_ONLY" === d ? 0 : m(u, _)),
                (n = "OUTSET_ONLY" === d ? 0 : m(u, g)),
                (r = "OUTSET_ONLY" === d ? 0 : n + 1)),
                (e.boxShadow = [
                    "0 0 0 ".concat(t, "px var(--status-speaking)"),
                    "inset 0 0 0 ".concat(n, "px var(--status-speaking)"),
                    "inset 0 0 0 ".concat(r, "px var(--background-base-lower)"),
                ].join(", "));
        } else n && (e.boxShadow = h);
        return y && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, n, y, b, u, d, _, g, E]);
}
