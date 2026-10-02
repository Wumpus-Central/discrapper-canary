(l.d(t, { UF: () => p, zE: () => j, Zj: () => _.Zj, F6: () => h, T4: () => v }), l(593673));
var n = l(582128),
    i = l(17928),
    a = l(290595),
    s = l(419954),
    r = l(885386),
    d = l(311059),
    c = l(641216),
    o = l(153488),
    u = l(71393),
    m = l(115063),
    x = l(652215);
function h(e, t) {
    let { useTitle: l, useDisabled: n } = t;
    return (0, s.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
        useTitle: l,
        useSubtitle: () => (0, i.bG)([u.A], () => u.A.getGuild(e)?.name),
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
    o.A.fetchedConsents || null != f || (f = (0, a.Q)().then(g, g));
}
function v(e) {
    n.useEffect(j, []);
    let t = r.tz.useSetting(),
        l = !r.JG.useSetting().includes(e),
        { hasFetchedConsents: a, hasPersonalizationConsent: s } = (0, i.cf)([o.A], () => ({
            hasFetchedConsents: o.A.fetchedConsents,
            hasPersonalizationConsent: o.A.hasConsented(x.YAq.PERSONALIZATION),
        }));
    return { isSharingActivity: t, isSharingActivityInGuild: l, hasFetchedConsents: a, hasPersonalizationConsent: s };
}
function p(e) {
    let { guildId: t, useGuildSharingTitle: l } = e;
    return [d._, h(t, { useTitle: l, useDisabled: () => !r.tz.useSetting() }), c._];
}
(l(502901), l(562073), l(299285), l(539888));
var _ = l(851612);
(l(477900), l(661531), l(914173));
