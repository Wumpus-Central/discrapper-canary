r.d(t, { Fx: () => T, JH: () => L, SY: () => m, aV: () => R, fE: () => C, pF: () => I, zu: () => g }),
    r(938796),
    r(321073);
var n = r(64700),
    i = r(975975),
    l = r.n(i),
    a = r(665260),
    s = r(417597),
    o = r(73153),
    d = r(755584),
    u = r(734057),
    c = r(567305),
    E = r(636194),
    h = r(846922),
    p = r(555325),
    _ = r(74399),
    S = r(652215),
    A = r(746080);
l().shim();
let f = {};
function C(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e)),
        r = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        i = (0, s.bG)([E.A], () => E.A.getBenefitChannel(e)),
        l = (0, n.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != i
                    ? t.merge({ name: i.name, flags: a.VL(t.flags, A.lx.OBFUSCATED) })
                    : null,
            [t, i],
        );
    return null == t ? r : t.isObfuscated() ? (l ?? t) : t;
}
function g(e, t, r) {
    let n = (0, s.bG)([E.A], () => E.A.getSubscriptionListingsForGuild(e)),
        i = (0, h.y)((t) => t.editStateIdsForGroup[e]),
        l = (0, h.y)((e) => e.listings);
    if (void 0 === r || void 0 === t) return null;
    let a = n.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = l[e],
                r = t?.priceTier;
            null != r && o.push(r);
        });
    let d = new Set(o.concat(a));
    if (!d.has(r)) return null;
    let u = t.indexOf(r);
    if (-1 === u) return null;
    let c = [];
    for (let e = u + 1; e < t.length && (d.has(t[e]) || c.push(t[e]), 3 !== c.length); e++);
    return c;
}
function N(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        r = h.y.getState().listings,
        n = new Set();
    null != t &&
        t.forEach((e) => {
            let t = r[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && n.add(e.ref_id);
            });
        });
    let i = [];
    for (let t of n) {
        let r = _.A.getChannel(t);
        if (null != r) {
            let t = r.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function m(e) {
    let t = N(e);
    (f[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", A.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function T(e) {
    (f[e] ?? N(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function I(e, t) {
    let r = [],
        n = [];
    t.forEach((t) => {
        let i = _.A.getChannel(t.ref_id);
        null != i && (r.push(d.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), n.push(i));
    }),
        0 === r.length ||
            (await Promise.allSettled(r)).forEach((r, i) => {
                let l = n[i].id;
                if ("fulfilled" === r.status) {
                    let t = r.value.body,
                        n = h.y.getState().editStateIdsForGroup[e],
                        i = h.y.getState().listings;
                    null != n &&
                        n.forEach((e) => {
                            let r = i[e]?.channelBenefits;
                            r?.forEach((e) => {
                                e.ref_id === l && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === l);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function L(e, t) {
    let r = h.y.getState().listings[e],
        n = r?.usedTemplate;
    if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = _.A.getTemplateWithCategory(t, n);
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let l = i.listings[0];
    if (
        r?.name !== l.name ||
        r?.description !== l.description ||
        r?.priceTier !== l.price_tier ||
        r?.image !== l.image ||
        r?.roleColor !== l.role_color ||
        r?.channelBenefits?.length !== l.channels.length ||
        r?.intangibleBenefits?.length !== l.additional_perks.length
    )
        return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < l.channels.length; e++) {
        let t = r.channelBenefits[e],
            n = l.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < l.additional_perks.length; e++) {
        let t = r.intangibleBenefits[e],
            n = l.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: i.category, hasChangeFromTemplate: !1 };
}
function R(e) {
    return (0, p.X9)(e) && e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.TG)(e.id);
}
