t.d(i, { K: () => p }), t(47120);
var n = t(192379),
    l = t(442837),
    s = t(172337),
    d = t(101492),
    r = t(710091),
    u = t(496675),
    a = t(388032);
let o = {
        'server-subscriptions-onboarding': r.Z,
        'server-subscriptions-finish-setting-up': d.Z,
        'server-subscriptions-create-tier-from-template': s.Z
    },
    c = {
        title: () => a.intl.string(a.t.V42OaG),
        description: () => a.intl.string(a.t['7dJ16e']),
        selectGuildCta: () => a.intl.string(a.t.LhlgY2),
        createGuildDescription: () => a.intl.string(a.t.anOis7),
        createGuildCta: () => a.intl.string(a.t.B44MTk),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.e7)([u.Z], () => (e) => u.Z.canAccessGuildSettings(e), [], l.pF)
    };
function p(e) {
    var i;
    let [t] = n.useState(null == e ? void 0 : o[e]),
        l = c.useIsGuildSupported(),
        s = null == t ? void 0 : null === (i = t.useIsGuildSupported) || void 0 === i ? void 0 : i.call(t),
        d = {
            ...c,
            ...(null != t ? t : {})
        };
    return {
        title: d.title(),
        description: d.description(),
        selectGuildCta: d.selectGuildCta(),
        createGuildDescription: d.createGuildDescription(),
        createGuildCta: d.createGuildCta(),
        canCreateGuild: d.canCreateGuild,
        isGuildSupported: (e, i) => l(e, i) && (null == s ? void 0 : s(e, i)) !== !1
    };
}
