n.d(t, {
    Zz: () => ec,
    lD: () => ed,
    xQ: () => er,
}),
    n(896048),
    n(321073),
    n(638769),
    n(733351);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    o = n.n(s),
    a = n(735438),
    u = n(837381),
    c = n(172218),
    d = n(311907),
    p = n(435371),
    g = n(397927),
    f = n(308368),
    h = n(308528),
    m = n(442433),
    O = n(49229),
    E = n(928039),
    A = n(833349),
    y = n(960076),
    N = n(397244),
    v = n(714114),
    I = n(729551),
    S = n(506326),
    b = n(485947),
    _ = n(193663),
    D = n(490427),
    T = n(545059),
    j = n(205184),
    P = n(474397),
    R = n(194085),
    C = n(111864),
    w = n(379078),
    G = n(704554),
    U = n(21119),
    x = n(854627),
    k = n(342296),
    F = n(616356),
    L = n(290863),
    M = n(994500),
    q = n(461213),
    V = n(287809),
    K = n(977997),
    Q = n(403362),
    z = n(348417),
    H = n(548922),
    B = n(857438),
    Y = n(256077),
    $ = n(652215),
    W = n(985018),
    J = n(760799);

function Z(e) {
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

function X(e, t) {
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

function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let et = g._3J.SIZE_32,
    en = [S.iq, S.tR, S.K7, S.sp, S.MK];
var er =
    (((r = {}).USER_CONTEXT_MENU = "user_context_menu"),
    (r.OPEN_DIRECT_MESSAGE = "open_direct_message"),
    (r.SEND_FRIEND_REQUEST = "send_friend_request"),
    (r.SEND_ACTIVITY_INVITE = "send_activity_invite"),
    (r.ASK_TO_JOIN = "ask_to_join"),
    (r.DECLINE_FRIEND_REQUEST = "decline_friend_request"),
    (r.ACCEPT_FRIEND_REQUEST = "accept_friend_request"),
    (r.CANCEL_FRIEND_REQUEST = "cancel_friend_request"),
    (r.OPEN_FRIEND_MODAL = "open_friend_modal"),
    (r.OPEN_SETTINGS_MODAL = "open_settings_modal"),
    (r.SEARCH_FRIENDS = "search_friends"),
    r);
let ei = l.memo((e) => {
    let {
            user: t,
            activities: r = [],
            gameProfileEntry: s,
            index: o,
            closeParentPopout: a,
            isSuggestion: p,
            relationshipType: E,
            appContext: b,
            nickname: T,
            onAction: j,
            onFriendVisible: w,
            friendGroupId: G,
            onGroupHover: U,
            onGroupHoverRemove: M,
            isDragDisabled: V = !1,
        } = e,
        K = t.id,
        {
            avatarDecorationSrc: Q,
            avatarSrc: z,
            eventHandlers: B,
        } = (0, x.A)({
            userId: K,
            size: et,
            animateOnHover: !0,
            guildId: null,
        }),
        Y = (0, u.rm)("".concat(o)),
        [ee, er] = l.useState(!1),
        [ei, el] = l.useState({}),
        { isDragging: es, drag: eo } = (0, H.YB)(K, G, V),
        { drop: ea } = (0, H.dx)(V),
        eu = null == G,
        { isOver: ec, drop: ed } = (0, H.Bw)(null != G ? G : "", K, V);
    l.useEffect(() => {
        if (null != G && ec)
            return (
                null == U || U(G, K),
                () => {
                    null == M || M(G, K);
                }
            );
    }, [ec, G, K, U, M]);
    let ep = r.filter((e) => e.type === $.$pd.PLAYING && (0, A.A)(e, $.jUm.JOIN)),
        eg = (0, d.yK)([q.A], () =>
            q.A.getActivities().filter((e) => e.type === $.$pd.PLAYING && (0, A.A)(e, $.jUm.JOIN)),
        ),
        { voiceChannel: ef } = (0, v.A)({
            userId: t.id,
        }),
        eh = (0, C.r)({
            user: t,
        }),
        {
            status: em,
            applicationStream: eO,
            isMobile: eE,
            newStatus: eA,
        } = (0, d.cf)([L.A, F.A], () => {
            let e = L.A.getStatus(t.id),
                n = F.A.getAnyStreamForUser(t.id),
                i = L.A.isMobileOnline(t.id),
                l = (0, y.A)(r) ? $.clD.STREAMING : e;
            return {
                status: e,
                applicationStream: n,
                isMobile: i,
                newStatus: l,
            };
        }, [t.id, r]),
        ey = eg.length > 0,
        eN = l.useCallback(
            (e) => {
                null == w || w(K, e, ey);
            },
            [w, K, ey],
        ),
        ev = (0, c.K)(eN),
        eI = l.useCallback(() => {
            er(!0);
        }, []),
        eS = l.useCallback(() => {
            er(!1);
        }, []),
        eb = l.useCallback(() => {
            if (null != s) {
                let e = s.traits,
                    t = X(Z({}, s), {
                        traits: e.slice(0, 3),
                    });
                return (0, i.jsx)(S.mG, {
                    location: S.N5.FRIENDS_POPOUT,
                    className: J.cV,
                    children: en.map((e, n) =>
                        (0, i.jsx)(
                            e,
                            {
                                entry: t,
                            },
                            n,
                        ),
                    ),
                });
            }
            if (
                !(0, N.A)({
                    activities: r,
                    status: em,
                    applicationStream: eO,
                    voiceChannel: ef,
                })
            )
                return null;
            let e = !(0, D.A)({
                activity:
                    null == r
                        ? void 0
                        : r.find((e) => {
                              let { type: t } = e;
                              return t === $.$pd.CUSTOM_STATUS;
                          }),
                user: t,
            });
            return (0, i.jsx)(I.A, {
                user: t,
                activities: r,
                applicationStream: eO,
                voiceChannel: ef,
                animateEmoji: !1,
                hideEmoji: e,
                hasQuest: !1,
            });
        }, [t, r, em, eO, ef, s]),
        e_ = l.useCallback(
            (e) => {
                null == j || j("user_context_menu", t.id),
                    (0, m.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(
                            n.bind(n, 668569),
                        );
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                X(Z({}, n), {
                                    user: t,
                                    appContext: b,
                                    friendGroupId: G,
                                }),
                            );
                    });
            },
            [t, b, j, G],
        ),
        eD = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == j || j("open_direct_message", t.id),
                    (0, P.A)(b, !0),
                    h.A.openPrivateChannel({
                        recipientIds: t.id,
                    }),
                    null != a && a();
            },
            [t.id, a, b, j],
        ),
        eT = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == j || j("send_friend_request", t.id),
                    O.A.addRelationship({
                        userId: t.id,
                        context: {
                            location: "friends-popout",
                        },
                    });
            },
            [t.id, j],
        ),
        ej = l.useCallback(
            async (e, n) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != n.application_id && "" !== n.application_id && !ei[n.application_id])
                )
                    try {
                        el((e) =>
                            X(Z({}, e), {
                                [n.application_id]: !0,
                            }),
                        ),
                            await f.A.sendActivityInviteUser({
                                type: $.xL.JOIN,
                                userId: t.id,
                                activity: n,
                                location: $.ThZ.FRIENDS_POPOUT,
                            }),
                            null == j || j("send_activity_invite", t.id),
                            el((e) =>
                                X(Z({}, e), {
                                    [n.application_id]: !1,
                                }),
                            );
                    } finally {
                        el((e) =>
                            X(Z({}, e), {
                                [n.application_id]: !1,
                            }),
                        );
                    }
            },
            [j, ei, t.id],
        ),
        eP = l.useCallback(
            async (e, n) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != n.application_id && "" !== n.application_id && !ei[n.application_id])
                )
                    try {
                        el((e) =>
                            X(Z({}, e), {
                                [n.application_id]: !0,
                            }),
                        ),
                            await f.A.sendActivityInviteUser({
                                type: $.xL.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: $.ThZ.FRIENDS_POPOUT,
                            }),
                            null == j || j("ask_to_join", t.id),
                            el((e) =>
                                X(Z({}, e), {
                                    [n.application_id]: !1,
                                }),
                            );
                    } finally {
                        el((e) =>
                            X(Z({}, e), {
                                [n.application_id]: !1,
                            }),
                        );
                    }
            },
            [j, ei, t.id],
        );
    return (0, i.jsx)(k.A, {
        targetElementRef: ev,
        user: t,
        position: "left",
        spacing: 16,
        children: (e, n) => {
            var r;
            let { isShown: l } = n;
            return (0, i.jsxs)("div", {
                className: J.nM,
                ref: (e) => {
                    (ev.current = e), eu && null != ea && ea(e), eu || null == ed || ed(e);
                },
                style: {
                    opacity: es ? 0.5 : 1,
                },
                children: [
                    (0, i.jsx)("div", {
                        ref: (e) => eo(e),
                        children: (0, i.jsx)(
                            _.A,
                            Z(
                                {
                                    innerClassName: J.bL,
                                    onContextMenu: e_,
                                    onMouseEnter: eI,
                                    onMouseLeave: eS,
                                    avatar: (0, i.jsx)(
                                        g.euF,
                                        X(Z({}, B), {
                                            size: et,
                                            src: z,
                                            isMobile: eE,
                                            isTyping: !1,
                                            status: eA,
                                            className: J.my,
                                            "aria-label": t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: Q,
                                        }),
                                    ),
                                    name: (0, i.jsx)("span", {
                                        className: J.Xh,
                                        children: null != (r = null != T ? T : t.globalName) ? r : t.username,
                                    }),
                                    subText: eb(),
                                    selected: l,
                                    nameplate: eh,
                                    hovered: ee,
                                },
                                e,
                                Y,
                            ),
                        ),
                    }),
                    (0, i.jsxs)(R.Ay, {
                        className: J.S3,
                        children: [
                            E === $.eA$.PENDING_INCOMING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(R.qv, {
                                              label: W.intl.string(W.t.MMlhsr),
                                              icon: g.A9s,
                                              onClick: (e) => {
                                                  e.preventDefault(),
                                                      e.stopPropagation(),
                                                      O.A.addRelationship({
                                                          userId: t.id,
                                                          context: {
                                                              location: "friends-popout",
                                                          },
                                                      }),
                                                      null == j || j("accept_friend_request", t.id);
                                              },
                                          }),
                                          (0, i.jsx)(R.qv, {
                                              label: W.intl.string(W.t.ytCpKs),
                                              icon: g.PGe,
                                              onClick: (e) => {
                                                  e.preventDefault(),
                                                      e.stopPropagation(),
                                                      O.A.removeRelationship(t.id, {
                                                          location: "friends-popout",
                                                      }),
                                                      null == j || j("decline_friend_request", t.id);
                                              },
                                          }),
                                      ],
                                  })
                                : E === $.eA$.PENDING_OUTGOING
                                  ? (0, i.jsx)(R.qv, {
                                        label: W.intl.string(W.t["bTfA//"]),
                                        icon: g.lI8,
                                        onClick: (e) => {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                O.A.cancelFriendRequest(t.id, {
                                                    location: "friends-popout",
                                                }),
                                                null == j || j("cancel_friend_request", t.id);
                                        },
                                    })
                                  : p
                                    ? (0, i.jsx)(R.qv, {
                                          label: W.intl.string(W.t.w5uwoI),
                                          icon: g.Rvf,
                                          onClick: eT,
                                      })
                                    : null,
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ep.map((e) =>
                                        (0, i.jsx)(
                                            R.qv,
                                            {
                                                label: ei[e.application_id]
                                                    ? W.intl.string(W.t["8BEiNn"])
                                                    : W.intl.string(W.t.OKsSCR),
                                                icon: ei[e.application_id] ? g.A9s : g.E7M,
                                                onClick: (t) => eP(t, e),
                                            },
                                            e.application_id,
                                        ),
                                    ),
                                    eg.map((e) => {
                                        var n;
                                        return (0, i.jsx)(
                                            R.qv,
                                            {
                                                label: ei[e.application_id]
                                                    ? W.intl.string(W.t["8BEiNn"])
                                                    : W.intl.formatToPlainString(W.t["KHLo+F"], {
                                                          channel: null != (n = t.globalName) ? n : t.username,
                                                          game: e.name,
                                                      }),
                                                icon: ei[e.application_id] ? g.A9s : g.DpX,
                                                onClick: (t) => ej(t, e),
                                            },
                                            e.application_id,
                                        );
                                    }),
                                ],
                            }),
                            E !== $.eA$.PENDING_INCOMING &&
                                E !== $.eA$.PENDING_OUTGOING &&
                                (0, i.jsx)(R.qv, {
                                    label: W.intl.string(W.t["g33r/P"]),
                                    icon: g.oyn,
                                    onClick: eD,
                                }),
                            (0, i.jsx)(R.qv, {
                                label: W.intl.string(W.t["UKOtz+"]),
                                icon: g.jNK,
                                onClick: e_,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
});

function el(e) {
    let {
            groupId: t,
            groupName: r,
            displayText: s,
            isCollapsed: a,
            canCollapse: u,
            onToggle: c,
            position: d,
            onReorder: p,
            isHovered: f,
            isDragDisabled: h = !1,
        } = e,
        { isOver: O, drop: E } = (0, H.pD)(t, h),
        { isDragging: A, dragSourcePosition: y, drag: N, drop: v } = (0, H.al)(t, d, p, h),
        I = l.useCallback(
            (e) => {
                (0, m.L3)(e, async () => {
                    let { default: e } = await n.e("97717").then(n.bind(n, 607956));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            X(Z({}, n), {
                                groupId: t,
                                groupName: r,
                            }),
                        );
                });
            },
            [t, r],
        ),
        S = l.useCallback(
            (e) => {
                E(e), v(e), N(e);
            },
            [E, v, N],
        );
    return (0, i.jsx)(b.A, {
        className: o()(J.uW, {
            [J.Ke]: O || (null != y && y !== d) || f,
            [J.cB]: A,
        }),
        children: (0, i.jsx)("div", {
            ref: S,
            onContextMenu: I,
            children: (0, i.jsxs)(g.DUT, {
                onClick: () => u && c(),
                "aria-hidden": !0,
                className: u ? J.Ws : void 0,
                children: [
                    s,
                    u
                        ? a
                            ? (0, i.jsx)(g._BQ, {
                                  size: "md",
                                  color: "currentColor",
                                  className: J.t4,
                              })
                            : (0, i.jsx)(g.abt, {
                                  size: "md",
                                  color: "currentColor",
                                  className: J.t4,
                              })
                        : null,
                ],
            }),
        }),
    });
}

function es(e) {
    let { displayText: t, isCollapsed: n, canCollapse: r, onToggle: l } = e,
        { isOver: s, drop: o } = (0, H.dx)();
    return (0, i.jsx)(b.A, {
        className: J.uW,
        children: (0, i.jsx)("div", {
            ref: o,
            style: {
                backgroundColor: s ? "var(--interactive-background-hover)" : void 0,
                transition: "background-color 0.1s",
            },
            children: (0, i.jsxs)(g.DUT, {
                onClick: () => r && l(),
                "aria-hidden": !0,
                className: r ? J.Ws : void 0,
                children: [
                    t,
                    r
                        ? n
                            ? (0, i.jsx)(g._BQ, {
                                  size: "md",
                                  color: "currentColor",
                                  className: J.t4,
                              })
                            : (0, i.jsx)(g.abt, {
                                  size: "md",
                                  color: "currentColor",
                                  className: J.t4,
                              })
                        : null,
                ],
            }),
        }),
    });
}

function eo(e) {
    let { user: t, activities: n, nickname: r } = e;
    return [t.username, t.globalName, r, ...n.map((e) => e.name)].filter(Q.Vq);
}
ei.displayName = "FriendRow";
let ea = {
    searchType: w.n.FUZZY,
    searchStringGenerator: eo,
    sortType: w.r.JARO_WINKLER,
    throttleMs: 100,
};

function eu(e, t) {
    let [n, r] = l.useState(t),
        i = l.useCallback(() => r(t), [t]);
    return (0, G.RT)(e, t, r, ea), [n, i];
}
let ec = l.memo(function (e) {
    let t,
        r,
        s,
        o,
        c,
        f,
        h,
        O,
        {
            containerClassName: A,
            listClassName: y,
            closePopout: N,
            renderHeader: v,
            onAction: I,
            onFriendVisible: S,
            autoFocus: b = !1,
            appContext: _ = $.BRT.APP,
        } = e,
        D =
            ((t = (0, B.y)()),
            (r = (0, d.yK)([M.A, V.default, L.A], () => {
                let e = [];
                for (let [t, n] of M.A.getMutableRelationships().entries()) {
                    if (n !== $.eA$.PENDING_INCOMING && n !== $.eA$.PENDING_OUTGOING) continue;
                    let r = V.default.getUser(t);
                    if (null != r) {
                        let i = M.A.getSince(t),
                            l = null != i ? new Date(i).getTime() : 0;
                        e.push({
                            user: r,
                            activities: L.A.getActivities(t),
                            timestamp: l,
                            nickname: M.A.getNickname(t),
                            relationshipType: n,
                        });
                    }
                }
                return e.sort((e, t) => t.timestamp - e.timestamp), e;
            })),
            (s = (0, d.yK)([U.A, V.default, L.A, M.A, K.A], () => {
                let e = U.A.getUserAffinitiesMap(),
                    t = [];
                for (let [n, r] of e.entries()) {
                    let e = M.A.getRelationshipType(n);
                    if (
                        M.A.isFriend(n) ||
                        r.communicationProbability <= 0.1634 ||
                        e === $.eA$.PENDING_INCOMING ||
                        e === $.eA$.PENDING_OUTGOING
                    )
                        continue;
                    let i = V.default.getUser(n);
                    if (null != i) {
                        let e = L.A.getActivities(n),
                            l = K.A.getVoiceStateForUser(n),
                            s = (null == l ? void 0 : l.channelId) != null;
                        t.push({
                            user: i,
                            activities: e,
                            affinity: r.communicationProbability,
                            hasActivity: e.length > 0 || s,
                            nickname: M.A.getNickname(n),
                        });
                    }
                }
                return t.sort((e, t) => {
                    let n = 1e3 * !!e.hasActivity + e.affinity;
                    return 1e3 * !!t.hasActivity + t.affinity - n;
                });
            }, [])),
            (c = null == (o = (0, d.bG)([q.A], () => q.A.getPrimaryActivity())) ? void 0 : o.application_id),
            (f = (0, j.s)(c)),
            (h = (0, d.cf)([M.A, V.default, L.A, K.A], () => {
                let e = (null == o ? void 0 : o.name) != null && null != c,
                    t = {
                        activities: [],
                        sameActivity: [],
                        online: [],
                        offline: [],
                    },
                    n = new Map();
                for (let r of (e &&
                    null != c &&
                    null != f &&
                    f.length > 0 &&
                    f.forEach((e) => {
                        let t = e.author_id;
                        if (!M.A.isFriend(t)) return;
                        let r = V.default.getUser(t);
                        null != r &&
                            n.set(t, {
                                user: r,
                                activities: [],
                                gameProfileEntry: e,
                                nickname: M.A.getNickname(t),
                            });
                    }),
                M.A.getFriendIDs())) {
                    let i = V.default.getUser(r);
                    if (null == i) continue;
                    let l = L.A.getStatus(r),
                        s = L.A.getActivities(r),
                        o = M.A.getNickname(r),
                        a = K.A.getVoiceStateForUser(r),
                        u = (null == a ? void 0 : a.channelId) != null,
                        d = s.filter(
                            (e) =>
                                e.type === $.$pd.PLAYING ||
                                e.type === $.$pd.LISTENING ||
                                e.type === $.$pd.WATCHING ||
                                e.type === $.$pd.STREAMING,
                        ),
                        p = d.filter((e) => e.application_id === c),
                        g = e && p.length > 0,
                        f = {
                            user: i,
                            activities: g ? p : d,
                            nickname: o,
                        };
                    g
                        ? (t.sameActivity.push(f), n.delete(r))
                        : d.length > 0
                          ? t.activities.push(f)
                          : u
                            ? t.activities.push(
                                  X(Z({}, f), {
                                      activities: s,
                                  }),
                              )
                            : l === $.clD.ONLINE || l === $.clD.IDLE || l === $.clD.DND
                              ? t.online.push(f)
                              : t.offline.push(f);
                }
                let r = (e, t) => {
                    var n, r;
                    let i = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                        l = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
                    return i.localeCompare(l);
                };
                if ((t.sameActivity.sort(r), n.size > 0)) {
                    let e = Array.from(n.values()).sort(r);
                    t.sameActivity.push(...e);
                }
                return t.activities.sort(r), t.online.sort(r), t.offline.sort(r), t;
            }, [f, o, c])),
            (O = (0, d.bG)([q.A], () => q.A.getPrimaryActivity())),
            l.useMemo(() => {
                var e;
                return {
                    groups: t,
                    friendRequests: r,
                    suggestions: s,
                    activities: h.activities,
                    sameActivity: h.sameActivity,
                    online: h.online,
                    offline: h.offline,
                    currentActivityName: null != (e = null == O ? void 0 : O.name) ? e : "",
                };
            }, [t, r, s, h, O])),
        P = (function (e) {
            let [t, n] = l.useState(""),
                [r, i] = eu(t, e.friendRequests),
                [s, o] = eu(t, e.suggestions),
                [a, u] = eu(t, e.sameActivity),
                [c, d] = eu(t, e.activities),
                [p, g] = eu(t, e.online),
                [f, h] = eu(t, e.offline),
                m = l.useMemo(() => {
                    if ("" === t.trim()) return e.groups;
                    let n = t.toLowerCase();
                    return e.groups
                        .map((e) => {
                            let t = e.users.filter((e) => eo(e).some((e) => null != e && e.toLowerCase().includes(n)));
                            return X(Z({}, e), {
                                users: t,
                            });
                        })
                        .filter((e) => e.users.length > 0);
                }, [t, e.groups]),
                O = l.useCallback(() => {
                    n(""), i(), o(), u(), d(), g(), h();
                }, [i, o, u, d, g, h]);
            return {
                groups: m,
                friendRequests: r,
                suggestions: s,
                sameActivity: a,
                activities: c,
                online: p,
                offline: f,
                currentActivityName: e.currentActivityName,
                searchQuery: t,
                setSearchQuery: n,
                clearSearch: O,
            };
        })(D),
        { searchQuery: R, setSearchQuery: C, clearSearch: w } = P,
        G = ee(P, ["searchQuery", "setSearchQuery", "clearSearch"]),
        x = R.trim().length > 0,
        k = l.useMemo(() => {
            let e = G.groups.length;
            return {
                FRIEND_REQUESTS: 0,
                SAME_ACTIVITY: e + 1,
                ACTIVITIES: e + 2,
                SUGGESTIONS: e + 3,
                ONLINE: e + 4,
                OFFLINE: e + 5,
            };
        }, [G.groups.length]),
        [F, Q] = l.useState([k.FRIEND_REQUESTS]),
        { hoveredGroupId: H, handleGroupHover: et, handleGroupHoverRemove: en } = (0, Y.p)();
    l.useEffect(() => {
        let e = Array.from(
            {
                length: G.groups.length,
            },
            (e, t) => t + 1,
        );
        Q((t) => [...t, ...e]);
    }, []);
    let er = l.useRef(null),
        ea = (0, E.A)("friends-popout", er),
        ec = l.useCallback((e) => {
            Q((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        ed = l.useCallback(
            (e) => {
                if (2 !== e.length) return;
                let [t, n] = e,
                    r = G.groups.map((e) => e.id),
                    i = r.indexOf(t),
                    l = r.indexOf(n);
                if (-1 === i || -1 === l) return;
                let s = [...r];
                s.splice(i, 1), s.splice(l, 0, t), T.A.reorderGroups(s);
            },
            [G.groups],
        ),
        ep = l.useCallback(
            (0, a.debounce)(
                () => {
                    null == I || I("search_friends");
                },
                1e3,
                {
                    leading: !0,
                    trailing: !1,
                },
            ),
            [I],
        ),
        eg = l.useCallback(
            (e) => {
                var t;
                C(e), ep(), null == (t = er.current) || t.scrollToTop();
            },
            [C, ep],
        ),
        ef = l.useCallback(() => {
            var e;
            w(), ep(), null == (e = er.current) || e.scrollToTop();
        }, [w, ep]),
        eh = l.useCallback(
            (e) => {
                (0, m.L3)(e, async () => {
                    let { default: e } = await n.e("83253").then(n.bind(n, 337588));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            X(Z({}, t), {
                                onClose: N,
                            }),
                        );
                }),
                    null == I || I("open_settings_modal");
            },
            [N, I],
        ),
        em = l.useCallback(() => {
            (0, g.mMO)(async () => {
                let { default: e } = await n.e("27084").then(n.bind(n, 662183));
                return (t) => (0, i.jsx)(e, Z({}, t));
            }),
                null == I || I("open_friend_modal");
        }, [I]),
        eO = l.useCallback(
            (e) => {
                var t;
                let { section: n } = e,
                    r = "",
                    l = 0,
                    s = !1,
                    o = "",
                    a = null;
                if (n > k.FRIEND_REQUESTS && n < k.SAME_ACTIVITY) {
                    if (null != (a = G.groups[n - 1])) {
                        let e = a.users.filter((e) => {
                                let t = L.A.getStatus(e.user.id);
                                return t === $.clD.ONLINE || t === $.clD.IDLE || t === $.clD.DND;
                            }).length,
                            t = a.users.length;
                        (r = a.name),
                            (l = t),
                            (o = "".concat(r, " — ").concat(e, "/").concat(t, " online")),
                            0 === e && 0 === t && (o = "".concat(r, " — 0 online")),
                            (s = !0);
                    }
                } else
                    switch (n) {
                        case k.FRIEND_REQUESTS:
                            (r = W.intl.string(W.t.fyA115)),
                                (l = G.friendRequests.length),
                                (o = "".concat(r, " — ").concat(l));
                            break;
                        case k.SAME_ACTIVITY:
                            (r = D.currentActivityName),
                                (l = G.sameActivity.length),
                                (o = "".concat(r, " — ").concat(l));
                            break;
                        case k.SUGGESTIONS:
                            (r = W.intl.string(W.t.qm9dSj)),
                                (l = G.suggestions.length),
                                (o = "".concat(r, " — ").concat(l));
                            break;
                        case k.ACTIVITIES:
                            (r = W.intl.string(W.t.TxqPQR)),
                                (l = G.activities.length),
                                (o = "".concat(r, " — ").concat(l));
                            break;
                        case k.ONLINE:
                            (r = W.intl.string(W.t.WbGtnH)), (l = G.online.length), (o = "".concat(r, " — ").concat(l));
                            break;
                        case k.OFFLINE:
                            (r = W.intl.string(W.t.Vv0abJ)),
                                (l = G.offline.length),
                                (o = "".concat(r, " — ").concat(l));
                    }
                let u = s || ((n === k.SUGGESTIONS || n === k.FRIEND_REQUESTS) && l > 3),
                    c = F.includes(n);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.AC4, {
                            children: W.intl.format(W.t.Uaqbke, {
                                title: r,
                                count: l,
                            }),
                        }),
                        s
                            ? (0, i.jsx)(el, {
                                  groupId: null != (t = null == a ? void 0 : a.id) ? t : "",
                                  groupName: r,
                                  displayText: o,
                                  isCollapsed: c,
                                  canCollapse: u,
                                  onToggle: () => ec(n),
                                  position: n,
                                  onReorder: ed,
                                  isHovered: H === (null == a ? void 0 : a.id),
                                  isDragDisabled: x,
                              })
                            : (0, i.jsx)(es, {
                                  displayText: o,
                                  isCollapsed: c,
                                  canCollapse: u,
                                  onToggle: () => ec(n),
                              }),
                    ],
                });
            },
            [
                k,
                D.currentActivityName,
                G.groups,
                G.friendRequests.length,
                G.sameActivity.length,
                G.suggestions.length,
                G.activities.length,
                G.online.length,
                G.offline.length,
                F,
                ec,
                ed,
                H,
                x,
            ],
        ),
        eE = l.useCallback(
            (e) => {
                let t, n;
                if (e.section > k.FRIEND_REQUESTS && e.section < k.SAME_ACTIVITY) {
                    let r = G.groups[e.section - 1];
                    if (null != r) {
                        let i = F.includes(e.section)
                            ? r.users.filter((e) => {
                                  let t = L.A.getStatus(e.user.id);
                                  return t === $.clD.ONLINE || t === $.clD.IDLE || t === $.clD.DND;
                              })
                            : r.users;
                        if (0 === i.length) return null;
                        (t = i[e.row]), (n = r.id);
                    }
                } else
                    t =
                        e.section === k.FRIEND_REQUESTS
                            ? G.friendRequests[e.row]
                            : e.section === k.SAME_ACTIVITY
                              ? G.sameActivity[e.row]
                              : e.section === k.SUGGESTIONS
                                ? G.suggestions[e.row]
                                : e.section === k.ACTIVITIES
                                  ? G.activities[e.row]
                                  : e.section === k.ONLINE
                                    ? G.online[e.row]
                                    : G.offline[e.row];
                return null == t || null == t.user
                    ? null
                    : (0, i.jsx)(
                          ei,
                          X(Z({}, t), {
                              index: e.row,
                              closeParentPopout: N,
                              isSuggestion: e.section === k.SUGGESTIONS,
                              appContext: _,
                              onAction: I,
                              onFriendVisible: S,
                              friendGroupId: n,
                              onGroupHover: et,
                              onGroupHoverRemove: en,
                              isDragDisabled: x,
                          }),
                          "".concat(e.section, ":").concat(t.user.id),
                      );
            },
            [k, G, F, N, _, I, S, et, en, x],
        ),
        { showSuggestions: eA } = (0, z.A)(),
        ey = l.useMemo(() => {
            let e = [],
                t = F.includes(k.FRIEND_REQUESTS) ? Math.min(3, G.friendRequests.length) : G.friendRequests.length;
            e.push(t);
            for (let t = 0; t < G.groups.length; t++) {
                let n = G.groups[t],
                    r = F.includes(t + 1)
                        ? n.users.filter((e) => {
                              let t = L.A.getStatus(e.user.id);
                              return t === $.clD.ONLINE || t === $.clD.IDLE || t === $.clD.DND;
                          }).length
                        : n.users.length;
                e.push(Math.max(r, 1));
            }
            let n = eA ? (F.includes(k.SUGGESTIONS) ? Math.min(3, G.suggestions.length) : G.suggestions.length) : 0;
            return e.push(G.sameActivity.length, G.activities.length, n, G.online.length, G.offline.length), e;
        }, [k, G, F, eA]),
        eN = Object.values(G).every((e) => 0 === e.length);
    return (0, i.jsxs)("div", {
        className: A,
        children: [
            null != v
                ? (0, i.jsx)("div", {
                      className: J.wx,
                      children: v(),
                  })
                : (0, i.jsxs)("div", {
                      className: J.wx,
                      children: [
                          (0, i.jsx)(g.Heading, {
                              variant: "heading-lg/semibold",
                              children: W.intl.string(W.t.TdEu5X),
                          }),
                          (0, i.jsxs)("div", {
                              className: J.xv,
                              children: [
                                  (0, i.jsx)(p.m_, {
                                      text: W.intl.string(W.t.w5uwoI),
                                      children: (0, i.jsx)(g.K0, {
                                          "aria-label": W.intl.string(W.t.w5uwoI),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: g.Rvf,
                                          onClick: em,
                                      }),
                                  }),
                                  (0, i.jsx)(p.m_, {
                                      text: W.intl.string(W.t["3D5yo/"]),
                                      children: (0, i.jsx)(g.K0, {
                                          "aria-label": W.intl.string(W.t["3D5yo/"]),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: g.jNK,
                                          onClick: eh,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, i.jsx)("div", {
                className: J.MT,
                children: (0, i.jsx)(g.IWV, {
                    query: R,
                    onChange: eg,
                    onClear: ef,
                    placeholder: W.intl.string(W.t["5h0QOP"]),
                    autoFocus: b,
                }),
            }),
            eN
                ? (0, i.jsx)("div", {
                      className: J.y7,
                      children: (0, i.jsx)(g.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: W.intl.string(W.t["7sW4h1"]),
                      }),
                  })
                : (0, i.jsx)(u.hD, {
                      navigator: ea,
                      children: (0, i.jsx)(u.PR, {
                          children: (e) => {
                              let { ref: t, role: n } = e,
                                  r = ee(e, ["ref", "role"]);
                              return (0, i.jsx)(g.skg, {
                                  children: (e) =>
                                      (0, i.jsx)(
                                          g.B8B,
                                          Z(
                                              {
                                                  innerRole: n,
                                                  innerAriaLabel: W.intl.string(W.t.TdEu5X),
                                                  ref: (e) => {
                                                      var n;
                                                      (er.current = e),
                                                          (t.current =
                                                              null != (n = null == e ? void 0 : e.getScrollerNode())
                                                                  ? n
                                                                  : null);
                                                  },
                                                  className: y,
                                                  sectionHeight: 40,
                                                  rowHeight: 42,
                                                  sidebarHeight: 0,
                                                  renderSection: eO,
                                                  renderRow: eE,
                                                  sections: ey,
                                                  paddingTop: 4,
                                                  paddingBottom: 4,
                                              },
                                              r,
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

function ed(e) {
    let { onOpen: t, onClose: n, children: r, popoutPosition: s, popoutAlign: o } = e,
        [a, u] = l.useState(!1),
        c = l.useRef(null),
        d = l.useCallback(() => {
            u(!1), null == n || n();
        }, [n]),
        p = l.useCallback(() => {
            u((e) => {
                let r = !e;
                return r ? null == t || t() : null == n || n(), r;
            });
        }, [n, t]),
        f = l.useCallback(
            () =>
                (0, i.jsx)(ec, {
                    containerClassName: J.kL,
                    listClassName: J.p_,
                    closePopout: d,
                    autoFocus: !0,
                }),
            [d],
        );
    return (0, i.jsx)(g.YNO, {
        targetElementRef: c,
        animation: g.YNO.Animation.NONE,
        position: s,
        align: o,
        autoInvert: !1,
        shouldShow: a,
        onRequestClose: d,
        renderPopout: f,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return r(p, n, e, c);
        },
    });
}
