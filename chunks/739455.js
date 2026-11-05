(i(938796), i(321073));
var n = i(582128),
    r = i(665260),
    a = i(164636),
    s = i(73153),
    l = i(755584),
    o = i(734057),
    _ = i(567305),
    u = i(636194),
    d = i(846922),
    S = i(555325),
    c = i(74399),
    E = i(652215),
    I = i(746080);
let A = {};
function C(e) {
    let t = d.y.getState().editStateIdsForGroup[e],
        i = d.y.getState().listings,
        n = new Set();
    null != t &&
        t.forEach((e) => {
            let t = i[e]?.channelBenefits;
            t?.forEach((e) => {
                null != c.A.getChannel(e.ref_id) && n.add(e.ref_id);
            });
        });
    let r = [];
    for (let t of n) {
        let i = c.A.getChannel(t);
        if (null != i) {
            let t = i.set("guild_id", e);
            r.push(t);
        }
    }
    return r;
}
i.d(
    t,
    {},
    {
        Fx: function (e) {
            (A[e] ?? C(e)).forEach((e) => {
                s.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
            });
        },
        JH: function (e, t) {
            let i = d.y.getState().listings[e],
                n = i?.usedTemplate;
            if (null == n) return { templateCategory: null, hasChangeFromTemplate: null };
            let r = c.A.getTemplateWithCategory(t, n);
            if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
            let a = r.listings[0];
            if (
                i?.name !== a.name ||
                i?.description !== a.description ||
                i?.priceTier !== a.price_tier ||
                i?.image !== a.image ||
                i?.roleColor !== a.role_color ||
                i?.channelBenefits?.length !== a.channels.length ||
                i?.intangibleBenefits?.length !== a.additional_perks.length
            )
                return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            for (let e = 0; e < a.channels.length; e++) {
                let t = i.channelBenefits[e],
                    n = a.channels[e];
                if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
                    return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            }
            for (let e = 0; e < a.additional_perks.length; e++) {
                let t = i.intangibleBenefits[e],
                    n = a.additional_perks[e];
                if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
                    return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            }
            return { templateCategory: r.category, hasChangeFromTemplate: !1 };
        },
        SY: function (e) {
            let t = C(e);
            ((A[e] = t),
                t.forEach((e) => {
                    let t = e.set("flags", I.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    s.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
                }));
        },
        aV: function (e) {
            return (0, S.X9)(e) && e.features.has(E.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, _.TG)(e.id);
        },
        fE: function (e) {
            let t = (0, a.bG)([o.A], () => o.A.getChannel(e)),
                i = (0, a.bG)([c.A], () => c.A.getChannel(e)),
                s = (0, a.bG)([u.A], () => u.A.getBenefitChannel(e)),
                l = (0, n.useMemo)(
                    () =>
                        null != t && t.isObfuscated() && null != s
                            ? t.merge({ name: s.name, flags: r.VL(t.flags, I.lx.OBFUSCATED) })
                            : null,
                    [t, s],
                );
            return null == t ? i : t.isObfuscated() ? (l ?? t) : t;
        },
        pF: async function (e, t) {
            let i = [],
                n = [];
            (t.forEach((t) => {
                let r = c.A.getChannel(t.ref_id);
                null != r && (i.push(l.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), n.push(r));
            }),
                0 === i.length ||
                    (await Promise.allSettled(i)).forEach((i, r) => {
                        let a = n[r].id;
                        if ("fulfilled" === i.status) {
                            let t = i.value.body,
                                n = d.y.getState().editStateIdsForGroup[e],
                                r = d.y.getState().listings;
                            null != n &&
                                n.forEach((e) => {
                                    let i = r[e]?.channelBenefits;
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
            let n = (0, a.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
                r = (0, d.y)((t) => t.editStateIdsForGroup[e]),
                s = (0, d.y)((e) => e.listings);
            if (void 0 === i || void 0 === t) return null;
            let l = n.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
                o = [];
            void 0 !== r &&
                r.forEach((e) => {
                    let t = s[e],
                        i = t?.priceTier;
                    null != i && o.push(i);
                });
            let _ = new Set(o.concat(l));
            if (!_.has(i)) return null;
            let S = t.indexOf(i);
            if (-1 === S) return null;
            let c = [];
            for (let e = S + 1; e < t.length && (_.has(t[e]) || c.push(t[e]), 3 !== c.length); e++);
            return c;
        },
    },
);
