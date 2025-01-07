n.d(e, {
    GN: function () {
        return C;
    },
    be: function () {
        return h;
    },
    g4: function () {
        return m;
    },
    m7: function () {
        return S;
    },
    r4: function () {
        return T;
    },
    sO: function () {
        return N;
    },
    yL: function () {
        return v;
    }
}),
    n(653041),
    n(47120),
    n(998459);
var i = n(991637),
    r = n.n(i),
    l = n(399606),
    o = n(570140),
    u = n(333848),
    a = n(592125),
    s = n(923726),
    c = n(289393),
    d = n(944537),
    f = n(144507),
    _ = n(853439),
    E = n(981631),
    p = n(176505);
r().shim();
let g = {};
function S(t) {
    let e = (0, l.e7)([a.Z], () => a.Z.getChannel(t)),
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(t));
    return null != e ? e : n;
}
function m(t, e, n) {
    let i = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(t)),
        r = (0, d.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, d.n)((t) => t.listings);
    if (void 0 === n || void 0 === e) return null;
    let u = i.filter((t) => !t.soft_deleted && !t.archived).map((t) => t.subscription_plans[0].price),
        a = [];
    void 0 !== r &&
        r.forEach((t) => {
            let e = o[t],
                n = null == e ? void 0 : e.priceTier;
            null != n && a.push(n);
        });
    let s = new Set(a.concat(u));
    if (!s.has(n)) return null;
    let f = e.indexOf(n);
    if (-1 === f) return null;
    let _ = [];
    for (let t = f + 1; t < e.length && (!s.has(e[t]) && _.push(e[t]), 3 !== _.length); t++);
    return _;
}
function I(t) {
    let e = d.n.getState().editStateIdsForGroup[t],
        n = d.n.getState().listings,
        i = new Set();
    null != e &&
        e.forEach((t) => {
            var e;
            let r = null === (e = n[t]) || void 0 === e ? void 0 : e.channelBenefits;
            null == r ||
                r.forEach((t) => {
                    null != _.Z.getChannel(t.ref_id) && i.add(t.ref_id);
                });
        });
    let r = [];
    for (let e of i) {
        let n = _.Z.getChannel(e);
        if (null != n) {
            let e = n.set('guild_id', t);
            r.push(e);
        }
    }
    return r;
}
function h(t) {
    let e = I(t);
    (g[t] = e),
        e.forEach((t) => {
            let e = t.set('flags', p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: e
            });
        });
}
function C(t) {
    var e;
    (null !== (e = g[t]) && void 0 !== e ? e : I(t)).forEach((t) => {
        o.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: t
        });
    });
}
async function T(t, e) {
    let n = [],
        i = [];
    if (
        (e.forEach((e) => {
            let r = _.Z.getChannel(e.ref_id);
            null != r && (n.push(u.Z.createRoleSubscriptionTemplateChannel(t, r.name, r.type, r.topic)), i.push(r));
        }),
        0 !== n.length)
    )
        (await Promise.allSettled(n)).forEach((n, r) => {
            let l = i[r].id;
            if ('fulfilled' === n.status) {
                let e = n.value.body,
                    i = d.n.getState().editStateIdsForGroup[t],
                    r = d.n.getState().listings;
                null != i &&
                    i.forEach((t) => {
                        var n;
                        let i = null === (n = r[t]) || void 0 === n ? void 0 : n.channelBenefits;
                        null == i ||
                            i.forEach((t) => {
                                t.ref_id === l && (t.ref_id = e.id);
                            });
                    });
            } else if (null != e) {
                let t = e.findIndex((t) => t.ref_id === l);
                -1 !== t && (null == e || e.splice(t, 1));
            }
        });
}
function v(t, e) {
    var n, i;
    let r = d.n.getState().listings[t],
        l = null == r ? void 0 : r.usedTemplate;
    if (null == l)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = _.Z.getTemplateWithCategory(e, l);
    if (null == o)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let u = o.listings[0];
    if ((null == r ? void 0 : r.name) !== u.name || (null == r ? void 0 : r.description) !== u.description || (null == r ? void 0 : r.priceTier) !== u.price_tier || (null == r ? void 0 : r.image) !== u.image || (null == r ? void 0 : r.roleColor) !== u.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== u.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== u.additional_perks.length)
        return {
            templateCategory: o.category,
            hasChangeFromTemplate: !0
        };
    for (let t = 0; t < u.channels.length; t++) {
        let e = r.channelBenefits[t],
            n = u.channels[t];
        if (e.name !== n.name || e.description !== n.description || e.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let t = 0; t < u.additional_perks.length; t++) {
        let e = r.intangibleBenefits[t],
            n = u.additional_perks[t];
        if (e.name !== n.name || e.description !== n.description || e.emoji_name !== n.emoji_name)
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
function N(t) {
    return (0, f.H2)(t) && t.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, s.$F)() && (0, s.hQ)(t.id);
}
