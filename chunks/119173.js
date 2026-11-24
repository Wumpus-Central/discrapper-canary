n.d(t, { $: () => lb, A: () => lj });
var l,
    i = n(477900),
    r = n(582128),
    s = n(855986),
    a = n(287809),
    o = n(810412),
    u = n(914853),
    d = n(243612);
n(321073);
var c = n(503698),
    h = n.n(c),
    g = n(435558),
    m = n.n(g),
    I = n(837381),
    E = n(939249),
    A = n(140735),
    f = n(866665),
    S = n(285796),
    p = n(834730),
    N = n(683438),
    T = n(312138),
    y = n(475825),
    x = n(803306),
    _ = n(928039),
    C = n(485947),
    v = n(545059),
    R = n(290863),
    D = n(994500),
    b = n(373954),
    j = n(996439),
    k = n(973196),
    M = n(320448),
    O = n(847374);
function w(e) {
    let { isCollapsed: t, size: n = "md", className: l } = e;
    return t
        ? (0, i.jsx)(M.ChevronSmallRightIcon, { size: n, color: "currentColor", className: l })
        : (0, i.jsx)(O.ChevronSmallDownIcon, { size: n, color: "currentColor", className: l });
}
var F = n(172218),
    G = n(350835),
    L = n(778712),
    U = n(935154),
    P = n(97808),
    V = n(408278),
    H = n(933832),
    Y = n(789645),
    K = n(565829),
    B = n(283973),
    X = n(960076),
    z = n(566903),
    Z = n(397244),
    W = n(714114),
    $ = n(342312),
    Q = n(864436),
    q = n(835072),
    J = n(87664),
    ee = n(47167),
    et = n(20805),
    en = n(506326),
    el = n(365185),
    ei = n(490427),
    er = n(609425),
    es = n(922301),
    ea = n(16371),
    eo = n(769015),
    eu = n(834757),
    ed = n(145497),
    ec = n(534400),
    eh = n(941971),
    eg = n(854627),
    em = n(10862),
    eI = n(616356),
    eE = n(734057),
    eA = n(71393),
    ef = n(218461),
    eS = n(309010),
    ep = n(894768),
    eN = n(562153),
    eT = n(193663),
    ey = n(576420),
    ex = n(583964);
function e_(e) {
    let {
            listItemId: t,
            isVisuallyOffline: n = !1,
            recentlyAddedTimestampMs: l = null,
            outerRef: s,
            leftIndicator: a,
            avatar: o,
            primaryText: u,
            secondaryText: d,
            rightActions: c,
            onClick: g,
            onContextMenu: m,
            onMouseEnter: E,
            onMouseLeave: A,
            className: f,
            rowInnerClassName: S,
        } = e,
        p = (0, I.rm)(t),
        [N, T] = r.useState(!1),
        [y, x] = r.useState(!1),
        _ = r.useCallback(() => x(!0), []),
        C = r.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || x(!1);
        }, []),
        v = r.useRef(null),
        [R, D] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (null == l || v.current === l) return;
            v.current = l;
            let e = Date.now();
            l > e || e - l > 1e3 || D(!0);
        }, [l]),
        (0, i.jsxs)("div", {
            ref: s,
            className: h()(ex.nM, f, { [ex.SS]: n }),
            onFocus: _,
            onBlur: C,
            onAnimationEnd: (e) => {
                "friendsWidgetRowRecentlyAdded" === e.animationName && D(!1);
            },
            children: [
                null != a ? (0, i.jsx)("div", { className: ex.oT, children: a }) : null,
                (0, i.jsx)(eT.A, {
                    innerClassName: h()(ex.bL, S),
                    className: R ? ex.fc : void 0,
                    onClick: g,
                    onContextMenu: m,
                    onMouseEnter: (e) => {
                        (T(!0), E?.(e));
                    },
                    onMouseLeave: (e) => {
                        (T(!1), A?.(e));
                    },
                    avatar: o,
                    name: u,
                    subText: d,
                    hovered: N || y,
                    ...p,
                    children: null != c ? (0, i.jsx)("div", { className: ex.cm, children: c(N || y) }) : null,
                }),
            ],
        })
    );
}
var eC = n(249015),
    ev = n(6161),
    eR = n(681154),
    eD = n(974690),
    eb = n(820081),
    ej = n(297152),
    ek = n(241541),
    eM = n(559647),
    eO = n(173054),
    ew = n(933958),
    eF = n(776677),
    eG = n(206589),
    eL = n(55730),
    eU = n(874546),
    eP = n(672979),
    eV = n(498642),
    eH = n(491009),
    eY = n(576705),
    eK = n(977997),
    eB = n(689168),
    eX = n(661191),
    ez = n(67103),
    eZ = n(652215),
    eW = n(792996);
function e$(e) {
    return e.find((e) => (0, eL.A)(e, eZ.jUm.JOIN));
}
function eQ(e, t) {
    return null == t ? e$(e) : (e.find((e) => (0, eL.A)(e, eZ.jUm.JOIN) && e.application_id === t) ?? e$(e));
}
function eq(e) {
    let { user: t, friendActivities: n, currentUserPlayingActivities: l, gameProfileEntry: o, onPrimaryAction: u } = e,
        [c, h] = r.useState(!1),
        g = r.useRef(null);
    r.useEffect(
        () => () => {
            null != g.current && clearTimeout(g.current);
        },
        [],
    );
    let m = (0, s.bG)(
            [a.default, eE.A, eA.A, eV.A, D.A, eS.Ay, eK.A, eY.A, eH.A, ep.A, ew.Ay, eB.A],
            () => {
                let e = a.default.getCurrentUser(),
                    i = (0, d.qv)(),
                    r = i?.altId ?? i?.id,
                    s = eQ(n, r),
                    u = eQ(l, r);
                if (null != s && null != s.application_id) {
                    if (eB.A.getState(s.application_id, eZ.xL.JOIN) === eZ.eAD.LOADING)
                        return { kind: "joining", activity: s };
                    let n = (0, eF.A)({
                        user: t,
                        activity: s,
                        application: null,
                        channelId: null,
                        currentUser: e,
                        isEmbedded: !1,
                        isContentGated: !1,
                        ChannelStore: eE.A,
                        GuildStore: eA.A,
                        GuildMemberCountStore: eV.A,
                        RelationshipStore: D.A,
                        SelectedChannelStore: eS.Ay,
                        VoiceStateStore: eK.A,
                        PermissionStore: eY.A,
                        LocalActivityStore: eH.A,
                        SelfPresenceStore: ep.A,
                        EmbeddedActivitiesStore: ew.Ay,
                    });
                    if (n === eF.o.JOINED) return { kind: "joined", activity: s };
                    if (n === eF.o.CAN_JOIN) return { kind: "join", activity: s };
                    if (null == u && ((0, eL.A)(s, eZ.jUm.EMBEDDED) || (0, eU.Ay)(s)))
                        return { kind: "ask_to_join", activity: s };
                }
                if (null != u)
                    return {
                        kind: n.some((e) => e.application_id === u.application_id && (0, eG.w)(e, u))
                            ? "joined"
                            : "invite_to_activity",
                        activity: u,
                    };
                if (null != o) return { kind: "send_game_invite_message", gameEntry: o };
                let c = l.find(eP.A);
                if (null != c) {
                    var h;
                    let e;
                    return {
                        kind: "send_game_invite_message",
                        gameEntry:
                            ((h = t.id),
                            (e = c.timestamps?.start ?? Date.now()),
                            {
                                id: eX.default.fromTimestamp(e),
                                author_id: h,
                                extra: {
                                    type: "played_game_extra",
                                    game_name: c.name,
                                    application_id: c.application_id ?? "",
                                    fake_inventory_item: !0,
                                },
                                content_type: eR.ContentInventoryEntryType.PLAYED_GAME,
                                author_type: ev.ContentInventoryAuthorType.USER,
                                participants: [],
                                traits: [{ type: eD.K.IS_LIVE, is_live: !0 }],
                            }),
                    };
                }
                return null;
            },
            [n, l, o, t],
        ),
        I = r.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    c ||
                        null == m ||
                        "joined" === m.kind ||
                        "joining" === m.kind ||
                        (h(!0),
                        null != g.current && clearTimeout(g.current),
                        (g.current = setTimeout(() => {
                            (h(!1), (g.current = null));
                        }, 2e3)),
                        u?.({
                            type: (function (e) {
                                switch (e) {
                                    case "ask_to_join":
                                        return ez.c.ASK_TO_JOIN;
                                    case "invite_to_activity":
                                        return ez.c.SEND_ACTIVITY_INVITE;
                                    case "send_game_invite_message":
                                        return ez.c.SEND_GAME_INVITE_MESSAGE;
                                    case "join":
                                    case "joining":
                                    case "joined":
                                        return ez.c.JOIN;
                                }
                            })(m.kind),
                            userId: t.id,
                            activity: m.activity,
                            gameEntry: m.gameEntry,
                        })));
            },
            [c, m, t.id, u],
        );
    if (null == m || "joined" === m.kind) return null;
    let E = (function (e, t) {
            if (t) return eb.CheckmarkSmallBoldIcon;
            switch (e) {
                case "ask_to_join":
                    return ej.HandRequestSpeakIcon;
                case "invite_to_activity":
                    return ek.GroupPlusIcon;
                case "send_game_invite_message":
                    return eM.SendMessageIcon;
                case "join":
                case "joining":
                case "joined":
                    return eO.GroupArrowRightIcon;
            }
        })(m.kind, c),
        A = (function (e) {
            switch (e) {
                case "ask_to_join":
                    return eW.intl.string(eW.t.OKsSCR);
                case "invite_to_activity":
                    return eW.intl.string(eW.t["3fRySx"]);
                case "send_game_invite_message":
                    return eW.intl.string(eW.t.XHxDIV);
                case "join":
                    return eW.intl.string(eW.t.VJlc0S);
                case "joining":
                    return eW.intl.string(eW.t.bf6Ci7);
                case "joined":
                    return eW.intl.string(eW.t.KC26NR);
            }
        })(m.kind);
    return (0, i.jsx)(f.m, {
        text: A,
        "aria-label": A,
        children: (0, i.jsx)(V.K, {
            icon: E,
            "aria-label": A,
            size: "sm",
            variant: "icon-only",
            onClick: I,
            disabled: c || "joining" === m.kind,
        }),
    });
}
var eJ = n(808380),
    e0 = n(646514),
    e1 = n(429913),
    e3 = n(263577),
    e2 = n(790381),
    e5 = n(266080),
    e6 = n(70191);
let e4 = { [eJ.Y.XBOX]: e5.A, [eJ.Y.PLAYSTATION]: e2.A };
function e9(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: l, platformIconSizePx: s } = e,
        a = (0, d.b4)(),
        o = r.useMemo(() => {
            let e = t.find(e6.A);
            if (null != a) {
                let n = a.altId ?? a.id;
                return t.find((e) => e.application_id === n) ?? e;
            }
            return e;
        }, [t, a]),
        u = (0, e1.h)(o?.application_id);
    return null == o
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: l, platformIconSizePx: r } = e,
                  s = t?.extra?.platform,
                  a = null != s ? e4[s] : null,
                  o =
                      null != a
                          ? (0, i.jsx)(a, { width: r, height: r, color: e0.A.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  u = n?.getIconURL(r),
                  d = null != u ? (0, i.jsx)(e3.V, { src: u, alt: n?.name, size: r }) : null;
              return (0, i.jsx)(eo.A, { game: n, size: l, unknownGameIconFallback: o ?? d });
          })({ gameProfileEntry: n, gameApplication: u, gameIconSize: l, platformIconSizePx: s });
}
let e7 = L._3.SIZE_32,
    e8 = [en.iq, en.tR, en.K7, en.sp, en.MK];
