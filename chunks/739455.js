"use strict";
n.d(t, { Fx: () => T, JH: () => S, SY: () => I, aV: () => v, fE: () => g, pF: () => y, zu: () => E }), n(321073);
var r = n(975975),
    i = n.n(r),
    a = n(417597),
    s = n(73153),
    o = n(755584),
    l = n(734057),
    u = n(567305),
    c = n(636194),
    d = n(846922),
    _ = n(555325),
    f = n(74399),
    p = n(652215),
    h = n(746080);
i().shim();
let m = {};
function g(e) {
    let t = (0, a.bG)([l.A], () => l.A.getChannel(e)),
        n = (0, a.bG)([f.A], () => f.A.getChannel(e));
    return t ?? n;
}
function E(e, t, n) {
    let r = (0, a.bG)([c.A], () => c.A.getSubscriptionListingsForGuild(e)),
        i = (0, d.y)((t) => t.editStateIdsForGroup[e]),
        s = (0, d.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let o = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        l = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = s[e],
                n = t?.priceTier;
            null != n && l.push(n);
        });
    let u = new Set(l.concat(o));
    if (!u.has(n)) return null;
    let _ = t.indexOf(n);
    if (-1 === _) return null;
    let f = [];
    for (let e = _ + 1; e < t.length && (u.has(t[e]) || f.push(t[e]), 3 !== f.length); e++);
    return f;
}
function A(e) {
    let t = d.y.getState().editStateIdsForGroup[e],
        n = d.y.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != f.A.getChannel(e.ref_id) && r.add(e.ref_id);
            });
        });
    let i = [];
    for (let t of r) {
        let n = f.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function I(e) {
    let t = A(e);
    (m[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", h.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            s.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function T(e) {
    (m[e] ?? A(e)).forEach((e) => {
        s.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function y(e, t) {
    let n = [],
        r = [];
    t.forEach((t) => {
        let i = f.A.getChannel(t.ref_id);
        null != i && (n.push(o.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, i) => {
                let a = r[i].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        r = d.y.getState().editStateIdsForGroup[e],
                        i = d.y.getState().listings;
                    null != r &&
                        r.forEach((e) => {
                            let n = i[e]?.channelBenefits;
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
    let n = d.y.getState().listings[e],
        r = n?.usedTemplate;
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = f.A.getTemplateWithCategory(t, r);
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = i.listings[0];
    if (
        n?.name !== a.name ||
        n?.description !== a.description ||
        n?.priceTier !== a.price_tier ||
        n?.image !== a.image ||
        n?.roleColor !== a.role_color ||
        n?.channelBenefits?.length !== a.channels.length ||
        n?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = n.channelBenefits[e],
            r = a.channels[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            r = a.additional_perks[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: i.category, hasChangeFromTemplate: !1 };
}
function v(e) {
    return (0, _.X9)(e) && e.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.D3)() && (0, u.TG)(e.id);
}
