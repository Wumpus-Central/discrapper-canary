var a = n(477900),
    i = n(582128),
    l = n(284009),
    r = n.n(l),
    s = n(855986),
    c = n(189213),
    u = n(192308),
    d = n(834730),
    o = n(940856),
    m = n(287809),
    k = n(792996),
    p = n(446244);
n.d(
    t,
    {},
    {
        default: function (e) {
            let { onClose: t, transitionState: l } = e,
                C = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
                [b, f] = i.useState(!1),
                g = i.useCallback(() => (t?.(), Promise.resolve()), [t]),
                h = i.useCallback(() => {
                    (t?.(),
                        (0, u.mM)(async () => {
                            let { default: e } = await Promise.all([
                                n.e(311913),
                                n.e(279385),
                                n.e(144909),
                                n.e(474172),
                                n.e(454048),
                                n.e(188941),
                                n.e(55348),
                                n.e(932606),
                                n.e(420577),
                                n.e(647999),
                                n.e(553207),
                            ]).then(n.bind(n, 162282));
                            return (t) => (0, a.jsx)(e, { ...t });
                        }));
                }, [t]),
                v = i.useCallback(() => {
                    (t?.(),
                        r()(null != C, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                        f(!0),
                        (0, o.S)(C).finally(() => f(!1)));
                }, [C, t]),
                x = i.useMemo(
                    () =>
                        C?.email == null
                            ? [{ text: k.intl.string(k.t.ydw5nX), onClick: h, variant: "primary" }]
                            : [
                                  { text: k.intl.string(k.t.Vm8akB), onClick: h, variant: "secondary" },
                                  { text: k.intl.string(k.t.lm1UKt), onClick: v, variant: "primary", loading: b },
                              ],
                    [C, h, v, b],
                );
            return (0, a.jsxs)(c.a, {
                title: k.intl.string(k.t.UZLrY1),
                transitionState: l,
                onClose: g,
                actions: x,
                children: [
                    (0, a.jsx)("div", { className: p.p }),
                    (0, a.jsx)(d.E, {
                        variant: "body-md/normal",
                        className: p.i,
                        children: k.intl.string(k.t["0LgOKH"]),
                    }),
                ],
            });
        },
    },
);
