n.d(t, {
    B7: () => er,
    Ek: () => H,
    F2: () => K,
    GM: () => $,
    GP: () => F,
    H9: () => J,
    Lo: () => X,
    PK: () => M,
    R7: () => B,
    TT: () => q,
    UE: () => V,
    XZ: () => Q,
    Xo: () => en,
    _T: () => T,
    d9: () => k,
    mR: () => D,
    p9: () => x,
    qs: () => R,
    rU: () => W,
}),
    n(953529),
    n(388685);
var r = n(73800),
    i = n(512722),
    l = n.n(i),
    o = n(392711),
    u = n(772848),
    a = n(866442),
    s = n(731965),
    c = n(442837),
    d = n(80932),
    f = n(749210),
    m = n(211266),
    p = n(339085),
    v = n(73346),
    g = n(817460),
    b = n(423117),
    E = n(584825),
    O = n(289393),
    y = n(790285),
    S = n(303737),
    j = n(971792),
    _ = n(22902),
    h = n(403474),
    P = n(944537),
    C = n(293810),
    Z = n(981631),
    N = n(474936);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
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
function A(e, t, n) {
    let i = (0, P.n)((e) => e.setListing),
        l = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let l = null != (i = null == e ? void 0 : e[t]) ? i : n;
                    return Object.assign({}, e, { [t]: "function" == typeof r ? r(l) : r });
                });
            },
            [i, e, t, n],
        ),
        o = (0, P.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== o ? o : n, l];
}
function L(e, t) {
    let n = (0, c.e7)([O.Z], () => O.Z.getSubscriptionListing(e)),
        i = (0, m.Z)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function T(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : "";
    });
    return A(e, "name", t);
}
function D(e) {
    let t = L(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return A(e, "priceTier", t);
}
function M(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : "";
    });
    return A(e, "description", t);
}
function k(e, t) {
    let n = L(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, v._W)(e.application_id, e.image_asset, t);
    });
    return A(e, "image", n);
}
function x(e, t) {
    let n = (0, j.Z)(t, e);
    return A(
        e,
        "roleIcon",
        r.useMemo(() => {
            var e, t;
            return {
                icon: null != (e = null == n ? void 0 : n.icon) ? e : void 0,
                unicodeEmoji: null != (t = null == n ? void 0 : n.unicodeEmoji) ? t : void 0,
            };
        }, [n]),
    );
}
function R(e, t) {
    let n = (0, j.Z)(t, e),
        i = (0, P.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        l = (0, P.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = w({}, null != n ? n : h.k);
        if (void 0 !== l) {
            var t, r;
            (e.icon = null != (t = l.icon) ? t : ""), (e.unicodeEmoji = null != (r = l.unicodeEmoji) ? r : "");
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, a.Rf)(i))), e;
    }, [n, l, i]);
}
function H(e, t) {
    let n = (0, j.Z)(t, e);
    return A(
        e,
        "roleColor",
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : Z.p6O;
        }, [n]),
    );
}
function F(e, t) {
    let n = (0, j.Z)(t, e);
    return A(
        e,
        "channelAccessFormat",
        r.useMemo(
            () =>
                null == n
                    ? P.I.SOME_CHANNELS_ACCESS
                    : (0, y.yt)(n)
                      ? P.I.ALL_CHANNELS_ACCESS
                      : P.I.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let G = [];
function V(e) {
    let t = L(e, (e) => (null == e ? G : e.role_benefits.benefits.filter(g.rC)));
    return A(e, "channelBenefits", t);
}
let U = [];
function B(e) {
    let t = L(e, (e) => (null == e ? U : e.role_benefits.benefits.filter(g.lL)));
    return A(e, "intangibleBenefits", t);
}
let Y = new Set();
function z(e, t) {
    return 0 === e.length
        ? Y
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function Q(e, t) {
    let n = (0, j.Z)(t, e),
        i = (0, c.Wu)([p.ZP], () => p.ZP.getGuildEmoji(t), [t]);
    return A(
        e,
        "tierEmojiIds",
        r.useMemo(() => (null == n ? Y : z(i, n.id)), [i, n]),
    );
}
function q(e) {
    var t;
    let n = (0, E.oC)(e),
        { selectedOption: r } = (0, _.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return A(e, "trialInterval", null != r ? r : null);
}
function K(e) {
    var t;
    let n = (0, E.oC)(e);
    return A(e, "trialLimit", null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function W(e) {
    return (0, P.n)((t) => void 0 !== t.listings[e]);
}
function X(e) {
    return (0, P.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function J(e) {
    let t = L(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = A(e, "priceTier", void 0);
    return [
        r.useMemo(() => {
            var e, r, i, l, o;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : Z.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : N.rV.MONTH,
                interval_count: null != (l = null == t ? void 0 : t.interval_count) ? l : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : "",
            };
        }, [t, n]),
    ];
}
function $(e) {
    (0, s.j)(() => {
        P.n.setState((t) => ({ listings: I(w({}, t.listings), { [e]: t.listings.nonexistantEditStateId }) }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = O.Z.getSubscriptionListing(n);
    l()(null != r, "listing doesnt exist");
    let i = r.role_id,
        u = r.id,
        a = P.n.getState().listings[n];
    l()(null != a, "edit state does not exist");
    let { roleColor: s, roleIcon: c, trialLimit: m, trialInterval: v, tierEmojiIds: g } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(t, i, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
        }));
    let E = O.Z.getSubscriptionTrial(u);
    if (
        ((null != m || null != v || (null != E && null == v)) &&
            (await b.I1(t, u, {
                trial: v,
                max_num_active_trial_users: m,
            })),
        void 0 !== g)
    ) {
        let e = z(p.ZP.getGuildEmoji(t), i),
            n = (0, o.difference)([...g], [...e]),
            r = (0, o.difference)([...e], [...g]),
            l = n
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, i],
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
                              roles: n,
                          })
                        : (0, d.RE)(t, e.id);
                });
        await Promise.all([...l, ...u]);
    }
}
async function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        o = P.n.getState().listings[n];
    l()(null != o, "edit state does not exist");
    let {
        name: u,
        description: a,
        channelBenefits: s,
        intangibleBenefits: c,
        priceTier: d,
        image: f,
        channelAccessFormat: m,
    } = o;
    l()(null != u, "no name provided"),
        l()(null != a, "no description provided"),
        l()(null != d, "no priceTier provided"),
        l()(null != f, "no image provided");
    let p = m === P.I.ALL_CHANNELS_ACCESS,
        v = r;
    null == v && (v = (await b.uw(t, {})).id), null != s && s.length > 0 && (await (0, S.r4)(t, s));
    let g = [...(null != s ? s : []), ...(null != c ? c : [])],
        E = (0, S.yL)(n, t);
    return b.dA({
        guildId: t,
        groupListingId: v,
        data: {
            can_access_all_channels: p,
            image: f,
            name: u,
            description: a,
            benefits: g,
            priceTier: d,
        },
        analyticsContext: E,
        onBeforeDispatchNewListing: i,
    });
}
function en() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let {
                    guildId: n,
                    editStateId: r,
                    groupListingId: u,
                    onBeforeDispatchNewListing: a,
                    onAfterDispatchNewListing: c,
                } = e,
                d = r,
                f = O.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), i(void 0), null != f))
                    l()(null != u, "groupListingId is null"),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: r, groupListingId: i } = e,
                                u = O.Z.getSubscriptionListing(r);
                            l()(null != u, "listing doesnt exist");
                            let a = P.n.getState().listings[r];
                            l()(null != a, "edit state does not exist");
                            let {
                                    name: s,
                                    description: c,
                                    channelBenefits: d,
                                    intangibleBenefits: f,
                                    priceTier: m,
                                    image: p,
                                    channelAccessFormat: v,
                                } = a,
                                E = {};
                            if (
                                (s !== u.name && (E.name = s),
                                c !== u.description && (E.description = c),
                                m !== (null == (t = u.subscription_plans[0]) ? void 0 : t.price) && (E.priceTier = m),
                                null != p && (E.image = p),
                                null != v && (E.can_access_all_channels = v === P.I.ALL_CHANNELS_ACCESS),
                                null != d || null != f)
                            ) {
                                let e = u.role_benefits.benefits.filter(g.rC),
                                    t = u.role_benefits.benefits.filter(g.lL);
                                E.benefits = [...(null != d ? d : e), ...(null != f ? f : t)];
                            }
                            return (0, o.isEmpty)(E)
                                ? u
                                : b.O0({
                                      guildId: n,
                                      groupListingId: i,
                                      listingId: r,
                                      data: E,
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: u,
                        });
                else {
                    var m;
                    let e = await et({
                        guildId: n,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: a,
                    });
                    (d = e.id),
                        (m = d),
                        (0, s.j)(() => {
                            P.n.setState((e) => ({
                                listings: I(w({}, e.listings), {
                                    [m]: e.listings[r],
                                    [r]: void 0,
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
                i(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, E._k)(e, n),
        l = (0, P.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, P.n)((e) => e.setEditStateIdsForGroup),
        a = (0, P.n)((e) => e.setListing),
        s = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != l ? l : []),
            ],
            [l, i],
        ),
        c = r.useCallback(() => {
            let e = (0, u.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: s,
        addNewEditStateId: c,
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
                                ref_type: C.Qs.CHANNEL,
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
            [t, o, a],
        ),
        removeEditStateId: r.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o],
        ),
    };
}
