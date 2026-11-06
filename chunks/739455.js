(n(938796), n(321073));
var i = n(582128),
    r = n(665260),
    a = n(164636),
    s = n(73153),
    l = n(755584),
    o = n(734057),
    u = n(567305),
    d = n(636194),
    c = n(846922),
    S = n(555325),
    _ = n(74399),
    h = n(652215),
    E = n(746080);
let p = {};
function f(e) {
    let t = c.y.getState().editStateIdsForGroup[e],
        n = c.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let r = [];
    for (let t of i) {
        let n = _.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            r.push(t);
        }
    }
    return r;
}
n.d(
    t,
    {},
    {
        Fx: function (e) {
            (p[e] ?? f(e)).forEach((e) => {
                s.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
            });
        },
        JH: function (e, t) {
            let n = c.y.getState().listings[e],
                i = n?.usedTemplate;
            if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
            let r = _.A.getTemplateWithCategory(t, i);
            if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
            let a = r.listings[0];
            if (
                n?.name !== a.name ||
                n?.description !== a.description ||
                n?.priceTier !== a.price_tier ||
                n?.image !== a.image ||
                n?.roleColor !== a.role_color ||
                n?.channelBenefits?.length !== a.channels.length ||
                n?.intangibleBenefits?.length !== a.additional_perks.length
            )
                return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            for (let e = 0; e < a.channels.length; e++) {
                let t = n.channelBenefits[e],
                    i = a.channels[e];
                if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
                    return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            }
            for (let e = 0; e < a.additional_perks.length; e++) {
                let t = n.intangibleBenefits[e],
                    i = a.additional_perks[e];
                if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
                    return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            }
            return { templateCategory: r.category, hasChangeFromTemplate: !1 };
        },
        SY: function (e) {
            let t = f(e);
            ((p[e] = t),
                t.forEach((e) => {
                    let t = e.set("flags", E.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    s.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
                }));
        },
        aV: function (e) {
            return (0, S.X9)(e) && e.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
        },
        fE: function (e) {
            let t = (0, a.bG)([o.A], () => o.A.getChannel(e)),
                n = (0, a.bG)([_.A], () => _.A.getChannel(e)),
                s = (0, a.bG)([d.A], () => d.A.getBenefitChannel(e)),
                l = (0, i.useMemo)(
                    () =>
                        null != t && t.isObfuscated() && null != s
                            ? t.merge({ name: s.name, flags: r.VL(t.flags, E.lx.OBFUSCATED) })
                            : null,
                    [t, s],
                );
            return null == t ? n : t.isObfuscated() ? (l ?? t) : t;
        },
        pF: async function (e, t) {
            let n = [],
                i = [];
            (t.forEach((t) => {
                let r = _.A.getChannel(t.ref_id);
                null != r && (n.push(l.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
            }),
                0 === n.length ||
                    (await Promise.allSettled(n)).forEach((n, r) => {
                        let a = i[r].id;
                        if ("fulfilled" === n.status) {
                            let t = n.value.body,
                                i = c.y.getState().editStateIdsForGroup[e],
                                r = c.y.getState().listings;
                            null != i &&
                                i.forEach((e) => {
                                    let n = r[e]?.channelBenefits;
                                    n?.forEach((e) => {
                                        e.ref_id === a && (e.ref_id = t.id);
                                    });
                                });
                        } else if (null != t) {
                            let e = t.findIndex((e) => e.ref_id === a);
                            -1 !== e && t?.splice(e, 1);
                        }
                    }));
        },
        zu: function (e, t, n) {
            let i = (0, a.bG)([d.A], () => d.A.getSubscriptionListingsForGuild(e)),
                r = (0, c.y)((t) => t.editStateIdsForGroup[e]),
                s = (0, c.y)((e) => e.listings);
            if (void 0 === n || void 0 === t) return null;
            let l = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
                o = [];
            void 0 !== r &&
                r.forEach((e) => {
                    let t = s[e],
                        n = t?.priceTier;
                    null != n && o.push(n);
                });
            let u = new Set(o.concat(l));
            if (!u.has(n)) return null;
            let S = t.indexOf(n);
            if (-1 === S) return null;
            let _ = [];
            for (let e = S + 1; e < t.length && (u.has(t[e]) || _.push(t[e]), 3 !== _.length); e++);
            return _;
        },
    },
);