function te(e) {
    let t,
        { channel: n, textVariant: l, activities: o, applicationStream: u } = e,
        d = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        c = (0, U.S3)(eZ.clD.ONLINE),
        h = (0, ee.Ay)(n),
        m = (0, s.bG)([eA.A], () => eA.A.getGuild(n.getGuildId())),
        I = m?.name;
    (0, J.A)(d?.id);
    let E = u?.discoverable !== !1 ? u : null,
        A = (0, eu.AO)(E),
        f = n.isDM() || n.isGroupDM(),
        S = r.useMemo(
            () =>
                (0, g.uniqWith)(
                    o?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== G.$.CUSTOM_STATUS && t !== G.$.HANG_STATUS && n !== A?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [o, A?.name],
        ),
        N = S?.[0];
    return (0, i.jsxs)("div", {
        className: ex.fE,
        children: [
            ((t = S?.length > 0),
            (0, i.jsxs)("div", {
                className: ex._9,
                children: [
                    !t &&
                        !f &&
                        null != m &&
                        (0, i.jsxs)("div", {
                            className: ex.j1,
                            children: [
                                (0, i.jsx)(ed.Ay, { guild: m, iconSize: 14 }),
                                (0, i.jsx)(p.E, {
                                    className: ex.J5,
                                    variant: l,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: I,
                                }),
                                (0, i.jsx)(M.ChevronSmallRightIcon, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, i.jsx)(em.A, { size: "custom", color: c, channel: n, className: ex.WT }),
                    (0, i.jsx)(p.E, { variant: l, color: "currentColor", lineClamp: 1, className: ex.Qo, children: h }),
                ],
            })),
            (function () {
                if (null == N) return null;
                let { text: e } = (0, z.A)(N, !1),
                    t = (0, q.f)(N);
                return null == e && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: ex._9,
                          children: [
                              null != t ? (0, i.jsx)(Q.A, { icon: t, className: ex.WT }) : void 0,
                              null != e
                                  ? (0, i.jsx)(p.E, {
                                        variant: l,
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
function tt(e) {
    let {
            user: t,
            activities: n,
            relationshipType: l,
            isSuggestion: a,
            appContext: o,
            onPrimaryAction: u,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        } = e,
        g = t.id,
        {
            avatarDecorationSrc: m,
            avatarSrc: I,
            eventHandlers: E,
        } = (0, eg.A)({ userId: g, size: e7, animateOnHover: !0, guildId: null }),
        A = r.useMemo(() => {
            let e = h ?? "no-group",
                t = l ?? "no-relationship",
                n = a ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${g}:${e}:${t}:${n}`;
        }, [h, a, l, g]),
        f = (0, s.yK)([ep.A], () =>
            [...ep.A.getActivities(!0), ...ep.A.getHiddenActivities()].filter(
                (e) => e.type === G.$.PLAYING && null != e.application_id,
            ),
        ),
        { voiceChannel: S } = (0, W.Ay)({ userId: t.id }),
        {
            status: p,
            applicationStream: N,
            isMobile: T,
            newStatus: y,
        } = (0, s.cf)(
            [R.A, eI.A],
            () => {
                let e = R.A.getStatus(t.id),
                    l = eI.A.getAnyStreamForUser(t.id),
                    i = R.A.isMobileOnline(t.id),
                    r = (0, X.A)(n ?? []) ? eZ.clD.STREAMING : e;
                return { status: e, applicationStream: l, isMobile: i, newStatus: r };
            },
            [t.id, n],
        ),
        x = f.length > 0,
        _ = r.useCallback(
            (e) => {
                c?.(g, e, x);
            },
            [c, g, x],
        ),
        C = (0, F.K)(_),
        v = r.useMemo(() => n?.find(e6.A), [n]),
        D = (0, el.A)({ activity: v, user: t }),
        b = (0, et.zD)(D) ? D : void 0,
        j = r.useCallback(() => {
            if (null != b) {
                let e = b.traits,
                    t = { ...b, traits: e.slice(0, 3) };
                return (0, i.jsx)(en.mG, {
                    location: en.N5.FRIENDS_POPOUT,
                    className: ex.cV,
                    children: e8.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, Z.A)({ activities: n, status: p, applicationStream: N, voiceChannel: S })) {
                let e = !(0, ei.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === G.$.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === G.$.PLAYING;
                }) == null && null != S
                    ? (0, i.jsx)(te, {
                          channel: S,
                          textVariant: "body-xs/medium",
                          activities: n ?? [],
                          applicationStream: N,
                      })
                    : (0, i.jsx)($.A, {
                          user: t,
                          activities: n,
                          applicationStream: N,
                          voiceChannel: S,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, p, N, S, b]);
    return {
        avatarDecorationSrc: m,
        avatarSrc: I,
        eventHandlers: E,
        gameProfileEntry: b,
        listItemId: A,
        intersectionRef: C,
        isMobile: T,
        newStatus: y,
        status: p,
        currentUserPlayingActivities: f,
        renderSubtext: j,
        renderUserContextMenu: r.useCallback(
            (e) => {
                d?.({ type: ez.K.FRIEND_ROW, event: e, user: t, friendGroupId: h });
            },
            [h, d, t],
        ),
    };
}
function tn(e) {
    return (0, s.bG)(
        [eE.A, ef.Ay],
        () => {
            let t = eE.A.getDMFromUserId(e) ?? null;
            return null != t && ef.Ay.hasUnread(t);
        },
        [e],
    );
}
let tl = r.memo((e) => {
    let {
            user: t,
            activities: n = [],
            closeParentPopout: l,
            appContext: a,
            nickname: o,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: m,
            shouldHighlightIfRecentlyAdded: I,
            relationshipType: E,
            isSuggestion: A,
        } = e,
        {
            avatarDecorationSrc: f,
            avatarSrc: S,
            eventHandlers: p,
            gameProfileEntry: N,
            listItemId: T,
            intersectionRef: y,
            isMobile: x,
            newStatus: _,
            status: C,
            currentUserPlayingActivities: v,
            renderSubtext: R,
            renderUserContextMenu: D,
        } = tt({
            user: t,
            activities: n,
            relationshipType: E,
            isSuggestion: A,
            appContext: a,
            onPrimaryAction: c,
            onContextMenu: h,
            onFriendVisible: g,
            friendGroupId: m,
        }),
        b = tn(t.id),
        { guildId: j, channelId: k } = (0, s.cf)([eS.Ay, eE.A], () => {
            let e = eS.Ay.getVoiceChannelId() ?? eS.Ay.getChannelId();
            return { guildId: null != e ? eE.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        M = (0, er.A)({ userId: t.id, guildId: j }),
        O = eN.Ay.useName(j, k, t),
        w = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), c?.({ type: ez.c.OPEN_DIRECT_MESSAGE, userId: t.id }), l?.());
            },
            [l, c, t.id],
        ),
        F = n.some(e6.A),
        G = (0, d.b4)(),
        L = r.useMemo(() => {
            let e = G?.altId ?? G?.id;
            return null != e && n.some((t) => (0, e6.A)(t) && t.application_id === e);
        }, [n, G]),
        U = C !== eZ.clD.ONLINE && C !== eZ.clD.IDLE && C !== eZ.clD.DND,
        V = (0, ey.h)(t.id),
        H = r.useCallback(
            (e) => {
                let l = [],
                    r = e || L;
                return (
                    e && l.push((0, i.jsx)(eC.j, { tab: u.x.FRIENDS, targetId: t.id }, "favorite")),
                    r &&
                        l.push(
                            (0, i.jsx)(
                                eq,
                                {
                                    user: t,
                                    friendActivities: n,
                                    currentUserPlayingActivities: v,
                                    gameProfileEntry: N,
                                    onPrimaryAction: c,
                                },
                                "game-action",
                            ),
                        ),
                    F &&
                        l.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: ex.im,
                                    children: (0, i.jsx)(e9, {
                                        activities: n,
                                        gameProfileEntry: N,
                                        gameIconSize: eo.M.SMALL,
                                        platformIconSizePx: 24,
                                    }),
                                },
                                "activity-icon",
                            ),
                        ),
                    l.length > 0 ? l : null
                );
            },
            [n, v, N, F, L, c, t],
        );
    return (0, i.jsx)(e_, {
        listItemId: T,
        outerRef: y,
        leftIndicator: (0, i.jsx)(eh.A, { unread: b }),
        isVisuallyOffline: U,
        recentlyAddedTimestampMs: I ? V : null,
        onClick: w,
        onContextMenu: D,
        avatar: (0, i.jsx)(P.eu, {
            ...p,
            size: e7,
            src: S,
            isMobile: x,
            isTyping: !1,
            status: _,
            className: ex.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: f,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: ex.QV,
            children: [
                (0, i.jsx)(ea.A, {
                    userName: O,
                    displayNameStyles: M,
                    effectDisplayType: es.G.STATIC,
                    textClassName: ex.Xh,
                }),
                (0, i.jsx)(ec.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: R(),
        rightActions: H,
    });
});
tl.displayName = "FriendListRow";
let ti = r.memo((e) => {
    let {
            user: t,
            activities: n = [],
            relationshipType: l,
            isSuggestion: s,
            appContext: a,
            nickname: o,
            onPrimaryAction: u,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        } = e,
        {
            avatarDecorationSrc: g,
            avatarSrc: m,
            eventHandlers: I,
            gameProfileEntry: E,
            listItemId: A,
            intersectionRef: S,
            isMobile: p,
            newStatus: N,
            status: T,
            renderSubtext: y,
            renderUserContextMenu: x,
        } = tt({
            user: t,
            activities: n,
            relationshipType: l,
            isSuggestion: s,
            appContext: a,
            onPrimaryAction: u,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        }),
        _ = tn(t.id),
        C = (0, er.A)({ userId: t.id, guildId: null }),
        v = eN.Ay.useName(null, null, t),
        [R, D] = r.useState(!1),
        b = r.useRef(null),
        j = r.useCallback(() => {
            (D(!0),
                null != b.current && clearTimeout(b.current),
                (b.current = setTimeout(() => {
                    (D(!1), (b.current = null));
                }, 2e3)));
        }, []);
    r.useEffect(
        () => () => {
            null != b.current && clearTimeout(b.current);
        },
        [],
    );
    let k = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), u?.({ type: ez.c.OPEN_DIRECT_MESSAGE, userId: t.id }));
            },
            [u, t.id],
        ),
        M = r.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), u?.({ type: ez.c.ACCEPT_FRIEND_REQUEST, userId: t.id })));
            },
            [t.id, u, R, j],
        ),
        O = r.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), u?.({ type: ez.c.DECLINE_FRIEND_REQUEST, userId: t.id })));
            },
            [t.id, u, R, j],
        ),
        w = r.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), u?.({ type: ez.c.CANCEL_FRIEND_REQUEST, userId: t.id })));
            },
            [t.id, u, R, j],
        ),
        F = r.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), u?.({ type: ez.c.SEND_FRIEND_REQUEST, userId: t.id })));
            },
            [t.id, u, R, j],
        ),
        L = n.some((e) => {
            let { type: t } = e;
            return t === G.$.PLAYING;
        }),
        U = T !== eZ.clD.ONLINE && T !== eZ.clD.IDLE && T !== eZ.clD.DND;
    return (0, i.jsx)(e_, {
        listItemId: A,
        outerRef: S,
        leftIndicator: (0, i.jsx)(eh.A, { unread: _ }),
        isVisuallyOffline: U,
        onClick: k,
        onContextMenu: x,
        avatar: (0, i.jsx)(P.eu, {
            ...I,
            size: e7,
            src: m,
            isMobile: p,
            isTyping: !1,
            status: N,
            className: ex.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: g,
        }),
        primaryText: (0, i.jsx)(ea.A, {
            userName: v,
            displayNameStyles: C,
            effectDisplayType: es.G.PLAIN,
            textClassName: ex.Xh,
        }),
        secondaryText: y(),
        rightActions: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    L
                        ? (0, i.jsx)("div", {
                              className: ex.im,
                              children: (0, i.jsx)(e9, {
                                  activities: n,
                                  gameProfileEntry: E,
                                  gameIconSize: eo.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    l === eZ.eA$.PENDING_INCOMING
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(f.m, {
                                      text: eW.intl.string(eW.t.MMlhsr),
                                      children: (0, i.jsx)(V.K, {
                                          "aria-label": eW.intl.string(eW.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: H.CheckmarkLargeIcon,
                                          onClick: M,
                                          disabled: R,
                                      }),
                                  }),
                                  (0, i.jsx)(f.m, {
                                      text: eW.intl.string(eW.t.ytCpKs),
                                      children: (0, i.jsx)(V.K, {
                                          "aria-label": eW.intl.string(eW.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: Y.XSmallIcon,
                                          onClick: O,
                                          disabled: R,
                                      }),
                                  }),
                              ],
                          })
                        : l === eZ.eA$.PENDING_OUTGOING
                          ? (0, i.jsx)(f.m, {
                                text: eW.intl.string(eW.t["bTfA//"]),
                                children: (0, i.jsx)(V.K, {
                                    "aria-label": eW.intl.string(eW.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: K.UserClockIcon,
                                    onClick: w,
                                    disabled: R,
                                }),
                            })
                          : s
                            ? (0, i.jsx)(f.m, {
                                  text: eW.intl.string(eW.t.w5uwoI),
                                  children: (0, i.jsx)(V.K, {
                                      "aria-label": eW.intl.string(eW.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: B.UserPlusIcon,
                                      onClick: F,
                                      disabled: R,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
ti.displayName = "FriendRequestRow";
let tr = r.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === eZ.eA$.PENDING_INCOMING || t === eZ.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, i.jsx)(ti, { ...e })
        : (0, i.jsx)(tl, { ...e }),
);
tr.displayName = "FriendRow";
var ts = n(196765),
    ta = n(537812);
let to = (0, ts.v)()(
    (0, ta.Zr)((e) => ({ showSuggestions: !0, setShowSuggestions: (t) => e({ showSuggestions: t }) }), {
        name: "overlay-friends-popout-settings",
        partialize: (e) => ({ showSuggestions: e.showSuggestions }),
    }),
);
var tu = n(103767);
function td(e) {
    let { title: t, count: n, isCollapsed: l, canCollapse: r, onToggle: s, rightAccessory: a } = e,
        o = l && null != n ? `${t} (${n})` : t,
        u = r ? (0, i.jsx)(w, { isCollapsed: l, size: "md", className: tu.t4 }) : null;
    return (0, i.jsx)(C.A, {
        className: tu.uW,
        children: (0, i.jsxs)("div", {
            className: tu.bV,
            children: [
                (0, i.jsxs)(E.D, {
                    onClick: () => r && s(),
                    "aria-hidden": !0,
                    className: r ? tu.Ws : void 0,
                    children: [o, u],
                }),
                a,
            ],
        }),
    });
}
var tc = n(73153),
    th = n(956753);
let tg = new Set(Object.values(u.x)),
    tm = {
        [u.x.FRIENDS]: { FAVORITES: !0, FRIEND_REQUESTS: !0, OFFLINE: !0 },
        [u.x.MESSAGES]: { FAVORITES: !0 },
        [u.x.VOICE]: {},
    },
    tI = { ...tm };
function tE(e, t) {
    return !!(e === u.x.FRIENDS && t.startsWith("GROUP:")) || (!!tg.has(e) && t in tm[e]);
}
function tA() {
    return ((tI = { ...tm }), !0);
}
class tf extends s.Ay.Store {
    static displayName = "FriendsWidgetCollapsibleStore";
    initialize() {
        tI = { ...tm };
    }
    getCollapsedSectionOverridesForTab(e) {
        return tI[e];
    }
    isSectionCollapsedByDefault(e, t) {
        return tE(e, t);
    }
}
function tS(e) {
    return (0, th.v$)(e, "FriendsWidgetCollapsibleStore");
}
let tp = new tf(
    tc.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED: tS(function (e) {
                  let t = e.tab;
                  if (!tg.has(t)) return !1;
                  let n = (function (e) {
                      if ("string" != typeof e) return null;
                      let t = e.trim();
                      return "" === t ? null : t;
                  })(e.sectionKey);
                  if (null == n) return !1;
                  let l = tI[t] ?? {},
                      i = l[n],
                      r = tE(t, n),
                      s = { ...l, [n]: !(i ?? r) };
                  return ((tI = { ...tI, [t]: s }), !0);
              }),
              FRIENDS_LIST_POPOUT_MOUNTED: tS(tA),
              OVERLAY_INITIALIZE: tS(tA),
              LOGOUT: tS(tA),
          },
);
function tN(e) {
    let { tab: t, sectionKey: n } = e;
    return tc.h.dispatch({ type: "OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED", tab: t, sectionKey: n });
}
var tT = n(406595);
function ty(e) {
    let {
            scrollerRef: t,
            favoriteTargetIds: n,
            getScrollTargetForTargetId: l,
            getFallbackScrollTarget: i,
            padding: s = 8,
            animate: a = !1,
        } = e,
        o = ey.A.useState((e) => e.recentlyAddedFavoriteTimestampMsByKey),
        u = r.useMemo(
            () =>
                (function (e) {
                    let { targetIds: t, timestampsByKey: n } = e,
                        l = Date.now(),
                        i = null;
                    for (let e of t) {
                        let t = n[e];
                        null == t ||
                            t > l ||
                            (!(l - t > 1e3) &&
                                (null == i || t > i.addedTimestampMs) &&
                                (i = { targetId: e, addedTimestampMs: t }));
                    }
                    return i;
                })({ targetIds: n, timestampsByKey: o }),
            [n, o],
        ),
        d = r.useRef(null);
    r.useEffect(() => {
        if (null == u) return;
        let e = d.current;
        if (e?.targetId === u.targetId && e.addedTimestampMs === u.addedTimestampMs) return;
        let n = t.current;
        if (null == n) return;
        let r = l(u.targetId) ?? i?.() ?? null;
        null != r && ((d.current = u), n.scrollToIndex({ section: r.section, row: r.row, padding: s, animate: a }));
    }, [a, u, i, l, s, t]);
}
var tx = (((l = {}).BEFORE = "before"), (l.AFTER = "after"), l),
    t_ = n(870391),
    tC = n(379078),
    tv = n(704554),
    tR = n(403362),
    tD = n(185657);
function tb(e) {
    return { user: e.user, activities: e.activities, nickname: e.nickname, relationshipType: e.relationshipType };
}
function tj(e) {
    return e.map(tb);
}
function tk(e, t) {
    let [, n] = e,
        [, l] = t;
    return n === l;
}
function tM(e) {
    let { user: t, activities: n, nickname: l } = e;
    return [t.username, t.globalName, l, ...n.map((e) => e.name)].filter(tR.Vq);
}
let tO = { searchType: tC.n.FUZZY, searchStringGenerator: tM, sortType: tC.r.JARO_WINKLER, throttleMs: 100 };
function tw(e, t) {
    let [n, l] = r.useState(t),
        i = r.useCallback(() => l(t), [t]);
    return ((0, tv.RT)(e, t, l, tO), [n, i]);
}
var tF = n(361729),
    tG = n(690132);
function tL(e) {
    let {
            groupId: t,
            groupName: n,
            displayText: l,
            isCollapsed: r,
            onToggle: s,
            onContextMenu: a,
            isReorderDisabled: o,
            draggedGroupId: u,
            dropTargetGroupId: d,
            dropTargetPosition: c,
            getDragHandleProps: g,
        } = e,
        m = !o,
        I = null != d && d === t,
        A = I && c === tx.BEFORE,
        f = I && c === tx.AFTER;
    return (0, i.jsx)(C.A, {
        className: h()(tu.uW, { [tG.EU]: m, [tG.Me]: null != u && u === t, [tG.hV]: I, [tG.nH]: A, [tG._M]: f }),
        children: (0, i.jsx)("div", {
            ...g(t, m),
            onContextMenu: a,
            children: (0, i.jsxs)(E.D, {
                onClick: s,
                "aria-hidden": !0,
                className: tu.Ws,
                children: [l, (0, i.jsx)(w, { isCollapsed: r, size: "md", className: tu.t4 })],
            }),
        }),
    });
}
function tU(e) {
    return Array.from(e).sort();
}
let tP = (0, g.throttle)(
    (e) => {
        (0, o.Y)(eZ.uss.FRIENDS, {
            locked: b.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function tV() {}
function tH(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: l } = e,
        [d, c] = r.useState(new Set()),
        [h, m] = r.useState(new Set()),
        C = r.useCallback(
            (e, t, n) => {
                (c((n) => {
                    if (t) {
                        if (n.has(e)) return n;
                        n.add(e);
                    } else {
                        if (!n.has(e)) return n;
                        n.delete(e);
                    }
                    return new Set(n);
                }),
                    m((l) => {
                        if (n && t) {
                            if (l.has(e)) return l;
                            l.add(e);
                        } else {
                            if (!l.has(e)) return l;
                            l.delete(e);
                        }
                        return new Set(l);
                    }),
                    l?.(e, t, n));
            },
            [l],
        ),
        b = (0, o.Dk)(() => d, [d]),
        M = (0, o.Dk)(() => h, [h]);
    r.useEffect(() => {
        0 !== b.size && tP({ shownUserIds: tU(b), liveUserIds: tU(M) });
    }, [b, M]);
    let O = (function () {
            let [e] = (0, s.bG)(
                [tD.A, t_.A, ep.A],
                () => {
                    let e = t_.A.getGroups(),
                        [t, n] = tD.A.getRows(tD.j.FRIEND_REQUESTS),
                        l = tj(t),
                        i = tj(tD.A.getRows(tD.j.SUGGESTIONS)[0]),
                        r = tj(tD.A.getRows(tD.j.SAME_ACTIVITY)[0]),
                        s = tj(tD.A.getRows(tD.j.ACTIVITIES)[0]),
                        a = tj(tD.A.getRows(tD.j.IN_GAME)[0]),
                        o = tj(tD.A.getRows(tD.j.ONLINE)[0]),
                        u = tj(tD.A.getRows(tD.j.OFFLINE)[0]),
                        d = e.map((e) => {
                            let [t] = tD.A.getRows(`GROUP:${e.id}`);
                            return { id: e.id, name: e.name, users: tj(t) };
                        }),
                        c = ep.A.getPrimaryActivity()?.name ?? "",
                        h = e.map((e) => `${e.id}\0${e.name}\0${e.userIds.length}`).join("|"),
                        g = `${n}\0${h}\0${c}`;
                    return [
                        {
                            groups: d,
                            friendRequests: l,
                            suggestions: i,
                            inGame: a,
                            activities: s,
                            sameActivity: r,
                            online: o,
                            offline: u,
                            currentActivityName: c,
                        },
                        g,
                    ];
                },
                [],
                tk,
            );
            return e;
        })(),
        {
            searchQuery: w,
            setSearchQuery: F,
            clearSearch: G,
            ...L
        } = (function (e) {
            let [t, n] = r.useState(""),
                [l, i] = tw(t, e.friendRequests),
                [s, a] = tw(t, e.suggestions),
                [o, u] = tw(t, e.sameActivity),
                [d, c] = tw(t, e.activities),
                [h, g] = tw(t, e.inGame),
                [m, I] = tw(t, e.online),
                [E, A] = tw(t, e.offline),
                f = r.useMemo(() => {
                    if ("" === t.trim()) return e.groups;
                    let n = t.toLowerCase();
                    return e.groups
                        .map((e) => {
                            let t = e.users.filter((e) => tM(e).some((e) => null != e && e.toLowerCase().includes(n)));
                            return { ...e, users: t };
                        })
                        .filter((e) => e.users.length > 0);
                }, [t, e.groups]),
                S = r.useCallback(() => {
                    (n(""), i(), a(), u(), c(), g(), I(), A());
                }, [i, a, u, c, g, I, A]);
            return {
                groups: f,
                friendRequests: l,
                suggestions: s,
                sameActivity: o,
                inGame: h,
                activities: d,
                online: m,
                offline: E,
                currentActivityName: e.currentActivityName,
                searchQuery: t,
                setSearchQuery: n,
                clearSearch: S,
            };
        })(O),
        { showSuggestions: U, setShowSuggestions: P } = to(),
        V = w.trim().length > 0,
        H = r.useMemo(() => L.groups.filter((e) => e.users.length > 0), [L.groups]),
        {
            draggedGroupId: Y,
            dropTargetGroupId: K,
            dropTargetPosition: B,
            getDragHandleProps: X,
        } = (function (e) {
            let { groupIds: t, isDisabled: n, onCommitNewOrder: l } = e,
                i = r.useRef(t);
            r.useEffect(() => {
                i.current = t;
            }, [t]);
            let [s, a] = r.useState({
                    draggedGroupId: null,
                    dropTargetGroupId: null,
                    dropTargetPosition: null,
                    didCommitDrop: !1,
                }),
                o = r.useRef(s),
                u = r.useCallback((e) => {
                    a((t) => {
                        let n = { ...t, ...e };
                        return ((o.current = n), n);
                    });
                }, []),
                d = r.useCallback(
                    (e, t) => {
                        let { draggedGroupId: r, didCommitDrop: s } = o.current;
                        if (s || n || null == r) return;
                        let d = (function (e) {
                            let { groupIds: t, draggedGroupId: n, targetGroupId: l, position: i } = e,
                                r = t.indexOf(n),
                                s = t.indexOf(l);
                            if (-1 === r || -1 === s || n === l) return null;
                            let a = [...t];
                            a.splice(r, 1);
                            let o = r < s ? s - 1 : s;
                            return (a.splice("before" === i ? o : o + 1, 0, n), a);
                        })({ groupIds: i.current, draggedGroupId: r, targetGroupId: e, position: t });
                        null != d &&
                            ((o.current = { ...o.current, didCommitDrop: !0 }),
                            a(o.current),
                            l(d),
                            u({ draggedGroupId: null, dropTargetGroupId: null, dropTargetPosition: null }));
                    },
                    [n, l, u],
                ),
                c = r.useCallback(
                    (e, t) => ({
                        draggable: t && !n,
                        "data-dnd-drag-handle": "true",
                        onDragStart: (l) => {
                            n ||
                                (t &&
                                    (l.dataTransfer.setData("text/plain", e),
                                    (l.dataTransfer.effectAllowed = "move"),
                                    u({
                                        draggedGroupId: e,
                                        dropTargetGroupId: null,
                                        dropTargetPosition: null,
                                        didCommitDrop: !1,
                                    })));
                        },
                        onDragOver: (t) => {
                            let { draggedGroupId: l } = o.current;
                            if (n || null == l || l === e) return;
                            (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
                            let i = t.currentTarget.getBoundingClientRect();
                            u({
                                dropTargetGroupId: e,
                                dropTargetPosition: t.clientY < i.top + i.height / 2 ? "before" : "after",
                            });
                        },
                        onDrop: (t) => {
                            let { draggedGroupId: l } = o.current;
                            if (n || null == l || l === e) return;
                            t.preventDefault();
                            let i = t.currentTarget.getBoundingClientRect();
                            d(e, t.clientY < i.top + i.height / 2 ? "before" : "after");
                        },
                        onDragEnd: () => {
                            let { didCommitDrop: e, dropTargetGroupId: t, dropTargetPosition: n } = o.current;
                            (e || null == t || null == n || d(t, n),
                                u({
                                    draggedGroupId: null,
                                    dropTargetGroupId: null,
                                    dropTargetPosition: null,
                                    didCommitDrop: !1,
                                }));
                        },
                    }),
                    [d, n, u],
                );
            return {
                draggedGroupId: s.draggedGroupId,
                dropTargetGroupId: s.dropTargetGroupId,
                dropTargetPosition: s.dropTargetPosition,
                getDragHandleProps: c,
            };
        })({
            groupIds: r.useMemo(() => O.groups.map((e) => e.id), [O.groups]),
            isDisabled: V,
            onCommitNewOrder: v.A.reorderGroups,
        }),
        [z, Z] = (0, s.bG)([tT.A], () => tT.A.getFavoriteTargetIdsForTab(u.x.FRIENDS), [], j.D),
        W = (0, s.bG)(
            [a.default, R.A, D.A],
            () => {
                let e = [];
                for (let t of z) {
                    let n = a.default.getUser(t);
                    null != n && e.push({ user: n, activities: R.A.getActivities(t), nickname: D.A.getNickname(t) });
                }
                return e;
            },
            [z],
            s.My,
        ),
        $ = r.useRef(new Set());
    r.useEffect(() => {
        for (let e of z)
            null == a.default.getUser(e) &&
                ($.current.has(e) ||
                    ($.current.add(e),
                    (0, x.wz)(e).catch(() => {
                        $.current.delete(e);
                    })));
    }, [z]);
    let Q = r.useMemo(() => {
            let e = w.trim().toLowerCase();
            return "" === e
                ? W
                : W.filter((t) => {
                      let { user: n, activities: l, nickname: i } = t;
                      return [n.username, n.globalName, i, ...l.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [W, w]),
        q = Z > 0 && Q.length > 0,
        J =
            !q &&
            0 === H.length &&
            0 === L.friendRequests.length &&
            (!U || 0 === L.suggestions.length) &&
            0 === L.sameActivity.length &&
            0 === L.inGame.length &&
            0 === L.activities.length &&
            0 === L.online.length &&
            0 === L.offline.length,
        ee = (0, s.bG)([tp], () => tp.getCollapsedSectionOverridesForTab(u.x.FRIENDS), []),
        et = r.useRef(null),
        en = (0, _.A)("friends-popout", et),
        el = r.useCallback((e) => {
            tN({ tab: u.x.FRIENDS, sectionKey: e });
        }, []),
        ei = r.useCallback((e) => ee[e] ?? tp.isSectionCollapsedByDefault(u.x.FRIENDS, e), [ee]),
        er = r.useCallback(
            (e) => {
                (e.stopPropagation(), P(!1));
            },
            [P],
        ),
        es = r.useCallback(
            (0, g.debounce)(
                () => {
                    t?.({ type: ez.c.SEARCH_FRIENDS });
                },
                1e3,
                { leading: !0, trailing: !1 },
            ),
            [t],
        ),
        ea = r.useCallback(
            (e) => {
                (F(e), es(), et.current?.scrollToTop());
            },
            [F, es],
        ),
        eo = r.useCallback(() => {
            (G(), es(), et.current?.scrollToTop());
        }, [G, es]),
        eu = (0, k.A)(),
        ed = r.useMemo(() => {
            function e(e) {
                let t = R.A.getStatus(e);
                return t !== eZ.clD.ONLINE && t !== eZ.clD.IDLE && t !== eZ.clD.DND;
            }
            if (J) return [{ kind: "EMPTY_STATE", key: "EMPTY_STATE", title: "", count: 0, length: 1, rows: [] }];
            let t = [];
            if (q) {
                let n = ei("FAVORITES") ? Q.filter((t) => !e(t.user.id)) : Q;
                t.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eW.intl.string(tF.default.GKTlS6),
                    count: Q.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.friendRequests.length > 0) {
                let e = L.friendRequests,
                    n = ei("FRIEND_REQUESTS") ? [] : e;
                t.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: eW.intl.formatToPlainString(eW.t.xxFCW8, { count: e.length }),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            for (let n of H) {
                let l = `GROUP:${n.id}`,
                    i = n.users,
                    r = ei(l) ? i.filter((t) => !e(t.user.id)) : i;
                t.push({
                    kind: "GROUP",
                    key: l,
                    title: n.name,
                    count: i.length,
                    rows: r,
                    length: Math.max(r.length, 1),
                    group: n,
                });
            }
            if (L.sameActivity.length > 0) {
                let e = L.sameActivity,
                    n = ei("SAME_ACTIVITY") ? [] : e;
                t.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: O.currentActivityName,
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.inGame.length > 0) {
                let e = L.inGame,
                    n = ei("IN_GAME") ? [] : e;
                t.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: eW.intl.string(tF.default.trKJoT),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.activities.length > 0) {
                let e = L.activities,
                    n = ei("ACTIVITIES") ? [] : e;
                t.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: eW.intl.string(eW.t.TxqPQR),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (U && L.suggestions.length > 0) {
                let e = L.suggestions,
                    n = ei("SUGGESTIONS") ? [] : e;
                t.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: eW.intl.string(eW.t.qm9dSj),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.online.length > 0) {
                let e = L.online,
                    n = ei("ONLINE") ? [] : e;
                t.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: eW.intl.string(eW.t.WbGtnH),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.offline.length > 0) {
                let e = L.offline,
                    n = ei("OFFLINE") ? [] : e;
                t.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: eW.intl.string(eW.t.Vv0abJ),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            return t;
        }, [
            ei,
            L.friendRequests,
            H,
            L.sameActivity,
            L.activities,
            L.inGame,
            L.suggestions,
            L.online,
            L.offline,
            O.currentActivityName,
            J,
            U,
            q,
            Q,
        ]),
        ec = r.useCallback((e) => ed[e], [ed]),
        eh = r.useCallback(
            (e) => {
                let { section: t } = e,
                    l = ec(t);
                if (null == l || "EMPTY_STATE" === l.kind) return null;
                let r = ei(l.key),
                    s = l.title,
                    a = l.count,
                    o = "GROUP" === l.kind,
                    u = r && "FRIEND_REQUESTS" !== l.kind ? `${s} (${a})` : s,
                    d =
                        o && null != n
                            ? (e) => {
                                  n({ type: ez.K.FRIEND_GROUP, event: e, groupId: l.group?.id ?? "", groupName: s });
                              }
                            : void 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(A.A, { children: eW.intl.format(eW.t.Uaqbke, { title: s, count: a }) }),
                        o
                            ? (0, i.jsx)(tL, {
                                  groupId: l.group?.id ?? "",
                                  groupName: s,
                                  displayText: u,
                                  isCollapsed: r,
                                  onToggle: () => el(l.key),
                                  onContextMenu: d,
                                  isReorderDisabled: V,
                                  draggedGroupId: Y,
                                  dropTargetGroupId: K,
                                  dropTargetPosition: B,
                                  getDragHandleProps: X,
                              })
                            : (0, i.jsx)(td, {
                                  title: s,
                                  count: "FRIEND_REQUESTS" === l.kind ? void 0 : a,
                                  isCollapsed: r,
                                  canCollapse: !0,
                                  onToggle: () => el(l.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === l.kind
                                          ? (0, i.jsx)(f.m, {
                                                text: eW.intl.string(eW.t.N86XcP),
                                                children: (0, i.jsx)(E.D, {
                                                    className: tu.LQ,
                                                    "aria-label": eW.intl.string(eW.t.N86XcP),
                                                    onClick: er,
                                                    children: (0, i.jsx)(S.CircleXIcon, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [ec, ei, el, V, Y, K, B, X, er, n],
        ),
        eg = r.useCallback(
            (e) => {
                let l;
                if (J)
                    return (0, i.jsx)(
                        "div",
                        {
                            className: tu.y7,
                            children: (0, i.jsx)(p.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                children: eW.intl.string(eW.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let r = ec(e.section);
                if (null == r) return null;
                "GROUP" === r.kind && (l = r.group?.id);
                let s = r.rows[e.row];
                return null == s || null == s.user
                    ? null
                    : (0, i.jsx)(
                          "div",
                          {
                              children: (0, i.jsx)(tr, {
                                  ...s,
                                  closeParentPopout: tV,
                                  isSuggestion: "SUGGESTIONS" === r.kind,
                                  shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                                  appContext: eZ.BRT.OVERLAY,
                                  onPrimaryAction: t,
                                  onContextMenu: n,
                                  onFriendVisible: C,
                                  friendGroupId: l,
                              }),
                          },
                          `${e.section}:${s.user.id}`,
                      );
            },
            [ec, J, tV, t, n, C],
        ),
        em = r.useMemo(() => ed.map((e) => e.length), [ed]),
        eI = r.useCallback(
            (e) => {
                let t = ed.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) return null;
                let n = ed[t],
                    l = n?.rows.findIndex((t) => t.user.id === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [ed],
        );
    ty({
        scrollerRef: et,
        favoriteTargetIds: z,
        getScrollTargetForTargetId: (e) => eI(e),
        getFallbackScrollTarget: r.useCallback(() => {
            let e = ed.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [ed]),
        padding: 8,
        animate: !1,
    });
    let eE = r.useCallback(() => 40, []),
        eA = r.useCallback(
            (e) => {
                if (J) return 300;
                let t = ec(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [ec, J],
        );
    return (0, i.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, i.jsx)("div", {
                className: tu.MT,
                children: (0, i.jsx)(N.I, {
                    query: w,
                    onChange: ea,
                    onClear: eo,
                    placeholder: eu ? eW.intl.string(eW.t.KA1U4B) : eW.intl.string(eW.t.lLDtTK),
                    disabled: eu,
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: en,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(T.sk, {
                            children: (e) =>
                                (0, i.jsx)(y.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eW.intl.string(eW.t.TdEu5X),
                                    ref: (e) => {
                                        ((et.current = e), (t.current = e?.getScrollerNode() ?? null));
                                    },
                                    className: tu.p_,
                                    sectionHeight: eE,
                                    rowHeight: eA,
                                    sidebarHeight: 0,
                                    renderSection: eh,
                                    renderRow: eg,
                                    sections: em,
                                    paddingBottom: 8,
                                    ...l,
                                    ...e,
                                }),
                        });
                    },
                }),
            }),
        ],
    });
}
var tY = n(687966),
    tK = n(983851),
    tB = n(730134),
    tX = n(775602),
    tz = n(410540),
    tZ = n(302223),
    tW = n(853390),
    t$ = n(253932),
    tQ = n(495867),
    tq = n(741961),
    tJ = n(486020),
    t0 = n(427262),
    t1 = n(589051),
    t3 = n(545807),
    t2 = n(659540);
let t5 = r.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, t3.A)(),
        [l, i] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = n.setInterval(() => i(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, tW.fU)(s);
});
t5.displayName = "OverlayElapsedTime";
let t6 = r.memo(function () {
    let e = (0, t3.A)(),
        [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, s.bG)([tQ.A], () => tQ.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, tW.fU)(l / 1e3);
});
function t4(e) {
    var t;
    let n,
        { currentUser: l, activity: a, currentGameName: o } = e,
        u = l?.id ?? null,
        d = (0, t1.Mn)("UserActivityBanner"),
        c = (0, t0.tx)(l),
        h = d ? c : (l?.globalName ?? l?.username),
        g = (0, er.A)({ userId: u, guildId: null }),
        { isMobileOnline: m, status: I } = (0, s.cf)(
            [R.A],
            () =>
                null == u
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: R.A.isMobileOnline(u), status: R.A.getStatus(u) },
            [u],
        ),
        E = (0, s.bG)([eS.Ay], () => eS.Ay.getVoiceChannelId()),
        A = (0, s.bG)([eE.A], () => (null != E ? eE.A.getChannel(E) : null), [E]),
        f = (0, ee.Ay)(A),
        S = (0, tz.A)(u ?? "0") ?? null,
        N = null != u ? S : null,
        T =
            null == (n = (0, z.A)(a, !0).text ?? o)
                ? null
                : a?.type === G.$.PLAYING || null == a
                  ? eW.intl.formatToPlainString(eW.t.lFApmz, { game: n })
                  : n,
        y = a?.timestamps?.start != null ? ((t = a.timestamps.start) < 1e12 ? 1e3 * t : t) : null,
        x = r.useMemo(
            () =>
                (function (e) {
                    let {
                        activityLabel: t,
                        activityStartTimestampMs: n,
                        voiceCallName: l,
                        customStatusActivity: i,
                    } = e;
                    return null != t
                        ? { type: "activity", label: t, startTimestampMs: n }
                        : null != l
                          ? { type: "voice_call", label: l }
                          : null != i
                            ? { type: "custom_status", customStatusActivity: i }
                            : { type: "none" };
                })({ activityLabel: T, activityStartTimestampMs: y, voiceCallName: f, customStatusActivity: N }),
            [T, y, f, N],
        );
    if (null == l) return null;
    let _ =
        null == l.banner
            ? null
            : ((0, tJ.z)({ id: l.id, banner: l.banner, canAnimate: t$.kt.getSetting(), size: 600 }) ?? null);
    return (0, i.jsxs)("div", {
        className: t2.cI,
        children: [
            (0, i.jsx)("div", { className: t2.CK, style: { backgroundImage: null != _ ? `url(${_})` : void 0 } }),
            (0, i.jsxs)("div", {
                className: t2.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: t2.iy,
                        children: [
                            (0, i.jsx)(tB.A, { user: l, isMobile: m, status: I, className: t2.my, size: L._3.SIZE_40 }),
                            (0, i.jsxs)("div", {
                                className: t2.ic,
                                children: [
                                    (0, i.jsx)(ea.A, {
                                        userName: h,
                                        textClassName: t2.Xh,
                                        displayNameStyles: g,
                                        effectDisplayType: es.G.ANIMATED,
                                    }),
                                    (function () {
                                        switch (x.type) {
                                            case "activity":
                                                return (0, i.jsxs)("div", {
                                                    className: t2.nU,
                                                    children: [
                                                        (0, i.jsx)(tY.GameControllerIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: t2.Wo,
                                                        }),
                                                        (0, i.jsx)(p.E, {
                                                            className: t2.Yg,
                                                            variant: "body-xs/medium",
                                                            color: "text-subtle",
                                                            children: x.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, i.jsxs)("div", {
                                                    className: t2.nU,
                                                    children: [
                                                        (0, i.jsx)(tK.VoiceNormalIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: t2.Wo,
                                                        }),
                                                        (0, i.jsx)(p.E, {
                                                            className: t2.Yg,
                                                            variant: "body-xs/medium",
                                                            color: "text-subtle",
                                                            children: x.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, i.jsx)("div", {
                                                    className: t2.nU,
                                                    children: (0, i.jsx)(tZ.A, {
                                                        activity: x.customStatusActivity,
                                                        className: t2.tR,
                                                        emojiClassName: t2.qp,
                                                        textClassName: t2.Yg,
                                                        hideTooltip: !0,
                                                    }),
                                                });
                                            default:
                                                return null;
                                        }
                                    })(),
                                ],
                            }),
                        ],
                    }),
                    "activity" === x.type
                        ? null == x.startTimestampMs
                            ? null
                            : (0, i.jsx)(p.E, {
                                  className: t2.p0,
                                  variant: "mono-md/bold",
                                  tag: "div",
                                  children: (0, i.jsx)(t5, { startTimestampMs: x.startTimestampMs }),
                              })
                        : "voice_call" === x.type
                          ? null == E
                              ? null
                              : (0, i.jsx)(p.E, {
                                    className: t2.p0,
                                    variant: "mono-md/bold",
                                    tag: "div",
                                    children: (0, i.jsx)(t6, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function t9(e) {
    let { currentUser: t, activity: n, currentGameName: l, activeTab: o, onTabChange: d } = e,
        {
            friendsHasUnreadFavorites: c,
            messagesHasUnreadFavorites: h,
            voiceHasActiveFavorites: g,
            friendsHasTypingInFavorites: m,
            messagesHasTypingInFavorites: I,
        } = (0, s.cf)(
            [tT.A, ef.Ay, eE.A, eK.A, tq.A, a.default],
            () => {
                let e = a.default.getCurrentUser()?.id ?? null,
                    [t] = tT.A.getFavoriteTargetIdsForTab(u.x.FRIENDS),
                    [n] = tT.A.getFavoriteTargetIdsForTab(u.x.MESSAGES),
                    [l] = tT.A.getFavoriteTargetIdsForTab(u.x.VOICE);
                function i(e) {
                    return ef.Ay.hasUnread(e) || ef.Ay.getMentionCount(e) > 0;
                }
                function r(t) {
                    let n = tq.A.getTypingUsers(t);
                    for (let t in n) if (t !== e) return !0;
                    return !1;
                }
                function s(e) {
                    return eE.A.getDMFromUserId(e) ?? null;
                }
                let o = t.some((e) => {
                        let t = s(e);
                        return null != t && i(t);
                    }),
                    d = t.some((e) => {
                        let t = s(e);
                        return null != t && r(t);
                    }),
                    c = n.some(i),
                    h = n.some(r);
                return {
                    friendsHasUnreadFavorites: o,
                    messagesHasUnreadFavorites: c,
                    voiceHasActiveFavorites: l.some((e) => {
                        let t = eK.A.getVoiceStatesForChannel(e);
                        for (let e in t) return !0;
                        return !1;
                    }),
                    friendsHasTypingInFavorites: d,
                    messagesHasTypingInFavorites: h,
                };
            },
            [],
        ),
        E = r.useMemo(() => ({ [u.x.FRIENDS]: c, [u.x.MESSAGES]: h, [u.x.VOICE]: g }), [c, h, g]),
        A = (0, s.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
        f = r.useMemo(() => ({ [u.x.FRIENDS]: !A && m, [u.x.MESSAGES]: !A && I, [u.x.VOICE]: !1 }), [A, m, I]);
    return (0, i.jsxs)("div", {
        className: t2.kL,
        children: [
            (0, i.jsx)(t4, { currentUser: t, activity: n, currentGameName: l }),
            (0, i.jsx)("div", {
                className: t2.vR,
                role: "tablist",
                "aria-label": eW.intl.string(eW.t.TdEu5X),
                children: [
                    { id: u.x.FRIENDS, label: eW.t.TdEu5X },
                    { id: u.x.MESSAGES, label: eW.t.OIgYlQ },
                    { id: u.x.VOICE, label: eW.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        l = !0 === E[t],
                        r = !0 === f[t];
                    return (0, i.jsx)(
                        t7,
                        {
                            tab: t,
                            label: eW.intl.formatToPlainString(n, {}),
                            selected: o === t,
                            shouldShowCutoutDot: l,
                            shouldPulseDot: r,
                            onSelect: d,
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function t7(e) {
    let {
            tab: t,
            label: n,
            selected: l,
            shouldShowCutoutDot: r = !1,
            shouldPulseDot: s = !1,
            onSelect: a,
            className: o,
        } = e,
        u = r ? h()(t2.OD, s && t2.S) : null;
    return (0, i.jsxs)(E.D, {
        role: "tab",
        "aria-selected": l,
        className: h()(t2.Mf, l && t2.jP, o),
        onClick: () => a(t),
        children: [
            null != u ? (0, i.jsx)("span", { className: u, "aria-hidden": !0 }) : null,
            (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
t6.displayName = "OverlayVoiceCallElapsedTime";
var t8 = n(594831),
    ne = n(645959),
    nt = n(812993),
    nn = n(602853),
    nl = n(713654),
    ni = n(620632),
    nr = n(439372),
    ns = n(723176),
    na = n(626584),
    no = n(225123);
n(95701);
var nu = n(46653),
    nd = n(666103);
class nc {
    pending = new Set();
    fetching = new Set();
    empty() {
        return 0 === this.pending.size && 0 === this.fetching.size;
    }
    status(e) {
        return this.pending.has(e) ? 0 : this.fetching.has(e) ? 1 : null;
    }
    addWant(e) {
        this.fetching.has(e) || this.pending.add(e);
    }
    removeWant(e) {
        (this.pending.delete(e), this.fetching.delete(e));
    }
    nextWants(e) {
        let t = [...this.pending];
        return ((t.length = Math.min(e, t.length)), t);
    }
    markFetching(e) {
        for (let t of e) (this.pending.delete(t), this.fetching.add(t));
    }
    markCompleted(e) {
        for (let t of e) (this.pending.delete(t), this.fetching.delete(t));
    }
    markFailed(e) {
        for (let t of e) (this.pending.add(t), this.fetching.delete(t));
    }
    async try(e, t) {
        try {
            this.markFetching(e);
            let n = await t();
            return (this.markCompleted(e), n);
        } catch (t) {
            throw (this.markFailed(e), t);
        }
    }
}
let nh = new na.A("MessagePreviewManager");
class ng extends nr.A {
    remote = new Map();
    remoteTicking = !1;
    tickQueued = !1;
    localFetching = new Set();
    actions = {
        CONNECTION_OPEN_SUPPLEMENTAL: () => this.handleConnectionOpenSupplemental(),
        CONNECTION_RESUMED: () => this.handleConnectionResumed(),
        GUILD_CREATE: (e) => this.handleGuildCreate(e),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        LOAD_MESSAGES_SUCCESS: (e) => this.handleMessagesLoaded(e),
        LOCAL_MESSAGES_LOADED: (e) => this.handleMessagesLoaded(e),
        LOGOUT: () => this.handleLogout(),
        MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
        MESSAGE_DELETE: (e) => this.handleMessageDelete(e),
        MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
        THREAD_LIST_SYNC: (e) => this.handleThreadListSync(e),
    };
    addWant(e) {
        eE.A.getBasicChannel(e);
    }
    remoteTick = m().debounce(
        (() => {
            var e = this;
            return async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!no.A.isConnected()) {
                    e.tickQueued = !0;
                    return;
                }
                if (!e.remoteTicking && !(t > 5)) {
                    e.tickQueued = !1;
                    try {
                        for (let [t, n] of ((e.remoteTicking = !0), e.remote))
                            await (null == t ? e.fetchDms(n) : e.fetchGuilds(t, n));
                        (e.cleanup(), (e.remoteTicking = !1));
                    } catch (n) {
                        (nh.log(`couldn't fetch message previews (attempt: ${t}, error: ${n})`),
                            (e.remoteTicking = !1),
                            e.remoteTick(t + 1));
                    }
                }
            };
        })(),
        100,
    );
    async fetchLocal(e) {
        if (!(!nd.A.isLocalFetchNeeded(e) || this.localFetching.has(e)))
            try {
                (nh.verbose(`fetching local previews (via: database, guild_id: ${e})`), this.localFetching.add(e));
                let t = nu.default.getId(),
                    n = await ns.A.messages()?.getMostRecents(e);
                null != n &&
                    t === nu.default.getId() &&
                    tc.h.dispatch({
                        type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                        guildId: e,
                        messages: n.map((e) => {
                            let [t, n] = e;
                            return [t, n.message];
                        }),
                    });
            } catch (e) {
                nh.log(`couldn't fetch local previews (error: ${e})`);
            } finally {
                this.localFetching.delete(e);
            }
    }
    fetchGuilds(e, t) {
        let n = t.nextWants(1e3);
        return 0 === n.length
            ? Promise.resolve()
            : t.try(
                  n,
                  () => (
                      nh.verbose(
                          `fetching guild previews (via: gateway, guild_id: ${e}, channel_ids: ${n.join(", ")})`,
                      ),
                      no.A.getSocket().requestLastMessages(e, n),
                      Promise.resolve()
                  ),
              );
    }
    fetchDms(e) {
        let t = e.nextWants(30);
        return 0 === t.length
            ? Promise.resolve()
            : e.try(t, async () => {
                  nh.verbose(`fetching dm previews (via: http, channel_ids: ${t.join(", ")})`);
                  let e = (
                      await ni.Bo.post({ url: eZ.Rsh.MESSAGE_PREVIEWS, body: { channel_ids: t }, rejectWithError: !1 })
                  ).body;
                  tc.h.dispatch({ type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: e });
              });
    }
    syncChannel(e, t) {
        let n = this.remote.get(e);
        null != n && nd.A.isLatest(e, t) && n.removeWant(t);
    }
    getOrCreate(e) {
        return (this.remote.has(e) || this.remote.set(e, new nc()), this.remote.get(e));
    }
    cleanup() {
        for (let [e, t] of this.remote) t.empty() && this.remote.delete(e);
    }
    handleConnectionOpenSupplemental() {
        this.handleConnectionResumed(!1);
    }
    handleConnectionResumed() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        this.tickQueued && !this.remoteTicking
            ? (this.remoteTick(), this.remoteTick.flush())
            : e && (this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1));
    }
    handleGuildCreate(e) {
        this.remote.delete(e.guild.id);
    }
    handleGuildDelete(e) {
        this.remote.delete(e.guild.id);
    }
    handleLogout() {
        (this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1));
    }
    handleMessageCreate(e) {
        this.syncChannel(e.guildId ?? null, e.channelId);
    }
    handleMessageDelete(e) {
        this.syncChannel(e.guildId ?? null, e.channelId);
    }
    handleMessageUpdate(e) {
        null != e.message.channel_id && this.syncChannel(e.guildId ?? null, e.message.channel_id);
    }
    handleMessagesLoaded(e) {
        let t = eE.A.getBasicChannel(e.channelId),
            n = t?.guild_id ?? null;
        if (null != t) for (let t of e.messages ?? []) this.syncChannel(n, t.channel_id);
    }
    handleThreadListSync(e) {
        let t = this.remote.get(e.guildId);
        if (null != t) for (let n of e.mostRecentMessages ?? []) t.removeWant(n.channel_id);
    }
}
let nm = new ng();
function nI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        l = e.id,
        [i, a] = (0, s.yK)([nd.A], () => (t ? [null, !0] : [nd.A.message(n, l), nd.A.isLatest(n, l)]));
    return (
        (0, r.useEffect)(() => {
            null == l || a || nm.addWant(l);
        }, [l, a]),
        i
    );
}
var nE = n(814690),
    nA = n(912156),
    nf = n(191023),
    nS = n(428689),
    np = n(432017),
    nN = n(588975),
    nT = n(173936),
    ny = n(797285),
    nx = n(978940),
    n_ = n(960027),
    nC = n(46054),
    nv = n(997141),
    nR = n(146849),
    nD = n(647660),
    nb = n(448761),
    nj = n(470710),
    nk = n(628983),
    nM = n(806931),
    nO = n(427930),
    nw = n(273185),
    nF = n(944052),
    nG = n(763754),
    nL = n(779014),
    nU = n(354777),
    nP = n(88484),
    nV = n(812020),
    nH = n(898663);
function nY(e) {
    let { icon: t, ...n } = e;
    switch (t) {
        case "image":
            return (0, i.jsx)(nf.ImageIcon, { ...n });
        case "video":
            return (0, i.jsx)(nS.VideoIcon, { ...n });
        case "audio":
            return (0, i.jsx)(np.MusicIcon, { ...n });
        case "attachment":
            return (0, i.jsx)(nN.AttachmentIcon, { ...n });
        case "link":
            return (0, i.jsx)(nT.LinkIcon, { ...n });
        case "sticker":
            return (0, i.jsx)(ny.StickerIcon, { ...n });
        case "call-active":
            return (0, i.jsx)(nx.PhoneCallIcon, { ...n });
        case "call-ended":
            return (0, i.jsx)(n_.PhoneHangUpIcon, { ...n });
    }
}
let nK = { formatInline: !0, noStyleAndInteraction: !0 },
    nB = r.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, nU.jp)(nC.A.parseInlineReply, { content: t, channelId: n });
    });
function nX(e) {
    let { channel: t, typingUserIds: n } = e,
        l = (0, s.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let l = [];
                    for (let i of e) {
                        let e = a.default.getUser(i);
                        null != e && l.push(eN.Ay.getName(n, t, e));
                    }
                    let [i, r, s, o] = l;
                    return null == i
                        ? null
                        : null == r
                          ? eW.intl.format(eW.t.lJ9sZX, { a: i })
                          : null == s
                            ? eW.intl.format(eW.t.rB0CUa, { a: i, b: r })
                            : null == o
                              ? eW.intl.format(eW.t.StKThj, { a: i, b: r, c: s })
                              : eW.intl.string(eW.t.uVDhqZ);
                })(n, t.id, t.guild_id),
            [n, t.id, t.guild_id],
        );
    return null == l
        ? null
        : (0, i.jsx)("div", { className: nH.Sl, children: (0, i.jsx)("span", { className: nH.BK, children: l }) });
}
function nz(e) {
    let t,
        { channel: n, message: l } = e,
        r = (function (e, t) {
            var n, l;
            let { isBlocked: i, isIgnored: r } = (0, s.cf)(
                    [D.A],
                    () => ({ isBlocked: D.A.isBlocked(e.author.id), isIgnored: D.A.isIgnored(e.author.id) }),
                    [e.author.id],
                ),
                o =
                    ((n = t.id),
                    (l = e.id),
                    (0, s.bG)(
                        [nj.A, nk.A],
                        () =>
                            nj.A.isCallActive(n, l) &&
                            nk.A.getParticipants(n).some((e) => e.type === nM.lp.USER && !e.ringing),
                        [n, l],
                    )),
                u = (0, s.bG)([nu.default], () => nu.default.getId()),
                d = (0, nG.Ay)(e).nick,
                c = e.type !== nb.l.USER_JOIN && e.author.id === u ? eW.intl.string(eW.t.LuZzxn) : d,
                h = (0, s.bG)([a.default], () => (e.mentions.length > 0 ? a.default.getUser(e.mentions[0]) : void 0)),
                m = (0, nG.d8)(h, t).nick,
                I = (0, nG.d8)(e.actor, t).nick;
            return (function (e, t) {
                let { isBlocked: n, isIgnored: l, authorNick: i } = t;
                if (n) return { type: "text", text: eW.intl.string(eW.t.XAkOo2) };
                if (l) return { type: "text", text: eW.intl.string(eW.t["G7p6v/"]) };
                if (
                    (function (e) {
                        switch (e.type) {
                            case nb.l.DEFAULT:
                            case nb.l.CHANGELOG:
                            case nb.l.REPLY:
                            case nb.l.CHAT_INPUT_COMMAND:
                            case nb.l.CONTEXT_MENU_COMMAND:
                            case nb.l.POLL_RESULT:
                            case nb.l.AUTO_MODERATION_ACTION:
                                return !0;
                            default:
                                return !1;
                        }
                    })(e)
                ) {
                    let t = (function (e) {
                        if (1 === e.embeds.length && e.embeds[0].url === e.content && null != e.embeds[0].rawTitle)
                            return { type: "markup", markup: e.embeds[0].rawTitle };
                        if (null != e.content && "" !== e.content) return { type: "message", message: e };
                        if (e.hasFlag(eZ.pr7.IS_VOICE_MESSAGE))
                            return { type: "text", text: eW.intl.string(eW.t.slFYgi) };
                        if (e.attachments.length > 0) {
                            let t = e.attachments.every((e) => (0, nw.u)(e.filename)),
                                n = !t && e.attachments.every((e) => (0, nw.AE)(e.filename)),
                                l = !t && !n && e.attachments.every((e) => (0, nw.L8)(e.filename));
                            return t
                                ? {
                                      type: "text",
                                      text: eW.intl.formatToPlainString(eW.t.h4pFfU, { count: e.attachments.length }),
                                      trailingIcon: "image",
                                  }
                                : n
                                  ? {
                                        type: "text",
                                        text: eW.intl.formatToPlainString(eW.t.SJ6pPX, { count: e.attachments.length }),
                                        trailingIcon: "video",
                                    }
                                  : l
                                    ? {
                                          type: "text",
                                          text: eW.intl.formatToPlainString(eW.t.fnO3hK, {
                                              count: e.attachments.length,
                                          }),
                                          trailingIcon: "audio",
                                      }
                                    : {
                                          type: "text",
                                          text: eW.intl.formatToPlainString(eW.t["89ihS8"], {
                                              count: e.attachments.length,
                                          }),
                                          trailingIcon: "attachment",
                                      };
                        }
                        if (e.embeds.length > 0) {
                            let t = e.embeds.every((e) => null != e.url && (0, nw.Zj)(e.url)),
                                n = !t && e.embeds.every((e) => null != e.url && (0, nw.r1)(e.url)),
                                l = !t && !n && e.embeds.every((e) => null != e.url && (0, nw.L8)(e.url));
                            if (t)
                                return {
                                    type: "text",
                                    text: eW.intl.formatToPlainString(eW.t.h4pFfU, { count: e.embeds.length }),
                                    trailingIcon: "image",
                                };
                            if (n)
                                return {
                                    type: "text",
                                    text: eW.intl.formatToPlainString(eW.t.SJ6pPX, { count: e.embeds.length }),
                                    trailingIcon: "video",
                                };
                            if (l)
                                return {
                                    type: "text",
                                    text: eW.intl.formatToPlainString(eW.t.fnO3hK, { count: e.embeds.length }),
                                    trailingIcon: "audio",
                                };
                            else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle)
                                return { type: "markup", markup: e.embeds[0].rawTitle };
                            else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription)
                                return { type: "markup", markup: e.embeds[0].rawDescription };
                            else
                                return {
                                    type: "text",
                                    text: eW.intl.formatToPlainString(eW.t["9XuYjs"], { count: e.embeds.length }),
                                    trailingIcon: "link",
                                };
                        }
                        return e.stickerItems.length > 0
                            ? { type: "text", text: e.stickerItems[0].name, trailingIcon: "sticker" }
                            : e.isPoll()
                              ? {
                                    type: "text",
                                    text: eW.intl.formatToPlainString(eW.t.ImizdM, { question: e.poll?.question.text }),
                                }
                              : (0, nO.A)(e)
                                ? { type: "text", text: eW.intl.string(eW.t["9ddYKt"]) }
                                : void 0;
                    })(e);
                    if (null != t) return { ...t, authorLabel: i };
                }
                let r = (function (e, t) {
                    let {
                        currentUserId: n,
                        authorNick: l,
                        actorNick: i,
                        otherUser: r,
                        otherUserNick: s,
                        isCallActive: a,
                    } = t;
                    return e.type === nb.l.RECIPIENT_ADD && null != s
                        ? {
                              type: "text",
                              text: eW.intl.formatToPlainString(eW.t.MMN2Jq, {
                                  username: l,
                                  usernameHook: g.identity,
                                  otherUsername: s,
                                  otherUsernameHook: g.identity,
                              }),
                          }
                        : e.type === nb.l.RECIPIENT_REMOVE && null != s
                          ? {
                                type: "text",
                                text:
                                    e.author.id === r?.id
                                        ? eW.intl.formatToPlainString(eW.t["5v2xa8"], {
                                              username: l,
                                              usernameHook: g.identity,
                                          })
                                        : eW.intl.formatToPlainString(eW.t.L2FyVq, {
                                              username: l,
                                              usernameHook: g.identity,
                                              otherUsername: s,
                                              otherUsernameHook: g.identity,
                                          }),
                            }
                          : e.type === nb.l.CALL
                            ? {
                                  type: "text",
                                  text: a
                                      ? eW.intl.string(eW.t["NGg/fm"])
                                      : null == e.call || e.call.participants.includes(n)
                                        ? eW.intl.string(eW.t.v05Xd6)
                                        : eW.intl.string(eW.t["2CnhoI"]),
                                  color: a ? "text-feedback-positive" : void 0,
                                  trailingIcon: a ? "call-active" : "call-ended",
                              }
                            : e.type === nb.l.CHANNEL_NAME_CHANGE
                              ? {
                                    type: "text",
                                    text: eW.intl.formatToPlainString(eW.t.oItgEw, {
                                        username: l,
                                        usernameHook: g.identity,
                                        channelName: e.content,
                                    }),
                                }
                              : e.type === nb.l.CHANNEL_ICON_CHANGE
                                ? {
                                      type: "text",
                                      text: eW.intl.formatToPlainString(eW.t.OEdU6X, {
                                          username: l,
                                          usernameHook: g.identity,
                                      }),
                                  }
                                : e.type === nb.l.CHANNEL_PINNED_MESSAGE
                                  ? {
                                        type: "text",
                                        text: eW.intl.formatToPlainString(eW.t.vfkjqx, {
                                            username: l,
                                            usernameHook: g.identity,
                                        }),
                                    }
                                  : e.type === nb.l.USER_JOIN
                                    ? e.author.bot
                                        ? { type: "text", text: nL.A.getSystemMessageAppAdded(l, i) }
                                        : {
                                              type: "text",
                                              text: eW.intl.formatToPlainString(nL.A.getSystemMessageUserJoin(e.id), {
                                                  username: l,
                                                  usernameHook: g.identity,
                                              }),
                                          }
                                    : e.type === nb.l.GUILD_BOOST ||
                                        e.type === nb.l.GUILD_BOOST_TIER_1 ||
                                        e.type === nb.l.GUILD_BOOST_TIER_2 ||
                                        e.type === nb.l.GUILD_BOOST_TIER_3
                                      ? {
                                            type: "text",
                                            text: eW.intl.formatToPlainString(eW.t["57St/7"], {
                                                username: l,
                                                usernameHook: g.identity,
                                            }),
                                        }
                                      : e.type === nb.l.THREAD_CREATED
                                        ? {
                                              type: "text",
                                              text: eW.intl.formatToPlainString(eW.t.SGaUAU, {
                                                  actorName: l,
                                                  actorHook: g.identity,
                                                  threadName: e.content,
                                                  threadOnClick: g.identity,
                                              }),
                                          }
                                        : e.type === nb.l.PREMIUM_REFERRAL
                                          ? {
                                                type: "text",
                                                text: eW.intl.formatToPlainString(eW.t.lieTqU, { username: l }),
                                            }
                                          : e.type === nb.l.STAGE_START
                                            ? {
                                                  type: "text",
                                                  text: eW.intl.formatToPlainString(eW.t.aZtRW8, {
                                                      username: l,
                                                      usernameOnClick: g.identity,
                                                      topic: e.content,
                                                  }),
                                              }
                                            : e.type === nb.l.STAGE_END
                                              ? {
                                                    type: "text",
                                                    text: eW.intl.formatToPlainString(eW.t.vMJhvG, {
                                                        username: l,
                                                        usernameOnClick: g.identity,
                                                        topic: e.content,
                                                    }),
                                                }
                                              : e.type === nb.l.STAGE_SPEAKER
                                                ? {
                                                      type: "text",
                                                      text: eW.intl.formatToPlainString(eW.t.V4uCm4, {
                                                          username: l,
                                                          usernameOnClick: g.identity,
                                                      }),
                                                  }
                                                : e.type === nb.l.STAGE_TOPIC
                                                  ? {
                                                        type: "text",
                                                        text: eW.intl.formatToPlainString(eW.t.ro3RM0, {
                                                            username: l,
                                                            usernameOnClick: g.identity,
                                                            topic: e.content,
                                                        }),
                                                    }
                                                  : e.type === nb.l.VOICE_SESSION
                                                    ? { type: "text", text: (0, nF.fn)(e) }
                                                    : void 0;
                })(e, t);
                if (null != r) return r;
            })(e, {
                message: e,
                channel: t,
                currentUserId: u,
                authorNick: c,
                actorNick: null != e.actor ? I : void 0,
                otherUser: h,
                otherUserNick: m,
                isBlocked: i,
                isIgnored: r,
                isCallActive: o,
            });
        })(l, n),
        o = (0, nR.I2)({ location: "OverlayChannelPreviewLine" }).enabled,
        u = (0, nv.j)({ excluded: nv.Z }),
        d = (0, nD.N)(r?.type === "message" ? r.message.content : null, { enabled: o, syntax: u });
    if (null == r) return null;
    let { authorLabel: c, color: m, trailingIcon: I } = r;
    switch (r.type) {
        case "text":
            t = r.text;
            break;
        case "markup":
            t = (0, i.jsx)(nB, { markup: r.markup, channelId: l.channel_id });
            break;
        case "message":
            t = (0, i.jsx)(nP.Ay, { message: r.message, options: nK, parsed: d });
    }
    return (0, i.jsxs)("div", {
        className: h()(nH.Sl, { [nH.Vz]: "text-feedback-positive" === m }),
        children: [
            (0, i.jsxs)("span", { className: nH.BK, children: [null != c && `${c}: `, t] }),
            null != I && (0, i.jsx)(nY, { icon: I, size: "xxs", color: "currentColor", className: nH.sl }),
        ],
    });
}
function nZ(e) {
    let { channel: t, message: n, showTypingPreview: l } = e,
        r = (0, s.bG)(
            [a.default],
            () => {
                if (!l) return [];
                let e = a.default.getCurrentUser()?.id ?? null;
                var n = t.id;
                let i = tq.A.getTypingUsers(n),
                    r = [];
                for (let t in i) t !== e && r.push(t);
                return r.sort((e, t) => {
                    let n = +!!D.A.isFriend(e),
                        l = +!!D.A.isFriend(t);
                    if (n !== l) return l - n;
                    let i = nV.A.getUserAffinity(e)?.communicationProbability ?? 0;
                    return (nV.A.getUserAffinity(t)?.communicationProbability ?? 0) - i;
                });
            },
            [t.id, l],
        );
    return r.length > 0
        ? (0, i.jsx)(nX, { channel: t, typingUserIds: r })
        : null == n
          ? null
          : (0, i.jsx)(nz, { channel: t, message: n });
}
var nW = n(680049),
    n$ = n(240516);
