n.d(t, {
    B7: () => er,
    Ek: () => M,
    F2: () => K,
    GM: () => $,
    GP: () => U,
    H9: () => J,
    Lo: () => Q,
    PK: () => A,
    R7: () => F,
    TT: () => q,
    UE: () => G,
    XZ: () => V,
    Xo: () => en,
    _T: () => k,
    d9: () => L,
    mR: () => B,
    p9: () => R,
    qs: () => Z,
    rU: () => X
}),
    n(953529),
    n(388685);
var r = n(73800),
    i = n(512722),
    s = n.n(i),
    o = n(392711),
    l = n(772848),
    a = n(866442),
    c = n(731965),
    u = n(442837),
    d = n(80932),
    p = n(749210),
    f = n(211266),
    g = n(339085),
    b = n(73346),
    m = n(817460),
    _ = n(423117),
    v = n(584825),
    h = n(289393),
    O = n(790285),
    y = n(303737),
    j = n(971792),
    x = n(22902),
    S = n(403474),
    C = n(944537),
    E = n(293810),
    P = n(981631),
    w = n(474936);
function T(e) {
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
function I(e, t, n) {
    let i = (0, C.n)((e) => e.setListing),
        s = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let s = null != (i = null == e ? void 0 : e[t]) ? i : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof r ? r(s) : r });
                });
            },
            [i, e, t, n]
        ),
        o = (0, C.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== o ? o : n, s];
}
function D(e, t) {
    let n = (0, u.e7)([h.Z], () => h.Z.getSubscriptionListing(e)),
        i = (0, f.Z)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function k(e) {
    let t = D(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : '';
    });
    return I(e, 'name', t);
}
function B(e) {
    let t = D(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return I(e, 'priceTier', t);
}
function A(e) {
    let t = D(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : '';
    });
    return I(e, 'description', t);
}
function L(e, t) {
    let n = D(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, b._W)(e.application_id, e.image_asset, t);
    });
    return I(e, 'image', n);
}
function R(e, t) {
    let n = (0, j.Z)(t, e);
    return I(
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
    let n = (0, j.Z)(t, e),
        i = (0, C.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        s = (0, C.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = T({}, null != n ? n : S.k);
        if (void 0 !== s) {
            var t, r;
            (e.icon = null != (t = s.icon) ? t : ''), (e.unicodeEmoji = null != (r = s.unicodeEmoji) ? r : '');
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, a.Rf)(i))), e;
    }, [n, s, i]);
}
function M(e, t) {
    let n = (0, j.Z)(t, e);
    return I(
        e,
        'roleColor',
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : P.p6O;
        }, [n])
    );
}
function U(e, t) {
    let n = (0, j.Z)(t, e);
    return I(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == n ? C.I.SOME_CHANNELS_ACCESS : (0, O.MT)(n) ? C.I.ALL_CHANNELS_ACCESS : C.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let W = [];
function G(e) {
    let t = D(e, (e) => (null == e ? W : e.role_benefits.benefits.filter(m.rC)));
    return I(e, 'channelBenefits', t);
}
let H = [];
function F(e) {
    let t = D(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(m.lL)));
    return I(e, 'intangibleBenefits', t);
}
let z = new Set();
function Y(e, t) {
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
function V(e, t) {
    let n = (0, j.Z)(t, e),
        i = (0, u.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
    return I(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == n ? z : Y(i, n.id)), [i, n])
    );
}
function q(e) {
    var t;
    let n = (0, v.oC)(e),
        { selectedOption: r } = (0, x.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return I(e, 'trialInterval', null != r ? r : null);
}
function K(e) {
    var t;
    let n = (0, v.oC)(e);
    return I(e, 'trialLimit', null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function X(e) {
    return (0, C.n)((t) => void 0 !== t.listings[e]);
}
function Q(e) {
    return (0, C.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function J(e) {
    let t = D(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = I(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, i, s, o;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : P.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : w.rV.MONTH,
                interval_count: null != (s = null == t ? void 0 : t.interval_count) ? s : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : ''
            };
        }, [t, n])
    ];
}
function $(e) {
    (0, c.j)(() => {
        C.n.setState((t) => ({ listings: N(T({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = h.Z.getSubscriptionListing(n);
    s()(null != r, 'listing doesnt exist');
    let i = r.role_id,
        l = r.id,
        a = C.n.getState().listings[n];
    s()(null != a, 'edit state does not exist');
    let { roleColor: c, roleIcon: u, trialLimit: f, trialInterval: b, tierEmojiIds: m } = a;
    (void 0 !== c || void 0 !== u) &&
        (await p.Z.updateRole(t, i, {
            color: c,
            icon: null == u ? void 0 : u.icon,
            unicodeEmoji: null == u ? void 0 : u.unicodeEmoji
        }));
    let v = h.Z.getSubscriptionTrial(l);
    if (
        ((null != f || null != b || (null != v && null == b)) &&
            (await _.I1(t, l, {
                trial: b,
                max_num_active_trial_users: f
            })),
        void 0 !== m)
    ) {
        let e = Y(g.ZP.getGuildEmoji(t), i),
            n = (0, o.difference)([...m], [...e]),
            r = (0, o.difference)([...e], [...m]),
            s = n
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, i]
                        });
                }),
            l = r
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
        await Promise.all([...s, ...l]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        o = C.n.getState().listings[n];
    s()(null != o, 'edit state does not exist');
    let { name: l, description: a, channelBenefits: c, intangibleBenefits: u, priceTier: d, image: p, channelAccessFormat: f } = o;
    s()(null != l, 'no name provided'), s()(null != a, 'no description provided'), s()(null != d, 'no priceTier provided'), s()(null != p, 'no image provided');
    let g = f === C.I.ALL_CHANNELS_ACCESS,
        b = r;
    null == b && (b = (await _.uw(t, {})).id), null != c && c.length > 0 && (await (0, y.r4)(t, c));
    let m = [...(null != c ? c : []), ...(null != u ? u : [])],
        v = (0, y.yL)(n, t);
    return _.dA({
        guildId: t,
        groupListingId: b,
        data: {
            can_access_all_channels: g,
            image: p,
            name: l,
            description: a,
            benefits: m,
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
            let { guildId: n, editStateId: r, groupListingId: l, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: u } = e,
                d = r,
                p = h.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), i(void 0), null != p))
                    s()(null != l, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: r, groupListingId: i } = e,
                                l = h.Z.getSubscriptionListing(r);
                            s()(null != l, 'listing doesnt exist');
                            let a = C.n.getState().listings[r];
                            s()(null != a, 'edit state does not exist');
                            let { name: c, description: u, channelBenefits: d, intangibleBenefits: p, priceTier: f, image: g, channelAccessFormat: b } = a,
                                v = {};
                            if ((c !== l.name && (v.name = c), u !== l.description && (v.description = u), f !== (null == (t = l.subscription_plans[0]) ? void 0 : t.price) && (v.priceTier = f), null != g && (v.image = g), null != b && (v.can_access_all_channels = b === C.I.ALL_CHANNELS_ACCESS), null != d || null != p)) {
                                let e = l.role_benefits.benefits.filter(m.rC),
                                    t = l.role_benefits.benefits.filter(m.lL);
                                v.benefits = [...(null != d ? d : e), ...(null != p ? p : t)];
                            }
                            return (0, o.isEmpty)(v)
                                ? l
                                : _.O0({
                                      guildId: n,
                                      groupListingId: i,
                                      listingId: r,
                                      data: v
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: l
                        });
                else {
                    var f;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: l,
                        onBeforeDispatchNewListing: a
                    });
                    (d = e.id),
                        (f = d),
                        (0, c.j)(() => {
                            C.n.setState((e) => ({
                                listings: N(T({}, e.listings), {
                                    [f]: e.listings[r],
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
        s = (0, C.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, C.n)((e) => e.setEditStateIdsForGroup),
        a = (0, C.n)((e) => e.setListing),
        c = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != s ? s : [])
            ],
            [s, i]
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
