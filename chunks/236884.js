n.d(t, {
    Z: () => el,
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
    d = n(960076),
    h = n(566903),
    p = n(397244),
    f = n(714114),
    g = n(729551),
    m = n(864436),
    y = n(835072),
    A = n(87664),
    v = n(47167),
    b = n(506326),
    E = n(490427),
    O = n(609425),
    x = n(922301),
    _ = n(750112),
    S = n(769015),
    I = n(834757),
    j = n(145497),
    T = n(534400),
    C = n(854627),
    N = n(657331),
    w = n(10862),
    P = n(616356),
    D = n(734057),
    R = n(71393),
    k = n(290863),
    M = n(309010),
    L = n(461213),
    U = n(287809),
    G = n(562153),
    V = n(914853),
    z = n(1404),
    F = n(578093),
    H = n(20796),
    Y = n(67103),
    W = n(472204),
    K = n(576420),
    B = n(876891),
    Z = n(652215),
    X = n(985018),
    J = n(783346);

function Q(e) {
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

function q(e, t) {
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
let $ = u._3J.SIZE_32,
    ee = [b.iq, b.tR, b.K7, b.sp, b.MK];

function et(e) {
    let t,
        { channel: n, textVariant: a, activities: o, applicationStream: c } = e,
        d = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        p = (0, u.S31)(Z.clD.ONLINE),
        f = (0, v.Ay)(n),
        g = (0, s.bG)([R.A], () => R.A.getGuild(n.getGuildId())),
        b = null == g ? void 0 : g.name;
    (0, A.A)(null == d ? void 0 : d.id);
    let E = (null == c ? void 0 : c.discoverable) !== !1 ? c : null,
        O = (0, I.AO)(E),
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
                                      t !== Z.$pd.CUSTOM_STATUS &&
                                      t !== Z.$pd.HANG_STATUS &&
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
        className: J.fE,
        children: [
            ((t = (null == _ ? void 0 : _.length) > 0),
            (0, i.jsxs)("div", {
                className: J._9,
                children: [
                    !t &&
                        !x &&
                        null != g &&
                        (0, i.jsxs)("div", {
                            className: J.j1,
                            children: [
                                (0, i.jsx)(j.Ay, {
                                    guild: g,
                                    iconSize: 14,
                                }),
                                (0, i.jsx)(u.Text, {
                                    className: J.J5,
                                    variant: a,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: b,
                                }),
                                (0, i.jsx)(u._BQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                }),
                            ],
                        }),
                    (0, i.jsx)(w.A, {
                        size: "custom",
                        color: p,
                        channel: n,
                        className: J.WT,
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: a,
                        color: "currentColor",
                        lineClamp: 1,
                        className: J.Qo,
                        children: f,
                    }),
                ],
            })),
            (() => {
                if (null == S) return null;
                let { text: e } = (0, h.A)(S, !1),
                    t = (0, y.f)(S);
                return null == e && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: J._9,
                          children: [
                              null != t
                                  ? (0, i.jsx)(m.A, {
                                        icon: t,
                                        className: J.WT,
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

function en(e) {
    let {
            user: t,
            activities: n,
            gameProfileEntry: l,
            relationshipType: o,
            isSuggestion: u,
            appContext: c,
            onAction: h,
            onFriendVisible: m,
            friendGroupId: y,
        } = e,
        A = t.id,
        {
            avatarDecorationSrc: v,
            avatarSrc: O,
            eventHandlers: x,
        } = (0, C.A)({
            userId: A,
            size: $,
            animateOnHover: !0,
            guildId: null,
        }),
        _ = r.useMemo(() => {
            let e = null != y ? y : "no-group",
                t = null != o ? o : "no-relationship";
            return "friends-widget-friend-row:"
                .concat(A, ":")
                .concat(e, ":")
                .concat(t, ":")
                .concat(u ? "suggestion" : "not-suggestion");
        }, [y, u, o, A]),
        S = (0, s.yK)([L.A], () =>
            L.A.getActivities().filter((e) => e.type === Z.$pd.PLAYING && null != e.application_id),
        ),
        { voiceChannel: I } = (0, f.A)({
            userId: t.id,
        }),
        {
            status: j,
            applicationStream: T,
            isMobile: N,
            newStatus: w,
        } = (0, s.cf)([k.A, P.A], () => {
            let e = k.A.getStatus(t.id),
                i = P.A.getAnyStreamForUser(t.id),
                r = k.A.isMobileOnline(t.id),
                l = (0, d.A)(null != n ? n : []) ? Z.clD.STREAMING : e;
            return {
                status: e,
                applicationStream: i,
                isMobile: r,
                newStatus: l,
            };
        }, [t.id, n]),
        D = S.length > 0,
        R = r.useCallback(
            (e) => {
                null == m || m(A, e, D);
            },
            [m, A, D],
        ),
        M = (0, a.K)(R),
        U = r.useCallback(() => {
            if (null != l) {
                let e = l.traits,
                    t = q(Q({}, l), {
                        traits: e.slice(0, 3),
                    });
                return (0, i.jsx)(b.mG, {
                    location: b.N5.FRIENDS_POPOUT,
                    className: J.cV,
                    children: ee.map((e, n) =>
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
                (0, p.A)({
                    activities: n,
                    status: j,
                    applicationStream: T,
                    voiceChannel: I,
                })
            ) {
                let e = !(0, E.A)({
                    activity:
                        null == n
                            ? void 0
                            : n.find((e) => {
                                  let { type: t } = e;
                                  return t === Z.$pd.CUSTOM_STATUS;
                              }),
                    user: t,
                });
                return (null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === Z.$pd.PLAYING;
                      })) == null && null != I
                    ? (0, i.jsx)(et, {
                          channel: I,
                          textVariant: "text-xs/medium",
                          activities: null != n ? n : [],
                          applicationStream: T,
                      })
                    : (0, i.jsx)(g.A, {
                          user: t,
                          activities: n,
                          applicationStream: T,
                          voiceChannel: I,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, j, T, I, l]);
    return {
        avatarDecorationSrc: v,
        avatarSrc: O,
        eventHandlers: x,
        listItemId: _,
        intersectionRef: M,
        isMobile: N,
        newStatus: w,
        status: j,
        renderSubtext: U,
        renderUserContextMenu: (0, B.l2)({
            user: t,
            appContext: c,
            friendGroupId: y,
            onUserContextMenuOpened: () => {
                null == h || h(Y.x.USER_CONTEXT_MENU, t.id);
            },
            onMessageUser: () => {
                null == h || h(Y.x.OPEN_DIRECT_MESSAGE, t.id);
            },
        }),
    };
}
let ei = r.memo((e) => {
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
            intersectionRef: I,
            isMobile: j,
            newStatus: C,
            status: w,
            renderSubtext: P,
            renderUserContextMenu: R,
        } = en({
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
        { guildId: k, channelId: L } = (0, s.cf)([M.A, D.A], () => {
            var e, t;
            let n = null != (e = M.A.getVoiceChannelId()) ? e : M.A.getChannelId();
            return {
                guildId: null != n ? (null == (t = D.A.getChannel(n)) ? void 0 : t.guild_id) : null,
                channelId: n,
            };
        }),
        U = (0, O.A)({
            userId: t.id,
            guildId: k,
        }),
        B = G.Ay.useName(k, L, t),
        ee = (0, W.ZD)({
            userId: t.id,
            onAction: h,
            closeParentPopout: a,
        }),
        et = n.some((e) => {
            let { type: t } = e;
            return t === Z.$pd.PLAYING;
        }),
        ei = w !== Z.clD.ONLINE && w !== Z.clD.IDLE && w !== Z.clD.DND,
        er = (0, K.A2)(t.id),
        el = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == h || h(Y.x.OPEN_FRIEND_MODAL, t.id),
                    (0, N.openUserProfileModal)({
                        userId: t.id,
                        guildId: k,
                        channelId: L,
                        appContext: c,
                    });
            },
            [c, L, k, h, t.id],
        );
    return (0, i.jsx)(z.D, {
        listItemId: E,
        outerRef: I,
        isVisuallyOffline: ei,
        recentlyAddedTimestampMs: g ? er : null,
        onClick: ee,
        onContextMenu: R,
        avatar: (0, i.jsx)(
            u.euF,
            q(Q({}, b), {
                size: $,
                src: v,
                isMobile: j,
                isTyping: !1,
                status: C,
                className: J.my,
                "aria-label": t.username,
                statusTooltip: !0,
                avatarDecoration: A,
            }),
        ),
        primaryText: (0, i.jsxs)("div", {
            className: J.QV,
            children: [
                (0, i.jsx)(_.A, {
                    userName: B,
                    displayNameStyles: U,
                    effectDisplayType: x.G.STATIC,
                    textClassName: J.Xh,
                }),
                (0, i.jsx)(T.Ay, {
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
                              text: X.intl.string(X.t.iXAna6),
                              "aria-label": X.intl.string(X.t.iXAna6),
                              children: (0, i.jsx)(u.K0, {
                                  icon: u.rMq,
                                  "aria-label": X.intl.string(X.t.iXAna6),
                                  size: "sm",
                                  variant: "icon-only",
                                  onClick: el,
                              }),
                          }),
                          (0, i.jsx)(F.j, {
                              tab: V.x.FRIENDS,
                              targetId: t.id,
                          }),
                      ],
                  })
                : et
                  ? (0, i.jsx)("div", {
                        className: J.im,
                        children: (0, i.jsx)(H.B, {
                            activities: n,
                            gameProfileEntry: l,
                            gameIconSize: S.M.SMALL,
                            platformIconSizePx: 24,
                        }),
                    })
                  : null,
    });
});
ei.displayName = "FriendListRow";
let er = r.memo((e) => {
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
            listItemId: I,
            intersectionRef: j,
            isMobile: T,
            newStatus: C,
            status: N,
            renderSubtext: w,
            renderUserContextMenu: P,
        } = en({
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
        D = (0, O.A)({
            userId: t.id,
            guildId: null,
        }),
        R = G.Ay.useName(null, null, t),
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
                    null == p || p(Y.x.ACCEPT_FRIEND_REQUEST, t.id),
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
                    null == p || p(Y.x.DECLINE_FRIEND_REQUEST, t.id),
                    k("decline", () =>
                        c.A.removeRelationship(t.id, {
                            location: "friends-popout",
                        }),
                    );
            },
            [t.id, p, k],
        ),
        V = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == p || p(Y.x.CANCEL_FRIEND_REQUEST, t.id),
                    k("cancel", () =>
                        c.A.cancelFriendRequest(t.id, {
                            location: "friends-popout",
                        }),
                    );
            },
            [t.id, p, k],
        ),
        F = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null == p || p(Y.x.SEND_FRIEND_REQUEST, t.id),
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
        K = n.some((e) => {
            let { type: t } = e;
            return t === Z.$pd.PLAYING;
        }),
        B = N !== Z.clD.ONLINE && N !== Z.clD.IDLE && N !== Z.clD.DND;
    return (0, i.jsx)(z.D, {
        listItemId: I,
        outerRef: j,
        isVisuallyOffline: B,
        onClick: M,
        onContextMenu: P,
        avatar: (0, i.jsx)(
            u.euF,
            q(Q({}, E), {
                size: $,
                src: b,
                isMobile: T,
                isTyping: !1,
                status: C,
                className: J.my,
                "aria-label": t.username,
                statusTooltip: !0,
                avatarDecoration: v,
            }),
        ),
        primaryText: (0, i.jsx)(_.A, {
            userName: R,
            displayNameStyles: D,
            effectDisplayType: x.G.PLAIN,
            textClassName: J.Xh,
        }),
        secondaryText: w(),
        rightActions: () => {
            let e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    K
                        ? (0, i.jsx)("div", {
                              className: J.im,
                              children: (0, i.jsx)(H.B, {
                                  activities: n,
                                  gameProfileEntry: l,
                                  gameIconSize: S.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    ((e = null != m),
                    a === Z.eA$.PENDING_INCOMING
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.m_, {
                                      text: X.intl.string(X.t.MMlhsr),
                                      children: (0, i.jsx)(u.K0, {
                                          "aria-label": X.intl.string(X.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: u.A9s,
                                          onClick: L,
                                          disabled: e,
                                      }),
                                  }),
                                  (0, i.jsx)(o.m_, {
                                      text: X.intl.string(X.t.ytCpKs),
                                      children: (0, i.jsx)(u.K0, {
                                          "aria-label": X.intl.string(X.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: u.PGe,
                                          onClick: U,
                                          disabled: e,
                                      }),
                                  }),
                              ],
                          })
                        : a === Z.eA$.PENDING_OUTGOING
                          ? (0, i.jsx)(o.m_, {
                                text: X.intl.string(X.t["bTfA//"]),
                                children: (0, i.jsx)(u.K0, {
                                    "aria-label": X.intl.string(X.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: u.lI8,
                                    onClick: V,
                                    disabled: e,
                                }),
                            })
                          : s
                            ? (0, i.jsx)(o.m_, {
                                  text: X.intl.string(X.t.w5uwoI),
                                  children: (0, i.jsx)(u.K0, {
                                      "aria-label": X.intl.string(X.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: u.Rvf,
                                      onClick: F,
                                      disabled: e,
                                  }),
                              })
                            : null),
                ],
            });
        },
    });
});
er.displayName = "FriendRequestRow";
let el = r.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === Z.eA$.PENDING_INCOMING || t === Z.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, i.jsx)(er, Q({}, e))
        : (0, i.jsx)(ei, Q({}, e)),
);
el.displayName = "FriendRow";
