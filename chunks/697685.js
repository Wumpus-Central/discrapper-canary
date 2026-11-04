i.d(t, {
    Ts: () => q,
    W5: () => F,
    lZ: () => R,
    j1: () => Q,
    I8: () => G,
    d0: () => ee,
    rf: () => z,
    Zw: () => V,
    lK: () => B,
    $O: () => Y,
    tx: () => M,
    bL: () => k,
    It: () => D,
    xR: () => O,
    $7: () => H,
    A_: () => X,
    UN: () => $,
    V_: () => P,
    hh: () => Z,
});
var n = i(582128),
    l = i(284009),
    r = i.n(l),
    o = i(435558),
    s = i(115560),
    a = i(317097),
    u = i(121894),
    c = i(855986),
    d = i(554375),
    m = i(778858),
    g = i(444927),
    f = i(121681),
    p = i(371794),
    _ = i(500345),
    S = i(579908),
    v = i(599941),
    A = i(636194),
    y = i(855918),
    E = i(739455),
    b = i(881288),
    h = i(244912),
    C = i(9865),
    I = i(652215);
let L = (0, C.np)({
    id: "0",
    guildId: "0",
    name: "",
    mentionable: !1,
    managed: !1,
    position: 0,
    hoist: !1,
    permissions: I.xBc.SEND_MESSAGES,
    color: 0,
    colors: { primary_color: 0, secondary_color: null, tertiary_color: null },
    colorString: "0",
    colorStrings: { primaryColor: "0", secondaryColor: null, tertiaryColor: null },
    icon: null,
    unicodeEmoji: null,
    flags: 0,
    description: null,
    tags: {},
    version: 0,
});
var N = i(846922),
    j = i(2242),
    T = i(682901);
