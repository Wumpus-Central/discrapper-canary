n.d(t, { p: () => c });
var i = n(554146),
    r = n(192308),
    a = n(771781),
    l = n(932001),
    s = n(245853),
    o = n(654487),
    d = n(49999);
function c() {
    let e = (0, r.useHasAnyModalOpen)(),
        t = (0, a.Ay)((e) => e.postConnectionOpen),
        { shouldShowBonusOrbsUX: n, multiplier: c } = (0, s.Dl)(o.rE.NITRO_HOME_TAB),
        [u, A] = (0, l.kn)(!e && n && t ? [i.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP] : [], d.m.PRIVATE_CHANNELS_LIST);
    return {
        shouldShowBonusOrbsUX: u === i.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP,
        dismissOrbMultiplierTabTooltip: A,
        orbMultiplier: c,
    };
}
