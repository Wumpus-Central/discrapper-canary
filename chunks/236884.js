n.d(t, {
    Z: () => ea,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n(172218),
    s = n(311907),
    o = n(435371),
    u = n(397927),
    c = n(49229),
    d = n(833349),
    h = n(960076),
    p = n(566903),
    f = n(397244),
    g = n(714114),
    m = n(729551),
    y = n(864436),
    A = n(835072),
    v = n(87664),
    b = n(47167),
    E = n(506326),
    O = n(490427),
    x = n(609425),
    _ = n(922301),
    S = n(750112),
    I = n(769015),
    j = n(834757),
    T = n(145497),
    C = n(534400),
    N = n(854627),
    w = n(657331),
    P = n(10862),
    D = n(616356),
    R = n(734057),
    k = n(71393),
    M = n(290863),
    L = n(309010),
    U = n(461213),
    G = n(287809),
    V = n(562153),
    z = n(914853),
    F = n(1404),
    H = n(578093),
    Y = n(20796),
    K = n(67103),
    W = n(472204),
    B = n(576420),
    Z = n(876891),
    X = n(652215),
    J = n(985018),
    Q = n(783346);

function q(e) {
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

function $(e, t) {
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
let ee = u._3J.SIZE_32,
    et = [E.iq, E.tR, E.K7, E.sp, E.MK];

function en(e) {
    let t,
        { channel: n, textVariant: a, activities: o, applicationStream: c } = e,
        d = (0, s.bG)([G.default], () => G.default.getCurrentUser()),
        h = (0, u.S31)(X.clD.ONLINE),
        f = (0, b.Ay)(n),
        g = (0, s.bG)([k.A], () => k.A.getGuild(n.getGuildId())),
        m = null == g ? void 0 : g.name;
    (0, v.A)(null == d ? void 0 : d.id);
    let E = (null == c ? void 0 : c.discoverable) !== !1 ? c : null,
        O = (0, j.AO)(E),
        x = n.isDM() || n.isGroupDM(),
        _ = r.useMemo(() => {
            var e;
            return (0, l.uniqWith)(
                null !=
                    (e =
                        null == o
                            ? void 0
                            : o.filter((e) => {
                                  let { type: t, name: n } = e;
                                  return (
                                      t !== X.$pd.CUSTOM_STATUS &&
                                      t !== X.$pd.HANG_STATUS &&
                                      n !== (null == O ? void 0 : O.name)
                                  );
                              }))
                    ? e
                    : [],
                (e, t) =>
                    (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
                    (null != e.name && null != t.name && e.name === t.name),
            );
        }, [o, null == O ? void 0 : O.name]),
        S = null == _ ? void 0 : _[0];
    return (0, i.jsxs)("div", {
        className: Q.fE,
        children: [
            ((t = (null == _ ? void 0 : _.length) > 0),
            (0, i.jsxs)("div", {
                className: Q._9,
                children: [
                    !t &&
                        !x &&
                        null != g &&
                        (0, i.jsxs)("div", {
                            className: Q.j1,
                            children: [
                                (0, i.jsx)(T.Ay, {
                                    guild: g,
                                    iconSize: 14,
                                }),
                                (0, i.jsx)(u.Text, {
                                    className: Q.J5,
                                    variant: a,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: m,
                                }),
                                (0, i.jsx)(u._BQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                }),
                            ],
                        }),
                    (0, i.jsx)(P.A, {
                        size: "custom",
                        color: h,
                        channel: n,
                        className: Q.WT,
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: a,
                        color: "currentColor",
                        lineClamp: 1,
                        className: Q.Qo,
                        children: f,
                    }),
                ],
            })),
            (() => {
                if (null == S) return null;
                let { text: e } = (0, p.A)(S, !1),
                    t = (0, A.f)(S);
                return null == e && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: Q._9,
                          children: [
                              null != t
                                  ? (0, i.jsx)(y.A, {
                                        icon: t,
                                        className: Q.WT,
                                    })
                                  : void 0,
                              null != e
                                  ? (0, i.jsx)(u.Text, {
                                        variant: a,
                                        color: "text-status-online",
                                        lineClamp: 1,
                                        children: e,
                                    })
                                  : void 0,
                          ],
                      });
            })(),
        ],
    });
}

function ei(e) {
    let {
            user: t,
            activities: n,
            gameProfileEntry: l,
            relationshipType: o,
            isSuggestion: u,
            appContext: c,
            onAction: p,
            onFriendVisible: y,
            friendGroupId: A,
        } = e,
        v = t.id,
        {
            avatarDecorationSrc: b,
            avatarSrc: x,
            eventHandlers: _,
        } = (0, N.A)({
            userId: v,
            size: ee,
            animateOnHover: !0,
            guildId: null,
        }),
        S = r.useMemo(() => {
            let e = null != A ? A : "no-group",
                t = null != o ? o : "no-relationship";
            return "friends-widget-friend-row:"
                .concat(v, ":")
                .concat(e, ":")
                .concat(t, ":")
                .concat(u ? "suggestion" : "not-suggestion");
        }, [A, u, o, v]),
        I = (0, s.yK)([U.A], () =>
            U.A.getActivities().filter((e) => e.type === X.$pd.PLAYING && (0, d.A)(e, X.jUm.JOIN)),
        ),
        { voiceChannel: j } = (0, g.A)({
            userId: t.id,
        }),
        {
            status: T,
            applicationStream: C,
            isMobile: w,
            newStatus: P,
        } = (0, s.cf)([M.A, D.A], () => {
            let e = M.A.getStatus(t.id),
                i = D.A.getAnyStreamForUser(t.id),
                r = M.A.isMobileOnline(t.id),
                l = (0, h.A)(null != n ? n : []) ? X.clD.STREAMING : e;
            return {
                status: e,
                applicationStream: i,
                isMobile: r,
                newStatus: l,
            };
        }, [t.id, n]),
        R = I.length > 0,
        k = r.useCallback(
            (e) => {
                null == y || y(v, e, R);
            },
            [y, v, R],
        ),
        L = (0, a.K)(k),
        G = r.useCallback(() => {
            if (null != l) {
                let e = l.traits,
                    t = $(q({}, l), {
                        traits: e.slice(0, 3),
                    });
                return (0, i.jsx)(E.mG, {
                    location: E.N5.FRIENDS_POPOUT,
                    className: Q.cV,
                    children: et.map((e, n) =>
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
                (0, f.A)({
                    activities: n,
                    status: T,
                    applicationStream: C,
                    voiceChannel: j,
                })
            ) {
                let e = !(0, O.A)({
                    activity:
                        null == n
                            ? void 0
                            : n.find((e) => {
                                  let { type: t } = e;
                                  return t === X.$pd.CUSTOM_STATUS;
                              }),
                    user: t,
                });
                return (null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === X.$pd.PLAYING;
                      })) == null && null != j
                    ? (0, i.jsx)(en, {
                          channel: j,
                          textVariant: "text-xs/medium",
                          activities: null != n ? n : [],
                          applicationStream: C,
                      })
                    : (0, i.jsx)(m.A, {
                          user: t,
                          activities: n,
                          applicationStream: C,
                          voiceChannel: j,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, T, C, j, l]);
    return {
        avatarDecorationSrc: b,
        avatarSrc: x,
        eventHandlers: _,
        listItemId: S,
        intersectionRef: L,
        isMobile: w,
        newStatus: P,
        status: T,
        renderSubtext: G,
        renderUserContextMenu: (0, Z.l2)({
            user: t,
            appContext: c,
            friendGroupId: A,
            onUserContextMenuOpened: () => {
                null == p || p(K.x.USER_CONTEXT_MENU, t.id);
            },
            onMessageUser: () => {
                null == p || p(K.x.OPEN_DIRECT_MESSAGE, t.id);
            },
        }),
    };
}
let er = r.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: l,
            closeParentPopout: a,
            appContext: c,
            nickname: d,
            onAction: h,
            onFriendVisible: p,
            friendGroupId: f,
            shouldHighlightIfRecentlyAdded: g,
            relationshipType: m,
            isSuggestion: y,
        } = e,
        {
            avatarDecorationSrc: A,
            avatarSrc: v,
            eventHandlers: b,
            listItemId: E,
            intersectionRef: O,
            isMobile: j,
            newStatus: T,
            status: N,
            renderSubtext: P,
            renderUserContextMenu: D,
        } = ei({
            user: t,
            activities: n,
            gameProfileEntry: l,
            relationshipType: m,
            isSuggestion: y,
            appContext: c,
            onAction: h,
            onFriendVisible: p,
            friendGroupId: f,
        }),
        { guildId: k, channelId: M } = (0, s.cf)([L.A, R.A], () => {
            var e, t;
            let n = null != (e = L.A.getVoiceChannelId()) ? e : L.A.getChannelId();
            return {
                guildId: null != n ? (null == (t = R.A.getChannel(n)) ? void 0 : t.guild_id) : null,
                channelId: n,
            };
        }),
        U = (0, x.A)({
            userId: t.id,
            guildId: k,
        }),
        G = V.Ay.useName(k, M, t),
        Z = (0, W.ZD)({
            userId: t.id,
            onAction: h,
            closeParentPopout: a,
        }),
        et = n.some((e) => {
            let { type: t } = e;
            return t === X.$pd.PLAYING;
        }),
        en = N !== X.clD.ONLINE && N !== X.clD.IDLE && N !== X.clD.DND,
        er = (0, B.A2)(t.id),
        el = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == h || h(K.x.OPEN_FRIEND_MODAL, t.id),
                    (0, w.openUserProfileModal)({
                        userId: t.id,
                        guildId: k,
                        channelId: M,
                        appContext: c,
                    });
            },
            [c, M, k, h, t.id],
        );
    return (0, i.jsx)(F.D, {
        listItemId: E,
        outerRef: O,
        isVisuallyOffline: en,
        recentlyAddedTimestampMs: g ? er : null,
        onClick: Z,
        onContextMenu: D,
        avatar: (0, i.jsx)(
            u.euF,
            $(q({}, b), {
                size: ee,
                src: v,
                isMobile: j,
                isTyping: !1,
                status: T,
                className: Q.my,
                "aria-label": t.username,
                statusTooltip: !0,
                avatarDecoration: A,
            }),
        ),
        primaryText: (0, i.jsxs)("div", {
            className: Q.QV,
            children: [
                (0, i.jsx)(S.A, {
                    userName: G,
                    displayNameStyles: U,
                    effectDisplayType: _.G.STATIC,
                    textClassName: Q.Xh,
                }),
                (0, i.jsx)(C.Ay, {
                    userId: t.id,
                    disableGuildProfile: !0,
                }),
            ],
        }),
        secondaryText: P(),
        rightActions: (e) =>
            e
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.m_, {
                              text: J.intl.string(J.t.iXAna6),
                              "aria-label": J.intl.string(J.t.iXAna6),
                              children: (0, i.jsx)(u.K0, {
                                  icon: u.rMq,
                                  "aria-label": J.intl.string(J.t.iXAna6),
                                  size: "sm",
                                  variant: "icon-only",
                                  onClick: el,
                              }),
                          }),
                          (0, i.jsx)(H.j, {
                              tab: z.x.FRIENDS,
                              targetId: t.id,
                          }),
                      ],
                  })
                : et
                  ? (0, i.jsx)("div", {
                        className: Q.im,
                        children: (0, i.jsx)(Y.B, {
                            activities: n,
                            gameProfileEntry: l,
                            gameIconSize: I.M.SMALL,
                            platformIconSizePx: 24,
                        }),
                    })
                  : null,
    });
});
er.displayName = "FriendListRow";
let el = r.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: l,
            relationshipType: a,
            isSuggestion: s,
            appContext: d,
            nickname: h,
            onAction: p,
            onFriendVisible: f,
            friendGroupId: g,
        } = e,
        [m, y] = r.useState(null),
        A = r.useRef(!1),
        {
            avatarDecorationSrc: v,
            avatarSrc: b,
            eventHandlers: E,
            listItemId: O,
            intersectionRef: j,
            isMobile: T,
            newStatus: C,
            status: N,
            renderSubtext: w,
            renderUserContextMenu: P,
        } = ei({
            user: t,
            activities: n,
            gameProfileEntry: l,
            relationshipType: a,
            isSuggestion: s,
            appContext: d,
            onAction: p,
            onFriendVisible: f,
            friendGroupId: g,
        }),
        D = (0, x.A)({
            userId: t.id,
            guildId: null,
        }),
        R = V.Ay.useName(null, null, t),
        k = r.useCallback(async (e, t) => {
            if (!A.current) {
                (A.current = !0), y(e);
                try {
                    await t();
                } finally {
                    (A.current = !1), y(null);
                }
            }
        }, []),
        M = (0, W.ZD)({
            userId: t.id,
            onAction: p,
        }),
        L = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == p || p(K.x.ACCEPT_FRIEND_REQUEST, t.id),
                    k("accept", () =>
                        c.A.addRelationship({
                            userId: t.id,
                            context: {
                                location: "friends-popout",
                            },
                        }),
                    );
            },
            [t.id, p, k],
        ),
        U = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == p || p(K.x.DECLINE_FRIEND_REQUEST, t.id),
                    k("decline", () =>
                        c.A.removeRelationship(t.id, {
                            location: "friends-popout",
                        }),
                    );
            },
            [t.id, p, k],
        ),
        G = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == p || p(K.x.CANCEL_FRIEND_REQUEST, t.id),
                    k("cancel", () =>
                        c.A.cancelFriendRequest(t.id, {
                            location: "friends-popout",
                        }),
                    );
            },
            [t.id, p, k],
        ),
        z = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == p || p(K.x.SEND_FRIEND_REQUEST, t.id),
                    k("send", () =>
                        c.A.addRelationship({
                            userId: t.id,
                            context: {
                                location: "friends-popout",
                            },
                        }),
                    );
            },
            [t.id, p, k],
        ),
        H = n.some((e) => {
            let { type: t } = e;
            return t === X.$pd.PLAYING;
        }),
        B = N !== X.clD.ONLINE && N !== X.clD.IDLE && N !== X.clD.DND;
    return (0, i.jsx)(F.D, {
        listItemId: O,
        outerRef: j,
        isVisuallyOffline: B,
        onClick: M,
        onContextMenu: P,
        avatar: (0, i.jsx)(
            u.euF,
            $(q({}, E), {
                size: ee,
                src: b,
                isMobile: T,
                isTyping: !1,
                status: C,
                className: Q.my,
                "aria-label": t.username,
                statusTooltip: !0,
                avatarDecoration: v,
            }),
        ),
        primaryText: (0, i.jsx)(S.A, {
            userName: R,
            displayNameStyles: D,
            effectDisplayType: _.G.PLAIN,
            textClassName: Q.Xh,
        }),
        secondaryText: w(),
        rightActions: () => {
            let e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    H
                        ? (0, i.jsx)("div", {
                              className: Q.im,
                              children: (0, i.jsx)(Y.B, {
                                  activities: n,
                                  gameProfileEntry: l,
                                  gameIconSize: I.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    ((e = null != m),
                    a === X.eA$.PENDING_INCOMING
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.m_, {
                                      text: J.intl.string(J.t.MMlhsr),
                                      children: (0, i.jsx)(u.K0, {
                                          "aria-label": J.intl.string(J.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: u.A9s,
                                          onClick: L,
                                          disabled: e,
                                      }),
                                  }),
                                  (0, i.jsx)(o.m_, {
                                      text: J.intl.string(J.t.ytCpKs),
                                      children: (0, i.jsx)(u.K0, {
                                          "aria-label": J.intl.string(J.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: u.PGe,
                                          onClick: U,
                                          disabled: e,
                                      }),
                                  }),
                              ],
                          })
                        : a === X.eA$.PENDING_OUTGOING
                          ? (0, i.jsx)(o.m_, {
                                text: J.intl.string(J.t["bTfA//"]),
                                children: (0, i.jsx)(u.K0, {
                                    "aria-label": J.intl.string(J.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: u.lI8,
                                    onClick: G,
                                    disabled: e,
                                }),
                            })
                          : s
                            ? (0, i.jsx)(o.m_, {
                                  text: J.intl.string(J.t.w5uwoI),
                                  children: (0, i.jsx)(u.K0, {
                                      "aria-label": J.intl.string(J.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: u.Rvf,
                                      onClick: z,
                                      disabled: e,
                                  }),
                              })
                            : null),
                ],
            });
        },
    });
});
el.displayName = "FriendRequestRow";
let ea = r.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === X.eA$.PENDING_INCOMING || t === X.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, i.jsx)(el, q({}, e))
        : (0, i.jsx)(er, q({}, e)),
);
ea.displayName = "FriendRow";
