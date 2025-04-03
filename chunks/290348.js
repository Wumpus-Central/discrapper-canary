r.d(t, {
    B7: () => en,
    Ek: () => A,
    F2: () => X,
    GM: () => $,
    GP: () => B,
    H9: () => q,
    Lo: () => J,
    PK: () => _,
    R7: () => U,
    TT: () => z,
    UE: () => R,
    XZ: () => Y,
    Xo: () => er,
    _T: () => T,
    d9: () => N,
    mR: () => L,
    p9: () => k,
    qs: () => I,
    rU: () => Q
}),
    r(266796),
    r(47120);
var n = r(192379),
    h = r(512722),
    v = r.n(h),
    i = r(392711),
    l = r(772848),
    o = r(866442),
    a = r(731965),
    s = r(442837),
    c = r(80932),
    f = r(749210),
    p = r(211266),
    Z = r(339085),
    u = r(73346),
    M = r(817460),
    d = r(423117),
    b = r(584825),
    H = r(289393),
    y = r(790285),
    V = r(303737),
    j = r(971792),
    O = r(22902),
    g = r(403474),
    m = r(944537),
    x = r(293810),
    w = r(981631),
    P = r(474936);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function D(e, t, r) {
    let h = (0, m.n)((e) => e.setListing),
        v = n.useCallback(
            (n) => {
                h(e, (e) => {
                    var h;
                    let v = null != (h = null == e ? void 0 : e[t]) ? h : r;
                    return Object.assign({}, e, { [t]: 'function' == typeof n ? n(v) : n });
                });
            },
            [h, e, t, r]
        ),
        i = (0, m.n)((r) => {
            var n;
            return null == (n = r.listings[e]) ? void 0 : n[t];
        });
    return [void 0 !== i ? i : r, v];
}
function E(e, t) {
    let r = (0, s.e7)([H.Z], () => H.Z.getSubscriptionListing(e)),
        h = (0, p.Z)(() => t);
    return n.useMemo(() => h(r), [r, h]);
}
function T(e) {
    let t = E(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return D(e, 'name', t);
}
function L(e) {
    let t = E(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return D(e, 'priceTier', t);
}
function _(e) {
    let t = E(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return D(e, 'description', t);
}
function N(e, t) {
    let r = E(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, u._W)(e.application_id, e.image_asset, t);
    });
    return D(e, 'image', r);
}
function k(e, t) {
    let r = (0, j.Z)(t, e);
    return D(
        e,
        'roleIcon',
        n.useMemo(() => {
            var e, t;
            return {
                icon: null != (e = null == r ? void 0 : r.icon) ? e : void 0,
                unicodeEmoji: null != (t = null == r ? void 0 : r.unicodeEmoji) ? t : void 0
            };
        }, [r])
    );
}
function I(e, t) {
    let r = (0, j.Z)(t, e),
        h = (0, m.n)((t) => {
            var r;
            return null == (r = t.listings[e]) ? void 0 : r.roleColor;
        }),
        v = (0, m.n)((t) => {
            var r;
            return null == (r = t.listings[e]) ? void 0 : r.roleIcon;
        });
    return n.useMemo(() => {
        let e = S({}, null != r ? r : g.k);
        if (void 0 !== v) {
            var t, n;
            (e.icon = null != (t = v.icon) ? t : ''), (e.unicodeEmoji = null != (n = v.unicodeEmoji) ? n : '');
        }
        return void 0 !== h && ((e.color = h), (e.colorString = (0, o.Rf)(h))), e;
    }, [r, v, h]);
}
function A(e, t) {
    let r = (0, j.Z)(t, e);
    return D(
        e,
        'roleColor',
        n.useMemo(() => {
            var e;
            return null != (e = null == r ? void 0 : r.color) ? e : w.p6O;
        }, [r])
    );
}
function B(e, t) {
    let r = (0, j.Z)(t, e);
    return D(
        e,
        'channelAccessFormat',
        n.useMemo(() => (null == r ? m.I.SOME_CHANNELS_ACCESS : (0, y.MT)(r) ? m.I.ALL_CHANNELS_ACCESS : m.I.SOME_CHANNELS_ACCESS), [r])
    );
}
let W = [];
function R(e) {
    let t = E(e, (e) => (null == e ? W : e.role_benefits.benefits.filter(M.rC)));
    return D(e, 'channelBenefits', t);
}
let G = [];
function U(e) {
    let t = E(e, (e) => (null == e ? G : e.role_benefits.benefits.filter(M.lL)));
    return D(e, 'intangibleBenefits', t);
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
    let r = (0, j.Z)(t, e),
        h = (0, s.Wu)([Z.ZP], () => Z.ZP.getGuildEmoji(t), [t]);
    return D(
        e,
        'tierEmojiIds',
        n.useMemo(() => (null == r ? F : K(h, r.id)), [h, r])
    );
}
function z(e) {
    var t;
    let r = (0, b.oC)(e),
        { selectedOption: n } = (0, O.Z)(null != (t = null == r ? void 0 : r.active_trial) ? t : null);
    return D(e, 'trialInterval', null != n ? n : null);
}
function X(e) {
    var t;
    let r = (0, b.oC)(e);
    return D(e, 'trialLimit', null != (t = null == r ? void 0 : r.max_num_active_trial_users) ? t : null);
}
function Q(e) {
    return (0, m.n)((t) => void 0 !== t.listings[e]);
}
function J(e) {
    return (0, m.n)((t) => {
        for (let r of e) if (void 0 !== t.listings[r]) return !0;
        return !1;
    });
}
function q(e) {
    let t = E(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [r] = D(e, 'priceTier', void 0);
    return [
        n.useMemo(() => {
            var e, n, h, v, i;
            return {
                price: null != (e = null != r ? r : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (n = null == t ? void 0 : t.currency) ? n : w.pKx.USD,
                interval: null != (h = null == t ? void 0 : t.interval) ? h : P.rV.MONTH,
                interval_count: null != (v = null == t ? void 0 : t.interval_count) ? v : 1,
                id: null != (i = null == t ? void 0 : t.id) ? i : ''
            };
        }, [t, r])
    ];
}
function $(e) {
    (0, a.j)(() => {
        m.n.setState((t) => ({ listings: C(S({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: r } = e,
        n = H.Z.getSubscriptionListing(r);
    v()(null != n, 'listing doesnt exist');
    let h = n.role_id,
        l = n.id,
        o = m.n.getState().listings[r];
    v()(null != o, 'edit state does not exist');
    let { roleColor: a, roleIcon: s, trialLimit: p, trialInterval: u, tierEmojiIds: M } = o;
    (void 0 !== a || void 0 !== s) &&
        (await f.Z.updateRole(t, h, {
            color: a,
            icon: null == s ? void 0 : s.icon,
            unicodeEmoji: null == s ? void 0 : s.unicodeEmoji
        }));
    let b = H.Z.getSubscriptionTrial(l);
    if (
        ((null != p || null != u || (null != b && null == u)) &&
            (await d.I1(t, l, {
                trial: u,
                max_num_active_trial_users: p
            })),
        void 0 !== M)
    ) {
        let e = K(Z.ZP.getGuildEmoji(t), h),
            r = (0, i.difference)([...M], [...e]),
            n = (0, i.difference)([...e], [...M]),
            v = r
                .map((e) => Z.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, c.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, h]
                        });
                }),
            l = n
                .map((e) => Z.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let r = e.roles.filter((e) => e !== h);
                    return r.length > 0
                        ? (0, c.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: r
                          })
                        : (0, c.RE)(t, e.id);
                });
        await Promise.all([...v, ...l]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: r, groupListingId: n, onBeforeDispatchNewListing: h } = e,
        i = m.n.getState().listings[r];
    v()(null != i, 'edit state does not exist');
    let { name: l, description: o, channelBenefits: a, intangibleBenefits: s, priceTier: c, image: f, channelAccessFormat: p } = i;
    v()(null != l, 'no name provided'), v()(null != o, 'no description provided'), v()(null != c, 'no priceTier provided'), v()(null != f, 'no image provided');
    let Z = p === m.I.ALL_CHANNELS_ACCESS,
        u = n;
    null == u && (u = (await d.uw(t, {})).id), null != a && a.length > 0 && (await (0, V.r4)(t, a));
    let M = [...(null != a ? a : []), ...(null != s ? s : [])],
        b = (0, V.yL)(r, t);
    return d.dA({
        guildId: t,
        groupListingId: u,
        data: {
            can_access_all_channels: Z,
            image: f,
            name: l,
            description: o,
            benefits: M,
            priceTier: c
        },
        analyticsContext: b,
        onBeforeDispatchNewListing: h
    });
}
function er() {
    let [e, t] = n.useState(!1),
        [r, h] = n.useState();
    return {
        loading: e,
        error: r,
        handleCreateOrUpdateFromEditState: n.useCallback(async (e) => {
            let { guildId: r, editStateId: n, groupListingId: l, onBeforeDispatchNewListing: o, onAfterDispatchNewListing: s } = e,
                c = n,
                f = H.Z.getSubscriptionListing(c);
            try {
                if ((t(!0), h(void 0), null != f))
                    v()(null != l, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: r, editStateId: n, groupListingId: h } = e,
                                l = H.Z.getSubscriptionListing(n);
                            v()(null != l, 'listing doesnt exist');
                            let o = m.n.getState().listings[n];
                            v()(null != o, 'edit state does not exist');
                            let { name: a, description: s, channelBenefits: c, intangibleBenefits: f, priceTier: p, image: Z, channelAccessFormat: u } = o,
                                b = {};
                            if ((a !== l.name && (b.name = a), s !== l.description && (b.description = s), p !== (null == (t = l.subscription_plans[0]) ? void 0 : t.price) && (b.priceTier = p), null != Z && (b.image = Z), null != u && (b.can_access_all_channels = u === m.I.ALL_CHANNELS_ACCESS), null != c || null != f)) {
                                let e = l.role_benefits.benefits.filter(M.rC),
                                    t = l.role_benefits.benefits.filter(M.lL);
                                b.benefits = [...(null != c ? c : e), ...(null != f ? f : t)];
                            }
                            return (0, i.isEmpty)(b)
                                ? l
                                : d.O0({
                                      guildId: r,
                                      groupListingId: h,
                                      listingId: n,
                                      data: b
                                  });
                        })({
                            guildId: r,
                            editStateId: c,
                            groupListingId: l
                        });
                else {
                    var p;
                    let e = await et({
                        guildId: r,
                        editStateId: c,
                        groupListingId: l,
                        onBeforeDispatchNewListing: o
                    });
                    (c = e.id),
                        (p = c),
                        (0, a.j)(() => {
                            m.n.setState((e) => ({
                                listings: C(S({}, e.listings), {
                                    [p]: e.listings[n],
                                    [n]: void 0
                                })
                            }));
                        }),
                        null == s || s(e);
                }
                return (
                    await ee({
                        guildId: r,
                        editStateId: c
                    }),
                    $(c),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                h(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function en(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        h = (0, b._k)(e, r),
        v = (0, m.n)((e) => e.editStateIdsForGroup[t]),
        i = (0, m.n)((e) => e.setEditStateIdsForGroup),
        o = (0, m.n)((e) => e.setListing),
        a = n.useMemo(
            () => [
                ...h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != v ? v : [])
            ],
            [v, h]
        ),
        s = n.useCallback(() => {
            let e = (0, l.Z)();
            i(t, (t) => [...(null != t ? t : []), e]);
        }, [t, i]);
    return {
        editStateIds: a,
        addNewEditStateId: s,
        addNewEditStateFromTemplate: n.useCallback(
            (e) => {
                let r = (0, l.Z)();
                return (
                    i(t, (e) => [...(null != e ? e : []), r]),
                    e.listings.forEach((t) => {
                        o(r, () => ({
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
                    r
                );
            },
            [t, i, o]
        ),
        removeEditStateId: n.useCallback(
            (e) => {
                i(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, i]
        )
    };
}
