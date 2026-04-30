n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(821609),
    a = n(139716),
    r = n(847599),
    o = n(36149),
    d = n(985018);
function c(e) {
    let { channelId: t } = e,
        n = (0, o.b8)(),
        c = (0, o.i2)(),
        u = d.intl.string(d.t["9KiIz6"]),
        m = d.intl.string(d.t["/nicWo"]),
        h = l.useCallback(() => {
            a.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, r.UT)(r.Im.RETRY, t);
        }, [t]);
    return (0, i.jsx)(s.$, { variant: "primary", text: n ? u : m, onClick: h, disabled: !c });
}
