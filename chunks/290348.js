(n.d(t, {
    B7: () => er,
    Ek: () => B,
    F2: () => K,
    GM: () => $,
    GP: () => U,
    H9: () => J,
    Lo: () => Q,
    PK: () => L,
    R7: () => H,
    TT: () => q,
    UE: () => F,
    XZ: () => Y,
    Xo: () => en,
    _T: () => Z,
    d9: () => M,
    mR: () => A,
    p9: () => R,
    qs: () => k,
    rU: () => X
}),
    n(953529),
    n(388685));
var r = n(73800),
    i = n(512722),
    l = n.n(i),
    s = n(392711),
    o = n(772848),
    a = n(866442),
    c = n(731965),
    u = n(442837),
    d = n(80932),
    f = n(749210),
    p = n(211266),
    g = n(339085),
    m = n(73346),
    b = n(817460),
    h = n(423117),
    v = n(584825),
    O = n(289393),
    y = n(790285),
    E = n(303737),
    S = n(971792),
    j = n(22902),
    C = n(403474),
    _ = n(944537),
    x = n(293810),
    P = n(981631),
    N = n(474936);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function T(e, t) {
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
function D(e, t, n) {
    let i = (0, _.n)((e) => e.setListing),
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
        s = (0, _.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== s ? s : n, l];
}
function I(e, t) {
    let n = (0, u.e7)([O.Z], () => O.Z.getSubscriptionListing(e)),
        i = (0, p.Z)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function Z(e) {
    let t = I(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return D(e, 'name', t);
}
function A(e) {
    let t = I(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return D(e, 'priceTier', t);
}
function L(e) {
    let t = I(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return D(e, 'description', t);
}
function M(e, t) {
    let n = I(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, m._W)(e.application_id, e.image_asset, t);
    });
    return D(e, 'image', n);
}
function R(e, t) {
    let n = (0, S.Z)(t, e);
    return D(
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
function k(e, t) {
    let n = (0, S.Z)(t, e),
        i = (0, _.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        l = (0, _.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = w({}, null != n ? n : C.k);
        if (void 0 !== l) {
            var t, r;
            ((e.icon = null != (t = l.icon) ? t : ''), (e.unicodeEmoji = null != (r = l.unicodeEmoji) ? r : ''));
        }
        return (void 0 !== i && ((e.color = i), (e.colorString = (0, a.Rf)(i))), e);
    }, [n, l, i]);
}
function B(e, t) {
    let n = (0, S.Z)(t, e);
    return D(
        e,
        'roleColor',
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : P.p6O;
        }, [n])
    );
}
function U(e, t) {
    let n = (0, S.Z)(t, e);
    return D(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == n ? _.I.SOME_CHANNELS_ACCESS : (0, y.yt)(n) ? _.I.ALL_CHANNELS_ACCESS : _.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let G = [];
function F(e) {
    let t = I(e, (e) => (null == e ? G : e.role_benefits.benefits.filter(b.rC)));
    return D(e, 'channelBenefits', t);
}
let W = [];
function H(e) {
    let t = I(e, (e) => (null == e ? W : e.role_benefits.benefits.filter(b.lL)));
    return D(e, 'intangibleBenefits', t);
}
let z = new Set();
function V(e, t) {
    return 0 === e.length
        ? z
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
        i = (0, u.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
    return D(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == n ? z : V(i, n.id)), [i, n])
    );
}
function q(e) {
    var t;
    let n = (0, v.oC)(e),
        { selectedOption: r } = (0, j.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return D(e, 'trialInterval', null != r ? r : null);
}
function K(e) {
    var t;
    let n = (0, v.oC)(e);
    return D(e, 'trialLimit', null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function X(e) {
    return (0, _.n)((t) => void 0 !== t.listings[e]);
}
function Q(e) {
    return (0, _.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function J(e) {
    let t = I(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = D(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, i, l, s;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : P.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : N.rV.MONTH,
                interval_count: null != (l = null == t ? void 0 : t.interval_count) ? l : 1,
                id: null != (s = null == t ? void 0 : t.id) ? s : ''
            };
        }, [t, n])
    ];
}
function $(e) {
    (0, c.j)(() => {
        _.n.setState((t) => ({ listings: T(w({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = O.Z.getSubscriptionListing(n);
    l()(null != r, 'listing doesnt exist');
    let i = r.role_id,
        o = r.id,
        a = _.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: c, roleIcon: u, trialLimit: p, trialInterval: m, tierEmojiIds: b } = a;
    (void 0 !== c || void 0 !== u) &&
        (await f.Z.updateRole(t, i, {
            color: c,
            icon: null == u ? void 0 : u.icon,
            unicodeEmoji: null == u ? void 0 : u.unicodeEmoji
        }));
    let v = O.Z.getSubscriptionTrial(o);
    if (
        ((null != p || null != m || (null != v && null == m)) &&
            (await h.I1(t, o, {
                trial: m,
                max_num_active_trial_users: p
            })),
        void 0 !== b)
    ) {
        let e = V(g.ZP.getGuildEmoji(t), i),
            n = (0, s.difference)([...b], [...e]),
            r = (0, s.difference)([...e], [...b]),
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
            o = r
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
        await Promise.all([...l, ...o]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        s = _.n.getState().listings[n];
    l()(null != s, 'edit state does not exist');
    let { name: o, description: a, channelBenefits: c, intangibleBenefits: u, priceTier: d, image: f, channelAccessFormat: p } = s;
    (l()(null != o, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided'));
    let g = p === _.I.ALL_CHANNELS_ACCESS,
        m = r;
    (null == m && (m = (await h.uw(t, {})).id), null != c && c.length > 0 && (await (0, E.r4)(t, c)));
    let b = [...(null != c ? c : []), ...(null != u ? u : [])],
        v = (0, E.yL)(n, t);
    return h.dA({
        guildId: t,
        groupListingId: m,
        data: {
            can_access_all_channels: g,
            image: f,
            name: o,
            description: a,
            benefits: b,
            priceTier: d
        },
        analyticsContext: v,
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
            let { guildId: n, editStateId: r, groupListingId: o, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: u } = e,
                d = r,
                f = O.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), i(void 0), null != f))
                    (l()(null != o, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: r, groupListingId: i } = e,
                                o = O.Z.getSubscriptionListing(r);
                            l()(null != o, 'listing doesnt exist');
                            let a = _.n.getState().listings[r];
                            l()(null != a, 'edit state does not exist');
                            let { name: c, description: u, channelBenefits: d, intangibleBenefits: f, priceTier: p, image: g, channelAccessFormat: m } = a,
                                v = {};
                            if ((c !== o.name && (v.name = c), u !== o.description && (v.description = u), p !== (null == (t = o.subscription_plans[0]) ? void 0 : t.price) && (v.priceTier = p), null != g && (v.image = g), null != m && (v.can_access_all_channels = m === _.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let e = o.role_benefits.benefits.filter(b.rC),
                                    t = o.role_benefits.benefits.filter(b.lL);
                                v.benefits = [...(null != d ? d : e), ...(null != f ? f : t)];
                            }
                            return (0, s.isEmpty)(v)
                                ? o
                                : h.O0({
                                      guildId: n,
                                      groupListingId: i,
                                      listingId: r,
                                      data: v
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: o
                        }));
                else {
                    var p;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: o,
                        onBeforeDispatchNewListing: a
                    });
                    ((d = e.id),
                        (p = d),
                        (0, c.j)(() => {
                            _.n.setState((e) => ({
                                listings: T(w({}, e.listings), {
                                    [p]: e.listings[r],
                                    [r]: void 0
                                })
                            }));
                        }),
                        null == u || u(e));
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
        i = (0, v._k)(e, n),
        l = (0, _.n)((e) => e.editStateIdsForGroup[t]),
        s = (0, _.n)((e) => e.setEditStateIdsForGroup),
        a = (0, _.n)((e) => e.setListing),
        c = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != l ? l : [])
            ],
            [l, i]
        ),
        u = r.useCallback(() => {
            let e = (0, o.Z)();
            s(t, (t) => [...(null != t ? t : []), e]);
        }, [t, s]);
    return {
        editStateIds: c,
        addNewEditStateId: u,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, o.Z)();
                return (
                    s(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        a(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: x.Qs.CHANNEL,
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
            [t, s, a]
        ),
        removeEditStateId: r.useCallback(
            (e) => {
                s(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, s]
        )
    };
}
