n.d(t, {
    B7: function () {
        return et;
    },
    Ek: function () {
        return G;
    },
    F2: function () {
        return Y;
    },
    GM: function () {
        return J;
    },
    GP: function () {
        return F;
    },
    H9: function () {
        return X;
    },
    Lo: function () {
        return q;
    },
    PK: function () {
        return w;
    },
    R7: function () {
        return B;
    },
    TT: function () {
        return W;
    },
    UE: function () {
        return j;
    },
    XZ: function () {
        return z;
    },
    Xo: function () {
        return ee;
    },
    _T: function () {
        return R;
    },
    d9: function () {
        return M;
    },
    mR: function () {
        return Z;
    },
    p9: function () {
        return D;
    },
    qs: function () {
        return U;
    },
    rU: function () {
        return K;
    }
}),
    n(47120);
var i = n(192379),
    r = n(512722),
    l = n.n(r),
    o = n(392711),
    s = n(772848),
    a = n(866442),
    u = n(731965),
    d = n(442837),
    c = n(80932),
    h = n(749210),
    f = n(211266),
    g = n(339085),
    C = n(73346),
    p = n(817460),
    E = n(423117),
    _ = n(584825),
    I = n(289393),
    S = n(790285),
    v = n(303737),
    m = n(971792),
    T = n(22902),
    N = n(403474),
    A = n(944537),
    y = n(293810),
    O = n(981631),
    L = n(474936);
