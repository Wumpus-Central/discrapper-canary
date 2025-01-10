n.d(e, {
    B7: function () {
        return te;
    },
    Ek: function () {
        return j;
    },
    F2: function () {
        return Y;
    },
    GM: function () {
        return J;
    },
    GP: function () {
        return x;
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
        return z;
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
        return U;
    },
    mR: function () {
        return y;
    },
    p9: function () {
        return D;
    },
    qs: function () {
        return F;
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
    u = n(772848),
    a = n(866442),
    s = n(731965),
    c = n(442837),
    d = n(80932),
    f = n(749210),
    _ = n(211266),
    E = n(339085),
    p = n(73346),
    g = n(817460),
    S = n(423117),
    m = n(584825),
    I = n(289393),
    h = n(790285),
    C = n(303737),
    T = n(971792),
    v = n(22902),
    N = n(403474),
    A = n(944537),
    O = n(293810),
    L = n(981631),
    b = n(474936);
function P(t, e, n) {
    let r = (0, A.n)((t) => t.setListing),
        l = i.useCallback(
            (i) => {
                r(t, (t) => {
                    var r;
                    let l = null !== (r = null == t ? void 0 : t[e]) && void 0 !== r ? r : n;
                    return Object.assign({}, t, { [e]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, t, e, n]
        ),
        o = (0, A.n)((n) => {
            var i;
            return null === (i = n.listings[t]) || void 0 === i ? void 0 : i[e];
        });
    return [void 0 !== o ? o : n, l];
}
function M(t, e) {
    let n = (0, c.e7)([I.Z], () => I.Z.getSubscriptionListing(t)),
        r = (0, _.Z)(() => e);
    return i.useMemo(() => r(n), [n, r]);
}
function R(t) {
    let e = M(t, (t) => {
        var e;
        return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : '';
    });
    return P(t, 'name', e);
}
function y(t) {
    let e = M(t, (t) => {
        var e;
        return null == t ? void 0 : null === (e = t.subscription_plans[0]) || void 0 === e ? void 0 : e.price;
    });
    return P(t, 'priceTier', e);
}
function Z(t) {
    let e = M(t, (t) => {
        var e;
        return null !== (e = null == t ? void 0 : t.description) && void 0 !== e ? e : '';
    });
    return P(t, 'description', e);
}
function U(t, e) {
    let n = M(t, (t) => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, p._W)(t.application_id, t.image_asset, e);
    });
    return P(t, 'image', n);
}
function D(t, e) {
    let n = (0, T.Z)(e, t);
    return P(
        t,
        'roleIcon',
        i.useMemo(() => {
            var t, e;
            return {
                icon: null !== (t = null == n ? void 0 : n.icon) && void 0 !== t ? t : void 0,
                unicodeEmoji: null !== (e = null == n ? void 0 : n.unicodeEmoji) && void 0 !== e ? e : void 0
            };
        }, [n])
    );
}
function F(t, e) {
    let n = (0, T.Z)(e, t),
        r = (0, A.n)((e) => {
            var n;
            return null === (n = e.listings[t]) || void 0 === n ? void 0 : n.roleColor;
        }),
        l = (0, A.n)((e) => {
            var n;
            return null === (n = e.listings[t]) || void 0 === n ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let t = { ...(null != n ? n : N.k) };
        if (void 0 !== l) {
            var e, i;
            (t.icon = null !== (e = l.icon) && void 0 !== e ? e : ''), (t.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((t.color = r), (t.colorString = (0, a.Rf)(r))), t;
    }, [n, l, r]);
}
function j(t, e) {
    let n = (0, T.Z)(e, t);
    return P(
        t,
        'roleColor',
        i.useMemo(() => {
            var t;
            return null !== (t = null == n ? void 0 : n.color) && void 0 !== t ? t : L.p6O;
        }, [n])
    );
}
function x(t, e) {
    let n = (0, T.Z)(e, t);
    return P(
        t,
        'channelAccessFormat',
        i.useMemo(() => (null == n ? A.I.SOME_CHANNELS_ACCESS : (0, h.MT)(n) ? A.I.ALL_CHANNELS_ACCESS : A.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let G = [];
function w(t) {
    let e = M(t, (t) => (null == t ? G : t.role_benefits.benefits.filter(g.rC)));
    return P(t, 'channelBenefits', e);
}
let H = [];
function k(t) {
    let e = M(t, (t) => (null == t ? H : t.role_benefits.benefits.filter(g.lL)));
    return P(t, 'intangibleBenefits', e);
}
let B = new Set();
function W(t, e) {
    return 0 === t.length
        ? B
        : new Set(
              t
                  .filter((t) => t.roles.includes(e))
                  .map((t) => {
                      let { id: e } = t;
                      return e;
                  })
          );
}
function V(t, e) {
    let n = (0, T.Z)(e, t),
        r = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(e), [e]);
    return P(
        t,
        'tierEmojiIds',
        i.useMemo(() => (null == n ? B : W(r, n.id)), [r, n])
    );
}
function z(t) {
    var e;
    let n = (0, m.oC)(t),
        { selectedOption: i } = (0, v.Z)(null !== (e = null == n ? void 0 : n.active_trial) && void 0 !== e ? e : null);
    return P(t, 'trialInterval', null != i ? i : null);
}
function Y(t) {
    var e;
    let n = (0, m.oC)(t);
    return P(t, 'trialLimit', null !== (e = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== e ? e : null);
}
function K(t) {
    return (0, A.n)((e) => void 0 !== e.listings[t]);
}
function X(t) {
    return (0, A.n)((e) => {
        for (let n of t) if (void 0 !== e.listings[n]) return !0;
        return !1;
    });
}
function q(t) {
    let e = M(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
        [n] = P(t, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var t, i, r, l, o;
            return {
                price: null !== (t = null != n ? n : null == e ? void 0 : e.price) && void 0 !== t ? t : 0,
                currency: null !== (i = null == e ? void 0 : e.currency) && void 0 !== i ? i : L.pKx.USD,
                interval: null !== (r = null == e ? void 0 : e.interval) && void 0 !== r ? r : b.rV.MONTH,
                interval_count: null !== (l = null == e ? void 0 : e.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == e ? void 0 : e.id) && void 0 !== o ? o : ''
            };
        }, [e, n])
    ];
}
function J(t) {
    var e;
    (e = t),
        (0, s.j)(() => {
            A.n.setState((t) => ({
                listings: {
                    ...t.listings,
                    [e]: t.listings.nonexistantEditStateId
                }
            }));
        });
}
async function Q(t) {
    let { guildId: e, editStateId: n } = t,
        i = I.Z.getSubscriptionListing(n);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        u = i.id,
        a = A.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: s, roleIcon: c, trialLimit: _, trialInterval: p, tierEmojiIds: g } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(e, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let m = I.Z.getSubscriptionTrial(u);
    if (
        ((null != _ || null != p || (null != m && null == p)) &&
            (await S.I1(e, u, {
                trial: p,
                max_num_active_trial_users: _
            })),
        void 0 !== g)
    ) {
        let t = W(E.ZP.getGuildEmoji(e), r),
            n = (0, o.difference)([...g], [...t]),
            i = (0, o.difference)([...t], [...g]),
            l = n
                .map((t) => E.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null != t)
                        return (0, d.dv)({
                            guildId: e,
                            emojiId: t.id,
                            roles: [...t.roles, r]
                        });
                }),
            u = i
                .map((t) => E.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null == t) return;
                    let n = t.roles.filter((t) => t !== r);
                    return n.length > 0
                        ? (0, d.dv)({
                              guildId: e,
                              emojiId: t.id,
                              roles: n
                          })
                        : (0, d.RE)(e, t.id);
                });
        await Promise.all([...l, ...u]);
    }
}
async function $(t) {
    let { guildId: e, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: r } = t,
        o = A.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: _ } = o;
    l()(null != u, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let E = _ === A.I.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await S.uw(e, {})).id), null != s && s.length > 0 && (await (0, C.r4)(e, s));
    let g = [...(null != s ? s : []), ...(null != c ? c : [])],
        m = (0, C.yL)(n, e);
    return S.dA({
        guildId: e,
        groupListingId: p,
        data: {
            can_access_all_channels: E,
            image: f,
            name: u,
            description: a,
            benefits: g,
            priceTier: d
        },
        analyticsContext: m,
        onBeforeDispatchNewListing: r
    });
}
function tt() {
    let [t, e] = i.useState(!1),
        [n, r] = i.useState();
    return {
        loading: t,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (t) => {
            let { guildId: n, editStateId: i, groupListingId: u, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: c } = t,
                d = i,
                f = I.Z.getSubscriptionListing(d);
            try {
                if ((e(!0), r(void 0), null != f))
                    l()(null != u, 'groupListingId is null'),
                        await (function (t) {
                            var e;
                            let { guildId: n, editStateId: i, groupListingId: r } = t,
                                u = I.Z.getSubscriptionListing(i);
                            l()(null != u, 'listing doesnt exist');
                            let a = A.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: s, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: _, image: E, channelAccessFormat: p } = a,
                                m = {};
                            if ((s !== u.name && (m.name = s), c !== u.description && (m.description = c), _ !== (null === (e = u.subscription_plans[0]) || void 0 === e ? void 0 : e.price) && (m.priceTier = _), null != E && (m.image = E), null != p && (m.can_access_all_channels = p === A.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let t = u.role_benefits.benefits.filter(g.rC),
                                    e = u.role_benefits.benefits.filter(g.lL),
                                    n = [...(null != d ? d : t), ...(null != f ? f : e)];
                                m.benefits = n;
                            }
                            return (0, o.isEmpty)(m)
                                ? u
                                : S.O0({
                                      guildId: n,
                                      groupListingId: r,
                                      listingId: i,
                                      data: m
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var _, E;
                    let t = await $({
                        guildId: n,
                        editStateId: d,
                        groupListingId: u,
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
                        guildId: n,
                        editStateId: d
                    }),
                    J(d),
                    !0
                );
            } catch (t) {
                if (!('getAnyErrorMessage' in t)) throw t;
                r(t);
            } finally {
                e(!1);
            }
        }, [])
    };
}
function te(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, m._k)(t, n),
        l = (0, A.n)((t) => t.editStateIdsForGroup[e]),
        o = (0, A.n)((t) => t.setEditStateIdsForGroup),
        a = (0, A.n)((t) => t.setListing),
        s = i.useMemo(
            () => [
                ...r.map((t) => {
                    let { id: e } = t;
                    return e;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        c = i.useCallback(() => {
            let t = (0, u.Z)();
            o(e, (e) => [...(null != e ? e : []), t]);
        }, [e, o]),
        d = i.useCallback(
            (t) => {
                let n = (0, u.Z)();
                return (
                    o(e, (t) => [...(null != t ? t : []), n]),
                    t.listings.forEach((e) => {
                        a(n, () => ({
                            name: e.name,
                            description: e.description,
                            priceTier: e.price_tier,
                            image: e.image,
                            intangibleBenefits: e.additional_perks,
                            channelBenefits: e.channels.map((t) => ({
                                ref_id: t.id,
                                ref_type: O.Qs.CHANNEL,
                                description: t.description,
                                name: t.name,
                                emoji_name: t.emoji_name
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: e.image
                            },
                            roleColor: e.role_color,
                            usedTemplate: t.category
                        }));
                    }),
                    n
                );
            },
            [e, o, a]
        );
    return {
        editStateIds: s,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: i.useCallback(
            (t) => {
                o(e, (e) => (null != e ? e : []).filter((e) => e !== t));
            },
            [e, o]
        )
    };
}
