(l.d(t, { F6: () => f, T4: () => _, UF: () => A, kG: () => p, zE: () => v }), l(321073));
var n,
    i = l(582128),
    a = l(17928),
    s = l(290595),
    r = l(419954),
    d = l(885386),
    c = l(311059),
    u = l(641216),
    o = l(153488),
    m = l(71393),
    x = l(115063),
    h = l(652215);
function f(e, t) {
    let { useTitle: l, useDisabled: n } = t;
    return (0, r.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
        useTitle: l,
        useSubtitle: () => (0, a.bG)([m.A], () => m.A.getGuild(e)?.name),
        useValue: () => !d.JG.useSetting().includes(e),
        setValue: (t) => {
            let l = (0, x.Kk)();
            (t ? l.delete(e) : l.add(e), d.JG.updateSetting([...l]));
        },
        useDisabled: n,
    });
}
let g = null;
function j() {
    g = null;
}
function v() {
    o.A.fetchedConsents || null != g || (g = (0, s.Q)().then(j, j));
}
var p = (((n = {}).ACTIVITY_SHARING = "activity_sharing"), (n.PERSONALIZATION = "personalization"), (n.ALL = "all"), n);
function _(e) {
    i.useEffect(v, []);
    let t = d.tz.useSetting(),
        l = !d.JG.useSetting().includes(e),
        { hasFetchedConsents: n, hasPersonalizationConsent: s } = (0, a.cf)([o.A], () => ({
            hasFetchedConsents: o.A.fetchedConsents,
            hasPersonalizationConsent: o.A.hasConsented(h.YAq.PERSONALIZATION),
        })),
        r = null,
        c = !t || !l,
        u = !s;
    return (
        c && u ? (r = "all") : c ? (r = "activity_sharing") : u && (r = "personalization"),
        {
            isSharingActivity: t,
            isSharingActivityInGuild: l,
            hasFetchedConsents: n,
            hasPersonalizationConsent: s,
            requirement: r,
        }
    );
}
function A(e) {
    let { guildId: t, useGuildSharingTitle: l, requirement: n } = e,
        i = [];
    return (
        ("activity_sharing" === n || "all" === n) &&
            (i.push(c._), i.push(f(t, { useTitle: l, useDisabled: () => !d.tz.useSetting() }))),
        ("personalization" === n || "all" === n) && i.push(u._),
        i
    );
}
