n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(821609),
    s = n(935649),
    r = n(847599),
    o = n(36149),
    d = n(985018);
function c(e) {
    let { channelId: t } = e,
        n = (0, o.b8)(),
        c = (0, o.i2)(),
        u = d.intl.string(d.t["9KiIz6"]),
        m = d.intl.string(d.t["/nicWo"]),
        _ = l.useCallback(() => {
            s.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, r.UT)(r.Im.RETRY, t);
        }, [t]);
    return (0, i.jsx)(a.$, { variant: "primary", text: n ? u : m, onClick: _, disabled: !c });
}
