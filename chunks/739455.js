n.d(t, { Fx: () => T, JH: () => I, SY: () => N, aV: () => O, fE: () => A, pF: () => L, zu: () => C }),
    n(938796),
    n(321073);
var l = n(64700),
    i = n(975975),
    a = n.n(i),
    r = n(665260),
    s = n(702841),
    o = n(228366),
    u = n(755584),
    d = n(734057),
    c = n(567305),
    h = n(636194),
    E = n(846922),
    S = n(555325),
    f = n(74399),
    _ = n(652215),
    p = n(746080);
a().shim();
let g = {};
function A(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        n = (0, s.bG)([f.A], () => f.A.getChannel(e)),
        i = (0, s.bG)([h.A], () => h.A.getBenefitChannel(e)),
        a = (0, l.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != i
                    ? t.merge({ name: i.name, flags: r.VL(t.flags, p.lx.OBFUSCATED) })
                    : null,
            [t, i],
        );
    return null == t ? n : t.isObfuscated() ? (a ?? t) : t;
}
function C(e, t, n) {
    let l = (0, s.bG)([h.A], () => h.A.getSubscriptionListingsForGuild(e)),
        i = (0, E.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, E.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let r = l.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = a[e],
                n = t?.priceTier;
            null != n && o.push(n);
        });
    let u = new Set(o.concat(r));
    if (!u.has(n)) return null;
    let d = t.indexOf(n);
    if (-1 === d) return null;
    let c = [];
    for (let e = d + 1; e < t.length && (u.has(t[e]) || c.push(t[e]), 3 !== c.length); e++);
    return c;
}
function m(e) {
    let t = E.y.getState().editStateIdsForGroup[e],
        n = E.y.getState().listings,
        l = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != f.A.getChannel(e.ref_id) && l.add(e.ref_id);
            });
        });
    let i = [];
    for (let t of l) {
        let n = f.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function N(e) {
    let t = m(e);
    (g[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", p.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function T(e) {
    (g[e] ?? m(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function L(e, t) {
    let n = [],
        l = [];
    t.forEach((t) => {
        let i = f.A.getChannel(t.ref_id);
        null != i && (n.push(u.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), l.push(i));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, i) => {
                let a = l[i].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        l = E.y.getState().editStateIdsForGroup[e],
                        i = E.y.getState().listings;
                    null != l &&
                        l.forEach((e) => {
                            let n = i[e]?.channelBenefits;
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
function I(e, t) {
    let n = E.y.getState().listings[e],
        l = n?.usedTemplate;
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let i = f.A.getTemplateWithCategory(t, l);
    if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = i.listings[0];
    if (
        n?.name !== a.name ||
        n?.description !== a.description ||
        n?.priceTier !== a.price_tier ||
        n?.image !== a.image ||
        n?.roleColor !== a.role_color ||
        n?.channelBenefits?.length !== a.channels.length ||
        n?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = n.channelBenefits[e],
            l = a.channels[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            l = a.additional_perks[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: i.category, hasChangeFromTemplate: !1 };
}
function O(e) {
    return (0, S.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.TG)(e.id);
}
