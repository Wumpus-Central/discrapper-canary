n.d(t, {
    Or: () => en,
    r1: () => et,
    sG: () => H
}),
    n(388685),
    n(539854),
    n(642613);
var i,
    r = n(200651),
    l = n(192379),
    s = n(392711),
    a = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(278323),
    d = n(493683),
    f = n(239091),
    p = n(194359),
    g = n(434650),
    O = n(549879),
    E = n(724757),
    N = n(620662),
    m = n(420660),
    y = n(326255),
    h = n(956221),
    S = n(747017),
    v = n(297781),
    I = n(82295),
    b = n(554300),
    _ = n(558602),
    j = n(567409),
    C = n(373662),
    P = n(850020),
    T = n(886118),
    Z = n(301801),
    w = n(814443),
    A = n(518950),
    R = n(670188),
    k = n(199902),
    U = n(158776),
    G = n(699516),
    D = n(885110),
    x = n(594174),
    F = n(979651),
    L = n(823379),
    M = n(151459),
    q = n(981631),
    V = n(388032),
    z = n(288779);
function Q(e) {
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
let J = c.EFr.SIZE_32,
    K = {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    B = [v.OV, v.wO, v.f, v.v1, v.pQ];
var H = (((i = {}).USER_CONTEXT_MENU = 'user_context_menu'), (i.OPEN_DIRECT_MESSAGE = 'open_direct_message'), (i.SEND_FRIEND_REQUEST = 'send_friend_request'), (i.SEND_ACTIVITY_INVITE = 'send_activity_invite'), (i.ASK_TO_JOIN = 'ask_to_join'), (i.DECLINE_FRIEND_REQUEST = 'decline_friend_request'), (i.ACCEPT_FRIEND_REQUEST = 'accept_friend_request'), (i.CANCEL_FRIEND_REQUEST = 'cancel_friend_request'), (i.OPEN_FRIEND_MODAL = 'open_friend_modal'), (i.OPEN_SETTINGS_MODAL = 'open_settings_modal'), (i.SEARCH_FRIENDS = 'search_friends'), i);
let X = l.memo((e) => {
    let { user: t, activities: i = [], gameProfileEntry: s, index: E, closeParentPopout: I, isSuggestion: j, relationshipType: T, appContext: Z, nickname: w, onAction: G, onFriendVisible: x } = e,
        {
            avatarDecorationSrc: F,
            avatarSrc: L,
            eventHandlers: M
        } = (0, A.Z)({
            user: t,
            size: J,
            animateOnHover: !0,
            guildId: null
        }),
        Y = (0, a.JA)(''.concat(E)),
        [K, H] = l.useState(!1),
        [X, $] = l.useState({}),
        ee = t.id,
        et = i.filter((e) => e.type === q.IIU.PLAYING && (0, N.Z)(e, q.xjy.JOIN)),
        en = (0, o.Wu)([D.Z], () => D.Z.getActivities().filter((e) => e.type === q.IIU.PLAYING && (0, N.Z)(e, q.xjy.JOIN))),
        { voiceChannel: ei } = (0, h.Z)({ userId: t.id }),
        er = (0, P.K)({
            location: 'friends-popout',
            user: t
        }),
        {
            status: el,
            applicationStream: es,
            isMobile: ea,
            newStatus: eo
        } = (0, o.cj)(
            [U.Z, k.Z],
            () => {
                let e = U.Z.getStatus(t.id),
                    n = k.Z.getAnyStreamForUser(t.id),
                    r = U.Z.isMobileOnline(t.id),
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
        ef = l.useCallback(() => {
            H(!0);
        }, []),
        ep = l.useCallback(() => {
            H(!1);
        }, []),
        eg = l.useCallback(() => {
            if (null != s) {
                let e = s.traits,
                    t = W(Q({}, s), { traits: e.slice(0, 3) });
                return (0, r.jsx)(v.Gk, {
                    location: v.Gt.FRIENDS_POPOUT,
                    className: z.badgesContainer,
                    children: B.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                });
            }
            if (
                !(0, y.Z)({
                    activities: i,
                    status: el,
                    applicationStream: es,
                    voiceChannel: ei
                })
            )
                return null;
            let e = !(0, _.Z)({
                activity:
                    null == i
                        ? void 0
                        : i.find((e) => {
                              let { type: t } = e;
                              return t === q.IIU.CUSTOM_STATUS;
                          }),
                user: t
            });
            return (0, r.jsx)(S.Z, {
                user: t,
                activities: i,
                applicationStream: es,
                voiceChannel: ei,
                animate: !1,
                hideEmoji: e,
                hasQuest: !1
            });
        }, [t, i, el, es, ei, s]),
        eO = l.useCallback(
            (e) => {
                null == G || G('user_context_menu', t.id),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                W(Q({}, n), {
                                    user: t,
                                    appContext: Z
                                })
                            );
                    });
            },
            [t, Z, G]
        ),
        eE = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == G || G('open_direct_message', t.id), (0, O.i)(Z, !0), d.Z.openPrivateChannel({ recipientIds: t.id }), null != I && I();
            },
            [t.id, I, Z, G]
        ),
        eN = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == G || G('send_friend_request', t.id),
                    p.Z.addRelationship({
                        userId: t.id,
                        context: { location: 'friends-popout' }
                    });
            },
            [t.id, G]
        ),
        em = l.useCallback(
            async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !X[n.application_id]))
                    try {
                        $((e) => W(Q({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: q.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: q.Sbl.FRIENDS_POPOUT
                            }),
                            null == G || G('send_activity_invite', t.id),
                            $((e) => W(Q({}, e), { [n.application_id]: !1 }));
                    } finally {
                        $((e) => W(Q({}, e), { [n.application_id]: !1 }));
                    }
            },
            [G, X, t.id]
        ),
        ey = l.useCallback(
            async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !X[n.application_id]))
                    try {
                        $((e) => W(Q({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: q.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: q.Sbl.FRIENDS_POPOUT
                            }),
                            null == G || G('ask_to_join', t.id),
                            $((e) => W(Q({}, e), { [n.application_id]: !1 }));
                    } finally {
                        $((e) => W(Q({}, e), { [n.application_id]: !1 }));
                    }
            },
            [G, X, t.id]
        ),
        eh = () =>
            T === q.OGo.PENDING_INCOMING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(C.sF, {
                              label: V.intl.string(V.t.MMlhsr),
                              icon: c.dz2,
                              onClick: (e) => {
                                  e.preventDefault(),
                                      e.stopPropagation(),
                                      p.Z.addRelationship({
                                          userId: t.id,
                                          context: { location: 'friends-popout' }
                                      }),
                                      null == G || G('accept_friend_request', t.id);
                              }
                          }),
                          (0, r.jsx)(C.sF, {
                              label: V.intl.string(V.t.ytCpKi),
                              icon: c.Dio,
                              onClick: (e) => {
                                  e.preventDefault(), e.stopPropagation(), p.Z.removeRelationship(t.id, { location: 'friends-popout' }), null == G || G('decline_friend_request', t.id);
                              }
                          })
                      ]
                  })
                : T === q.OGo.PENDING_OUTGOING
                  ? (0, r.jsx)(C.sF, {
                        label: V.intl.string(V.t['bTfA//']),
                        icon: c.iHX,
                        onClick: (e) => {
                            e.preventDefault(), e.stopPropagation(), p.Z.cancelFriendRequest(t.id, { location: 'friends-popout' }), null == G || G('cancel_friend_request', t.id);
                        }
                    })
                  : j
                    ? (0, r.jsx)(C.sF, {
                          label: V.intl.string(V.t.w5uwoK),
                          icon: c.oLu,
                          onClick: eN
                      })
                    : null,
        eS = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    et.map((e) =>
                        (0, r.jsx)(
                            C.sF,
                            {
                                label: X[e.application_id] ? V.intl.string(V.t['8BEiNj']) : V.intl.string(V.t.OKsSCQ),
                                icon: X[e.application_id] ? c.dz2 : c.V9,
                                onClick: (t) => ey(t, e)
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
    return (0, r.jsx)(R.Z, {
        user: t,
        position: 'left',
        spacing: 16,
        children: (e, n) => {
            var i;
            let { isShown: l } = n;
            return (0, r.jsxs)('div', {
                className: z.row,
                ref: ed,
                children: [
                    (0, r.jsx)(
                        b.Z,
                        Q(
                            {
                                innerClassName: z.rowInner,
                                onContextMenu: eO,
                                onMouseEnter: ef,
                                onMouseLeave: ep,
                                avatar: (0, r.jsx)(
                                    c.qEK,
                                    W(Q({}, M), {
                                        size: J,
                                        src: L,
                                        isMobile: ea,
                                        isTyping: !1,
                                        status: eo,
                                        className: z.avatar,
                                        'aria-label': t.username,
                                        statusTooltip: !0,
                                        avatarDecoration: F
                                    })
                                ),
                                name: (0, r.jsx)('span', {
                                    className: z.username,
                                    children: null != (i = null != w ? w : t.globalName) ? i : t.username
                                }),
                                subText: eg(),
                                selected: l,
                                nameplate: er,
                                hovered: K
                            },
                            e,
                            Y
                        )
                    ),
                    (0, r.jsxs)(C.ZP, {
                        className: z.hoverBar,
                        children: [
                            eh(),
                            eS(),
                            T !== q.OGo.PENDING_INCOMING &&
                                T !== q.OGo.PENDING_OUTGOING &&
                                (0, r.jsx)(C.sF, {
                                    label: V.intl.string(V.t['g33r/P']),
                                    icon: c.kBi,
                                    onClick: eE
                                }),
                            (0, r.jsx)(C.sF, {
                                label: V.intl.string(V.t.UKOtz8),
                                icon: c.xhG,
                                onClick: eO
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
        return [t.username, t.globalName, i, ...n.map((e) => e.name)].filter(L.lm);
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
    let { containerClassName: t, listClassName: i, closePopout: u, renderHeader: d, onAction: p, onFriendVisible: g, autoFocus: O = !1, appContext: N = q.IlC.APP } = e,
        [m, y] = l.useState([K.SUGGESTIONS, K.FRIEND_REQUESTS]),
        h = l.useRef(null),
        S = (0, E.Z)('friends-popout', h),
        v = (function () {
            let e = (0, o.Wu)([G.Z, x.default, U.Z], () => {
                    let e = G.Z.getRelationships(),
                        t = [];
                    for (let [n, i] of Object.entries(e)) {
                        if (i !== q.OGo.PENDING_INCOMING && i !== q.OGo.PENDING_OUTGOING) continue;
                        let e = x.default.getUser(n);
                        if (null != e) {
                            let r = G.Z.getSince(n),
                                l = null != r ? new Date(r).getTime() : 0;
                            t.push({
                                user: e,
                                activities: U.Z.getActivities(n),
                                timestamp: l,
                                nickname: G.Z.getNickname(n),
                                relationshipType: i
                            });
                        }
                    }
                    return t.sort((e, t) => t.timestamp - e.timestamp), t;
                }),
                t = (0, o.Wu)(
                    [w.Z, x.default, U.Z, G.Z, F.Z],
                    () => {
                        let e = w.Z.getUserAffinitiesMap(),
                            t = [];
                        for (let [n, i] of e.entries()) {
                            let e = G.Z.getRelationshipType(n);
                            if (G.Z.isFriend(n) || i.affinity <= 20 || e === q.OGo.PENDING_INCOMING || e === q.OGo.PENDING_OUTGOING) continue;
                            let r = x.default.getUser(n);
                            if (null != r) {
                                let e = U.Z.getActivities(n),
                                    l = F.Z.getVoiceStateForUser(n),
                                    s = (null == l ? void 0 : l.channelId) != null;
                                t.push({
                                    user: r,
                                    activities: e,
                                    affinity: i.affinity,
                                    hasActivity: e.length > 0 || s,
                                    nickname: G.Z.getNickname(n)
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
                        [G.Z, x.default, U.Z, F.Z],
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
                                    if (!G.Z.isFriend(t)) return;
                                    let n = x.default.getUser(t);
                                    null != n &&
                                        l.set(t, {
                                            user: n,
                                            activities: [],
                                            gameProfileEntry: e,
                                            nickname: G.Z.getNickname(t)
                                        });
                                }),
                            G.Z.getFriendIDs())) {
                                let n = x.default.getUser(e);
                                if (null == n) continue;
                                let s = U.Z.getStatus(e),
                                    a = U.Z.getActivities(e),
                                    o = G.Z.getNickname(e),
                                    c = F.Z.getVoiceStateForUser(e),
                                    u = (null == c ? void 0 : c.channelId) != null,
                                    d = a.filter((e) => e.type === q.IIU.PLAYING || e.type === q.IIU.LISTENING || e.type === q.IIU.WATCHING || e.type === q.IIU.STREAMING),
                                    f = d.filter((e) => e.application_id === t),
                                    p = i && f.length > 0,
                                    g = {
                                        user: n,
                                        activities: p ? f : d,
                                        nickname: o
                                    };
                                p ? (r.sameActivity.push(g), l.delete(e)) : d.length > 0 ? r.activities.push(g) : u ? r.activities.push(W(Q({}, g), { activities: a })) : s === q.Skl.ONLINE || s === q.Skl.IDLE || s === q.Skl.DND ? r.online.push(g) : r.offline.push(g);
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
        b = (function (e) {
            let [t, n] = l.useState(''),
                [i, r] = ee(t, e.friendRequests),
                [s, a] = ee(t, e.suggestions),
                [o, c] = ee(t, e.sameActivity),
                [u, d] = ee(t, e.activities),
                [f, p] = ee(t, e.online),
                [g, O] = ee(t, e.offline),
                E = l.useCallback(() => {
                    n(''), r(), a(), c(), d(), p(), O();
                }, [r, a, c, d, p, O]);
            return {
                friendRequests: i,
                suggestions: s,
                sameActivity: o,
                activities: u,
                online: f,
                offline: g,
                currentActivityName: e.currentActivityName,
                searchQuery: t,
                setSearchQuery: n,
                clearSearch: E
            };
        })(v),
        { searchQuery: _, setSearchQuery: C, clearSearch: P } = b,
        T = Y(b, ['searchQuery', 'setSearchQuery', 'clearSearch']),
        Z = l.useCallback((e) => {
            y((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        A = l.useCallback(
            (0, s.debounce)(
                () => {
                    null == p || p('search_friends');
                },
                1000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            [p]
        ),
        R = l.useCallback(
            (e) => {
                var t;
                C(e), A(), null == (t = h.current) || t.scrollToTop();
            },
            [C, A]
        ),
        k = l.useCallback(() => {
            var e;
            P(), A(), null == (e = h.current) || e.scrollToTop();
        }, [P, A]),
        L = l.useCallback(
            (e) => {
                (0, f.jW)(e, async () => {
                    let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                    return (t) => (0, r.jsx)(e, W(Q({}, t), { onClose: u }));
                }),
                    null == p || p('open_settings_modal');
            },
            [u, p]
        ),
        J = l.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e('49078').then(n.bind(n, 539725));
                return (t) => (0, r.jsx)(e, Q({}, t));
            }),
                null == p || p('open_friend_modal');
        }, [p]),
        B = l.useCallback(
            (e) => {
                let { section: t } = e,
                    n = '',
                    i = 0;
                switch (t) {
                    case K.FRIEND_REQUESTS:
                        (n = V.intl.string(V.t.fyA119)), (i = T.friendRequests.length);
                        break;
                    case K.SAME_ACTIVITY:
                        (n = v.currentActivityName), (i = T.sameActivity.length);
                        break;
                    case K.SUGGESTIONS:
                        (n = V.intl.string(V.t.qm9dSk)), (i = T.suggestions.length);
                        break;
                    case K.ACTIVITIES:
                        (n = V.intl.string(V.t.TxqPQU)), (i = T.activities.length);
                        break;
                    case K.ONLINE:
                        (n = V.intl.string(V.t.WbGtnJ)), (i = T.online.length);
                        break;
                    case K.OFFLINE:
                        (n = V.intl.string(V.t.Vv0abG)), (i = T.offline.length);
                }
                let l = (t === K.SUGGESTIONS || t === K.FRIEND_REQUESTS) && i > 3,
                    s = m.includes(t);
                return (0, r.jsxs)(I.Z, {
                    className: z.section,
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
                            className: l ? z.sectionCollapsible : void 0,
                            children: [
                                n,
                                ' \u2014 ',
                                i,
                                l
                                    ? s
                                        ? (0, r.jsx)(c.Fbu, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: z.chevronIcon
                                          })
                                        : (0, r.jsx)(c.CJ0, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: z.chevronIcon
                                          })
                                    : null
                            ]
                        })
                    ]
                });
            },
            [v.currentActivityName, T.friendRequests.length, T.sameActivity.length, T.suggestions.length, T.activities.length, T.online.length, T.offline.length, m, Z]
        ),
        H = l.useCallback(
            (e) => {
                let t;
                return null == (t = e.section === K.FRIEND_REQUESTS ? T.friendRequests[e.row] : e.section === K.SAME_ACTIVITY ? T.sameActivity[e.row] : e.section === K.SUGGESTIONS ? T.suggestions[e.row] : e.section === K.ACTIVITIES ? T.activities[e.row] : e.section === K.ONLINE ? T.online[e.row] : T.offline[e.row]) || null == t.user
                    ? null
                    : (0, r.jsx)(
                          X,
                          W(Q({}, t), {
                              index: e.row,
                              closeParentPopout: u,
                              isSuggestion: e.section === K.SUGGESTIONS,
                              appContext: N,
                              onAction: p,
                              onFriendVisible: g
                          }),
                          ''.concat(e.section, ':').concat(t.user.id)
                      );
            },
            [T, u, N, p, g]
        ),
        { showSuggestions: $ } = (0, M.Z)(),
        et = l.useMemo(() => {
            let e = $ ? (m.includes(K.SUGGESTIONS) ? Math.min(3, T.suggestions.length) : T.suggestions.length) : 0;
            return [m.includes(K.FRIEND_REQUESTS) ? Math.min(3, T.friendRequests.length) : T.friendRequests.length, T.sameActivity.length, T.activities.length, e, T.online.length, T.offline.length];
        }, [T, m, $]),
        en = Object.values(T).every((e) => 0 === e.length);
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            null != d
                ? (0, r.jsx)('div', {
                      className: z.header,
                      children: d()
                  })
                : (0, r.jsxs)('div', {
                      className: z.header,
                      children: [
                          (0, r.jsx)(c.X6q, {
                              variant: 'heading-lg/semibold',
                              children: V.intl.string(V.t.TdEu5e)
                          }),
                          (0, r.jsxs)('div', {
                              className: z.controlButtons,
                              children: [
                                  (0, r.jsx)(c.M0o, {
                                      tooltip: V.intl.string(V.t.w5uwoK),
                                      color: c.YX$.TERTIARY,
                                      icon: (0, r.jsx)(c.oLu, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                      className: z.controlButton,
                                      onClick: J
                                  }),
                                  (0, r.jsx)(c.M0o, {
                                      tooltip: V.intl.string(V.t['3D5yo6']),
                                      color: c.YX$.TERTIARY,
                                      icon: (0, r.jsx)(c.xhG, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                      className: z.controlButton,
                                      onClick: L
                                  })
                              ]
                          })
                      ]
                  }),
            (0, r.jsx)('div', {
                className: z.searchContainer,
                children: (0, r.jsx)(c.E1j, {
                    query: _,
                    onChange: R,
                    onClear: k,
                    placeholder: V.intl.string(V.t['5h0QOD']),
                    size: c.E1j.Sizes.MEDIUM,
                    autoFocus: O
                })
            }),
            en
                ? (0, r.jsx)('div', {
                      className: z.emptyStateContainer,
                      children: (0, r.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: V.intl.string(V.t['7sW4h4'])
                      })
                  })
                : (0, r.jsx)(a.bG, {
                      navigator: S,
                      children: (0, r.jsx)(a.SJ, {
                          children: (e) => {
                              var { ref: t, role: n } = e,
                                  l = Y(e, ['ref', 'role']);
                              return (0, r.jsx)(c.Wdt, {
                                  children: (e) =>
                                      (0, r.jsx)(
                                          c.aVo,
                                          Q(
                                              {
                                                  innerRole: n,
                                                  innerAriaLabel: V.intl.string(V.t.TdEu5e),
                                                  ref: (e) => {
                                                      var n;
                                                      (h.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                                  },
                                                  className: i,
                                                  sectionHeight: 40,
                                                  rowHeight: 42,
                                                  sidebarHeight: 0,
                                                  renderSection: B,
                                                  renderRow: H,
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
        d = l.useCallback(() => {
            u(!1), null == n || n();
        }, [n]),
        f = l.useCallback(() => {
            u((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        p = l.useCallback(
            () =>
                (0, r.jsx)(et, {
                    containerClassName: z.container,
                    listClassName: z.list,
                    closePopout: d,
                    autoFocus: !0
                }),
            [d]
        );
    return (0, r.jsx)(c.yRy, {
        animation: c.yRy.Animation.NONE,
        position: s,
        align: a,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: p,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return i(f, n, e);
        }
    });
}
