n.d(i, { default: () => b });
var a = n(627968),
    e = n(64700),
    r = n(17928),
    l = n(189213),
    s = n(192308),
    o = n(331322),
    c = n(646270),
    d = n(834730),
    u = n(557722),
    h = n(176524),
    p = n(287809),
    m = n(652215),
    x = n(53516),
    g = n(375708),
    S = n(169873);
function b(t) {
    let { onClose: i, transitionState: b } = t,
        v = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        C = v?.phone ?? "",
        y = e.useCallback(() => {
            i(),
                (0, s.openModalLazy)(
                    async () => {
                        let { default: t } = await Promise.resolve().then(n.bind(n, 615715));
                        return (i) => (0, a.jsx)(t, { reason: u.d.USER_SETTINGS_UPDATE, ...i });
                    },
                    { modalKey: x.V },
                );
        }, [i]),
        j = e.useCallback(() => {
            null != v &&
                (i(),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.resolve().then(n.bind(n, 662758));
                    return (i) =>
                        (0, a.jsx)(t, {
                            ...i,
                            title: g.intl.string(g.t["3CTiKi"]),
                            actionText: g.intl.string(g.t.N86XcP),
                            variant: "critical-primary",
                            handleSubmit: (t) => u.A.removePhone(t, u.d.USER_SETTINGS_UPDATE),
                            children: v.hasFlag(m.nhx.MFA_SMS) ? g.intl.string(g.t.jrhJyo) : void 0,
                        });
                }));
        }, [i, v]);
    return (0, a.jsx)(l.Modal, {
        onClose: i,
        title: g.intl.string(g.t.CbdZR3),
        actions: [
            ...(v?.email != null
                ? [{ text: g.intl.string(g.t.N86XcP), onClick: j, variant: "critical-secondary" }]
                : []),
            { text: g.intl.string(g.t.bt75uw), onClick: y, variant: "primary" },
        ],
        transitionState: b,
        children: (0, a.jsxs)(o.B, {
            direction: "horizontal",
            align: "center",
            gap: "md",
            children: [
                (0, a.jsx)(h.A, { Icon: c.u }),
                (0, a.jsx)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: (0, a.jsx)(d.E, {
                        variant: "text-md/normal",
                        className: S.S,
                        children: g.intl.format(g.t.BxZHPD, { phone: C }),
                    }),
                }),
            ],
        }),
    });
}
