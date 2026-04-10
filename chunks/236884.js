n.d(t, { Z: () => ea }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(735438),
    s = n(172218),
    a = n(311907),
    o = n(435371),
    u = n(397927),
    d = n(960076),
    c = n(566903),
    h = n(397244),
    g = n(714114),
    m = n(729551),
    f = n(864436),
    A = n(835072),
    I = n(87664),
    E = n(47167),
    p = n(20805),
    _ = n(506326),
    S = n(365185),
    x = n(490427),
    T = n(609425),
    N = n(922301),
    C = n(750112),
    v = n(769015),
    y = n(834757),
    M = n(145497),
    R = n(534400),
    D = n(941971),
    b = n(854627),
    O = n(10862),
    w = n(616356),
    j = n(734057),
    U = n(71393),
    L = n(290863),
    k = n(222823),
    G = n(309010),
    P = n(461213),
    F = n(287809),
    V = n(562153),
    z = n(914853),
    H = n(1404),
    Y = n(243612),
    W = n(578093),
    B = n(296064),
    Z = n(20796),
    X = n(67103),
    K = n(576420),
    $ = n(70191),
    q = n(652215),
    J = n(985018),
    Q = n(925031);
let ee = u._3J.SIZE_32,
    et = [_.iq, _.tR, _.K7, _.sp, _.MK];
function en(e) {
    let t,
        { channel: n, textVariant: s, activities: o, applicationStream: d } = e,
        h = (0, a.bG)([F.default], () => F.default.getCurrentUser()),
        g = (0, u.S31)(q.clD.ONLINE),
        m = (0, E.Ay)(n),
        p = (0, a.bG)([U.A], () => U.A.getGuild(n.getGuildId())),
        _ = p?.name;
    (0, I.A)(h?.id);
    let S = d?.discoverable !== !1 ? d : null,
        x = (0, y.AO)(S),
        T = n.isDM() || n.isGroupDM(),
        N = l.useMemo(
            () =>
                (0, r.uniqWith)(
                    o?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== q.$pd.CUSTOM_STATUS && t !== q.$pd.HANG_STATUS && n !== x?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [o, x?.name],
        ),
        C = N?.[0];
    return (0, i.jsxs)("div", {
        className: Q.fE,
        children: [
            ((t = N?.length > 0),
            (0, i.jsxs)("div", {
                className: Q._9,
                children: [
                    !t &&
                        !T &&
                        null != p &&
                        (0, i.jsxs)("div", {
                            className: Q.j1,
                            children: [
                                (0, i.jsx)(M.Ay, { guild: p, iconSize: 14 }),
                                (0, i.jsx)(u.Text, {
                                    className: Q.J5,
                                    variant: s,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: _,
                                }),
                                (0, i.jsx)(u._BQ, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, i.jsx)(O.A, { size: "custom", color: g, channel: n, className: Q.WT }),
                    (0, i.jsx)(u.Text, {
                        variant: s,
                        color: "currentColor",
                        lineClamp: 1,
                        className: Q.Qo,
                        children: m,
                    }),
                ],
            })),
            (() => {
                if (null == C) return null;
                let { text: e } = (0, c.A)(C, !1),
                    t = (0, A.f)(C);
                return null == e && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: Q._9,
                          children: [
                              null != t ? (0, i.jsx)(f.A, { icon: t, className: Q.WT }) : void 0,
                              null != e
                                  ? (0, i.jsx)(u.Text, {
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
function ei(e) {
    let {
            user: t,
            activities: n,
            relationshipType: r,
            isSuggestion: o,
            appContext: u,
            onPrimaryAction: c,
            onContextMenu: f,
            onFriendVisible: A,
            friendGroupId: I,
        } = e,
        E = t.id,
        {
            avatarDecorationSrc: T,
            avatarSrc: N,
            eventHandlers: C,
        } = (0, b.A)({ userId: E, size: ee, animateOnHover: !0, guildId: null }),
        v = l.useMemo(() => {
            let e = I ?? "no-group",
                t = r ?? "no-relationship",
                n = o ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${E}:${e}:${t}:${n}`;
        }, [I, o, r, E]),
        y = (0, a.yK)([P.A], () =>
            [...P.A.getActivities(!0), ...P.A.getHiddenActivities()].filter(
                (e) => e.type === q.$pd.PLAYING && null != e.application_id,
            ),
        ),
        { voiceChannel: M } = (0, g.A)({ userId: t.id }),
        {
            status: R,
            applicationStream: D,
            isMobile: O,
            newStatus: j,
        } = (0, a.cf)([L.A, w.A], () => {
            let e = L.A.getStatus(t.id),
                i = w.A.getAnyStreamForUser(t.id),
                l = L.A.isMobileOnline(t.id),
                r = (0, d.A)(n ?? []) ? q.clD.STREAMING : e;
            return { status: e, applicationStream: i, isMobile: l, newStatus: r };
        }, [t.id, n]),
        U = y.length > 0,
        k = l.useCallback(
            (e) => {
                A?.(E, e, U);
            },
            [A, E, U],
        ),
        G = (0, s.K)(k),
        F = l.useMemo(() => n?.find($.A), [n]),
        V = (0, S.A)({ activity: F, user: t }),
        z = (0, p.zD)(V) ? V : void 0,
        H = l.useCallback(() => {
            if (null != z) {
                let e = z.traits,
                    t = { ...z, traits: e.slice(0, 3) };
                return (0, i.jsx)(_.mG, {
                    location: _.N5.FRIENDS_POPOUT,
                    className: Q.cV,
                    children: et.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, h.A)({ activities: n, status: R, applicationStream: D, voiceChannel: M })) {
                let e = !(0, x.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === q.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === q.$pd.PLAYING;
                }) == null && null != M
                    ? (0, i.jsx)(en, {
                          channel: M,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: D,
                      })
                    : (0, i.jsx)(m.A, {
                          user: t,
                          activities: n,
                          applicationStream: D,
                          voiceChannel: M,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, R, D, M, z]);
    return {
        avatarDecorationSrc: T,
        avatarSrc: N,
        eventHandlers: C,
        gameProfileEntry: z,
        listItemId: v,
        intersectionRef: G,
        isMobile: O,
        newStatus: j,
        status: R,
        currentUserPlayingActivities: y,
        renderSubtext: H,
        renderUserContextMenu: l.useCallback(
            (e) => {
                f?.({ type: X.K.FRIEND_ROW, event: e, user: t, friendGroupId: I });
            },
            [I, f, t],
        ),
    };
}
function el(e) {
    return (0, a.bG)([j.A, k.Ay], () => {
        let t = j.A.getDMFromUserId(e) ?? null;
        return null != t && k.Ay.hasUnread(t);
    }, [e]);
}
let er = l.memo((e) => {
    let {
            user: t,
            activities: n = [],
            closeParentPopout: r,
            appContext: s,
            nickname: o,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: g,
            shouldHighlightIfRecentlyAdded: m,
            relationshipType: f,
            isSuggestion: A,
        } = e,
        {
            avatarDecorationSrc: I,
            avatarSrc: E,
            eventHandlers: p,
            gameProfileEntry: _,
            listItemId: S,
            intersectionRef: x,
            isMobile: y,
            newStatus: M,
            status: b,
            currentUserPlayingActivities: O,
            renderSubtext: w,
            renderUserContextMenu: U,
        } = ei({
            user: t,
            activities: n,
            relationshipType: f,
            isSuggestion: A,
            appContext: s,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: g,
        }),
        L = el(t.id),
        { guildId: k, channelId: P } = (0, a.cf)([G.A, j.A], () => {
            let e = G.A.getVoiceChannelId() ?? G.A.getChannelId();
            return { guildId: null != e ? j.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        F = (0, T.A)({ userId: t.id, guildId: k }),
        J = V.Ay.useName(k, P, t),
        et = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), d?.({ type: X.c.OPEN_DIRECT_MESSAGE, userId: t.id }), r?.();
            },
            [r, d, t.id],
        ),
        en = n.some($.A),
        er = (0, Y.b4)(),
        es = l.useMemo(() => {
            let e = er?.altId ?? er?.id;
            return null != e && n.some((t) => (0, $.A)(t) && t.application_id === e);
        }, [n, er]),
        ea = b !== q.clD.ONLINE && b !== q.clD.IDLE && b !== q.clD.DND,
        eo = (0, K.A2)(t.id),
        eu = l.useCallback(
            (e) => {
                let l = [],
                    r = e || es;
                return (
                    e && l.push((0, i.jsx)(W.j, { tab: z.x.FRIENDS, targetId: t.id }, "favorite")),
                    r &&
                        l.push(
                            (0, i.jsx)(
                                B.r,
                                {
                                    user: t,
                                    friendActivities: n,
                                    currentUserPlayingActivities: O,
                                    gameProfileEntry: _,
                                    onPrimaryAction: d,
                                },
                                "game-action",
                            ),
                        ),
                    en &&
                        l.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: Q.im,
                                    children: (0, i.jsx)(Z.B, {
                                        activities: n,
                                        gameProfileEntry: _,
                                        gameIconSize: v.M.SMALL,
                                        platformIconSizePx: 24,
                                    }),
                                },
                                "activity-icon",
                            ),
                        ),
                    l.length > 0 ? l : null
                );
            },
            [n, O, _, en, es, d, t],
        );
    return (0, i.jsx)(H.D, {
        listItemId: S,
        outerRef: x,
        leftIndicator: (0, i.jsx)(D.A, { unread: L }),
        isVisuallyOffline: ea,
        recentlyAddedTimestampMs: m ? eo : null,
        onClick: et,
        onContextMenu: U,
        avatar: (0, i.jsx)(u.euF, {
            ...p,
            size: ee,
            src: E,
            isMobile: y,
            isTyping: !1,
            status: M,
            className: Q.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: I,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: Q.QV,
            children: [
                (0, i.jsx)(C.A, {
                    userName: J,
                    displayNameStyles: F,
                    effectDisplayType: N.G.STATIC,
                    textClassName: Q.Xh,
                }),
                (0, i.jsx)(R.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: w(),
        rightActions: eu,
    });
});
er.displayName = "FriendListRow";
let es = l.memo((e) => {
    let {
            user: t,
            activities: n = [],
            relationshipType: r,
            isSuggestion: s,
            appContext: a,
            nickname: d,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: m,
        } = e,
        {
            avatarDecorationSrc: f,
            avatarSrc: A,
            eventHandlers: I,
            gameProfileEntry: E,
            listItemId: p,
            intersectionRef: _,
            isMobile: S,
            newStatus: x,
            status: y,
            renderSubtext: M,
            renderUserContextMenu: R,
        } = ei({
            user: t,
            activities: n,
            relationshipType: r,
            isSuggestion: s,
            appContext: a,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: m,
        }),
        b = el(t.id),
        O = (0, T.A)({ userId: t.id, guildId: null }),
        w = V.Ay.useName(null, null, t),
        [j, U] = l.useState(!1),
        L = l.useRef(null),
        k = l.useCallback(() => {
            U(!0),
                null != L.current && clearTimeout(L.current),
                (L.current = setTimeout(() => {
                    U(!1), (L.current = null);
                }, 2e3));
        }, []);
    l.useEffect(
        () => () => {
            null != L.current && clearTimeout(L.current);
        },
        [],
    );
    let G = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), c?.({ type: X.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [c, t.id],
        ),
        P = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    j || (k(), c?.({ type: X.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, j, k],
        ),
        F = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    j || (k(), c?.({ type: X.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, j, k],
        ),
        z = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    j || (k(), c?.({ type: X.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, j, k],
        ),
        Y = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    j || (k(), c?.({ type: X.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, j, k],
        ),
        W = n.some((e) => {
            let { type: t } = e;
            return t === q.$pd.PLAYING;
        }),
        B = y !== q.clD.ONLINE && y !== q.clD.IDLE && y !== q.clD.DND;
    return (0, i.jsx)(H.D, {
        listItemId: p,
        outerRef: _,
        leftIndicator: (0, i.jsx)(D.A, { unread: b }),
        isVisuallyOffline: B,
        onClick: G,
        onContextMenu: R,
        avatar: (0, i.jsx)(u.euF, {
            ...I,
            size: ee,
            src: A,
            isMobile: S,
            isTyping: !1,
            status: x,
            className: Q.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: f,
        }),
        primaryText: (0, i.jsx)(C.A, {
            userName: w,
            displayNameStyles: O,
            effectDisplayType: N.G.PLAIN,
            textClassName: Q.Xh,
        }),
        secondaryText: M(),
        rightActions: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    W
                        ? (0, i.jsx)("div", {
                              className: Q.im,
                              children: (0, i.jsx)(Z.B, {
                                  activities: n,
                                  gameProfileEntry: E,
                                  gameIconSize: v.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    r === q.eA$.PENDING_INCOMING
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.m_, {
                                      text: J.intl.string(J.t.MMlhsr),
                                      children: (0, i.jsx)(u.K0, {
                                          "aria-label": J.intl.string(J.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: u.A9s,
                                          onClick: P,
                                          disabled: j,
                                      }),
                                  }),
                                  (0, i.jsx)(o.m_, {
                                      text: J.intl.string(J.t.ytCpKs),
                                      children: (0, i.jsx)(u.K0, {
                                          "aria-label": J.intl.string(J.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: u.PGe,
                                          onClick: F,
                                          disabled: j,
                                      }),
                                  }),
                              ],
                          })
                        : r === q.eA$.PENDING_OUTGOING
                          ? (0, i.jsx)(o.m_, {
                                text: J.intl.string(J.t["bTfA//"]),
                                children: (0, i.jsx)(u.K0, {
                                    "aria-label": J.intl.string(J.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: u.lI8,
                                    onClick: z,
                                    disabled: j,
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
                                      onClick: Y,
                                      disabled: j,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
es.displayName = "FriendRequestRow";
let ea = l.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === q.eA$.PENDING_INCOMING || t === q.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, i.jsx)(es, { ...e })
        : (0, i.jsx)(er, { ...e }),
);
ea.displayName = "FriendRow";
