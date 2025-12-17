n.d(t, {
    B7: () => el,
    Ek: () => F,
    F2: () => X,
    GM: () => en,
    GP: () => B,
    H9: () => ee,
    Lo: () => $,
    PK: () => k,
    R7: () => W,
    TT: () => Q,
    UE: () => H,
    XZ: () => q,
    Xo: () => es,
    _T: () => j,
    d9: () => U,
    mR: () => M,
    p9: () => G,
    qs: () => Z,
    rU: () => J,
}),
    n(953529),
    n(388685);
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n(772848),
    l = n(866442),
    c = n(731965),
    u = n(442837),
    d = n(80932),
    f = n(749210),
    p = n(211266),
    _ = n(339085),
    m = n(73346),
    h = n(817460),
    g = n(423117),
    E = n(584825),
    b = n(289393),
    y = n(790285),
    O = n(303737),
    v = n(971792),
    S = n(22902),
    I = n(403474),
    T = n(944537),
    C = n(293810),
    A = n(981631),
    N = n(474936);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t, n) {
    let i = (0, T.n)((e) => e.setListing),
        a = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let a = null != (i = null == e ? void 0 : e[t]) ? i : n;
                    return Object.assign({}, e, { [t]: "function" == typeof r ? r(a) : r });
                });
            },
            [i, e, t, n],
        ),
        o = (0, T.n)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== o ? o : n, a];
}
function L(e, t) {
    let n = (0, u.e7)([b.Z], () => b.Z.getSubscriptionListing(e)),
        i = (0, p.Z)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function j(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : "";
    });
    return x(e, "name", t);
}
function M(e) {
    let t = L(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return x(e, "priceTier", t);
}
function k(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : "";
    });
    return x(e, "description", t);
}
function U(e, t) {
    let n = L(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, m._W)(e.application_id, e.image_asset, t);
    });
    return x(e, "image", n);
}
function G(e, t) {
    let n = (0, v.Z)(t, e);
    return x(
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
function Z(e, t) {
    let n = (0, v.Z)(t, e),
        i = (0, T.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        a = (0, T.n)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = R({}, null != n ? n : I.k);
        if (void 0 !== a) {
            var t, r;
            (e.icon = null != (t = a.icon) ? t : ""), (e.unicodeEmoji = null != (r = a.unicodeEmoji) ? r : "");
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, l.Rf)(i))), e;
    }, [n, a, i]);
}
function F(e, t) {
    let n = (0, v.Z)(t, e);
    return x(
        e,
        "roleColor",
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : A.p6O;
        }, [n]),
    );
}
function B(e, t) {
    let n = (0, v.Z)(t, e);
    return x(
        e,
        "channelAccessFormat",
        r.useMemo(
            () =>
                null == n
                    ? T.I.SOME_CHANNELS_ACCESS
                    : (0, y.yt)(n)
                      ? T.I.ALL_CHANNELS_ACCESS
                      : T.I.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let V = [];
function H(e) {
    let t = L(e, (e) => (null == e ? V : e.role_benefits.benefits.filter(h.rC)));
    return x(e, "channelBenefits", t);
}
let Y = [];
function W(e) {
    let t = L(e, (e) => (null == e ? Y : e.role_benefits.benefits.filter(h.lL)));
    return x(e, "intangibleBenefits", t);
}
let K = new Set();
function z(e, t) {
    return 0 === e.length
        ? K
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function q(e, t) {
    let n = (0, v.Z)(t, e),
        i = (0, u.Wu)([_.ZP], () => _.ZP.getGuildEmoji(t), [t]);
    return x(
        e,
        "tierEmojiIds",
        r.useMemo(() => (null == n ? K : z(i, n.id)), [i, n]),
    );
}
function Q(e) {
    var t;
    let n = (0, E.oC)(e),
        { selectedOption: r } = (0, S.Z)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return x(e, "trialInterval", null != r ? r : null);
}
function X(e) {
    var t;
    let n = (0, E.oC)(e);
    return x(e, "trialLimit", null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function J(e) {
    return (0, T.n)((t) => void 0 !== t.listings[e]);
}
function $(e) {
    return (0, T.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function ee(e) {
    let t = L(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = x(e, "priceTier", void 0);
    return [
        r.useMemo(() => {
            var e, r, i, a, o;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : A.pKx.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : N.rV.MONTH,
                interval_count: null != (a = null == t ? void 0 : t.interval_count) ? a : 1,
                id: null != (o = null == t ? void 0 : t.id) ? o : "",
            };
        }, [t, n]),
    ];
}
function et(e, t) {
    (0, c.j)(() => {
        T.n.setState((n) => ({ listings: D(R({}, n.listings), { [t]: n.listings[e] }) }));
    });
}
function en(e) {
    et("nonexistantEditStateId", e);
}
function er(e, t) {
    (0, c.j)(() => {
        T.n.setState((n) => ({
            listings: D(R({}, n.listings), {
                [t]: n.listings[e],
                [e]: void 0,
            }),
        }));
    });
}
async function ei(e) {
    let { guildId: t, editStateId: n } = e,
        r = b.Z.getSubscriptionListing(n);
    a()(null != r, "listing doesnt exist");
    let i = r.role_id,
        s = r.id,
        l = T.n.getState().listings[n];
    a()(null != l, "edit state does not exist");
    let { roleColor: c, roleIcon: u, trialLimit: p, trialInterval: m, tierEmojiIds: h } = l;
    (void 0 !== c || void 0 !== u) &&
        (await f.Z.updateRole(t, i, {
            color: c,
            icon: null == u ? void 0 : u.icon,
            unicodeEmoji: null == u ? void 0 : u.unicodeEmoji,
        }));
    let E = b.Z.getSubscriptionTrial(s);
    if (
        ((null != p || null != m || (null != E && null == m)) &&
            (await g.I1(t, s, {
                trial: m,
                max_num_active_trial_users: p,
            })),
        void 0 !== h)
    ) {
        let e = z(_.ZP.getGuildEmoji(t), i),
            n = (0, o.difference)([...h], [...e]),
            r = (0, o.difference)([...e], [...h]),
            a = n.map((e) => {
                let n = _.ZP.getCustomEmojiById(e);
                if (null != n)
                    return (0, d.dv)({
                        guildId: t,
                        emojiId: n.id,
                        roles: [...n.roles, i],
                    });
            }),
            s = r.map((e) => {
                let n = _.ZP.getCustomEmojiById(e);
                if (null == n) return;
                let r = n.roles.filter((e) => e !== i);
                return r.length > 0
                    ? (0, d.dv)({
                          guildId: t,
                          emojiId: n.id,
                          roles: r,
                      })
                    : (0, d.RE)(t, n.id);
            });
        await Promise.all([...a, ...s]);
    }
}
function ea(e) {
    var t;
    let { guildId: n, editStateId: r, groupListingId: i } = e,
        s = b.Z.getSubscriptionListing(r);
    a()(null != s, "listing doesnt exist");
    let l = r,
        c = T.n.getState().listings[l];
    a()(null != c, "edit state does not exist");
    let {
            name: u,
            description: d,
            channelBenefits: f,
            intangibleBenefits: p,
            priceTier: _,
            image: m,
            channelAccessFormat: E,
        } = c,
        y = {};
    if (
        (u !== s.name && (y.name = u),
        d !== s.description && (y.description = d),
        _ !== (null == (t = s.subscription_plans[0]) ? void 0 : t.price) && (y.priceTier = _),
        null != m && (y.image = m),
        null != E && (y.can_access_all_channels = E === T.I.ALL_CHANNELS_ACCESS),
        null != f || null != p)
    ) {
        let e = s.role_benefits.benefits.filter(h.rC),
            t = s.role_benefits.benefits.filter(h.lL);
        y.benefits = [...(null != f ? f : e), ...(null != p ? p : t)];
    }
    return (0, o.isEmpty)(y)
        ? s
        : g.O0({
              guildId: n,
              groupListingId: i,
              listingId: l,
              data: y,
          });
}
async function eo(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        o = T.n.getState().listings[n];
    a()(null != o, "edit state does not exist");
    let {
        name: s,
        description: l,
        channelBenefits: c,
        intangibleBenefits: u,
        priceTier: d,
        image: f,
        channelAccessFormat: p,
    } = o;
    a()(null != s, "no name provided"),
        a()(null != l, "no description provided"),
        a()(null != d, "no priceTier provided"),
        a()(null != f, "no image provided");
    let _ = p === T.I.ALL_CHANNELS_ACCESS,
        m = r;
    null == m && (m = (await g.uw(t, {})).id), null != c && c.length > 0 && (await (0, O.r4)(t, c));
    let h = [...(null != c ? c : []), ...(null != u ? u : [])],
        E = (0, O.yL)(n, t);
    return g.dA({
        guildId: t,
        groupListingId: m,
        data: {
            can_access_all_channels: _,
            image: f,
            name: s,
            description: l,
            benefits: h,
            priceTier: d,
        },
        analyticsContext: E,
        onBeforeDispatchNewListing: i,
    });
}
function es() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let {
                    guildId: n,
                    editStateId: r,
                    groupListingId: o,
                    onBeforeDispatchNewListing: s,
                    onAfterDispatchNewListing: l,
                } = e,
                c = r,
                u = null != b.Z.getSubscriptionListing(c);
            try {
                if ((t(!0), i(void 0), u))
                    a()(null != o, "groupListingId is null"),
                        await ea({
                            guildId: n,
                            editStateId: c,
                            groupListingId: o,
                        });
                else {
                    let e = await eo({
                        guildId: n,
                        editStateId: c,
                        groupListingId: o,
                        onBeforeDispatchNewListing: s,
                    });
                    (c = e.id), er(r, c), null == l || l(e);
                }
                return (
                    await ei({
                        guildId: n,
                        editStateId: c,
                    }),
                    en(c),
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
function el(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, E._k)(e, n),
        a = (0, T.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, T.n)((e) => e.setEditStateIdsForGroup),
        l = (0, T.n)((e) => e.setListing),
        c = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != a ? a : []),
            ],
            [a, i],
        ),
        u = r.useCallback(() => {
            let e = (0, s.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]);
    return {
        editStateIds: c,
        addNewEditStateId: u,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, s.Z)();
                return (
                    o(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        l(n, () => ({
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
            [t, o, l],
        ),
        removeEditStateId: r.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o],
        ),
    };
}
