(l.d(t, { Fx: () => v, JH: () => T, SY: () => R, aV: () => m, fE: () => I, pF: () => N, zu: () => A }),
    l(938796),
    l(321073));
var i = l(582128),
    a = l(975975),
    n = l.n(a),
    s = l(665260),
    r = l(702841),
    c = l(228366),
    h = l(755584),
    d = l(734057),
    o = l(567305),
    _ = l(636194),
    u = l(846922),
    S = l(555325),
    p = l(74399),
    C = l(652215),
    E = l(746080);
n().shim();
let f = {};
function I(e) {
    let t = (0, r.bG)([d.A], () => d.A.getChannel(e)),
        l = (0, r.bG)([p.A], () => p.A.getChannel(e)),
        a = (0, r.bG)([_.A], () => _.A.getBenefitChannel(e)),
        n = (0, i.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != a
                    ? t.merge({ name: a.name, flags: s.VL(t.flags, E.lx.OBFUSCATED) })
                    : null,
            [t, a],
        );
    return null == t ? l : t.isObfuscated() ? (n ?? t) : t;
}
function A(e, t, l) {
    let i = (0, r.bG)([_.A], () => _.A.getSubscriptionListingsForGuild(e)),
        a = (0, u.y)((t) => t.editStateIdsForGroup[e]),
        n = (0, u.y)((e) => e.listings);
    if (void 0 === l || void 0 === t) return null;
    let s = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        c = [];
    void 0 !== a &&
        a.forEach((e) => {
            let t = n[e],
                l = t?.priceTier;
            null != l && c.push(l);
        });
    let h = new Set(c.concat(s));
    if (!h.has(l)) return null;
    let d = t.indexOf(l);
    if (-1 === d) return null;
    let o = [];
    for (let e = d + 1; e < t.length && (h.has(t[e]) || o.push(t[e]), 3 !== o.length); e++);
    return o;
}
function g(e) {
    let t = u.y.getState().editStateIdsForGroup[e],
        l = u.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = l[e]?.channelBenefits;
            t?.forEach((e) => {
                null != p.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let a = [];
    for (let t of i) {
        let l = p.A.getChannel(t);
        if (null != l) {
            let t = l.set("guild_id", e);
            a.push(t);
        }
    }
    return a;
}
function R(e) {
    let t = g(e);
    ((f[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", E.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            c.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        }));
}
function v(e) {
    (f[e] ?? g(e)).forEach((e) => {
        c.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function N(e, t) {
    let l = [],
        i = [];
    (t.forEach((t) => {
        let a = p.A.getChannel(t.ref_id);
        null != a && (l.push(h.A.createRoleSubscriptionTemplateChannel(e, a.name, a.type, a.topic)), i.push(a));
    }),
        0 === l.length ||
            (await Promise.allSettled(l)).forEach((l, a) => {
                let n = i[a].id;
                if ("fulfilled" === l.status) {
                    let t = l.value.body,
                        i = u.y.getState().editStateIdsForGroup[e],
                        a = u.y.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            let l = a[e]?.channelBenefits;
                            l?.forEach((e) => {
                                e.ref_id === n && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === n);
                    -1 !== e && t?.splice(e, 1);
                }
            }));
}
function T(e, t) {
    let l = u.y.getState().listings[e],
        i = l?.usedTemplate;
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = p.A.getTemplateWithCategory(t, i);
    if (null == a) return { templateCategory: null, hasChangeFromTemplate: null };
    let n = a.listings[0];
    if (
        l?.name !== n.name ||
        l?.description !== n.description ||
        l?.priceTier !== n.price_tier ||
        l?.image !== n.image ||
        l?.roleColor !== n.role_color ||
        l?.channelBenefits?.length !== n.channels.length ||
        l?.intangibleBenefits?.length !== n.additional_perks.length
    )
        return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < n.channels.length; e++) {
        let t = l.channelBenefits[e],
            i = n.channels[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < n.additional_perks.length; e++) {
        let t = l.intangibleBenefits[e],
            i = n.additional_perks[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: a.category, hasChangeFromTemplate: !1 };
}
function m(e) {
    return (0, S.X9)(e) && e.features.has(C.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, o.TG)(e.id);
}
