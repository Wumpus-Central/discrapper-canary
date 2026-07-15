"use strict";
n.d(t, { Fx: () => N, JH: () => R, SY: () => S, aV: () => O, fE: () => T, pF: () => C, zu: () => m }),
    n(938796),
    n(321073);
var i = n(64700),
    r = n(975975),
    a = n.n(r),
    s = n(665260),
    l = n(702841),
    o = n(228366),
    d = n(755584),
    c = n(734057),
    u = n(567305),
    _ = n(636194),
    E = n(846922),
    A = n(555325),
    h = n(74399),
    I = n(652215),
    f = n(746080);
a().shim();
let p = {};
function T(e) {
    let t = (0, l.bG)([c.A], () => c.A.getChannel(e)),
        n = (0, l.bG)([h.A], () => h.A.getChannel(e)),
        r = (0, l.bG)([_.A], () => _.A.getBenefitChannel(e)),
        a = (0, i.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != r
                    ? t.merge({ name: r.name, flags: s.VL(t.flags, f.lx.OBFUSCATED) })
                    : null,
            [t, r],
        );
    return null == t ? n : t.isObfuscated() ? (a ?? t) : t;
}
function m(e, t, n) {
    let i = (0, l.bG)([_.A], () => _.A.getSubscriptionListingsForGuild(e)),
        r = (0, E.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, E.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let s = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== r &&
        r.forEach((e) => {
            let t = a[e],
                n = t?.priceTier;
            null != n && o.push(n);
        });
    let d = new Set(o.concat(s));
    if (!d.has(n)) return null;
    let c = t.indexOf(n);
    if (-1 === c) return null;
    let u = [];
    for (let e = c + 1; e < t.length && (d.has(t[e]) || u.push(t[e]), 3 !== u.length); e++);
    return u;
}
function g(e) {
    let t = E.y.getState().editStateIdsForGroup[e],
        n = E.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != h.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let r = [];
    for (let t of i) {
        let n = h.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            r.push(t);
        }
    }
    return r;
}
function S(e) {
    let t = g(e);
    (p[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", f.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function N(e) {
    (p[e] ?? g(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function C(e, t) {
    let n = [],
        i = [];
    t.forEach((t) => {
        let r = h.A.getChannel(t.ref_id);
        null != r && (n.push(d.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, r) => {
                let a = i[r].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        i = E.y.getState().editStateIdsForGroup[e],
                        r = E.y.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            let n = r[e]?.channelBenefits;
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
function R(e, t) {
    let n = E.y.getState().listings[e],
        i = n?.usedTemplate;
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let r = h.A.getTemplateWithCategory(t, i);
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = r.listings[0];
    if (
        n?.name !== a.name ||
        n?.description !== a.description ||
        n?.priceTier !== a.price_tier ||
        n?.image !== a.image ||
        n?.roleColor !== a.role_color ||
        n?.channelBenefits?.length !== a.channels.length ||
        n?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = n.channelBenefits[e],
            i = a.channels[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            i = a.additional_perks[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: r.category, hasChangeFromTemplate: !1 };
}
function O(e) {
    return (0, A.X9)(e) && e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
}
