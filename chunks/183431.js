n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(168107),
    o = n(480916),
    s = n(81643),
    c = n(388032);
function u(e) {
    let { channelId: t } = e,
        n = (0, s.l6)(),
        u = (0, s.L5)(),
        d = i.useCallback(() => {
            l.Z.showAgeVerificationGetStartedModal(o.cU.SYSTEM_DM_RETRY_BUTTON), (0, o.Z7)(o.io.RETRY, t);
        }, [t]);
    return (0, r.jsx)(a.zxk, {
        size: a.zxk.Sizes.MEDIUM,
        color: a.zxk.Colors.BRAND,
        onClick: d,
        disabled: !u,
        children: n ? c.NW.string(c.t['+2/AhI']) : c.NW.string(c.t.WiSJBA)
    });
}
