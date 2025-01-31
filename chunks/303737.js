n.d(t, {
    GN: () => S,
    be: () => I,
    g4: () => v,
    m7: () => E,
    r4: () => m,
    sO: () => N,
    yL: () => T
}),
    n(653041),
    n(47120),
    n(998459);
var i = n(991637),
    l = n.n(i),
    r = n(399606),
    s = n(570140),
    a = n(333848),
    o = n(592125),
    d = n(923726),
    u = n(289393),
    c = n(944537),
    h = n(144507),
    g = n(853439),
    C = n(981631),
    f = n(176505);
l().shim();
let p = {};
function E(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.getChannel(e)),
        n = (0, r.e7)([g.Z], () => g.Z.getChannel(e));
    return null != t ? t : n;
}
function v(e, t, n) {
    let i = (0, r.e7)([u.Z], () => u.Z.getSubscriptionListingsForGuild(e)),
        l = (0, c.n)((t) => t.editStateIdsForGroup[e]),
        s = (0, c.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let a = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        o = [];
    void 0 !== l &&
        l.forEach((e) => {
            let t = s[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && o.push(n);
        });
    let d = new Set(o.concat(a));
    if (!d.has(n)) return null;
    let h = t.indexOf(n);
    if (-1 === h) return null;
    let g = [];
    for (let e = h + 1; e < t.length && (d.has(t[e]) || g.push(t[e]), 3 !== g.length); e++);
    return g;
}
function _(e) {
    let t = c.n.getState().editStateIdsForGroup[e],
        n = c.n.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let l = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == l ||
                l.forEach((e) => {
                    null != g.Z.getChannel(e.ref_id) && i.add(e.ref_id);
                });
        });
    let l = [];
    for (let t of i) {
        let n = g.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            l.push(t);
        }
    }
    return l;
}
function I(e) {
    let t = _(e);
    (p[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', f.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            s.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        });
}
function S(e) {
    var t;
    (null !== (t = p[e]) && void 0 !== t ? t : _(e)).forEach((e) => {
        s.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function m(e, t) {
    let n = [],
        i = [];
    t.forEach((t) => {
        let l = g.Z.getChannel(t.ref_id);
        null != l && (n.push(a.Z.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), i.push(l));
    }),
        0 !== n.length &&
            (await Promise.allSettled(n)).forEach((n, l) => {
                let r = i[l].id;
                if ('fulfilled' === n.status) {
                    let t = n.value.body,
                        i = c.n.getState().editStateIdsForGroup[e],
                        l = c.n.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            var n;
                            let i = null === (n = l[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == i ||
                                i.forEach((e) => {
                                    e.ref_id === r && (e.ref_id = t.id);
                                });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === r);
                    -1 !== e && (null == t || t.splice(e, 1));
                }
            });
}
function T(e, t) {
    var n, i;
    let l = c.n.getState().listings[e],
        r = null == l ? void 0 : l.usedTemplate;
    if (null == r)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let s = g.Z.getTemplateWithCategory(t, r);
    if (null == s)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let a = s.listings[0];
    if ((null == l ? void 0 : l.name) !== a.name || (null == l ? void 0 : l.description) !== a.description || (null == l ? void 0 : l.priceTier) !== a.price_tier || (null == l ? void 0 : l.image) !== a.image || (null == l ? void 0 : l.roleColor) !== a.role_color || (null == l ? void 0 : null === (n = l.channelBenefits) || void 0 === n ? void 0 : n.length) !== a.channels.length || (null == l ? void 0 : null === (i = l.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== a.additional_perks.length)
        return {
            templateCategory: s.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < a.channels.length; e++) {
        let t = l.channelBenefits[e],
            n = a.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = l.intangibleBenefits[e],
            n = a.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0
            };
    }
    return {
        templateCategory: s.category,
        hasChangeFromTemplate: !1
    };
}
function N(e) {
    return (0, h.H2)(e) && e.hasFeature(C.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, d.$F)() && (0, d.hQ)(e.id);
}
