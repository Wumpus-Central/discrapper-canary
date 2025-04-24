n.d(t, {
    GN: () => b,
    be: () => I,
    g4: () => T,
    m7: () => _,
    r4: () => h,
    sO: () => C,
    yL: () => y
}),
    n(539854),
    n(388685),
    n(993155),
    n(953529);
var r = n(991637),
    i = n.n(r),
    l = n(399606),
    o = n(570140),
    a = n(333848),
    u = n(592125),
    c = n(923726),
    s = n(289393),
    d = n(944537),
    p = n(144507),
    f = n(853439),
    E = n(981631),
    O = n(176505);
i().shim();
let S = {};
function _(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.getChannel(e)),
        n = (0, l.e7)([f.Z], () => f.Z.getChannel(e));
    return null != t ? t : n;
}
function T(e, t, n) {
    let r = (0, l.e7)([s.Z], () => s.Z.getSubscriptionListingsForGuild(e)),
        i = (0, d.n)((t) => t.editStateIdsForGroup[e]),
        o = (0, d.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let a = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        u = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = o[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && u.push(n);
        });
    let c = new Set(u.concat(a));
    if (!c.has(n)) return null;
    let p = t.indexOf(n);
    if (-1 === p) return null;
    let f = [];
    for (let e = p + 1; e < t.length && (c.has(t[e]) || f.push(t[e]), 3 !== f.length); e++);
    return f;
}
function g(e) {
    let t = d.n.getState().editStateIdsForGroup[e],
        n = d.n.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let i = null == (t = n[e]) ? void 0 : t.channelBenefits;
            null == i ||
                i.forEach((e) => {
                    null != f.Z.getChannel(e.ref_id) && r.add(e.ref_id);
                });
        });
    let i = [];
    for (let t of r) {
        let n = f.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            i.push(t);
        }
    }
    return i;
}
function I(e) {
    let t = g(e);
    (S[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', O.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        });
}
function b(e) {
    var t;
    (null != (t = S[e]) ? t : g(e)).forEach((e) => {
        o.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function h(e, t) {
    let n = [],
        r = [];
    t.forEach((t) => {
        let i = f.Z.getChannel(t.ref_id);
        null != i && (n.push(a.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
    }),
        0 !== n.length &&
            (await Promise.allSettled(n)).forEach((n, i) => {
                let l = r[i].id;
                if ('fulfilled' === n.status) {
                    let t = n.value.body,
                        r = d.n.getState().editStateIdsForGroup[e],
                        i = d.n.getState().listings;
                    null != r &&
                        r.forEach((e) => {
                            var n;
                            let r = null == (n = i[e]) ? void 0 : n.channelBenefits;
                            null == r ||
                                r.forEach((e) => {
                                    e.ref_id === l && (e.ref_id = t.id);
                                });
                        });
                } else if (null != t) {
                    let e = t.findIndex((e) => e.ref_id === l);
                    -1 !== e && (null == t || t.splice(e, 1));
                }
            });
}
function y(e, t) {
    var n, r;
    let i = d.n.getState().listings[e],
        l = null == i ? void 0 : i.usedTemplate;
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
    let a = o.listings[0];
    if ((null == i ? void 0 : i.name) !== a.name || (null == i ? void 0 : i.description) !== a.description || (null == i ? void 0 : i.priceTier) !== a.price_tier || (null == i ? void 0 : i.image) !== a.image || (null == i ? void 0 : i.roleColor) !== a.role_color || (null == i || null == (n = i.channelBenefits) ? void 0 : n.length) !== a.channels.length || (null == i || null == (r = i.intangibleBenefits) ? void 0 : r.length) !== a.additional_perks.length)
        return {
            templateCategory: o.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < a.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = a.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = a.additional_perks[e];
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
function C(e) {
    return (0, p.H2)(e) && e.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.$F)() && (0, c.hQ)(e.id);
}
