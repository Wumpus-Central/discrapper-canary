var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(855986),
    s = n(765178),
    o = n(943654),
    c = n(775602),
    d = n(998304),
    m = n(253400),
    _ = n(988341),
    f = n(873571),
    g = n(97192),
    p = n(193579);
let b = m.Ay.getEnableHardwareAcceleration();
function x(e) {
    return (0, f.ux)(e) + 1e3;
}
n.d(
    t,
    {},
    {
        $: function (e) {
            let { isLevelUp: t, startDelay: n = 200, isMotionSkipped: r = !1 } = e,
                l = r ? 0 : n + x(t);
            return { "--custom-badge-unlock-reveal": `${l}ms` };
        },
        A: function (e) {
            let {
                    badge: t,
                    previousTierKey: n,
                    canStart: a,
                    size: m = "large",
                    startDelay: y = 200,
                    onStart: v,
                    onEnd: h,
                } = e,
                T = (0, u.bG)([c.Ay], () => c.Ay.useReducedMotion),
                { previousTier: S, currentTier: A } = (0, f.VR)(t, n),
                E = null != S,
                N = y + x(E),
                [C, k] = l.useState(!1),
                [w, R] = l.useState(!1),
                [j, U] = l.useState(!1),
                [$, P] = l.useState(!1),
                H = b && !T,
                O = w && H && !$,
                F = (0, g.C)((0, f.AO)(t, A, !1)) ?? g.P,
                M = l.useMemo(() => ({ fill: (0, d.E2)(F) }), [F]),
                I = l.useCallback(
                    (e) => {
                        (k(!0), P(e), v?.(e));
                    },
                    [v],
                );
            return (
                l.useEffect(() => {
                    C && s.O.announce((0, _.kD)(t, n), "polite");
                }, [C]),
                l.useEffect(() => {
                    if (!C) return;
                    let e = setTimeout(() => R(!0), $ ? 0 : N);
                    return () => clearTimeout(e);
                }, [$, C, N]),
                l.useEffect(() => {
                    if (!C) return;
                    let e = y + (0, f.ux)(E) + 1500,
                        t = setTimeout(() => U(!0), $ || T ? 0 : e);
                    return () => clearTimeout(t);
                }, [E, $, T, C, y]),
                l.useEffect(() => {
                    j && h?.();
                }, [j]),
                (0, r.jsxs)("div", {
                    className: p.Tl,
                    "aria-hidden": !0,
                    children: [
                        H &&
                            (0, r.jsx)(o.x, {
                                artboard: "Web",
                                autoplay: O,
                                dataBinding: M,
                                className: i()(p.U6, "small" === m && p.Pv, !O && p.qJ),
                            }),
                        (0, r.jsx)(f.Ay, {
                            badge: t,
                            previousTierKey: n,
                            size: m,
                            startDelay: y,
                            canStart: a,
                            onStart: I,
                        }),
                    ],
                })
            );
        },
    },
);
