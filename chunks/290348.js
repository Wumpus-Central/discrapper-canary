n.d(t, {
    B7: () => er,
    Ek: () => M,
    F2: () => X,
    GM: () => $,
    GP: () => U,
    H9: () => J,
    Lo: () => Q,
    PK: () => R,
    R7: () => G,
    TT: () => q,
    UE: () => F,
    XZ: () => Y,
    Xo: () => en,
    _T: () => L,
    d9: () => A,
    mR: () => k,
    p9: () => B,
    qs: () => Z,
    rU: () => K
}),
    n(953529),
    n(388685);
var r = n(192379),
    s = n(512722),
    i = n.n(s),
    o = n(392711),
    l = n(772848),
    a = n(866442),
    c = n(731965),
    u = n(442837),
    d = n(80932),
    f = n(749210),
    p = n(211266),
    g = n(339085),
    b = n(73346),
    m = n(817460),
    v = n(423117),
    h = n(584825),
    O = n(289393),
    _ = n(790285),
    j = n(303737),
    y = n(971792),
    x = n(22902),
    S = n(403474),
    C = n(944537),
    E = n(293810),
    P = n(981631),
    w = n(474936);
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
    let s = (0, C.n)((e) => e.setListing),
        i = r.useCallback(
            (r) => {
                s(e, (e) => {
                    var s;
                    let i = null != (s = null == e ? void 0 : e[t]) ? s : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof r ? r(i) : r });
                });
            },
            [s, e, t, n]
        ),
        o = (0, C.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== o ? o : n, i];
}
function I(e, t) {
    let n = (0, u.e7)([O.Z], () => O.Z.getSubscriptionListing(e)),
        s = (0, p.Z)(() => t);
    return r.useMemo(() => s(n), [n, s]);
}
function L(e) {
    let t = I(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return D(e, 'name', t);
}
function k(e) {
    let t = I(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return D(e, 'priceTier', t);
}
function R(e) {
    let t = I(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return D(e, 'description', t);
}
function A(e, t) {
    let n = I(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, b._W)(e.application_id, e.image_asset, t);
    });
    return D(e, 'image', n);
}
function B(e, t) {
    let n = (0, y.Z)(t, e);
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
function Z(e, t) {
    let n = (0, y.Z)(t, e),
        s = (0, C.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        i = (0, C.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = N({}, null != n ? n : S.k);
        if (void 0 !== i) {
            var t, r;
            (e.icon = null != (t = i.icon) ? t : ''), (e.unicodeEmoji = null != (r = i.unicodeEmoji) ? r : '');
        }
        return void 0 !== s && ((e.color = s), (e.colorString = (0, a.Rf)(s))), e;
    }, [n, i, s]);
}
function M(e, t) {
    let n = (0, y.Z)(t, e);
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
    let n = (0, y.Z)(t, e);
    return D(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == n ? C.I.SOME_CHANNELS_ACCESS : (0, _.MT)(n) ? C.I.ALL_CHANNELS_ACCESS : C.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let W = [];
function F(e) {
    let t = I(e, (e) => (null == e ? W : e.role_benefits.benefits.filter(m.rC)));
    return D(e, 'channelBenefits', t);
}
let H = [];
function G(e) {
    let t = I(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(m.lL)));
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
    let n = (0, y.Z)(t, e),
        s = (0, u.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
    return D(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == n ? z : V(s, n.id)), [s, n])
    );
}
function q(e) {
    var t;
    let n = (0, h.oC)(e),
        { selectedOption: r } = (0, x.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return D(e, 'trialInterval', null != r ? r : null);
}
function X(e) {
    var t;
    let n = (0, h.oC)(e);
    return D(e, 'trialLimit', null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function K(e) {
    return (0, C.n)((t) => void 0 !== t.listings[e]);
}
function Q(e) {
    return (0, C.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function J(e) {
    let t = I(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = D(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, s, i, o;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : P.pKx.USD,
                interval: null != (s = null == t ? void 0 : t.interval) ? s : w.rV.MONTH,
                interval_count: null != (i = null == t ? void 0 : t.interval_count) ? i : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : ''
            };
        }, [t, n])
    ];
}
function $(e) {
    (0, c.j)(() => {
        C.n.setState((t) => ({ listings: T(N({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = O.Z.getSubscriptionListing(n);
    i()(null != r, 'listing doesnt exist');
    let s = r.role_id,
        l = r.id,
        a = C.n.getState().listings[n];
    i()(null != a, 'edit state does not exist');
    let { roleColor: c, roleIcon: u, trialLimit: p, trialInterval: b, tierEmojiIds: m } = a;
    (void 0 !== c || void 0 !== u) &&
        (await f.Z.updateRole(t, s, {
            color: c,
            icon: null == u ? void 0 : u.icon,
            unicodeEmoji: null == u ? void 0 : u.unicodeEmoji
        }));
    let h = O.Z.getSubscriptionTrial(l);
    if (
        ((null != p || null != b || (null != h && null == b)) &&
            (await v.I1(t, l, {
                trial: b,
                max_num_active_trial_users: p
            })),
        void 0 !== m)
    ) {
        let e = V(g.ZP.getGuildEmoji(t), s),
            n = (0, o.difference)([...m], [...e]),
            r = (0, o.difference)([...e], [...m]),
            i = n
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, s]
                        });
                }),
            l = r
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== s);
                    return n.length > 0
                        ? (0, d.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n
                          })
                        : (0, d.RE)(t, e.id);
                });
        await Promise.all([...i, ...l]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: s } = e,
        o = C.n.getState().listings[n];
    i()(null != o, 'edit state does not exist');
    let { name: l, description: a, channelBenefits: c, intangibleBenefits: u, priceTier: d, image: f, channelAccessFormat: p } = o;
    i()(null != l, 'no name provided'), i()(null != a, 'no description provided'), i()(null != d, 'no priceTier provided'), i()(null != f, 'no image provided');
    let g = p === C.I.ALL_CHANNELS_ACCESS,
        b = r;
    null == b && (b = (await v.uw(t, {})).id), null != c && c.length > 0 && (await (0, j.r4)(t, c));
    let m = [...(null != c ? c : []), ...(null != u ? u : [])],
        h = (0, j.yL)(n, t);
    return v.dA({
        guildId: t,
        groupListingId: b,
        data: {
            can_access_all_channels: g,
            image: f,
            name: l,
            description: a,
            benefits: m,
            priceTier: d
        },
        analyticsContext: h,
        onBeforeDispatchNewListing: s
    });
}
function en() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let { guildId: n, editStateId: r, groupListingId: l, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: u } = e,
                d = r,
                f = O.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), s(void 0), null != f))
                    i()(null != l, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: r, groupListingId: s } = e,
                                l = O.Z.getSubscriptionListing(r);
                            i()(null != l, 'listing doesnt exist');
                            let a = C.n.getState().listings[r];
                            i()(null != a, 'edit state does not exist');
                            let { name: c, description: u, channelBenefits: d, intangibleBenefits: f, priceTier: p, image: g, channelAccessFormat: b } = a,
                                h = {};
                            if ((c !== l.name && (h.name = c), u !== l.description && (h.description = u), p !== (null == (t = l.subscription_plans[0]) ? void 0 : t.price) && (h.priceTier = p), null != g && (h.image = g), null != b && (h.can_access_all_channels = b === C.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let e = l.role_benefits.benefits.filter(m.rC),
                                    t = l.role_benefits.benefits.filter(m.lL);
                                h.benefits = [...(null != d ? d : e), ...(null != f ? f : t)];
                            }
                            return (0, o.isEmpty)(h)
                                ? l
                                : v.O0({
                                      guildId: n,
                                      groupListingId: s,
                                      listingId: r,
                                      data: h
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: l
                        });
                else {
                    var p;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: l,
                        onBeforeDispatchNewListing: a
                    });
                    (d = e.id),
                        (p = d),
                        (0, c.j)(() => {
                            C.n.setState((e) => ({
                                listings: T(N({}, e.listings), {
                                    [p]: e.listings[r],
                                    [r]: void 0
                                })
                            }));
                        }),
                        null == u || u(e);
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
                s(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        s = (0, h._k)(e, n),
        i = (0, C.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, C.n)((e) => e.setEditStateIdsForGroup),
        a = (0, C.n)((e) => e.setListing),
        c = r.useMemo(
            () => [
                ...s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != i ? i : [])
            ],
            [i, s]
        ),
        u = r.useCallback(() => {
            let e = (0, l.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: c,
        addNewEditStateId: u,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, l.Z)();
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
                                ref_type: E.Qs.CHANNEL,
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
