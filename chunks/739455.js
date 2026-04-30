"use strict";
n.d(t, { Fx: () => N, JH: () => C, SY: () => S, aV: () => v, fE: () => A, pF: () => y, zu: () => I }),
    n(938796),
    n(321073);
var i = n(64700),
    r = n(975975),
    s = n.n(r),
    a = n(665260),
    o = n(702841),
    l = n(228366),
    u = n(755584),
    c = n(734057),
    d = n(567305),
    _ = n(636194),
    f = n(846922),
    h = n(555325),
    p = n(74399),
    E = n(652215),
    m = n(746080);
s().shim();
let g = {};
function A(e) {
    let t = (0, o.bG)([c.A], () => c.A.getChannel(e)),
        n = (0, o.bG)([p.A], () => p.A.getChannel(e)),
        r = (0, o.bG)([_.A], () => _.A.getBenefitChannel(e)),
        s = (0, i.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != r
                    ? t.merge({ name: r.name, flags: a.VL(t.flags, m.lx.OBFUSCATED) })
                    : null,
            [t, r],
        );
    return null == t ? n : t.isObfuscated() ? (s ?? t) : t;
}
function I(e, t, n) {
    let i = (0, o.bG)([_.A], () => _.A.getSubscriptionListingsForGuild(e)),
        r = (0, f.y)((t) => t.editStateIdsForGroup[e]),
        s = (0, f.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let a = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        l = [];
    void 0 !== r &&
        r.forEach((e) => {
            let t = s[e],
                n = t?.priceTier;
            null != n && l.push(n);
        });
    let u = new Set(l.concat(a));
    if (!u.has(n)) return null;
    let c = t.indexOf(n);
    if (-1 === c) return null;
    let d = [];
    for (let e = c + 1; e < t.length && (u.has(t[e]) || d.push(t[e]), 3 !== d.length); e++);
    return d;
}
function T(e) {
    let t = f.y.getState().editStateIdsForGroup[e],
        n = f.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != p.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let r = [];
    for (let t of i) {
        let n = p.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            r.push(t);
        }
    }
    return r;
}
function S(e) {
    let t = T(e);
    (g[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", m.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            l.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function N(e) {
    (g[e] ?? T(e)).forEach((e) => {
        l.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function y(e, t) {
    let n = [],
        i = [];
    t.forEach((t) => {
        let r = p.A.getChannel(t.ref_id);
        null != r && (n.push(u.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, r) => {
                let s = i[r].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        i = f.y.getState().editStateIdsForGroup[e],
                        r = f.y.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            let n = r[e]?.channelBenefits;
                            n?.forEach((e) => {
                                e.ref_id === s && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === s);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function C(e, t) {
    let n = f.y.getState().listings[e],
        i = n?.usedTemplate;
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let r = p.A.getTemplateWithCategory(t, i);
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let s = r.listings[0];
    if (
        n?.name !== s.name ||
        n?.description !== s.description ||
        n?.priceTier !== s.price_tier ||
        n?.image !== s.image ||
        n?.roleColor !== s.role_color ||
        n?.channelBenefits?.length !== s.channels.length ||
        n?.intangibleBenefits?.length !== s.additional_perks.length
    )
        return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < s.channels.length; e++) {
        let t = n.channelBenefits[e],
            i = s.channels[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < s.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            i = s.additional_perks[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: r.category, hasChangeFromTemplate: !1 };
}
function v(e) {
    return (0, h.X9)(e) && e.features.has(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, d.TG)(e.id);
}
