n.d(t, { Fx: () => y, JH: () => T, SY: () => C, aV: () => b, fE: () => E, pF: () => S, zu: () => _ }), n(321073);
var r = n(975975),
    l = n.n(r),
    i = n(417597),
    a = n(73153),
    o = n(755584),
    s = n(734057),
    u = n(567305),
    c = n(636194),
    d = n(846922),
    h = n(555325),
    p = n(74399),
    f = n(652215),
    m = n(746080);
l().shim();
let g = {};
function E(e) {
    let t = (0, i.bG)([s.A], () => s.A.getChannel(e)),
        n = (0, i.bG)([p.A], () => p.A.getChannel(e));
    return t ?? n;
}
function _(e, t, n) {
    let r = (0, i.bG)([c.A], () => c.A.getSubscriptionListingsForGuild(e)),
        l = (0, d.y)((t) => t.editStateIdsForGroup[e]),
        a = (0, d.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let o = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        s = [];
    void 0 !== l &&
        l.forEach((e) => {
            let t = a[e],
                n = t?.priceTier;
            null != n && s.push(n);
        });
    let u = new Set(s.concat(o));
    if (!u.has(n)) return null;
    let h = t.indexOf(n);
    if (-1 === h) return null;
    let p = [];
    for (let e = h + 1; e < t.length && (u.has(t[e]) || p.push(t[e]), 3 !== p.length); e++);
    return p;
}
function A(e) {
    let t = d.y.getState().editStateIdsForGroup[e],
        n = d.y.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != p.A.getChannel(e.ref_id) && r.add(e.ref_id);
            });
        });
    let l = [];
    for (let t of r) {
        let n = p.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            l.push(t);
        }
    }
    return l;
}
function C(e) {
    let t = A(e);
    (g[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", m.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            a.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
        });
}
function y(e) {
    (g[e] ?? A(e)).forEach((e) => {
        a.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
    });
}
async function S(e, t) {
    let n = [],
        r = [];
    t.forEach((t) => {
        let l = p.A.getChannel(t.ref_id);
        null != l && (n.push(o.A.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), r.push(l));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, l) => {
                let i = r[l].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        r = d.y.getState().editStateIdsForGroup[e],
                        l = d.y.getState().listings;
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
function T(e, t) {
    let n = d.y.getState().listings[e],
        r = n?.usedTemplate;
    if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
    let l = p.A.getTemplateWithCategory(t, r);
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
function b(e) {
    return (0, h.X9)(e) && e.features.has(f.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.D3)() && (0, u.TG)(e.id);
}
