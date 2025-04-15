r.d(t, {
    B7: () => en,
    Ek: () => B,
    F2: () => K,
    GM: () => $,
    GP: () => A,
    H9: () => J,
    Lo: () => X,
    PK: () => N,
    R7: () => F,
    TT: () => q,
    UE: () => W,
    XZ: () => Y,
    Xo: () => er,
    _T: () => T,
    d9: () => L,
    mR: () => D,
    p9: () => k,
    qs: () => I,
    rU: () => Q
}),
    r(953529),
    r(388685);
var n = r(192379),
    i = r(512722),
    s = r.n(i),
    o = r(392711),
    l = r(772848),
    a = r(866442),
    c = r(731965),
    h = r(442837),
    v = r(80932),
    u = r(749210),
    f = r(211266),
    p = r(339085),
    d = r(73346),
    b = r(817460),
    g = r(423117),
    Z = r(584825),
    j = r(289393),
    M = r(790285),
    O = r(303737),
    y = r(971792),
    m = r(22902),
    H = r(403474),
    x = r(944537),
    V = r(293810),
    w = r(981631),
    C = r(474936);
function P(e) {
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
function _(e, t) {
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
function S(e, t, r) {
    let i = (0, x.n)((e) => e.setListing),
        s = n.useCallback(
            (n) => {
                i(e, (e) => {
                    var i;
                    let s = null != (i = null == e ? void 0 : e[t]) ? i : r;
                    return Object.assign({}, e, { [t]: 'function' == typeof n ? n(s) : n });
                });
            },
            [i, e, t, r]
        ),
        o = (0, x.n)((r) => {
            var n;
            return null == (n = r.listings[e]) ? void 0 : n[t];
        });
    return [void 0 !== o ? o : r, s];
}
function E(e, t) {
    let r = (0, h.e7)([j.Z], () => j.Z.getSubscriptionListing(e)),
        i = (0, f.Z)(() => t);
    return n.useMemo(() => i(r), [r, i]);
}
function T(e) {
    let t = E(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return S(e, 'name', t);
}
function D(e) {
    let t = E(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return S(e, 'priceTier', t);
}
function N(e) {
    let t = E(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return S(e, 'description', t);
}
function L(e, t) {
    let r = E(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, d._W)(e.application_id, e.image_asset, t);
    });
    return S(e, 'image', r);
}
function k(e, t) {
    let r = (0, y.Z)(t, e);
    return S(
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
    let r = (0, y.Z)(t, e),
        i = (0, x.n)((t) => {
            var r;
            return null == (r = t.listings[e]) ? void 0 : r.roleColor;
        }),
        s = (0, x.n)((t) => {
            var r;
            return null == (r = t.listings[e]) ? void 0 : r.roleIcon;
        });
    return n.useMemo(() => {
        let e = P({}, null != r ? r : H.k);
        if (void 0 !== s) {
            var t, n;
            (e.icon = null != (t = s.icon) ? t : ''), (e.unicodeEmoji = null != (n = s.unicodeEmoji) ? n : '');
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, a.Rf)(i))), e;
    }, [r, s, i]);
}
function B(e, t) {
    let r = (0, y.Z)(t, e);
    return S(
        e,
        'roleColor',
        n.useMemo(() => {
            var e;
            return null != (e = null == r ? void 0 : r.color) ? e : w.p6O;
        }, [r])
    );
}
function A(e, t) {
    let r = (0, y.Z)(t, e);
    return S(
        e,
        'channelAccessFormat',
        n.useMemo(() => (null == r ? x.I.SOME_CHANNELS_ACCESS : (0, M.MT)(r) ? x.I.ALL_CHANNELS_ACCESS : x.I.SOME_CHANNELS_ACCESS), [r])
    );
}
let R = [];
function W(e) {
    let t = E(e, (e) => (null == e ? R : e.role_benefits.benefits.filter(b.rC)));
    return S(e, 'channelBenefits', t);
}
let U = [];
function F(e) {
    let t = E(e, (e) => (null == e ? U : e.role_benefits.benefits.filter(b.lL)));
    return S(e, 'intangibleBenefits', t);
}
let G = new Set();
function z(e, t) {
    return 0 === e.length
        ? G
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
    let r = (0, y.Z)(t, e),
        i = (0, h.Wu)([p.ZP], () => p.ZP.getGuildEmoji(t), [t]);
    return S(
        e,
        'tierEmojiIds',
        n.useMemo(() => (null == r ? G : z(i, r.id)), [i, r])
    );
}
function q(e) {
    var t;
    let r = (0, Z.oC)(e),
        { selectedOption: n } = (0, m.Z)(null != (t = null == r ? void 0 : r.active_trial) ? t : null);
    return S(e, 'trialInterval', null != n ? n : null);
}
function K(e) {
    var t;
    let r = (0, Z.oC)(e);
    return S(e, 'trialLimit', null != (t = null == r ? void 0 : r.max_num_active_trial_users) ? t : null);
}
function Q(e) {
    return (0, x.n)((t) => void 0 !== t.listings[e]);
}
function X(e) {
    return (0, x.n)((t) => {
        for (let r of e) if (void 0 !== t.listings[r]) return !0;
        return !1;
    });
}
function J(e) {
    let t = E(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [r] = S(e, 'priceTier', void 0);
    return [
        n.useMemo(() => {
            var e, n, i, s, o;
            return {
                price: null != (e = null != r ? r : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (n = null == t ? void 0 : t.currency) ? n : w.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : C.rV.MONTH,
                interval_count: null != (s = null == t ? void 0 : t.interval_count) ? s : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : ''
            };
        }, [t, r])
    ];
}
function $(e) {
    (0, c.j)(() => {
        x.n.setState((t) => ({ listings: _(P({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: r } = e,
        n = j.Z.getSubscriptionListing(r);
    s()(null != n, 'listing doesnt exist');
    let i = n.role_id,
        l = n.id,
        a = x.n.getState().listings[r];
    s()(null != a, 'edit state does not exist');
    let { roleColor: c, roleIcon: h, trialLimit: f, trialInterval: d, tierEmojiIds: b } = a;
    (void 0 !== c || void 0 !== h) &&
        (await u.Z.updateRole(t, i, {
            color: c,
            icon: null == h ? void 0 : h.icon,
            unicodeEmoji: null == h ? void 0 : h.unicodeEmoji
        }));
    let Z = j.Z.getSubscriptionTrial(l);
    if (
        ((null != f || null != d || (null != Z && null == d)) &&
            (await g.I1(t, l, {
                trial: d,
                max_num_active_trial_users: f
            })),
        void 0 !== b)
    ) {
        let e = z(p.ZP.getGuildEmoji(t), i),
            r = (0, o.difference)([...b], [...e]),
            n = (0, o.difference)([...e], [...b]),
            s = r
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, v.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, i]
                        });
                }),
            l = n
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let r = e.roles.filter((e) => e !== i);
                    return r.length > 0
                        ? (0, v.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: r
                          })
                        : (0, v.RE)(t, e.id);
                });
        await Promise.all([...s, ...l]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: r, groupListingId: n, onBeforeDispatchNewListing: i } = e,
        o = x.n.getState().listings[r];
    s()(null != o, 'edit state does not exist');
    let { name: l, description: a, channelBenefits: c, intangibleBenefits: h, priceTier: v, image: u, channelAccessFormat: f } = o;
    s()(null != l, 'no name provided'), s()(null != a, 'no description provided'), s()(null != v, 'no priceTier provided'), s()(null != u, 'no image provided');
    let p = f === x.I.ALL_CHANNELS_ACCESS,
        d = n;
    null == d && (d = (await g.uw(t, {})).id), null != c && c.length > 0 && (await (0, O.r4)(t, c));
    let b = [...(null != c ? c : []), ...(null != h ? h : [])],
        Z = (0, O.yL)(r, t);
    return g.dA({
        guildId: t,
        groupListingId: d,
        data: {
            can_access_all_channels: p,
            image: u,
            name: l,
            description: a,
            benefits: b,
            priceTier: v
        },
        analyticsContext: Z,
        onBeforeDispatchNewListing: i
    });
}
function er() {
    let [e, t] = n.useState(!1),
        [r, i] = n.useState();
    return {
        loading: e,
        error: r,
        handleCreateOrUpdateFromEditState: n.useCallback(async (e) => {
            let { guildId: r, editStateId: n, groupListingId: l, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: h } = e,
                v = n,
                u = j.Z.getSubscriptionListing(v);
            try {
                if ((t(!0), i(void 0), null != u))
                    s()(null != l, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: r, editStateId: n, groupListingId: i } = e,
                                l = j.Z.getSubscriptionListing(n);
                            s()(null != l, 'listing doesnt exist');
                            let a = x.n.getState().listings[n];
                            s()(null != a, 'edit state does not exist');
                            let { name: c, description: h, channelBenefits: v, intangibleBenefits: u, priceTier: f, image: p, channelAccessFormat: d } = a,
                                Z = {};
                            if ((c !== l.name && (Z.name = c), h !== l.description && (Z.description = h), f !== (null == (t = l.subscription_plans[0]) ? void 0 : t.price) && (Z.priceTier = f), null != p && (Z.image = p), null != d && (Z.can_access_all_channels = d === x.I.ALL_CHANNELS_ACCESS), null != v || null != u)) {
                                let e = l.role_benefits.benefits.filter(b.rC),
                                    t = l.role_benefits.benefits.filter(b.lL);
                                Z.benefits = [...(null != v ? v : e), ...(null != u ? u : t)];
                            }
                            return (0, o.isEmpty)(Z)
                                ? l
                                : g.O0({
                                      guildId: r,
                                      groupListingId: i,
                                      listingId: n,
                                      data: Z
                                  });
                        })({
                            guildId: r,
                            editStateId: v,
                            groupListingId: l
                        });
                else {
                    var f;
                    let e = await et({
                        guildId: r,
                        editStateId: v,
                        groupListingId: l,
                        onBeforeDispatchNewListing: a
                    });
                    (v = e.id),
                        (f = v),
                        (0, c.j)(() => {
                            x.n.setState((e) => ({
                                listings: _(P({}, e.listings), {
                                    [f]: e.listings[n],
                                    [n]: void 0
                                })
                            }));
                        }),
                        null == h || h(e);
                }
                return (
                    await ee({
                        guildId: r,
                        editStateId: v
                    }),
                    $(v),
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
function en(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, Z._k)(e, r),
        s = (0, x.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, x.n)((e) => e.setEditStateIdsForGroup),
        a = (0, x.n)((e) => e.setListing),
        c = n.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != s ? s : [])
            ],
            [s, i]
        ),
        h = n.useCallback(() => {
            let e = (0, l.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: c,
        addNewEditStateId: h,
        addNewEditStateFromTemplate: n.useCallback(
            (e) => {
                let r = (0, l.Z)();
                return (
                    o(t, (e) => [...(null != e ? e : []), r]),
                    e.listings.forEach((t) => {
                        a(r, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: V.Qs.CHANNEL,
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
            [t, o, a]
        ),
        removeEditStateId: n.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o]
        )
    };
}
