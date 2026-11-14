(n(938796), n(321073));
var i = n(582128),
    r = n(665260),
    l = n(164636),
    a = n(73153),
    s = n(755584),
    o = n(734057),
    u = n(567305),
    d = n(636194),
    c = n(846922),
    S = n(555325),
    E = n(74399),
    _ = n(652215),
    h = n(746080);
let C = {};
function f(e) {
    let t = c.y.getState().editStateIdsForGroup[e],
        n = c.y.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
                null != E.A.getChannel(e.ref_id) && i.add(e.ref_id);
            });
        });
    let r = [];
    for (let t of i) {
        let n = E.A.getChannel(t);
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
            (C[e] ?? f(e)).forEach((e) => {
                a.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
            });
        },
        JH: function (e, t) {
            let n = c.y.getState().listings[e],
                i = n?.usedTemplate;
            if (null == i) return { templateCategory: null, hasChangeFromTemplate: null };
            let r = E.A.getTemplateWithCategory(t, i);
            if (null == r) return { templateCategory: null, hasChangeFromTemplate: null };
            let l = r.listings[0];
            if (
                n?.name !== l.name ||
                n?.description !== l.description ||
                n?.priceTier !== l.price_tier ||
                n?.image !== l.image ||
                n?.roleColor !== l.role_color ||
                n?.channelBenefits?.length !== l.channels.length ||
                n?.intangibleBenefits?.length !== l.additional_perks.length
            )
                return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            for (let e = 0; e < l.channels.length; e++) {
                let t = n.channelBenefits[e],
                    i = l.channels[e];
                if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
                    return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            }
            for (let e = 0; e < l.additional_perks.length; e++) {
                let t = n.intangibleBenefits[e],
                    i = l.additional_perks[e];
                if (t.name !== i.name || t.description !== i.description || t.emoji_name !== i.emoji_name)
                    return { templateCategory: r.category, hasChangeFromTemplate: !0 };
            }
            return { templateCategory: r.category, hasChangeFromTemplate: !1 };
        },
        SY: function (e) {
            let t = f(e);
            ((C[e] = t),
                t.forEach((e) => {
                    let t = e.set("flags", h.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    a.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
                }));
        },
        aV: function (e) {
            return (0, S.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.TG)(e.id);
        },
        fE: function (e) {
            let t = (0, l.bG)([o.A], () => o.A.getChannel(e)),
                n = (0, l.bG)([E.A], () => E.A.getChannel(e)),
                a = (0, l.bG)([d.A], () => d.A.getBenefitChannel(e)),
                s = (0, i.useMemo)(
                    () =>
                        null != t && t.isObfuscated() && null != a
                            ? t.merge({ name: a.name, flags: r.VL(t.flags, h.lx.OBFUSCATED) })
                            : null,
                    [t, a],
                );
            return null == t ? n : t.isObfuscated() ? (s ?? t) : t;
        },
        pF: async function (e, t) {
            let n = [],
                i = [];
            (t.forEach((t) => {
                let r = E.A.getChannel(t.ref_id);
                null != r && (n.push(s.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
            }),
                0 === n.length ||
                    (await Promise.allSettled(n)).forEach((n, r) => {
                        let l = i[r].id;
                        if ("fulfilled" === n.status) {
                            let t = n.value.body,
                                i = c.y.getState().editStateIdsForGroup[e],
                                r = c.y.getState().listings;
                            null != i &&
                                i.forEach((e) => {
                                    let n = r[e]?.channelBenefits;
                                    n?.forEach((e) => {
                                        e.ref_id === l && (e.ref_id = t.id);
                                    });
                                });
                        } else if (null != t) {
                            let e = t.findIndex((e) => e.ref_id === l);
                            -1 !== e && t?.splice(e, 1);
                        }
                    }));
        },
        zu: function (e, t, n) {
            let i = (0, l.bG)([d.A], () => d.A.getSubscriptionListingsForGuild(e)),
                r = (0, c.y)((t) => t.editStateIdsForGroup[e]),
                a = (0, c.y)((e) => e.listings);
            if (void 0 === n || void 0 === t) return null;
            let s = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
                o = [];
            void 0 !== r &&
                r.forEach((e) => {
                    let t = a[e],
                        n = t?.priceTier;
                    null != n && o.push(n);
                });
            let u = new Set(o.concat(s));
            if (!u.has(n)) return null;
            let S = t.indexOf(n);
            if (-1 === S) return null;
            let E = [];
            for (let e = S + 1; e < t.length && (u.has(t[e]) || E.push(t[e]), 3 !== E.length); e++);
            return E;
        },
    },
);
