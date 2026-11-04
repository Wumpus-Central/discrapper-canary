var n = e(477900),
    a = e(582128),
    r = e(855986),
    l = e(189213),
    s = e(192308),
    c = e(331322),
    d = e(646270),
    o = e(834730),
    u = e(557722),
    h = e(176524),
    m = e(287809),
    p = e(652215),
    x = e(53516),
    b = e(792996),
    g = e(930348);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { onClose: i, transitionState: S } = t,
                C = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
                v = C?.phone ?? "",
                j = a.useCallback(() => {
                    (i(),
                        (0, s.mM)(
                            async () => {
                                let { default: t } = await Promise.all([
                                    e.e(590275),
                                    e.e(766806),
                                    e.e(989545),
                                    e.e(757786),
                                    e.e(84704),
                                    e.e(286197),
                                ]).then(e.bind(e, 615715));
                                return (i) => (0, n.jsx)(t, { reason: u.d.USER_SETTINGS_UPDATE, ...i });
                            },
                            { modalKey: x.V },
                        ));
                }, [i]),
                k = a.useCallback(() => {
                    null != C &&
                        (i(),
                        (0, s.mM)(async () => {
                            let { default: t } = await Promise.resolve().then(e.bind(e, 662758));
                            return (i) =>
                                (0, n.jsx)(t, {
                                    ...i,
                                    title: b.intl.string(b.t["3CTiKi"]),
                                    actionText: b.intl.string(b.t.N86XcP),
                                    variant: "critical-primary",
                                    handleSubmit: (t) => u.A.removePhone(t, u.d.USER_SETTINGS_UPDATE),
                                    children: C.hasFlag(p.nhx.MFA_SMS) ? b.intl.string(b.t.jrhJyo) : void 0,
                                });
                        }));
                }, [i, C]);
            return (0, n.jsx)(l.a, {
                onClose: i,
                title: b.intl.string(b.t.CbdZR3),
                actions: [
                    ...(C?.email != null
                        ? [{ text: b.intl.string(b.t.N86XcP), onClick: k, variant: "critical-secondary" }]
                        : []),
                    { text: b.intl.string(b.t.bt75uw), onClick: j, variant: "primary" },
                ],
                transitionState: S,
                children: (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "md",
                    children: [
                        (0, n.jsx)(h.A, { icon: d.u }),
                        (0, n.jsx)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            children: (0, n.jsx)(o.E, {
                                variant: "body-md/normal",
                                className: g.S,
                                children: b.intl.format(b.t.BxZHPD, { phone: v }),
                            }),
                        }),
                    ],
                }),
            });
        },
    },
);
