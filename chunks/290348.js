n.d(t, {
    B7: () => ei,
    Ek: () => G,
    F2: () => X,
    GM: () => $,
    GP: () => F,
    H9: () => Q,
    Lo: () => J,
    PK: () => Z,
    R7: () => V,
    TT: () => K,
    UE: () => B,
    XZ: () => z,
    Xo: () => en,
    _T: () => D,
    d9: () => M,
    mR: () => R,
    p9: () => U,
    qs: () => x,
    rU: () => q
}),
    n(266796),
    n(47120);
var i = n(192379),
    r = n(512722),
    l = n.n(r),
    o = n(392711),
    s = n(772848),
    a = n(866442),
    u = n(731965),
    d = n(442837),
    c = n(80932),
    h = n(749210),
    f = n(211266),
    p = n(339085),
    g = n(73346),
    v = n(817460),
    C = n(423117),
    E = n(584825),
    m = n(289393),
    O = n(790285),
    S = n(303737),
    b = n(971792),
    _ = n(22902),
    I = n(403474),
    y = n(944537),
    N = n(293810),
    T = n(981631),
    P = n(474936);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t, n) {
    let r = (0, y.n)((e) => e.setListing),
        l = i.useCallback(
            (i) => {
                r(e, (e) => {
                    var r;
                    let l = null !== (r = null == e ? void 0 : e[t]) && void 0 !== r ? r : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, e, t, n]
        ),
        o = (0, y.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
        });
    return [void 0 !== o ? o : n, l];
}
function L(e, t) {
    let n = (0, d.e7)([m.Z], () => m.Z.getSubscriptionListing(e)),
        r = (0, f.Z)(() => t);
    return i.useMemo(() => r(n), [n, r]);
}
function D(e) {
    let t = L(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '';
    });
    return j(e, 'name', t);
}
function R(e) {
    let t = L(e, (e) => {
        var t;
        return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
    });
    return j(e, 'priceTier', t);
}
function Z(e) {
    let t = L(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : '';
    });
    return j(e, 'description', t);
}
function M(e, t) {
    let n = L(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, g._W)(e.application_id, e.image_asset, t);
    });
    return j(e, 'image', n);
}
function U(e, t) {
    let n = (0, b.Z)(t, e);
    return j(
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
    let n = (0, b.Z)(t, e),
        r = (0, y.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor;
        }),
        l = (0, y.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let e = w({}, null != n ? n : I.k);
        if (void 0 !== l) {
            var t, i;
            (e.icon = null !== (t = l.icon) && void 0 !== t ? t : ''), (e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e;
    }, [n, l, r]);
}
function G(e, t) {
    let n = (0, b.Z)(t, e);
    return j(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : T.p6O;
        }, [n])
    );
}
function F(e, t) {
    let n = (0, b.Z)(t, e);
    return j(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == n ? y.I.SOME_CHANNELS_ACCESS : (0, O.MT)(n) ? y.I.ALL_CHANNELS_ACCESS : y.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let H = [];
function B(e) {
    let t = L(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(v.rC)));
    return j(e, 'channelBenefits', t);
}
let k = [];
function V(e) {
    let t = L(e, (e) => (null == e ? k : e.role_benefits.benefits.filter(v.lL)));
    return j(e, 'intangibleBenefits', t);
}
let W = new Set();
function Y(e, t) {
    return 0 === e.length
        ? W
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
    let n = (0, b.Z)(t, e),
        r = (0, d.Wu)([p.ZP], () => p.ZP.getGuildEmoji(t), [t]);
    return j(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == n ? W : Y(r, n.id)), [r, n])
    );
}
function K(e) {
    var t;
    let n = (0, E.oC)(e),
        { selectedOption: i } = (0, _.Z)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
    return j(e, 'trialInterval', null != i ? i : null);
}
function X(e) {
    var t;
    let n = (0, E.oC)(e);
    return j(e, 'trialLimit', null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null);
}
function q(e) {
    return (0, y.n)((t) => void 0 !== t.listings[e]);
}
function J(e) {
    return (0, y.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function Q(e) {
    let t = L(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = j(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, r, l, o;
            return {
                price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == t ? void 0 : t.currency) && void 0 !== i ? i : T.pKx.USD,
                interval: null !== (r = null == t ? void 0 : t.interval) && void 0 !== r ? r : P.rV.MONTH,
                interval_count: null !== (l = null == t ? void 0 : t.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == t ? void 0 : t.id) && void 0 !== o ? o : ''
            };
        }, [t, n])
    ];
}
function $(e) {
    (0, u.j)(() => {
        y.n.setState((t) => ({ listings: A(w({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        i = m.Z.getSubscriptionListing(n);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        s = i.id,
        a = y.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: u, roleIcon: d, trialLimit: f, trialInterval: g, tierEmojiIds: v } = a;
    (void 0 !== u || void 0 !== d) &&
        (await h.Z.updateRole(t, r, {
            color: u,
            icon: null == d ? void 0 : d.icon,
            unicodeEmoji: null == d ? void 0 : d.unicodeEmoji
        }));
    let E = m.Z.getSubscriptionTrial(s);
    if (
        ((null != f || null != g || (null != E && null == g)) &&
            (await C.I1(t, s, {
                trial: g,
                max_num_active_trial_users: f
            })),
        void 0 !== v)
    ) {
        let e = Y(p.ZP.getGuildEmoji(t), r),
            n = (0, o.difference)([...v], [...e]),
            i = (0, o.difference)([...e], [...v]),
            l = n
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, c.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, r]
                        });
                }),
            s = i
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== r);
                    return n.length > 0
                        ? (0, c.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n
                          })
                        : (0, c.RE)(t, e.id);
                });
        await Promise.all([...l, ...s]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: r } = e,
        o = y.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: s, description: a, channelBenefits: u, intangibleBenefits: d, priceTier: c, image: h, channelAccessFormat: f } = o;
    l()(null != s, 'no name provided'), l()(null != a, 'no description provided'), l()(null != c, 'no priceTier provided'), l()(null != h, 'no image provided');
    let p = f === y.I.ALL_CHANNELS_ACCESS,
        g = i;
    null == g && (g = (await C.uw(t, {})).id), null != u && u.length > 0 && (await (0, S.r4)(t, u));
    let v = [...(null != u ? u : []), ...(null != d ? d : [])],
        E = (0, S.yL)(n, t);
    return C.dA({
        guildId: t,
        groupListingId: g,
        data: {
            can_access_all_channels: p,
            image: h,
            name: s,
            description: a,
            benefits: v,
            priceTier: c
        },
        analyticsContext: E,
        onBeforeDispatchNewListing: r
    });
}
function en() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let { guildId: n, editStateId: i, groupListingId: s, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: d } = e,
                c = i,
                h = m.Z.getSubscriptionListing(c);
            try {
                if ((t(!0), r(void 0), null != h))
                    l()(null != s, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: i, groupListingId: r } = e,
                                s = m.Z.getSubscriptionListing(i);
                            l()(null != s, 'listing doesnt exist');
                            let a = y.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: u, description: d, channelBenefits: c, intangibleBenefits: h, priceTier: f, image: p, channelAccessFormat: g } = a,
                                E = {};
                            if ((u !== s.name && (E.name = u), d !== s.description && (E.description = d), f !== (null === (t = s.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (E.priceTier = f), null != p && (E.image = p), null != g && (E.can_access_all_channels = g === y.I.ALL_CHANNELS_ACCESS), null != c || null != h)) {
                                let e = s.role_benefits.benefits.filter(v.rC),
                                    t = s.role_benefits.benefits.filter(v.lL),
                                    n = [...(null != c ? c : e), ...(null != h ? h : t)];
                                E.benefits = n;
                            }
                            return (0, o.isEmpty)(E)
                                ? s
                                : C.O0({
                                      guildId: n,
                                      groupListingId: r,
                                      listingId: i,
                                      data: E
                                  });
                        })({
                            guildId: n,
                            editStateId: c,
                            groupListingId: s
                        });
                else {
                    var f;
                    let e = await et({
                        guildId: n,
                        editStateId: c,
                        groupListingId: s,
                        onBeforeDispatchNewListing: a
                    });
                    (f = c = e.id),
                        (0, u.j)(() => {
                            y.n.setState((e) => ({
                                listings: A(w({}, e.listings), {
                                    [f]: e.listings[i],
                                    [i]: void 0
                                })
                            }));
                        }),
                        null == d || d(e);
                }
                return (
                    await ee({
                        guildId: n,
                        editStateId: c
                    }),
                    $(c),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                r(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function ei(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, E._k)(e, n),
        l = (0, y.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, y.n)((e) => e.setEditStateIdsForGroup),
        a = (0, y.n)((e) => e.setListing),
        u = i.useMemo(
            () => [
                ...r.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        d = i.useCallback(() => {
            let e = (0, s.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: u,
        addNewEditStateId: d,
        addNewEditStateFromTemplate: i.useCallback(
            (e) => {
                let n = (0, s.Z)();
                return (
                    o(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        a(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: N.Qs.CHANNEL,
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
            [t, o, a]
        ),
        removeEditStateId: i.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o]
        )
    };
}
