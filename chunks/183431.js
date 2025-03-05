n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(168107),
    l = n(480916),
    s = n(81643),
    c = n(388032);
function d(e) {
    let { channelId: t } = e,
        n = (0, s.l6)(),
        d = i.useCallback(() => {
            o.Z.showAgeVerificationGetStartedModal(l.cU.SYSTEM_DM_RETRY_BUTTON), (0, l.Z7)(l.io.RETRY, t);
        }, [t]);
    return (0, r.jsx)(a.zxk, {
        size: a.zxk.Sizes.MEDIUM,
        color: a.zxk.Colors.BRAND,
        onClick: d,
        children: n ? c.NW.string(c.t['+2/AhI']) : c.NW.string(c.t.WiSJBA)
    });
}
