i.d(t, { q: () => c });
var n = i(64700),
    l = i(311907),
    a = i(217238),
    s = i(594792),
    r = i(576705),
    d = i(985018);
let o = { "server-subscriptions-onboarding": s.A, "server-subscriptions-create-tier-from-template": a.A },
    u = {
        title: () => d.intl.string(d.t.V42OaH),
        description: () => d.intl.string(d.t["7dJ16X"]),
        selectGuildCta: () => d.intl.string(d.t.LhlgY9),
        createGuildDescription: () => d.intl.string(d.t.anOisx),
        createGuildCta: () => d.intl.string(d.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.bG)([r.A], () => (e) => r.A.canAccessGuildSettings(e), [], l.My),
    };
function c(e) {
    let [t] = n.useState(null == e ? void 0 : o[e]),
        i = u.useIsGuildSupported(),
        l = t?.useIsGuildSupported?.(),
        a = { ...u, ...(t ?? {}) };
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
