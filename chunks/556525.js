n.d(t, { O: () => _, v: () => E });
var i,
    r = n(582128),
    a = n(17928),
    s = n(775602),
    l = n(384077),
    o = n(267102),
    d = n(531685),
    c = n(652215);
function u(e, t) {
    return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
}
var _ = (((i = {}).BOTH = "BOTH"), (i.INSET_ONLY = "INSET_ONLY"), (i.OUTSET_ONLY = "OUTSET_ONLY"), i);
function E(e) {
    let {
            isSpeaking: t,
            voiceDb: i,
            spreadDirection: _ = "BOTH",
            maxOuterSpreadRadius: E = 3,
            maxInnerSpreadRadius: A = 1,
            hideIfVolumeMissing: h = !1,
        } = e,
        f = n(773371).default,
        I = (0, o.Us)() === c.BRT.OVERLAY,
        {
            shouldReduceMotion: p,
            useForcedColors: T,
            isAppFocusedOrOverlayVisible: m,
        } = (0, a.cf)(
            [s.Ay, d.A, f],
            () => ({
                shouldReduceMotion: s.Ay.useReducedMotion,
                useForcedColors: s.Ay.useForcedColors,
                isAppFocusedOrOverlayVisible: d.A.isAppFocused() || (null != f.getFocusedPID() && (I || !(0, l.z)())),
            }),
            [f, I],
        );
    return r.useMemo(() => {
        let e = {};
        if (i === -1 / 0 && h) return e;
        if (t) {
            let t = 0,
                n = 2,
                r = 3;
            i !== -1 / 0 &&
                !p &&
                m &&
                ((t = "INSET_ONLY" === _ ? 0 : u(i, E)),
                (n = "OUTSET_ONLY" === _ ? 0 : u(i, A)),
                (r = "OUTSET_ONLY" === _ ? 0 : n + 1));
            let a = T ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${a}, inset 0 0 0 ${n}px ${a}, inset 0 0 0 ${r}px var(--background-base-lower)`;
        }
        return (m && (e.transition = "box-shadow 50ms ease-out"), e);
    }, [t, m, p, T, i, _, E, A, h]);
}
