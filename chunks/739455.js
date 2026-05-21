l.d(t, { Fx: () => N, JH: () => S, SY: () => R, aV: () => j, fE: () => x, pF: () => I, zu: () => f }),
    l(938796),
    l(321073);
var i = l(64700),
    r = l(975975),
    a = l.n(r),
    s = l(665260),
    n = l(702841),
    o = l(228366),
    d = l(755584),
    c = l(734057),
    u = l(567305),
    m = l(636194),
    h = l(846922),
    C = l(555325),
    _ = l(74399),
    p = l(652215),
    g = l(746080);
a().shim();
let E = {};
function x(e) {
    let t = (0, n.bG)([c.A], () => c.A.getChannel(e)),
        l = (0, n.bG)([_.A], () => _.A.getChannel(e)),
        r = (0, n.bG)([m.A], () => m.A.getBenefitChannel(e)),
        a = (0, i.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != r
                    ? t.merge({ name: r.name, flags: s.VL(t.flags, g.lx.OBFUSCATED) })
                    : null,
            [t, r],
        );
    return null == t ? l : t.isObfuscated() ? (a ?? t) : t;
}
function f(e, t, l) {
    let i = (0, n.bG)([m.A], () => m.A.getSubscriptionListingsForGuild(e)),
        r = (0, h.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, h.y)((e) => e.listings);
    if (void 0 === l || void 0 === t) return null;
    let s = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== r &&
        r.forEach((e) => {
            let t = a[e],
                l = t?.priceTier;
            null != l && o.push(l);
        });
    let d = new Set(o.concat(s));
    if (!d.has(l)) return null;
    let c = t.indexOf(l);
    if (-1 === c) return null;
    let u = [];
    for (let e = c + 1; e < t.length && (d.has(t[e]) || u.push(t[e]), 3 !== u.length); e++);
    return u;
}
function A(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        l = h.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = l[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let r = [];
    for (let t of i) {
        let l = _.A.getChannel(t);
        if (null != l) {
            let t = l.set("guild_id", e);
            r.push(t);
        }
    }
    return r;
}
function R(e) {
    let t = A(e);
    (E[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", g.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function N(e) {
    (E[e] ?? A(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function I(e, t) {
    let l = [],
        i = [];
    t.forEach((t) => {
        let r = _.A.getChannel(t.ref_id);
        null != r && (l.push(d.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
    }),
        0 === l.length ||
            (await Promise.allSettled(l)).forEach((l, r) => {
                let a = i[r].id;
                if ("fulfilled" === l.status) {
                    let t = l.value.body,
                        i = h.y.getState().editStateIdsForGroup[e],
                        r = h.y.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            let l = r[e]?.channelBenefits;
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
function S(e, t) {
    let l = h.y.getState().listings[e],
        i = l?.usedTemplate;
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let r = _.A.getTemplateWithCategory(t, i);
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = r.listings[0];
    if (
        l?.name !== a.name ||
        l?.description !== a.description ||
        l?.priceTier !== a.price_tier ||
        l?.image !== a.image ||
        l?.roleColor !== a.role_color ||
        l?.channelBenefits?.length !== a.channels.length ||
        l?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = l.channelBenefits[e],
            i = a.channels[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = l.intangibleBenefits[e],
            i = a.additional_perks[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: r.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: r.category, hasChangeFromTemplate: !1 };
}
function j(e) {
    return (0, C.X9)(e) && e.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
}
