e.d(n, {
    B7: function () {
        return tn;
    },
    Ek: function () {
        return x;
    },
    F2: function () {
        return z;
    },
    GM: function () {
        return J;
    },
    GP: function () {
        return G;
    },
    H9: function () {
        return q;
    },
    Lo: function () {
        return X;
    },
    PK: function () {
        return Z;
    },
    R7: function () {
        return k;
    },
    TT: function () {
        return Y;
    },
    UE: function () {
        return w;
    },
    XZ: function () {
        return V;
    },
    Xo: function () {
        return tt;
    },
    _T: function () {
        return R;
    },
    d9: function () {
        return D;
    },
    mR: function () {
        return y;
    },
    p9: function () {
        return U;
    },
    qs: function () {
        return j;
    },
    rU: function () {
        return K;
    }
}),
    e(47120);
var i = e(192379),
    r = e(512722),
    l = e.n(r),
    u = e(392711),
    o = e(772848),
    a = e(866442),
    s = e(731965),
    c = e(442837),
    d = e(80932),
    f = e(749210),
    _ = e(211266),
    E = e(339085),
    p = e(73346),
    g = e(817460),
    S = e(423117),
    m = e(584825),
    C = e(289393),
    I = e(790285),
    T = e(303737),
    h = e(971792),
    v = e(22902),
    N = e(403474),
    A = e(944537),
    O = e(293810),
    P = e(981631),
    L = e(474936);
