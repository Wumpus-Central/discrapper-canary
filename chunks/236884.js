n.d(t, { Z: () => J });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    r = n(172218),
    a = n(311907),
    u = n(435371),
    o = n(397927),
    d = n(960076),
    c = n(566903),
    h = n(397244),
    g = n(714114),
    I = n(729551),
    E = n(864436),
    A = n(835072),
    f = n(87664),
    m = n(47167),
    S = n(506326),
    p = n(490427),
    N = n(609425),
    T = n(922301),
    _ = n(750112),
    y = n(769015),
    C = n(834757),
    x = n(145497),
    v = n(534400),
    M = n(854627),
    D = n(10862),
    R = n(616356),
    U = n(734057),
    O = n(71393),
    G = n(290863),
    b = n(309010),
    w = n(461213),
    L = n(287809),
    k = n(562153),
    F = n(914853),
    P = n(1404),
    j = n(578093),
    V = n(20796),
    H = n(67103),
    Y = n(576420),
    z = n(652215),
    W = n(985018),
    B = n(783346);
let $ = o._3J.SIZE_32,
    X = [S.iq, S.tR, S.K7, S.sp, S.MK];
function K(e) {
    let t,
        { channel: n, textVariant: r, activities: u, applicationStream: d } = e,
        h = (0, a.bG)([L.default], () => L.default.getCurrentUser()),
        g = (0, o.S31)(z.clD.ONLINE),
        I = (0, m.Ay)(n),
        S = (0, a.bG)([O.A], () => O.A.getGuild(n.getGuildId())),
        p = S?.name;
    (0, f.A)(h?.id);
    let N = d?.discoverable !== !1 ? d : null,
        T = (0, C.AO)(N),
        _ = n.isDM() || n.isGroupDM(),
        y = i.useMemo(
            () =>
                (0, s.uniqWith)(
                    u?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== z.$pd.CUSTOM_STATUS && t !== z.$pd.HANG_STATUS && n !== T?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [u, T?.name],
        ),
        v = y?.[0];
    return (0, l.jsxs)("div", {
        className: B.fE,
        children: [
            ((t = y?.length > 0),
            (0, l.jsxs)("div", {
                className: B._9,
                children: [
                    !t &&
                        !_ &&
                        null != S &&
                        (0, l.jsxs)("div", {
                            className: B.j1,
                            children: [
                                (0, l.jsx)(x.Ay, { guild: S, iconSize: 14 }),
                                (0, l.jsx)(o.Text, {
                                    className: B.J5,
                                    variant: r,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: p,
                                }),
                                (0, l.jsx)(o._BQ, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, l.jsx)(D.A, { size: "custom", color: g, channel: n, className: B.WT }),
                    (0, l.jsx)(o.Text, {
                        variant: r,
                        color: "currentColor",
                        lineClamp: 1,
                        className: B.Qo,
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
                          className: B._9,
                          children: [
                              null != t ? (0, l.jsx)(E.A, { icon: t, className: B.WT }) : void 0,
                              null != e
                                  ? (0, l.jsx)(o.Text, {
                                        variant: r,
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
function Q(e) {
    let {
            user: t,
            activities: n,
            gameProfileEntry: s,
            relationshipType: u,
            isSuggestion: o,
            appContext: c,
            onPrimaryAction: E,
            onContextMenu: A,
            onFriendVisible: f,
            friendGroupId: m,
        } = e,
        N = t.id,
        {
            avatarDecorationSrc: T,
            avatarSrc: _,
            eventHandlers: y,
        } = (0, M.A)({ userId: N, size: $, animateOnHover: !0, guildId: null }),
        C = i.useMemo(() => {
            let e = m ?? "no-group",
                t = u ?? "no-relationship",
                n = o ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${N}:${e}:${t}:${n}`;
        }, [m, o, u, N]),
        x = (0, a.yK)([w.A], () =>
            w.A.getActivities().filter((e) => e.type === z.$pd.PLAYING && null != e.application_id),
        ),
        { voiceChannel: v } = (0, g.A)({ userId: t.id }),
        {
            status: D,
            applicationStream: U,
            isMobile: O,
            newStatus: b,
        } = (0, a.cf)([G.A, R.A], () => {
            let e = G.A.getStatus(t.id),
                l = R.A.getAnyStreamForUser(t.id),
                i = G.A.isMobileOnline(t.id),
                s = (0, d.A)(n ?? []) ? z.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: s };
        }, [t.id, n]),
        L = x.length > 0,
        k = i.useCallback(
            (e) => {
                f?.(N, e, L);
            },
            [f, N, L],
        ),
        F = (0, r.K)(k),
        P = i.useCallback(() => {
            if (null != s) {
                let e = s.traits,
                    t = { ...s, traits: e.slice(0, 3) };
                return (0, l.jsx)(S.mG, {
                    location: S.N5.FRIENDS_POPOUT,
                    className: B.cV,
                    children: X.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, h.A)({ activities: n, status: D, applicationStream: U, voiceChannel: v })) {
                let e = !(0, p.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === z.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === z.$pd.PLAYING;
                }) == null && null != v
                    ? (0, l.jsx)(K, {
                          channel: v,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: U,
                      })
                    : (0, l.jsx)(I.A, {
                          user: t,
                          activities: n,
                          applicationStream: U,
                          voiceChannel: v,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, D, U, v, s]);
    return {
        avatarDecorationSrc: T,
        avatarSrc: _,
        eventHandlers: y,
        listItemId: C,
        intersectionRef: F,
        isMobile: O,
        newStatus: b,
        status: D,
        renderSubtext: P,
        renderUserContextMenu: i.useCallback(
            (e) => {
                A?.({ type: H.K.FRIEND_ROW, event: e, user: t, friendGroupId: m });
            },
            [m, A, t],
        ),
    };
}
let Z = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: s,
            closeParentPopout: r,
            appContext: d,
            nickname: c,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: E,
            shouldHighlightIfRecentlyAdded: A,
            relationshipType: f,
            isSuggestion: m,
        } = e,
        {
            avatarDecorationSrc: S,
            avatarSrc: p,
            eventHandlers: C,
            listItemId: x,
            intersectionRef: M,
            isMobile: D,
            newStatus: R,
            status: O,
            renderSubtext: G,
            renderUserContextMenu: w,
        } = Q({
            user: t,
            activities: n,
            gameProfileEntry: s,
            relationshipType: f,
            isSuggestion: m,
            appContext: d,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: E,
        }),
        { guildId: L, channelId: X } = (0, a.cf)([b.A, U.A], () => {
            let e = b.A.getVoiceChannelId() ?? b.A.getChannelId();
            return { guildId: null != e ? U.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        K = (0, N.A)({ userId: t.id, guildId: L }),
        Z = k.Ay.useName(L, X, t),
        q = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), h?.({ type: H.c.OPEN_DIRECT_MESSAGE, userId: t.id }), r?.();
            },
            [r, h, t.id],
        ),
        J = n.some((e) => {
            let { type: t } = e;
            return t === z.$pd.PLAYING;
        }),
        ee = O !== z.clD.ONLINE && O !== z.clD.IDLE && O !== z.clD.DND,
        et = (0, Y.A2)(t.id),
        en = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    h?.({ type: H.c.OPEN_FRIEND_MODAL, userId: t.id, guildId: L ?? void 0, channelId: X ?? void 0 });
            },
            [X, L, h, t.id],
        );
    return (0, l.jsx)(P.D, {
        listItemId: x,
        outerRef: M,
        isVisuallyOffline: ee,
        recentlyAddedTimestampMs: A ? et : null,
        onClick: q,
        onContextMenu: w,
        avatar: (0, l.jsx)(o.euF, {
            ...C,
            size: $,
            src: p,
            isMobile: D,
            isTyping: !1,
            status: R,
            className: B.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: S,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: B.QV,
            children: [
                (0, l.jsx)(_.A, {
                    userName: Z,
                    displayNameStyles: K,
                    effectDisplayType: T.G.STATIC,
                    textClassName: B.Xh,
                }),
                (0, l.jsx)(v.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: G(),
        rightActions: (e) =>
            e
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.m_, {
                              text: W.intl.string(W.t.iXAna6),
                              "aria-label": W.intl.string(W.t.iXAna6),
                              children: (0, l.jsx)(o.K0, {
                                  icon: o.rMq,
                                  "aria-label": W.intl.string(W.t.iXAna6),
                                  size: "sm",
                                  variant: "icon-only",
                                  onClick: en,
                              }),
                          }),
                          (0, l.jsx)(j.j, { tab: F.x.FRIENDS, targetId: t.id }),
                      ],
                  })
                : J
                  ? (0, l.jsx)("div", {
                        className: B.im,
                        children: (0, l.jsx)(V.B, {
                            activities: n,
                            gameProfileEntry: s,
                            gameIconSize: y.M.SMALL,
                            platformIconSizePx: 24,
                        }),
                    })
                  : null,
    });
});
Z.displayName = "FriendListRow";
let q = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: s,
            relationshipType: r,
            isSuggestion: a,
            appContext: d,
            nickname: c,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: E,
        } = e,
        {
            avatarDecorationSrc: A,
            avatarSrc: f,
            eventHandlers: m,
            listItemId: S,
            intersectionRef: p,
            isMobile: C,
            newStatus: x,
            status: v,
            renderSubtext: M,
            renderUserContextMenu: D,
        } = Q({
            user: t,
            activities: n,
            gameProfileEntry: s,
            relationshipType: r,
            isSuggestion: a,
            appContext: d,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: E,
        }),
        R = (0, N.A)({ userId: t.id, guildId: null }),
        U = k.Ay.useName(null, null, t),
        [O, G] = i.useState(!1),
        b = i.useRef(null),
        w = i.useCallback(() => {
            G(!0),
                null != b.current && clearTimeout(b.current),
                (b.current = setTimeout(() => {
                    G(!1), (b.current = null);
                }, 2e3));
        }, []);
    i.useEffect(
        () => () => {
            null != b.current && clearTimeout(b.current);
        },
        [],
    );
    let L = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), h?.({ type: H.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [h, t.id],
        ),
        F = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    O || (w(), h?.({ type: H.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, O, w],
        ),
        j = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    O || (w(), h?.({ type: H.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, O, w],
        ),
        Y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    O || (w(), h?.({ type: H.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, O, w],
        ),
        X = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    O || (w(), h?.({ type: H.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, O, w],
        ),
        K = n.some((e) => {
            let { type: t } = e;
            return t === z.$pd.PLAYING;
        }),
        Z = v !== z.clD.ONLINE && v !== z.clD.IDLE && v !== z.clD.DND;
    return (0, l.jsx)(P.D, {
        listItemId: S,
        outerRef: p,
        isVisuallyOffline: Z,
        onClick: L,
        onContextMenu: D,
        avatar: (0, l.jsx)(o.euF, {
            ...m,
            size: $,
            src: f,
            isMobile: C,
            isTyping: !1,
            status: x,
            className: B.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: A,
        }),
        primaryText: (0, l.jsx)(_.A, {
            userName: U,
            displayNameStyles: R,
            effectDisplayType: T.G.PLAIN,
            textClassName: B.Xh,
        }),
        secondaryText: M(),
        rightActions: () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    K
                        ? (0, l.jsx)("div", {
                              className: B.im,
                              children: (0, l.jsx)(V.B, {
                                  activities: n,
                                  gameProfileEntry: s,
                                  gameIconSize: y.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    r === z.eA$.PENDING_INCOMING
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.m_, {
                                      text: W.intl.string(W.t.MMlhsr),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": W.intl.string(W.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.A9s,
                                          onClick: F,
                                          disabled: O,
                                      }),
                                  }),
                                  (0, l.jsx)(u.m_, {
                                      text: W.intl.string(W.t.ytCpKs),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": W.intl.string(W.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.PGe,
                                          onClick: j,
                                          disabled: O,
                                      }),
                                  }),
                              ],
                          })
                        : r === z.eA$.PENDING_OUTGOING
                          ? (0, l.jsx)(u.m_, {
                                text: W.intl.string(W.t["bTfA//"]),
                                children: (0, l.jsx)(o.K0, {
                                    "aria-label": W.intl.string(W.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: o.lI8,
                                    onClick: Y,
                                    disabled: O,
                                }),
                            })
                          : a
                            ? (0, l.jsx)(u.m_, {
                                  text: W.intl.string(W.t.w5uwoI),
                                  children: (0, l.jsx)(o.K0, {
                                      "aria-label": W.intl.string(W.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: o.Rvf,
                                      onClick: X,
                                      disabled: O,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
q.displayName = "FriendRequestRow";
let J = i.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === z.eA$.PENDING_INCOMING || t === z.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, l.jsx)(q, { ...e })
        : (0, l.jsx)(Z, { ...e }),
);
J.displayName = "FriendRow";