function P(e, t, n) {
    let r = (0, A.n)((e) => e.setListing),
        l = i.useCallback(
            (i) => {
                r(e, (e) => {
                    var r;
                    let l = null !== (r = null == e ? void 0 : e[t]) && void 0 !== r ? r : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, e, t, n]
        ),
        o = (0, A.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
        });
    return [void 0 !== o ? o : n, l];
}
function b(e, t) {
    let n = (0, d.e7)([I.Z], () => I.Z.getSubscriptionListing(e)),
        r = (0, f.Z)(() => t);
    return i.useMemo(() => r(n), [n, r]);
}
function R(e) {
    let t = b(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '';
    });
    return P(e, 'name', t);
}
function Z(e) {
    let t = b(e, (e) => {
        var t;
        return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
    });
    return P(e, 'priceTier', t);
}
function w(e) {
    let t = b(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : '';
    });
    return P(e, 'description', t);
}
function M(e, t) {
    let n = b(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, C._W)(e.application_id, e.image_asset, t);
    });
    return P(e, 'image', n);
}
function D(e, t) {
    let n = (0, m.Z)(t, e);
    return P(
        e,
        'roleIcon',
        i.useMemo(() => {
            var e, t;
            return {
                icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
                unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
            };
        }, [n])
    );
}
function U(e, t) {
    let n = (0, m.Z)(t, e),
        r = (0, A.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor;
        }),
        l = (0, A.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let e = { ...(null != n ? n : N.k) };
        if (void 0 !== l) {
            var t, i;
            (e.icon = null !== (t = l.icon) && void 0 !== t ? t : ''), (e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e;
    }, [n, l, r]);
}
function G(e, t) {
    let n = (0, m.Z)(t, e);
    return P(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : O.p6O;
        }, [n])
    );
}
function F(e, t) {
    let n = (0, m.Z)(t, e);
    return P(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == n ? A.I.SOME_CHANNELS_ACCESS : (0, S.MT)(n) ? A.I.ALL_CHANNELS_ACCESS : A.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let x = [];
function j(e) {
    let t = b(e, (e) => (null == e ? x : e.role_benefits.benefits.filter(p.rC)));
    return P(e, 'channelBenefits', t);
}
let H = [];
function B(e) {
    let t = b(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(p.lL)));
    return P(e, 'intangibleBenefits', t);
}
let V = new Set();
function k(e, t) {
    return 0 === e.length
        ? V
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
    let n = (0, m.Z)(t, e),
        r = (0, d.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
    return P(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == n ? V : k(r, n.id)), [r, n])
    );
}
function W(e) {
    var t;
    let n = (0, _.oC)(e),
        { selectedOption: i } = (0, T.Z)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
    return P(e, 'trialInterval', null != i ? i : null);
}
function Y(e) {
    var t;
    let n = (0, _.oC)(e);
    return P(e, 'trialLimit', null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null);
}
function K(e) {
    return (0, A.n)((t) => void 0 !== t.listings[e]);
}
function q(e) {
    return (0, A.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function X(e) {
    let t = b(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = P(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, r, l, o;
            return {
                price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == t ? void 0 : t.currency) && void 0 !== i ? i : O.pKx.USD,
                interval: null !== (r = null == t ? void 0 : t.interval) && void 0 !== r ? r : L.rV.MONTH,
                interval_count: null !== (l = null == t ? void 0 : t.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == t ? void 0 : t.id) && void 0 !== o ? o : ''
            };
        }, [t, n])
    ];
}
function J(e) {
    var t;
    (t = e),
        (0, u.j)(() => {
            A.n.setState((e) => ({
                listings: {
                    ...e.listings,
                    [t]: e.listings.nonexistantEditStateId
                }
            }));
        });
}
async function Q(e) {
    let { guildId: t, editStateId: n } = e,
        i = I.Z.getSubscriptionListing(n);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        s = i.id,
        a = A.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: u, roleIcon: d, trialLimit: f, trialInterval: C, tierEmojiIds: p } = a;
    (void 0 !== u || void 0 !== d) &&
        (await h.Z.updateRole(t, r, {
            color: u,
            icon: null == d ? void 0 : d.icon,
            unicodeEmoji: null == d ? void 0 : d.unicodeEmoji
        }));
    let _ = I.Z.getSubscriptionTrial(s);
    if (
        ((null != f || null != C || (null != _ && null == C)) &&
            (await E.I1(t, s, {
                trial: C,
                max_num_active_trial_users: f
            })),
        void 0 !== p)
    ) {
        let e = k(g.ZP.getGuildEmoji(t), r),
            n = (0, o.difference)([...p], [...e]),
            i = (0, o.difference)([...e], [...p]),
            l = n
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, c.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, r]
                        });
                }),
            s = i
                .map((e) => g.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== r);
                    return n.length > 0
                        ? (0, c.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n
                          })
                        : (0, c.RE)(t, e.id);
                });
        await Promise.all([...l, ...s]);
    }
}
async function $(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: r } = e,
        o = A.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: s, description: a, channelBenefits: u, intangibleBenefits: d, priceTier: c, image: h, channelAccessFormat: f } = o;
    l()(null != s, 'no name provided'), l()(null != a, 'no description provided'), l()(null != c, 'no priceTier provided'), l()(null != h, 'no image provided');
    let g = f === A.I.ALL_CHANNELS_ACCESS,
        C = i;
    null == C && (C = (await E.uw(t, {})).id), null != u && u.length > 0 && (await (0, v.r4)(t, u));
    let p = [...(null != u ? u : []), ...(null != d ? d : [])],
        _ = (0, v.yL)(n, t);
    return E.dA({
        guildId: t,
        groupListingId: C,
        data: {
            can_access_all_channels: g,
            image: h,
            name: s,
            description: a,
            benefits: p,
            priceTier: c
        },
        analyticsContext: _,
        onBeforeDispatchNewListing: r
    });
}
function ee() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let { guildId: n, editStateId: i, groupListingId: s, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: d } = e,
                c = i,
                h = I.Z.getSubscriptionListing(c);
            try {
                if ((t(!0), r(void 0), null != h))
                    l()(null != s, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: i, groupListingId: r } = e,
                                s = I.Z.getSubscriptionListing(i);
                            l()(null != s, 'listing doesnt exist');
                            let a = A.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: u, description: d, channelBenefits: c, intangibleBenefits: h, priceTier: f, image: g, channelAccessFormat: C } = a,
                                _ = {};
                            if ((u !== s.name && (_.name = u), d !== s.description && (_.description = d), f !== (null === (t = s.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (_.priceTier = f), null != g && (_.image = g), null != C && (_.can_access_all_channels = C === A.I.ALL_CHANNELS_ACCESS), null != c || null != h)) {
                                let e = s.role_benefits.benefits.filter(p.rC),
                                    t = s.role_benefits.benefits.filter(p.lL),
                                    n = [...(null != c ? c : e), ...(null != h ? h : t)];
                                _.benefits = n;
                            }
                            return (0, o.isEmpty)(_)
                                ? s
                                : E.O0({
                                      guildId: n,
                                      groupListingId: r,
                                      listingId: i,
                                      data: _
                                  });
                        })({
                            guildId: n,
                            editStateId: c,
                            groupListingId: s
                        });
                else {
                    var f, g;
                    let e = await $({
                        guildId: n,
                        editStateId: c,
                        groupListingId: s,
                        onBeforeDispatchNewListing: a
                    });
                    (c = e.id),
                        (f = i),
                        (g = c),
                        (0, u.j)(() => {
                            A.n.setState((e) => ({
                                listings: {
                                    ...e.listings,
                                    [g]: e.listings[f],
                                    [f]: void 0
                                }
                            }));
                        }),
                        null == d || d(e);
                }
                return (
                    await Q({
                        guildId: n,
                        editStateId: c
                    }),
                    J(c),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                r(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function et(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, _._k)(e, n),
        l = (0, A.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, A.n)((e) => e.setEditStateIdsForGroup),
        a = (0, A.n)((e) => e.setListing),
        u = i.useMemo(
            () => [
                ...r.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        d = i.useCallback(() => {
            let e = (0, s.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]),
        c = i.useCallback(
            (e) => {
                let n = (0, s.Z)();
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
                                ref_type: y.Qs.CHANNEL,
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
        );
    return {
        editStateIds: u,
        addNewEditStateId: d,
        addNewEditStateFromTemplate: c,
        removeEditStateId: i.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o]
        )
    };
}
