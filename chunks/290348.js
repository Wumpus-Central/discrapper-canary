n.d(t, {
    B7: () => et,
    Ek: () => U,
    F2: () => W,
    GM: () => Q,
    GP: () => F,
    H9: () => q,
    Lo: () => X,
    PK: () => D,
    R7: () => B,
    TT: () => Y,
    UE: () => j,
    XZ: () => z,
    Xo: () => ee,
    _T: () => Z,
    d9: () => w,
    mR: () => R,
    p9: () => M,
    qs: () => x,
    rU: () => K
}),
    n(47120);
var i = n(192379),
    l = n(512722),
    r = n.n(l),
    s = n(392711),
    a = n(772848),
    o = n(866442),
    d = n(731965),
    u = n(442837),
    c = n(80932),
    h = n(749210),
    g = n(211266),
    f = n(339085),
    p = n(73346),
    C = n(817460),
    v = n(423117),
    E = n(584825),
    _ = n(289393),
    m = n(790285),
    I = n(303737),
    S = n(971792),
    T = n(22902),
    N = n(403474),
    y = n(944537),
    A = n(293810),
    O = n(981631),
    b = n(474936);
function P(e, t, n) {
    let l = (0, y.n)((e) => e.setListing),
        r = i.useCallback(
            (i) => {
                l(e, (e) => {
                    var l;
                    let r = null !== (l = null == e ? void 0 : e[t]) && void 0 !== l ? l : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof i ? i(r) : i });
                });
            },
            [l, e, t, n]
        ),
        s = (0, y.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
        });
    return [void 0 !== s ? s : n, r];
}
function L(e, t) {
    let n = (0, u.e7)([_.Z], () => _.Z.getSubscriptionListing(e)),
        l = (0, g.Z)(() => t);
    return i.useMemo(() => l(n), [n, l]);
}
function Z(e) {
    let t = L(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '';
    });
    return P(e, 'name', t);
}
function R(e) {
    let t = L(e, (e) => {
        var t;
        return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
    });
    return P(e, 'priceTier', t);
}
function D(e) {
    let t = L(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : '';
    });
    return P(e, 'description', t);
}
function w(e, t) {
    let n = L(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, p._W)(e.application_id, e.image_asset, t);
    });
    return P(e, 'image', n);
}
function M(e, t) {
    let n = (0, S.Z)(t, e);
    return P(
        e,
        'roleIcon',
        i.useMemo(() => {
            var e, t;
            return {
                icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
                unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
            };
        }, [n])
    );
}
function x(e, t) {
    let n = (0, S.Z)(t, e),
        l = (0, y.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor;
        }),
        r = (0, y.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let e = { ...(null != n ? n : N.k) };
        if (void 0 !== r) {
            var t, i;
            (e.icon = null !== (t = r.icon) && void 0 !== t ? t : ''), (e.unicodeEmoji = null !== (i = r.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== l && ((e.color = l), (e.colorString = (0, o.Rf)(l))), e;
    }, [n, r, l]);
}
function U(e, t) {
    let n = (0, S.Z)(t, e);
    return P(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : O.p6O;
        }, [n])
    );
}
function F(e, t) {
    let n = (0, S.Z)(t, e);
    return P(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == n ? y.I.SOME_CHANNELS_ACCESS : (0, m.MT)(n) ? y.I.ALL_CHANNELS_ACCESS : y.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let G = [];
function j(e) {
    let t = L(e, (e) => (null == e ? G : e.role_benefits.benefits.filter(C.rC)));
    return P(e, 'channelBenefits', t);
}
let H = [];
function B(e) {
    let t = L(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(C.lL)));
    return P(e, 'intangibleBenefits', t);
}
let k = new Set();
function V(e, t) {
    return 0 === e.length
        ? k
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  })
          );
}
function z(e, t) {
    let n = (0, S.Z)(t, e),
        l = (0, u.Wu)([f.ZP], () => f.ZP.getGuildEmoji(t), [t]);
    return P(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == n ? k : V(l, n.id)), [l, n])
    );
}
function Y(e) {
    var t;
    let n = (0, E.oC)(e),
        { selectedOption: i } = (0, T.Z)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
    return P(e, 'trialInterval', null != i ? i : null);
}
function W(e) {
    var t;
    let n = (0, E.oC)(e);
    return P(e, 'trialLimit', null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null);
}
function K(e) {
    return (0, y.n)((t) => void 0 !== t.listings[e]);
}
function X(e) {
    return (0, y.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function q(e) {
    let t = L(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = P(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, l, r, s;
            return {
                price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == t ? void 0 : t.currency) && void 0 !== i ? i : O.pKx.USD,
                interval: null !== (l = null == t ? void 0 : t.interval) && void 0 !== l ? l : b.rV.MONTH,
                interval_count: null !== (r = null == t ? void 0 : t.interval_count) && void 0 !== r ? r : 1,
                id: null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : ''
            };
        }, [t, n])
    ];
}
function Q(e) {
    (0, d.j)(() => {
        y.n.setState((t) => ({
            listings: {
                ...t.listings,
                [e]: t.listings.nonexistantEditStateId
            }
        }));
    });
}
async function J(e) {
    let { guildId: t, editStateId: n } = e,
        i = _.Z.getSubscriptionListing(n);
    r()(null != i, 'listing doesnt exist');
    let l = i.role_id,
        a = i.id,
        o = y.n.getState().listings[n];
    r()(null != o, 'edit state does not exist');
    let { roleColor: d, roleIcon: u, trialLimit: g, trialInterval: p, tierEmojiIds: C } = o;
    (void 0 !== d || void 0 !== u) &&
        (await h.Z.updateRole(t, l, {
            color: d,
            icon: null == u ? void 0 : u.icon,
            unicodeEmoji: null == u ? void 0 : u.unicodeEmoji
        }));
    let E = _.Z.getSubscriptionTrial(a);
    if (
        ((null != g || null != p || (null != E && null == p)) &&
            (await v.I1(t, a, {
                trial: p,
                max_num_active_trial_users: g
            })),
        void 0 !== C)
    ) {
        let e = V(f.ZP.getGuildEmoji(t), l),
            n = (0, s.difference)([...C], [...e]),
            i = (0, s.difference)([...e], [...C]),
            r = n
                .map((e) => f.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, c.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, l]
                        });
                }),
            a = i
                .map((e) => f.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== l);
                    return n.length > 0
                        ? (0, c.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n
                          })
                        : (0, c.RE)(t, e.id);
                });
        await Promise.all([...r, ...a]);
    }
}
async function $(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: l } = e,
        s = y.n.getState().listings[n];
    r()(null != s, 'edit state does not exist');
    let { name: a, description: o, channelBenefits: d, intangibleBenefits: u, priceTier: c, image: h, channelAccessFormat: g } = s;
    r()(null != a, 'no name provided'), r()(null != o, 'no description provided'), r()(null != c, 'no priceTier provided'), r()(null != h, 'no image provided');
    let f = g === y.I.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await v.uw(t, {})).id), null != d && d.length > 0 && (await (0, I.r4)(t, d));
    let C = [...(null != d ? d : []), ...(null != u ? u : [])],
        E = (0, I.yL)(n, t);
    return v.dA({
        guildId: t,
        groupListingId: p,
        data: {
            can_access_all_channels: f,
            image: h,
            name: a,
            description: o,
            benefits: C,
            priceTier: c
        },
        analyticsContext: E,
        onBeforeDispatchNewListing: l
    });
}
function ee() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let { guildId: n, editStateId: i, groupListingId: a, onBeforeDispatchNewListing: o, onAfterDispatchNewListing: u } = e,
                c = i,
                h = _.Z.getSubscriptionListing(c);
            try {
                if ((t(!0), l(void 0), null != h))
                    r()(null != a, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: i, groupListingId: l } = e,
                                a = _.Z.getSubscriptionListing(i);
                            r()(null != a, 'listing doesnt exist');
                            let o = y.n.getState().listings[i];
                            r()(null != o, 'edit state does not exist');
                            let { name: d, description: u, channelBenefits: c, intangibleBenefits: h, priceTier: g, image: f, channelAccessFormat: p } = o,
                                E = {};
                            if ((d !== a.name && (E.name = d), u !== a.description && (E.description = u), g !== (null === (t = a.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (E.priceTier = g), null != f && (E.image = f), null != p && (E.can_access_all_channels = p === y.I.ALL_CHANNELS_ACCESS), null != c || null != h)) {
                                let e = a.role_benefits.benefits.filter(C.rC),
                                    t = a.role_benefits.benefits.filter(C.lL),
                                    n = [...(null != c ? c : e), ...(null != h ? h : t)];
                                E.benefits = n;
                            }
                            return (0, s.isEmpty)(E)
                                ? a
                                : v.O0({
                                      guildId: n,
                                      groupListingId: l,
                                      listingId: i,
                                      data: E
                                  });
                        })({
                            guildId: n,
                            editStateId: c,
                            groupListingId: a
                        });
                else {
                    var g;
                    let e = await $({
                        guildId: n,
                        editStateId: c,
                        groupListingId: a,
                        onBeforeDispatchNewListing: o
                    });
                    (g = c = e.id),
                        (0, d.j)(() => {
                            y.n.setState((e) => ({
                                listings: {
                                    ...e.listings,
                                    [g]: e.listings[i],
                                    [i]: void 0
                                }
                            }));
                        }),
                        null == u || u(e);
                }
                return (
                    await J({
                        guildId: n,
                        editStateId: c
                    }),
                    Q(c),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                l(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function et(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        l = (0, E._k)(e, n),
        r = (0, y.n)((e) => e.editStateIdsForGroup[t]),
        s = (0, y.n)((e) => e.setEditStateIdsForGroup),
        o = (0, y.n)((e) => e.setListing),
        d = i.useMemo(
            () => [
                ...l.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != r ? r : [])
            ],
            [r, l]
        ),
        u = i.useCallback(() => {
            let e = (0, a.Z)();
            s(t, (t) => [...(null != t ? t : []), e]);
        }, [t, s]);
    return {
        editStateIds: d,
        addNewEditStateId: u,
        addNewEditStateFromTemplate: i.useCallback(
            (e) => {
                let n = (0, a.Z)();
                return (
                    s(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        o(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: A.Qs.CHANNEL,
                                description: e.description,
                                name: e.name,
                                emoji_name: e.emoji_name
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: t.image
                            },
                            roleColor: t.role_color,
                            usedTemplate: e.category
                        }));
                    }),
                    n
                );
            },
            [t, s, o]
        ),
        removeEditStateId: i.useCallback(
            (e) => {
                s(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, s]
        )
    };
}
