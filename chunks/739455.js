(i(938796), i(321073));
var l = i(582128),
    n = i(665260),
    a = i(164636),
    s = i(73153),
    r = i(755584),
    o = i(734057),
    c = i(567305),
    d = i(636194),
    h = i(846922),
    u = i(555325),
    _ = i(74399),
    S = i(652215),
    p = i(746080);
let f = {};
function C(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        i = h.y.getState().listings,
        l = new Set();
    null != t &&
        t.forEach((e) => {
            let t = i[e]?.channelBenefits;
            t?.forEach((e) => {
                null != _.A.getChannel(e.ref_id) && l.add(e.ref_id);
            });
        });
    let n = [];
    for (let t of l) {
        let i = _.A.getChannel(t);
        if (null != i) {
            let t = i.set("guild_id", e);
            n.push(t);
        }
    }
    return n;
}
i.d(
    t,
    {},
    {
        Fx: function (e) {
            (f[e] ?? C(e)).forEach((e) => {
                s.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
            });
        },
        JH: function (e, t) {
            let i = h.y.getState().listings[e],
                l = i?.usedTemplate;
            if (null == l) return { templateCategory: null, hasChangeFromTemplate: null };
            let n = _.A.getTemplateWithCategory(t, l);
            if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
            let a = n.listings[0];
            if (
                i?.name !== a.name ||
                i?.description !== a.description ||
                i?.priceTier !== a.price_tier ||
                i?.image !== a.image ||
                i?.roleColor !== a.role_color ||
                i?.channelBenefits?.length !== a.channels.length ||
                i?.intangibleBenefits?.length !== a.additional_perks.length
            )
                return { templateCategory: n.category, hasChangeFromTemplate: !0 };
            for (let e = 0; e < a.channels.length; e++) {
                let t = i.channelBenefits[e],
                    l = a.channels[e];
                if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
                    return { templateCategory: n.category, hasChangeFromTemplate: !0 };
            }
            for (let e = 0; e < a.additional_perks.length; e++) {
                let t = i.intangibleBenefits[e],
                    l = a.additional_perks[e];
                if (t.name !== l.name || t.description !== l.description || t.emoji_name !== l.emoji_name)
                    return { templateCategory: n.category, hasChangeFromTemplate: !0 };
            }
            return { templateCategory: n.category, hasChangeFromTemplate: !1 };
        },
        SY: function (e) {
            let t = C(e);
            ((f[e] = t),
                t.forEach((e) => {
                    let t = e.set("flags", p.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    s.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
                }));
        },
        aV: function (e) {
            return (0, u.X9)(e) && e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.TG)(e.id);
        },
        fE: function (e) {
            let t = (0, a.bG)([o.A], () => o.A.getChannel(e)),
                i = (0, a.bG)([_.A], () => _.A.getChannel(e)),
                s = (0, a.bG)([d.A], () => d.A.getBenefitChannel(e)),
                r = (0, l.useMemo)(
                    () =>
                        null != t && t.isObfuscated() && null != s
                            ? t.merge({ name: s.name, flags: n.VL(t.flags, p.lx.OBFUSCATED) })
                            : null,
                    [t, s],
                );
            return null == t ? i : t.isObfuscated() ? (r ?? t) : t;
        },
        pF: async function (e, t) {
            let i = [],
                l = [];
            (t.forEach((t) => {
                let n = _.A.getChannel(t.ref_id);
                null != n && (i.push(r.A.createRoleSubscriptionTemplateChannel(e, n.name, n.type, n.topic)), l.push(n));
            }),
                0 === i.length ||
                    (await Promise.allSettled(i)).forEach((i, n) => {
                        let a = l[n].id;
                        if ("fulfilled" === i.status) {
                            let t = i.value.body,
                                l = h.y.getState().editStateIdsForGroup[e],
                                n = h.y.getState().listings;
                            null != l &&
                                l.forEach((e) => {
                                    let i = n[e]?.channelBenefits;
                                    i?.forEach((e) => {
                                        e.ref_id === a && (e.ref_id = t.id);
                                    });
                                });
                        } else if (null != t) {
                            let e = t.findIndex((e) => e.ref_id === a);
                            -1 !== e && t?.splice(e, 1);
                        }
                    }));
        },
        zu: function (e, t, i) {
            let l = (0, a.bG)([d.A], () => d.A.getSubscriptionListingsForGuild(e)),
                n = (0, h.y)((t) => t.editStateIdsForGroup[e]),
                s = (0, h.y)((e) => e.listings);
            if (void 0 === i || void 0 === t) return null;
            let r = l.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
                o = [];
            void 0 !== n &&
                n.forEach((e) => {
                    let t = s[e],
                        i = t?.priceTier;
                    null != i && o.push(i);
                });
            let c = new Set(o.concat(r));
            if (!c.has(i)) return null;
            let u = t.indexOf(i);
            if (-1 === u) return null;
            let _ = [];
            for (let e = u + 1; e < t.length && (c.has(t[e]) || _.push(t[e]), 3 !== _.length); e++);
            return _;
        },
    },
);
