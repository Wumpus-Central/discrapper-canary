var n = l(477900),
    r = l(582128),
    a = l(503698),
    i = l.n(a),
    u = l(855986),
    s = l(765178),
    o = l(943654),
    d = l(775602),
    c = l(998304),
    m = l(253400),
    _ = l(988341),
    f = l(873571),
    g = l(97192),
    b = l(193579);
let p = m.Ay.getEnableHardwareAcceleration();
function x(e) {
    return (0, f.ux)(e) + 1e3;
}
l.d(
    t,
    {},
    {
        $: function (e) {
            let { isLevelUp: t, startDelay: l = 200, isMotionSkipped: n = !1 } = e,
                r = n ? 0 : l + x(t);
            return { "--custom-badge-unlock-reveal": `${r}ms` };
        },
        A: function (e) {
            let {
                    badge: t,
                    previousTierKey: l,
                    canStart: a,
                    size: m = "large",
                    startDelay: v = 200,
                    onStart: y,
                    onEnd: h,
                } = e,
                A = (0, u.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: N, currentTier: T } = (0, f.VR)(t, l),
                E = null != N,
                S = v + x(E),
                [C, k] = r.useState(!1),
                [R, j] = r.useState(!1),
                [w, U] = r.useState(!1),
                [$, P] = r.useState(!1),
                M = p && !A,
                H = R && M && !$,
                O = (0, g.C)((0, f.AO)(t, T, !1)) ?? g.P,
                F = r.useMemo(() => ({ fill: (0, c.E2)(O) }), [O]),
                I = r.useCallback(
                    (e) => {
                        (k(!0), P(e), y?.(e));
                    },
                    [y],
                );
            return (
                r.useEffect(() => {
                    C && s.O.announce((0, _.kD)(t, l), "polite");
                }, [C]),
                r.useEffect(() => {
                    if (!C) return;
                    let e = setTimeout(() => j(!0), $ ? 0 : S);
                    return () => clearTimeout(e);
                }, [$, C, S]),
                r.useEffect(() => {
                    if (!C) return;
                    let e = v + (0, f.ux)(E) + 1500,
                        t = setTimeout(() => U(!0), $ || A ? 0 : e);
                    return () => clearTimeout(t);
                }, [E, $, A, C, v]),
                r.useEffect(() => {
                    w && h?.();
                }, [w]),
                (0, n.jsxs)("div", {
                    className: b.Tl,
                    "aria-hidden": !0,
                    children: [
                        M &&
                            (0, n.jsx)(o.x, {
                                artboard: "Web",
                                autoplay: H,
                                dataBinding: F,
                                className: i()(b.U6, "small" === m && b.Pv, !H && b.qJ),
                            }),
                        (0, n.jsx)(f.Ay, {
                            badge: t,
                            previousTierKey: l,
                            size: m,
                            startDelay: v,
                            canStart: a,
                            onStart: I,
                        }),
                    ],
                })
            );
        },
    },
);
