n.d(t, { Z: () => eE }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(735438),
    s = n(172218),
    a = n(311907),
    u = n(990078),
    o = n(778712),
    d = n(935154),
    c = n(834730),
    h = n(320448),
    g = n(97808),
    m = n(408278),
    I = n(933832),
    E = n(789645),
    A = n(565829),
    f = n(283973),
    p = n(960076),
    S = n(566903),
    N = n(397244),
    x = n(714114),
    T = n(729551),
    _ = n(864436),
    y = n(835072),
    v = n(87664),
    C = n(47167),
    R = n(20805),
    D = n(506326),
    b = n(365185),
    j = n(490427),
    M = n(609425),
    k = n(922301),
    O = n(750112),
    w = n(769015),
    L = n(834757),
    F = n(145497),
    G = n(534400),
    U = n(941971),
    P = n(854627),
    V = n(10862),
    H = n(616356),
    Y = n(734057),
    K = n(71393),
    z = n(290863),
    X = n(222823),
    Z = n(309010),
    B = n(461213),
    W = n(287809),
    $ = n(562153),
    q = n(914853),
    Q = n(1404),
    J = n(243612),
    ee = n(578093),
    et = n(296064),
    en = n(20796),
    el = n(67103),
    ei = n(576420),
    er = n(70191),
    es = n(652215),
    ea = n(985018),
    eu = n(760023);
let eo = o._3.SIZE_32,
    ed = [D.iq, D.tR, D.K7, D.sp, D.MK];
function ec(e) {
    let t,
        { channel: n, textVariant: s, activities: u, applicationStream: o } = e,
        g = (0, a.bG)([W.default], () => W.default.getCurrentUser()),
        m = (0, d.S3)(es.clD.ONLINE),
        I = (0, C.Ay)(n),
        E = (0, a.bG)([K.A], () => K.A.getGuild(n.getGuildId())),
        A = E?.name;
    (0, v.A)(g?.id);
    let f = o?.discoverable !== !1 ? o : null,
        p = (0, L.AO)(f),
        N = n.isDM() || n.isGroupDM(),
        x = i.useMemo(
            () =>
                (0, r.uniqWith)(
                    u?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== es.$pd.CUSTOM_STATUS && t !== es.$pd.HANG_STATUS && n !== p?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [u, p?.name],
        ),
        T = x?.[0];
    return (0, l.jsxs)("div", {
        className: eu.fE,
        children: [
            ((t = x?.length > 0),
            (0, l.jsxs)("div", {
                className: eu._9,
                children: [
                    !t &&
                        !N &&
                        null != E &&
                        (0, l.jsxs)("div", {
                            className: eu.j1,
                            children: [
                                (0, l.jsx)(F.Ay, { guild: E, iconSize: 14 }),
                                (0, l.jsx)(c.E, {
                                    className: eu.J5,
                                    variant: s,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: A,
                                }),
                                (0, l.jsx)(h._, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, l.jsx)(V.A, { size: "custom", color: m, channel: n, className: eu.WT }),
                    (0, l.jsx)(c.E, { variant: s, color: "currentColor", lineClamp: 1, className: eu.Qo, children: I }),
                ],
            })),
            (() => {
                if (null == T) return null;
                let { text: e } = (0, S.A)(T, !1),
                    t = (0, y.f)(T);
                return null == e && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: eu._9,
                          children: [
                              null != t ? (0, l.jsx)(_.A, { icon: t, className: eu.WT }) : void 0,
                              null != e
                                  ? (0, l.jsx)(c.E, {
                                        variant: s,
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
function eh(e) {
    let {
            user: t,
            activities: n,
            relationshipType: r,
            isSuggestion: u,
            appContext: o,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: g,
        } = e,
        m = t.id,
        {
            avatarDecorationSrc: I,
            avatarSrc: E,
            eventHandlers: A,
        } = (0, P.A)({ userId: m, size: eo, animateOnHover: !0, guildId: null }),
        f = i.useMemo(() => {
            let e = g ?? "no-group",
                t = r ?? "no-relationship",
                n = u ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${m}:${e}:${t}:${n}`;
        }, [g, u, r, m]),
        S = (0, a.yK)([B.A], () =>
            [...B.A.getActivities(!0), ...B.A.getHiddenActivities()].filter(
                (e) => e.type === es.$pd.PLAYING && null != e.application_id,
            ),
        ),
        { voiceChannel: _ } = (0, x.A)({ userId: t.id }),
        {
            status: y,
            applicationStream: v,
            isMobile: C,
            newStatus: M,
        } = (0, a.cf)([z.A, H.A], () => {
            let e = z.A.getStatus(t.id),
                l = H.A.getAnyStreamForUser(t.id),
                i = z.A.isMobileOnline(t.id),
                r = (0, p.A)(n ?? []) ? es.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: r };
        }, [t.id, n]),
        k = S.length > 0,
        O = i.useCallback(
            (e) => {
                h?.(m, e, k);
            },
            [h, m, k],
        ),
        w = (0, s.K)(O),
        L = i.useMemo(() => n?.find(er.A), [n]),
        F = (0, b.A)({ activity: L, user: t }),
        G = (0, R.zD)(F) ? F : void 0,
        U = i.useCallback(() => {
            if (null != G) {
                let e = G.traits,
                    t = { ...G, traits: e.slice(0, 3) };
                return (0, l.jsx)(D.mG, {
                    location: D.N5.FRIENDS_POPOUT,
                    className: eu.cV,
                    children: ed.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, N.A)({ activities: n, status: y, applicationStream: v, voiceChannel: _ })) {
                let e = !(0, j.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === es.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === es.$pd.PLAYING;
                }) == null && null != _
                    ? (0, l.jsx)(ec, {
                          channel: _,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: v,
                      })
                    : (0, l.jsx)(T.A, {
                          user: t,
                          activities: n,
                          applicationStream: v,
                          voiceChannel: _,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, y, v, _, G]);
    return {
        avatarDecorationSrc: I,
        avatarSrc: E,
        eventHandlers: A,
        gameProfileEntry: G,
        listItemId: f,
        intersectionRef: w,
        isMobile: C,
        newStatus: M,
        status: y,
        currentUserPlayingActivities: S,
        renderSubtext: U,
        renderUserContextMenu: i.useCallback(
            (e) => {
                c?.({ type: el.K.FRIEND_ROW, event: e, user: t, friendGroupId: g });
            },
            [g, c, t],
        ),
    };
}
function eg(e) {
    return (0, a.bG)([Y.A, X.Ay], () => {
        let t = Y.A.getDMFromUserId(e) ?? null;
        return null != t && X.Ay.hasUnread(t);
    }, [e]);
}
let em = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            closeParentPopout: r,
            appContext: s,
            nickname: u,
            onPrimaryAction: o,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
            shouldHighlightIfRecentlyAdded: m,
            relationshipType: I,
            isSuggestion: E,
        } = e,
        {
            avatarDecorationSrc: A,
            avatarSrc: f,
            eventHandlers: p,
            gameProfileEntry: S,
            listItemId: N,
            intersectionRef: x,
            isMobile: T,
            newStatus: _,
            status: y,
            currentUserPlayingActivities: v,
            renderSubtext: C,
            renderUserContextMenu: R,
        } = eh({
            user: t,
            activities: n,
            relationshipType: I,
            isSuggestion: E,
            appContext: s,
            onPrimaryAction: o,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        }),
        D = eg(t.id),
        { guildId: b, channelId: j } = (0, a.cf)([Z.A, Y.A], () => {
            let e = Z.A.getVoiceChannelId() ?? Z.A.getChannelId();
            return { guildId: null != e ? Y.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        L = (0, M.A)({ userId: t.id, guildId: b }),
        F = $.Ay.useName(b, j, t),
        P = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), o?.({ type: el.c.OPEN_DIRECT_MESSAGE, userId: t.id }), r?.();
            },
            [r, o, t.id],
        ),
        V = n.some(er.A),
        H = (0, J.b4)(),
        K = i.useMemo(() => {
            let e = H?.altId ?? H?.id;
            return null != e && n.some((t) => (0, er.A)(t) && t.application_id === e);
        }, [n, H]),
        z = y !== es.clD.ONLINE && y !== es.clD.IDLE && y !== es.clD.DND,
        X = (0, ei.A2)(t.id),
        B = i.useCallback(
            (e) => {
                let i = [],
                    r = e || K;
                return (
                    e && i.push((0, l.jsx)(ee.j, { tab: q.x.FRIENDS, targetId: t.id }, "favorite")),
                    r &&
                        i.push(
                            (0, l.jsx)(
                                et.r,
                                {
                                    user: t,
                                    friendActivities: n,
                                    currentUserPlayingActivities: v,
                                    gameProfileEntry: S,
                                    onPrimaryAction: o,
                                },
                                "game-action",
                            ),
                        ),
                    V &&
                        i.push(
                            (0, l.jsx)(
                                "div",
                                {
                                    className: eu.im,
                                    children: (0, l.jsx)(en.B, {
                                        activities: n,
                                        gameProfileEntry: S,
                                        gameIconSize: w.M.SMALL,
                                        platformIconSizePx: 24,
                                    }),
                                },
                                "activity-icon",
                            ),
                        ),
                    i.length > 0 ? i : null
                );
            },
            [n, v, S, V, K, o, t],
        );
    return (0, l.jsx)(Q.D, {
        listItemId: N,
        outerRef: x,
        leftIndicator: (0, l.jsx)(U.A, { unread: D }),
        isVisuallyOffline: z,
        recentlyAddedTimestampMs: m ? X : null,
        onClick: P,
        onContextMenu: R,
        avatar: (0, l.jsx)(g.eu, {
            ...p,
            size: eo,
            src: f,
            isMobile: T,
            isTyping: !1,
            status: _,
            className: eu.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: A,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: eu.QV,
            children: [
                (0, l.jsx)(O.A, {
                    userName: F,
                    displayNameStyles: L,
                    effectDisplayType: k.G.STATIC,
                    textClassName: eu.Xh,
                }),
                (0, l.jsx)(G.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: C(),
        rightActions: B,
    });
});
em.displayName = "FriendListRow";
let eI = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            relationshipType: r,
            isSuggestion: s,
            appContext: a,
            nickname: o,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: p,
        } = e,
        {
            avatarDecorationSrc: S,
            avatarSrc: N,
            eventHandlers: x,
            gameProfileEntry: T,
            listItemId: _,
            intersectionRef: y,
            isMobile: v,
            newStatus: C,
            status: R,
            renderSubtext: D,
            renderUserContextMenu: b,
        } = eh({
            user: t,
            activities: n,
            relationshipType: r,
            isSuggestion: s,
            appContext: a,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: p,
        }),
        j = eg(t.id),
        L = (0, M.A)({ userId: t.id, guildId: null }),
        F = $.Ay.useName(null, null, t),
        [G, P] = i.useState(!1),
        V = i.useRef(null),
        H = i.useCallback(() => {
            P(!0),
                null != V.current && clearTimeout(V.current),
                (V.current = setTimeout(() => {
                    P(!1), (V.current = null);
                }, 2e3));
        }, []);
    i.useEffect(
        () => () => {
            null != V.current && clearTimeout(V.current);
        },
        [],
    );
    let Y = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), d?.({ type: el.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [d, t.id],
        ),
        K = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    G || (H(), d?.({ type: el.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, d, G, H],
        ),
        z = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    G || (H(), d?.({ type: el.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, d, G, H],
        ),
        X = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    G || (H(), d?.({ type: el.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, d, G, H],
        ),
        Z = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    G || (H(), d?.({ type: el.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, d, G, H],
        ),
        B = n.some((e) => {
            let { type: t } = e;
            return t === es.$pd.PLAYING;
        }),
        W = R !== es.clD.ONLINE && R !== es.clD.IDLE && R !== es.clD.DND;
    return (0, l.jsx)(Q.D, {
        listItemId: _,
        outerRef: y,
        leftIndicator: (0, l.jsx)(U.A, { unread: j }),
        isVisuallyOffline: W,
        onClick: Y,
        onContextMenu: b,
        avatar: (0, l.jsx)(g.eu, {
            ...x,
            size: eo,
            src: N,
            isMobile: v,
            isTyping: !1,
            status: C,
            className: eu.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: S,
        }),
        primaryText: (0, l.jsx)(O.A, {
            userName: F,
            displayNameStyles: L,
            effectDisplayType: k.G.PLAIN,
            textClassName: eu.Xh,
        }),
        secondaryText: D(),
        rightActions: () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    B
                        ? (0, l.jsx)("div", {
                              className: eu.im,
                              children: (0, l.jsx)(en.B, {
                                  activities: n,
                                  gameProfileEntry: T,
                                  gameIconSize: w.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    r === es.eA$.PENDING_INCOMING
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.m, {
                                      text: ea.intl.string(ea.t.MMlhsr),
                                      children: (0, l.jsx)(m.K, {
                                          "aria-label": ea.intl.string(ea.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: I.A,
                                          onClick: K,
                                          disabled: G,
                                      }),
                                  }),
                                  (0, l.jsx)(u.m, {
                                      text: ea.intl.string(ea.t.ytCpKs),
                                      children: (0, l.jsx)(m.K, {
                                          "aria-label": ea.intl.string(ea.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: E.P,
                                          onClick: z,
                                          disabled: G,
                                      }),
                                  }),
                              ],
                          })
                        : r === es.eA$.PENDING_OUTGOING
                          ? (0, l.jsx)(u.m, {
                                text: ea.intl.string(ea.t["bTfA//"]),
                                children: (0, l.jsx)(m.K, {
                                    "aria-label": ea.intl.string(ea.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: A.l,
                                    onClick: X,
                                    disabled: G,
                                }),
                            })
                          : s
                            ? (0, l.jsx)(u.m, {
                                  text: ea.intl.string(ea.t.w5uwoI),
                                  children: (0, l.jsx)(m.K, {
                                      "aria-label": ea.intl.string(ea.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: f.R,
                                      onClick: Z,
                                      disabled: G,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
eI.displayName = "FriendRequestRow";
let eE = i.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === es.eA$.PENDING_INCOMING || t === es.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, l.jsx)(eI, { ...e })
        : (0, l.jsx)(em, { ...e }),
);
eE.displayName = "FriendRow";
