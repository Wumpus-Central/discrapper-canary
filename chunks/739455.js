(i.d(t, { Fx: () => R, JH: () => N, SY: () => g, aV: () => T, fE: () => A, pF: () => v, zu: () => I }),
    i(938796),
    i(321073));
var l = i(582128),
    n = i(975975),
    a = i.n(n),
    s = i(665260),
    r = i(702841),
    o = i(228366),
    c = i(755584),
    d = i(734057),
    h = i(567305),
    u = i(636194),
    _ = i(846922),
    S = i(555325),
    f = i(74399),
    p = i(652215),
    C = i(746080);
a().shim();
let E = {};
function A(e) {
    let t = (0, r.bG)([d.A], () => d.A.getChannel(e)),
        i = (0, r.bG)([f.A], () => f.A.getChannel(e)),
        n = (0, r.bG)([u.A], () => u.A.getBenefitChannel(e)),
        a = (0, l.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != n
                    ? t.merge({ name: n.name, flags: s.VL(t.flags, C.lx.OBFUSCATED) })
                    : null,
            [t, n],
        );
    return null == t ? i : t.isObfuscated() ? (a ?? t) : t;
}
function I(e, t, i) {
    let l = (0, r.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        n = (0, _.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, _.y)((e) => e.listings);
    if (void 0 === i || void 0 === t) return null;
    let s = l.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== n &&
        n.forEach((e) => {
            let t = a[e],
                i = t?.priceTier;
            null != i && o.push(i);
        });
    let c = new Set(o.concat(s));
    if (!c.has(i)) return null;
    let d = t.indexOf(i);
    if (-1 === d) return null;
    let h = [];
    for (let e = d + 1; e < t.length && (c.has(t[e]) || h.push(t[e]), 3 !== h.length); e++);
    return h;
}
function m(e) {
    let t = _.y.getState().editStateIdsForGroup[e],
        i = _.y.getState().listings,
        l = new Set();
    null != t &&
        t.forEach((e) => {
            let t = i[e]?.channelBenefits;
            t?.forEach((e) => {
                null != f.A.getChannel(e.ref_id) && l.add(e.ref_id);
            });
        });
    let n = [];
    for (let t of l) {
        let i = f.A.getChannel(t);
        if (null != i) {
            let t = i.set("guild_id", e);
            n.push(t);
        }
    }
    return n;
}
function g(e) {
    let t = m(e);
    ((E[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", C.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        }));
}
function R(e) {
    (E[e] ?? m(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function v(e, t) {
    let i = [],
        l = [];
    (t.forEach((t) => {
        let n = f.A.getChannel(t.ref_id);
        null != n && (i.push(c.A.createRoleSubscriptionTemplateChannel(e, n.name, n.type, n.topic)), l.push(n));
    }),
        0 === i.length ||
            (await Promise.allSettled(i)).forEach((i, n) => {
                let a = l[n].id;
                if ("fulfilled" === i.status) {
                    let t = i.value.body,
                        l = _.y.getState().editStateIdsForGroup[e],
                        n = _.y.getState().listings;
                    null != l &&
                        l.forEach((e) => {
                            let i = n[e]?.channelBenefits;
                            i?.forEach((e) => {
                                e.ref_id === a && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === a);
                    -1 !== e && t?.splice(e, 1);
                }
            }));
}
function N(e, t) {
    let i = _.y.getState().listings[e],
        l = i?.usedTemplate;
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let n = f.A.getTemplateWithCategory(t, l);
    if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = n.listings[0];
    if (
        i?.name !== a.name ||
        i?.description !== a.description ||
        i?.priceTier !== a.price_tier ||
        i?.image !== a.image ||
        i?.roleColor !== a.role_color ||
        i?.channelBenefits?.length !== a.channels.length ||
        i?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: n.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = i.channelBenefits[e],
            l = a.channels[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: n.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            l = a.additional_perks[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: n.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: n.category, hasChangeFromTemplate: !1 };
}
function T(e) {
    return (0, S.X9)(e) && e.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, h.TG)(e.id);
}
