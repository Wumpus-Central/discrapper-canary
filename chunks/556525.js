var i,
    r = n(582128),
    a = n(855986),
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
n.d(
    t,
    {},
    {
        O: E,
        v: function (e) {
            let {
                    voiceStatus: t,
                    voiceDb: i,
                    spreadDirection: E = "BOTH",
                    maxOuterSpreadRadius: A = 3,
                    maxInnerSpreadRadius: f = 1,
                    hideIfVolumeMissing: h = !1,
                } = e,
                I = n(228342).default,
                p = (0, o.Us)() === c.BRT.OVERLAY,
                {
                    shouldReduceMotion: m,
                    useForcedColors: g,
                    isAppFocusedOrOverlayVisible: T,
                } = (0, a.cf)(
                    [s.Ay, d.A, I],
                    () => ({
                        shouldReduceMotion: s.Ay.useReducedMotion,
                        useForcedColors: s.Ay.useForcedColors,
                        isAppFocusedOrOverlayVisible:
                            d.A.isAppFocused() || (null != I.getFocusedPID() && (p || !(0, l.z1)())),
                    }),
                    [I, p],
                );
            return r.useMemo(() => {
                let e = {};
                if (-1 / 0 === i && h) return e;
                if (null != t) {
                    let n = 0,
                        r = 2,
                        a = 3;
                    -1 / 0 !== i &&
                        !m &&
                        T &&
                        ((n = "INSET_ONLY" === E ? 0 : _(i, A)),
                        (r = "OUTSET_ONLY" === E ? 0 : _(i, f)),
                        (a = "OUTSET_ONLY" === E ? 0 : r + 1));
                    let s = "var(--status-speaking)";
                    (g ? (s = "Highlight") : t === u.T2.PLAYING_SOUNDBOARD && (s = "var(--brand-500)"),
                        (e.boxShadow = `0 0 0 ${n}px ${s}, inset 0 0 0 ${r}px ${s}, inset 0 0 0 ${a}px var(--background-base-lower)`));
                }
                return (T && (e.transition = "box-shadow 50ms ease-out"), e);
            }, [t, T, m, g, i, E, A, f, h]);
        },
    },
);
