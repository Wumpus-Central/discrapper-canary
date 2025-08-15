n.d(t, {
    Or: () => et,
    r1: () => ee,
    sG: () => Y,
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
    h = n(549879),
    m = n(724757),
    y = n(620662),
    O = n(420660),
    N = n(326255),
    b = n(956221),
    v = n(771173),
    _ = n(297781),
    E = n(82295),
    S = n(554300),
    I = n(558602),
    j = n(567409),
    P = n(373662),
    C = n(850020),
    Z = n(886118),
    w = n(301801),
    T = n(752048),
    k = n(518950),
    A = n(670188),
    x = n(199902),
    D = n(158776),
    G = n(699516),
    R = n(885110),
    U = n(594174),
    F = n(979651),
    M = n(823379),
    L = n(151459),
    q = n(981631),
    W = n(388032),
    z = n(712103);
function V(e) {
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
function Q(e, t) {
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
function H(e, t) {
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
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let J = c.EFr.SIZE_32,
    K = [_.OV, _.wO, _.f, _.v1, _.pQ];
var Y =
    (((i = {}).USER_CONTEXT_MENU = "user_context_menu"),
    (i.OPEN_DIRECT_MESSAGE = "open_direct_message"),
    (i.SEND_FRIEND_REQUEST = "send_friend_request"),
    (i.SEND_ACTIVITY_INVITE = "send_activity_invite"),
    (i.ASK_TO_JOIN = "ask_to_join"),
    (i.DECLINE_FRIEND_REQUEST = "decline_friend_request"),
    (i.ACCEPT_FRIEND_REQUEST = "accept_friend_request"),
    (i.CANCEL_FRIEND_REQUEST = "cancel_friend_request"),
    (i.OPEN_FRIEND_MODAL = "open_friend_modal"),
    (i.OPEN_SETTINGS_MODAL = "open_settings_modal"),
    (i.SEARCH_FRIENDS = "search_friends"),
    i);
let B = l.memo((e) => {
    let {
            user: t,
            activities: i = [],
            gameProfileEntry: s,
            index: m,
            closeParentPopout: E,
            isSuggestion: j,
            relationshipType: Z,
            appContext: w,
            nickname: T,
            onAction: G,
            onFriendVisible: U,
        } = e,
        F = t.id,
        {
            avatarDecorationSrc: M,
            avatarSrc: L,
            eventHandlers: H,
        } = (0, k.Z)({
            userId: F,
            size: J,
            animateOnHover: !0,
            guildId: null,
        }),
        Y = (0, a.JA)("".concat(m)),
        [B, X] = l.useState(!1),
        [$, ee] = l.useState({}),
        et = i.filter((e) => e.type === q.IIU.PLAYING && (0, y.Z)(e, q.xjy.JOIN)),
        en = (0, o.Wu)([R.Z], () =>
            R.Z.getActivities().filter((e) => e.type === q.IIU.PLAYING && (0, y.Z)(e, q.xjy.JOIN)),
        ),
        { voiceChannel: ei } = (0, b.Z)({ userId: t.id }),
        er = (0, C.K)({ user: t }),
        {
            status: el,
            applicationStream: es,
            isMobile: ea,
            newStatus: eo,
        } = (0, o.cj)([D.Z, x.Z], () => {
            let e = D.Z.getStatus(t.id),
                n = x.Z.getAnyStreamForUser(t.id),
                r = D.Z.isMobileOnline(t.id),
                l = (0, O.Z)(i) ? q.Skl.STREAMING : e;
            return {
                status: e,
                applicationStream: n,
                isMobile: r,
                newStatus: l,
            };
        }, [t.id, i]),
        ec = en.length > 0,
        eu = l.useCallback(
            (e) => {
                null == U || U(F, e, ec);
            },
            [U, F, ec],
        ),
        ed = (0, g.O)(eu),
        ep = l.useCallback(() => {
            X(!0);
        }, []),
        ef = l.useCallback(() => {
            X(!1);
        }, []),
        eg = l.useCallback(() => {
            if (null != s) {
                let e = s.traits,
                    t = Q(V({}, s), { traits: e.slice(0, 3) });
                return (0, r.jsx)(_.Gk, {
                    location: _.Gt.FRIENDS_POPOUT,
                    className: z.badgesContainer,
                    children: K.map((e, n) => (0, r.jsx)(e, { entry: t }, n)),
                });
            }
            if (
                !(0, N.Z)({
                    activities: i,
                    status: el,
                    applicationStream: es,
                    voiceChannel: ei,
                })
            )
                return null;
            let e = !(0, I.Z)({
                activity:
                    null == i
                        ? void 0
                        : i.find((e) => {
                              let { type: t } = e;
                              return t === q.IIU.CUSTOM_STATUS;
                          }),
                user: t,
            });
            return (0, r.jsx)(v.Z, {
                location: "FriendsPopout",
                user: t,
                activities: i,
                applicationStream: es,
                voiceChannel: ei,
                animateEmoji: !1,
                hideEmoji: e,
                hasQuest: !1,
            });
        }, [t, i, el, es, ei, s]),
        eh = l.useCallback(
            (e) => {
                null == G || G("user_context_menu", t.id),
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("70274"),
                            n.e("79695"),
                            n.e("69220"),
                            n.e("92522"),
                        ]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                Q(V({}, n), {
                                    user: t,
                                    appContext: w,
                                }),
                            );
                    });
            },
            [t, w, G],
        ),
        em = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == G || G("open_direct_message", t.id),
                    (0, h.i)(w, !0),
                    d.Z.openPrivateChannel({ recipientIds: t.id }),
                    null != E && E();
            },
            [t.id, E, w, G],
        ),
        ey = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == G || G("send_friend_request", t.id),
                    f.Z.addRelationship({
                        userId: t.id,
                        context: { location: "friends-popout" },
                    });
            },
            [t.id, G],
        ),
        eO = l.useCallback(
            async (e, n) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != n.application_id && "" !== n.application_id && !$[n.application_id])
                )
                    try {
                        ee((e) => Q(V({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: q.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: q.Sbl.FRIENDS_POPOUT,
                            }),
                            null == G || G("send_activity_invite", t.id),
                            ee((e) => Q(V({}, e), { [n.application_id]: !1 }));
                    } finally {
                        ee((e) => Q(V({}, e), { [n.application_id]: !1 }));
                    }
            },
            [G, $, t.id],
        ),
        eN = l.useCallback(
            async (e, n) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != n.application_id && "" !== n.application_id && !$[n.application_id])
                )
                    try {
                        ee((e) => Q(V({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: q.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: q.Sbl.FRIENDS_POPOUT,
                            }),
                            null == G || G("ask_to_join", t.id),
                            ee((e) => Q(V({}, e), { [n.application_id]: !1 }));
                    } finally {
                        ee((e) => Q(V({}, e), { [n.application_id]: !1 }));
                    }
            },
            [G, $, t.id],
        );
    return (0, r.jsx)(A.Z, {
        targetElementRef: ed,
        user: t,
        position: "left",
        spacing: 16,
        children: (e, n) => {
            var i;
            let { isShown: l } = n;
            return (0, r.jsxs)("div", {
                className: z.row,
                ref: ed,
                children: [
                    (0, r.jsx)(
                        S.Z,
                        V(
                            {
                                innerClassName: z.rowInner,
                                onContextMenu: eh,
                                onMouseEnter: ep,
                                onMouseLeave: ef,
                                avatar: (0, r.jsx)(
                                    c.qEK,
                                    Q(V({}, H), {
                                        size: J,
                                        src: L,
                                        isMobile: ea,
                                        isTyping: !1,
                                        status: eo,
                                        className: z.avatar,
                                        "aria-label": t.username,
                                        statusTooltip: !0,
                                        avatarDecoration: M,
                                    }),
                                ),
                                name: (0, r.jsx)("span", {
                                    className: z.username,
                                    children: null != (i = null != T ? T : t.globalName) ? i : t.username,
                                }),
                                subText: eg(),
                                selected: l,
                                nameplate: er,
                                hovered: B,
                            },
                            e,
                            Y,
                        ),
                    ),
                    (0, r.jsxs)(P.ZP, {
                        className: z.hoverBar,
                        children: [
                            Z === q.OGo.PENDING_INCOMING
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(P.sF, {
                                              label: W.intl.string(W.t.MMlhsr),
                                              icon: c.dz2,
                                              onClick: (e) => {
                                                  e.preventDefault(),
                                                      e.stopPropagation(),
                                                      f.Z.addRelationship({
                                                          userId: t.id,
                                                          context: { location: "friends-popout" },
                                                      }),
                                                      null == G || G("accept_friend_request", t.id);
                                              },
                                          }),
                                          (0, r.jsx)(P.sF, {
                                              label: W.intl.string(W.t.ytCpKi),
                                              icon: c.Dio,
                                              onClick: (e) => {
                                                  e.preventDefault(),
                                                      e.stopPropagation(),
                                                      f.Z.removeRelationship(t.id, { location: "friends-popout" }),
                                                      null == G || G("decline_friend_request", t.id);
                                              },
                                          }),
                                      ],
                                  })
                                : Z === q.OGo.PENDING_OUTGOING
                                  ? (0, r.jsx)(P.sF, {
                                        label: W.intl.string(W.t["bTfA//"]),
                                        icon: c.iHX,
                                        onClick: (e) => {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                f.Z.cancelFriendRequest(t.id, { location: "friends-popout" }),
                                                null == G || G("cancel_friend_request", t.id);
                                        },
                                    })
                                  : j
                                    ? (0, r.jsx)(P.sF, {
                                          label: W.intl.string(W.t.w5uwoK),
                                          icon: c.oLu,
                                          onClick: ey,
                                      })
                                    : null,
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    et.map((e) =>
                                        (0, r.jsx)(
                                            P.sF,
                                            {
                                                label: $[e.application_id]
                                                    ? W.intl.string(W.t["8BEiNj"])
                                                    : W.intl.string(W.t.OKsSCQ),
                                                icon: $[e.application_id] ? c.dz2 : c.V9,
                                                onClick: (t) => eN(t, e),
                                            },
                                            e.application_id,
                                        ),
                                    ),
                                    en.map((e) => {
                                        var n;
                                        return (0, r.jsx)(
                                            P.sF,
                                            {
                                                label: $[e.application_id]
                                                    ? W.intl.string(W.t["8BEiNj"])
                                                    : W.intl.formatToPlainString(W.t["KHLo+P"], {
                                                          channel: null != (n = t.globalName) ? n : t.username,
                                                          game: e.name,
                                                      }),
                                                icon: $[e.application_id] ? c.dz2 : c.ejJ,
                                                onClick: (t) => eO(t, e),
                                            },
                                            e.application_id,
                                        );
                                    }),
                                ],
                            }),
                            Z !== q.OGo.PENDING_INCOMING &&
                                Z !== q.OGo.PENDING_OUTGOING &&
                                (0, r.jsx)(P.sF, {
                                    label: W.intl.string(W.t["g33r/P"]),
                                    icon: c.kBi,
                                    onClick: em,
                                }),
                            (0, r.jsx)(P.sF, {
                                label: W.intl.string(W.t.UKOtz8),
                                icon: c.xhG,
                                onClick: eh,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
});
B.displayName = "FriendRow";
let X = {
    searchType: Z.S.FUZZY,
    searchStringGenerator: function (e) {
        let { user: t, activities: n, nickname: i } = e;
        return [t.username, t.globalName, i, ...n.map((e) => e.name)].filter(M.lm);
    },
    sortType: Z.E.JARO_WINKLER,
    throttleMs: 100,
};
function $(e, t) {
    let [n, i] = l.useState(t),
        r = l.useCallback(() => i(t), [t]);
    return (0, w.BO)(e, t, i, X), [n, r];
}
let ee = l.memo(function (e) {
    let {
            containerClassName: t,
            listClassName: i,
            closePopout: u,
            renderHeader: d,
            onAction: f,
            onFriendVisible: g,
            autoFocus: h = !1,
            appContext: y = q.IlC.APP,
        } = e,
        [O, N] = l.useState([3, 0]),
        b = l.useRef(null),
        v = (0, m.Z)("friends-popout", b),
        _ = (function () {
            let e = (0, o.Wu)([G.Z, U.default, D.Z], () => {
                    let e = [];
                    for (let [t, n] of G.Z.getMutableRelationships().entries()) {
                        if (n !== q.OGo.PENDING_INCOMING && n !== q.OGo.PENDING_OUTGOING) continue;
                        let i = U.default.getUser(t);
                        if (null != i) {
                            let r = G.Z.getSince(t),
                                l = null != r ? new Date(r).getTime() : 0;
                            e.push({
                                user: i,
                                activities: D.Z.getActivities(t),
                                timestamp: l,
                                nickname: G.Z.getNickname(t),
                                relationshipType: n,
                            });
                        }
                    }
                    return e.sort((e, t) => t.timestamp - e.timestamp), e;
                }),
                t = (0, o.Wu)([T.Z, U.default, D.Z, G.Z, F.Z], () => {
                    let e = T.Z.getUserAffinitiesMap(),
                        t = [];
                    for (let [n, i] of e.entries()) {
                        let e = G.Z.getRelationshipType(n);
                        if (
                            G.Z.isFriend(n) ||
                            i.communicationProbability <= 0.1634 ||
                            e === q.OGo.PENDING_INCOMING ||
                            e === q.OGo.PENDING_OUTGOING
                        )
                            continue;
                        let r = U.default.getUser(n);
                        if (null != r) {
                            let e = D.Z.getActivities(n),
                                l = F.Z.getVoiceStateForUser(n),
                                s = (null == l ? void 0 : l.channelId) != null;
                            t.push({
                                user: r,
                                activities: e,
                                affinity: i.communicationProbability,
                                hasActivity: e.length > 0 || s,
                                nickname: G.Z.getNickname(n),
                            });
                        }
                    }
                    return t.sort((e, t) => {
                        let n = 1000 * !!e.hasActivity + e.affinity;
                        return 1000 * !!t.hasActivity + t.affinity - n;
                    });
                }, []),
                n = (function () {
                    let e = (0, o.e7)([R.Z], () => R.Z.getPrimaryActivity()),
                        t = null == e ? void 0 : e.application_id,
                        n = (0, j.N)(t);
                    return (0, o.cj)([G.Z, U.default, D.Z, F.Z], () => {
                        let i = (null == e ? void 0 : e.name) != null && null != t,
                            r = {
                                activities: [],
                                sameActivity: [],
                                online: [],
                                offline: [],
                            },
                            l = new Map();
                        for (let e of (i &&
                            null != t &&
                            null != n &&
                            n.length > 0 &&
                            n.forEach((e) => {
                                let t = e.author_id;
                                if (!G.Z.isFriend(t)) return;
                                let n = U.default.getUser(t);
                                null != n &&
                                    l.set(t, {
                                        user: n,
                                        activities: [],
                                        gameProfileEntry: e,
                                        nickname: G.Z.getNickname(t),
                                    });
                            }),
                        G.Z.getFriendIDs())) {
                            let n = U.default.getUser(e);
                            if (null == n) continue;
                            let s = D.Z.getStatus(e),
                                a = D.Z.getActivities(e),
                                o = G.Z.getNickname(e),
                                c = F.Z.getVoiceStateForUser(e),
                                u = (null == c ? void 0 : c.channelId) != null,
                                d = a.filter(
                                    (e) =>
                                        e.type === q.IIU.PLAYING ||
                                        e.type === q.IIU.LISTENING ||
                                        e.type === q.IIU.WATCHING ||
                                        e.type === q.IIU.STREAMING,
                                ),
                                p = d.filter((e) => e.application_id === t),
                                f = i && p.length > 0,
                                g = {
                                    user: n,
                                    activities: f ? p : d,
                                    nickname: o,
                                };
                            f
                                ? (r.sameActivity.push(g), l.delete(e))
                                : d.length > 0
                                  ? r.activities.push(g)
                                  : u
                                    ? r.activities.push(Q(V({}, g), { activities: a }))
                                    : s === q.Skl.ONLINE || s === q.Skl.IDLE || s === q.Skl.DND
                                      ? r.online.push(g)
                                      : r.offline.push(g);
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
                    }, [n, e, t]);
                })(),
                i = (0, o.e7)([R.Z], () => R.Z.getPrimaryActivity());
            return l.useMemo(() => {
                var r;
                return {
                    friendRequests: e,
                    suggestions: t,
                    activities: n.activities,
                    sameActivity: n.sameActivity,
                    online: n.online,
                    offline: n.offline,
                    currentActivityName: null != (r = null == i ? void 0 : i.name) ? r : "",
                };
            }, [e, t, n, i]);
        })(),
        S = (function (e) {
            let [t, n] = l.useState(""),
                [i, r] = $(t, e.friendRequests),
                [s, a] = $(t, e.suggestions),
                [o, c] = $(t, e.sameActivity),
                [u, d] = $(t, e.activities),
                [p, f] = $(t, e.online),
                [g, h] = $(t, e.offline),
                m = l.useCallback(() => {
                    n(""), r(), a(), c(), d(), f(), h();
                }, [r, a, c, d, f, h]);
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
                clearSearch: m,
            };
        })(_),
        { searchQuery: I, setSearchQuery: P, clearSearch: C } = S,
        Z = H(S, ["searchQuery", "setSearchQuery", "clearSearch"]),
        w = l.useCallback((e) => {
            N((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        k = l.useCallback(
            (0, s.debounce)(
                () => {
                    null == f || f("search_friends");
                },
                1000,
                {
                    leading: !0,
                    trailing: !1,
                },
            ),
            [f],
        ),
        A = l.useCallback(
            (e) => {
                var t;
                P(e), k(), null == (t = b.current) || t.scrollToTop();
            },
            [P, k],
        ),
        x = l.useCallback(() => {
            var e;
            C(), k(), null == (e = b.current) || e.scrollToTop();
        }, [C, k]),
        M = l.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await n.e("23087").then(n.bind(n, 29131));
                    return (t) => (0, r.jsx)(e, Q(V({}, t), { onClose: u }));
                }),
                    null == f || f("open_settings_modal");
            },
            [u, f],
        ),
        J = l.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("49078").then(n.bind(n, 539725));
                return (t) => (0, r.jsx)(e, V({}, t));
            }),
                null == f || f("open_friend_modal");
        }, [f]),
        K = l.useCallback(
            (e) => {
                let { section: t } = e,
                    n = "",
                    i = 0;
                switch (t) {
                    case 0:
                        (n = W.intl.string(W.t.fyA119)), (i = Z.friendRequests.length);
                        break;
                    case 1:
                        (n = _.currentActivityName), (i = Z.sameActivity.length);
                        break;
                    case 3:
                        (n = W.intl.string(W.t.qm9dSk)), (i = Z.suggestions.length);
                        break;
                    case 2:
                        (n = W.intl.string(W.t.TxqPQU)), (i = Z.activities.length);
                        break;
                    case 4:
                        (n = W.intl.string(W.t.WbGtnJ)), (i = Z.online.length);
                        break;
                    case 5:
                        (n = W.intl.string(W.t.Vv0abG)), (i = Z.offline.length);
                }
                let l = (3 === t || 0 === t) && i > 3,
                    s = O.includes(t);
                return (0, r.jsxs)(E.Z, {
                    className: z.section,
                    children: [
                        (0, r.jsx)(c.nn4, {
                            children: W.intl.format(W.t.UaqbkZ, {
                                title: n,
                                count: i,
                            }),
                        }),
                        (0, r.jsxs)(c.P3F, {
                            onClick: () => l && w(t),
                            "aria-hidden": !0,
                            className: l ? z.sectionCollapsible : void 0,
                            children: [
                                n,
                                " \u2014 ",
                                i,
                                l
                                    ? s
                                        ? (0, r.jsx)(c.Fbu, {
                                              size: "md",
                                              color: "currentColor",
                                              className: z.chevronIcon,
                                          })
                                        : (0, r.jsx)(c.CJ0, {
                                              size: "md",
                                              color: "currentColor",
                                              className: z.chevronIcon,
                                          })
                                    : null,
                            ],
                        }),
                    ],
                });
            },
            [
                _.currentActivityName,
                Z.friendRequests.length,
                Z.sameActivity.length,
                Z.suggestions.length,
                Z.activities.length,
                Z.online.length,
                Z.offline.length,
                O,
                w,
            ],
        ),
        Y = l.useCallback(
            (e) => {
                let t;
                return null ==
                    (t =
                        0 === e.section
                            ? Z.friendRequests[e.row]
                            : 1 === e.section
                              ? Z.sameActivity[e.row]
                              : 3 === e.section
                                ? Z.suggestions[e.row]
                                : 2 === e.section
                                  ? Z.activities[e.row]
                                  : 4 === e.section
                                    ? Z.online[e.row]
                                    : Z.offline[e.row]) || null == t.user
                    ? null
                    : (0, r.jsx)(
                          B,
                          Q(V({}, t), {
                              index: e.row,
                              closeParentPopout: u,
                              isSuggestion: 3 === e.section,
                              appContext: y,
                              onAction: f,
                              onFriendVisible: g,
                          }),
                          "".concat(e.section, ":").concat(t.user.id),
                      );
            },
            [Z, u, y, f, g],
        ),
        { showSuggestions: X } = (0, L.Z)(),
        ee = l.useMemo(() => {
            let e = X ? (O.includes(3) ? Math.min(3, Z.suggestions.length) : Z.suggestions.length) : 0;
            return [
                O.includes(0) ? Math.min(3, Z.friendRequests.length) : Z.friendRequests.length,
                Z.sameActivity.length,
                Z.activities.length,
                e,
                Z.online.length,
                Z.offline.length,
            ];
        }, [Z, O, X]),
        et = Object.values(Z).every((e) => 0 === e.length);
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            null != d
                ? (0, r.jsx)("div", {
                      className: z.header,
                      children: d(),
                  })
                : (0, r.jsxs)("div", {
                      className: z.header,
                      children: [
                          (0, r.jsx)(c.X6q, {
                              variant: "heading-lg/semibold",
                              children: W.intl.string(W.t.TdEu5e),
                          }),
                          (0, r.jsxs)("div", {
                              className: z.controlButtons,
                              children: [
                                  (0, r.jsx)(c.M0o, {
                                      tooltip: W.intl.string(W.t.w5uwoK),
                                      color: c.YX$.TERTIARY,
                                      icon: (0, r.jsx)(c.oLu, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                      className: z.controlButton,
                                      onClick: J,
                                  }),
                                  (0, r.jsx)(c.M0o, {
                                      tooltip: W.intl.string(W.t["3D5yo6"]),
                                      color: c.YX$.TERTIARY,
                                      icon: (0, r.jsx)(c.xhG, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                      className: z.controlButton,
                                      onClick: M,
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, r.jsx)("div", {
                className: z.searchContainer,
                children: (0, r.jsx)(c.E1j, {
                    query: I,
                    onChange: A,
                    onClear: x,
                    placeholder: W.intl.string(W.t["5h0QOD"]),
                    autoFocus: h,
                }),
            }),
            et
                ? (0, r.jsx)("div", {
                      className: z.emptyStateContainer,
                      children: (0, r.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: W.intl.string(W.t["7sW4h4"]),
                      }),
                  })
                : (0, r.jsx)(a.bG, {
                      navigator: v,
                      children: (0, r.jsx)(a.SJ, {
                          children: (e) => {
                              var { ref: t, role: n } = e,
                                  l = H(e, ["ref", "role"]);
                              return (0, r.jsx)(c.Wdt, {
                                  children: (e) =>
                                      (0, r.jsx)(
                                          c.aVo,
                                          V(
                                              {
                                                  innerRole: n,
                                                  innerAriaLabel: W.intl.string(W.t.TdEu5e),
                                                  ref: (e) => {
                                                      var n;
                                                      (b.current = e),
                                                          (t.current =
                                                              null != (n = null == e ? void 0 : e.getScrollerNode())
                                                                  ? n
                                                                  : null);
                                                  },
                                                  className: i,
                                                  sectionHeight: 40,
                                                  rowHeight: 42,
                                                  sidebarHeight: 0,
                                                  renderSection: K,
                                                  renderRow: Y,
                                                  sections: ee,
                                                  paddingTop: 4,
                                                  paddingBottom: 4,
                                              },
                                              l,
                                              e,
                                          ),
                                      ),
                              });
                          },
                      }),
                  }),
        ],
    });
});
function et(e) {
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
                (0, r.jsx)(ee, {
                    containerClassName: z.container,
                    listClassName: z.list,
                    closePopout: p,
                    autoFocus: !0,
                }),
            [p],
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
        },
    });
}
