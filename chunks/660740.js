e.d(i, { default: () => S });
var n = e(477900),
    a = e(582128),
    l = e(17928),
    r = e(189213),
    s = e(192308),
    o = e(331322),
    c = e(646270),
    d = e(834730),
    u = e(557722),
    h = e(176524),
    p = e(287809),
    m = e(652215),
    x = e(53516),
    b = e(105292),
    g = e(930348);
function S(t) {
    let { onClose: i, transitionState: S } = t,
        y = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        C = y?.phone ?? "",
        v = a.useCallback(() => {
            (i(),
                (0, s.openModalLazy)(
                    async () => {
                        let { default: t } = await Promise.all([
                            e.e("590275"),
                            e.e("766806"),
                            e.e("989545"),
                            e.e("311493"),
                            e.e("84704"),
                            e.e("286197"),
                        ]).then(e.bind(e, 615715));
                        return (i) => (0, n.jsx)(t, { reason: u.d.USER_SETTINGS_UPDATE, ...i });
                    },
                    { modalKey: x.V },
                ));
        }, [i]),
        j = a.useCallback(() => {
            null != y &&
                (i(),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.resolve().then(e.bind(e, 662758));
                    return (i) =>
                        (0, n.jsx)(t, {
                            ...i,
                            title: b.intl.string(b.t["3CTiKi"]),
                            actionText: b.intl.string(b.t.N86XcP),
                            variant: "critical-primary",
                            handleSubmit: (t) => u.A.removePhone(t, u.d.USER_SETTINGS_UPDATE),
                            children: y.hasFlag(m.nhx.MFA_SMS) ? b.intl.string(b.t.jrhJyo) : void 0,
                        });
                }));
        }, [i, y]);
    return (0, n.jsx)(r.a, {
        onClose: i,
        title: b.intl.string(b.t.CbdZR3),
        actions: [
            ...(y?.email != null
                ? [{ text: b.intl.string(b.t.N86XcP), onClick: j, variant: "critical-secondary" }]
                : []),
            { text: b.intl.string(b.t.bt75uw), onClick: v, variant: "primary" },
        ],
        transitionState: S,
        children: (0, n.jsxs)(o.B, {
            direction: "horizontal",
            align: "center",
            gap: "md",
            children: [
                (0, n.jsx)(h.A, { icon: c.u }),
                (0, n.jsx)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: (0, n.jsx)(d.E, {
                        variant: "body-md/normal",
                        className: g.S,
                        children: b.intl.format(b.t.BxZHPD, { phone: C }),
                    }),
                }),
            ],
        }),
    });
}
