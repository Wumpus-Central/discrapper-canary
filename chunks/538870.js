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
            isLatched: u,
            voiceDb: d,
            spreadDirection: _ = "BOTH",
            maxOuterSpreadRadius: g = f,
            maxInnerSpreadRadius: E = p,
            hideIfVolumeMissing: b = !1,
        } = e,
        y = n(808506).default,
        {
            shouldReduceMotion: O,
            useForcedColors: v,
            isAppFocusedOrOverlayVisible: S,
        } = (0, i.cj)([a.Z, o.Z, y], () => ({
            shouldReduceMotion: a.Z.useReducedMotion,
            useForcedColors: a.Z.useForcedColors,
            isAppFocusedOrOverlayVisible: o.Z.isAppFocused() || null != y.getFocusedPID(),
        }));
    return r.useMemo(() => {
        let e = {};
        if (d === -1 / 0 && b) return e;
        if (t) {
            let t = s,
                n = l,
                r = c;
            d !== -1 / 0 &&
                !O &&
                S &&
                ((t = "INSET_ONLY" === _ ? 0 : m(d, g)),
                (n = "OUTSET_ONLY" === _ ? 0 : m(d, E)),
                (r = "OUTSET_ONLY" === _ ? 0 : n + 1));
            let i = v ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = [
                "0 0 0 ".concat(t, "px ").concat(i),
                "inset 0 0 0 ".concat(n, "px ").concat(i),
                "inset 0 0 0 ".concat(r, "px var(--background-base-lower)"),
            ].join(", ");
        } else u && (e.boxShadow = h);
        return S && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, u, S, O, v, d, _, g, E, b]);
}
