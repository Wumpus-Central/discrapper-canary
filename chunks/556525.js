n.d(t, { O: () => E, v: () => A });
var i,
    r = n(582128),
    a = n(17928),
    s = n(775602),
    l = n(384077),
    o = n(267102),
    d = n(531685),
    c = n(652215),
    u = n(778712);
function _(e, t) {
    return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
}
var E = (((i = {}).BOTH = "BOTH"), (i.INSET_ONLY = "INSET_ONLY"), (i.OUTSET_ONLY = "OUTSET_ONLY"), i);
function A(e) {
    let {
            voiceStatus: t,
            voiceDb: i,
            spreadDirection: E = "BOTH",
            maxOuterSpreadRadius: A = 3,
            maxInnerSpreadRadius: h = 1,
            hideIfVolumeMissing: f = !1,
        } = e,
        I = n(773371).default,
        p = (0, o.Us)() === c.BRT.OVERLAY,
        {
            shouldReduceMotion: T,
            useForcedColors: m,
            isAppFocusedOrOverlayVisible: g,
        } = (0, a.cf)(
            [s.Ay, d.A, I],
            () => ({
                shouldReduceMotion: s.Ay.useReducedMotion,
                useForcedColors: s.Ay.useForcedColors,
                isAppFocusedOrOverlayVisible: d.A.isAppFocused() || (null != I.getFocusedPID() && (p || !(0, l.z1)())),
            }),
            [I, p],
        );
    return r.useMemo(() => {
        let e = {};
        if (i === -1 / 0 && f) return e;
        if (null != t) {
            let n = 0,
                r = 2,
                a = 3;
            i !== -1 / 0 &&
                !T &&
                g &&
                ((n = "INSET_ONLY" === E ? 0 : _(i, A)),
                (r = "OUTSET_ONLY" === E ? 0 : _(i, h)),
                (a = "OUTSET_ONLY" === E ? 0 : r + 1));
            let s = "var(--status-speaking)";
            (m ? (s = "Highlight") : t === u.T2.PLAYING_SOUNDBOARD && (s = "var(--brand-500)"),
                (e.boxShadow = `0 0 0 ${n}px ${s}, inset 0 0 0 ${r}px ${s}, inset 0 0 0 ${a}px var(--background-base-lower)`));
        }
        return (g && (e.transition = "box-shadow 50ms ease-out"), e);
    }, [t, g, T, m, i, E, A, h, f]);
}
