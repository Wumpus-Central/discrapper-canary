n.d(t, { Z: () => en });
var l = n(627968),
    i = n(64700),
    r = n(735438),
    s = n(172218),
    a = n(311907),
    u = n(435371),
    o = n(397927),
    d = n(960076),
    c = n(566903),
    h = n(397244),
    g = n(714114),
    I = n(729551),
    f = n(864436),
    A = n(835072),
    E = n(87664),
    m = n(47167),
    S = n(506326),
    p = n(490427),
    N = n(609425),
    T = n(922301),
    _ = n(750112),
    C = n(769015),
    y = n(834757),
    x = n(145497),
    v = n(534400),
    M = n(941971),
    D = n(854627),
    R = n(10862),
    U = n(616356),
    O = n(734057),
    G = n(71393),
    b = n(290863),
    w = n(222823),
    L = n(309010),
    F = n(461213),
    k = n(287809),
    P = n(562153),
    j = n(914853),
    V = n(1404),
    H = n(578093),
    Y = n(20796),
    W = n(67103),
    z = n(576420),
    $ = n(652215),
    B = n(985018),
    K = n(783346);
let X = o._3J.SIZE_32,
    Z = [S.iq, S.tR, S.K7, S.sp, S.MK];
function Q(e) {
    let t,
        { channel: n, textVariant: s, activities: u, applicationStream: d } = e,
        h = (0, a.bG)([k.default], () => k.default.getCurrentUser()),
        g = (0, o.S31)($.clD.ONLINE),
        I = (0, m.Ay)(n),
        S = (0, a.bG)([G.A], () => G.A.getGuild(n.getGuildId())),
        p = S?.name;
    (0, E.A)(h?.id);
    let N = d?.discoverable !== !1 ? d : null,
        T = (0, y.AO)(N),
        _ = n.isDM() || n.isGroupDM(),
        C = i.useMemo(
            () =>
                (0, r.uniqWith)(
                    u?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== $.$pd.CUSTOM_STATUS && t !== $.$pd.HANG_STATUS && n !== T?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [u, T?.name],
        ),
        v = C?.[0];
    return (0, l.jsxs)("div", {
        className: K.fE,
        children: [
            ((t = C?.length > 0),
            (0, l.jsxs)("div", {
                className: K._9,
                children: [
                    !t &&
                        !_ &&
                        null != S &&
                        (0, l.jsxs)("div", {
                            className: K.j1,
                            children: [
                                (0, l.jsx)(x.Ay, { guild: S, iconSize: 14 }),
                                (0, l.jsx)(o.Text, {
                                    className: K.J5,
                                    variant: s,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: p,
                                }),
                                (0, l.jsx)(o._BQ, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, l.jsx)(R.A, { size: "custom", color: g, channel: n, className: K.WT }),
                    (0, l.jsx)(o.Text, {
                        variant: s,
                        color: "currentColor",
                        lineClamp: 1,
                        className: K.Qo,
                        children: I,
                    }),
                ],
            })),
            (() => {
                if (null == v) return null;
                let { text: e } = (0, c.A)(v, !1),
                    t = (0, A.f)(v);
                return null == e && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: K._9,
                          children: [
                              null != t ? (0, l.jsx)(f.A, { icon: t, className: K.WT }) : void 0,
                              null != e
                                  ? (0, l.jsx)(o.Text, {
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
function q(e) {
    let {
            user: t,
            activities: n,
            gameProfileEntry: r,
            relationshipType: u,
            isSuggestion: o,
            appContext: c,
            onPrimaryAction: f,
            onContextMenu: A,
            onFriendVisible: E,
            friendGroupId: m,
        } = e,
        N = t.id,
        {
            avatarDecorationSrc: T,
            avatarSrc: _,
            eventHandlers: C,
        } = (0, D.A)({ userId: N, size: X, animateOnHover: !0, guildId: null }),
        y = i.useMemo(() => {
            let e = m ?? "no-group",
                t = u ?? "no-relationship",
                n = o ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${N}:${e}:${t}:${n}`;
        }, [m, o, u, N]),
        x = (0, a.yK)([F.A], () =>
            F.A.getActivities().filter((e) => e.type === $.$pd.PLAYING && null != e.application_id),
        ),
        { voiceChannel: v } = (0, g.A)({ userId: t.id }),
        {
            status: M,
            applicationStream: R,
            isMobile: O,
            newStatus: G,
        } = (0, a.cf)([b.A, U.A], () => {
            let e = b.A.getStatus(t.id),
                l = U.A.getAnyStreamForUser(t.id),
                i = b.A.isMobileOnline(t.id),
                r = (0, d.A)(n ?? []) ? $.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: r };
        }, [t.id, n]),
        w = x.length > 0,
        L = i.useCallback(
            (e) => {
                E?.(N, e, w);
            },
            [E, N, w],
        ),
        k = (0, s.K)(L),
        P = i.useCallback(() => {
            if (null != r) {
                let e = r.traits,
                    t = { ...r, traits: e.slice(0, 3) };
                return (0, l.jsx)(S.mG, {
                    location: S.N5.FRIENDS_POPOUT,
                    className: K.cV,
                    children: Z.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, h.A)({ activities: n, status: M, applicationStream: R, voiceChannel: v })) {
                let e = !(0, p.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === $.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === $.$pd.PLAYING;
                }) == null && null != v
                    ? (0, l.jsx)(Q, {
                          channel: v,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: R,
                      })
                    : (0, l.jsx)(I.A, {
                          user: t,
                          activities: n,
                          applicationStream: R,
                          voiceChannel: v,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, M, R, v, r]);
    return {
        avatarDecorationSrc: T,
        avatarSrc: _,
        eventHandlers: C,
        listItemId: y,
        intersectionRef: k,
        isMobile: O,
        newStatus: G,
        status: M,
        renderSubtext: P,
        renderUserContextMenu: i.useCallback(
            (e) => {
                A?.({ type: W.K.FRIEND_ROW, event: e, user: t, friendGroupId: m });
            },
            [m, A, t],
        ),
    };
}
function J(e) {
    return (0, a.bG)([O.A, w.Ay], () => {
        let t = O.A.getDMFromUserId(e) ?? null;
        return null != t && w.Ay.hasUnread(t);
    }, [e]);
}
let ee = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: r,
            closeParentPopout: s,
            appContext: d,
            nickname: c,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: f,
            shouldHighlightIfRecentlyAdded: A,
            relationshipType: E,
            isSuggestion: m,
        } = e,
        {
            avatarDecorationSrc: S,
            avatarSrc: p,
            eventHandlers: y,
            listItemId: x,
            intersectionRef: D,
            isMobile: R,
            newStatus: U,
            status: G,
            renderSubtext: b,
            renderUserContextMenu: w,
        } = q({
            user: t,
            activities: n,
            gameProfileEntry: r,
            relationshipType: E,
            isSuggestion: m,
            appContext: d,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: f,
        }),
        F = J(t.id),
        { guildId: k, channelId: Z } = (0, a.cf)([L.A, O.A], () => {
            let e = L.A.getVoiceChannelId() ?? L.A.getChannelId();
            return { guildId: null != e ? O.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        Q = (0, N.A)({ userId: t.id, guildId: k }),
        ee = P.Ay.useName(k, Z, t),
        et = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), h?.({ type: W.c.OPEN_DIRECT_MESSAGE, userId: t.id }), s?.();
            },
            [s, h, t.id],
        ),
        en = n.some((e) => {
            let { type: t } = e;
            return t === $.$pd.PLAYING;
        }),
        el = G !== $.clD.ONLINE && G !== $.clD.IDLE && G !== $.clD.DND,
        ei = (0, z.A2)(t.id),
        er = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    h?.({ type: W.c.OPEN_FRIEND_MODAL, userId: t.id, guildId: k ?? void 0, channelId: Z ?? void 0 });
            },
            [Z, k, h, t.id],
        );
    return (0, l.jsx)(V.D, {
        listItemId: x,
        outerRef: D,
        leftIndicator: (0, l.jsx)(M.A, { unread: F }),
        isVisuallyOffline: el,
        recentlyAddedTimestampMs: A ? ei : null,
        onClick: et,
        onContextMenu: w,
        avatar: (0, l.jsx)(o.euF, {
            ...y,
            size: X,
            src: p,
            isMobile: R,
            isTyping: !1,
            status: U,
            className: K.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: S,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: K.QV,
            children: [
                (0, l.jsx)(_.A, {
                    userName: ee,
                    displayNameStyles: Q,
                    effectDisplayType: T.G.STATIC,
                    textClassName: K.Xh,
                }),
                (0, l.jsx)(v.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: b(),
        rightActions: (e) =>
            e
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.m_, {
                              text: B.intl.string(B.t.iXAna6),
                              "aria-label": B.intl.string(B.t.iXAna6),
                              children: (0, l.jsx)(o.K0, {
                                  icon: o.rMq,
                                  "aria-label": B.intl.string(B.t.iXAna6),
                                  size: "sm",
                                  variant: "icon-only",
                                  onClick: er,
                              }),
                          }),
                          (0, l.jsx)(H.j, { tab: j.x.FRIENDS, targetId: t.id }),
                      ],
                  })
                : en
                  ? (0, l.jsx)("div", {
                        className: K.im,
                        children: (0, l.jsx)(Y.B, {
                            activities: n,
                            gameProfileEntry: r,
                            gameIconSize: C.M.SMALL,
                            platformIconSizePx: 24,
                        }),
                    })
                  : null,
    });
});
ee.displayName = "FriendListRow";
let et = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: r,
            relationshipType: s,
            isSuggestion: a,
            appContext: d,
            nickname: c,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: f,
        } = e,
        {
            avatarDecorationSrc: A,
            avatarSrc: E,
            eventHandlers: m,
            listItemId: S,
            intersectionRef: p,
            isMobile: y,
            newStatus: x,
            status: v,
            renderSubtext: D,
            renderUserContextMenu: R,
        } = q({
            user: t,
            activities: n,
            gameProfileEntry: r,
            relationshipType: s,
            isSuggestion: a,
            appContext: d,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: f,
        }),
        U = J(t.id),
        O = (0, N.A)({ userId: t.id, guildId: null }),
        G = P.Ay.useName(null, null, t),
        [b, w] = i.useState(!1),
        L = i.useRef(null),
        F = i.useCallback(() => {
            w(!0),
                null != L.current && clearTimeout(L.current),
                (L.current = setTimeout(() => {
                    w(!1), (L.current = null);
                }, 2e3));
        }, []);
    i.useEffect(
        () => () => {
            null != L.current && clearTimeout(L.current);
        },
        [],
    );
    let k = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), h?.({ type: W.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [h, t.id],
        ),
        j = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    b || (F(), h?.({ type: W.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, b, F],
        ),
        H = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    b || (F(), h?.({ type: W.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, b, F],
        ),
        z = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    b || (F(), h?.({ type: W.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, b, F],
        ),
        Z = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    b || (F(), h?.({ type: W.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, b, F],
        ),
        Q = n.some((e) => {
            let { type: t } = e;
            return t === $.$pd.PLAYING;
        }),
        ee = v !== $.clD.ONLINE && v !== $.clD.IDLE && v !== $.clD.DND;
    return (0, l.jsx)(V.D, {
        listItemId: S,
        outerRef: p,
        leftIndicator: (0, l.jsx)(M.A, { unread: U }),
        isVisuallyOffline: ee,
        onClick: k,
        onContextMenu: R,
        avatar: (0, l.jsx)(o.euF, {
            ...m,
            size: X,
            src: E,
            isMobile: y,
            isTyping: !1,
            status: x,
            className: K.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: A,
        }),
        primaryText: (0, l.jsx)(_.A, {
            userName: G,
            displayNameStyles: O,
            effectDisplayType: T.G.PLAIN,
            textClassName: K.Xh,
        }),
        secondaryText: D(),
        rightActions: () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    Q
                        ? (0, l.jsx)("div", {
                              className: K.im,
                              children: (0, l.jsx)(Y.B, {
                                  activities: n,
                                  gameProfileEntry: r,
                                  gameIconSize: C.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    s === $.eA$.PENDING_INCOMING
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.m_, {
                                      text: B.intl.string(B.t.MMlhsr),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": B.intl.string(B.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.A9s,
                                          onClick: j,
                                          disabled: b,
                                      }),
                                  }),
                                  (0, l.jsx)(u.m_, {
                                      text: B.intl.string(B.t.ytCpKs),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": B.intl.string(B.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.PGe,
                                          onClick: H,
                                          disabled: b,
                                      }),
                                  }),
                              ],
                          })
                        : s === $.eA$.PENDING_OUTGOING
                          ? (0, l.jsx)(u.m_, {
                                text: B.intl.string(B.t["bTfA//"]),
                                children: (0, l.jsx)(o.K0, {
                                    "aria-label": B.intl.string(B.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: o.lI8,
                                    onClick: z,
                                    disabled: b,
                                }),
                            })
                          : a
                            ? (0, l.jsx)(u.m_, {
                                  text: B.intl.string(B.t.w5uwoI),
                                  children: (0, l.jsx)(o.K0, {
                                      "aria-label": B.intl.string(B.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: o.Rvf,
                                      onClick: Z,
                                      disabled: b,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
et.displayName = "FriendRequestRow";
let en = i.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === $.eA$.PENDING_INCOMING || t === $.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, l.jsx)(et, { ...e })
        : (0, l.jsx)(ee, { ...e }),
);
en.displayName = "FriendRow";
