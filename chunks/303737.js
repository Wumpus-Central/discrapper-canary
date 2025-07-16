(n.d(t, {
    GN: () => C,
    be: () => y,
    g4: () => b,
    m7: () => g,
    r4: () => x,
    sO: () => O,
    yL: () => v
}),
    n(539854),
    n(388685),
    n(993155),
    n(953529));
var r = n(991637),
    i = n.n(r),
    l = n(399606),
    a = n(570140),
    o = n(333848),
    s = n(592125),
    c = n(923726),
    u = n(289393),
    d = n(944537),
    p = n(144507),
    m = n(853439),
    f = n(981631),
    _ = n(176505);
i().shim();
let h = {};
function g(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getChannel(e)),
        n = (0, l.e7)([m.Z], () => m.Z.getChannel(e));
    return null != t ? t : n;
}
function b(e, t, n) {
    let r = (0, l.e7)([u.Z], () => u.Z.getSubscriptionListingsForGuild(e)),
        i = (0, d.n)((t) => t.editStateIdsForGroup[e]),
        a = (0, d.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let o = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        s = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = a[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && s.push(n);
        });
    let c = new Set(s.concat(o));
    if (!c.has(n)) return null;
    let p = t.indexOf(n);
    if (-1 === p) return null;
    let m = [];
    for (let e = p + 1; e < t.length && (c.has(t[e]) || m.push(t[e]), 3 !== m.length); e++);
    return m;
}
function E(e) {
    let t = d.n.getState().editStateIdsForGroup[e],
        n = d.n.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let i = null == (t = n[e]) ? void 0 : t.channelBenefits;
            null == i ||
                i.forEach((e) => {
                    null != m.Z.getChannel(e.ref_id) && r.add(e.ref_id);
                });
        });
    let i = [];
    for (let t of r) {
        let n = m.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            i.push(t);
        }
    }
    return i;
}
function y(e) {
    let t = E(e);
    ((h[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', _.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        }));
}
function C(e) {
    var t;
    (null != (t = h[e]) ? t : E(e)).forEach((e) => {
        a.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function x(e, t) {
    let n = [],
        r = [];
    (t.forEach((t) => {
        let i = m.Z.getChannel(t.ref_id);
        null != i && (n.push(o.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
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
            }));
}
function v(e, t) {
    var n, r;
    let i = d.n.getState().listings[e],
        l = null == i ? void 0 : i.usedTemplate;
    if (null == l)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let a = m.Z.getTemplateWithCategory(t, l);
    if (null == a)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = a.listings[0];
    if ((null == i ? void 0 : i.name) !== o.name || (null == i ? void 0 : i.description) !== o.description || (null == i ? void 0 : i.priceTier) !== o.price_tier || (null == i ? void 0 : i.image) !== o.image || (null == i ? void 0 : i.roleColor) !== o.role_color || (null == i || null == (n = i.channelBenefits) ? void 0 : n.length) !== o.channels.length || (null == i || null == (r = i.intangibleBenefits) ? void 0 : r.length) !== o.additional_perks.length)
        return {
            templateCategory: a.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < o.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = o.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: a.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < o.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = o.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: a.category,
                hasChangeFromTemplate: !0
            };
    }
    return {
        templateCategory: a.category,
        hasChangeFromTemplate: !1
    };
}
function O(e) {
    return (0, p.H2)(e) && e.features.has(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.$F)() && (0, c.hQ)(e.id);
}
