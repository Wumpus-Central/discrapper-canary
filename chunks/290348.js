n.d(t, {
    B7: () => ei,
    Ek: () => U,
    F2: () => K,
    GM: () => $,
    GP: () => B,
    H9: () => Q,
    Lo: () => J,
    PK: () => Z,
    R7: () => H,
    TT: () => q,
    UE: () => k,
    XZ: () => Y,
    Xo: () => en,
    _T: () => L,
    d9: () => R,
    mR: () => D,
    p9: () => M,
    qs: () => G,
    rU: () => X,
}),
    n(953529),
    n(388685);
var i = n(73800),
    r = n(512722),
    s = n.n(r),
    l = n(392711),
    o = n(772848),
    a = n(866442),
    u = n(731965),
    c = n(442837),
    d = n(80932),
    h = n(749210),
    p = n(211266),
    g = n(339085),
    f = n(73346),
    v = n(817460),
    m = n(423117),
    C = n(584825),
    b = n(289393),
    y = n(790285),
    O = n(303737),
    S = n(971792),
    E = n(22902),
    _ = n(403474),
    w = n(944537),
    I = n(293810),
    j = n(981631),
    P = n(474936);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
function T(e, t, n) {
    let r = (0, w.n)((e) => e.setListing),
        s = i.useCallback(
            (i) => {
                r(e, (e) => {
                    var r;
                    let s = null != (r = null == e ? void 0 : e[t]) ? r : n;
                    return Object.assign({}, e, { [t]: "function" == typeof i ? i(s) : i });
                });
            },
            [r, e, t, n],
        ),
        l = (0, w.n)((n) => {
            var i;
            return null == (i = n.listings[e]) ? void 0 : i[t];
        });
    return [void 0 !== l ? l : n, s];
}
function A(e, t) {
    let n = (0, c.e7)([b.Z], () => b.Z.getSubscriptionListing(e)),
        r = (0, p.Z)(() => t);
    return i.useMemo(() => r(n), [n, r]);
}
function L(e) {
    let t = A(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : "";
    });
    return T(e, "name", t);
}
function D(e) {
    let t = A(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return T(e, "priceTier", t);
}
function Z(e) {
    let t = A(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : "";
    });
    return T(e, "description", t);
}
function R(e, t) {
    let n = A(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, f._W)(e.application_id, e.image_asset, t);
    });
    return T(e, "image", n);
}
function M(e, t) {
    let n = (0, S.Z)(t, e);
    return T(
        e,
        "roleIcon",
        i.useMemo(() => {
            var e, t;
            return {
                icon: null != (e = null == n ? void 0 : n.icon) ? e : void 0,
                unicodeEmoji: null != (t = null == n ? void 0 : n.unicodeEmoji) ? t : void 0,
            };
        }, [n]),
    );
}
function G(e, t) {
    let n = (0, S.Z)(t, e),
        r = (0, w.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        s = (0, w.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let e = N({}, null != n ? n : _.k);
        if (void 0 !== s) {
            var t, i;
            (e.icon = null != (t = s.icon) ? t : ""), (e.unicodeEmoji = null != (i = s.unicodeEmoji) ? i : "");
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e;
    }, [n, s, r]);
}
function U(e, t) {
    let n = (0, S.Z)(t, e);
    return T(
        e,
        "roleColor",
        i.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : j.p6O;
        }, [n]),
    );
}
function B(e, t) {
    let n = (0, S.Z)(t, e);
    return T(
        e,
        "channelAccessFormat",
        i.useMemo(
            () =>
                null == n
                    ? w.I.SOME_CHANNELS_ACCESS
                    : (0, y.yt)(n)
                      ? w.I.ALL_CHANNELS_ACCESS
                      : w.I.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let F = [];
function k(e) {
    let t = A(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(v.rC)));
    return T(e, "channelBenefits", t);
}
let V = [];
function H(e) {
    let t = A(e, (e) => (null == e ? V : e.role_benefits.benefits.filter(v.lL)));
    return T(e, "intangibleBenefits", t);
}
let z = new Set();
function W(e, t) {
    return 0 === e.length
        ? z
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function Y(e, t) {
    let n = (0, S.Z)(t, e),
        r = (0, c.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
    return T(
        e,
        "tierEmojiIds",
        i.useMemo(() => (null == n ? z : W(r, n.id)), [r, n]),
    );
}
function q(e) {
    var t;
    let n = (0, C.oC)(e),
        { selectedOption: i } = (0, E.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return T(e, "trialInterval", null != i ? i : null);
}
function K(e) {
    var t;
    let n = (0, C.oC)(e);
    return T(e, "trialLimit", null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function X(e) {
    return (0, w.n)((t) => void 0 !== t.listings[e]);
}
function J(e) {
    return (0, w.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function Q(e) {
    let t = A(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = T(e, "priceTier", void 0);
    return [
        i.useMemo(() => {
            var e, i, r, s, l;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (i = null == t ? void 0 : t.currency) ? i : j.pKx.USD,
                interval: null != (r = null == t ? void 0 : t.interval) ? r : P.rV.MONTH,
                interval_count: null != (s = null == t ? void 0 : t.interval_count) ? s : 1,
                id: null != (l = null == t ? void 0 : t.id) ? l : "",
            };
        }, [t, n]),
    ];
}
function $(e) {
    (0, u.j)(() => {
        w.n.setState((t) => ({ listings: x(N({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        i = b.Z.getSubscriptionListing(n);
    s()(null != i, "listing doesnt exist");
    let r = i.role_id,
        o = i.id,
        a = w.n.getState().listings[n];
    s()(null != a, "edit state does not exist");
    let { roleColor: u, roleIcon: c, trialLimit: p, trialInterval: f, tierEmojiIds: v } = a;
    (void 0 !== u || void 0 !== c) &&
        (await h.Z.updateRole(t, r, {
            color: u,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
        }));
    let C = b.Z.getSubscriptionTrial(o);
    if (
        ((null != p || null != f || (null != C && null == f)) &&
            (await m.I1(t, o, {
                trial: f,
                max_num_active_trial_users: p,
            })),
        void 0 !== v)
    ) {
        let e = W(g.ZP.getGuildEmoji(t), r),
            n = (0, l.difference)([...v], [...e]),
            i = (0, l.difference)([...e], [...v]),
            s = n
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, r],
                        });
                }),
            o = i
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== r);
                    return n.length > 0
                        ? (0, d.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n,
                          })
                        : (0, d.RE)(t, e.id);
                });
        await Promise.all([...s, ...o]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: r } = e,
        l = w.n.getState().listings[n];
    s()(null != l, "edit state does not exist");
    let {
        name: o,
        description: a,
        channelBenefits: u,
        intangibleBenefits: c,
        priceTier: d,
        image: h,
        channelAccessFormat: p,
    } = l;
    s()(null != o, "no name provided"),
        s()(null != a, "no description provided"),
        s()(null != d, "no priceTier provided"),
        s()(null != h, "no image provided");
    let g = p === w.I.ALL_CHANNELS_ACCESS,
        f = i;
    null == f && (f = (await m.uw(t, {})).id), null != u && u.length > 0 && (await (0, O.r4)(t, u));
    let v = [...(null != u ? u : []), ...(null != c ? c : [])],
        C = (0, O.yL)(n, t);
    return m.dA({
        guildId: t,
        groupListingId: f,
        data: {
            can_access_all_channels: g,
            image: h,
            name: o,
            description: a,
            benefits: v,
            priceTier: d,
        },
        analyticsContext: C,
        onBeforeDispatchNewListing: r,
    });
}
function en() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let {
                    guildId: n,
                    editStateId: i,
                    groupListingId: o,
                    onBeforeDispatchNewListing: a,
                    onAfterDispatchNewListing: c,
                } = e,
                d = i,
                h = b.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), r(void 0), null != h))
                    s()(null != o, "groupListingId is null"),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: i, groupListingId: r } = e,
                                o = b.Z.getSubscriptionListing(i);
                            s()(null != o, "listing doesnt exist");
                            let a = w.n.getState().listings[i];
                            s()(null != a, "edit state does not exist");
                            let {
                                    name: u,
                                    description: c,
                                    channelBenefits: d,
                                    intangibleBenefits: h,
                                    priceTier: p,
                                    image: g,
                                    channelAccessFormat: f,
                                } = a,
                                C = {};
                            if (
                                (u !== o.name && (C.name = u),
                                c !== o.description && (C.description = c),
                                p !== (null == (t = o.subscription_plans[0]) ? void 0 : t.price) && (C.priceTier = p),
                                null != g && (C.image = g),
                                null != f && (C.can_access_all_channels = f === w.I.ALL_CHANNELS_ACCESS),
                                null != d || null != h)
                            ) {
                                let e = o.role_benefits.benefits.filter(v.rC),
                                    t = o.role_benefits.benefits.filter(v.lL);
                                C.benefits = [...(null != d ? d : e), ...(null != h ? h : t)];
                            }
                            return (0, l.isEmpty)(C)
                                ? o
                                : m.O0({
                                      guildId: n,
                                      groupListingId: r,
                                      listingId: i,
                                      data: C,
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: o,
                        });
                else {
                    var p;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: o,
                        onBeforeDispatchNewListing: a,
                    });
                    (d = e.id),
                        (p = d),
                        (0, u.j)(() => {
                            w.n.setState((e) => ({
                                listings: x(N({}, e.listings), {
                                    [p]: e.listings[i],
                                    [i]: void 0,
                                }),
                            }));
                        }),
                        null == c || c(e);
                }
                return (
                    await ee({
                        guildId: n,
                        editStateId: d,
                    }),
                    $(d),
                    !0
                );
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                r(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function ei(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, C._k)(e, n),
        s = (0, w.n)((e) => e.editStateIdsForGroup[t]),
        l = (0, w.n)((e) => e.setEditStateIdsForGroup),
        a = (0, w.n)((e) => e.setListing),
        u = i.useMemo(
            () => [
                ...r.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != s ? s : []),
            ],
            [s, r],
        ),
        c = i.useCallback(() => {
            let e = (0, o.Z)();
            l(t, (t) => [...(null != t ? t : []), e]);
        }, [t, l]);
    return {
        editStateIds: u,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: i.useCallback(
            (e) => {
                let n = (0, o.Z)();
                return (
                    l(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        a(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: I.Qs.CHANNEL,
                                description: e.description,
                                name: e.name,
                                emoji_name: e.emoji_name,
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: t.image,
                            },
                            roleColor: t.role_color,
                            usedTemplate: e.category,
                        }));
                    }),
                    n
                );
            },
            [t, l, a],
        ),
        removeEditStateId: i.useCallback(
            (e) => {
                l(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, l],
        ),
    };
}
