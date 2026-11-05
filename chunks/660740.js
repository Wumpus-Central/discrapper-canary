var n = e(477900),
    a = e(582128),
    r = e(855986),
    l = e(189213),
    s = e(192308),
    c = e(331322),
    o = e(646270),
    d = e(834730),
    h = e(557722),
    u = e(176524),
    m = e(287809),
    b = e(652215),
    p = e(53516),
    x = e(792996),
    g = e(930348);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { onClose: i, transitionState: S } = t,
                C = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
                v = C?.phone ?? "",
                P = a.useCallback(() => {
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
                                return (i) => (0, n.jsx)(t, { reason: h.d.USER_SETTINGS_UPDATE, ...i });
                            },
                            { modalKey: p.V },
                        ));
                }, [i]),
                j = a.useCallback(() => {
                    null != C &&
                        (i(),
                        (0, s.mM)(async () => {
                            let { default: t } = await Promise.resolve().then(e.bind(e, 662758));
                            return (i) =>
                                (0, n.jsx)(t, {
                                    ...i,
                                    title: x.intl.string(x.t["3CTiKi"]),
                                    actionText: x.intl.string(x.t.N86XcP),
                                    variant: "critical-primary",
                                    handleSubmit: (t) => h.A.removePhone(t, h.d.USER_SETTINGS_UPDATE),
                                    children: C.hasFlag(b.nhx.MFA_SMS) ? x.intl.string(x.t.jrhJyo) : void 0,
                                });
                        }));
                }, [i, C]);
            return (0, n.jsx)(l.a, {
                onClose: i,
                title: x.intl.string(x.t.CbdZR3),
                actions: [
                    ...(C?.email != null
                        ? [{ text: x.intl.string(x.t.N86XcP), onClick: j, variant: "critical-secondary" }]
                        : []),
                    { text: x.intl.string(x.t.bt75uw), onClick: P, variant: "primary" },
                ],
                transitionState: S,
                children: (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "md",
                    children: [
                        (0, n.jsx)(u.A, { icon: o.MobilePhoneIcon }),
                        (0, n.jsx)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            children: (0, n.jsx)(d.E, {
                                variant: "body-md/normal",
                                className: g.S,
                                children: x.intl.format(x.t.BxZHPD, { phone: v }),
                            }),
                        }),
                    ],
                }),
            });
        },
    },
);
