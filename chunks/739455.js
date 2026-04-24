n.d(t, { Fx: () => T, JH: () => I, SY: () => m, aV: () => R, fE: () => f, pF: () => L, zu: () => N }),
    n(938796),
    n(321073);
var r = n(64700),
    l = n(975975),
    i = n.n(l),
    a = n(665260),
    s = n(702841),
    o = n(228366),
    d = n(755584),
    u = n(734057),
    c = n(567305),
    E = n(636194),
    h = n(846922),
    p = n(555325),
    _ = n(74399),
    A = n(652215),
    S = n(746080);
i().shim();
let C = {};
function f(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e)),
        n = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        l = (0, s.bG)([E.A], () => E.A.getBenefitChannel(e)),
        i = (0, r.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != l
                    ? t.merge({ name: l.name, flags: a.VL(t.flags, S.lx.OBFUSCATED) })
                    : null,
            [t, l],
        );
    return null == t ? n : t.isObfuscated() ? (i ?? t) : t;
}
function N(e, t, n) {
    let r = (0, s.bG)([E.A], () => E.A.getSubscriptionListingsForGuild(e)),
        l = (0, h.y)((t) => t.editStateIdsForGroup[e]),
        i = (0, h.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let a = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== l &&
        l.forEach((e) => {
            let t = i[e],
                n = t?.priceTier;
            null != n && o.push(n);
        });
    let d = new Set(o.concat(a));
    if (!d.has(n)) return null;
    let u = t.indexOf(n);
    if (-1 === u) return null;
    let c = [];
    for (let e = u + 1; e < t.length && (d.has(t[e]) || c.push(t[e]), 3 !== c.length); e++);
    return c;
}
function g(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        n = h.y.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && r.add(e.ref_id);
            });
        });
    let l = [];
    for (let t of r) {
        let n = _.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            l.push(t);
        }
    }
    return l;
}
function m(e) {
    let t = g(e);
    (C[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", S.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function T(e) {
    (C[e] ?? g(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function L(e, t) {
    let n = [],
        r = [];
    t.forEach((t) => {
        let l = _.A.getChannel(t.ref_id);
        null != l && (n.push(d.A.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), r.push(l));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, l) => {
                let i = r[l].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        r = h.y.getState().editStateIdsForGroup[e],
                        l = h.y.getState().listings;
                    null != r &&
                        r.forEach((e) => {
                            let n = l[e]?.channelBenefits;
                            n?.forEach((e) => {
                                e.ref_id === i && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === i);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function I(e, t) {
    let n = h.y.getState().listings[e],
        r = n?.usedTemplate;
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let l = _.A.getTemplateWithCategory(t, r);
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = l.listings[0];
    if (
        n?.name !== i.name ||
        n?.description !== i.description ||
        n?.priceTier !== i.price_tier ||
        n?.image !== i.image ||
        n?.roleColor !== i.role_color ||
        n?.channelBenefits?.length !== i.channels.length ||
        n?.intangibleBenefits?.length !== i.additional_perks.length
    )
        return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < i.channels.length; e++) {
        let t = n.channelBenefits[e],
            r = i.channels[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name)
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < i.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            r = i.additional_perks[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name)
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: l.category, hasChangeFromTemplate: !1 };
}
function R(e) {
    return (0, p.X9)(e) && e.features.has(A.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.TG)(e.id);
}