function b(t, n, e) {
    let r = (0, A.n)((t) => t.setListing),
        l = i.useCallback(
            (i) => {
                r(t, (t) => {
                    var r;
                    let l = null !== (r = null == t ? void 0 : t[n]) && void 0 !== r ? r : e;
                    return Object.assign({}, t, { [n]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, t, n, e]
        ),
        u = (0, A.n)((e) => {
            var i;
            return null === (i = e.listings[t]) || void 0 === i ? void 0 : i[n];
        });
    return [void 0 !== u ? u : e, l];
}
function M(t, n) {
    let e = (0, c.e7)([C.Z], () => C.Z.getSubscriptionListing(t)),
        r = (0, _.Z)(() => n);
    return i.useMemo(() => r(e), [e, r]);
}
function R(t) {
    let n = M(t, (t) => {
        var n;
        return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '';
    });
    return b(t, 'name', n);
}
function y(t) {
    let n = M(t, (t) => {
        var n;
        return null == t ? void 0 : null === (n = t.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return b(t, 'priceTier', n);
}
function Z(t) {
    let n = M(t, (t) => {
        var n;
        return null !== (n = null == t ? void 0 : t.description) && void 0 !== n ? n : '';
    });
    return b(t, 'description', n);
}
function D(t, n) {
    let e = M(t, (t) => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, p._W)(t.application_id, t.image_asset, n);
    });
    return b(t, 'image', e);
}
function U(t, n) {
    let e = (0, h.Z)(n, t);
    return b(
        t,
        'roleIcon',
        i.useMemo(() => {
            var t, n;
            return {
                icon: null !== (t = null == e ? void 0 : e.icon) && void 0 !== t ? t : void 0,
                unicodeEmoji: null !== (n = null == e ? void 0 : e.unicodeEmoji) && void 0 !== n ? n : void 0
            };
        }, [e])
    );
}
function j(t, n) {
    let e = (0, h.Z)(n, t),
        r = (0, A.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e ? void 0 : e.roleColor;
        }),
        l = (0, A.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e ? void 0 : e.roleIcon;
        });
    return i.useMemo(() => {
        let t = { ...(null != e ? e : N.k) };
        if (void 0 !== l) {
            var n, i;
            (t.icon = null !== (n = l.icon) && void 0 !== n ? n : ''), (t.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((t.color = r), (t.colorString = (0, a.Rf)(r))), t;
    }, [e, l, r]);
}
function x(t, n) {
    let e = (0, h.Z)(n, t);
    return b(
        t,
        'roleColor',
        i.useMemo(() => {
            var t;
            return null !== (t = null == e ? void 0 : e.color) && void 0 !== t ? t : P.p6O;
        }, [e])
    );
}
function G(t, n) {
    let e = (0, h.Z)(n, t);
    return b(
        t,
        'channelAccessFormat',
        i.useMemo(() => (null == e ? A.I.SOME_CHANNELS_ACCESS : (0, I.MT)(e) ? A.I.ALL_CHANNELS_ACCESS : A.I.SOME_CHANNELS_ACCESS), [e])
    );
}
let F = [];
function w(t) {
    let n = M(t, (t) => (null == t ? F : t.role_benefits.benefits.filter(g.rC)));
    return b(t, 'channelBenefits', n);
}
let H = [];
function k(t) {
    let n = M(t, (t) => (null == t ? H : t.role_benefits.benefits.filter(g.lL)));
    return b(t, 'intangibleBenefits', n);
}
let B = new Set();
function W(t, n) {
    return 0 === t.length
        ? B
        : new Set(
              t
                  .filter((t) => t.roles.includes(n))
                  .map((t) => {
                      let { id: n } = t;
                      return n;
                  })
          );
}
function V(t, n) {
    let e = (0, h.Z)(n, t),
        r = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(n), [n]);
    return b(
        t,
        'tierEmojiIds',
        i.useMemo(() => (null == e ? B : W(r, e.id)), [r, e])
    );
}
function Y(t) {
    var n;
    let e = (0, m.oC)(t),
        { selectedOption: i } = (0, v.Z)(null !== (n = null == e ? void 0 : e.active_trial) && void 0 !== n ? n : null);
    return b(t, 'trialInterval', null != i ? i : null);
}
function z(t) {
    var n;
    let e = (0, m.oC)(t);
    return b(t, 'trialLimit', null !== (n = null == e ? void 0 : e.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function K(t) {
    return (0, A.n)((n) => void 0 !== n.listings[t]);
}
function X(t) {
    return (0, A.n)((n) => {
        for (let e of t) if (void 0 !== n.listings[e]) return !0;
        return !1;
    });
}
function q(t) {
    let n = M(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
        [e] = b(t, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var t, i, r, l, u;
            return {
                price: null !== (t = null != e ? e : null == n ? void 0 : n.price) && void 0 !== t ? t : 0,
                currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : P.pKx.USD,
                interval: null !== (r = null == n ? void 0 : n.interval) && void 0 !== r ? r : L.rV.MONTH,
                interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
                id: null !== (u = null == n ? void 0 : n.id) && void 0 !== u ? u : ''
            };
        }, [n, e])
    ];
}
function J(t) {
    var n;
    (n = t),
        (0, s.j)(() => {
            A.n.setState((t) => ({
                listings: {
                    ...t.listings,
                    [n]: t.listings.nonexistantEditStateId
                }
            }));
        });
}
async function Q(t) {
    let { guildId: n, editStateId: e } = t,
        i = C.Z.getSubscriptionListing(e);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        o = i.id,
        a = A.n.getState().listings[e];
    l()(null != a, 'edit state does not exist');
    let { roleColor: s, roleIcon: c, trialLimit: _, trialInterval: p, tierEmojiIds: g } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(n, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let m = C.Z.getSubscriptionTrial(o);
    if (
        ((null != _ || null != p || (null != m && null == p)) &&
            (await S.I1(n, o, {
                trial: p,
                max_num_active_trial_users: _
            })),
        void 0 !== g)
    ) {
        let t = W(E.ZP.getGuildEmoji(n), r),
            e = (0, u.difference)([...g], [...t]),
            i = (0, u.difference)([...t], [...g]),
            l = e
                .map((t) => E.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null != t)
                        return (0, d.dv)({
                            guildId: n,
                            emojiId: t.id,
                            roles: [...t.roles, r]
                        });
                }),
            o = i
                .map((t) => E.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null == t) return;
                    let e = t.roles.filter((t) => t !== r);
                    return e.length > 0
                        ? (0, d.dv)({
                              guildId: n,
                              emojiId: t.id,
                              roles: e
                          })
                        : (0, d.RE)(n, t.id);
                });
        await Promise.all([...l, ...o]);
    }
}
async function $(t) {
    let { guildId: n, editStateId: e, groupListingId: i, onBeforeDispatchNewListing: r } = t,
        u = A.n.getState().listings[e];
    l()(null != u, 'edit state does not exist');
    let { name: o, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: _ } = u;
    l()(null != o, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let E = _ === A.I.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await S.uw(n, {})).id), null != s && s.length > 0 && (await (0, T.r4)(n, s));
    let g = [...(null != s ? s : []), ...(null != c ? c : [])],
        m = (0, T.yL)(e, n);
    return S.dA({
        guildId: n,
        groupListingId: p,
        data: {
            can_access_all_channels: E,
            image: f,
            name: o,
            description: a,
            benefits: g,
            priceTier: d
        },
        analyticsContext: m,
        onBeforeDispatchNewListing: r
    });
}
function tt() {
    let [t, n] = i.useState(!1),
        [e, r] = i.useState();
    return {
        loading: t,
        error: e,
        handleCreateOrUpdateFromEditState: i.useCallback(async (t) => {
            let { guildId: e, editStateId: i, groupListingId: o, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: c } = t,
                d = i,
                f = C.Z.getSubscriptionListing(d);
            try {
                if ((n(!0), r(void 0), null != f))
                    l()(null != o, 'groupListingId is null'),
                        await (function (t) {
                            var n;
                            let { guildId: e, editStateId: i, groupListingId: r } = t,
                                o = C.Z.getSubscriptionListing(i);
                            l()(null != o, 'listing doesnt exist');
                            let a = A.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: s, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: _, image: E, channelAccessFormat: p } = a,
                                m = {};
                            if ((s !== o.name && (m.name = s), c !== o.description && (m.description = c), _ !== (null === (n = o.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (m.priceTier = _), null != E && (m.image = E), null != p && (m.can_access_all_channels = p === A.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let t = o.role_benefits.benefits.filter(g.rC),
                                    n = o.role_benefits.benefits.filter(g.lL),
                                    e = [...(null != d ? d : t), ...(null != f ? f : n)];
                                m.benefits = e;
                            }
                            return (0, u.isEmpty)(m)
                                ? o
                                : S.O0({
                                      guildId: e,
                                      groupListingId: r,
                                      listingId: i,
                                      data: m
                                  });
                        })({
                            guildId: e,
                            editStateId: d,
                            groupListingId: o
                        });
                else {
                    var _, E;
                    let t = await $({
                        guildId: e,
                        editStateId: d,
                        groupListingId: o,
                        onBeforeDispatchNewListing: a
                    });
                    (d = t.id),
                        (_ = i),
                        (E = d),
                        (0, s.j)(() => {
                            A.n.setState((t) => ({
                                listings: {
                                    ...t.listings,
                                    [E]: t.listings[_],
                                    [_]: void 0
                                }
                            }));
                        }),
                        null == c || c(t);
                }
                return (
                    await Q({
                        guildId: e,
                        editStateId: d
                    }),
                    J(d),
                    !0
                );
            } catch (t) {
                if (!('getAnyErrorMessage' in t)) throw t;
                r(t);
            } finally {
                n(!1);
            }
        }, [])
    };
}
function tn(t, n) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, m._k)(t, e),
        l = (0, A.n)((t) => t.editStateIdsForGroup[n]),
        u = (0, A.n)((t) => t.setEditStateIdsForGroup),
        a = (0, A.n)((t) => t.setListing),
        s = i.useMemo(
            () => [
                ...r.map((t) => {
                    let { id: n } = t;
                    return n;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        c = i.useCallback(() => {
            let t = (0, o.Z)();
            u(n, (n) => [...(null != n ? n : []), t]);
        }, [n, u]),
        d = i.useCallback(
            (t) => {
                let e = (0, o.Z)();
                return (
                    u(n, (t) => [...(null != t ? t : []), e]),
                    t.listings.forEach((n) => {
                        a(e, () => ({
                            name: n.name,
                            description: n.description,
                            priceTier: n.price_tier,
                            image: n.image,
                            intangibleBenefits: n.additional_perks,
                            channelBenefits: n.channels.map((t) => ({
                                ref_id: t.id,
                                ref_type: O.Qs.CHANNEL,
                                description: t.description,
                                name: t.name,
                                emoji_name: t.emoji_name
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: n.image
                            },
                            roleColor: n.role_color,
                            usedTemplate: t.category
                        }));
                    }),
                    e
                );
            },
            [n, u, a]
        );
    return {
        editStateIds: s,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: i.useCallback(
            (t) => {
                u(n, (n) => (null != n ? n : []).filter((n) => n !== t));
            },
            [n, u]
        )
    };
}
