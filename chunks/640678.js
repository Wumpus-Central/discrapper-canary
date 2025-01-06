t.d(n, {
    t: function () {
        return d;
    }
});
var i = t(63568),
    l = t(163400),
    a = t(995532),
    s = t(496675),
    r = t(896007),
    u = t(981631);
let o = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function d(e) {
    let n = s.Z.getGuildPermissionProps(e),
        t = (0, l.p)(e.id).length > 0,
        d = (0, i.K2)(e.id, 'getGuildSettingsSections');
    return r.ZP.generateSections({
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: t,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(u.oNc.CLAN),
        welcomeScreenEmpty: a.Z.isEmpty(e.id),
        memberVerificationRolloutEnabled: d
    })
        .filter((e) => {
            let { section: n } = e;
            return n !== o.HEADER && n !== o.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
