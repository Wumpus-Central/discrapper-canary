var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(855986),
    s = n(765178),
    o = n(943654),
    d = n(775602),
    c = n(998304),
    m = n(253400),
    _ = n(988341),
    f = n(873571),
    g = n(97192),
    b = n(193579);
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
                    onStart: y,
                    onEnd: T,
                } = e,
                A = (0, u.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: N, currentTier: h } = (0, f.VR)(t, n),
                E = null != N,
                S = v + x(E),
                [C, k] = r.useState(!1),
                [R, j] = r.useState(!1),
                [U, w] = r.useState(!1),
                [$, O] = r.useState(!1),
                P = p && !A,
                M = R && P && !$,
                H = (0, g.C)((0, f.AO)(t, h, !1)) ?? g.P,
                I = r.useMemo(() => ({ fill: (0, c.E2)(H) }), [H]),
                F = r.useCallback(
                    (e) => {
                        (k(!0), O(e), y?.(e));
                    },
                    [y],
                );
            return (
                r.useEffect(() => {
                    C && s.O.announce((0, _.kD)(t, n), "polite");
                }, [C]),
                r.useEffect(() => {
                    if (!C) return;
                    let e = setTimeout(() => j(!0), $ ? 0 : S);
                    return () => clearTimeout(e);
                }, [$, C, S]),
                r.useEffect(() => {
                    if (!C) return;
                    let e = v + (0, f.ux)(E) + 1500,
                        t = setTimeout(() => w(!0), $ || A ? 0 : e);
                    return () => clearTimeout(t);
                }, [E, $, A, C, v]),
                r.useEffect(() => {
                    U && T?.();
                }, [U]),
                (0, l.jsxs)("div", {
                    className: b.Tl,
                    "aria-hidden": !0,
                    children: [
                        P &&
                            (0, l.jsx)(o.x, {
                                artboard: "Web",
                                autoplay: M,
                                dataBinding: I,
                                className: i()(b.U6, "small" === m && b.Pv, !M && b.qJ),
                            }),
                        (0, l.jsx)(f.Ay, {
                            badge: t,
                            previousTierKey: n,
                            size: m,
                            startDelay: v,
                            canStart: a,
                            onStart: F,
                        }),
                    ],
                })
            );
        },
    },
);
