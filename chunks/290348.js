n.d(e, {
    B7: function () {
        return tt;
    },
    Ek: function () {
        return j;
    },
    F2: function () {
        return z;
    },
    GM: function () {
        return q;
    },
    GP: function () {
        return x;
    },
    H9: function () {
        return X;
    },
    Lo: function () {
        return K;
    },
    PK: function () {
        return y;
    },
    R7: function () {
        return H;
    },
    TT: function () {
        return V;
    },
    UE: function () {
        return G;
    },
    XZ: function () {
        return W;
    },
    Xo: function () {
        return $;
    },
    _T: function () {
        return R;
    },
    d9: function () {
        return Z;
    },
    mR: function () {
        return M;
    },
    p9: function () {
        return U;
    },
    qs: function () {
        return D;
    },
    rU: function () {
        return Y;
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
    _ = n(339085),
    E = n(73346),
    p = n(817460),
    m = n(423117),
    g = n(584825),
    I = n(289393),
    S = n(790285),
    h = n(303737),
    C = n(971792),
    T = n(22902),
    v = n(403474),
    N = n(944537),
    A = n(293810),
    L = n(981631),
    b = n(474936);
function O(t, e, n) {
    let r = (0, N.n)((t) => t.setListing),
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
        o = (0, N.n)((n) => {
            var i;
            return null === (i = n.listings[t]) || void 0 === i ? void 0 : i[e];
        });
    return [void 0 !== o ? o : n, l];
}
function P(t, e) {
    let n = (0, c.e7)([I.Z], () => I.Z.getSubscriptionListing(t));
    return i.useMemo(() => e(n), [n]);
}
function R(t) {
    let e = P(t, (t) => {
        var e;
        return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : '';
    });
    return O(t, 'name', e);
}
function M(t) {
    let e = P(t, (t) => {
        var e;
        return null == t ? void 0 : null === (e = t.subscription_plans[0]) || void 0 === e ? void 0 : e.price;
    });
    return O(t, 'priceTier', e);
}
function y(t) {
    let e = P(t, (t) => {
        var e;
        return null !== (e = null == t ? void 0 : t.description) && void 0 !== e ? e : '';
    });
    return O(t, 'description', e);
}
function Z(t, e) {
    let n = P(t, (t) => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, E._W)(t.application_id, t.image_asset, e);
    });
    return O(t, 'image', n);
}
function U(t, e) {
    let n = (0, C.Z)(e, t);
    return O(
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
function D(t, e) {
    let n = (0, C.Z)(e, t),
        r = (0, N.n)((e) => {
            var n;
            return null === (n = e.listings[t]) || void 0 === n ? void 0 : n.roleColor;
        }),
        l = (0, N.n)((e) => {
            var n;
            return null === (n = e.listings[t]) || void 0 === n ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let t = { ...(null != n ? n : v.k) };
        if (void 0 !== l) {
            var e, i;
            (t.icon = null !== (e = l.icon) && void 0 !== e ? e : ''), (t.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((t.color = r), (t.colorString = (0, a.Rf)(r))), t;
    }, [n, l, r]);
}
function j(t, e) {
    let n = (0, C.Z)(e, t);
    return O(
        t,
        'roleColor',
        i.useMemo(() => {
            var t;
            return null !== (t = null == n ? void 0 : n.color) && void 0 !== t ? t : L.p6O;
        }, [n])
    );
}
function x(t, e) {
    let n = (0, C.Z)(e, t);
    return O(
        t,
        'channelAccessFormat',
        i.useMemo(() => (null == n ? N.I.SOME_CHANNELS_ACCESS : (0, S.MT)(n) ? N.I.ALL_CHANNELS_ACCESS : N.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let F = [];
function G(t) {
    let e = P(t, (t) => (null == t ? F : t.role_benefits.benefits.filter(p.rC)));
    return O(t, 'channelBenefits', e);
}
let w = [];
function H(t) {
    let e = P(t, (t) => (null == t ? w : t.role_benefits.benefits.filter(p.lL)));
    return O(t, 'intangibleBenefits', e);
}
let k = new Set();
function B(t, e) {
    return 0 === t.length
        ? k
        : new Set(
              t
                  .filter((t) => t.roles.includes(e))
                  .map((t) => {
                      let { id: e } = t;
                      return e;
                  })
          );
}
function W(t, e) {
    let n = (0, C.Z)(e, t),
        r = (0, c.Wu)([_.ZP], () => _.ZP.getGuildEmoji(e), [e]);
    return O(
        t,
        'tierEmojiIds',
        i.useMemo(() => (null == n ? k : B(r, n.id)), [r, n])
    );
}
function V(t) {
    var e;
    let n = (0, g.oC)(t),
        { selectedOption: i } = (0, T.Z)(null !== (e = null == n ? void 0 : n.active_trial) && void 0 !== e ? e : null);
    return O(t, 'trialInterval', null != i ? i : null);
}
function z(t) {
    var e;
    let n = (0, g.oC)(t);
    return O(t, 'trialLimit', null !== (e = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== e ? e : null);
}
function Y(t) {
    return (0, N.n)((e) => void 0 !== e.listings[t]);
}
function K(t) {
    return (0, N.n)((e) => {
        for (let n of t) if (void 0 !== e.listings[n]) return !0;
        return !1;
    });
}
function X(t) {
    let e = P(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
        [n] = O(t, 'priceTier', void 0);
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
function q(t) {
    var e;
    (e = t),
        (0, s.j)(() => {
            N.n.setState((t) => ({
                listings: {
                    ...t.listings,
                    [e]: t.listings.nonexistantEditStateId
                }
            }));
        });
}
async function J(t) {
    let { guildId: e, editStateId: n } = t,
        i = I.Z.getSubscriptionListing(n);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        u = i.id,
        a = N.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: s, roleIcon: c, trialLimit: E, trialInterval: p, tierEmojiIds: g } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(e, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let S = I.Z.getSubscriptionTrial(u);
    if (
        ((null != E || null != p || (null != S && null == p)) &&
            (await m.I1(e, u, {
                trial: p,
                max_num_active_trial_users: E
            })),
        void 0 !== g)
    ) {
        let t = B(_.ZP.getGuildEmoji(e), r),
            n = (0, o.difference)([...g], [...t]),
            i = (0, o.difference)([...t], [...g]),
            l = n
                .map((t) => _.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null != t)
                        return (0, d.dv)({
                            guildId: e,
                            emojiId: t.id,
                            roles: [...t.roles, r]
                        });
                }),
            u = i
                .map((t) => _.ZP.getCustomEmojiById(t))
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
async function Q(t) {
    let { guildId: e, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: r } = t,
        o = N.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: _ } = o;
    l()(null != u, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let E = _ === N.I.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await m.uw(e, {})).id), null != s && s.length > 0 && (await (0, h.r4)(e, s));
    let g = [...(null != s ? s : []), ...(null != c ? c : [])],
        I = (0, h.yL)(n, e);
    return m.dA({
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
        analyticsContext: I,
        onBeforeDispatchNewListing: r
    });
}
function $() {
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
                            let a = N.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: s, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: _, image: E, channelAccessFormat: g } = a,
                                S = {};
                            if ((s !== u.name && (S.name = s), c !== u.description && (S.description = c), _ !== (null === (e = u.subscription_plans[0]) || void 0 === e ? void 0 : e.price) && (S.priceTier = _), null != E && (S.image = E), null != g && (S.can_access_all_channels = g === N.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let t = u.role_benefits.benefits.filter(p.rC),
                                    e = u.role_benefits.benefits.filter(p.lL),
                                    n = [...(null != d ? d : t), ...(null != f ? f : e)];
                                S.benefits = n;
                            }
                            return (0, o.isEmpty)(S)
                                ? u
                                : m.O0({
                                      guildId: n,
                                      groupListingId: r,
                                      listingId: i,
                                      data: S
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var _, E;
                    let t = await Q({
                        guildId: n,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: a
                    });
                    (d = t.id),
                        (_ = i),
                        (E = d),
                        (0, s.j)(() => {
                            N.n.setState((t) => ({
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
                    await J({
                        guildId: n,
                        editStateId: d
                    }),
                    q(d),
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
function tt(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, g._k)(t, n),
        l = (0, N.n)((t) => t.editStateIdsForGroup[e]),
        o = (0, N.n)((t) => t.setEditStateIdsForGroup),
        a = (0, N.n)((t) => t.setListing),
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
                                ref_type: A.Qs.CHANNEL,
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
