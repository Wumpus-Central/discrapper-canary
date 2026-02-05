i.d(t, { q: () => G });
var n = i(64700),
    l = i(311907),
    a = i(217238),
    s = i(641411),
    r = i(594792),
    d = i(576705),
    o = i(985018);
let u = {
        "server-subscriptions-onboarding": r.A,
        "server-subscriptions-finish-setting-up": s.A,
        "server-subscriptions-create-tier-from-template": a.A,
    },
    c = {
        title: () => o.intl.string(o.t.V42OaH),
        description: () => o.intl.string(o.t["7dJ16X"]),
        selectGuildCta: () => o.intl.string(o.t.LhlgY9),
        createGuildDescription: () => o.intl.string(o.t.anOisx),
        createGuildCta: () => o.intl.string(o.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.bG)([d.A], () => (e) => d.A.canAccessGuildSettings(e), [], l.My),
    };
function G(e) {
    let [t] = n.useState(null == e ? void 0 : u[e]),
        i = c.useIsGuildSupported(),
        l = t?.useIsGuildSupported?.(),
        a = { ...c, ...(t ?? {}) };
    return {
        title: a.title(),
        description: a.description(),
        selectGuildCta: a.selectGuildCta(),
        createGuildDescription: a.createGuildDescription(),
        createGuildCta: a.createGuildCta(),
        canCreateGuild: a.canCreateGuild,
        isGuildSupported: (e, t) => i(e, t) && l?.(e, t) !== !1,
    };
}
