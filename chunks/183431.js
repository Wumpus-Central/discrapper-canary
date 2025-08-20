n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(168107),
    a = n(480916),
    s = n(81643),
    c = n(388032);
function u(e) {
    let { channelId: t } = e,
        n = (0, s.l6)(),
        u = (0, s.L5)(),
        d = i.useCallback(() => {
            o.Z.showAgeVerificationGetStartedModal(a.cU.SYSTEM_DM_RETRY_BUTTON), (0, a.Z7)(a.io.RETRY, t);
        }, [t]);
    return (0, r.jsx)(l.zxk, {
        variant: "primary",
        text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWl"]),
        onClick: d,
        disabled: !u,
    });
}
