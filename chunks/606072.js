(l.d(t, { F6: () => g, T4: () => v, UF: () => b, kG: () => _, zE: () => j }), l(321073));
var n,
    i = l(582128),
    s = l(17928),
    a = l(290595),
    r = l(419954),
    d = l(253932),
    c = l(533440),
    o = l(641216),
    u = l(153488),
    m = l(71393),
    x = l(115063),
    f = l(652215);
function g(e, t) {
    let { useTitle: l, useDisabled: n } = t;
    return (0, r.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
        useTitle: l,
        useSubtitle: () => (0, s.bG)([m.A], () => m.A.getGuild(e)?.name),
        useValue: () => !d.JG.useSetting().includes(e),
        setValue: (t) => {
            let l = (0, x.Kk)();
            (t ? l.delete(e) : l.add(e), d.JG.updateSetting([...l]));
        },
        useDisabled: n,
    });
}
let h = null;
function p() {
    h = null;
}
function j() {
    u.A.fetchedConsents || null != h || (h = (0, a.Q)().then(p, p));
}
var _ = (((n = {}).ACTIVITY_SHARING = "activity_sharing"), (n.PERSONALIZATION = "personalization"), (n.ALL = "all"), n);
function v(e) {
    i.useEffect(j, []);
    let t = d.tz.useSetting(),
        l = !d.JG.useSetting().includes(e),
        { hasFetchedConsents: n, hasPersonalizationConsent: a } = (0, s.cf)([u.A], () => ({
            hasFetchedConsents: u.A.fetchedConsents,
            hasPersonalizationConsent: u.A.hasConsented(f.YAq.PERSONALIZATION),
        })),
        r = null,
        c = !t || !l;
    return (
        n && (c && !a ? (r = "all") : c ? (r = "activity_sharing") : a || (r = "personalization")),
        {
            isSharingActivity: t,
            isSharingActivityInGuild: l,
            hasFetchedConsents: n,
            hasPersonalizationConsent: a,
            requirement: r,
        }
    );
}
function b(e) {
    let { guildId: t, useGuildSharingTitle: l, requirement: n } = e,
        i = [];
    return (
        ("activity_sharing" === n || "all" === n) &&
            (i.push(c._), i.push(g(t, { useTitle: l, useDisabled: () => !d.tz.useSetting() }))),
        ("personalization" === n || "all" === n) && i.push(o._),
        i
    );
}
