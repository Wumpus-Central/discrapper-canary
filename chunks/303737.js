n.d(t, {
    GN: () => S,
    be: () => O,
    g4: () => E,
    m7: () => C,
    r4: () => b,
    sO: () => I,
    yL: () => _
}),
    n(653041),
    n(47120),
    n(998459),
    n(266796);
var i = n(991637),
    r = n.n(i),
    l = n(399606),
    o = n(570140),
    s = n(333848),
    a = n(592125),
    u = n(923726),
    d = n(289393),
    c = n(944537),
    h = n(144507),
    f = n(853439),
    p = n(981631),
    g = n(176505);
r().shim();
let v = {};
function C(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e)),
        n = (0, l.e7)([f.Z], () => f.Z.getChannel(e));
    return null != t ? t : n;
}
function E(e, t, n) {
    let i = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListingsForGuild(e)),
        r = (0, c.n)((t) => t.editStateIdsForGroup[e]),
        o = (0, c.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let s = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        a = [];
    void 0 !== r &&
        r.forEach((e) => {
            let t = o[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && a.push(n);
        });
    let u = new Set(a.concat(s));
    if (!u.has(n)) return null;
    let h = t.indexOf(n);
    if (-1 === h) return null;
    let f = [];
    for (let e = h + 1; e < t.length && (u.has(t[e]) || f.push(t[e]), 3 !== f.length); e++);
    return f;
}
function m(e) {
    let t = c.n.getState().editStateIdsForGroup[e],
        n = c.n.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == r ||
                r.forEach((e) => {
                    null != f.Z.getChannel(e.ref_id) && i.add(e.ref_id);
                });
        });
    let r = [];
    for (let t of i) {
        let n = f.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            r.push(t);
        }
    }
    return r;
}
function O(e) {
    let t = m(e);
    (v[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', g.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        });
}
function S(e) {
    var t;
    (null !== (t = v[e]) && void 0 !== t ? t : m(e)).forEach((e) => {
        o.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function b(e, t) {
    let n = [],
        i = [];
    t.forEach((t) => {
        let r = f.Z.getChannel(t.ref_id);
        null != r && (n.push(s.Z.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
    }),
        0 !== n.length &&
            (await Promise.allSettled(n)).forEach((n, r) => {
                let l = i[r].id;
                if ('fulfilled' === n.status) {
                    let t = n.value.body,
                        i = c.n.getState().editStateIdsForGroup[e],
                        r = c.n.getState().listings;
                    null != i &&
                        i.forEach((e) => {
                            var n;
                            let i = null === (n = r[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == i ||
                                i.forEach((e) => {
                                    e.ref_id === l && (e.ref_id = t.id);
                                });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === l);
                    -1 !== e && (null == t || t.splice(e, 1));
                }
            });
}
function _(e, t) {
    var n, i;
    let r = c.n.getState().listings[e],
        l = null == r ? void 0 : r.usedTemplate;
    if (null == l)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = f.Z.getTemplateWithCategory(t, l);
    if (null == o)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let s = o.listings[0];
    if ((null == r ? void 0 : r.name) !== s.name || (null == r ? void 0 : r.description) !== s.description || (null == r ? void 0 : r.priceTier) !== s.price_tier || (null == r ? void 0 : r.image) !== s.image || (null == r ? void 0 : r.roleColor) !== s.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== s.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== s.additional_perks.length)
        return {
            templateCategory: o.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < s.channels.length; e++) {
        let t = r.channelBenefits[e],
            n = s.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < s.additional_perks.length; e++) {
        let t = r.intangibleBenefits[e],
            n = s.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    return {
        templateCategory: o.category,
        hasChangeFromTemplate: !1
    };
}
function I(e) {
    return (0, h.H2)(e) && e.hasFeature(p.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.$F)() && (0, u.hQ)(e.id);
}
