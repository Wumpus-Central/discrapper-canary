a.d(l, { p: () => o });
var t = a(554146),
    s = a(192308),
    i = a(771781),
    n = a(932001),
    c = a(245853),
    h = a(654487),
    r = a(49999);
function o() {
    let e = (0, s.useHasAnyModalOpen)(),
        l = (0, i.Ay)((e) => e.postConnectionOpen),
        { shouldShowBonusOrbsUX: a, multiplier: o } = (0, c.Dl)(h.rE.NITRO_HOME_TAB),
        [d, v] = (0, n.kn)(!e && a && l ? [t.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP] : [], r.m.PRIVATE_CHANNELS_LIST);
    return {
        shouldShowBonusOrbsUX: d === t.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP,
        dismissOrbMultiplierTabTooltip: v,
        orbMultiplier: o,
    };
}
