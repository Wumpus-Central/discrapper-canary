l(321073);
var n,
    i = l(582128),
    s = l(855986),
    a = l(290595),
    r = l(419954),
    d = l(253932),
    o = l(533440),
    c = l(641216),
    u = l(153488),
    m = l(71393),
    h = l(115063),
    f = l(652215);
function x(e, t) {
    let { useTitle: l, useDisabled: n } = t;
    return (0, r.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
        useTitle: l,
        useSubtitle: () => (0, s.bG)([m.A], () => m.A.getGuild(e)?.name),
        useValue: () => !d.JG.useSetting().includes(e),
        setValue: (t) => {
            let l = (0, h.Kk)();
            (t ? l.delete(e) : l.add(e), d.JG.updateSetting([...l]));
        },
        useDisabled: n,
    });
}
let g = null;
function p() {
    g = null;
}
function j() {
    u.A.fetchedConsents || null != g || (g = (0, a.Q)().then(p, p));
}
var v = (((n = {}).ACTIVITY_SHARING = "activity_sharing"), (n.PERSONALIZATION = "personalization"), (n.ALL = "all"), n);
l.d(
    t,
    {},
    {
        F6: x,
        T4: function (e) {
            i.useEffect(j, []);
            let t = d.tz.useSetting(),
                l = !d.JG.useSetting().includes(e),
                { hasFetchedConsents: n, hasPersonalizationConsent: a } = (0, s.cf)([u.A], () => ({
                    hasFetchedConsents: u.A.fetchedConsents,
                    hasPersonalizationConsent: u.A.hasConsented(f.YAq.PERSONALIZATION),
                })),
                r = null,
                o = !t || !l;
            return (
                n && (o && !a ? (r = "all") : o ? (r = "activity_sharing") : a || (r = "personalization")),
                {
                    isSharingActivity: t,
                    isSharingActivityInGuild: l,
                    hasFetchedConsents: n,
                    hasPersonalizationConsent: a,
                    requirement: r,
                }
            );
        },
        UF: function (e) {
            let { guildId: t, useGuildSharingTitle: l, requirement: n } = e,
                i = [];
            return (
                ("activity_sharing" === n || "all" === n) &&
                    (i.push(o._), i.push(x(t, { useTitle: l, useDisabled: () => !d.tz.useSetting() }))),
                ("personalization" === n || "all" === n) && i.push(c._),
                i
            );
        },
        kG: v,
        zE: j,
    },
);
