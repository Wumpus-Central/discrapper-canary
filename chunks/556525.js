n.d(t, { O: () => d, v: () => u });
var i,
    r = n(64700),
    l = n(17928),
    a = n(775602),
    s = n(531685);
function o(e, t) {
    return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
}
var d = (((i = {}).BOTH = "BOTH"), (i.INSET_ONLY = "INSET_ONLY"), (i.OUTSET_ONLY = "OUTSET_ONLY"), i);
function u(e) {
    let {
            isSpeaking: t,
            voiceDb: i,
            spreadDirection: d = "BOTH",
            maxOuterSpreadRadius: u = 3,
            maxInnerSpreadRadius: c = 1,
            hideIfVolumeMissing: h = !1,
        } = e,
        E = n(773371).default,
        {
            shouldReduceMotion: _,
            useForcedColors: p,
            isAppFocusedOrOverlayVisible: A,
        } = (0, l.cf)([a.A, s.A, E], () => ({
            shouldReduceMotion: a.A.useReducedMotion,
            useForcedColors: a.A.useForcedColors,
            isAppFocusedOrOverlayVisible: s.A.isAppFocused() || null != E.getFocusedPID(),
        }));
    return r.useMemo(() => {
        let e = {};
        if (i === -1 / 0 && h) return e;
        if (t) {
            let t = 0,
                n = 2,
                r = 3;
            i !== -1 / 0 &&
                !_ &&
                A &&
                ((t = "INSET_ONLY" === d ? 0 : o(i, u)),
                (n = "OUTSET_ONLY" === d ? 0 : o(i, c)),
                (r = "OUTSET_ONLY" === d ? 0 : n + 1));
            let l = p ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${l}, inset 0 0 0 ${n}px ${l}, inset 0 0 0 ${r}px var(--background-base-lower)`;
        }
        return A && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, A, _, p, i, d, u, c, h]);
}
