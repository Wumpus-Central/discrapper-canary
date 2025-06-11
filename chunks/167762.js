n.d(t, {
    Or: () => en,
    r1: () => et,
    sG: () => B
}),
    n(388685),
    n(539854),
    n(642613);
var i,
    r = n(255367),
    l = n(73800),
    s = n(392711),
    a = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(278323),
    d = n(493683),
    p = n(239091),
    f = n(194359),
    g = n(434650),
    N = n(549879),
    O = n(724757),
    h = n(620662),
    m = n(420660),
    E = n(326255),
    S = n(956221),
    y = n(771173),
    I = n(297781),
    b = n(82295),
    _ = n(554300),
    v = n(558602),
    j = n(567409),
    C = n(373662),
    P = n(850020),
    T = n(886118),
    Z = n(301801),
    A = n(752048),
    w = n(518950),
    G = n(670188),
    k = n(199902),
    R = n(158776),
    U = n(699516),
    D = n(885110),
    x = n(594174),
    F = n(979651),
    M = n(823379),
    L = n(151459),
    q = n(981631),
    V = n(388032),
    Q = n(288779);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function W(e, t) {
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
function Y(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let H = c.EFr.SIZE_32,
    J = {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    K = [I.OV, I.wO, I.f, I.v1, I.pQ];
var B = (((i = {}).USER_CONTEXT_MENU = 'user_context_menu'), (i.OPEN_DIRECT_MESSAGE = 'open_direct_message'), (i.SEND_FRIEND_REQUEST = 'send_friend_request'), (i.SEND_ACTIVITY_INVITE = 'send_activity_invite'), (i.ASK_TO_JOIN = 'ask_to_join'), (i.DECLINE_FRIEND_REQUEST = 'decline_friend_request'), (i.ACCEPT_FRIEND_REQUEST = 'accept_friend_request'), (i.CANCEL_FRIEND_REQUEST = 'cancel_friend_request'), (i.OPEN_FRIEND_MODAL = 'open_friend_modal'), (i.OPEN_SETTINGS_MODAL = 'open_settings_modal'), (i.SEARCH_FRIENDS = 'search_friends'), i);
let X = l.memo((e) => {
    let { user: t, activities: i = [], gameProfileEntry: s, index: O, closeParentPopout: b, isSuggestion: j, relationshipType: T, appContext: Z, nickname: A, onAction: U, onFriendVisible: x } = e,
        {
            avatarDecorationSrc: F,
            avatarSrc: M,
            eventHandlers: L
        } = (0, w.Z)({
            user: t,
            size: H,
            animateOnHover: !0,
            guildId: null
        }),
        Y = (0, a.JA)(''.concat(O)),
        [J, B] = l.useState(!1),
        [X, $] = l.useState({}),
        ee = t.id,
        et = i.filter((e) => e.type === q.IIU.PLAYING && (0, h.Z)(e, q.xjy.JOIN)),
        en = (0, o.Wu)([D.Z], () => D.Z.getActivities().filter((e) => e.type === q.IIU.PLAYING && (0, h.Z)(e, q.xjy.JOIN))),
        { voiceChannel: ei } = (0, S.Z)({ userId: t.id }),
        er = (0, P.K)({ user: t }),
        {
            status: el,
            applicationStream: es,
            isMobile: ea,
            newStatus: eo
        } = (0, o.cj)(
            [R.Z, k.Z],
            () => {
                let e = R.Z.getStatus(t.id),
                    n = k.Z.getAnyStreamForUser(t.id),
                    r = R.Z.isMobileOnline(t.id),
                    l = (0, m.Z)(i) ? q.Skl.STREAMING : e;
                return {
                    status: e,
                    applicationStream: n,
                    isMobile: r,
                    newStatus: l
                };
            },
            [t.id, i]
        ),
        ec = en.length > 0,
        eu = l.useCallback(
            (e) => {
                null == x || x(ee, e, ec);
            },
            [x, ee, ec]
        ),
        ed = (0, g.O)(eu),
        ep = l.useCallback(() => {
            B(!0);
        }, []),
        ef = l.useCallback(() => {
            B(!1);
        }, []),
        eg = l.useCallback(() => {
            if (null != s) {
                let e = s.traits,
                    t = W(z({}, s), { traits: e.slice(0, 3) });
                return (0, r.jsx)(I.Gk, {
                    location: I.Gt.FRIENDS_POPOUT,
                    className: Q.badgesContainer,
                    children: K.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                });
            }
            if (
                !(0, E.Z)({
                    activities: i,
                    status: el,
                    applicationStream: es,
                    voiceChannel: ei
                })
            )
                return null;
            let e = !(0, v.Z)({
                activity:
                    null == i
                        ? void 0
                        : i.find((e) => {
                              let { type: t } = e;
                              return t === q.IIU.CUSTOM_STATUS;
                          }),
                user: t
            });
            return (0, r.jsx)(y.Z, {
                location: 'FriendsPopout',
                user: t,
                activities: i,
                applicationStream: es,
                voiceChannel: ei,
                animateEmoji: !1,
                hideEmoji: e,
                hasQuest: !1
            });
        }, [t, i, el, es, ei, s]),
        eN = l.useCallback(
            (e) => {
                null == U || U('user_context_menu', t.id),
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                W(z({}, n), {
                                    user: t,
                                    appContext: Z
                                })
                            );
                    });
            },
            [t, Z, U]
        ),
        eO = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == U || U('open_direct_message', t.id), (0, N.i)(Z, !0), d.Z.openPrivateChannel({ recipientIds: t.id }), null != b && b();
            },
            [t.id, b, Z, U]
        ),
        eh = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == U || U('send_friend_request', t.id),
                    f.Z.addRelationship({
                        userId: t.id,
                        context: { location: 'friends-popout' }
                    });
            },
            [t.id, U]
        ),
        em = l.useCallback(
            async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !X[n.application_id]))
                    try {
                        $((e) => W(z({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: q.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: q.Sbl.FRIENDS_POPOUT
                            }),
                            null == U || U('send_activity_invite', t.id),
                            $((e) => W(z({}, e), { [n.application_id]: !1 }));
                    } finally {
                        $((e) => W(z({}, e), { [n.application_id]: !1 }));
                    }
            },
            [U, X, t.id]
        ),
        eE = l.useCallback(
            async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !X[n.application_id]))
                    try {
                        $((e) => W(z({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: q.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: q.Sbl.FRIENDS_POPOUT
                            }),
                            null == U || U('ask_to_join', t.id),
                            $((e) => W(z({}, e), { [n.application_id]: !1 }));
                    } finally {
                        $((e) => W(z({}, e), { [n.application_id]: !1 }));
                    }
            },
            [U, X, t.id]
        ),
        eS = () =>
            T === q.OGo.PENDING_INCOMING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(C.sF, {
                              label: V.intl.string(V.t.MMlhsr),
                              icon: c.dz2,
                              onClick: (e) => {
                                  e.preventDefault(),
                                      e.stopPropagation(),
                                      f.Z.addRelationship({
                                          userId: t.id,
                                          context: { location: 'friends-popout' }
                                      }),
                                      null == U || U('accept_friend_request', t.id);
                              }
                          }),
                          (0, r.jsx)(C.sF, {
                              label: V.intl.string(V.t.ytCpKi),
                              icon: c.Dio,
                              onClick: (e) => {
                                  e.preventDefault(), e.stopPropagation(), f.Z.removeRelationship(t.id, { location: 'friends-popout' }), null == U || U('decline_friend_request', t.id);
                              }
                          })
                      ]
                  })
                : T === q.OGo.PENDING_OUTGOING
                  ? (0, r.jsx)(C.sF, {
                        label: V.intl.string(V.t['bTfA//']),
                        icon: c.iHX,
                        onClick: (e) => {
                            e.preventDefault(), e.stopPropagation(), f.Z.cancelFriendRequest(t.id, { location: 'friends-popout' }), null == U || U('cancel_friend_request', t.id);
                        }
                    })
                  : j
                    ? (0, r.jsx)(C.sF, {
                          label: V.intl.string(V.t.w5uwoK),
                          icon: c.oLu,
                          onClick: eh
                      })
                    : null,
        ey = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    et.map((e) =>
                        (0, r.jsx)(
                            C.sF,
                            {
                                label: X[e.application_id] ? V.intl.string(V.t['8BEiNj']) : V.intl.string(V.t.OKsSCQ),
                                icon: X[e.application_id] ? c.dz2 : c.V9,
                                onClick: (t) => eE(t, e)
                            },
                            e.application_id
                        )
                    ),
                    en.map((e) => {
                        var n;
                        return (0, r.jsx)(
                            C.sF,
                            {
                                label: X[e.application_id]
                                    ? V.intl.string(V.t['8BEiNj'])
                                    : V.intl.formatToPlainString(V.t['KHLo+P'], {
                                          channel: null != (n = t.globalName) ? n : t.username,
                                          game: e.name
                                      }),
                                icon: X[e.application_id] ? c.dz2 : c.ejJ,
                                onClick: (t) => em(t, e)
                            },
                            e.application_id
                        );
                    })
                ]
            });
    return (0, r.jsx)(G.Z, {
        targetElementRef: ed,
        user: t,
        position: 'left',
        spacing: 16,
        children: (e, n) => {
            var i;
            let { isShown: l } = n;
            return (0, r.jsxs)('div', {
                className: Q.row,
                ref: ed,
                children: [
                    (0, r.jsx)(
                        _.Z,
                        z(
                            {
                                innerClassName: Q.rowInner,
                                onContextMenu: eN,
                                onMouseEnter: ep,
                                onMouseLeave: ef,
                                avatar: (0, r.jsx)(
                                    c.qEK,
                                    W(z({}, L), {
                                        size: H,
                                        src: M,
                                        isMobile: ea,
                                        isTyping: !1,
                                        status: eo,
                                        className: Q.avatar,
                                        'aria-label': t.username,
                                        statusTooltip: !0,
                                        avatarDecoration: F
                                    })
                                ),
                                name: (0, r.jsx)('span', {
                                    className: Q.username,
                                    children: null != (i = null != A ? A : t.globalName) ? i : t.username
                                }),
                                subText: eg(),
                                selected: l,
                                nameplate: er,
                                hovered: J
                            },
                            e,
                            Y
                        )
                    ),
                    (0, r.jsxs)(C.ZP, {
                        className: Q.hoverBar,
                        children: [
                            eS(),
                            ey(),
                            T !== q.OGo.PENDING_INCOMING &&
                                T !== q.OGo.PENDING_OUTGOING &&
                                (0, r.jsx)(C.sF, {
                                    label: V.intl.string(V.t['g33r/P']),
                                    icon: c.kBi,
                                    onClick: eO
                                }),
                            (0, r.jsx)(C.sF, {
                                label: V.intl.string(V.t.UKOtz8),
                                icon: c.xhG,
                                onClick: eN
                            })
                        ]
                    })
                ]
            });
        }
    });
});
X.displayName = 'FriendRow';
let $ = {
    searchType: T.S.FUZZY,
    searchStringGenerator: function (e) {
        let { user: t, activities: n, nickname: i } = e;
        return [t.username, t.globalName, i, ...n.map((e) => e.name)].filter(M.lm);
    },
    sortType: T.E.JARO_WINKLER,
    throttleMs: 100
};
function ee(e, t) {
    let [n, i] = l.useState(t),
        r = l.useCallback(() => i(t), [t]);
    return (0, Z.BO)(e, t, i, $), [n, r];
}
let et = l.memo(function (e) {
    let { containerClassName: t, listClassName: i, closePopout: u, renderHeader: d, onAction: f, onFriendVisible: g, autoFocus: N = !1, appContext: h = q.IlC.APP } = e,
        [m, E] = l.useState([J.SUGGESTIONS, J.FRIEND_REQUESTS]),
        S = l.useRef(null),
        y = (0, O.Z)('friends-popout', S),
        I = (function () {
            let e = (0, o.Wu)([U.Z, x.default, R.Z], () => {
                    let e = U.Z.getRelationships(),
                        t = [];
                    for (let [n, i] of Object.entries(e)) {
                        if (i !== q.OGo.PENDING_INCOMING && i !== q.OGo.PENDING_OUTGOING) continue;
                        let e = x.default.getUser(n);
                        if (null != e) {
                            let r = U.Z.getSince(n),
                                l = null != r ? new Date(r).getTime() : 0;
                            t.push({
                                user: e,
                                activities: R.Z.getActivities(n),
                                timestamp: l,
                                nickname: U.Z.getNickname(n),
                                relationshipType: i
                            });
                        }
                    }
                    return t.sort((e, t) => t.timestamp - e.timestamp), t;
                }),
                t = (0, o.Wu)(
                    [A.Z, x.default, R.Z, U.Z, F.Z],
                    () => {
                        let e = A.Z.getUserAffinitiesMap(),
                            t = [];
                        for (let [n, i] of e.entries()) {
                            let e = U.Z.getRelationshipType(n);
                            if (U.Z.isFriend(n) || i.communicationProbability <= 0.1634 || e === q.OGo.PENDING_INCOMING || e === q.OGo.PENDING_OUTGOING) continue;
                            let r = x.default.getUser(n);
                            if (null != r) {
                                let e = R.Z.getActivities(n),
                                    l = F.Z.getVoiceStateForUser(n),
                                    s = (null == l ? void 0 : l.channelId) != null;
                                t.push({
                                    user: r,
                                    activities: e,
                                    affinity: i.communicationProbability,
                                    hasActivity: e.length > 0 || s,
                                    nickname: U.Z.getNickname(n)
                                });
                            }
                        }
                        return t.sort((e, t) => {
                            let n = 1000 * !!e.hasActivity + e.affinity;
                            return 1000 * !!t.hasActivity + t.affinity - n;
                        });
                    },
                    []
                ),
                n = (function () {
                    let e = (0, o.e7)([D.Z], () => D.Z.getPrimaryActivity()),
                        t = null == e ? void 0 : e.application_id,
                        n = (0, j.Ns)(t);
                    return (0, o.cj)(
                        [U.Z, x.default, R.Z, F.Z],
                        () => {
                            let i = (null == e ? void 0 : e.name) != null && null != t,
                                r = {
                                    activities: [],
                                    sameActivity: [],
                                    online: [],
                                    offline: []
                                },
                                l = new Map();
                            for (let e of (i &&
                                null != t &&
                                null != n &&
                                n.length > 0 &&
                                n.forEach((e) => {
                                    let t = e.author_id;
                                    if (!U.Z.isFriend(t)) return;
                                    let n = x.default.getUser(t);
                                    null != n &&
                                        l.set(t, {
                                            user: n,
                                            activities: [],
                                            gameProfileEntry: e,
                                            nickname: U.Z.getNickname(t)
                                        });
                                }),
                            U.Z.getFriendIDs())) {
                                let n = x.default.getUser(e);
                                if (null == n) continue;
                                let s = R.Z.getStatus(e),
                                    a = R.Z.getActivities(e),
                                    o = U.Z.getNickname(e),
                                    c = F.Z.getVoiceStateForUser(e),
                                    u = (null == c ? void 0 : c.channelId) != null,
                                    d = a.filter((e) => e.type === q.IIU.PLAYING || e.type === q.IIU.LISTENING || e.type === q.IIU.WATCHING || e.type === q.IIU.STREAMING),
                                    p = d.filter((e) => e.application_id === t),
                                    f = i && p.length > 0,
                                    g = {
                                        user: n,
                                        activities: f ? p : d,
                                        nickname: o
                                    };
                                f ? (r.sameActivity.push(g), l.delete(e)) : d.length > 0 ? r.activities.push(g) : u ? r.activities.push(W(z({}, g), { activities: a })) : s === q.Skl.ONLINE || s === q.Skl.IDLE || s === q.Skl.DND ? r.online.push(g) : r.offline.push(g);
                            }
                            let s = (e, t) => {
                                var n, i;
                                let r = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                                    l = (null != (i = t.user.globalName) ? i : t.user.username).toLowerCase();
                                return r.localeCompare(l);
                            };
                            if ((r.sameActivity.sort(s), l.size > 0)) {
                                let e = Array.from(l.values()).sort(s);
                                r.sameActivity.push(...e);
                            }
                            return r.activities.sort(s), r.online.sort(s), r.offline.sort(s), r;
                        },
                        [n, e, t]
                    );
                })(),
                i = (0, o.e7)([D.Z], () => D.Z.getPrimaryActivity());
            return l.useMemo(() => {
                var r;
                return {
                    friendRequests: e,
                    suggestions: t,
                    activities: n.activities,
                    sameActivity: n.sameActivity,
                    online: n.online,
                    offline: n.offline,
                    currentActivityName: null != (r = null == i ? void 0 : i.name) ? r : ''
                };
            }, [e, t, n, i]);
        })(),
        _ = (function (e) {
            let [t, n] = l.useState(''),
                [i, r] = ee(t, e.friendRequests),
                [s, a] = ee(t, e.suggestions),
                [o, c] = ee(t, e.sameActivity),
                [u, d] = ee(t, e.activities),
                [p, f] = ee(t, e.online),
                [g, N] = ee(t, e.offline),
                O = l.useCallback(() => {
                    n(''), r(), a(), c(), d(), f(), N();
                }, [r, a, c, d, f, N]);
            return {
                friendRequests: i,
                suggestions: s,
                sameActivity: o,
                activities: u,
                online: p,
                offline: g,
                currentActivityName: e.currentActivityName,
                searchQuery: t,
                setSearchQuery: n,
                clearSearch: O
            };
        })(I),
        { searchQuery: v, setSearchQuery: C, clearSearch: P } = _,
        T = Y(_, ['searchQuery', 'setSearchQuery', 'clearSearch']),
        Z = l.useCallback((e) => {
            E((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        w = l.useCallback(
            (0, s.debounce)(
                () => {
                    null == f || f('search_friends');
                },
                1000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            [f]
        ),
        G = l.useCallback(
            (e) => {
                var t;
                C(e), w(), null == (t = S.current) || t.scrollToTop();
            },
            [C, w]
        ),
        k = l.useCallback(() => {
            var e;
            P(), w(), null == (e = S.current) || e.scrollToTop();
        }, [P, w]),
        M = l.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                    return (t) => (0, r.jsx)(e, W(z({}, t), { onClose: u }));
                }),
                    null == f || f('open_settings_modal');
            },
            [u, f]
        ),
        H = l.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e('49078').then(n.bind(n, 539725));
                return (t) => (0, r.jsx)(e, z({}, t));
            }),
                null == f || f('open_friend_modal');
        }, [f]),
        K = l.useCallback(
            (e) => {
                let { section: t } = e,
                    n = '',
                    i = 0;
                switch (t) {
                    case J.FRIEND_REQUESTS:
                        (n = V.intl.string(V.t.fyA119)), (i = T.friendRequests.length);
                        break;
                    case J.SAME_ACTIVITY:
                        (n = I.currentActivityName), (i = T.sameActivity.length);
                        break;
                    case J.SUGGESTIONS:
                        (n = V.intl.string(V.t.qm9dSk)), (i = T.suggestions.length);
                        break;
                    case J.ACTIVITIES:
                        (n = V.intl.string(V.t.TxqPQU)), (i = T.activities.length);
                        break;
                    case J.ONLINE:
                        (n = V.intl.string(V.t.WbGtnJ)), (i = T.online.length);
                        break;
                    case J.OFFLINE:
                        (n = V.intl.string(V.t.Vv0abG)), (i = T.offline.length);
                }
                let l = (t === J.SUGGESTIONS || t === J.FRIEND_REQUESTS) && i > 3,
                    s = m.includes(t);
                return (0, r.jsxs)(b.Z, {
                    className: Q.section,
                    children: [
                        (0, r.jsx)(c.nn4, {
                            children: V.intl.format(V.t.UaqbkZ, {
                                title: n,
                                count: i
                            })
                        }),
                        (0, r.jsxs)(c.P3F, {
                            onClick: () => l && Z(t),
                            'aria-hidden': !0,
                            className: l ? Q.sectionCollapsible : void 0,
                            children: [
                                n,
                                ' \u2014 ',
                                i,
                                l
                                    ? s
                                        ? (0, r.jsx)(c.Fbu, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: Q.chevronIcon
                                          })
                                        : (0, r.jsx)(c.CJ0, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: Q.chevronIcon
                                          })
                                    : null
                            ]
                        })
                    ]
                });
            },
            [I.currentActivityName, T.friendRequests.length, T.sameActivity.length, T.suggestions.length, T.activities.length, T.online.length, T.offline.length, m, Z]
        ),
        B = l.useCallback(
            (e) => {
                let t;
                return null == (t = e.section === J.FRIEND_REQUESTS ? T.friendRequests[e.row] : e.section === J.SAME_ACTIVITY ? T.sameActivity[e.row] : e.section === J.SUGGESTIONS ? T.suggestions[e.row] : e.section === J.ACTIVITIES ? T.activities[e.row] : e.section === J.ONLINE ? T.online[e.row] : T.offline[e.row]) || null == t.user
                    ? null
                    : (0, r.jsx)(
                          X,
                          W(z({}, t), {
                              index: e.row,
                              closeParentPopout: u,
                              isSuggestion: e.section === J.SUGGESTIONS,
                              appContext: h,
                              onAction: f,
                              onFriendVisible: g
                          }),
                          ''.concat(e.section, ':').concat(t.user.id)
                      );
            },
            [T, u, h, f, g]
        ),
        { showSuggestions: $ } = (0, L.Z)(),
        et = l.useMemo(() => {
            let e = $ ? (m.includes(J.SUGGESTIONS) ? Math.min(3, T.suggestions.length) : T.suggestions.length) : 0;
            return [m.includes(J.FRIEND_REQUESTS) ? Math.min(3, T.friendRequests.length) : T.friendRequests.length, T.sameActivity.length, T.activities.length, e, T.online.length, T.offline.length];
        }, [T, m, $]),
        en = Object.values(T).every((e) => 0 === e.length);
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            null != d
                ? (0, r.jsx)('div', {
                      className: Q.header,
                      children: d()
                  })
                : (0, r.jsxs)('div', {
                      className: Q.header,
                      children: [
                          (0, r.jsx)(c.X6q, {
                              variant: 'heading-lg/semibold',
                              children: V.intl.string(V.t.TdEu5e)
                          }),
                          (0, r.jsxs)('div', {
                              className: Q.controlButtons,
                              children: [
                                  (0, r.jsx)(c.M0o, {
                                      tooltip: V.intl.string(V.t.w5uwoK),
                                      color: c.YX$.TERTIARY,
                                      icon: (0, r.jsx)(c.oLu, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                      className: Q.controlButton,
                                      onClick: H
                                  }),
                                  (0, r.jsx)(c.M0o, {
                                      tooltip: V.intl.string(V.t['3D5yo6']),
                                      color: c.YX$.TERTIARY,
                                      icon: (0, r.jsx)(c.xhG, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                      className: Q.controlButton,
                                      onClick: M
                                  })
                              ]
                          })
                      ]
                  }),
            (0, r.jsx)('div', {
                className: Q.searchContainer,
                children: (0, r.jsx)(c.E1j, {
                    query: v,
                    onChange: G,
                    onClear: k,
                    placeholder: V.intl.string(V.t['5h0QOD']),
                    size: c.E1j.Sizes.MEDIUM,
                    autoFocus: N
                })
            }),
            en
                ? (0, r.jsx)('div', {
                      className: Q.emptyStateContainer,
                      children: (0, r.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: V.intl.string(V.t['7sW4h4'])
                      })
                  })
                : (0, r.jsx)(a.bG, {
                      navigator: y,
                      children: (0, r.jsx)(a.SJ, {
                          children: (e) => {
                              var { ref: t, role: n } = e,
                                  l = Y(e, ['ref', 'role']);
                              return (0, r.jsx)(c.Wdt, {
                                  children: (e) =>
                                      (0, r.jsx)(
                                          c.aVo,
                                          z(
                                              {
                                                  innerRole: n,
                                                  innerAriaLabel: V.intl.string(V.t.TdEu5e),
                                                  ref: (e) => {
                                                      var n;
                                                      (S.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                                  },
                                                  className: i,
                                                  sectionHeight: 40,
                                                  rowHeight: 42,
                                                  sidebarHeight: 0,
                                                  renderSection: K,
                                                  renderRow: B,
                                                  sections: et,
                                                  paddingTop: 4,
                                                  paddingBottom: 4
                                              },
                                              l,
                                              e
                                          )
                                      )
                              });
                          }
                      })
                  })
        ]
    });
});
function en(e) {
    let { onOpen: t, onClose: n, children: i, popoutPosition: s, popoutAlign: a } = e,
        [o, u] = l.useState(!1),
        d = l.useRef(null),
        p = l.useCallback(() => {
            u(!1), null == n || n();
        }, [n]),
        f = l.useCallback(() => {
            u((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        g = l.useCallback(
            () =>
                (0, r.jsx)(et, {
                    containerClassName: Q.container,
                    listClassName: Q.list,
                    closePopout: p,
                    autoFocus: !0
                }),
            [p]
        );
    return (0, r.jsx)(c.yRy, {
        targetElementRef: d,
        animation: c.yRy.Animation.NONE,
        position: s,
        align: a,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: p,
        renderPopout: g,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return i(f, n, e, d);
        }
    });
}
