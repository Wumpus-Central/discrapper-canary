n.d(t, {
    GN: () => O,
    be: () => y,
    g4: () => E,
    m7: () => g,
    r4: () => v,
    sO: () => I,
    yL: () => S,
}),
    n(539854),
    n(388685),
    n(993155),
    n(953529);
var r = n(991637),
    i = n.n(r),
    a = n(399606),
    o = n(570140),
    s = n(333848),
    l = n(592125),
    c = n(923726),
    u = n(289393),
    d = n(944537),
    f = n(144507),
    p = n(853439),
    _ = n(981631),
    m = n(176505);
i().shim();
let h = {};
function g(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.getChannel(e)),
        n = (0, a.e7)([p.Z], () => p.Z.getChannel(e));
    return null != t ? t : n;
}
function E(e, t, n) {
    let r = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListingsForGuild(e)),
        i = (0, d.n)((t) => t.editStateIdsForGroup[e]),
        o = (0, d.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let s = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        l = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = o[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && l.push(n);
        });
    let c = new Set(l.concat(s));
    if (!c.has(n)) return null;
    let f = t.indexOf(n);
    if (-1 === f) return null;
    let p = [];
    for (let e = f + 1; e < t.length && (c.has(t[e]) || p.push(t[e]), 3 !== p.length); e++);
    return p;
}
function b(e) {
    let t = d.n.getState().editStateIdsForGroup[e],
        n = d.n.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let i = null == (t = n[e]) ? void 0 : t.channelBenefits;
            null == i ||
                i.forEach((e) => {
                    null != p.Z.getChannel(e.ref_id) && r.add(e.ref_id);
                });
        });
    let i = [];
    for (let t of r) {
        let n = p.Z.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t);
        }
    }
    return i;
}
function y(e) {
    let t = b(e);
    (h[e] = t),
        t.forEach((e) => {
            let t = e.set("flags", m.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.Z.dispatch({
                type: "CHANNEL_CREATE",
                channel: t,
            });
        });
}
function O(e) {
    var t;
    (null != (t = h[e]) ? t : b(e)).forEach((e) => {
        o.Z.dispatch({
            type: "CHANNEL_DELETE",
            channel: e,
        });
    });
}
async function v(e, t) {
    let n = [],
        r = [];
    t.forEach((t) => {
        let i = p.Z.getChannel(t.ref_id);
        null != i && (n.push(s.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
    }),
        0 !== n.length &&
            (await Promise.allSettled(n)).forEach((n, i) => {
                let a = r[i].id;
                if ("fulfilled" === n.status) {
                    let t = n.value.body,
                        r = d.n.getState().editStateIdsForGroup[e],
                        i = d.n.getState().listings;
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
function S(e, t) {
    var n, r;
    let i = d.n.getState().listings[e],
        a = null == i ? void 0 : i.usedTemplate;
    if (null == a)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null,
        };
    let o = p.Z.getTemplateWithCategory(t, a);
    if (null == o)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null,
        };
    let s = o.listings[0];
    if (
        (null == i ? void 0 : i.name) !== s.name ||
        (null == i ? void 0 : i.description) !== s.description ||
        (null == i ? void 0 : i.priceTier) !== s.price_tier ||
        (null == i ? void 0 : i.image) !== s.image ||
        (null == i ? void 0 : i.roleColor) !== s.role_color ||
        (null == i || null == (n = i.channelBenefits) ? void 0 : n.length) !== s.channels.length ||
        (null == i || null == (r = i.intangibleBenefits) ? void 0 : r.length) !== s.additional_perks.length
    )
        return {
            templateCategory: o.category,
            hasChangeFromTemplate: !0,
        };
    for (let e = 0; e < s.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = s.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0,
            };
    }
    for (let e = 0; e < s.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = s.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0,
            };
    }
    return {
        templateCategory: o.category,
        hasChangeFromTemplate: !1,
    };
}
function I(e) {
    return (0, f.H2)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.$F)() && (0, c.hQ)(e.id);
}
