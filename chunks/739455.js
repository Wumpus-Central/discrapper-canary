l.d(t, { Fx: () => A, JH: () => N, SY: () => I, aV: () => R, fE: () => m, pF: () => T, zu: () => g }),
    l(938796),
    l(321073);
var n = l(582128),
    i = l(975975),
    a = l.n(i),
    r = l(665260),
    s = l(702841),
    o = l(228366),
    c = l(755584),
    d = l(734057),
    u = l(567305),
    h = l(636194),
    f = l(846922),
    p = l(555325),
    _ = l(74399),
    S = l(652215),
    v = l(746080);
a().shim();
let C = {};
function m(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        l = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        i = (0, s.bG)([h.A], () => h.A.getBenefitChannel(e)),
        a = (0, n.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != i
                    ? t.merge({ name: i.name, flags: r.VL(t.flags, v.lx.OBFUSCATED) })
                    : null,
            [t, i],
        );
    return null == t ? l : t.isObfuscated() ? (a ?? t) : t;
}
function g(e, t, l) {
    let n = (0, s.bG)([h.A], () => h.A.getSubscriptionListingsForGuild(e)),
        i = (0, f.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, f.y)((e) => e.listings);
    if (void 0 === l || void 0 === t) return null;
    let r = n.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = a[e],
                l = t?.priceTier;
            null != l && o.push(l);
        });
    let c = new Set(o.concat(r));
    if (!c.has(l)) return null;
    let d = t.indexOf(l);
    if (-1 === d) return null;
    let u = [];
    for (let e = d + 1; e < t.length && (c.has(t[e]) || u.push(t[e]), 3 !== u.length); e++);
    return u;
}
function E(e) {
    let t = f.y.getState().editStateIdsForGroup[e],
        l = f.y.getState().listings,
        n = new Set();
    null != t &&
        t.forEach((e) => {
            let t = l[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && n.add(e.ref_id);
            });
        });
    let i = [];
    for (let t of n) {
        let l = _.A.getChannel(t);
        if (null != l) {
            let t = l.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function I(e) {
    let t = E(e);
    (C[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", v.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function A(e) {
    (C[e] ?? E(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function T(e, t) {
    let l = [],
        n = [];
    t.forEach((t) => {
        let i = _.A.getChannel(t.ref_id);
        null != i && (l.push(c.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), n.push(i));
    }),
        0 === l.length ||
            (await Promise.allSettled(l)).forEach((l, i) => {
                let a = n[i].id;
                if ("fulfilled" === l.status) {
                    let t = l.value.body,
                        n = f.y.getState().editStateIdsForGroup[e],
                        i = f.y.getState().listings;
                    null != n &&
                        n.forEach((e) => {
                            let l = i[e]?.channelBenefits;
                            l?.forEach((e) => {
                                e.ref_id === a && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === a);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function N(e, t) {
    let l = f.y.getState().listings[e],
        n = l?.usedTemplate;
    if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = _.A.getTemplateWithCategory(t, n);
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = i.listings[0];
    if (
        l?.name !== a.name ||
        l?.description !== a.description ||
        l?.priceTier !== a.price_tier ||
        l?.image !== a.image ||
        l?.roleColor !== a.role_color ||
        l?.channelBenefits?.length !== a.channels.length ||
        l?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = l.channelBenefits[e],
            n = a.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = l.intangibleBenefits[e],
            n = a.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: i.category, hasChangeFromTemplate: !1 };
}
function R(e) {
    return (0, p.X9)(e) && e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
}
