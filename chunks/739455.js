n.d(t, { Fx: () => T, JH: () => L, SY: () => m, aV: () => R, fE: () => f, pF: () => I, zu: () => g }),
    n(938796),
    n(321073);
var l = n(64700),
    i = n(975975),
    r = n.n(i),
    a = n(665260),
    s = n(417597),
    o = n(73153),
    d = n(755584),
    u = n(734057),
    c = n(567305),
    p = n(636194),
    h = n(846922),
    E = n(555325),
    _ = n(74399),
    S = n(652215),
    A = n(746080);
r().shim();
let C = {};
function f(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e)),
        n = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        i = (0, s.bG)([p.A], () => p.A.getBenefitChannel(e)),
        r = (0, l.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != i
                    ? t.merge({ name: i.name, flags: a.VL(t.flags, A.lx.OBFUSCATED) })
                    : null,
            [t, i],
        );
    return null == t ? n : t.isObfuscated() ? (r ?? t) : t;
}
function g(e, t, n) {
    let l = (0, s.bG)([p.A], () => p.A.getSubscriptionListingsForGuild(e)),
        i = (0, h.y)((t) => t.editStateIdsForGroup[e]),
        r = (0, h.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let a = l.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = r[e],
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
function N(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        n = h.y.getState().listings,
        l = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && l.add(e.ref_id);
            });
        });
    let i = [];
    for (let t of l) {
        let n = _.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function m(e) {
    let t = N(e);
    (C[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", A.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function T(e) {
    (C[e] ?? N(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function I(e, t) {
    let n = [],
        l = [];
    t.forEach((t) => {
        let i = _.A.getChannel(t.ref_id);
        null != i && (n.push(d.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), l.push(i));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, i) => {
                let r = l[i].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        l = h.y.getState().editStateIdsForGroup[e],
                        i = h.y.getState().listings;
                    null != l &&
                        l.forEach((e) => {
                            let n = i[e]?.channelBenefits;
                            n?.forEach((e) => {
                                e.ref_id === r && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === r);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function L(e, t) {
    let n = h.y.getState().listings[e],
        l = n?.usedTemplate;
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = _.A.getTemplateWithCategory(t, l);
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let r = i.listings[0];
    if (
        n?.name !== r.name ||
        n?.description !== r.description ||
        n?.priceTier !== r.price_tier ||
        n?.image !== r.image ||
        n?.roleColor !== r.role_color ||
        n?.channelBenefits?.length !== r.channels.length ||
        n?.intangibleBenefits?.length !== r.additional_perks.length
    )
        return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < r.channels.length; e++) {
        let t = n.channelBenefits[e],
            l = r.channels[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < r.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            l = r.additional_perks[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: i.category, hasChangeFromTemplate: !1 };
}
function R(e) {
    return (0, E.X9)(e) && e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.TG)(e.id);
}