function nQ(e) {
    return (0, s.bG)(
        [tq.A, a.default],
        () => {
            if (null == e) return !1;
            let t = a.default.getCurrentUser()?.id ?? null,
                n = tq.A.getTypingUsers(e.id);
            for (let e in n) if (e !== t) return !0;
            return !1;
        },
        [e],
    );
}
function nq(e) {
    return (0, i.jsx)(nt.hV, { count: e });
}
function nJ(e) {
    let { channelId: t, listItemId: n, mentionCount: l, unread: r } = e,
        s = (0, ee.Ay)(eE.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, i.jsx)(e_, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(eh.A, { unread: r }),
        avatar: (0, i.jsx)(P.eu, { src: void 0, "aria-hidden": !0, size: L._3.SIZE_32 }),
        primaryText: (0, i.jsx)("span", {
            children: (0, i.jsx)(p.E, {
                className: ex.Xh,
                variant: "body-sm/medium",
                color: "text-muted",
                children: s,
            }),
        }),
        rightActions: () => (l > 0 ? nq(l) : null),
    });
}
function n0(e) {
    let {
            channel: t,
            listItemId: n,
            mentionCount: l,
            isMentionLowImportance: o,
            unread: d,
            onPrimaryAction: c,
            onContextMenu: h,
        } = e,
        g = t.id,
        m = (0, ee.Ay)(t, !1) ?? "???",
        I = nQ(t),
        E = nI(t, !1),
        {
            user: A,
            status: f,
            isMobile: S,
        } = (0, s.cf)(
            [a.default, R.A],
            () => {
                if (!t.isDM()) return { user: null, status: null, isMobile: !1 };
                let e = t.getRecipientId(),
                    n = null != e ? a.default.getUser(e) : null;
                return {
                    user: n,
                    status: null != e ? R.A.getStatus(e) : null,
                    isMobile: null != e && R.A.isMobileOnline(e),
                };
            },
            [t],
        ),
        N = r.useCallback(
            (e) => {
                let n = t.isMultiUserDM() ? ez.K.GROUP_DM_CHANNEL : ez.K.DM_CHANNEL;
                h?.({ type: n, event: e, channel: t, user: A ?? void 0 });
            },
            [t, h, A],
        ),
        T = t.isMultiUserDM() || (t.isPrivate() && t.recipients.length >= 2),
        y = r.useCallback(() => {
            c?.({ type: ez.c.OPEN_TEXT_CHAT_CHANNEL, channelId: g, guildId: null });
        }, [g, c]);
    return (0, i.jsx)(e_, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(eh.A, { unread: d }),
        onClick: y,
        onContextMenu: N,
        avatar: (0, i.jsx)(nE.h, {
            channel: t,
            user: A,
            "aria-hidden": !0,
            size: L._3.SIZE_32,
            status: f,
            isMobile: S,
            isTyping: I,
            mentionCount: l,
            isMentionLowImportance: o,
        }),
        primaryText: (0, i.jsx)("div", {
            className: ex.QV,
            children: (0, i.jsx)(p.E, {
                className: ex.Xh,
                variant: "body-sm/medium",
                color: d || l > 0 ? "text-strong" : "text-muted",
                children: m,
            }),
        }),
        secondaryText:
            null != E
                ? (0, i.jsx)(p.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: (0, i.jsx)(nZ, { channel: t, message: E }),
                  })
                : null,
        rightActions: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [l > 0 ? nq(l) : null, e && T ? (0, i.jsx)(eC.j, { tab: u.x.MESSAGES, targetId: g }) : null],
            }),
    });
}
function n1(e) {
    let t,
        {
            channel: n,
            listItemId: l,
            mentionCount: o,
            unread: d,
            recentlyAddedTimestampMs: c,
            onPrimaryAction: h,
            onContextMenu: g,
        } = e,
        m = n.id,
        I = n.getGuildId?.() ?? null,
        E = (0, s.bG)([eA.A], () => (null != I ? (eA.A.getGuild(I) ?? null) : null), [I]),
        A = (0, ee.Ay)(n, !1) ?? "???",
        f = nQ(n),
        S = (0, s.bG)(
            [tq.A, a.default, D.A, nV.A],
            () => {
                if (null == n) return null;
                switch (
                    (function (e, t) {
                        let [n, l, i, r] = t;
                        if (null == e) return "NONE";
                        let s = (function (e, t, n) {
                            let [l] = n,
                                i = l.getTypingUsers(e.id);
                            for (let e in i) if (e !== t) return e;
                            return null;
                        })(e, l.getCurrentUser()?.id ?? null, [n]);
                        return null == s
                            ? "NONE"
                            : (function (e, t) {
                                  let [n, l] = t;
                                  if (n.isFriend(e)) return "FRIEND";
                                  let i = l.getUserAffinity(e),
                                      r = i?.communicationProbability ?? 0;
                                  return r >= n$.u.HIGH_AFFINITY_MINIMUM
                                      ? "HIGH_AFFINITY"
                                      : r > 0
                                        ? "LOW_AFFINITY"
                                        : "NONE";
                              })(s, [i, r]);
                    })(n, [tq.A, a.default, D.A, nV.A])
                ) {
                    case "FRIEND":
                        return e0.A.colors.STATUS_ONLINE.resolve({ theme: nW.NJ.DARK, saturation: 1 }).hex();
                    case "HIGH_AFFINITY":
                        return e0.A.colors.STATUS_ONLINE.resolve({ theme: nW.NJ.DARK, saturation: 0.7 }).hex();
                    case "LOW_AFFINITY":
                        return e0.A.colors.STATUS_ONLINE.resolve({ theme: nW.NJ.DARK, saturation: 0.4 }).hex();
                    default:
                        return null;
                }
            },
            [n],
        ),
        N = nI(n, !1),
        T = (0, nn.r)(e0.A.colors.TEXT_STRONG),
        y = (0, nn.r)(e0.A.colors.TEXT_MUTED),
        x = d || o > 0 ? "text-strong" : "text-muted",
        _ = d || o > 0 ? T : y,
        C = r.useCallback(
            (e) => {
                g?.({ type: ez.K.GUILD_TEXT_CHANNEL, event: e, channel: n, guild: E });
            },
            [n, E, g],
        ),
        v = r.useCallback(() => {
            h?.({ type: ez.c.OPEN_TEXT_CHAT_CHANNEL, channelId: m, guildId: I });
        }, [m, I, h]);
    return (0, i.jsx)(e_, {
        listItemId: l,
        recentlyAddedTimestampMs: c,
        leftIndicator: (0, i.jsx)(eh.A, { unread: d }),
        onClick: v,
        onContextMenu: C,
        avatar: (0, i.jsx)(nA.A, {
            channel: n,
            guild: E ?? void 0,
            size: nA.Q.SMALL_32,
            isTyping: f,
            typingFillColor: S ?? void 0,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: ex.QV,
            children: [
                null == (t = (0, nl.gU)(n, E)) ? null : (0, i.jsx)(t, { color: _.hex(), size: "xxs", className: ex.p }),
                (0, i.jsx)(p.E, { className: ex.Xh, variant: "body-sm/medium", color: x, children: A }),
            ],
        }),
        secondaryText: (0, i.jsx)(p.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: (0, i.jsx)(nZ, { channel: n, message: N, showTypingPreview: !0 }),
        }),
        rightActions: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [o > 0 ? nq(o) : null, e ? (0, i.jsx)(eC.j, { tab: u.x.MESSAGES, targetId: m }) : null],
            }),
    });
}
function n3(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: l, onPrimaryAction: r, onContextMenu: a } = e,
        o = (0, s.bG)([eE.A], () => eE.A.getChannel(t), [t]),
        {
            mentionCount: u,
            unread: d,
            isMentionLowImportance: c,
        } = (0, s.cf)(
            [ef.Ay],
            () => ({
                mentionCount: ef.Ay.getMentionCount(t),
                isMentionLowImportance: ef.Ay.getIsMentionLowImportance(t),
                unread: ef.Ay.hasUnread(t),
            }),
            [t],
        ),
        h = (0, ey.h)(t);
    return null == o
        ? (0, i.jsx)(nJ, { channelId: t, listItemId: n, mentionCount: u, unread: d })
        : o.isPrivate()
          ? (0, i.jsx)(n0, {
                channel: o,
                listItemId: n,
                mentionCount: u,
                isMentionLowImportance: c,
                unread: d,
                onPrimaryAction: r,
                onContextMenu: a,
            })
          : (0, i.jsx)(n1, {
                channel: o,
                listItemId: n,
                mentionCount: u,
                unread: d,
                recentlyAddedTimestampMs: l ? h : null,
                onPrimaryAction: r,
                onContextMenu: a,
            });
}
var n2 = n(91868);
function n5(e) {
    return Array.from(e).sort();
}
let n6 = (0, g.throttle)(
        (e) => {
            (0, o.Y)(eZ.uss.FRIENDS, {
                locked: b.default.isInstanceLocked(),
                shownUserIds: e.shownUserIds,
                liveUserIds: [],
                contentInventoryIds: e.contentInventoryIds,
            });
        },
        3e3,
        { leading: !0, trailing: !1 },
    ),
    n4 = {
        searchType: tC.n.REGEX,
        sortType: tC.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t } = e,
                n = [(0, ee.m1)(t, a.default, D.A), t.name, t.id];
            if (t.isDM()) {
                let e = t.getRecipientId(),
                    l = a.default.getUser(e),
                    i = D.A.getNickname(e);
                n.push(l?.username, l?.globalName, i);
            } else if (t.isMultiUserDM())
                for (let e of t.recipients ?? []) {
                    let t = a.default.getUser(e),
                        l = D.A.getNickname(e);
                    n.push(t?.username, t?.globalName, l);
                }
            let l = null != t.guild_id ? (eA.A.getGuild(t.guild_id)?.name ?? null) : null;
            return (null != l && n.push(l), n.filter(tR.Vq));
        },
        throttleMs: 100,
    };
