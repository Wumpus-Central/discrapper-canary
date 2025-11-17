n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(168107),
    s = n(480916),
    l = n(81643),
    c = n(388032);
function u(e) {
    let { channelId: t } = e,
        n = (0, l.l6)(),
        u = (0, l.L5)(),
        d = i.useCallback(() => {
            o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.SYSTEM_DM_RETRY_BUTTON }),
                (0, s.Z7)(s.io.RETRY, t);
        }, [t]);
    return (0, r.jsx)(a.Button, {
        variant: "primary",
        text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWo"]),
        onClick: d,
        disabled: !u,
    });
}
