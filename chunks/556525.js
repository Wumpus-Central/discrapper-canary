n.d(t, { O: () => d, v: () => u });
var i,
    l = n(64700),
    a = n(17928),
    r = n(775602),
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
            shouldReduceMotion: A,
            useForcedColors: _,
            isAppFocusedOrOverlayVisible: p,
        } = (0, a.cf)([r.A, s.A, E], () => ({
            shouldReduceMotion: r.A.useReducedMotion,
            useForcedColors: r.A.useForcedColors,
            isAppFocusedOrOverlayVisible: s.A.isAppFocused() || null != E.getFocusedPID(),
        }));
    return l.useMemo(() => {
        let e = {};
        if (i === -1 / 0 && h) return e;
        if (t) {
            let t = 0,
                n = 2,
                l = 3;
            i !== -1 / 0 &&
                !A &&
                p &&
                ((t = "INSET_ONLY" === d ? 0 : o(i, u)),
                (n = "OUTSET_ONLY" === d ? 0 : o(i, c)),
                (l = "OUTSET_ONLY" === d ? 0 : n + 1));
            let a = _ ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${a}, inset 0 0 0 ${n}px ${a}, inset 0 0 0 ${l}px var(--background-base-lower)`;
        }
        return p && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, p, A, _, i, d, u, c, h]);
}