function n9() {
    let e,
        { onPrimaryAction: t, onContextMenu: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [l, a] = r.useState(""),
        d = l.trim().toLowerCase(),
        c =
            ((e = (0, t8.Dz)()),
            (0, s.yK)(
                [ne.A, eE.A],
                () => {
                    let t = [];
                    for (let e of ne.A.getPrivateChannelIds()) {
                        let n = eE.A.getChannel(e);
                        null != n && t.push({ channel: n, voiceStates: [] });
                    }
                    for (let n of e) t.push(n);
                    return t;
                },
                [e],
            )),
        [h, g] = r.useState([]);
    (0, tv.RT)(l, c, g, n4);
    let m = r.useRef(null),
        E = (0, _.A)("friends-widget-messages", m),
        [f, S] = (0, s.bG)([tT.A], () => tT.A.getFavoriteTargetIdsForTab(u.x.MESSAGES), [], j.D),
        [p, x] = (0, s.bG)(
            [n2.A],
            () => {
                let [e, t] = n2.A.getRows(n2.Y.ACTIVE_NOW),
                    [n] = n2.A.getRows(n2.Y.DMS),
                    [l] = n2.A.getRows(n2.Y.RECENT_TEXT),
                    i = n.slice(0, 5),
                    r = l.slice(0, 8);
                return [{ activeNowRows: e.slice(0, 8), dmRows: i, recentTextRows: r }, t];
            },
            [],
            j.D,
        ),
        C = (0, s.bG)([tp], () => tp.getCollapsedSectionOverridesForTab(u.x.MESSAGES), []),
        v = r.useCallback((e) => {
            tN({ tab: u.x.MESSAGES, sectionKey: e });
        }, []),
        R = r.useMemo(() => {
            let e = new Set();
            for (let t of f) e.add(t);
            for (let t of p.dmRows) e.add(t.channelId);
            for (let t of p.activeNowRows) e.add(t.channelId);
            for (let t of p.recentTextRows) e.add(t.channelId);
            return Array.from(e);
        }, [f, p.activeNowRows, p.dmRows, p.recentTextRows]),
        { unreadOrMentionChannels: D } = (0, s.cf)(
            [ef.Ay],
            () => {
                let e = new Set();
                for (let t of R) {
                    let n = ef.Ay.hasUnread(t),
                        l = ef.Ay.getMentionCount(t),
                        i = ef.Ay.getIsMentionLowImportance(t),
                        r = l > 0 && !i;
                    (n || r) && e.add(t);
                }
                return { unreadOrMentionChannels: e };
            },
            [R],
        ),
        b = r.useMemo(() => {
            function e(e) {
                return !0 === C[e];
            }
            function t(e) {
                return D.has(e);
            }
            let n = [];
            if (0 === x) return [];
            if ("" !== d)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: eW.intl.string(tF.default.HGimIS),
                        count: h.length,
                        channelIds: h.map((e) => e.channel.id),
                        length: h.length,
                    }),
                    n
                );
            if (f.length > 0 && S > 0) {
                let l = e("FAVORITES") ? f.filter(t) : f;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eW.intl.string(tF.default.GKTlS6),
                    count: f.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (p.activeNowRows.length > 0) {
                let t = p.activeNowRows.map((e) => e.channelId),
                    l = e("ACTIVE_NOW") ? [] : t;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: eW.intl.string(tF.default.d3yO98),
                    count: t.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (p.dmRows.length > 0) {
                let l = p.dmRows.map((e) => e.channelId),
                    i = e("DMS") ? l.filter(t) : l;
                n.push({
                    kind: "DMS",
                    key: "DMS",
                    title: eW.intl.string(eW.t.YUU0RF),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (p.recentTextRows.length > 0) {
                let l = p.recentTextRows.map((e) => e.channelId),
                    i = e("TEXT_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "TEXT_CHANNELS",
                    key: "TEXT_CHANNELS",
                    title: eW.intl.string(tF.default.uC6Lhg),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [C, D, d, f, p.activeNowRows, p.dmRows, p.recentTextRows, S, h, x]),
        M = r.useMemo(() => b.map((e) => e.length), [b]),
        O = r.useCallback(
            (e) => {
                let t = b.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) {
                    for (let t = 0; t < b.length; t += 1) {
                        let n = b[t].channelIds.findIndex((t) => t === e);
                        if (-1 !== n) return { section: t, row: n };
                    }
                    return null;
                }
                let n = b[t],
                    l = n?.channelIds.findIndex((t) => t === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [b],
        );
    ty({
        scrollerRef: m,
        favoriteTargetIds: f,
        getScrollTargetForTargetId: (e) => O(e),
        getFallbackScrollTarget: r.useCallback(() => {
            let e = b.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [b]),
        padding: 8,
        animate: !1,
    });
    let w = (0, o.Dk)(() => {
            let e = new Set();
            for (let t of b) for (let n of t.channelIds) e.add(n);
            return e;
        }, [b]),
        { shownUserIds: F, contentInventoryIds: G } = (0, s.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let l of e) {
                        let e = eE.A.getChannel(l);
                        if (null != e) {
                            if (e.isDM()) {
                                let n = e.getRecipientId?.() ?? null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of e.recipients ?? []) t.add(n);
                                continue;
                            }
                            n.add(l);
                        }
                    }
                    return { shownUserIds: t, contentInventoryIds: n };
                })(w),
            [w],
        ),
        L = (0, o.Dk)(() => F, [F]),
        U = (0, o.Dk)(() => G, [G]);
    r.useEffect(() => {
        (0 !== L.size || 0 !== U.size) && n6({ shownUserIds: n5(L), contentInventoryIds: n5(U) });
    }, [L, U]);
    let P = r.useCallback((e) => b[e], [b]),
        V = r.useCallback(
            (e) => {
                let { section: t } = e,
                    n = P(t);
                if (null == n) return null;
                let l = "SEARCH_RESULTS" !== n.kind,
                    r = l && !0 === C[n.key];
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(A.A, { children: n.title }),
                        (0, i.jsx)(td, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: l,
                            onToggle: () => v(n.key),
                        }),
                    ],
                });
            },
            [C, P, v],
        ),
        H = r.useCallback(
            (e) => {
                let l = P(e.section);
                if (null == l) return null;
                let r = l.channelIds[e.row];
                if (null == r) return null;
                let s = `${l.key}:${e.row}`;
                return (0, i.jsx)(
                    n3,
                    {
                        channelId: r,
                        listItemId: s,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === l.kind,
                        onPrimaryAction: t,
                        onContextMenu: n,
                    },
                    s,
                );
            },
            [P, n, t],
        ),
        Y = r.useCallback(() => 40, []),
        K = r.useCallback(
            (e, t) => {
                let n = P(e);
                return null == n ? 50 : 50 * (null != n.channelIds[t]);
            },
            [P],
        ),
        B = r.useCallback((e) => {
            (a(e), m.current?.scrollToTop());
        }, []),
        X = (0, k.A)();
    return (0, i.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, i.jsx)("div", {
                className: tu.MT,
                children: (0, i.jsx)(N.I, {
                    query: l,
                    onChange: B,
                    onClear: () => a(""),
                    placeholder: X ? eW.intl.string(eW.t.KA1U4B) : eW.intl.string(tF.default["xB/0Z9"]),
                    disabled: X,
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: E,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(T.sk, {
                            children: (e) =>
                                (0, i.jsx)(y.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eW.intl.string(eW.t.OIgYlQ),
                                    ref: (e) => {
                                        ((m.current = e), (t.current = e?.getScrollerNode() ?? null));
                                    },
                                    className: tu.p_,
                                    sectionHeight: Y,
                                    rowHeight: K,
                                    sidebarHeight: 0,
                                    renderSection: V,
                                    renderRow: H,
                                    sections: M,
                                    paddingBottom: 8,
                                    ...l,
                                    ...e,
                                }),
                        });
                    },
                }),
            }),
        ],
    });
}
var n7 = n(504047),
    n8 = n(607567),
    le = n(377802),
    lt = n(342952),
    ln = n(676923),
    ll = n(342296),
    li = n(481947),
    lr = n(956123);
