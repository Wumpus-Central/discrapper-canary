n.d(t, { Fx: () => T, JH: () => S, SY: () => I, aV: () => R, fE: () => p, pF: () => N, zu: () => x }),
    n(938796),
    n(321073);
var i = n(64700),
    l = n(975975),
    a = n.n(l),
    r = n(665260),
    s = n(417597),
    o = n(73153),
    c = n(755584),
    d = n(734057),
    u = n(567305),
    m = n(636194),
    _ = n(846922),
    A = n(555325),
    f = n(74399),
    h = n(652215),
    g = n(746080);
a().shim();
let E = {};
function p(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        n = (0, s.bG)([f.A], () => f.A.getChannel(e)),
        l = (0, s.bG)([m.A], () => m.A.getBenefitChannel(e)),
        a = (0, i.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != l
                    ? t.merge({ name: l.name, flags: r.VL(t.flags, g.lx.OBFUSCATED) })
                    : null,
            [t, l],
        );
    return null == t ? n : t.isObfuscated() ? (a ?? t) : t;
}
function x(e, t, n) {
    let i = (0, s.bG)([m.A], () => m.A.getSubscriptionListingsForGuild(e)),
        l = (0, _.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, _.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let r = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== l &&
        l.forEach((e) => {
            let t = a[e],
                n = t?.priceTier;
            null != n && o.push(n);
        });
    let c = new Set(o.concat(r));
    if (!c.has(n)) return null;
    let d = t.indexOf(n);
    if (-1 === d) return null;
    let u = [];
    for (let e = d + 1; e < t.length && (c.has(t[e]) || u.push(t[e]), 3 !== u.length); e++);
    return u;
}
function C(e) {
    let t = _.y.getState().editStateIdsForGroup[e],
        n = _.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != f.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let l = [];
    for (let t of i) {
        let n = f.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            l.push(t);
        }
    }
    return l;
}
function I(e) {
    let t = C(e);
    (E[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", g.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function T(e) {
    (E[e] ?? C(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function N(e, t) {
    let n = [],
        i = [];
    t.forEach((t) => {
        let l = f.A.getChannel(t.ref_id);
        null != l && (n.push(c.A.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), i.push(l));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, l) => {
                let a = i[l].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        i = _.y.getState().editStateIdsForGroup[e],
                        l = _.y.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            let n = l[e]?.channelBenefits;
                            n?.forEach((e) => {
                                e.ref_id === a && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === a);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function S(e, t) {
    let n = _.y.getState().listings[e],
        i = n?.usedTemplate;
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let l = f.A.getTemplateWithCategory(t, i);
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = l.listings[0];
    if (
        n?.name !== a.name ||
        n?.description !== a.description ||
        n?.priceTier !== a.price_tier ||
        n?.image !== a.image ||
        n?.roleColor !== a.role_color ||
        n?.channelBenefits?.length !== a.channels.length ||
        n?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = n.channelBenefits[e],
            i = a.channels[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            i = a.additional_perks[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: l.category, hasChangeFromTemplate: !1 };
}
function R(e) {
    return (0, A.X9)(e) && e.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.D3)() && (0, u.TG)(e.id);
}
