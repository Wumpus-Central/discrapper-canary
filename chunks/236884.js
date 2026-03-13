n.d(t, { Z: () => ei }), n(321073);
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
    A = n(864436),
    f = n(835072),
    E = n(87664),
    m = n(47167),
    S = n(506326),
    _ = n(490427),
    p = n(609425),
    N = n(922301),
    T = n(750112),
    y = n(769015),
    C = n(834757),
    x = n(145497),
    v = n(534400),
    M = n(941971),
    D = n(854627),
    R = n(10862),
    O = n(616356),
    U = n(734057),
    G = n(71393),
    w = n(290863),
    L = n(222823),
    F = n(309010),
    b = n(461213),
    k = n(287809),
    P = n(562153),
    j = n(914853),
    V = n(1404),
    H = n(578093),
    Y = n(296064),
    W = n(20796),
    z = n(67103),
    B = n(576420),
    $ = n(70191),
    K = n(652215),
    X = n(985018),
    Z = n(833960);
let Q = o._3J.SIZE_32,
    J = [S.iq, S.tR, S.K7, S.sp, S.MK];
function q(e) {
    let t,
        { channel: n, textVariant: s, activities: u, applicationStream: d } = e,
        h = (0, a.bG)([k.default], () => k.default.getCurrentUser()),
        g = (0, o.S31)(K.clD.ONLINE),
        I = (0, m.Ay)(n),
        S = (0, a.bG)([G.A], () => G.A.getGuild(n.getGuildId())),
        _ = S?.name;
    (0, E.A)(h?.id);
    let p = d?.discoverable !== !1 ? d : null,
        N = (0, C.AO)(p),
        T = n.isDM() || n.isGroupDM(),
        y = i.useMemo(
            () =>
                (0, r.uniqWith)(
                    u?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== K.$pd.CUSTOM_STATUS && t !== K.$pd.HANG_STATUS && n !== N?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [u, N?.name],
        ),
        v = y?.[0];
    return (0, l.jsxs)("div", {
        className: Z.fE,
        children: [
            ((t = y?.length > 0),
            (0, l.jsxs)("div", {
                className: Z._9,
                children: [
                    !t &&
                        !T &&
                        null != S &&
                        (0, l.jsxs)("div", {
                            className: Z.j1,
                            children: [
                                (0, l.jsx)(x.Ay, { guild: S, iconSize: 14 }),
                                (0, l.jsx)(o.Text, {
                                    className: Z.J5,
                                    variant: s,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: _,
                                }),
                                (0, l.jsx)(o._BQ, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, l.jsx)(R.A, { size: "custom", color: g, channel: n, className: Z.WT }),
                    (0, l.jsx)(o.Text, {
                        variant: s,
                        color: "currentColor",
                        lineClamp: 1,
                        className: Z.Qo,
                        children: I,
                    }),
                ],
            })),
            (() => {
                if (null == v) return null;
                let { text: e } = (0, c.A)(v, !1),
                    t = (0, f.f)(v);
                return null == e && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: Z._9,
                          children: [
                              null != t ? (0, l.jsx)(A.A, { icon: t, className: Z.WT }) : void 0,
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
function ee(e) {
    let {
            user: t,
            activities: n,
            gameProfileEntry: r,
            relationshipType: u,
            isSuggestion: o,
            appContext: c,
            onPrimaryAction: A,
            onContextMenu: f,
            onFriendVisible: E,
            friendGroupId: m,
        } = e,
        p = t.id,
        {
            avatarDecorationSrc: N,
            avatarSrc: T,
            eventHandlers: y,
        } = (0, D.A)({ userId: p, size: Q, animateOnHover: !0, guildId: null }),
        C = i.useMemo(() => {
            let e = m ?? "no-group",
                t = u ?? "no-relationship",
                n = o ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${p}:${e}:${t}:${n}`;
        }, [m, o, u, p]),
        x = (0, a.yK)([b.A], () =>
            b.A.getActivities().filter((e) => e.type === K.$pd.PLAYING && null != e.application_id),
        ),
        { voiceChannel: v } = (0, g.A)({ userId: t.id }),
        {
            status: M,
            applicationStream: R,
            isMobile: U,
            newStatus: G,
        } = (0, a.cf)([w.A, O.A], () => {
            let e = w.A.getStatus(t.id),
                l = O.A.getAnyStreamForUser(t.id),
                i = w.A.isMobileOnline(t.id),
                r = (0, d.A)(n ?? []) ? K.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: r };
        }, [t.id, n]),
        L = x.length > 0,
        F = i.useCallback(
            (e) => {
                E?.(p, e, L);
            },
            [E, p, L],
        ),
        k = (0, s.K)(F),
        P = i.useCallback(() => {
            if (null != r) {
                let e = r.traits,
                    t = { ...r, traits: e.slice(0, 3) };
                return (0, l.jsx)(S.mG, {
                    location: S.N5.FRIENDS_POPOUT,
                    className: Z.cV,
                    children: J.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, h.A)({ activities: n, status: M, applicationStream: R, voiceChannel: v })) {
                let e = !(0, _.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === K.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === K.$pd.PLAYING;
                }) == null && null != v
                    ? (0, l.jsx)(q, {
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
        avatarDecorationSrc: N,
        avatarSrc: T,
        eventHandlers: y,
        listItemId: C,
        intersectionRef: k,
        isMobile: U,
        newStatus: G,
        status: M,
        currentUserPlayingActivities: x,
        renderSubtext: P,
        renderUserContextMenu: i.useCallback(
            (e) => {
                f?.({ type: z.K.FRIEND_ROW, event: e, user: t, friendGroupId: m });
            },
            [m, f, t],
        ),
    };
}
function et(e) {
    return (0, a.bG)([U.A, L.Ay], () => {
        let t = U.A.getDMFromUserId(e) ?? null;
        return null != t && L.Ay.hasUnread(t);
    }, [e]);
}
let en = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            gameProfileEntry: r,
            closeParentPopout: s,
            appContext: u,
            nickname: d,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: I,
            shouldHighlightIfRecentlyAdded: A,
            relationshipType: f,
            isSuggestion: E,
        } = e,
        {
            avatarDecorationSrc: m,
            avatarSrc: S,
            eventHandlers: _,
            listItemId: C,
            intersectionRef: x,
            isMobile: D,
            newStatus: R,
            status: O,
            currentUserPlayingActivities: G,
            renderSubtext: w,
            renderUserContextMenu: L,
        } = ee({
            user: t,
            activities: n,
            gameProfileEntry: r,
            relationshipType: f,
            isSuggestion: E,
            appContext: u,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: I,
        }),
        b = et(t.id),
        { guildId: k, channelId: X } = (0, a.cf)([F.A, U.A], () => {
            let e = F.A.getVoiceChannelId() ?? F.A.getChannelId();
            return { guildId: null != e ? U.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        J = (0, p.A)({ userId: t.id, guildId: k }),
        q = P.Ay.useName(k, X, t),
        en = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), c?.({ type: z.c.OPEN_DIRECT_MESSAGE, userId: t.id }), s?.();
            },
            [s, c, t.id],
        ),
        el = n.some($.A),
        ei = i.useMemo(() => {
            if (0 === G.length) return !1;
            let e = new Set(G.map((e) => e.application_id));
            return n.some((t) => (0, $.A)(t) && e.has(t.application_id));
        }, [n, G]),
        er = O !== K.clD.ONLINE && O !== K.clD.IDLE && O !== K.clD.DND,
        es = (0, B.A2)(t.id),
        ea = i.useCallback(
            (e) => {
                let i = [],
                    s = e || ei;
                return (
                    e && i.push((0, l.jsx)(H.j, { tab: j.x.FRIENDS, targetId: t.id }, "favorite")),
                    s &&
                        i.push(
                            (0, l.jsx)(
                                Y.r,
                                {
                                    userId: t.id,
                                    friendActivities: n,
                                    currentUserPlayingActivities: G,
                                    gameProfileEntry: r,
                                    onPrimaryAction: c,
                                },
                                "game-action",
                            ),
                        ),
                    el &&
                        i.push(
                            (0, l.jsx)(
                                "div",
                                {
                                    className: Z.im,
                                    children: (0, l.jsx)(W.B, {
                                        activities: n,
                                        gameProfileEntry: r,
                                        gameIconSize: y.M.SMALL,
                                        platformIconSizePx: 24,
                                    }),
                                },
                                "activity-icon",
                            ),
                        ),
                    i.length > 0 ? i : null
                );
            },
            [n, G, r, el, ei, c, t.id],
        );
    return (0, l.jsx)(V.D, {
        listItemId: C,
        outerRef: x,
        leftIndicator: (0, l.jsx)(M.A, { unread: b }),
        isVisuallyOffline: er,
        recentlyAddedTimestampMs: A ? es : null,
        onClick: en,
        onContextMenu: L,
        avatar: (0, l.jsx)(o.euF, {
            ..._,
            size: Q,
            src: S,
            isMobile: D,
            isTyping: !1,
            status: R,
            className: Z.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: m,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: Z.QV,
            children: [
                (0, l.jsx)(T.A, {
                    userName: q,
                    displayNameStyles: J,
                    effectDisplayType: N.G.STATIC,
                    textClassName: Z.Xh,
                }),
                (0, l.jsx)(v.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: w(),
        rightActions: ea,
    });
});
en.displayName = "FriendListRow";
let el = i.memo((e) => {
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
            friendGroupId: A,
        } = e,
        {
            avatarDecorationSrc: f,
            avatarSrc: E,
            eventHandlers: m,
            listItemId: S,
            intersectionRef: _,
            isMobile: C,
            newStatus: x,
            status: v,
            renderSubtext: D,
            renderUserContextMenu: R,
        } = ee({
            user: t,
            activities: n,
            gameProfileEntry: r,
            relationshipType: s,
            isSuggestion: a,
            appContext: d,
            onPrimaryAction: h,
            onContextMenu: g,
            onFriendVisible: I,
            friendGroupId: A,
        }),
        O = et(t.id),
        U = (0, p.A)({ userId: t.id, guildId: null }),
        G = P.Ay.useName(null, null, t),
        [w, L] = i.useState(!1),
        F = i.useRef(null),
        b = i.useCallback(() => {
            L(!0),
                null != F.current && clearTimeout(F.current),
                (F.current = setTimeout(() => {
                    L(!1), (F.current = null);
                }, 2e3));
        }, []);
    i.useEffect(
        () => () => {
            null != F.current && clearTimeout(F.current);
        },
        [],
    );
    let k = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), h?.({ type: z.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [h, t.id],
        ),
        j = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), h?.({ type: z.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, w, b],
        ),
        H = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), h?.({ type: z.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, w, b],
        ),
        Y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), h?.({ type: z.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, w, b],
        ),
        B = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), h?.({ type: z.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, h, w, b],
        ),
        $ = n.some((e) => {
            let { type: t } = e;
            return t === K.$pd.PLAYING;
        }),
        J = v !== K.clD.ONLINE && v !== K.clD.IDLE && v !== K.clD.DND;
    return (0, l.jsx)(V.D, {
        listItemId: S,
        outerRef: _,
        leftIndicator: (0, l.jsx)(M.A, { unread: O }),
        isVisuallyOffline: J,
        onClick: k,
        onContextMenu: R,
        avatar: (0, l.jsx)(o.euF, {
            ...m,
            size: Q,
            src: E,
            isMobile: C,
            isTyping: !1,
            status: x,
            className: Z.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: f,
        }),
        primaryText: (0, l.jsx)(T.A, {
            userName: G,
            displayNameStyles: U,
            effectDisplayType: N.G.PLAIN,
            textClassName: Z.Xh,
        }),
        secondaryText: D(),
        rightActions: () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    $
                        ? (0, l.jsx)("div", {
                              className: Z.im,
                              children: (0, l.jsx)(W.B, {
                                  activities: n,
                                  gameProfileEntry: r,
                                  gameIconSize: y.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    s === K.eA$.PENDING_INCOMING
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.m_, {
                                      text: X.intl.string(X.t.MMlhsr),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": X.intl.string(X.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.A9s,
                                          onClick: j,
                                          disabled: w,
                                      }),
                                  }),
                                  (0, l.jsx)(u.m_, {
                                      text: X.intl.string(X.t.ytCpKs),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": X.intl.string(X.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.PGe,
                                          onClick: H,
                                          disabled: w,
                                      }),
                                  }),
                              ],
                          })
                        : s === K.eA$.PENDING_OUTGOING
                          ? (0, l.jsx)(u.m_, {
                                text: X.intl.string(X.t["bTfA//"]),
                                children: (0, l.jsx)(o.K0, {
                                    "aria-label": X.intl.string(X.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: o.lI8,
                                    onClick: Y,
                                    disabled: w,
                                }),
                            })
                          : a
                            ? (0, l.jsx)(u.m_, {
                                  text: X.intl.string(X.t.w5uwoI),
                                  children: (0, l.jsx)(o.K0, {
                                      "aria-label": X.intl.string(X.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: o.Rvf,
                                      onClick: B,
                                      disabled: w,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
el.displayName = "FriendRequestRow";
let ei = i.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === K.eA$.PENDING_INCOMING || t === K.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, l.jsx)(el, { ...e })
        : (0, l.jsx)(en, { ...e }),
);
ei.displayName = "FriendRow";
