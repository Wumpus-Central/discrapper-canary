n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(935649),
    o = n(847599),
    l = n(36149),
    c = n(985018);
function u(e) {
    let { channelId: t } = e,
        n = (0, l.b8)(),
        u = (0, l.i2)(),
        d = i.useCallback(() => {
            s.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, o.UT)(o.Im.RETRY, t);
        }, [t]);
    return (0, r.jsx)(a.Button, {
        variant: "primary",
        text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWo"]),
        onClick: d,
        disabled: !u,
    });
}
