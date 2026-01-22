n.d(t, {
    Fx: () => O,
    JH: () => v,
    SY: () => y,
    aV: () => S,
    fE: () => g,
    pF: () => A,
    zu: () => E,
}),
    n(321073),
    n(896048),
    n(848778),
    n(228524);
var r = n(975975),
    i = n.n(r),
    a = n(417597),
    s = n(73153),
    o = n(755584),
    l = n(734057),
    c = n(567305),
    u = n(636194),
    d = n(846922),
    f = n(555325),
    p = n(74399),
    _ = n(652215),
    h = n(746080);
i().shim();
let m = {};
function g(e) {
    let t = (0, a.bG)([l.A], () => l.A.getChannel(e)),
        n = (0, a.bG)([p.A], () => p.A.getChannel(e));
    return null != t ? t : n;
}
function E(e, t, n) {
    let r = (0, a.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        i = (0, d.y)((t) => t.editStateIdsForGroup[e]),
        s = (0, d.y)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let o = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        l = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = s[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && l.push(n);
        });
    let c = new Set(l.concat(o));
    if (!c.has(n)) return null;
    let f = t.indexOf(n);
    if (-1 === f) return null;
    let p = [];
    for (let e = f + 1; e < t.length && (c.has(t[e]) || p.push(t[e]), 3 !== p.length); e++);
    return p;
}
function b(e) {
    let t = d.y.getState().editStateIdsForGroup[e],
        n = d.y.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let i = null == (t = n[e]) ? void 0 : t.channelBenefits;
            null == i ||
                i.forEach((e) => {
                    null != p.A.getChannel(e.ref_id) && r.add(e.ref_id);
                });
        });
    let i = [];
    for (let t of r) {
        let n = p.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function y(e) {
    let t = b(e);
    (m[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", h.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            s.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: t,
            });
        });
}
function O(e) {
    var t;
    (null != (t = m[e]) ? t : b(e)).forEach((e) => {
        s.h.dispatch({
            type: "CHANNEL_DELETE",
            channel: e,
        });
    });
}
async function A(e, t) {
    let n = [],
        r = [];
    t.forEach((t) => {
        let i = p.A.getChannel(t.ref_id);
        null != i && (n.push(o.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
    }),
        0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, i) => {
                let a = r[i].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        r = d.y.getState().editStateIdsForGroup[e],
                        i = d.y.getState().listings;
                    null != r &&
                        r.forEach((e) => {
                            var n;
                            let r = null == (n = i[e]) ? void 0 : n.channelBenefits;
                            null == r ||
                                r.forEach((e) => {
                                    e.ref_id === a && (e.ref_id = t.id);
                                });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === a);
                    -1 !== e && (null == t || t.splice(e, 1));
                }
            });
}
function v(e, t) {
    var n, r;
    let i = d.y.getState().listings[e],
        a = null == i ? void 0 : i.usedTemplate;
    if (null == a)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null,
        };
    let s = p.A.getTemplateWithCategory(t, a);
    if (null == s)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null,
        };
    let o = s.listings[0];
    if (
        (null == i ? void 0 : i.name) !== o.name ||
        (null == i ? void 0 : i.description) !== o.description ||
        (null == i ? void 0 : i.priceTier) !== o.price_tier ||
        (null == i ? void 0 : i.image) !== o.image ||
        (null == i ? void 0 : i.roleColor) !== o.role_color ||
        (null == i || null == (n = i.channelBenefits) ? void 0 : n.length) !== o.channels.length ||
        (null == i || null == (r = i.intangibleBenefits) ? void 0 : r.length) !== o.additional_perks.length
    )
        return {
            templateCategory: s.category,
            hasChangeFromTemplate: !0,
        };
    for (let e = 0; e < o.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = o.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0,
            };
    }
    for (let e = 0; e < o.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = o.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0,
            };
    }
    return {
        templateCategory: s.category,
        hasChangeFromTemplate: !1,
    };
}
function S(e) {
    return (0, f.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.D3)() && (0, c.TG)(e.id);
}
