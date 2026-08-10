l.d(t, { Fx: () => A, JH: () => N, SY: () => I, aV: () => L, fE: () => m, pF: () => T, zu: () => g }),
    l(938796),
    l(321073);
var i = l(582128),
    n = l(975975),
    a = l.n(n),
    r = l(665260),
    s = l(702841),
    o = l(228366),
    c = l(755584),
    d = l(734057),
    h = l(567305),
    u = l(636194),
    f = l(846922),
    p = l(555325),
    S = l(74399),
    _ = l(652215),
    v = l(746080);
a().shim();
let C = {};
function m(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        l = (0, s.bG)([S.A], () => S.A.getChannel(e)),
        n = (0, s.bG)([u.A], () => u.A.getBenefitChannel(e)),
        a = (0, i.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != n
                    ? t.merge({ name: n.name, flags: r.VL(t.flags, v.lx.OBFUSCATED) })
                    : null,
            [t, n],
        );
    return null == t ? l : t.isObfuscated() ? (a ?? t) : t;
}
function g(e, t, l) {
    let i = (0, s.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        n = (0, f.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, f.y)((e) => e.listings);
    if (void 0 === l || void 0 === t) return null;
    let r = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== n &&
        n.forEach((e) => {
            let t = a[e],
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
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = l[e]?.channelBenefits;
            t?.forEach((e) => {
                null != S.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let n = [];
    for (let t of i) {
        let l = S.A.getChannel(t);
        if (null != l) {
            let t = l.set("guild_id", e);
            n.push(t);
        }
    }
    return n;
}
function I(e) {
    let t = E(e);
    (C[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", v.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function A(e) {
    (C[e] ?? E(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function T(e, t) {
    let l = [],
        i = [];
    t.forEach((t) => {
        let n = S.A.getChannel(t.ref_id);
        null != n && (l.push(c.A.createRoleSubscriptionTemplateChannel(e, n.name, n.type, n.topic)), i.push(n));
    }),
        0 === l.length ||
            (await Promise.allSettled(l)).forEach((l, n) => {
                let a = i[n].id;
                if ("fulfilled" === l.status) {
                    let t = l.value.body,
                        i = f.y.getState().editStateIdsForGroup[e],
                        n = f.y.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            let l = n[e]?.channelBenefits;
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
function N(e, t) {
    let l = f.y.getState().listings[e],
        i = l?.usedTemplate;
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let n = S.A.getTemplateWithCategory(t, i);
    if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = n.listings[0];
    if (
        l?.name !== a.name ||
        l?.description !== a.description ||
        l?.priceTier !== a.price_tier ||
        l?.image !== a.image ||
        l?.roleColor !== a.role_color ||
        l?.channelBenefits?.length !== a.channels.length ||
        l?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: n.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = l.channelBenefits[e],
            i = a.channels[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: n.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = l.intangibleBenefits[e],
            i = a.additional_perks[e];
        if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
            return { templateCategory: n.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: n.category, hasChangeFromTemplate: !1 };
}
function L(e) {
    return (0, p.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, h.TG)(e.id);
}
