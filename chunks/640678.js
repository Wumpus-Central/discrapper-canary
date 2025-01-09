t.d(n, {
    t: function () {
        return c;
    }
});
var i = t(63568),
    l = t(163400),
    a = t(995532),
    s = t(496675),
    r = t(600553),
    u = t(896007),
    o = t(981631);
let d = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function c(e) {
    let n = s.Z.getGuildPermissionProps(e),
        t = (0, l.p)(e.id).length > 0,
        c = (0, i.K2)(e.id, 'getGuildSettingsSections'),
        g = (0, r.i1)({
            guildId: e.id,
            location: 'getGuildSettingsSections'
        });
    return u.ZP.generateSections({
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: t,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(o.oNc.CLAN),
        welcomeScreenEmpty: a.Z.isEmpty(e.id),
        memberVerificationRolloutEnabled: c,
        isGuildSettingsFoundationEnabled: g
    })
        .filter((e) => {
            let { section: n } = e;
            return n !== d.HEADER && n !== d.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
