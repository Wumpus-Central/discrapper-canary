i.d(e, { default: () => p });
var n = i(627968),
    a = i(64700),
    r = i(311907),
    l = i(732955),
    s = i(397927),
    c = i(557722),
    o = i(176524),
    d = i(287809),
    u = i(652215),
    h = i(53516),
    m = i(985018),
    x = i(606513);
function p(t) {
    let { onClose: e, transitionState: p } = t,
        S = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        b = S?.phone ?? "",
        g = a.useCallback(() => {
            e(),
                (0, s.mMO)(
                    async () => {
                        let { default: t } = await Promise.resolve().then(i.bind(i, 615715));
                        return (e) => (0, n.jsx)(t, { reason: c.d.USER_SETTINGS_UPDATE, ...e });
                    },
                    { modalKey: h.V },
                );
        }, [e]),
        v = a.useCallback(() => {
            null != S &&
                (e(),
                (0, s.mMO)(async () => {
                    let { default: t } = await Promise.resolve().then(i.bind(i, 662758));
                    return (e) =>
                        (0, n.jsx)(t, {
                            ...e,
                            title: m.intl.string(m.t["3CTiKi"]),
                            actionText: m.intl.string(m.t.N86XcP),
                            variant: "critical-primary",
                            handleSubmit: (t) => c.A.removePhone(t, c.d.USER_SETTINGS_UPDATE),
                            children: S.hasFlag(u.nhx.MFA_SMS) ? m.intl.string(m.t.jrhJyo) : void 0,
                        });
                }));
        }, [e, S]);
    return (0, n.jsx)(l.aFV, {
        onClose: e,
        title: m.intl.string(m.t.CbdZR3),
        actions: [
            ...(S?.email != null
                ? [{ text: m.intl.string(m.t.N86XcP), onClick: v, variant: "critical-secondary" }]
                : []),
            { text: m.intl.string(m.t.bt75uw), onClick: g, variant: "primary" },
        ],
        transitionState: p,
        children: (0, n.jsxs)(s.BJc, {
            direction: "horizontal",
            align: "center",
            gap: "md",
            children: [
                (0, n.jsx)(o.A, { Icon: s.u6o }),
                (0, n.jsx)(s.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: x.S,
                        children: m.intl.format(m.t.BxZHPD, { phone: b }),
                    }),
                }),
            ],
        }),
    });
}
