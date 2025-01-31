n.d(t, { t: () => o });
var i = n(63568),
    l = n(163400),
    s = n(995532),
    a = n(496675),
    r = n(600553),
    d = n(896007),
    u = n(981631);
let c = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function o(e) {
    let t = a.Z.getGuildPermissionProps(e),
        n = (0, l.p)(e.id).length > 0,
        o = (0, i.K2)(e.id, 'getGuildSettingsSections'),
        g = (0, r.i1)({
            guildId: e.id,
            location: 'getGuildSettingsSections'
        });
    return d.ZP.generateSections({
        showDirtyGuildTemplateIndicator: !1,
        ...t,
        canUnlinkChannels: n,
        canAccessClanSettings: t.isGuildAdmin && e.hasFeature(u.oNc.CLAN),
        welcomeScreenEmpty: s.Z.isEmpty(e.id),
        memberVerificationRolloutEnabled: o,
        isGuildSettingsFoundationEnabled: g
    })
        .filter((e) => {
            let { section: t } = e;
            return t !== c.HEADER && t !== c.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
