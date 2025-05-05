n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(168107),
    o = n(480916),
    s = n(81643),
    c = n(388032);
function u(e) {
    let { channelId: t } = e,
        n = (0, s.l6)(),
        u = (0, s.L5)(),
        d = i.useCallback(() => {
            a.Z.showAgeVerificationGetStartedModal(o.cU.SYSTEM_DM_RETRY_BUTTON), (0, o.Z7)(o.io.RETRY, t);
        }, [t]);
    return (0, r.jsx)(l.zxk, {
        size: l.zxk.Sizes.MEDIUM,
        color: l.zxk.Colors.BRAND,
        onClick: d,
        disabled: !u,
        children: n ? c.intl.string(c.t['+2/AhI']) : c.intl.string(c.t.WiSJBA)
    });
}
