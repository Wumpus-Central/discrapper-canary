e.d(n, {
    GN: function () {
        return T;
    },
    be: function () {
        return I;
    },
    g4: function () {
        return m;
    },
    m7: function () {
        return S;
    },
    r4: function () {
        return h;
    },
    sO: function () {
        return N;
    },
    yL: function () {
        return v;
    }
}),
    e(653041),
    e(47120),
    e(998459);
var i = e(991637),
    r = e.n(i),
    l = e(399606),
    u = e(570140),
    o = e(333848),
    a = e(592125),
    s = e(923726),
    c = e(289393),
    d = e(944537),
    f = e(144507),
    _ = e(853439),
    E = e(981631),
    p = e(176505);
r().shim();
let g = {};
function S(t) {
    let n = (0, l.e7)([a.Z], () => a.Z.getChannel(t)),
        e = (0, l.e7)([_.Z], () => _.Z.getChannel(t));
    return null != n ? n : e;
}
function m(t, n, e) {
    let i = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(t)),
        r = (0, d.n)((n) => n.editStateIdsForGroup[t]),
        u = (0, d.n)((t) => t.listings);
    if (void 0 === e || void 0 === n) return null;
    let o = i.filter((t) => !t.soft_deleted && !t.archived).map((t) => t.subscription_plans[0].price),
        a = [];
    void 0 !== r &&
        r.forEach((t) => {
            let n = u[t],
                e = null == n ? void 0 : n.priceTier;
            null != e && a.push(e);
        });
    let s = new Set(a.concat(o));
    if (!s.has(e)) return null;
    let f = n.indexOf(e);
    if (-1 === f) return null;
    let _ = [];
    for (let t = f + 1; t < n.length && (!s.has(n[t]) && _.push(n[t]), 3 !== _.length); t++);
    return _;
}
function C(t) {
    let n = d.n.getState().editStateIdsForGroup[t],
        e = d.n.getState().listings,
        i = new Set();
    null != n &&
        n.forEach((t) => {
            var n;
            let r = null === (n = e[t]) || void 0 === n ? void 0 : n.channelBenefits;
            null == r ||
                r.forEach((t) => {
                    null != _.Z.getChannel(t.ref_id) && i.add(t.ref_id);
                });
        });
    let r = [];
    for (let n of i) {
        let e = _.Z.getChannel(n);
        if (null != e) {
            let n = e.set('guild_id', t);
            r.push(n);
        }
    }
    return r;
}
function I(t) {
    let n = C(t);
    (g[t] = n),
        n.forEach((t) => {
            let n = t.set('flags', p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            u.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: n
            });
        });
}
function T(t) {
    var n;
    (null !== (n = g[t]) && void 0 !== n ? n : C(t)).forEach((t) => {
        u.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: t
        });
    });
}
async function h(t, n) {
    let e = [],
        i = [];
    if (
        (n.forEach((n) => {
            let r = _.Z.getChannel(n.ref_id);
            null != r && (e.push(o.Z.createRoleSubscriptionTemplateChannel(t, r.name, r.type, r.topic)), i.push(r));
        }),
        0 !== e.length)
    )
        (await Promise.allSettled(e)).forEach((e, r) => {
            let l = i[r].id;
            if ('fulfilled' === e.status) {
                let n = e.value.body,
                    i = d.n.getState().editStateIdsForGroup[t],
                    r = d.n.getState().listings;
                null != i &&
                    i.forEach((t) => {
                        var e;
                        let i = null === (e = r[t]) || void 0 === e ? void 0 : e.channelBenefits;
                        null == i ||
                            i.forEach((t) => {
                                t.ref_id === l && (t.ref_id = n.id);
                            });
                    });
            } else if (null != n) {
                let t = n.findIndex((t) => t.ref_id === l);
                -1 !== t && (null == n || n.splice(t, 1));
            }
        });
}
function v(t, n) {
    var e, i;
    let r = d.n.getState().listings[t],
        l = null == r ? void 0 : r.usedTemplate;
    if (null == l)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let u = _.Z.getTemplateWithCategory(n, l);
    if (null == u)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = u.listings[0];
    if ((null == r ? void 0 : r.name) !== o.name || (null == r ? void 0 : r.description) !== o.description || (null == r ? void 0 : r.priceTier) !== o.price_tier || (null == r ? void 0 : r.image) !== o.image || (null == r ? void 0 : r.roleColor) !== o.role_color || (null == r ? void 0 : null === (e = r.channelBenefits) || void 0 === e ? void 0 : e.length) !== o.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== o.additional_perks.length)
        return {
            templateCategory: u.category,
            hasChangeFromTemplate: !0
        };
    for (let t = 0; t < o.channels.length; t++) {
        let n = r.channelBenefits[t],
            e = o.channels[t];
        if (n.name !== e.name || n.description !== e.description || n.emoji_name !== e.emoji_name)
            return {
                templateCategory: u.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let t = 0; t < o.additional_perks.length; t++) {
        let n = r.intangibleBenefits[t],
            e = o.additional_perks[t];
        if (n.name !== e.name || n.description !== e.description || n.emoji_name !== e.emoji_name)
            return {
                templateCategory: u.category,
                hasChangeFromTemplate: !0
            };
    }
    return {
        templateCategory: u.category,
        hasChangeFromTemplate: !1
    };
}
function N(t) {
    return (0, f.H2)(t) && t.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, s.$F)() && (0, s.hQ)(t.id);
}
