var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(855986),
    u = n(765178),
    o = n(943654),
    d = n(775602),
    c = n(998304),
    m = n(253400),
    _ = n(988341),
    f = n(873571),
    b = n(97192),
    g = n(193579);
let p = m.Ay.getEnableHardwareAcceleration();
function x(e) {
    return (0, f.ux)(e) + 1e3;
}
n.d(
    t,
    {},
    {
        $: function (e) {
            let { isLevelUp: t, startDelay: n = 200, isMotionSkipped: l = !1 } = e,
                r = l ? 0 : n + x(t);
            return { "--custom-badge-unlock-reveal": `${r}ms` };
        },
        A: function (e) {
            let {
                    badge: t,
                    previousTierKey: n,
                    canStart: a,
                    size: m = "large",
                    startDelay: v = 200,
                    onStart: S,
                    onEnd: y,
                } = e,
                T = (0, s.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: A, currentTier: N } = (0, f.VR)(t, n),
                h = null != A,
                E = v + x(h),
                [C, R] = r.useState(!1),
                [k, U] = r.useState(!1),
                [j, w] = r.useState(!1),
                [O, $] = r.useState(!1),
                M = p && !T,
                H = k && M && !O,
                P = (0, b.C)((0, f.AO)(t, N, !1)) ?? b.P,
                B = r.useMemo(() => ({ fill: (0, c.E2)(P) }), [P]),
                I = r.useCallback(
                    (e) => {
                        (R(!0), $(e), S?.(e));
                    },
                    [S],
                );
            return (
                r.useEffect(() => {
                    C && u.O.announce((0, _.kD)(t, n), "polite");
                }, [C]),
                r.useEffect(() => {
                    if (!C) return;
                    let e = setTimeout(() => U(!0), O ? 0 : E);
                    return () => clearTimeout(e);
                }, [O, C, E]),
                r.useEffect(() => {
                    if (!C) return;
                    let e = v + (0, f.ux)(h) + 1500,
                        t = setTimeout(() => w(!0), O || T ? 0 : e);
                    return () => clearTimeout(t);
                }, [h, O, T, C, v]),
                r.useEffect(() => {
                    j && y?.();
                }, [j]),
                (0, l.jsxs)("div", {
                    className: g.Tl,
                    "aria-hidden": !0,
                    children: [
                        M &&
                            (0, l.jsx)(o.x, {
                                artboard: "Web",
                                autoplay: H,
                                dataBinding: B,
                                className: i()(g.U6, "small" === m && g.Pv, !H && g.qJ),
                            }),
                        (0, l.jsx)(f.Ay, {
                            badge: t,
                            previousTierKey: n,
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
