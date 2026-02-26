n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(935649),
    s = n(847599),
    o = n(36149),
    d = n(985018);
function c(e) {
    let { channelId: t } = e,
        n = (0, o.b8)(),
        c = (0, o.i2)(),
        u = d.intl.string(d.t["9KiIz6"]),
        _ = d.intl.string(d.t["/nicWo"]),
        m = l.useCallback(() => {
            a.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, s.UT)(s.Im.RETRY, t);
        }, [t]);
    return (0, i.jsx)(r.Button, { variant: "primary", text: n ? u : _, onClick: m, disabled: !c });
}
