i.d(t, { Fx: () => m, JH: () => T, SY: () => N, aV: () => O, fE: () => g, pF: () => A, zu: () => v }),
    i(938796),
    i(321073);
var l = i(582128),
    a = i(975975),
    n = i.n(a),
    s = i(665260),
    r = i(702841),
    c = i(228366),
    d = i(755584),
    h = i(734057),
    o = i(567305),
    u = i(636194),
    f = i(846922),
    p = i(555325),
    S = i(74399),
    _ = i(652215),
    C = i(746080);
n().shim();
let E = {};
function g(e) {
    let t = (0, r.bG)([h.A], () => h.A.getChannel(e)),
        i = (0, r.bG)([S.A], () => S.A.getChannel(e)),
        a = (0, r.bG)([u.A], () => u.A.getBenefitChannel(e)),
        n = (0, l.useMemo)(
            () =>
                null != t && t.isObfuscated() && null != a
                    ? t.merge({ name: a.name, flags: s.VL(t.flags, C.lx.OBFUSCATED) })
                    : null,
            [t, a],
        );
    return null == t ? i : t.isObfuscated() ? (n ?? t) : t;
}
function v(e, t, i) {
    let l = (0, r.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        a = (0, f.y)((t) => t.editStateIdsForGroup[e]),
        n = (0, f.y)((e) => e.listings);
    if (void 0 === i || void 0 === t) return null;
    let s = l.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        c = [];
    void 0 !== a &&
        a.forEach((e) => {
            let t = n[e],
                i = t?.priceTier;
            null != i && c.push(i);
        });
    let d = new Set(c.concat(s));
    if (!d.has(i)) return null;
    let h = t.indexOf(i);
    if (-1 === h) return null;
    let o = [];
    for (let e = h + 1; e < t.length && (d.has(t[e]) || o.push(t[e]), 3 !== o.length); e++);
    return o;
}
function I(e) {
    let t = f.y.getState().editStateIdsForGroup[e],
        i = f.y.getState().listings,
        l = new Set();
    null != t &&
        t.forEach((e) => {
            let t = i[e]?.channelBenefits;
            t?.forEach((e) => {
                null != S.A.getChannel(e.ref_id) && l.add(e.ref_id);
            });
        });
    let a = [];
    for (let t of l) {
        let i = S.A.getChannel(t);
        if (null != i) {
            let t = i.set("guild_id", e);
            a.push(t);
        }
    }
    return a;
}
function N(e) {
    let t = I(e);
    (E[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", C.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            c.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function m(e) {
    (E[e] ?? I(e)).forEach((e) => {
        c.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function A(e, t) {
    let i = [],
        l = [];
    t.forEach((t) => {
        let a = S.A.getChannel(t.ref_id);
        null != a && (i.push(d.A.createRoleSubscriptionTemplateChannel(e, a.name, a.type, a.topic)), l.push(a));
    }),
        0 === i.length ||
            (await Promise.allSettled(i)).forEach((i, a) => {
                let n = l[a].id;
                if ("fulfilled" === i.status) {
                    let t = i.value.body,
                        l = f.y.getState().editStateIdsForGroup[e],
                        a = f.y.getState().listings;
                    null != l &&
                        l.forEach((e) => {
                            let i = a[e]?.channelBenefits;
                            i?.forEach((e) => {
                                e.ref_id === n && (e.ref_id = t.id);
                            });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === n);
                    -1 !== e && t?.splice(e, 1);
                }
            });
}
function T(e, t) {
    let i = f.y.getState().listings[e],
        l = i?.usedTemplate;
    if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
    let a = S.A.getTemplateWithCategory(t, l);
    if (null == a) return { templateCategory: null, hasChangeFromTemplate: null };
    let n = a.listings[0];
    if (
        i?.name !== n.name ||
        i?.description !== n.description ||
        i?.priceTier !== n.price_tier ||
        i?.image !== n.image ||
        i?.roleColor !== n.role_color ||
        i?.channelBenefits?.length !== n.channels.length ||
        i?.intangibleBenefits?.length !== n.additional_perks.length
    )
        return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    for (let e = 0; e < n.channels.length; e++) {
        let t = i.channelBenefits[e],
            l = n.channels[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    }
    for (let e = 0; e < n.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            l = n.additional_perks[e];
        if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
            return { templateCategory: a.category, hasChangeFromTemplate: !0 };
    }
    return { templateCategory: a.category, hasChangeFromTemplate: !1 };
}
function O(e) {
    return (0, p.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, o.TG)(e.id);
}
