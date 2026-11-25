var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(855986),
    u = n(765178),
    o = n(943654),
    d = n(775602),
    c = n(287809),
    m = n(998304),
    _ = n(253400),
    f = n(988341),
    g = n(861304),
    b = n(873571),
    p = n(97192),
    x = n(193579);
let v = _.Ay.getEnableHardwareAcceleration();
function y(e) {
    return (0, b.ux)(e) + 1e3;
}
n.d(
    t,
    {},
    {
        $: function (e) {
            let { isLevelUp: t, startDelay: n = 200, isMotionSkipped: l = !1 } = e,
                r = l ? 0 : n + y(t);
            return { "--custom-badge-unlock-reveal": `${r}ms` };
        },
        A: function (e) {
            let {
                    badge: t,
                    previousTierKey: n,
                    canStart: a,
                    surface: _,
                    size: S = "large",
                    startDelay: N = 200,
                    onStart: T,
                    onEnd: A,
                } = e,
                h = (0, s.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: E, currentTier: C } = (0, b.VR)(t, n),
                R = null != E,
                k = N + y(R),
                [U, j] = r.useState(!1),
                [w, O] = r.useState(!1),
                [$, M] = r.useState(!1),
                [H, P] = r.useState(!1),
                I = v && !h,
                B = w && I && !H,
                F = (0, p.C)((0, b.AO)(t, C, !1)) ?? p.P,
                L = r.useMemo(() => ({ fill: (0, m.E2)(F) }), [F]),
                q = r.useCallback(
                    (e) => {
                        (j(!0), P(e), T?.(e));
                    },
                    [T],
                );
            return (
                r.useEffect(() => {
                    U &&
                        (u.O.announce((0, f.kD)(t, n), "polite"),
                        (0, g.default)({
                            actionName: "badge_unlock_viewed",
                            badge: t,
                            displayedUserId: c.default.getCurrentUser()?.id,
                            isSociallyNavigated: !1,
                            surface: _,
                        }));
                }, [U]),
                r.useEffect(() => {
                    if (!U) return;
                    let e = setTimeout(() => O(!0), H ? 0 : k);
                    return () => clearTimeout(e);
                }, [H, U, k]),
                r.useEffect(() => {
                    if (!U) return;
                    let e = N + (0, b.ux)(R) + 1500,
                        t = setTimeout(() => M(!0), H || h ? 0 : e);
                    return () => clearTimeout(t);
                }, [R, H, h, U, N]),
                r.useEffect(() => {
                    $ && A?.();
                }, [$]),
                (0, l.jsxs)("div", {
                    className: x.Tl,
                    "aria-hidden": !0,
                    children: [
                        I &&
                            (0, l.jsx)(o.x, {
                                artboard: "Web",
                                autoplay: B,
                                dataBinding: L,
                                className: i()(x.U6, "small" === S && x.Pv, !B && x.qJ),
                            }),
                        (0, l.jsx)(b.Ay, {
                            badge: t,
                            previousTierKey: n,
                            size: S,
                            startDelay: N,
                            canStart: a,
                            onStart: q,
                        }),
                    ],
                })
            );
        },
    },
);
