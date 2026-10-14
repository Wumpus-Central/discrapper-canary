(n.d(t, { F6: () => f, T4: () => _, UF: () => A, kG: () => v, zE: () => p }), n(321073));
var l,
    i = n(582128),
    a = n(17928),
    s = n(290595),
    r = n(419954),
    d = n(885386),
    c = n(311059),
    o = n(641216),
    u = n(153488),
    m = n(71393),
    x = n(115063),
    h = n(652215);
function f(e, t) {
    let { useTitle: n, useDisabled: l } = t;
    return (0, r.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
        useTitle: n,
        useSubtitle: () => (0, a.bG)([m.A], () => m.A.getGuild(e)?.name),
        useValue: () => !d.JG.useSetting().includes(e),
        setValue: (t) => {
            let n = (0, x.Kk)();
            (t ? n.delete(e) : n.add(e), d.JG.updateSetting([...n]));
        },
        useDisabled: l,
    });
}
let g = null;
function j() {
    g = null;
}
function p() {
    u.A.fetchedConsents || null != g || (g = (0, s.Q)().then(j, j));
}
var v = (((l = {}).ACTIVITY_SHARING = "activity_sharing"), (l.PERSONALIZATION = "personalization"), (l.ALL = "all"), l);
function _(e) {
    i.useEffect(p, []);
    let t = d.tz.useSetting(),
        n = !d.JG.useSetting().includes(e),
        { hasFetchedConsents: l, hasPersonalizationConsent: s } = (0, a.cf)([u.A], () => ({
            hasFetchedConsents: u.A.fetchedConsents,
            hasPersonalizationConsent: u.A.hasConsented(h.YAq.PERSONALIZATION),
        })),
        r = null,
        c = !t || !n,
        o = !s;
    return (
        c && o ? (r = "all") : c ? (r = "activity_sharing") : o && (r = "personalization"),
        {
            isSharingActivity: t,
            isSharingActivityInGuild: n,
            hasFetchedConsents: l,
            hasPersonalizationConsent: s,
            requirement: r,
        }
    );
}
function A(e) {
    let { guildId: t, useGuildSharingTitle: n, requirement: l } = e,
        i = [];
    return (
        ("activity_sharing" === l || "all" === l) &&
            (i.push(c._), i.push(f(t, { useTitle: n, useDisabled: () => !d.tz.useSetting() }))),
        ("personalization" === l || "all" === l) && i.push(o._),
        i
    );
}
