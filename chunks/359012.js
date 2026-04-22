n.d(e, { default: () => g });
var i = n(627968),
    a = n(64700),
    r = n(311907),
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
    S = n(985018),
    b = n(606513);
function g(t) {
    let { onClose: e, transitionState: g } = t,
        v = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        C = v?.phone ?? "",
        y = a.useCallback(() => {
            e(),
                (0, s.openModalLazy)(
                    async () => {
                        let { default: t } = await Promise.resolve().then(n.bind(n, 615715));
                        return (e) => (0, i.jsx)(t, { reason: u.d.USER_SETTINGS_UPDATE, ...e });
                    },
                    { modalKey: x.V },
                );
        }, [e]),
        _ = a.useCallback(() => {
            null != v &&
                (e(),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.resolve().then(n.bind(n, 662758));
                    return (e) =>
                        (0, i.jsx)(t, {
                            ...e,
                            title: S.intl.string(S.t["3CTiKi"]),
                            actionText: S.intl.string(S.t.N86XcP),
                            variant: "critical-primary",
                            handleSubmit: (t) => u.A.removePhone(t, u.d.USER_SETTINGS_UPDATE),
                            children: v.hasFlag(m.nhx.MFA_SMS) ? S.intl.string(S.t.jrhJyo) : void 0,
                        });
                }));
        }, [e, v]);
    return (0, i.jsx)(l.Modal, {
        onClose: e,
        title: S.intl.string(S.t.CbdZR3),
        actions: [
            ...(v?.email != null
                ? [{ text: S.intl.string(S.t.N86XcP), onClick: _, variant: "critical-secondary" }]
                : []),
            { text: S.intl.string(S.t.bt75uw), onClick: y, variant: "primary" },
        ],
        transitionState: g,
        children: (0, i.jsxs)(o.B, {
            direction: "horizontal",
            align: "center",
            gap: "md",
            children: [
                (0, i.jsx)(h.A, { Icon: c.u }),
                (0, i.jsx)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: (0, i.jsx)(d.E, {
                        variant: "text-md/normal",
                        className: b.S,
                        children: S.intl.format(S.t.BxZHPD, { phone: C }),
                    }),
                }),
            ],
        }),
    });
}
