n.d(t, {
    B7: () => er,
    Ek: () => R,
    F2: () => Q,
    GM: () => $,
    GP: () => G,
    H9: () => J,
    Lo: () => q,
    PK: () => T,
    R7: () => B,
    TT: () => z,
    UE: () => U,
    XZ: () => Y,
    Xo: () => en,
    _T: () => I,
    d9: () => k,
    mR: () => A,
    p9: () => M,
    qs: () => W,
    rU: () => X
}),
    n(953529),
    n(388685);
var r = n(192379),
    i = n(512722),
    l = n.n(i),
    o = n(392711),
    a = n(772848),
    s = n(866442),
    u = n(731965),
    c = n(442837),
    d = n(80932),
    f = n(749210),
    p = n(211266),
    g = n(339085),
    v = n(73346),
    m = n(817460),
    b = n(423117),
    h = n(584825),
    O = n(289393),
    y = n(790285),
    j = n(303737),
    S = n(971792),
    E = n(22902),
    D = n(403474),
    w = n(944537),
    P = n(293810),
    _ = n(981631),
    Z = n(474936);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t, n) {
    let i = (0, w.n)((e) => e.setListing),
        l = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let l = null != (i = null == e ? void 0 : e[t]) ? i : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof r ? r(l) : r });
                });
            },
            [i, e, t, n]
        ),
        o = (0, w.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== o ? o : n, l];
}
function L(e, t) {
    let n = (0, c.e7)([O.Z], () => O.Z.getSubscriptionListing(e)),
        i = (0, p.Z)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function I(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return C(e, 'name', t);
}
function A(e) {
    let t = L(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return C(e, 'priceTier', t);
}
function T(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return C(e, 'description', t);
}
function k(e, t) {
    let n = L(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, v._W)(e.application_id, e.image_asset, t);
    });
    return C(e, 'image', n);
}
function M(e, t) {
    let n = (0, S.Z)(t, e);
    return C(
        e,
        'roleIcon',
        r.useMemo(() => {
            var e, t;
            return {
                icon: null != (e = null == n ? void 0 : n.icon) ? e : void 0,
                unicodeEmoji: null != (t = null == n ? void 0 : n.unicodeEmoji) ? t : void 0
            };
        }, [n])
    );
}
function W(e, t) {
    let n = (0, S.Z)(t, e),
        i = (0, w.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        l = (0, w.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = N({}, null != n ? n : D.k);
        if (void 0 !== l) {
            var t, r;
            (e.icon = null != (t = l.icon) ? t : ''), (e.unicodeEmoji = null != (r = l.unicodeEmoji) ? r : '');
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, s.Rf)(i))), e;
    }, [n, l, i]);
}
function R(e, t) {
    let n = (0, S.Z)(t, e);
    return C(
        e,
        'roleColor',
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : _.p6O;
        }, [n])
    );
}
function G(e, t) {
    let n = (0, S.Z)(t, e);
    return C(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == n ? w.I.SOME_CHANNELS_ACCESS : (0, y.MT)(n) ? w.I.ALL_CHANNELS_ACCESS : w.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let H = [];
function U(e) {
    let t = L(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(m.rC)));
    return C(e, 'channelBenefits', t);
}
let V = [];
function B(e) {
    let t = L(e, (e) => (null == e ? V : e.role_benefits.benefits.filter(m.lL)));
    return C(e, 'intangibleBenefits', t);
}
let F = new Set();
function K(e, t) {
    return 0 === e.length
        ? F
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  })
          );
}
function Y(e, t) {
    let n = (0, S.Z)(t, e),
        i = (0, c.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
    return C(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == n ? F : K(i, n.id)), [i, n])
    );
}
function z(e) {
    var t;
    let n = (0, h.oC)(e),
        { selectedOption: r } = (0, E.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return C(e, 'trialInterval', null != r ? r : null);
}
function Q(e) {
    var t;
    let n = (0, h.oC)(e);
    return C(e, 'trialLimit', null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function X(e) {
    return (0, w.n)((t) => void 0 !== t.listings[e]);
}
function q(e) {
    return (0, w.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function J(e) {
    let t = L(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = C(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, i, l, o;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : _.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : Z.rV.MONTH,
                interval_count: null != (l = null == t ? void 0 : t.interval_count) ? l : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : ''
            };
        }, [t, n])
    ];
}
function $(e) {
    (0, u.j)(() => {
        w.n.setState((t) => ({ listings: x(N({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = O.Z.getSubscriptionListing(n);
    l()(null != r, 'listing doesnt exist');
    let i = r.role_id,
        a = r.id,
        s = w.n.getState().listings[n];
    l()(null != s, 'edit state does not exist');
    let { roleColor: u, roleIcon: c, trialLimit: p, trialInterval: v, tierEmojiIds: m } = s;
    (void 0 !== u || void 0 !== c) &&
        (await f.Z.updateRole(t, i, {
            color: u,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let h = O.Z.getSubscriptionTrial(a);
    if (
        ((null != p || null != v || (null != h && null == v)) &&
            (await b.I1(t, a, {
                trial: v,
                max_num_active_trial_users: p
            })),
        void 0 !== m)
    ) {
        let e = K(g.ZP.getGuildEmoji(t), i),
            n = (0, o.difference)([...m], [...e]),
            r = (0, o.difference)([...e], [...m]),
            l = n
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, i]
                        });
                }),
            a = r
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== i);
                    return n.length > 0
                        ? (0, d.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n
                          })
                        : (0, d.RE)(t, e.id);
                });
        await Promise.all([...l, ...a]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        o = w.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: a, description: s, channelBenefits: u, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: p } = o;
    l()(null != a, 'no name provided'), l()(null != s, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let g = p === w.I.ALL_CHANNELS_ACCESS,
        v = r;
    null == v && (v = (await b.uw(t, {})).id), null != u && u.length > 0 && (await (0, j.r4)(t, u));
    let m = [...(null != u ? u : []), ...(null != c ? c : [])],
        h = (0, j.yL)(n, t);
    return b.dA({
        guildId: t,
        groupListingId: v,
        data: {
            can_access_all_channels: g,
            image: f,
            name: a,
            description: s,
            benefits: m,
            priceTier: d
        },
        analyticsContext: h,
        onBeforeDispatchNewListing: i
    });
}
function en() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let { guildId: n, editStateId: r, groupListingId: a, onBeforeDispatchNewListing: s, onAfterDispatchNewListing: c } = e,
                d = r,
                f = O.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), i(void 0), null != f))
                    l()(null != a, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: r, groupListingId: i } = e,
                                a = O.Z.getSubscriptionListing(r);
                            l()(null != a, 'listing doesnt exist');
                            let s = w.n.getState().listings[r];
                            l()(null != s, 'edit state does not exist');
                            let { name: u, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: p, image: g, channelAccessFormat: v } = s,
                                h = {};
                            if ((u !== a.name && (h.name = u), c !== a.description && (h.description = c), p !== (null == (t = a.subscription_plans[0]) ? void 0 : t.price) && (h.priceTier = p), null != g && (h.image = g), null != v && (h.can_access_all_channels = v === w.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let e = a.role_benefits.benefits.filter(m.rC),
                                    t = a.role_benefits.benefits.filter(m.lL);
                                h.benefits = [...(null != d ? d : e), ...(null != f ? f : t)];
                            }
                            return (0, o.isEmpty)(h)
                                ? a
                                : b.O0({
                                      guildId: n,
                                      groupListingId: i,
                                      listingId: r,
                                      data: h
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: a
                        });
                else {
                    var p;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: a,
                        onBeforeDispatchNewListing: s
                    });
                    (d = e.id),
                        (p = d),
                        (0, u.j)(() => {
                            w.n.setState((e) => ({
                                listings: x(N({}, e.listings), {
                                    [p]: e.listings[r],
                                    [r]: void 0
                                })
                            }));
                        }),
                        null == c || c(e);
                }
                return (
                    await ee({
                        guildId: n,
                        editStateId: d
                    }),
                    $(d),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                i(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, h._k)(e, n),
        l = (0, w.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, w.n)((e) => e.setEditStateIdsForGroup),
        s = (0, w.n)((e) => e.setListing),
        u = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != l ? l : [])
            ],
            [l, i]
        ),
        c = r.useCallback(() => {
            let e = (0, a.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: u,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, a.Z)();
                return (
                    o(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        s(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: P.Qs.CHANNEL,
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
            [t, o, s]
        ),
        removeEditStateId: r.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o]
        )
    };
}