function w(e, t, i) {
    let l = (0, N.y)((e) => e.setListing),
        r = n.useCallback(
            (n) => {
                l(e, (e) => {
                    let l = e?.[t] ?? i;
                    return Object.assign({}, e, { [t]: "function" == typeof n ? n(l) : n });
                });
            },
            [l, e, t, i],
        ),
        o = (0, N.y)((i) => i.listings[e]?.[t]);
    return [void 0 !== o ? o : i, r];
}
function x(e, t) {
    let i = (0, c.bG)([A.A], () => A.A.getSubscriptionListing(e)),
        l = (0, g.A)(() => t);
    return n.useMemo(() => l(i), [i, l]);
}
function M(e) {
    let t = x(e, (e) => e?.name ?? "");
    return w(e, "name", t);
}
function k(e) {
    let t = x(e, (e) => e?.subscription_plans[0]?.price);
    return w(e, "priceTier", t);
}
function G(e) {
    let t = x(e, (e) => e?.description ?? "");
    return w(e, "description", t);
}
function B(e, t) {
    let i = x(e, (e) => {
        if (e?.image_asset != null) return (0, p.YE)(e.application_id, e.image_asset, t);
    });
    return w(e, "image", i);
}
function H(e, t) {
    let i = (0, b.A)(t, e);
    return w(
        e,
        "roleIcon",
        n.useMemo(() => ({ icon: i?.icon ?? void 0, unicodeEmoji: i?.unicodeEmoji ?? void 0 }), [i]),
    );
}
function D(e, t) {
    let i = (0, b.A)(t, e),
        l = (0, N.y)((t) => t.listings[e]?.roleColor),
        r = (0, N.y)((t) => t.listings[e]?.roleIcon);
    return n.useMemo(() => {
        let e = { ...(i ?? L) };
        return (
            void 0 !== r && ((e.icon = r.icon ?? ""), (e.unicodeEmoji = r.unicodeEmoji ?? "")),
            void 0 !== l && ((e.color = l), (e.colorString = (0, a.Hl)(l))),
            e
        );
    }, [i, r, l]);
}
function O(e, t) {
    let i = (0, b.A)(t, e);
    return w(
        e,
        "roleColor",
        n.useMemo(() => i?.color ?? I.TGz, [i]),
    );
}
function F(e, t) {
    let i = (0, b.A)(t, e);
    return w(
        e,
        "channelAccessFormat",
        n.useMemo(
            () =>
                null == i
                    ? N.h.SOME_CHANNELS_ACCESS
                    : (0, y.iR)(i)
                      ? N.h.ALL_CHANNELS_ACCESS
                      : N.h.SOME_CHANNELS_ACCESS,
            [i],
        ),
    );
}
let J = [];
function R(e) {
    let t = x(e, (e) => (null == e ? J : e.role_benefits.benefits.filter(_.B1)));
    return w(e, "channelBenefits", t);
}
let W = [];
function Y(e) {
    let t = x(e, (e) => (null == e ? W : e.role_benefits.benefits.filter(_.b1)));
    return w(e, "intangibleBenefits", t);
}
let K = new Set();
function U(e, t) {
    return 0 === e.length
        ? K
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function $(e, t) {
    let i = (0, b.A)(t, e),
        l = (0, c.yK)([f.Ay], () => f.Ay.getGuildEmoji(t), [t]);
    return w(
        e,
        "tierEmojiIds",
        n.useMemo(() => (null == i ? K : U(l, i.id)), [l, i]),
    );
}
function P(e) {
    let t = (0, v.dL)(e),
        { selectedOption: i } = (0, h.A)(t?.active_trial ?? null);
    return w(e, "trialInterval", i ?? null);
}
function Z(e) {
    let t = (0, v.dL)(e);
    return w(e, "trialLimit", t?.max_num_active_trial_users ?? null);
}
function z(e) {
    return (0, N.y)((t) => void 0 !== t.listings[e]);
}
function V(e) {
    return (0, N.y)((t) => {
        for (let i of e) if (void 0 !== t.listings[i]) return !0;
        return !1;
    });
}
function X(e) {
    let t = x(e, (e) => e?.subscription_plans[0]),
        [i] = w(e, "priceTier", void 0);
    return [
        n.useMemo(
            () => ({
                price: i ?? t?.price ?? 0,
                currency: t?.currency ?? I.Yri.USD,
                interval: t?.interval ?? T.WT.MONTH,
                interval_count: t?.interval_count ?? 1,
                id: t?.id ?? "",
            }),
            [t, i],
        ),
    ];
}
function q(e) {
    (0, u.r)(() => {
        N.y.setState((t) => ({ listings: { ...t.listings, [e]: t.listings.nonexistantEditStateId } }));
    });
}
function Q() {
    let [e, t] = n.useState(!1),
        [i, l] = n.useState();
    return {
        loading: e,
        error: i,
        handleCreateOrUpdateFromEditState: n.useCallback(async (e) => {
            let {
                    guildId: i,
                    editStateId: n,
                    groupListingId: s,
                    onBeforeDispatchNewListing: a,
                    onAfterDispatchNewListing: c,
                } = e,
                g = n,
                p = A.A.getSubscriptionListing(g);
            try {
                if ((t(!0), l(void 0), null != p))
                    (r()(null != s, "groupListingId is null"),
                        await (function (e) {
                            let { guildId: t, editStateId: i, groupListingId: n } = e,
                                l = A.A.getSubscriptionListing(i);
                            r()(null != l, "listing doesnt exist");
                            let s = N.y.getState().listings[i];
                            r()(null != s, "edit state does not exist");
                            let {
                                    name: a,
                                    description: u,
                                    channelBenefits: c,
                                    intangibleBenefits: d,
                                    priceTier: m,
                                    image: g,
                                    channelAccessFormat: f,
                                } = s,
                                p = {};
                            if (
                                (a !== l.name && (p.name = a),
                                u !== l.description && (p.description = u),
                                m !== l.subscription_plans[0]?.price && (p.priceTier = m),
                                null != g && (p.image = g),
                                null != f && (p.can_access_all_channels = f === N.h.ALL_CHANNELS_ACCESS),
                                null != c || null != d)
                            ) {
                                let e = l.role_benefits.benefits.filter(_.B1),
                                    t = l.role_benefits.benefits.filter(_.b1);
                                p.benefits = [...(c ?? e), ...(d ?? t)];
                            }
                            return (0, o.isEmpty)(p)
                                ? l
                                : S.vW({ guildId: t, groupListingId: n, listingId: i, data: p });
                        })({ guildId: i, editStateId: g, groupListingId: s }));
                else {
                    var v;
                    let e = await (async function (e) {
                        let { guildId: t, editStateId: i, groupListingId: n, onBeforeDispatchNewListing: l } = e,
                            o = N.y.getState().listings[i];
                        r()(null != o, "edit state does not exist");
                        let {
                            name: s,
                            description: a,
                            channelBenefits: u,
                            intangibleBenefits: c,
                            priceTier: d,
                            image: m,
                            channelAccessFormat: g,
                        } = o;
                        (r()(null != s, "no name provided"),
                            r()(null != a, "no description provided"),
                            r()(null != d, "no priceTier provided"),
                            r()(null != m, "no image provided"));
                        let f = g === N.h.ALL_CHANNELS_ACCESS,
                            p = n;
                        (null == p && (p = (await S.J4(t, {})).id),
                            null != u && u.length > 0 && (await (0, E.pF)(t, u)));
                        let _ = [...(u ?? []), ...(c ?? [])],
                            v = (0, E.JH)(i, t);
                        return S.K0({
                            guildId: t,
                            groupListingId: p,
                            data: {
                                can_access_all_channels: f,
                                image: m,
                                name: s,
                                description: a,
                                benefits: _,
                                priceTier: d,
                            },
                            analyticsContext: v,
                            onBeforeDispatchNewListing: l,
                        });
                    })({ guildId: i, editStateId: g, groupListingId: s, onBeforeDispatchNewListing: a });
                    ((g = e.id),
                        (v = g),
                        (0, u.r)(() => {
                            N.y.setState((e) => ({ listings: { ...e.listings, [v]: e.listings[n], [n]: void 0 } }));
                        }),
                        c?.(e));
                }
                return (
                    await (async function (e) {
                        let { guildId: t, editStateId: i } = e,
                            n = A.A.getSubscriptionListing(i);
                        r()(null != n, "listing doesnt exist");
                        let l = n.role_id,
                            s = n.id,
                            a = N.y.getState().listings[i];
                        r()(null != a, "edit state does not exist");
                        let { roleColor: u, roleIcon: c, trialLimit: g, trialInterval: p, tierEmojiIds: _ } = a;
                        (void 0 !== u || void 0 !== c) &&
                            (await m.A.updateRole(t, l, { color: u, icon: c?.icon, unicodeEmoji: c?.unicodeEmoji }));
                        let v = A.A.getSubscriptionTrial(s);
                        if (
                            ((null != g || null != p || (null != v && null == p)) &&
                                (await S.J1(t, s, { trial: p, max_num_active_trial_users: g })),
                            void 0 !== _)
                        ) {
                            let e = U(f.Ay.getGuildEmoji(t), l),
                                i = (0, o.difference)([..._], [...e]),
                                n = (0, o.difference)([...e], [..._]),
                                r = i.map((e) => {
                                    let i = f.Ay.getCustomEmojiById(e);
                                    if (null != i)
                                        return (0, d.Cp)({ guildId: t, emojiId: i.id, roles: [...i.roles, l] });
                                }),
                                s = n.map((e) => {
                                    let i = f.Ay.getCustomEmojiById(e);
                                    if (null == i) return;
                                    let n = i.roles.filter((e) => e !== l);
                                    return n.length > 0
                                        ? (0, d.Cp)({ guildId: t, emojiId: i.id, roles: n })
                                        : (0, d.ak)(t, i.id);
                                });
                            await Promise.all([...r, ...s]);
                        }
                    })({ guildId: i, editStateId: g }),
                    q(g),
                    !0
                );
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                l(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function ee(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        l = (0, v.cY)(e, i),
        r = (0, N.y)((e) => e.editStateIdsForGroup[t]),
        o = (0, N.y)((e) => e.setEditStateIdsForGroup),
        a = (0, N.y)((e) => e.setListing),
        u = n.useMemo(
            () => [
                ...l.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(r ?? []),
            ],
            [r, l],
        ),
        c = n.useCallback(() => {
            let e = (0, s.A)();
            o(t, (t) => [...(t ?? []), e]);
        }, [t, o]);
    return {
        editStateIds: u,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: n.useCallback(
            (e) => {
                let i = (0, s.A)();
                return (
                    o(t, (e) => [...(e ?? []), i]),
                    e.listings.forEach((t) => {
                        a(i, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: j.bN.CHANNEL,
                                description: e.description,
                                name: e.name,
                                emoji_name: e.emoji_name,
                            })),
                            roleIcon: { unicodeEmoji: void 0, icon: t.image },
                            roleColor: t.role_color,
                            usedTemplate: e.category,
                        }));
                    }),
                    i
                );
            },
            [t, o, a],
        ),
        removeEditStateId: n.useCallback(
            (e) => {
                o(t, (t) => (t ?? []).filter((t) => t !== e));
            },
            [t, o],
        ),
    };
}