let ls = r.memo(function (e) {
    let { channelId: t, guildId: n, userId: l, onDoubleClick: o, onContextMenu: u } = e,
        d = r.useRef(null),
        [c, h] = r.useState(!1),
        g = (0, s.bG)([a.default], () => a.default.getUser(l), [l]),
        m = (function (e, t) {
            let [n] = (0, s.bG)(
                [eK.A],
                () => [eK.A.getVoiceStateForChannel(e, t) ?? null, eK.A.getVoiceStateVersion()],
                [e, t],
                j.D,
            );
            return n;
        })(t, l),
        I = (0, er.A)({ userId: l, guildId: n }),
        A = (0, s.bG)([eI.A], () => null != n && null != eI.A.getStreamForUser(l, n), [n, l]),
        f = (0, s.bG)([R.A], () => R.A.findActivity(l, e6.A), [l]),
        S = (0, e1.h)(f?.application_id),
        N = (0, eN.tx)(n ?? void 0, t, g),
        T = r.useCallback(
            (e) => {
                (0, tR.Vq)(g) && null != m && u?.({ type: ez.K.VOICE_USER, event: e, user: g, channelId: t });
            },
            [t, u, g, m],
        );
    return (0, tR.Vq)(g) && null != m
        ? (0, i.jsx)(ll.A, {
              targetElementRef: d,
              user: g,
              guildId: n ?? void 0,
              channelId: t,
              appContext: eZ.BRT.OVERLAY,
              shouldShow: c,
              onRequestClose: () => h(!1),
              spacing: 24,
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      innerRef: d,
                      className: lr.gD,
                      onDoubleClick: o,
                      onContextMenu: T,
                      onClick: (e) => {
                          (e.preventDefault(), e.stopPropagation(), h(!0));
                      },
                      children: (0, i.jsxs)("div", {
                          className: lr.h6,
                          children: [
                              (0, i.jsx)(P.eu, {
                                  src: g.getAvatarURL(n ?? void 0, 24),
                                  size: L._3.SIZE_24,
                                  "aria-label": N,
                              }),
                              (0, i.jsxs)(p.E, {
                                  className: lr.rg,
                                  variant: "body-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, i.jsx)(ea.A, {
                                          userName: N,
                                          displayNameStyles: I,
                                          effectDisplayType: es.G.STATIC,
                                          textClassName: lr.m2,
                                      }),
                                      (0, i.jsx)(ec.Ay, { userId: l, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: lr.ZA,
                                  onDoubleClick: o,
                                  children: (0, i.jsx)(li.Kc, {
                                      guildId: n ?? void 0,
                                      user: g,
                                      video: m.selfVideo,
                                      isStreaming: A,
                                      className: lr.ZA,
                                      iconClassName: lr.Ow,
                                      isWatching: !1,
                                      localMute: !1,
                                      localVideoDisabled: !1,
                                      mute: m.isVoiceMuted(),
                                      deaf: m.isVoiceDeafened(),
                                      serverMute: m.mute || m.suppress,
                                      serverDeaf: m.deaf,
                                      disabled: !1,
                                  }),
                              }),
                              null != S ? (0, i.jsx)(eo.A, { game: S, size: eo.M.XSMALL, className: lr.IV }) : null,
                          ],
                      }),
                  }),
          })
        : null;
});
function la(e) {
    let { isCollapsed: t } = e;
    return (0, i.jsx)(w, { isCollapsed: t, size: "md", className: tu.t4 });
}
function lo(e) {
    (e.preventDefault(), e.stopPropagation());
}
function lu(e) {
    let { channelId: t, guildId: n } = e,
        l = (function (e) {
            let { channelId: t } = e;
            return (0, s.yK)(
                [eK.A, a.default, nV.A, D.A],
                () =>
                    Object.values(eK.A.getVoiceStatesForChannel(t))
                        .map((e) => a.default.getUser(e.userId))
                        .filter(tR.Vq)
                        .sort((e, t) =>
                            D.A.isFriend(e.id) && !D.A.isFriend(t.id)
                                ? -1
                                : !D.A.isFriend(e.id) && D.A.isFriend(t.id)
                                  ? 1
                                  : (nV.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (nV.A.getUserAffinity(e.id)?.vcProbability ?? 0),
                        ),
                [t],
            );
        })({ channelId: t });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: lr.X0,
              children: (0, i.jsx)(lt.A, {
                  users: l,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(l.length, 4),
                  size: L._3.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": eW.intl.string(eW.t.TxqPQR),
              }),
          });
}
function ld(e) {
    let t,
        {
            channelId: n,
            listItemId: l,
            voiceStates: a,
            shouldHighlightIfRecentlyAdded: o,
            isExpanded: d = !1,
            onToggleExpanded: c,
            onPrimaryAction: h,
            onContextMenu: g,
        } = e,
        m = (0, s.bG)([eE.A], () => eE.A.getChannel(n), [n]),
        I = (0, ee.Ay)(m ?? void 0, !0) ?? "???",
        E = m?.getGuildId?.() ?? null,
        A = (0, s.bG)([eA.A], () => (null != E ? (eA.A.getGuild(E) ?? null) : null), [E]),
        f = (0, s.bG)([eS.Ay], () => eS.Ay.getVoiceChannelId() === n, [n]),
        S = (0, s.bG)([eY.A], () => null != m && (!!m.isPrivate?.() || eY.A.can(eZ.xBc.READ_MESSAGE_HISTORY, m)), [m]),
        [N] = (0, s.bG)(
            [n8.Ay],
            () =>
                null == m || null == E ? [[], 0] : [n8.Ay.getVoiceStatesForChannel(m), n8.Ay.getVoiceStateVersion(E)],
            [m, E],
            j.D,
        ),
        T = null != N && N.length > 0,
        y = (0, s.bG)(
            [eK.A, R.A],
            () => {
                for (let e of Object.values(eK.A.getVoiceStatesForChannel(n))) {
                    let t = R.A.findActivity(e.userId, e6.A);
                    if (t?.name != null) return t.name;
                }
                return null;
            },
            [n],
        ),
        x = (0, ey.h)(n),
        _ = nQ(m),
        C = r.useRef(null),
        v = r.useCallback(() => {
            let e = C.current;
            null != e && (clearTimeout(e), (C.current = null));
        }, []);
    r.useEffect(
        () => () => {
            v();
        },
        [v],
    );
    let D = r.useCallback(
            (e) => {
                (e.stopPropagation(), h?.({ type: ez.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: E }), d || c?.(n));
            },
            [n, E, d, h, c],
        ),
        b = r.useCallback(
            (e) => {
                (e.stopPropagation(), h?.({ type: ez.c.DISCONNECT_VOICE_CHANNEL, channelId: n }));
            },
            [n, h],
        ),
        k = r.useCallback(() => {
            S && h?.({ type: ez.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: E });
        }, [S, n, E, h]),
        M = r.useCallback(
            (e) => {
                if (T) return void c?.(n);
            },
            [n, T, c],
        ),
        O = r.useCallback(
            (e) => {
                (v(), k());
            },
            [v, k],
        ),
        w = r.useCallback(
            (e) => {
                g?.({ type: ez.K.VOICE_CHANNEL, event: e, channel: m ?? void 0, guild: A, channelId: n });
            },
            [m, n, A, g],
        ),
        { mentionCount: F } = (0, s.cf)(
            [ef.Ay],
            () => ({
                mentionCount: ef.Ay.getMentionCount(n),
                isMentionLowImportance: ef.Ay.getIsMentionLowImportance(n),
                unread: ef.Ay.hasUnread(n),
            }),
            [n],
        ),
        G = (0, nn.r)(e0.A.colors.STATUS_POSITIVE),
        L = (0, nn.r)(e0.A.colors.STATUS_DANGER),
        U = (0, nn.r)(e0.A.colors.TEXT_STRONG),
        P = (0, nn.r)(e0.A.colors.TEXT_MUTED),
        V = f ? G : F > 0 ? U : P,
        {
            Component: H,
            events: { onMouseEnter: Y, onMouseLeave: K },
        } = (0, le.O)();
    function B() {
        let e = f ? eW.intl.string(eW.t["6vrfgt"]) : eW.intl.string(eW.t.S0W8Z5),
            t = f ? L.hex() : G.hex(),
            n = f ? H : nx.PhoneCallIcon;
        return (0, i.jsx)("div", {
            onDoubleClick: lo,
            children: (0, i.jsx)(ln.S, {
                tooltipText: e,
                onClick: f ? b : D,
                onMouseEnter: Y,
                onMouseLeave: K,
                children: (0, i.jsx)(n, { size: "sm", color: t }),
            }),
        });
    }
    return (0, i.jsxs)("div", {
        onDoubleClick: O,
        children: [
            (0, i.jsx)(e_, {
                listItemId: l,
                recentlyAddedTimestampMs: o ? x : null,
                onClick: M,
                onContextMenu: w,
                avatar:
                    null != m
                        ? (0, i.jsx)(nA.A, { isTyping: _, guild: A ?? void 0, channel: m, size: nA.Q.SMALL_32 })
                        : null,
                primaryText: (0, i.jsxs)("div", {
                    className: ex.QV,
                    children: [
                        null == (t = (0, nl.gU)(m, A))
                            ? null
                            : (0, i.jsx)(t, { color: V.hex(), size: "xxs", className: ex.p }),
                        (0, i.jsx)(p.E, {
                            className: ex.Xh,
                            variant: "body-sm/medium",
                            color: f ? "status-positive-text" : F > 0 ? "text-strong" : "text-muted",
                            children: I,
                        }),
                    ],
                }),
                secondaryText:
                    null != y
                        ? (0, i.jsxs)("div", {
                              className: lr.z2,
                              children: [
                                  (0, i.jsx)(tY.GameControllerIcon, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: lr.AE,
                                  }),
                                  (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: y }),
                              ],
                          })
                        : A?.name != null
                          ? (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: A.name })
                          : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !T:
                            return e
                                ? (0, i.jsxs)("div", {
                                      className: lr.YT,
                                      onDoubleClick: lo,
                                      children: [B(), (0, i.jsx)(eC.j, { tab: u.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case T:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    d
                                        ? (0, i.jsxs)("div", {
                                              className: lr.YT,
                                              onDoubleClick: lo,
                                              children: [B(), (0, i.jsx)(eC.j, { tab: u.x.VOICE, targetId: n })],
                                          })
                                        : (0, i.jsx)(lu, { channelId: n, guildId: E }),
                                    (0, i.jsx)(la, { isCollapsed: !d }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            d && N.length > 0
                ? (0, i.jsx)("div", {
                      className: lr.Nz,
                      children: N.slice(0, 25).map((e) =>
                          (0, i.jsx)(
                              ls,
                              { channelId: n, guildId: E, userId: e.user.id, onDoubleClick: lo, onContextMenu: g },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
var lc = n(502088);
function lh(e) {
    return Array.from(e).sort();
}
let lg = (0, g.throttle)(
    (e) => {
        (0, o.Y)(eZ.uss.FRIENDS, {
            locked: b.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function lm(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193)));
    return t >>> 0;
}
function lI() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, l] = r.useState(""),
        a = n.trim().toLowerCase(),
        [d, c] = r.useState(() => new Set()),
        h = (0, s.bG)([tp], () => tp.getCollapsedSectionOverridesForTab(u.x.VOICE), []),
        g = (0, t8.qZ)(),
        m = r.useMemo(() => {
            let e = new Map();
            for (let t of g) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [g]),
        E = r.useCallback((e) => {
            c((t) => {
                let n = new Set(t);
                return (n.has(e) ? n.delete(e) : n.add(e), n);
            });
        }, []),
        f = r.useCallback((e) => {
            tN({ tab: u.x.VOICE, sectionKey: e });
        }, []),
        S = r.useMemo(() => new Set(g.map((e) => e.channel.id)), [g]),
        [p, x] = r.useState([]);
    (0, tv.RT)(n, g, x, t8.MV);
    let C = r.useRef(null),
        v = (0, _.A)("friends-widget-voice", C),
        [R, b] = (0, s.bG)([tT.A], () => tT.A.getFavoriteTargetIdsForTab(u.x.VOICE), [], j.D),
        M = r.useMemo(() => R.filter((e) => S.has(e)), [R, S]),
        { friendVoiceChannelIds: O, recentVoiceChannelIds: w } = (0, t8.S4)(),
        F = r.useMemo(() => O.filter((e) => S.has(e)), [O, S]),
        G = r.useMemo(() => w.filter((e) => S.has(e)), [w, S]),
        L = (0, s.bG)([eS.Ay], () => eS.Ay.getVoiceChannelId(), []),
        U = (0, s.bG)([lc.A], () => lc.A.getActiveNowChannelIds({ kind: lc.u.Voice }), []),
        P = (0, s.bG)(
            [n7.A],
            () =>
                n7.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        V = r.useMemo(() => {
            let e, t, n, l;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (l = String(e.getFullYear() % 100).padStart(2, "0")),
                lm(`${t}${n}${l}`)
            );
        }, []),
        H = r.useMemo(() => new Set(R), [R]),
        Y = r.useMemo(() => F.filter((e) => !H.has(e)), [F, H]),
        K = r.useMemo(() => G.filter((e) => !H.has(e)), [G, H]),
        B = r.useMemo(() => new Set(Y), [Y]),
        X = r.useMemo(() => U.filter((e) => !H.has(e) && !B.has(e) && S.has(e)), [U, H, B, S]),
        z = r.useMemo(() => {
            let e = [],
                t = new Set();
            function n(n) {
                null == n || !S.has(n) || H.has(n) || t.has(n) || (t.add(n), e.push(n));
            }
            for (let t of (null != L && eE.A.getChannel(L)?.isVocal() && n(L), K)) {
                if (e.length >= 8) break;
                n(t);
            }
            let l = new Set(P),
                i = new Set([...H, ...Y]),
                r = g
                    .filter((e) => {
                        let n = e.channel;
                        if (!n?.isVocal?.()) return !1;
                        let r = n.getGuildId?.() ?? null;
                        return !(null == r || !l.has(r) || i.has(n.id) || t.has(n.id));
                    })
                    .map((e) => {
                        var t;
                        return {
                            channelId: e.channel.id,
                            voiceUserCount: e.voiceStates?.length ?? 0,
                            shuffle: ((t = e.channel.id), lm(`${V}:${t}`)),
                        };
                    }),
                s = r.filter((e) => e.voiceUserCount > 0),
                a = r.filter((e) => 0 === e.voiceUserCount);
            for (let t of (s.sort((e, t) =>
                e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle,
            ),
            a.sort((e, t) => e.shuffle - t.shuffle),
            [...s, ...a])) {
                if (e.length >= 8) break;
                n(t.channelId);
            }
            return e;
        }, [g, S, L, H, Y, K, V, P]),
        Z = r.useMemo(() => {
            function e(e) {
                return !0 === h[e];
            }
            function t(e) {
                return (e.voiceStates?.length ?? 0) > 0;
            }
            let n = [];
            if ("" !== a)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: eW.intl.string(tF.default.DUIbKP),
                        count: p.length,
                        rows: p.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: p.length,
                    }),
                    n
                );
            if (M.length > 0 && b > 0) {
                let l = M.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("FAVORITES") ? l.filter(t) : l;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eW.intl.string(tF.default.OskevP),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (Y.length > 0) {
                let l = Y.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("FRIENDS_IN_VOICE") ? l.filter(t) : l;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: eW.intl.string(tF.default["C+ojiQ"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.length > 0) {
                let l = X.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("ACTIVE_NOW") ? l.filter(t) : l;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: eW.intl.string(tF.default.eiie2x),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (z.length > 0) {
                let l = z.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("SUGGESTED_VOICE_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: eW.intl.string(tF.default["9ME4wE"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [h, a, M, b, X, Y, p, z, m]),
        W = r.useMemo(() => Z.map((e) => e.length), [Z]),
        $ = r.useCallback(
            (e) => {
                for (let t = 0; t < Z.length; t += 1) {
                    let n = Z[t].rows.findIndex((t) => t.channelId === e);
                    if (-1 !== n) return { section: t, row: n };
                }
                return null;
            },
            [Z],
        );
    ty({
        scrollerRef: C,
        favoriteTargetIds: M,
        getScrollTargetForTargetId: (e) => $(e),
        getFallbackScrollTarget: r.useCallback(() => {
            let e = Z.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [Z]),
        padding: 8,
        animate: !1,
    });
    let Q = (0, o.Dk)(() => {
            let e = new Set();
            for (let t of Z) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [Z]),
        { shownUserIds: q, liveUserIds: J } = (0, s.cf)(
            [eE.A, eI.A],
            () => {
                let e = new Map();
                for (let t of g) e.set(t.channel.id, t.voiceStates);
                let t = new Set(),
                    n = new Set();
                for (let l of Q) {
                    let i = eE.A.getChannel(l),
                        r = i?.getGuildId?.() ?? i?.guild_id ?? null;
                    for (let i of (function (e, t) {
                        let n = Array.from(
                            new Set((t ?? Object.values(eK.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                        );
                        return (
                            n.sort((e, t) => {
                                let n = D.A.isFriend(e),
                                    l = D.A.isFriend(t);
                                return n && !l
                                    ? -1
                                    : !n && l
                                      ? 1
                                      : (nV.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                        (nV.A.getUserAffinity(e)?.vcProbability ?? 0);
                            }),
                            n.slice(0, 4)
                        );
                    })(l, e.get(l)))
                        (t.add(i), null != r && null != eI.A.getStreamForUser(i, r) && n.add(i));
                }
                return { shownUserIds: t, liveUserIds: n };
            },
            [Q, g],
        ),
        ee = (0, o.Dk)(() => q, [q]),
        et = (0, o.Dk)(() => J, [J]);
    r.useEffect(() => {
        (0 !== ee.size || 0 !== et.size) && lg({ shownUserIds: lh(ee), liveUserIds: lh(et) });
    }, [ee, et]);
    let en = r.useCallback((e) => Z[e], [Z]),
        el = r.useCallback(
            (e) => {
                let { section: t } = e,
                    n = en(t);
                if (null == n) return null;
                let l = "SEARCH_RESULTS" !== n.kind,
                    r = l && !0 === h[n.key];
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(A.A, { children: n.title }),
                        (0, i.jsx)(td, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: l,
                            onToggle: () => f(n.key),
                        }),
                    ],
                });
            },
            [h, en, f],
        ),
        ei = r.useCallback(
            (n) => {
                let l = en(n.section);
                if (null == l) return null;
                let r = l.rows[n.row];
                if (null == r) return null;
                let s = `${l.key}:${r.channelId}`,
                    a = d.has(r.channelId);
                return (0, i.jsx)(
                    ld,
                    {
                        channelId: r.channelId,
                        listItemId: s,
                        voiceStates: r.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: E,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === l.kind,
                        onPrimaryAction: e,
                        onContextMenu: t,
                    },
                    s,
                );
            },
            [d, en, t, e, E],
        ),
        er = r.useCallback(() => 40, []),
        es = r.useCallback(
            (e, t) => {
                let n = en(e);
                if (null == n) return 50;
                if (0 === n.rows.length) return 0;
                let l = n.rows[t];
                if (null == l || !d.has(l.channelId)) return 50;
                let i = eE.A.getChannel(l.channelId),
                    r = Math.min((null != i ? n8.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [d, en],
        ),
        ea = r.useCallback((e) => {
            (l(e), C.current?.scrollToTop());
        }, []),
        eo = (0, k.A)();
    return (0, i.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, i.jsx)("div", {
                className: tu.MT,
                children: (0, i.jsx)(N.I, {
                    query: n,
                    onChange: ea,
                    onClear: () => l(""),
                    placeholder: eo ? eW.intl.string(eW.t.KA1U4B) : eW.intl.string(tF.default.OV3KfO),
                    disabled: eo,
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: v,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(T.sk, {
                            children: (e) =>
                                (0, i.jsx)(y.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eW.intl.string(eW.t.OGiMXJ),
                                    ref: (e) => {
                                        ((C.current = e), (t.current = e?.getScrollerNode() ?? null));
                                    },
                                    className: tu.p_,
                                    sectionHeight: er,
                                    rowHeight: es,
                                    sidebarHeight: 0,
                                    renderSection: el,
                                    renderRow: ei,
                                    sections: W,
                                    paddingBottom: 8,
                                    ...l,
                                    ...e,
                                }),
                        });
                    },
                }),
            }),
        ],
    });
}
var lE = n(308368),
    lA = n(308528),
    lf = n(442433),
    lS = n(273626),
    lp = n(49229),
    lN = n(597798),
    lT = n(428249),
    ly = n(100663),
    lx = n(870373),
    l_ = n(145567),
    lC = n(34307),
    lv = n(381941),
    lR = n(731854),
    lD = n(557555);
function lb() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = (0, d.b4)(),
        l = n?.id,
        c = n?.altId,
        h = (0, s.bG)([a.default], () => a.default.getCurrentUser()) ?? null,
        g = ey.A.useField("activeTab"),
        m = ey.A.useField("setActiveTab"),
        I = r.useCallback(
            (e) => {
                e !== g &&
                    (m(e),
                    (0, o.YX)(eZ.uss.FRIENDS, {
                        type: o.Z5.TAB_SELECTED,
                        value: (function (e) {
                            switch (e) {
                                case u.x.FRIENDS:
                                    return o.IP.FRIEND_TAB_SELECTED;
                                case u.x.MESSAGES:
                                    return o.IP.MESSAGES_TAB_SELECTED;
                                case u.x.VOICE:
                                    return o.IP.VOICE_TAB_SELECTED;
                                default:
                                    return o.IP.FRIEND_TAB_SELECTED;
                            }
                        })(e),
                    }));
            },
            [g, m],
        ),
        E = (0, d.xl)(null != c ? c : l);
    return (0, i.jsxs)("div", {
        className: lD.kL,
        children: [
            (0, i.jsx)(t9, {
                currentUser: h,
                activity: E,
                currentGameName: n?.name ?? null,
                activeTab: g,
                onTabChange: I,
            }),
            (0, i.jsx)("div", {
                className: lD.Qs,
                children: (() => {
                    switch (g) {
                        case u.x.FRIENDS:
                            return (0, i.jsx)(tH, { onPrimaryAction: e, onContextMenu: t });
                        case u.x.MESSAGES:
                            return (0, i.jsx)(n9, { onPrimaryAction: e, onContextMenu: t });
                        case u.x.VOICE:
                            return (0, i.jsx)(lI, { onPrimaryAction: e, onContextMenu: t });
                        default:
                            return null;
                    }
                })(),
            }),
        ],
    });
}
let lj = r.memo(function (e) {
    let { locked: t } = e,
        { handlePrimaryAction: l, handleContextMenu: s } = {
            handlePrimaryAction: r.useCallback((e) => {
                switch (e.type) {
                    case ez.c.OPEN_DIRECT_MESSAGE:
                        if (null == e.userId) return;
                        ((async () => {
                            try {
                                await (0, l_.D$)({
                                    target: { kind: l_.bB.DM_USER, userId: e.userId, messageId: null },
                                    source: lC.B.FRIENDS_WIDGET_CLICK,
                                    widgetType: eZ.uss.FRIENDS,
                                });
                            } catch {}
                        })(),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_LIST,
                                value: o.IP.CHAT,
                                userId: e.userId,
                                secondaryValue: "dm",
                            }));
                        break;
                    case ez.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == e.channelId) return;
                        ((0, l_.D$)({
                            target: {
                                kind: l_.bB.CHANNEL,
                                channelId: e.channelId,
                                guildId: e.guildId ?? null,
                                messageId: null,
                            },
                            source: lC.B.FRIENDS_WIDGET_CLICK,
                            widgetType: eZ.uss.FRIENDS,
                        }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_LIST,
                                value: o.IP.CHAT,
                                userId: e.userId,
                                secondaryValue: "channel",
                            }));
                        break;
                    case ez.c.CONNECT_VOICE_CHANNEL:
                        if (null == e.channelId) return;
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.VOICE,
                            value: o.IP.CHANNEL_SELECTED,
                            secondaryValue: "voice",
                        }),
                            lN.default.selectVoiceChannel(e.channelId));
                        break;
                    case ez.c.DISCONNECT_VOICE_CHANNEL:
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.CALL_BUTTON,
                            value: o.IP.DISABLED,
                            secondaryValue: "voice",
                            userId: nu.default.getId(),
                        }),
                            lN.default.disconnect());
                        break;
                    case ez.c.ACCEPT_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        (lp.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_REQUEST,
                                value: o.IP.ACCEPT_REQUEST,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.DECLINE_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        (lp.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_REQUEST,
                                value: o.IP.DECLINE_REQUEST,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.CANCEL_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        (lp.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_REQUEST,
                                value: o.IP.CANCEL_REQUEST,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.SEND_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        (lp.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_REQUEST,
                                value: o.IP.SEND_REQUEST,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.OPEN_FRIEND_MODAL:
                        if (null == e.userId) return;
                        ((0, ly.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId ?? void 0,
                            channelId: e.channelId,
                            appContext: eZ.BRT.OVERLAY,
                        }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_LIST,
                                value: o.IP.PROFILE_OPENED,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.SEARCH_FRIENDS:
                        (0, o.YX)(eZ.uss.FRIENDS, { type: o.Z5.FRIEND_LIST, value: o.IP.SEARCH });
                        break;
                    case ez.c.SEND_ACTIVITY_INVITE:
                        if (null == e.userId || null == e.activity) return;
                        (lE.A.sendActivityInviteUser({
                            type: eZ.xL.JOIN,
                            userId: e.userId,
                            activity: e.activity,
                            location: eZ.ThZ.UNLOCKED_OVERLAY,
                        }),
                            (0, lx.g)(eZ.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.INVITE,
                                value: o.IP.INVITE_SENT,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.JOIN:
                        if (null == e.userId || null == e.activity) return;
                        lS.A.join({
                            userId: e.userId,
                            sessionId: e.activity.session_id,
                            applicationId: e.activity.application_id,
                            channelId: null,
                            messageId: null,
                            source: eZ.ThZ.UNLOCKED_OVERLAY,
                        });
                        break;
                    case ez.c.ASK_TO_JOIN:
                        if (null == e.userId || null == e.activity) return;
                        (lE.A.sendActivityInviteUser({
                            type: eZ.xL.JOIN_REQUEST,
                            userId: e.userId,
                            activity: e.activity,
                            location: eZ.ThZ.UNLOCKED_OVERLAY,
                        }),
                            (0, lx.g)(eZ.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.INVITE,
                                value: o.IP.JOIN_REQUEST_SENT,
                                userId: e.userId,
                            }));
                        break;
                    case ez.c.SEND_GAME_INVITE_MESSAGE: {
                        if (null == e.userId) return;
                        let t = e.gameEntry,
                            n = e.userId;
                        ((async () => {
                            try {
                                if (
                                    (await (0, l_.D$)({
                                        target: { kind: l_.bB.DM_USER, userId: n, messageId: null },
                                        source: lC.B.FRIENDS_WIDGET_CLICK,
                                        widgetType: eZ.uss.FRIENDS,
                                    }),
                                    null == t)
                                )
                                    return;
                                let e = await lA.A.getOrEnsurePrivateChannel(n),
                                    l = eE.A.getChannel(e);
                                if (null == l) return;
                                !0 === t.extra.fake_inventory_item
                                    ? await (0, lT.J)({
                                          channel: l,
                                          content: eW.intl.formatToPlainString(eW.t.UVBA9g, {
                                              gameName: t.extra.game_name,
                                          }),
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: lv.Hx.OVERLAY,
                                      })
                                    : await (0, lT.d)({
                                          channel: l,
                                          content: eW.intl.string(eW.t.DwAcMz),
                                          entry: t,
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: lv.Hx.OVERLAY,
                                      });
                            } catch {}
                        })(),
                            (0, lx.g)(eZ.HAw.OVERLAY_GAME_INVITE_SENT, {
                                target_user_id: n,
                                target_content_entry_id: t?.id,
                            }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.INVITE,
                                value: o.IP.INVITE_SENT,
                                userId: e.userId,
                            }));
                        break;
                    }
                    case ez.c.USER_CONTEXT_MENU:
                    case ez.c.OPEN_SETTINGS_MODAL:
                        (0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.FRIEND_LIST,
                            value: o.IP.SETTINGS_OPENED,
                            userId: e.userId,
                        });
                        break;
                    case ez.c.TAB_CHANGE: {
                        let t = e.tab;
                        (0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.FRIEND_LIST,
                            value: (function (e) {
                                switch (e) {
                                    case u.x.FRIENDS:
                                        return o.IP.FRIEND_TAB_SELECTED;
                                    case u.x.MESSAGES:
                                        return o.IP.MESSAGES_TAB_SELECTED;
                                    case u.x.VOICE:
                                        return o.IP.VOICE_TAB_SELECTED;
                                    default:
                                        return o.IP.UNKNOWN;
                                }
                            })(t),
                        });
                        break;
                    }
                    default:
                        e.type;
                }
            }, []),
            handleContextMenu: r.useCallback((e) => {
                switch (e.type) {
                    case ez.K.FRIEND_ROW: {
                        let { user: t, friendGroupId: l } = e;
                        if (null == t) return;
                        ((0, lf.L3)(
                            e.event,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e(924697),
                                    n.e(463317),
                                    n.e(926132),
                                    n.e(834552),
                                    n.e(708757),
                                    n.e(585968),
                                    n.e(893190),
                                    n.e(146652),
                                    n.e(776273),
                                    n.e(189673),
                                    n.e(576432),
                                    n.e(797558),
                                    n.e(451162),
                                    n.e(229787),
                                    n.e(576665),
                                    n.e(242204),
                                    n.e(581609),
                                    n.e(296443),
                                    n.e(123490),
                                    n.e(877687),
                                ]).then(n.bind(n, 341354));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        user: t,
                                        appContext: eZ.BRT.OVERLAY,
                                        widgetType: eZ.uss.FRIENDS,
                                        friendGroupId: l,
                                        showManageFriendGroupsItems: !0,
                                    });
                            },
                            { context: eZ.BRT.OVERLAY },
                        ),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_LIST,
                                value: o.IP.SETTINGS_OPENED,
                                secondaryValue: "friend-row",
                            }));
                        break;
                    }
                    case ez.K.FRIEND_GROUP: {
                        let { groupId: t, groupName: l } = e;
                        if (null == t || null == l) return;
                        ((0, lf.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([n.e(296443), n.e(743562)]).then(n.bind(n, 602321));
                            return (n) => (0, i.jsx)(e, { ...n, groupId: t, groupName: l });
                        }),
                            (0, o.YX)(eZ.uss.FRIENDS, {
                                type: o.Z5.FRIEND_LIST,
                                value: o.IP.SETTINGS_OPENED,
                                secondaryValue: "friend-group",
                            }));
                        break;
                    }
                    case ez.K.DM_CHANNEL: {
                        let { channel: t, user: l } = e;
                        if (null == t || null == l) return;
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.TEXT_CHAT,
                            value: o.IP.SETTINGS_OPENED,
                            secondaryValue: "dm",
                        }),
                            (0, lf.L3)(e.event, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(924697),
                                    n.e(24312),
                                    n.e(622936),
                                    n.e(216947),
                                    n.e(463317),
                                    n.e(926132),
                                    n.e(834552),
                                    n.e(993103),
                                    n.e(708757),
                                    n.e(585968),
                                    n.e(393336),
                                    n.e(893190),
                                    n.e(713708),
                                    n.e(146652),
                                    n.e(776273),
                                    n.e(391763),
                                    n.e(189673),
                                    n.e(571210),
                                    n.e(576432),
                                    n.e(797558),
                                    n.e(491001),
                                    n.e(451162),
                                    n.e(229787),
                                    n.e(88342),
                                    n.e(576665),
                                    n.e(311802),
                                    n.e(698965),
                                    n.e(235313),
                                    n.e(579245),
                                    n.e(252229),
                                    n.e(245996),
                                    n.e(700792),
                                    n.e(552172),
                                    n.e(529422),
                                    n.e(823427),
                                    n.e(242204),
                                    n.e(307059),
                                    n.e(309291),
                                    n.e(838056),
                                    n.e(508829),
                                    n.e(298199),
                                    n.e(581609),
                                    n.e(861649),
                                    n.e(960816),
                                    n.e(296443),
                                    n.e(123490),
                                    n.e(895049),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        user: l,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: eZ.uss.FRIENDS,
                                    });
                            }));
                        break;
                    }
                    case ez.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.TEXT_CHAT,
                            value: o.IP.SETTINGS_OPENED,
                            secondaryValue: "group-dm",
                        }),
                            (0, lf.L3)(e.event, async () => {
                                let { default: t } = await Promise.all([
                                    n.e(926132),
                                    n.e(393336),
                                    n.e(146652),
                                    n.e(391763),
                                    n.e(491001),
                                    n.e(581609),
                                    n.e(146149),
                                    n.e(153416),
                                    n.e(777927),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        channel: e.channel,
                                        selected: !1,
                                        widgetType: eZ.uss.FRIENDS,
                                    });
                            }));
                        break;
                    case ez.K.GUILD_TEXT_CHANNEL: {
                        let { channel: t, guild: l } = e;
                        if (null == t || null == l) return;
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.TEXT_CHAT,
                            value: o.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-text-channel",
                        }),
                            t.isModeratorReportChannel?.()
                                ? (0, lf.L3)(e.event, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e(926132),
                                          n.e(393336),
                                          n.e(146652),
                                          n.e(391763),
                                          n.e(491001),
                                          n.e(676156),
                                          n.e(550033),
                                          n.e(343266),
                                          n.e(581609),
                                          n.e(256985),
                                      ]).then(n.bind(n, 95616));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: eZ.uss.FRIENDS });
                                  })
                                : (0, lf.L3)(e.event, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e(926132),
                                          n.e(393336),
                                          n.e(893190),
                                          n.e(146652),
                                          n.e(391763),
                                          n.e(491001),
                                          n.e(676156),
                                          n.e(550033),
                                          n.e(343266),
                                          n.e(309004),
                                          n.e(544058),
                                          n.e(591377),
                                          n.e(256372),
                                          n.e(581609),
                                          n.e(354036),
                                      ]).then(n.bind(n, 813407));
                                      return (n) =>
                                          (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: eZ.uss.FRIENDS });
                                  }));
                        break;
                    }
                    case ez.K.VOICE_CHANNEL: {
                        let { channel: t, guild: l } = e;
                        if (null == t || null == l) return;
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.TEXT_CHAT,
                            value: o.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-voice-channel",
                        }),
                            (0, lf.L3)(e.event, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(249727),
                                    n.e(926132),
                                    n.e(993103),
                                    n.e(393336),
                                    n.e(146652),
                                    n.e(391763),
                                    n.e(491001),
                                    n.e(676156),
                                    n.e(252229),
                                    n.e(550033),
                                    n.e(343266),
                                    n.e(309004),
                                    n.e(544058),
                                    n.e(581609),
                                    n.e(694138),
                                    n.e(958262),
                                    n.e(318663),
                                    n.e(221905),
                                ]).then(n.bind(n, 769192));
                                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: eZ.uss.FRIENDS });
                            }));
                        break;
                    }
                    case ez.K.VOICE_USER: {
                        let { user: t, channelId: l, guild: r } = e;
                        if (null == t || null == l) return;
                        let s = r?.id ?? null;
                        ((0, o.YX)(eZ.uss.FRIENDS, {
                            type: o.Z5.TEXT_CHAT,
                            value: o.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-voice-user",
                        }),
                            (0, lf.L3)(e.event, async () => {
                                let { default: l } = await Promise.all([
                                    n.e(463317),
                                    n.e(926132),
                                    n.e(834552),
                                    n.e(708757),
                                    n.e(585968),
                                    n.e(893190),
                                    n.e(146652),
                                    n.e(21921),
                                    n.e(189673),
                                    n.e(676418),
                                    n.e(576432),
                                    n.e(797558),
                                    n.e(451162),
                                    n.e(939171),
                                    n.e(242204),
                                    n.e(495861),
                                    n.e(470314),
                                    n.e(404524),
                                    n.e(654148),
                                    n.e(580589),
                                ]).then(n.bind(n, 588860));
                                return (n) =>
                                    (0, i.jsx)(l, {
                                        ...n,
                                        user: t,
                                        guildId: s ?? void 0,
                                        channelId: e.channelId,
                                        mediaEngineContext: lR.x.DEFAULT,
                                        appContext: eZ.BRT.OVERLAY,
                                    });
                            }));
                        break;
                    }
                    default:
                        e.type;
                }
            }, []),
        };
    return t ? null : (0, i.jsx)(lb, { onPrimaryAction: l, onContextMenu: s });
});
