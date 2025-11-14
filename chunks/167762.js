n.d(t, {
    Or: () => ed,
    r1: () => ec,
    sG: () => er,
}),
    n(388685),
    n(539854),
    n(642613),
    n(781311);
var r,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    a = n(392711),
    u = n(91192),
    c = n(907331),
    d = n(442837),
    p = n(681715),
    g = n(481060),
    f = n(278323),
    h = n(493683),
    O = n(239091),
    m = n(194359),
    E = n(724757),
    I = n(620662),
    S = n(420660),
    N = n(326255),
    y = n(956221),
    v = n(771173),
    b = n(297781),
    _ = n(82295),
    P = n(554300),
    j = n(558602),
    C = n(313426),
    D = n(567409),
    Z = n(887413),
    T = n(373662),
    R = n(850020),
    G = n(886118),
    U = n(301801),
    w = n(752048),
    k = n(518950),
    A = n(456077),
    x = n(199902),
    F = n(158776),
    L = n(699516),
    M = n(885110),
    q = n(594174),
    V = n(979651),
    z = n(823379),
    Q = n(151459),
    H = n(109197),
    W = n(605591),
    Y = n(210160),
    J = n(981631),
    K = n(388032),
    B = n(712103);
function X(e) {
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
function $(e, t) {
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
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let et = g.EFr.SIZE_32,
    en = [b.OV, b.wO, b.f, b.v1, b.pQ];
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
            appContext: _,
            nickname: C,
            onAction: D,
            onFriendVisible: G,
            friendGroupId: U,
            onGroupHover: w,
            onGroupHoverRemove: L,
            isDragDisabled: q = !1,
        } = e,
        V = t.id,
        {
            avatarDecorationSrc: z,
            avatarSrc: Q,
            eventHandlers: W,
        } = (0, k.Z)({
            userId: V,
            size: et,
            animateOnHover: !0,
            guildId: null,
        }),
        Y = (0, u.JA)("".concat(o)),
        [ee, er] = l.useState(!1),
        [ei, el] = l.useState({}),
        { isDragging: es, drag: eo } = (0, H.HQ)(V, U, q),
        { drop: ea } = (0, H.wO)(q),
        eu = null == U,
        { isOver: ec, drop: ed } = (0, H.Yf)(null != U ? U : "", V, q);
    l.useEffect(() => {
        if (null != U && ec)
            return (
                null == w || w(U, V),
                () => {
                    null == L || L(U, V);
                }
            );
    }, [ec, U, V, w, L]);
    let ep = r.filter((e) => e.type === J.IIU.PLAYING && (0, I.Z)(e, J.xjy.JOIN)),
        eg = (0, d.Wu)([M.Z], () =>
            M.Z.getActivities().filter((e) => e.type === J.IIU.PLAYING && (0, I.Z)(e, J.xjy.JOIN)),
        ),
        { voiceChannel: ef } = (0, y.Z)({ userId: t.id }),
        eh = (0, R.K)({ user: t }),
        {
            status: eO,
            applicationStream: em,
            isMobile: eE,
            newStatus: eI,
        } = (0, d.cj)([F.Z, x.Z], () => {
            let e = F.Z.getStatus(t.id),
                n = x.Z.getAnyStreamForUser(t.id),
                i = F.Z.isMobileOnline(t.id),
                l = (0, S.Z)(r) ? J.Skl.STREAMING : e;
            return {
                status: e,
                applicationStream: n,
                isMobile: i,
                newStatus: l,
            };
        }, [t.id, r]),
        eS = eg.length > 0,
        eN = l.useCallback(
            (e) => {
                null == G || G(V, e, eS);
            },
            [G, V, eS],
        ),
        ey = (0, c.O)(eN),
        ev = l.useCallback(() => {
            er(!0);
        }, []),
        eb = l.useCallback(() => {
            er(!1);
        }, []),
        e_ = l.useCallback(() => {
            if (null != s) {
                let e = s.traits,
                    t = $(X({}, s), { traits: e.slice(0, 3) });
                return (0, i.jsx)(b.Gk, {
                    location: b.Gt.FRIENDS_POPOUT,
                    className: B.badgesContainer,
                    children: en.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                });
            }
            if (
                !(0, N.Z)({
                    activities: r,
                    status: eO,
                    applicationStream: em,
                    voiceChannel: ef,
                })
            )
                return null;
            let e = !(0, j.Z)({
                activity:
                    null == r
                        ? void 0
                        : r.find((e) => {
                              let { type: t } = e;
                              return t === J.IIU.CUSTOM_STATUS;
                          }),
                user: t,
            });
            return (0, i.jsx)(v.Z, {
                location: "FriendsPopout",
                user: t,
                activities: r,
                applicationStream: em,
                voiceChannel: ef,
                animateEmoji: !1,
                hideEmoji: e,
                hasQuest: !1,
            });
        }, [t, r, eO, em, ef, s]),
        eP = l.useCallback(
            (e) => {
                null == D || D("user_context_menu", t.id),
                    (0, O.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("74820")]).then(
                            n.bind(n, 881351),
                        );
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                $(X({}, n), {
                                    user: t,
                                    appContext: _,
                                    friendGroupId: U,
                                }),
                            );
                    });
            },
            [t, _, D, U],
        ),
        ej = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == D || D("open_direct_message", t.id),
                    (0, Z.i)(_, !0),
                    h.Z.openPrivateChannel({ recipientIds: t.id }),
                    null != a && a();
            },
            [t.id, a, _, D],
        ),
        eC = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == D || D("send_friend_request", t.id),
                    m.Z.addRelationship({
                        userId: t.id,
                        context: { location: "friends-popout" },
                    });
            },
            [t.id, D],
        ),
        eD = l.useCallback(
            async (e, n) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != n.application_id && "" !== n.application_id && !ei[n.application_id])
                )
                    try {
                        el((e) => $(X({}, e), { [n.application_id]: !0 })),
                            await f.Z.sendActivityInviteUser({
                                type: J.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: J.Sbl.FRIENDS_POPOUT,
                            }),
                            null == D || D("send_activity_invite", t.id),
                            el((e) => $(X({}, e), { [n.application_id]: !1 }));
                    } finally {
                        el((e) => $(X({}, e), { [n.application_id]: !1 }));
                    }
            },
            [D, ei, t.id],
        ),
        eZ = l.useCallback(
            async (e, n) => {
                if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != n.application_id && "" !== n.application_id && !ei[n.application_id])
                )
                    try {
                        el((e) => $(X({}, e), { [n.application_id]: !0 })),
                            await f.Z.sendActivityInviteUser({
                                type: J.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: J.Sbl.FRIENDS_POPOUT,
                            }),
                            null == D || D("ask_to_join", t.id),
                            el((e) => $(X({}, e), { [n.application_id]: !1 }));
                    } finally {
                        el((e) => $(X({}, e), { [n.application_id]: !1 }));
                    }
            },
            [D, ei, t.id],
        );
    return (0, i.jsx)(A.Z, {
        targetElementRef: ey,
        user: t,
        position: "left",
        spacing: 16,
        children: (e, n) => {
            var r;
            let { isShown: l } = n;
            return (0, i.jsxs)("div", {
                className: B.row,
                ref: (e) => {
                    (ey.current = e), eu && null != ea && ea(e), eu || null == ed || ed(e);
                },
                style: { opacity: es ? 0.5 : 1 },
                children: [
                    (0, i.jsx)("div", {
                        ref: (e) => eo(e),
                        children: (0, i.jsx)(
                            P.Z,
                            X(
                                {
                                    innerClassName: B.rowInner,
                                    onContextMenu: eP,
                                    onMouseEnter: ev,
                                    onMouseLeave: eb,
                                    avatar: (0, i.jsx)(
                                        g.qEK,
                                        $(X({}, W), {
                                            size: et,
                                            src: Q,
                                            isMobile: eE,
                                            isTyping: !1,
                                            status: eI,
                                            className: B.avatar,
                                            "aria-label": t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: z,
                                        }),
                                    ),
                                    name: (0, i.jsx)("span", {
                                        className: B.username,
                                        children: null != (r = null != C ? C : t.globalName) ? r : t.username,
                                    }),
                                    subText: e_(),
                                    selected: l,
                                    nameplate: eh,
                                    hovered: ee,
                                },
                                e,
                                Y,
                            ),
                        ),
                    }),
                    (0, i.jsxs)(T.ZP, {
                        className: B.hoverBar,
                        children: [
                            E === J.OGo.PENDING_INCOMING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(T.sF, {
                                              label: K.intl.string(K.t.MMlhsr),
                                              icon: g.dz2,
                                              onClick: (e) => {
                                                  e.preventDefault(),
                                                      e.stopPropagation(),
                                                      m.Z.addRelationship({
                                                          userId: t.id,
                                                          context: { location: "friends-popout" },
                                                      }),
                                                      null == D || D("accept_friend_request", t.id);
                                              },
                                          }),
                                          (0, i.jsx)(T.sF, {
                                              label: K.intl.string(K.t.ytCpKs),
                                              icon: g.Dio,
                                              onClick: (e) => {
                                                  e.preventDefault(),
                                                      e.stopPropagation(),
                                                      m.Z.removeRelationship(t.id, { location: "friends-popout" }),
                                                      null == D || D("decline_friend_request", t.id);
                                              },
                                          }),
                                      ],
                                  })
                                : E === J.OGo.PENDING_OUTGOING
                                  ? (0, i.jsx)(T.sF, {
                                        label: K.intl.string(K.t["bTfA//"]),
                                        icon: g.iHX,
                                        onClick: (e) => {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                m.Z.cancelFriendRequest(t.id, { location: "friends-popout" }),
                                                null == D || D("cancel_friend_request", t.id);
                                        },
                                    })
                                  : p
                                    ? (0, i.jsx)(T.sF, {
                                          label: K.intl.string(K.t.w5uwoI),
                                          icon: g.oLu,
                                          onClick: eC,
                                      })
                                    : null,
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ep.map((e) =>
                                        (0, i.jsx)(
                                            T.sF,
                                            {
                                                label: ei[e.application_id]
                                                    ? K.intl.string(K.t["8BEiNn"])
                                                    : K.intl.string(K.t.OKsSCR),
                                                icon: ei[e.application_id] ? g.dz2 : g.V9,
                                                onClick: (t) => eZ(t, e),
                                            },
                                            e.application_id,
                                        ),
                                    ),
                                    eg.map((e) => {
                                        var n;
                                        return (0, i.jsx)(
                                            T.sF,
                                            {
                                                label: ei[e.application_id]
                                                    ? K.intl.string(K.t["8BEiNn"])
                                                    : K.intl.formatToPlainString(K.t["KHLo+F"], {
                                                          channel: null != (n = t.globalName) ? n : t.username,
                                                          game: e.name,
                                                      }),
                                                icon: ei[e.application_id] ? g.dz2 : g.ejJ,
                                                onClick: (t) => eD(t, e),
                                            },
                                            e.application_id,
                                        );
                                    }),
                                ],
                            }),
                            E !== J.OGo.PENDING_INCOMING &&
                                E !== J.OGo.PENDING_OUTGOING &&
                                (0, i.jsx)(T.sF, {
                                    label: K.intl.string(K.t["g33r/P"]),
                                    icon: g.kBi,
                                    onClick: ej,
                                }),
                            (0, i.jsx)(T.sF, {
                                label: K.intl.string(K.t["UKOtz+"]),
                                icon: g.xhG,
                                onClick: eP,
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
        { isOver: m, drop: E } = (0, H.Ii)(t, h),
        { isDragging: I, dragSourcePosition: S, drag: N, drop: y } = (0, H.OL)(t, d, p, h),
        v = l.useCallback(
            (e) => {
                (0, O.jW)(e, async () => {
                    let { default: e } = await n.e("23662").then(n.bind(n, 863556));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            $(X({}, n), {
                                groupId: t,
                                groupName: r,
                            }),
                        );
                });
            },
            [t, r],
        ),
        b = l.useCallback(
            (e) => {
                E(e), y(e), N(e);
            },
            [E, y, N],
        );
    return (0, i.jsx)(_.Z, {
        className: o()(B.section, {
            [B.dropping]: m || (null != S && S !== d) || f,
            [B.dragging]: I,
        }),
        children: (0, i.jsx)("div", {
            ref: b,
            onContextMenu: v,
            children: (0, i.jsxs)(g.P3F, {
                onClick: () => u && c(),
                "aria-hidden": !0,
                className: u ? B.sectionCollapsible : void 0,
                children: [
                    s,
                    u
                        ? a
                            ? (0, i.jsx)(g.Fbu, {
                                  size: "md",
                                  color: "currentColor",
                                  className: B.chevronIcon,
                              })
                            : (0, i.jsx)(g.CJ0, {
                                  size: "md",
                                  color: "currentColor",
                                  className: B.chevronIcon,
                              })
                        : null,
                ],
            }),
        }),
    });
}
function es(e) {
    let { displayText: t, isCollapsed: n, canCollapse: r, onToggle: l } = e,
        { isOver: s, drop: o } = (0, H.wO)();
    return (0, i.jsx)(_.Z, {
        className: B.section,
        children: (0, i.jsx)("div", {
            ref: o,
            style: {
                backgroundColor: s ? "var(--background-modifier-hover)" : void 0,
                transition: "background-color 0.1s",
            },
            children: (0, i.jsxs)(g.P3F, {
                onClick: () => r && l(),
                "aria-hidden": !0,
                className: r ? B.sectionCollapsible : void 0,
                children: [
                    t,
                    r
                        ? n
                            ? (0, i.jsx)(g.Fbu, {
                                  size: "md",
                                  color: "currentColor",
                                  className: B.chevronIcon,
                              })
                            : (0, i.jsx)(g.CJ0, {
                                  size: "md",
                                  color: "currentColor",
                                  className: B.chevronIcon,
                              })
                        : null,
                ],
            }),
        }),
    });
}
function eo(e) {
    let { user: t, activities: n, nickname: r } = e;
    return [t.username, t.globalName, r, ...n.map((e) => e.name)].filter(z.lm);
}
ei.displayName = "FriendRow";
let ea = {
    searchType: G.S.FUZZY,
    searchStringGenerator: eo,
    sortType: G.E.JARO_WINKLER,
    throttleMs: 100,
};
function eu(e, t) {
    let [n, r] = l.useState(t),
        i = l.useCallback(() => r(t), [t]);
    return (0, U.BO)(e, t, r, ea), [n, i];
}
let ec = l.memo(function (e) {
    let {
            containerClassName: t,
            listClassName: r,
            closePopout: s,
            renderHeader: o,
            onAction: c,
            onFriendVisible: f,
            autoFocus: h = !1,
            appContext: m = J.IlC.APP,
        } = e,
        I = (function () {
            let e = (0, W.h)(),
                t = (0, d.Wu)([L.Z, q.default, F.Z], () => {
                    let e = [];
                    for (let [t, n] of L.Z.getMutableRelationships().entries()) {
                        if (n !== J.OGo.PENDING_INCOMING && n !== J.OGo.PENDING_OUTGOING) continue;
                        let r = q.default.getUser(t);
                        if (null != r) {
                            let i = L.Z.getSince(t),
                                l = null != i ? new Date(i).getTime() : 0;
                            e.push({
                                user: r,
                                activities: F.Z.getActivities(t),
                                timestamp: l,
                                nickname: L.Z.getNickname(t),
                                relationshipType: n,
                            });
                        }
                    }
                    return e.sort((e, t) => t.timestamp - e.timestamp), e;
                }),
                n = (0, d.Wu)([w.Z, q.default, F.Z, L.Z, V.Z], () => {
                    let e = w.Z.getUserAffinitiesMap(),
                        t = [];
                    for (let [n, r] of e.entries()) {
                        let e = L.Z.getRelationshipType(n);
                        if (
                            L.Z.isFriend(n) ||
                            r.communicationProbability <= 0.1634 ||
                            e === J.OGo.PENDING_INCOMING ||
                            e === J.OGo.PENDING_OUTGOING
                        )
                            continue;
                        let i = q.default.getUser(n);
                        if (null != i) {
                            let e = F.Z.getActivities(n),
                                l = V.Z.getVoiceStateForUser(n),
                                s = (null == l ? void 0 : l.channelId) != null;
                            t.push({
                                user: i,
                                activities: e,
                                affinity: r.communicationProbability,
                                hasActivity: e.length > 0 || s,
                                nickname: L.Z.getNickname(n),
                            });
                        }
                    }
                    return t.sort((e, t) => {
                        let n = 1000 * !!e.hasActivity + e.affinity;
                        return 1000 * !!t.hasActivity + t.affinity - n;
                    });
                }, []),
                r = (function () {
                    let e = (0, d.e7)([M.Z], () => M.Z.getPrimaryActivity()),
                        t = null == e ? void 0 : e.application_id,
                        n = (0, D.N)(t);
                    return (0, d.cj)([L.Z, q.default, F.Z, V.Z], () => {
                        let r = (null == e ? void 0 : e.name) != null && null != t,
                            i = {
                                activities: [],
                                sameActivity: [],
                                online: [],
                                offline: [],
                            },
                            l = new Map();
                        for (let e of (r &&
                            null != t &&
                            null != n &&
                            n.length > 0 &&
                            n.forEach((e) => {
                                let t = e.author_id;
                                if (!L.Z.isFriend(t)) return;
                                let n = q.default.getUser(t);
                                null != n &&
                                    l.set(t, {
                                        user: n,
                                        activities: [],
                                        gameProfileEntry: e,
                                        nickname: L.Z.getNickname(t),
                                    });
                            }),
                        L.Z.getFriendIDs())) {
                            let n = q.default.getUser(e);
                            if (null == n) continue;
                            let s = F.Z.getStatus(e),
                                o = F.Z.getActivities(e),
                                a = L.Z.getNickname(e),
                                u = V.Z.getVoiceStateForUser(e),
                                c = (null == u ? void 0 : u.channelId) != null,
                                d = o.filter(
                                    (e) =>
                                        e.type === J.IIU.PLAYING ||
                                        e.type === J.IIU.LISTENING ||
                                        e.type === J.IIU.WATCHING ||
                                        e.type === J.IIU.STREAMING,
                                ),
                                p = d.filter((e) => e.application_id === t),
                                g = r && p.length > 0,
                                f = {
                                    user: n,
                                    activities: g ? p : d,
                                    nickname: a,
                                };
                            g
                                ? (i.sameActivity.push(f), l.delete(e))
                                : d.length > 0
                                  ? i.activities.push(f)
                                  : c
                                    ? i.activities.push($(X({}, f), { activities: o }))
                                    : s === J.Skl.ONLINE || s === J.Skl.IDLE || s === J.Skl.DND
                                      ? i.online.push(f)
                                      : i.offline.push(f);
                        }
                        let s = (e, t) => {
                            var n, r;
                            let i = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                                l = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
                            return i.localeCompare(l);
                        };
                        if ((i.sameActivity.sort(s), l.size > 0)) {
                            let e = Array.from(l.values()).sort(s);
                            i.sameActivity.push(...e);
                        }
                        return i.activities.sort(s), i.online.sort(s), i.offline.sort(s), i;
                    }, [n, e, t]);
                })(),
                i = (0, d.e7)([M.Z], () => M.Z.getPrimaryActivity());
            return l.useMemo(() => {
                var l;
                return {
                    groups: e,
                    friendRequests: t,
                    suggestions: n,
                    activities: r.activities,
                    sameActivity: r.sameActivity,
                    online: r.online,
                    offline: r.offline,
                    currentActivityName: null != (l = null == i ? void 0 : i.name) ? l : "",
                };
            }, [e, t, n, r, i]);
        })(),
        S = (function (e) {
            let [t, n] = l.useState(""),
                [r, i] = eu(t, e.friendRequests),
                [s, o] = eu(t, e.suggestions),
                [a, u] = eu(t, e.sameActivity),
                [c, d] = eu(t, e.activities),
                [p, g] = eu(t, e.online),
                [f, h] = eu(t, e.offline),
                O = l.useMemo(() => {
                    if ("" === t.trim()) return e.groups;
                    let n = t.toLowerCase();
                    return e.groups
                        .map((e) => {
                            let t = e.users.filter((e) => eo(e).some((e) => null != e && e.toLowerCase().includes(n)));
                            return $(X({}, e), { users: t });
                        })
                        .filter((e) => e.users.length > 0);
                }, [t, e.groups]),
                m = l.useCallback(() => {
                    n(""), i(), o(), u(), d(), g(), h();
                }, [i, o, u, d, g, h]);
            return {
                groups: O,
                friendRequests: r,
                suggestions: s,
                sameActivity: a,
                activities: c,
                online: p,
                offline: f,
                currentActivityName: e.currentActivityName,
                searchQuery: t,
                setSearchQuery: n,
                clearSearch: m,
            };
        })(I),
        { searchQuery: N, setSearchQuery: y, clearSearch: v } = S,
        b = ee(S, ["searchQuery", "setSearchQuery", "clearSearch"]),
        _ = N.trim().length > 0,
        P = l.useMemo(() => {
            let e = b.groups.length;
            return {
                FRIEND_REQUESTS: 0,
                SAME_ACTIVITY: e + 1,
                ACTIVITIES: e + 2,
                SUGGESTIONS: e + 3,
                ONLINE: e + 4,
                OFFLINE: e + 5,
            };
        }, [b.groups.length]),
        [j, Z] = l.useState([P.FRIEND_REQUESTS]),
        { hoveredGroupId: T, handleGroupHover: R, handleGroupHoverRemove: G } = (0, Y.S)();
    l.useEffect(() => {
        let e = Array.from({ length: b.groups.length }, (e, t) => t + 1);
        Z((t) => [...t, ...e]);
    }, []);
    let U = l.useRef(null),
        k = (0, E.Z)("friends-popout", U),
        A = l.useCallback((e) => {
            Z((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        x = l.useCallback(
            (e) => {
                if (2 !== e.length) return;
                let [t, n] = e,
                    r = b.groups.map((e) => e.id),
                    i = r.indexOf(t),
                    l = r.indexOf(n);
                if (-1 === i || -1 === l) return;
                let s = [...r];
                s.splice(i, 1), s.splice(l, 0, t), C.Z.reorderGroups(s);
            },
            [b.groups],
        ),
        z = l.useCallback(
            (0, a.debounce)(
                () => {
                    null == c || c("search_friends");
                },
                1000,
                {
                    leading: !0,
                    trailing: !1,
                },
            ),
            [c],
        ),
        H = l.useCallback(
            (e) => {
                var t;
                y(e), z(), null == (t = U.current) || t.scrollToTop();
            },
            [y, z],
        ),
        et = l.useCallback(() => {
            var e;
            v(), z(), null == (e = U.current) || e.scrollToTop();
        }, [v, z]),
        en = l.useCallback(
            (e) => {
                (0, O.jW)(e, async () => {
                    let { default: e } = await n.e("23087").then(n.bind(n, 29131));
                    return (t) => (0, i.jsx)(e, $(X({}, t), { onClose: s }));
                }),
                    null == c || c("open_settings_modal");
            },
            [s, c],
        ),
        er = l.useCallback(() => {
            (0, g.ZDy)(async () => {
                let { default: e } = await n.e("49078").then(n.bind(n, 539725));
                return (t) => (0, i.jsx)(e, X({}, t));
            }),
                null == c || c("open_friend_modal");
        }, [c]),
        ea = l.useCallback(
            (e) => {
                var t;
                let { section: n } = e,
                    r = "",
                    l = 0,
                    s = !1,
                    o = "",
                    a = null;
                if (n > P.FRIEND_REQUESTS && n < P.SAME_ACTIVITY) {
                    if (null != (a = b.groups[n - 1])) {
                        let e = a.users.filter((e) => {
                                let t = F.Z.getStatus(e.user.id);
                                return t === J.Skl.ONLINE || t === J.Skl.IDLE || t === J.Skl.DND;
                            }).length,
                            t = a.users.length;
                        (r = a.name),
                            (l = t),
                            (o = "".concat(r, " \u2014 ").concat(e, "/").concat(t, " online")),
                            0 === e && 0 === t && (o = "".concat(r, " \u2014 0 online")),
                            (s = !0);
                    }
                } else
                    switch (n) {
                        case P.FRIEND_REQUESTS:
                            (r = K.intl.string(K.t.fyA115)),
                                (l = b.friendRequests.length),
                                (o = "".concat(r, " \u2014 ").concat(l));
                            break;
                        case P.SAME_ACTIVITY:
                            (r = I.currentActivityName),
                                (l = b.sameActivity.length),
                                (o = "".concat(r, " \u2014 ").concat(l));
                            break;
                        case P.SUGGESTIONS:
                            (r = K.intl.string(K.t.qm9dSj)),
                                (l = b.suggestions.length),
                                (o = "".concat(r, " \u2014 ").concat(l));
                            break;
                        case P.ACTIVITIES:
                            (r = K.intl.string(K.t.TxqPQR)),
                                (l = b.activities.length),
                                (o = "".concat(r, " \u2014 ").concat(l));
                            break;
                        case P.ONLINE:
                            (r = K.intl.string(K.t.WbGtnH)),
                                (l = b.online.length),
                                (o = "".concat(r, " \u2014 ").concat(l));
                            break;
                        case P.OFFLINE:
                            (r = K.intl.string(K.t.Vv0abJ)),
                                (l = b.offline.length),
                                (o = "".concat(r, " \u2014 ").concat(l));
                    }
                let u = s || ((n === P.SUGGESTIONS || n === P.FRIEND_REQUESTS) && l > 3),
                    c = j.includes(n);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.nn4, {
                            children: K.intl.format(K.t.Uaqbke, {
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
                                  onToggle: () => A(n),
                                  position: n,
                                  onReorder: x,
                                  isHovered: T === (null == a ? void 0 : a.id),
                                  isDragDisabled: _,
                              })
                            : (0, i.jsx)(es, {
                                  displayText: o,
                                  isCollapsed: c,
                                  canCollapse: u,
                                  onToggle: () => A(n),
                              }),
                    ],
                });
            },
            [
                P,
                I.currentActivityName,
                b.groups,
                b.friendRequests.length,
                b.sameActivity.length,
                b.suggestions.length,
                b.activities.length,
                b.online.length,
                b.offline.length,
                j,
                A,
                x,
                T,
                _,
            ],
        ),
        ec = l.useCallback(
            (e) => {
                let t, n;
                if (e.section > P.FRIEND_REQUESTS && e.section < P.SAME_ACTIVITY) {
                    let r = b.groups[e.section - 1];
                    if (null != r) {
                        let i = j.includes(e.section)
                            ? r.users.filter((e) => {
                                  let t = F.Z.getStatus(e.user.id);
                                  return t === J.Skl.ONLINE || t === J.Skl.IDLE || t === J.Skl.DND;
                              })
                            : r.users;
                        if (0 === i.length) return null;
                        (t = i[e.row]), (n = r.id);
                    }
                } else
                    t =
                        e.section === P.FRIEND_REQUESTS
                            ? b.friendRequests[e.row]
                            : e.section === P.SAME_ACTIVITY
                              ? b.sameActivity[e.row]
                              : e.section === P.SUGGESTIONS
                                ? b.suggestions[e.row]
                                : e.section === P.ACTIVITIES
                                  ? b.activities[e.row]
                                  : e.section === P.ONLINE
                                    ? b.online[e.row]
                                    : b.offline[e.row];
                return null == t || null == t.user
                    ? null
                    : (0, i.jsx)(
                          ei,
                          $(X({}, t), {
                              index: e.row,
                              closeParentPopout: s,
                              isSuggestion: e.section === P.SUGGESTIONS,
                              appContext: m,
                              onAction: c,
                              onFriendVisible: f,
                              friendGroupId: n,
                              onGroupHover: R,
                              onGroupHoverRemove: G,
                              isDragDisabled: _,
                          }),
                          "".concat(e.section, ":").concat(t.user.id),
                      );
            },
            [P, b, j, s, m, c, f, R, G, _],
        ),
        { showSuggestions: ed } = (0, Q.Z)(),
        ep = l.useMemo(() => {
            let e = [],
                t = j.includes(P.FRIEND_REQUESTS) ? Math.min(3, b.friendRequests.length) : b.friendRequests.length;
            e.push(t);
            for (let t = 0; t < b.groups.length; t++) {
                let n = b.groups[t],
                    r = j.includes(t + 1)
                        ? n.users.filter((e) => {
                              let t = F.Z.getStatus(e.user.id);
                              return t === J.Skl.ONLINE || t === J.Skl.IDLE || t === J.Skl.DND;
                          }).length
                        : n.users.length;
                e.push(Math.max(r, 1));
            }
            let n = ed ? (j.includes(P.SUGGESTIONS) ? Math.min(3, b.suggestions.length) : b.suggestions.length) : 0;
            return e.push(b.sameActivity.length, b.activities.length, n, b.online.length, b.offline.length), e;
        }, [P, b, j, ed]),
        eg = Object.values(b).every((e) => 0 === e.length);
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            null != o
                ? (0, i.jsx)("div", {
                      className: B.header,
                      children: o(),
                  })
                : (0, i.jsxs)("div", {
                      className: B.header,
                      children: [
                          (0, i.jsx)(g.Heading, {
                              variant: "heading-lg/semibold",
                              children: K.intl.string(K.t.TdEu5X),
                          }),
                          (0, i.jsxs)("div", {
                              className: B.controlButtons,
                              children: [
                                  (0, i.jsx)(p.u, {
                                      text: K.intl.string(K.t.w5uwoI),
                                      children: (0, i.jsx)(g.hU, {
                                          "aria-label": K.intl.string(K.t.w5uwoI),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: g.oLu,
                                          onClick: er,
                                      }),
                                  }),
                                  (0, i.jsx)(p.u, {
                                      text: K.intl.string(K.t["3D5yo/"]),
                                      children: (0, i.jsx)(g.hU, {
                                          "aria-label": K.intl.string(K.t["3D5yo/"]),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: g.xhG,
                                          onClick: en,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, i.jsx)("div", {
                className: B.searchContainer,
                children: (0, i.jsx)(g.E1j, {
                    query: N,
                    onChange: H,
                    onClear: et,
                    placeholder: K.intl.string(K.t["5h0QOP"]),
                    autoFocus: h,
                }),
            }),
            eg
                ? (0, i.jsx)("div", {
                      className: B.emptyStateContainer,
                      children: (0, i.jsx)(g.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: K.intl.string(K.t["7sW4h1"]),
                      }),
                  })
                : (0, i.jsx)(u.bG, {
                      navigator: k,
                      children: (0, i.jsx)(u.SJ, {
                          children: (e) => {
                              var { ref: t, role: n } = e,
                                  l = ee(e, ["ref", "role"]);
                              return (0, i.jsx)(g.Wdt, {
                                  children: (e) =>
                                      (0, i.jsx)(
                                          g.aVo,
                                          X(
                                              {
                                                  innerRole: n,
                                                  innerAriaLabel: K.intl.string(K.t.TdEu5X),
                                                  ref: (e) => {
                                                      var n;
                                                      (U.current = e),
                                                          (t.current =
                                                              null != (n = null == e ? void 0 : e.getScrollerNode())
                                                                  ? n
                                                                  : null);
                                                  },
                                                  className: r,
                                                  sectionHeight: 40,
                                                  rowHeight: 42,
                                                  sidebarHeight: 0,
                                                  renderSection: ea,
                                                  renderRow: ec,
                                                  sections: ep,
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
                    containerClassName: B.container,
                    listClassName: B.list,
                    closePopout: d,
                    autoFocus: !0,
                }),
            [d],
        );
    return (0, i.jsx)(g.yRy, {
        targetElementRef: c,
        animation: g.yRy.Animation.NONE,
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
