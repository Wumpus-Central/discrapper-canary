i.d(t, { Fx: () => N, JH: () => S, SY: () => A, aV: () => j, fE: () => x, pF: () => I, zu: () => f }),
    i(938796),
    i(321073);
var r = i(64700),
    l = i(975975),
    a = i.n(l),
    s = i(665260),
    n = i(702841),
    o = i(228366),
    d = i(755584),
    c = i(734057),
    u = i(567305),
    m = i(636194),
    h = i(846922),
    C = i(555325),
    p = i(74399),
    _ = i(652215),
    g = i(746080);
a().shim();
let E = {};
function x(e) {
    let t = (0, n.bG)([c.A], () => c.A.getChannel(e)),
        i = (0, n.bG)([p.A], () => p.A.getChannel(e)),
        l = (0, n.bG)([m.A], () => m.A.getBenefitChannel(e)),
        a = (0, r.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != l
                    ? t.merge({ name: l.name, flags: s.VL(t.flags, g.lx.OBFUSCATED) })
                    : null,
            [t, l],
        );
    return null == t ? i : t.isObfuscated() ? (a ?? t) : t;
}
function f(e, t, i) {
    let r = (0, n.bG)([m.A], () => m.A.getSubscriptionListingsForGuild(e)),
        l = (0, h.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, h.y)((e) => e.listings);
    if (void 0 === i || void 0 === t) return null;
    let s = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== l &&
        l.forEach((e) => {
            let t = a[e],
                i = t?.priceTier;
            null != i && o.push(i);
        });
    let d = new Set(o.concat(s));
    if (!d.has(i)) return null;
    let c = t.indexOf(i);
    if (-1 === c) return null;
    let u = [];
    for (let e = c + 1; e < t.length && (d.has(t[e]) || u.push(t[e]), 3 !== u.length); e++);
    return u;
}
function R(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        i = h.y.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            let t = i[e]?.channelBenefits;
            t?.forEach((e) => {
                null != p.A.getChannel(e.ref_id) && r.add(e.ref_id);
            });
        });
    let l = [];
    for (let t of r) {
        let i = p.A.getChannel(t);
        if (null != i) {
            let t = i.set("guild_id", e);
            l.push(t);
        }
    }
    return l;
}
function A(e) {
    let t = R(e);
    (E[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", g.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function N(e) {
    (E[e] ?? R(e)).forEach((e) => {
        o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function I(e, t) {
    let i = [],
        r = [];
    t.forEach((t) => {
        let l = p.A.getChannel(t.ref_id);
        null != l && (i.push(d.A.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), r.push(l));
    }),
        0 === i.length ||
            (await Promise.allSettled(i)).forEach((i, l) => {
                let a = r[l].id;
                if ("fulfilled" === i.status) {
                    let t = i.value.body,
                        r = h.y.getState().editStateIdsForGroup[e],
                        l = h.y.getState().listings;
                    null != r &&
                        r.forEach((e) => {
                            let i = l[e]?.channelBenefits;
                            i?.forEach((e) => {
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
    let i = h.y.getState().listings[e],
        r = i?.usedTemplate;
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let l = p.A.getTemplateWithCategory(t, r);
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = l.listings[0];
    if (
        i?.name !== a.name ||
        i?.description !== a.description ||
        i?.priceTier !== a.price_tier ||
        i?.image !== a.image ||
        i?.roleColor !== a.role_color ||
        i?.channelBenefits?.length !== a.channels.length ||
        i?.intangibleBenefits?.length !== a.additional_perks.length
    )
        return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < a.channels.length; e++) {
        let t = i.channelBenefits[e],
            r = a.channels[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name)
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            r = a.additional_perks[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name)
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: l.category, hasChangeFromTemplate: !1 };
}
function j(e) {
    return (0, C.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
}
