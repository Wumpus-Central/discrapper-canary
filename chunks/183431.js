n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    o = n(481060),
    a = n(168107),
    s = n(480916),
    l = n(81643),
    c = n(388032);
function u(e) {
    let { channelId: t } = e,
        n = (0, l.l6)(),
        u = (0, l.L5)(),
        d = i.useCallback(() => {
            a.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.SYSTEM_DM_RETRY_BUTTON }),
                (0, s.Z7)(s.io.RETRY, t);
        }, [t]);
    return (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWl"]),
        onClick: d,
        disabled: !u,
    });
}
