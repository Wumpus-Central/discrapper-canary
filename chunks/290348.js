(n.d(t, {
    B7: () => er,
    Ek: () => G,
    F2: () => W,
    GM: () => $,
    GP: () => B,
    H9: () => J,
    Lo: () => q,
    PK: () => M,
    R7: () => U,
    TT: () => K,
    UE: () => V,
    XZ: () => z,
    Xo: () => en,
    _T: () => T,
    d9: () => D,
    mR: () => k,
    p9: () => x,
    qs: () => H,
    rU: () => X
}),
    n(953529),
    n(388685));
var r = n(73800),
    i = n(512722),
    l = n.n(i),
    o = n(392711),
    u = n(772848),
    a = n(866442),
    c = n(731965),
    s = n(442837),
    d = n(80932),
    f = n(749210),
    m = n(211266),
    p = n(339085),
    v = n(73346),
    g = n(817460),
    b = n(423117),
    y = n(584825),
    j = n(289393),
    O = n(790285),
    S = n(303737),
    _ = n(971792),
    E = n(22902),
    P = n(403474),
    h = n(944537),
    w = n(293810),
    Z = n(981631),
    C = n(474936);
function I(e) {
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
function N(e, t) {
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
function L(e, t, n) {
    let i = (0, h.n)((e) => e.setListing),
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
        o = (0, h.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== o ? o : n, l];
}
function A(e, t) {
    let n = (0, s.e7)([j.Z], () => j.Z.getSubscriptionListing(e)),
        i = (0, m.Z)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function T(e) {
    let t = A(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return L(e, 'name', t);
}
function k(e) {
    let t = A(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return L(e, 'priceTier', t);
}
function M(e) {
    let t = A(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return L(e, 'description', t);
}
function D(e, t) {
    let n = A(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, v._W)(e.application_id, e.image_asset, t);
    });
    return L(e, 'image', n);
}
function x(e, t) {
    let n = (0, _.Z)(t, e);
    return L(
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
function H(e, t) {
    let n = (0, _.Z)(t, e),
        i = (0, h.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        l = (0, h.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = I({}, null != n ? n : P.k);
        if (void 0 !== l) {
            var t, r;
            ((e.icon = null != (t = l.icon) ? t : ''), (e.unicodeEmoji = null != (r = l.unicodeEmoji) ? r : ''));
        }
        return (void 0 !== i && ((e.color = i), (e.colorString = (0, a.Rf)(i))), e);
    }, [n, l, i]);
}
function G(e, t) {
    let n = (0, _.Z)(t, e);
    return L(
        e,
        'roleColor',
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : Z.p6O;
        }, [n])
    );
}
function B(e, t) {
    let n = (0, _.Z)(t, e);
    return L(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == n ? h.I.SOME_CHANNELS_ACCESS : (0, O.yt)(n) ? h.I.ALL_CHANNELS_ACCESS : h.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let R = [];
function V(e) {
    let t = A(e, (e) => (null == e ? R : e.role_benefits.benefits.filter(g.rC)));
    return L(e, 'channelBenefits', t);
}
let F = [];
function U(e) {
    let t = A(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(g.lL)));
    return L(e, 'intangibleBenefits', t);
}
let Y = new Set();
function Q(e, t) {
    return 0 === e.length
        ? Y
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
    let n = (0, _.Z)(t, e),
        i = (0, s.Wu)([p.ZP], () => p.ZP.getGuildEmoji(t), [t]);
    return L(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == n ? Y : Q(i, n.id)), [i, n])
    );
}
function K(e) {
    var t;
    let n = (0, y.oC)(e),
        { selectedOption: r } = (0, E.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return L(e, 'trialInterval', null != r ? r : null);
}
function W(e) {
    var t;
    let n = (0, y.oC)(e);
    return L(e, 'trialLimit', null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function X(e) {
    return (0, h.n)((t) => void 0 !== t.listings[e]);
}
function q(e) {
    return (0, h.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function J(e) {
    let t = A(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = L(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, i, l, o;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : Z.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : C.rV.MONTH,
                interval_count: null != (l = null == t ? void 0 : t.interval_count) ? l : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : ''
            };
        }, [t, n])
    ];
}
function $(e) {
    (0, c.j)(() => {
        h.n.setState((t) => ({ listings: N(I({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = j.Z.getSubscriptionListing(n);
    l()(null != r, 'listing doesnt exist');
    let i = r.role_id,
        u = r.id,
        a = h.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: c, roleIcon: s, trialLimit: m, trialInterval: v, tierEmojiIds: g } = a;
    (void 0 !== c || void 0 !== s) &&
        (await f.Z.updateRole(t, i, {
            color: c,
            icon: null == s ? void 0 : s.icon,
            unicodeEmoji: null == s ? void 0 : s.unicodeEmoji
        }));
    let y = j.Z.getSubscriptionTrial(u);
    if (
        ((null != m || null != v || (null != y && null == v)) &&
            (await b.I1(t, u, {
                trial: v,
                max_num_active_trial_users: m
            })),
        void 0 !== g)
    ) {
        let e = Q(p.ZP.getGuildEmoji(t), i),
            n = (0, o.difference)([...g], [...e]),
            r = (0, o.difference)([...e], [...g]),
            l = n
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, i]
                        });
                }),
            u = r
                .map((e) => p.ZP.getCustomEmojiById(e))
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
        await Promise.all([...l, ...u]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        o = h.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: a, channelBenefits: c, intangibleBenefits: s, priceTier: d, image: f, channelAccessFormat: m } = o;
    (l()(null != u, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided'));
    let p = m === h.I.ALL_CHANNELS_ACCESS,
        v = r;
    (null == v && (v = (await b.uw(t, {})).id), null != c && c.length > 0 && (await (0, S.r4)(t, c)));
    let g = [...(null != c ? c : []), ...(null != s ? s : [])],
        y = (0, S.yL)(n, t);
    return b.dA({
        guildId: t,
        groupListingId: v,
        data: {
            can_access_all_channels: p,
            image: f,
            name: u,
            description: a,
            benefits: g,
            priceTier: d
        },
        analyticsContext: y,
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
            let { guildId: n, editStateId: r, groupListingId: u, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: s } = e,
                d = r,
                f = j.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), i(void 0), null != f))
                    (l()(null != u, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: r, groupListingId: i } = e,
                                u = j.Z.getSubscriptionListing(r);
                            l()(null != u, 'listing doesnt exist');
                            let a = h.n.getState().listings[r];
                            l()(null != a, 'edit state does not exist');
                            let { name: c, description: s, channelBenefits: d, intangibleBenefits: f, priceTier: m, image: p, channelAccessFormat: v } = a,
                                y = {};
                            if ((c !== u.name && (y.name = c), s !== u.description && (y.description = s), m !== (null == (t = u.subscription_plans[0]) ? void 0 : t.price) && (y.priceTier = m), null != p && (y.image = p), null != v && (y.can_access_all_channels = v === h.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let e = u.role_benefits.benefits.filter(g.rC),
                                    t = u.role_benefits.benefits.filter(g.lL);
                                y.benefits = [...(null != d ? d : e), ...(null != f ? f : t)];
                            }
                            return (0, o.isEmpty)(y)
                                ? u
                                : b.O0({
                                      guildId: n,
                                      groupListingId: i,
                                      listingId: r,
                                      data: y
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: u
                        }));
                else {
                    var m;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: a
                    });
                    ((d = e.id),
                        (m = d),
                        (0, c.j)(() => {
                            h.n.setState((e) => ({
                                listings: N(I({}, e.listings), {
                                    [m]: e.listings[r],
                                    [r]: void 0
                                })
                            }));
                        }),
                        null == s || s(e));
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
        i = (0, y._k)(e, n),
        l = (0, h.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, h.n)((e) => e.setEditStateIdsForGroup),
        a = (0, h.n)((e) => e.setListing),
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
        s = r.useCallback(() => {
            let e = (0, u.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: c,
        addNewEditStateId: s,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, u.Z)();
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
                                ref_type: w.Qs.CHANNEL,
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
        removeEditStateId: r.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o]
        )
    };
}
