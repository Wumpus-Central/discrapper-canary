n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(935649),
    s = n(847599),
    o = n(870383),
    d = n(36149),
    c = n(985018);
function u(e) {
    let { channelId: t } = e,
        n = (0, d.b8)(),
        u = (0, d.i2)(),
        m = (0, o.W)(c.intl.string(c.t.KPGVWl), c.intl.string(c.t["9KiIz6"])),
        _ = c.intl.string(c.t["/nicWo"]),
        h = l.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, s.UT)(s.Im.RETRY, t);
        }, [t]);
    return (0, i.jsx)(a.Button, { variant: "primary", text: n ? m : _, onClick: h, disabled: !u });
}
