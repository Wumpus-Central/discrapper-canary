l.d(t, { F6: () => h, T4: () => v, UF: () => p, zE: () => j });
var n = l(582128),
    i = l(17928),
    s = l(290595),
    a = l(419954),
    r = l(885386),
    d = l(311059),
    c = l(641216),
    u = l(153488),
    o = l(71393),
    m = l(115063),
    x = l(652215);
function h(e, t) {
    let { useTitle: l, useDisabled: n } = t;
    return (0, a.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
        useTitle: l,
        useSubtitle: () => (0, i.bG)([o.A], () => o.A.getGuild(e)?.name),
        useValue: () => !r.JG.useSetting().includes(e),
        setValue: (t) => {
            let l = (0, m.Kk)();
            (t ? l.delete(e) : l.add(e), r.JG.updateSetting([...l]));
        },
        useDisabled: n,
    });
}
let f = null;
function g() {
    f = null;
}
function j() {
    u.A.fetchedConsents || null != f || (f = (0, s.Q)().then(g, g));
}
function v(e) {
    n.useEffect(j, []);
    let t = r.tz.useSetting(),
        l = !r.JG.useSetting().includes(e),
        { hasFetchedConsents: s, hasPersonalizationConsent: a } = (0, i.cf)([u.A], () => ({
            hasFetchedConsents: u.A.fetchedConsents,
            hasPersonalizationConsent: u.A.hasConsented(x.YAq.PERSONALIZATION),
        }));
    return { isSharingActivity: t, isSharingActivityInGuild: l, hasFetchedConsents: s, hasPersonalizationConsent: a };
}
function p(e) {
    let { guildId: t, useGuildSharingTitle: l } = e;
    return [d._, h(t, { useTitle: l, useDisabled: () => !r.tz.useSetting() }), c._];
}
