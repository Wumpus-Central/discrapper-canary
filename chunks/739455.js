l.d(t, { Fx: () => I, JH: () => N, SY: () => A, aV: () => R, fE: () => m, pF: () => T, zu: () => g }),
    l(938796),
    l(321073);
var a = l(64700),
    i = l(975975),
    n = l.n(i),
    r = l(665260),
    s = l(702841),
    o = l(228366),
    c = l(755584),
    d = l(734057),
    h = l(567305),
    u = l(636194),
    f = l(846922),
    p = l(555325),
    _ = l(74399),
    S = l(652215),
    v = l(746080);
n().shim();
let C = {};
function m(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        l = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        i = (0, s.bG)([u.A], () => u.A.getBenefitChannel(e)),
        n = (0, a.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != i
                    ? t.merge({ name: i.name, flags: r.VL(t.flags, v.lx.OBFUSCATED) })
                    : null,
            [t, i],
        );
    return null == t ? l : t.isObfuscated() ? (n ?? t) : t;
}
function g(e, t, l) {
    let a = (0, s.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        i = (0, f.y)((t) => t.editStateIdsForGroup[e]),
        n = (0, f.y)((e) => e.listings);
    if (void 0 === l || void 0 === t) return null;
    let r = a.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = n[e],
                l = t?.priceTier;
            null != l && o.push(l);
        });
    let c = new Set(o.concat(r));
    if (!c.has(l)) return null;
    let d = t.indexOf(l);
    if (-1 === d) return null;
    let h = [];
    for (let e = d + 1; e < t.length && (c.has(t[e]) || h.push(t[e]), 3 !== h.length); e++);
    return h;
}
function E(e) {
    let t = f.y.getState().editStateIdsForGroup[e],
        l = f.y.getState().listings,
        a = new Set();
    null != t &&
        t.forEach((e) => {
            let t = l[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && a.add(e.ref_id);
            });
        });
    let i = [];
    for (let t of a) {
        let l = _.A.getChannel(t);
        if (null != l) {
            let t = l.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function A(e) {
    let t = E(e);
    (C[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", v.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function I(e) {
    (C[e] ?? E(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function T(e, t) {
    let l = [],
        a = [];
    t.forEach((t) => {
        let i = _.A.getChannel(t.ref_id);
        null != i && (l.push(c.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), a.push(i));
    }),
        0 === l.length ||
            (await Promise.allSettled(l)).forEach((l, i) => {
                let n = a[i].id;
                if ("fulfilled" === l.status) {
                    let t = l.value.body,
                        a = f.y.getState().editStateIdsForGroup[e],
                        i = f.y.getState().listings;
                    null != a &&
                        a.forEach((e) => {
                            let l = i[e]?.channelBenefits;
                            l?.forEach((e) => {
                                e.ref_id === n && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === n);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function N(e, t) {
    let l = f.y.getState().listings[e],
        a = l?.usedTemplate;
    if (null == a) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = _.A.getTemplateWithCategory(t, a);
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let n = i.listings[0];
    if (
        l?.name !== n.name ||
        l?.description !== n.description ||
        l?.priceTier !== n.price_tier ||
        l?.image !== n.image ||
        l?.roleColor !== n.role_color ||
        l?.channelBenefits?.length !== n.channels.length ||
        l?.intangibleBenefits?.length !== n.additional_perks.length
    )
        return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < n.channels.length; e++) {
        let t = l.channelBenefits[e],
            a = n.channels[e];
        if (t.name !== a.name || t.description !== a.description || t.emoji_name !== a.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < n.additional_perks.length; e++) {
        let t = l.intangibleBenefits[e],
            a = n.additional_perks[e];
        if (t.name !== a.name || t.description !== a.description || t.emoji_name !== a.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: i.category, hasChangeFromTemplate: !1 };
}
function R(e) {
    return (0, p.X9)(e) && e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, h.TG)(e.id);
}
