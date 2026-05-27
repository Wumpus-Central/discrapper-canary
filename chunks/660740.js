i.d(e, { default: () => b });
var n = i(627968),
    a = i(64700),
    l = i(17928),
    r = i(189213),
    s = i(192308),
    o = i(331322),
    c = i(646270),
    d = i(834730),
    u = i(557722),
    h = i(176524),
    p = i(287809),
    m = i(652215),
    x = i(53516),
    g = i(375708),
    S = i(169873);
function b(t) {
    let { onClose: e, transitionState: b } = t,
        C = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        v = C?.phone ?? "",
        y = a.useCallback(() => {
            e(),
                (0, s.openModalLazy)(
                    async () => {
                        let { default: t } = await Promise.all([
                            i.e("1944"),
                            i.e("4782"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (e) => (0, n.jsx)(t, { reason: u.d.USER_SETTINGS_UPDATE, ...e });
                    },
                    { modalKey: x.V },
                );
        }, [e]),
        j = a.useCallback(() => {
            null != C &&
                (e(),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.resolve().then(i.bind(i, 662758));
                    return (e) =>
                        (0, n.jsx)(t, {
                            ...e,
                            title: g.intl.string(g.t["3CTiKi"]),
                            actionText: g.intl.string(g.t.N86XcP),
                            variant: "critical-primary",
                            handleSubmit: (t) => u.A.removePhone(t, u.d.USER_SETTINGS_UPDATE),
                            children: C.hasFlag(m.nhx.MFA_SMS) ? g.intl.string(g.t.jrhJyo) : void 0,
                        });
                }));
        }, [e, C]);
    return (0, n.jsx)(r.Modal, {
        onClose: e,
        title: g.intl.string(g.t.CbdZR3),
        actions: [
            ...(C?.email != null
                ? [{ text: g.intl.string(g.t.N86XcP), onClick: j, variant: "critical-secondary" }]
                : []),
            { text: g.intl.string(g.t.bt75uw), onClick: y, variant: "primary" },
        ],
        transitionState: b,
        children: (0, n.jsxs)(o.B, {
            direction: "horizontal",
            align: "center",
            gap: "md",
            children: [
                (0, n.jsx)(h.A, { Icon: c.u }),
                (0, n.jsx)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: (0, n.jsx)(d.E, {
                        variant: "text-md/normal",
                        className: S.S,
                        children: g.intl.format(g.t.BxZHPD, { phone: v }),
                    }),
                }),
            ],
        }),
    });
}
