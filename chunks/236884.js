n.d(t, { Z: () => ea }), n(321073);
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
    S = n(20805),
    _ = n(506326),
    p = n(365185),
    N = n(490427),
    T = n(609425),
    y = n(922301),
    C = n(750112),
    x = n(769015),
    v = n(834757),
    M = n(145497),
    D = n(534400),
    R = n(941971),
    O = n(854627),
    U = n(10862),
    G = n(616356),
    w = n(734057),
    L = n(71393),
    F = n(290863),
    b = n(222823),
    k = n(309010),
    P = n(461213),
    j = n(287809),
    V = n(562153),
    H = n(914853),
    Y = n(1404),
    W = n(243612),
    z = n(578093),
    B = n(296064),
    $ = n(20796),
    K = n(67103),
    X = n(576420),
    Z = n(70191),
    Q = n(652215),
    J = n(985018),
    q = n(833960);
let ee = o._3J.SIZE_32,
    et = [_.iq, _.tR, _.K7, _.sp, _.MK];
function en(e) {
    let t,
        { channel: n, textVariant: s, activities: u, applicationStream: d } = e,
        h = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        g = (0, o.S31)(Q.clD.ONLINE),
        I = (0, m.Ay)(n),
        S = (0, a.bG)([L.A], () => L.A.getGuild(n.getGuildId())),
        _ = S?.name;
    (0, E.A)(h?.id);
    let p = d?.discoverable !== !1 ? d : null,
        N = (0, v.AO)(p),
        T = n.isDM() || n.isGroupDM(),
        y = i.useMemo(
            () =>
                (0, r.uniqWith)(
                    u?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== Q.$pd.CUSTOM_STATUS && t !== Q.$pd.HANG_STATUS && n !== N?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [u, N?.name],
        ),
        C = y?.[0];
    return (0, l.jsxs)("div", {
        className: q.fE,
        children: [
            ((t = y?.length > 0),
            (0, l.jsxs)("div", {
                className: q._9,
                children: [
                    !t &&
                        !T &&
                        null != S &&
                        (0, l.jsxs)("div", {
                            className: q.j1,
                            children: [
                                (0, l.jsx)(M.Ay, { guild: S, iconSize: 14 }),
                                (0, l.jsx)(o.Text, {
                                    className: q.J5,
                                    variant: s,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: _,
                                }),
                                (0, l.jsx)(o._BQ, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, l.jsx)(U.A, { size: "custom", color: g, channel: n, className: q.WT }),
                    (0, l.jsx)(o.Text, {
                        variant: s,
                        color: "currentColor",
                        lineClamp: 1,
                        className: q.Qo,
                        children: I,
                    }),
                ],
            })),
            (() => {
                if (null == C) return null;
                let { text: e } = (0, c.A)(C, !1),
                    t = (0, f.f)(C);
                return null == e && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: q._9,
                          children: [
                              null != t ? (0, l.jsx)(A.A, { icon: t, className: q.WT }) : void 0,
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
function el(e) {
    let {
            user: t,
            activities: n,
            relationshipType: r,
            isSuggestion: u,
            appContext: o,
            onPrimaryAction: c,
            onContextMenu: A,
            onFriendVisible: f,
            friendGroupId: E,
        } = e,
        m = t.id,
        {
            avatarDecorationSrc: T,
            avatarSrc: y,
            eventHandlers: C,
        } = (0, O.A)({ userId: m, size: ee, animateOnHover: !0, guildId: null }),
        x = i.useMemo(() => {
            let e = E ?? "no-group",
                t = r ?? "no-relationship",
                n = u ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${m}:${e}:${t}:${n}`;
        }, [E, u, r, m]),
        v = (0, a.yK)([P.A], () =>
            P.A.getActivities().filter((e) => e.type === Q.$pd.PLAYING && null != e.application_id),
        ),
        { voiceChannel: M } = (0, g.A)({ userId: t.id }),
        {
            status: D,
            applicationStream: R,
            isMobile: U,
            newStatus: w,
        } = (0, a.cf)([F.A, G.A], () => {
            let e = F.A.getStatus(t.id),
                l = G.A.getAnyStreamForUser(t.id),
                i = F.A.isMobileOnline(t.id),
                r = (0, d.A)(n ?? []) ? Q.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: r };
        }, [t.id, n]),
        L = v.length > 0,
        b = i.useCallback(
            (e) => {
                f?.(m, e, L);
            },
            [f, m, L],
        ),
        k = (0, s.K)(b),
        j = i.useMemo(() => n?.find(Z.A), [n]),
        V = (0, p.A)({ activity: j, user: t }),
        H = (0, S.zD)(V) ? V : void 0,
        Y = i.useCallback(() => {
            if (null != H) {
                let e = H.traits,
                    t = { ...H, traits: e.slice(0, 3) };
                return (0, l.jsx)(_.mG, {
                    location: _.N5.FRIENDS_POPOUT,
                    className: q.cV,
                    children: et.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, h.A)({ activities: n, status: D, applicationStream: R, voiceChannel: M })) {
                let e = !(0, N.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === Q.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === Q.$pd.PLAYING;
                }) == null && null != M
                    ? (0, l.jsx)(en, {
                          channel: M,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: R,
                      })
                    : (0, l.jsx)(I.A, {
                          user: t,
                          activities: n,
                          applicationStream: R,
                          voiceChannel: M,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, D, R, M, H]);
    return {
        avatarDecorationSrc: T,
        avatarSrc: y,
        eventHandlers: C,
        gameProfileEntry: H,
        listItemId: x,
        intersectionRef: k,
        isMobile: U,
        newStatus: w,
        status: D,
        currentUserPlayingActivities: v,
        renderSubtext: Y,
        renderUserContextMenu: i.useCallback(
            (e) => {
                A?.({ type: K.K.FRIEND_ROW, event: e, user: t, friendGroupId: E });
            },
            [E, A, t],
        ),
    };
}
function ei(e) {
    return (0, a.bG)([w.A, b.Ay], () => {
        let t = w.A.getDMFromUserId(e) ?? null;
        return null != t && b.Ay.hasUnread(t);
    }, [e]);
}
let er = i.memo((e) => {
    let {
            user: t,
            activities: n = [],
            closeParentPopout: r,
            appContext: s,
            nickname: u,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: g,
            shouldHighlightIfRecentlyAdded: I,
            relationshipType: A,
            isSuggestion: f,
        } = e,
        {
            avatarDecorationSrc: E,
            avatarSrc: m,
            eventHandlers: S,
            gameProfileEntry: _,
            listItemId: p,
            intersectionRef: N,
            isMobile: v,
            newStatus: M,
            status: O,
            currentUserPlayingActivities: U,
            renderSubtext: G,
            renderUserContextMenu: L,
        } = el({
            user: t,
            activities: n,
            relationshipType: A,
            isSuggestion: f,
            appContext: s,
            onPrimaryAction: d,
            onContextMenu: c,
            onFriendVisible: h,
            friendGroupId: g,
        }),
        F = ei(t.id),
        { guildId: b, channelId: P } = (0, a.cf)([k.A, w.A], () => {
            let e = k.A.getVoiceChannelId() ?? k.A.getChannelId();
            return { guildId: null != e ? w.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        j = (0, T.A)({ userId: t.id, guildId: b }),
        J = V.Ay.useName(b, P, t),
        et = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), d?.({ type: K.c.OPEN_DIRECT_MESSAGE, userId: t.id }), r?.();
            },
            [r, d, t.id],
        ),
        en = n.some(Z.A),
        er = (0, W.b4)(),
        es = i.useMemo(() => {
            let e = er?.altId ?? er?.id;
            return null != e && n.some((t) => (0, Z.A)(t) && t.application_id === e);
        }, [n, er]),
        ea = O !== Q.clD.ONLINE && O !== Q.clD.IDLE && O !== Q.clD.DND,
        eu = (0, X.A2)(t.id),
        eo = i.useCallback(
            (e) => {
                let i = [],
                    r = e || es;
                return (
                    e && i.push((0, l.jsx)(z.j, { tab: H.x.FRIENDS, targetId: t.id }, "favorite")),
                    r &&
                        i.push(
                            (0, l.jsx)(
                                B.r,
                                {
                                    userId: t.id,
                                    friendActivities: n,
                                    currentUserPlayingActivities: U,
                                    gameProfileEntry: _,
                                    onPrimaryAction: d,
                                },
                                "game-action",
                            ),
                        ),
                    en &&
                        i.push(
                            (0, l.jsx)(
                                "div",
                                {
                                    className: q.im,
                                    children: (0, l.jsx)($.B, {
                                        activities: n,
                                        gameProfileEntry: _,
                                        gameIconSize: x.M.SMALL,
                                        platformIconSizePx: 24,
                                    }),
                                },
                                "activity-icon",
                            ),
                        ),
                    i.length > 0 ? i : null
                );
            },
            [n, U, _, en, es, d, t.id],
        );
    return (0, l.jsx)(Y.D, {
        listItemId: p,
        outerRef: N,
        leftIndicator: (0, l.jsx)(R.A, { unread: F }),
        isVisuallyOffline: ea,
        recentlyAddedTimestampMs: I ? eu : null,
        onClick: et,
        onContextMenu: L,
        avatar: (0, l.jsx)(o.euF, {
            ...S,
            size: ee,
            src: m,
            isMobile: v,
            isTyping: !1,
            status: M,
            className: q.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: E,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: q.QV,
            children: [
                (0, l.jsx)(C.A, {
                    userName: J,
                    displayNameStyles: j,
                    effectDisplayType: y.G.STATIC,
                    textClassName: q.Xh,
                }),
                (0, l.jsx)(D.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: G(),
        rightActions: eo,
    });
});
er.displayName = "FriendListRow";
let es = i.memo((e) => {
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
            friendGroupId: I,
        } = e,
        {
            avatarDecorationSrc: A,
            avatarSrc: f,
            eventHandlers: E,
            gameProfileEntry: m,
            listItemId: S,
            intersectionRef: _,
            isMobile: p,
            newStatus: N,
            status: v,
            renderSubtext: M,
            renderUserContextMenu: D,
        } = el({
            user: t,
            activities: n,
            relationshipType: r,
            isSuggestion: s,
            appContext: a,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: I,
        }),
        O = ei(t.id),
        U = (0, T.A)({ userId: t.id, guildId: null }),
        G = V.Ay.useName(null, null, t),
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
                e.preventDefault(), e.stopPropagation(), c?.({ type: K.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [c, t.id],
        ),
        P = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), c?.({ type: K.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, w, b],
        ),
        j = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), c?.({ type: K.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, w, b],
        ),
        H = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), c?.({ type: K.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, w, b],
        ),
        W = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    w || (b(), c?.({ type: K.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, c, w, b],
        ),
        z = n.some((e) => {
            let { type: t } = e;
            return t === Q.$pd.PLAYING;
        }),
        B = v !== Q.clD.ONLINE && v !== Q.clD.IDLE && v !== Q.clD.DND;
    return (0, l.jsx)(Y.D, {
        listItemId: S,
        outerRef: _,
        leftIndicator: (0, l.jsx)(R.A, { unread: O }),
        isVisuallyOffline: B,
        onClick: k,
        onContextMenu: D,
        avatar: (0, l.jsx)(o.euF, {
            ...E,
            size: ee,
            src: f,
            isMobile: p,
            isTyping: !1,
            status: N,
            className: q.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: A,
        }),
        primaryText: (0, l.jsx)(C.A, {
            userName: G,
            displayNameStyles: U,
            effectDisplayType: y.G.PLAIN,
            textClassName: q.Xh,
        }),
        secondaryText: M(),
        rightActions: () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    z
                        ? (0, l.jsx)("div", {
                              className: q.im,
                              children: (0, l.jsx)($.B, {
                                  activities: n,
                                  gameProfileEntry: m,
                                  gameIconSize: x.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    r === Q.eA$.PENDING_INCOMING
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.m_, {
                                      text: J.intl.string(J.t.MMlhsr),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": J.intl.string(J.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.A9s,
                                          onClick: P,
                                          disabled: w,
                                      }),
                                  }),
                                  (0, l.jsx)(u.m_, {
                                      text: J.intl.string(J.t.ytCpKs),
                                      children: (0, l.jsx)(o.K0, {
                                          "aria-label": J.intl.string(J.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: o.PGe,
                                          onClick: j,
                                          disabled: w,
                                      }),
                                  }),
                              ],
                          })
                        : r === Q.eA$.PENDING_OUTGOING
                          ? (0, l.jsx)(u.m_, {
                                text: J.intl.string(J.t["bTfA//"]),
                                children: (0, l.jsx)(o.K0, {
                                    "aria-label": J.intl.string(J.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: o.lI8,
                                    onClick: H,
                                    disabled: w,
                                }),
                            })
                          : s
                            ? (0, l.jsx)(u.m_, {
                                  text: J.intl.string(J.t.w5uwoI),
                                  children: (0, l.jsx)(o.K0, {
                                      "aria-label": J.intl.string(J.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: o.Rvf,
                                      onClick: W,
                                      disabled: w,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
es.displayName = "FriendRequestRow";
let ea = i.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === Q.eA$.PENDING_INCOMING || t === Q.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, l.jsx)(es, { ...e })
        : (0, l.jsx)(er, { ...e }),
);
ea.displayName = "FriendRow";
