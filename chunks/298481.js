n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(821609),
    r = n(139716),
    s = n(847599),
    o = n(36149),
    c = n(985018);
function d(e) {
    let { channelId: t } = e,
        n = (0, o.b8)(),
        d = (0, o.i2)(),
        u = c.intl.string(c.t["9KiIz6"]),
        _ = c.intl.string(c.t["/nicWo"]),
        m = l.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, s.UT)(s.Im.RETRY, t);
        }, [t]);
    return (0, i.jsx)(a.$, { variant: "primary", text: n ? u : _, onClick: m, disabled: !d });
}
