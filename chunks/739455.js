i.d(t, { Fx: () => g, JH: () => m, SY: () => A, aV: () => O, fE: () => T, pF: () => L, zu: () => N }),
    i(938796),
    i(321073);
var n = i(64700),
    a = i(975975),
    l = i.n(a),
    r = i(665260),
    s = i(702841),
    o = i(228366),
    S = i(755584),
    d = i(734057),
    u = i(567305),
    _ = i(636194),
    c = i(846922),
    p = i(555325),
    h = i(74399),
    E = i(652215),
    C = i(746080);
l().shim();
let I = {};
function T(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        i = (0, s.bG)([h.A], () => h.A.getChannel(e)),
        a = (0, s.bG)([_.A], () => _.A.getBenefitChannel(e)),
        l = (0, n.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != a
                    ? t.merge({ name: a.name, flags: r.VL(t.flags, C.lx.OBFUSCATED) })
                    : null,
            [t, a],
        );
    return null == t ? i : t.isObfuscated() ? (l ?? t) : t;
}
function N(e, t, i) {
    let n = (0, s.bG)([_.A], () => _.A.getSubscriptionListingsForGuild(e)),
        a = (0, c.y)((t) => t.editStateIdsForGroup[e]),
        l = (0, c.y)((e) => e.listings);
    if (void 0 === i || void 0 === t) return null;
    let r = n.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== a &&
        a.forEach((e) => {
            let t = l[e],
                i = t?.priceTier;
            null != i && o.push(i);
        });
    let S = new Set(o.concat(r));
    if (!S.has(i)) return null;
    let d = t.indexOf(i);
    if (-1 === d) return null;
    let u = [];
    for (let e = d + 1; e < t.length && (S.has(t[e]) || u.push(t[e]), 3 !== u.length); e++);
    return u;
}
function f(e) {
    let t = c.y.getState().editStateIdsForGroup[e],
        i = c.y.getState().listings,
        n = new Set();
    null != t &&
        t.forEach((e) => {
            let t = i[e]?.channelBenefits;
            t?.forEach((e) => {
                null != h.A.getChannel(e.ref_id) && n.add(e.ref_id);
            });
        });
    let a = [];
    for (let t of n) {
        let i = h.A.getChannel(t);
        if (null != i) {
            let t = i.set("guild_id", e);
            a.push(t);
        }
    }
    return a;
}
function A(e) {
    let t = f(e);
    (I[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", C.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function g(e) {
    (I[e] ?? f(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function L(e, t) {
    let i = [],
        n = [];
    t.forEach((t) => {
        let a = h.A.getChannel(t.ref_id);
        null != a && (i.push(S.A.createRoleSubscriptionTemplateChannel(e, a.name, a.type, a.topic)), n.push(a));
    }),
        0 === i.length ||
            (await Promise.allSettled(i)).forEach((i, a) => {
                let l = n[a].id;
                if ("fulfilled" === i.status) {
                    let t = i.value.body,
                        n = c.y.getState().editStateIdsForGroup[e],
                        a = c.y.getState().listings;
                    null != n &&
                        n.forEach((e) => {
                            let i = a[e]?.channelBenefits;
                            i?.forEach((e) => {
                                e.ref_id === l && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === l);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function m(e, t) {
    let i = c.y.getState().listings[e],
        n = i?.usedTemplate;
    if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = h.A.getTemplateWithCategory(t, n);
    if (null == a) return { templateCategory: null, hasChangeFromTemplate: null };
    let l = a.listings[0];
    if (
        i?.name !== l.name ||
        i?.description !== l.description ||
        i?.priceTier !== l.price_tier ||
        i?.image !== l.image ||
        i?.roleColor !== l.role_color ||
        i?.channelBenefits?.length !== l.channels.length ||
        i?.intangibleBenefits?.length !== l.additional_perks.length
    )
        return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < l.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = l.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < l.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = l.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: a.category, hasChangeFromTemplate: !1 };
}
function O(e) {
    return (0, p.X9)(e) && e.features.has(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
}
