n.d(t, { $: () => lT, A: () => l_ });
var l,
    i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(287809),
    u = n(810412),
    o = n(914853),
    d = n(243612);
n(321073);
var c = n(503698),
    h = n.n(c),
    g = n(735438),
    m = n.n(g),
    I = n(837381),
    E = n(990078),
    A = n(939249),
    f = n(140735),
    p = n(285796),
    S = n(834730),
    N = n(892547),
    x = n(312138),
    T = n(475825),
    _ = n(803306),
    y = n(928039),
    v = n(485947),
    C = n(545059),
    R = n(290863),
    D = n(994500),
    b = n(184809),
    j = n(996439),
    k = n(320448),
    M = n(847374);
function O(e) {
    let { isCollapsed: t, size: n = "md", className: l } = e;
    return t
        ? (0, i.jsx)(k._, { size: n, color: "currentColor", className: l })
        : (0, i.jsx)(M.a, { size: n, color: "currentColor", className: l });
}
var w = n(172218),
    F = n(778712),
    L = n(133171),
    G = n(97808),
    U = n(408278),
    P = n(933832),
    V = n(789645),
    H = n(565829),
    Y = n(283973),
    K = n(960076),
    z = n(566903),
    X = n(397244),
    B = n(714114),
    Z = n(394871),
    W = n(864436),
    $ = n(835072),
    Q = n(87664),
    q = n(47167),
    J = n(20805),
    ee = n(506326),
    et = n(365185),
    en = n(490427),
    el = n(609425),
    ei = n(922301),
    er = n(368919),
    es = n(137177),
    ea = n(834757),
    eu = n(145497),
    eo = n(534400),
    ed = n(941971),
    ec = n(854627),
    eh = n(10862),
    eg = n(616356),
    em = n(734057),
    eI = n(71393),
    eE = n(222823),
    eA = n(309010),
    ef = n(461213),
    ep = n(562153),
    eS = n(193663),
    eN = n(576420),
    ex = n(760023);
function eT(e) {
    let {
            listItemId: t,
            isVisuallyOffline: n = !1,
            recentlyAddedTimestampMs: l = null,
            outerRef: s,
            leftIndicator: a,
            avatar: u,
            primaryText: o,
            secondaryText: d,
            rightActions: c,
            onClick: g,
            onContextMenu: m,
            onMouseEnter: E,
            onMouseLeave: A,
            className: f,
            rowInnerClassName: p,
        } = e,
        S = (0, I.rm)(t),
        [N, x] = r.useState(!1),
        T = r.useRef(null),
        [_, y] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (null == l || T.current === l) return;
            T.current = l;
            let e = Date.now();
            l > e || e - l > eN.WS || y(!0);
        }, [l]),
        (0, i.jsxs)("div", {
            ref: s,
            className: h()(ex.nM, f, { [ex.SS]: n }),
            onAnimationEnd: (e) => {
                "friendsWidgetRowRecentlyAdded" === e.animationName && y(!1);
            },
            children: [
                null != a ? (0, i.jsx)("div", { className: ex.oT, children: a }) : null,
                (0, i.jsx)(eS.A, {
                    innerClassName: h()(ex.bL, p),
                    className: _ ? ex.fc : void 0,
                    onClick: g,
                    onContextMenu: m,
                    onMouseEnter: (e) => {
                        x(!0), E?.(e);
                    },
                    onMouseLeave: (e) => {
                        x(!1), A?.(e);
                    },
                    avatar: u,
                    name: o,
                    subText: d,
                    hovered: N,
                    ...S,
                    children: null != c ? (0, i.jsx)("div", { className: ex.cm, children: c(N) }) : null,
                }),
            ],
        })
    );
}
var e_ = n(220884),
    ey = n(6161),
    ev = n(681154),
    eC = n(974690),
    eR = n(820081),
    eD = n(297152),
    eb = n(241541),
    ej = n(559647),
    ek = n(173054),
    eM = n(933958),
    eO = n(776677),
    ew = n(206589),
    eF = n(55730),
    eL = n(672979),
    eG = n(498642),
    eU = n(480595),
    eP = n(576705),
    eV = n(977997),
    eH = n(689168),
    eY = n(935208),
    eK = n(67103),
    ez = n(652215),
    eX = n(375708);
function eB(e) {
    return e.find((e) => (0, eF.A)(e, ez.jUm.JOIN));
}
function eZ(e, t) {
    return null == t ? eB(e) : (e.find((e) => (0, eF.A)(e, ez.jUm.JOIN) && e.application_id === t) ?? eB(e));
}
function eW(e) {
    let { user: t, friendActivities: n, currentUserPlayingActivities: l, gameProfileEntry: u, onPrimaryAction: o } = e,
        [c, h] = r.useState(!1),
        g = r.useRef(null);
    r.useEffect(
        () => () => {
            null != g.current && clearTimeout(g.current);
        },
        [],
    );
    let m = (0, s.bG)([a.default, em.A, eI.A, eG.A, D.A, eA.A, eV.A, eP.A, eU.A, ef.A, eM.Ay, eH.A], () => {
            let e = a.default.getCurrentUser(),
                i = (0, d.qv)(),
                r = i?.altId ?? i?.id,
                s = eZ(n, r),
                o = eZ(l, r);
            if (null != s && null != s.application_id) {
                if (eH.A.getState(s.application_id, ez.xL.JOIN) === ez.eAD.LOADING)
                    return { kind: "joining", activity: s };
                let n = (0, eO.A)({
                    user: t,
                    activity: s,
                    application: null,
                    channelId: null,
                    currentUser: e,
                    isEmbedded: !1,
                    ChannelStore: em.A,
                    GuildStore: eI.A,
                    GuildMemberCountStore: eG.A,
                    RelationshipStore: D.A,
                    SelectedChannelStore: eA.A,
                    VoiceStateStore: eV.A,
                    PermissionStore: eP.A,
                    LocalActivityStore: eU.A,
                    SelfPresenceStore: ef.A,
                    EmbeddedActivitiesStore: eM.Ay,
                });
                if (n === eO.o.JOINED) return { kind: "joined", activity: s };
                if (n === eO.o.CAN_JOIN) return { kind: "join", activity: s };
                if (null == o) return { kind: "ask_to_join", activity: s };
            }
            if (null != o)
                return {
                    kind: n.some((e) => e.application_id === o.application_id && (0, ew.w)(e, o))
                        ? "joined"
                        : "invite_to_activity",
                    activity: o,
                };
            if (null != u) return { kind: "send_game_invite_message", gameEntry: u };
            let c = l.find(eL.A);
            if (null != c) {
                var h;
                let e;
                return {
                    kind: "send_game_invite_message",
                    gameEntry:
                        ((h = t.id),
                        (e = c.timestamps?.start ?? Date.now()),
                        {
                            id: eY.default.fromTimestamp(e),
                            author_id: h,
                            extra: {
                                type: "played_game_extra",
                                game_name: c.name,
                                application_id: c.application_id ?? "",
                                fake_inventory_item: !0,
                            },
                            content_type: ev.ContentInventoryEntryType.PLAYED_GAME,
                            author_type: ey.ContentInventoryAuthorType.USER,
                            participants: [],
                            traits: [{ type: eC.K.IS_LIVE, is_live: !0 }],
                        }),
                };
            }
            return null;
        }, [n, l, u, t]),
        I = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c ||
                        null == m ||
                        "joined" === m.kind ||
                        "joining" === m.kind ||
                        (h(!0),
                        null != g.current && clearTimeout(g.current),
                        (g.current = setTimeout(() => {
                            h(!1), (g.current = null);
                        }, 2e3)),
                        o?.({
                            type: (function (e) {
                                switch (e) {
                                    case "ask_to_join":
                                        return eK.c.ASK_TO_JOIN;
                                    case "invite_to_activity":
                                        return eK.c.SEND_ACTIVITY_INVITE;
                                    case "send_game_invite_message":
                                        return eK.c.SEND_GAME_INVITE_MESSAGE;
                                    case "join":
                                    case "joining":
                                    case "joined":
                                        return eK.c.JOIN;
                                }
                            })(m.kind),
                            userId: t.id,
                            activity: m.activity,
                            gameEntry: m.gameEntry,
                        }));
            },
            [c, m, t.id, o],
        );
    if (null == m || "joined" === m.kind) return null;
    let A = (function (e, t) {
            if (t) return eR.B;
            switch (e) {
                case "ask_to_join":
                    return eD.E;
                case "invite_to_activity":
                    return eb.D;
                case "send_game_invite_message":
                    return ej.l;
                case "join":
                case "joining":
                case "joined":
                    return ek.M;
            }
        })(m.kind, c),
        f = (function (e) {
            switch (e) {
                case "ask_to_join":
                    return eX.intl.string(eX.t.OKsSCR);
                case "invite_to_activity":
                    return eX.intl.string(eX.t["3fRySx"]);
                case "send_game_invite_message":
                    return eX.intl.string(eX.t.XHxDIV);
                case "join":
                    return eX.intl.string(eX.t.VJlc0S);
                case "joining":
                    return eX.intl.string(eX.t.bf6Ci7);
                case "joined":
                    return eX.intl.string(eX.t.KC26NR);
            }
        })(m.kind);
    return (0, i.jsx)(E.m, {
        text: f,
        "aria-label": f,
        children: (0, i.jsx)(U.K, {
            icon: A,
            "aria-label": f,
            size: "sm",
            variant: "icon-only",
            onClick: I,
            disabled: c || "joining" === m.kind,
        }),
    });
}
var e$ = n(808380),
    eQ = n(661531),
    eq = n(429913),
    eJ = n(263577),
    e0 = n(790381),
    e1 = n(266080),
    e3 = n(70191);
let e2 = { [e$.Y.XBOX]: e1.A, [e$.Y.PLAYSTATION]: e0.A };
function e6(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: l, platformIconSizePx: s } = e,
        a = (0, d.b4)(),
        u = r.useMemo(() => {
            let e = t.find(e3.A);
            if (null != a) {
                let n = a.altId ?? a.id;
                return t.find((e) => e.application_id === n) ?? e;
            }
            return e;
        }, [t, a]),
        o = (0, eq.h)(u?.application_id);
    return null == u
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: l, platformIconSizePx: r } = e,
                  s = t?.extra?.platform,
                  a = null != s ? e2[s] : null,
                  u =
                      null != a
                          ? (0, i.jsx)(a, { width: r, height: r, color: eQ.A.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  o = n?.getIconURL(r),
                  d = null != o ? (0, i.jsx)(eJ.V, { src: o, alt: n?.name, size: r }) : null;
              return (0, i.jsx)(es.A, { game: n, size: l, unknownGameIconFallback: u ?? d });
          })({ gameProfileEntry: n, gameApplication: o, gameIconSize: l, platformIconSizePx: s });
}
let e4 = F._3.SIZE_32,
    e5 = [ee.iq, ee.tR, ee.K7, ee.sp, ee.MK];
function e7(e) {
    let t,
        { channel: n, textVariant: l, activities: u, applicationStream: o } = e,
        d = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        c = (0, L.S3)(ez.clD.ONLINE),
        h = (0, q.Ay)(n),
        m = (0, s.bG)([eI.A], () => eI.A.getGuild(n.getGuildId())),
        I = m?.name;
    (0, Q.A)(d?.id);
    let E = o?.discoverable !== !1 ? o : null,
        A = (0, ea.AO)(E),
        f = n.isDM() || n.isGroupDM(),
        p = r.useMemo(
            () =>
                (0, g.uniqWith)(
                    u?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== ez.$pd.CUSTOM_STATUS && t !== ez.$pd.HANG_STATUS && n !== A?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [u, A?.name],
        ),
        N = p?.[0];
    return (0, i.jsxs)("div", {
        className: ex.fE,
        children: [
            ((t = p?.length > 0),
            (0, i.jsxs)("div", {
                className: ex._9,
                children: [
                    !t &&
                        !f &&
                        null != m &&
                        (0, i.jsxs)("div", {
                            className: ex.j1,
                            children: [
                                (0, i.jsx)(eu.Ay, { guild: m, iconSize: 14 }),
                                (0, i.jsx)(S.E, {
                                    className: ex.J5,
                                    variant: l,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: I,
                                }),
                                (0, i.jsx)(k._, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, i.jsx)(eh.A, { size: "custom", color: c, channel: n, className: ex.WT }),
                    (0, i.jsx)(S.E, { variant: l, color: "currentColor", lineClamp: 1, className: ex.Qo, children: h }),
                ],
            })),
            (() => {
                if (null == N) return null;
                let { text: e } = (0, z.A)(N, !1),
                    t = (0, $.f)(N);
                return null == e && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: ex._9,
                          children: [
                              null != t ? (0, i.jsx)(W.A, { icon: t, className: ex.WT }) : void 0,
                              null != e
                                  ? (0, i.jsx)(S.E, {
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
function e9(e) {
    let {
            user: t,
            activities: n,
            relationshipType: l,
            isSuggestion: a,
            appContext: u,
            onPrimaryAction: o,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        } = e,
        g = t.id,
        {
            avatarDecorationSrc: m,
            avatarSrc: I,
            eventHandlers: E,
        } = (0, ec.A)({ userId: g, size: e4, animateOnHover: !0, guildId: null }),
        A = r.useMemo(() => {
            let e = h ?? "no-group",
                t = l ?? "no-relationship",
                n = a ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${g}:${e}:${t}:${n}`;
        }, [h, a, l, g]),
        f = (0, s.yK)([ef.A], () =>
            [...ef.A.getActivities(!0), ...ef.A.getHiddenActivities()].filter(
                (e) => e.type === ez.$pd.PLAYING && null != e.application_id,
            ),
        ),
        { voiceChannel: p } = (0, B.A)({ userId: t.id }),
        {
            status: S,
            applicationStream: N,
            isMobile: x,
            newStatus: T,
        } = (0, s.cf)([R.A, eg.A], () => {
            let e = R.A.getStatus(t.id),
                l = eg.A.getAnyStreamForUser(t.id),
                i = R.A.isMobileOnline(t.id),
                r = (0, K.A)(n ?? []) ? ez.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: r };
        }, [t.id, n]),
        _ = f.length > 0,
        y = r.useCallback(
            (e) => {
                c?.(g, e, _);
            },
            [c, g, _],
        ),
        v = (0, w.K)(y),
        C = r.useMemo(() => n?.find(e3.A), [n]),
        D = (0, et.A)({ activity: C, user: t }),
        b = (0, J.zD)(D) ? D : void 0,
        j = r.useCallback(() => {
            if (null != b) {
                let e = b.traits,
                    t = { ...b, traits: e.slice(0, 3) };
                return (0, i.jsx)(ee.mG, {
                    location: ee.N5.FRIENDS_POPOUT,
                    className: ex.cV,
                    children: e5.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, X.A)({ activities: n, status: S, applicationStream: N, voiceChannel: p })) {
                let e = !(0, en.A)({
                    activity: n?.find((e) => {
                        let { type: t } = e;
                        return t === ez.$pd.CUSTOM_STATUS;
                    }),
                    user: t,
                });
                return n?.find((e) => {
                    let { type: t } = e;
                    return t === ez.$pd.PLAYING;
                }) == null && null != p
                    ? (0, i.jsx)(e7, {
                          channel: p,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: N,
                      })
                    : (0, i.jsx)(Z.A, {
                          user: t,
                          activities: n,
                          applicationStream: N,
                          voiceChannel: p,
                          animateEmoji: !1,
                          hideEmoji: e,
                          hasQuest: !1,
                      });
            }
            return null;
        }, [t, n, S, N, p, b]);
    return {
        avatarDecorationSrc: m,
        avatarSrc: I,
        eventHandlers: E,
        gameProfileEntry: b,
        listItemId: A,
        intersectionRef: v,
        isMobile: x,
        newStatus: T,
        status: S,
        currentUserPlayingActivities: f,
        renderSubtext: j,
        renderUserContextMenu: r.useCallback(
            (e) => {
                d?.({ type: eK.K.FRIEND_ROW, event: e, user: t, friendGroupId: h });
            },
            [h, d, t],
        ),
    };
}
function e8(e) {
    return (0, s.bG)([em.A, eE.Ay], () => {
        let t = em.A.getDMFromUserId(e) ?? null;
        return null != t && eE.Ay.hasUnread(t);
    }, [e]);
}
let te = r.memo((e) => {
    let {
            user: t,
            activities: n = [],
            closeParentPopout: l,
            appContext: a,
            nickname: u,
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
            avatarSrc: p,
            eventHandlers: S,
            gameProfileEntry: N,
            listItemId: x,
            intersectionRef: T,
            isMobile: _,
            newStatus: y,
            status: v,
            currentUserPlayingActivities: C,
            renderSubtext: R,
            renderUserContextMenu: D,
        } = e9({
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
        b = e8(t.id),
        { guildId: j, channelId: k } = (0, s.cf)([eA.A, em.A], () => {
            let e = eA.A.getVoiceChannelId() ?? eA.A.getChannelId();
            return { guildId: null != e ? em.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        M = (0, el.A)({ userId: t.id, guildId: j }),
        O = ep.Ay.useName(j, k, t),
        w = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), c?.({ type: eK.c.OPEN_DIRECT_MESSAGE, userId: t.id }), l?.();
            },
            [l, c, t.id],
        ),
        F = n.some(e3.A),
        L = (0, d.b4)(),
        U = r.useMemo(() => {
            let e = L?.altId ?? L?.id;
            return null != e && n.some((t) => (0, e3.A)(t) && t.application_id === e);
        }, [n, L]),
        P = v !== ez.clD.ONLINE && v !== ez.clD.IDLE && v !== ez.clD.DND,
        V = (0, eN.A2)(t.id),
        H = r.useCallback(
            (e) => {
                let l = [],
                    r = e || U;
                return (
                    e && l.push((0, i.jsx)(e_.j, { tab: o.x.FRIENDS, targetId: t.id }, "favorite")),
                    r &&
                        l.push(
                            (0, i.jsx)(
                                eW,
                                {
                                    user: t,
                                    friendActivities: n,
                                    currentUserPlayingActivities: C,
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
                                    children: (0, i.jsx)(e6, {
                                        activities: n,
                                        gameProfileEntry: N,
                                        gameIconSize: es.M.SMALL,
                                        platformIconSizePx: 24,
                                    }),
                                },
                                "activity-icon",
                            ),
                        ),
                    l.length > 0 ? l : null
                );
            },
            [n, C, N, F, U, c, t],
        );
    return (0, i.jsx)(eT, {
        listItemId: x,
        outerRef: T,
        leftIndicator: (0, i.jsx)(ed.A, { unread: b }),
        isVisuallyOffline: P,
        recentlyAddedTimestampMs: I ? V : null,
        onClick: w,
        onContextMenu: D,
        avatar: (0, i.jsx)(G.eu, {
            ...S,
            size: e4,
            src: p,
            isMobile: _,
            isTyping: !1,
            status: y,
            className: ex.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: f,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: ex.QV,
            children: [
                (0, i.jsx)(er.A, {
                    userName: O,
                    displayNameStyles: M,
                    effectDisplayType: ei.G.STATIC,
                    textClassName: ex.Xh,
                }),
                (0, i.jsx)(eo.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: R(),
        rightActions: H,
    });
});
te.displayName = "FriendListRow";
let tt = r.memo((e) => {
    let {
            user: t,
            activities: n = [],
            relationshipType: l,
            isSuggestion: s,
            appContext: a,
            nickname: u,
            onPrimaryAction: o,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        } = e,
        {
            avatarDecorationSrc: g,
            avatarSrc: m,
            eventHandlers: I,
            gameProfileEntry: A,
            listItemId: f,
            intersectionRef: p,
            isMobile: S,
            newStatus: N,
            status: x,
            renderSubtext: T,
            renderUserContextMenu: _,
        } = e9({
            user: t,
            activities: n,
            relationshipType: l,
            isSuggestion: s,
            appContext: a,
            onPrimaryAction: o,
            onContextMenu: d,
            onFriendVisible: c,
            friendGroupId: h,
        }),
        y = e8(t.id),
        v = (0, el.A)({ userId: t.id, guildId: null }),
        C = ep.Ay.useName(null, null, t),
        [R, D] = r.useState(!1),
        b = r.useRef(null),
        j = r.useCallback(() => {
            D(!0),
                null != b.current && clearTimeout(b.current),
                (b.current = setTimeout(() => {
                    D(!1), (b.current = null);
                }, 2e3));
        }, []);
    r.useEffect(
        () => () => {
            null != b.current && clearTimeout(b.current);
        },
        [],
    );
    let k = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), o?.({ type: eK.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [o, t.id],
        ),
        M = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eK.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        O = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eK.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        w = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eK.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        F = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eK.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        L = n.some((e) => {
            let { type: t } = e;
            return t === ez.$pd.PLAYING;
        }),
        K = x !== ez.clD.ONLINE && x !== ez.clD.IDLE && x !== ez.clD.DND;
    return (0, i.jsx)(eT, {
        listItemId: f,
        outerRef: p,
        leftIndicator: (0, i.jsx)(ed.A, { unread: y }),
        isVisuallyOffline: K,
        onClick: k,
        onContextMenu: _,
        avatar: (0, i.jsx)(G.eu, {
            ...I,
            size: e4,
            src: m,
            isMobile: S,
            isTyping: !1,
            status: N,
            className: ex.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: g,
        }),
        primaryText: (0, i.jsx)(er.A, {
            userName: C,
            displayNameStyles: v,
            effectDisplayType: ei.G.PLAIN,
            textClassName: ex.Xh,
        }),
        secondaryText: T(),
        rightActions: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    L
                        ? (0, i.jsx)("div", {
                              className: ex.im,
                              children: (0, i.jsx)(e6, {
                                  activities: n,
                                  gameProfileEntry: A,
                                  gameIconSize: es.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    l === ez.eA$.PENDING_INCOMING
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(E.m, {
                                      text: eX.intl.string(eX.t.MMlhsr),
                                      children: (0, i.jsx)(U.K, {
                                          "aria-label": eX.intl.string(eX.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: P.A,
                                          onClick: M,
                                          disabled: R,
                                      }),
                                  }),
                                  (0, i.jsx)(E.m, {
                                      text: eX.intl.string(eX.t.ytCpKs),
                                      children: (0, i.jsx)(U.K, {
                                          "aria-label": eX.intl.string(eX.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: V.P,
                                          onClick: O,
                                          disabled: R,
                                      }),
                                  }),
                              ],
                          })
                        : l === ez.eA$.PENDING_OUTGOING
                          ? (0, i.jsx)(E.m, {
                                text: eX.intl.string(eX.t["bTfA//"]),
                                children: (0, i.jsx)(U.K, {
                                    "aria-label": eX.intl.string(eX.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: H.l,
                                    onClick: w,
                                    disabled: R,
                                }),
                            })
                          : s
                            ? (0, i.jsx)(E.m, {
                                  text: eX.intl.string(eX.t.w5uwoI),
                                  children: (0, i.jsx)(U.K, {
                                      "aria-label": eX.intl.string(eX.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: Y.R,
                                      onClick: F,
                                      disabled: R,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
tt.displayName = "FriendRequestRow";
let tn = r.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === ez.eA$.PENDING_INCOMING || t === ez.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, i.jsx)(tt, { ...e })
        : (0, i.jsx)(te, { ...e }),
);
tn.displayName = "FriendRow";
var tl = n(353640),
    ti = n(499867);
let tr = (0, tl.v)()(
    (0, ti.Zr)((e) => ({ showSuggestions: !0, setShowSuggestions: (t) => e({ showSuggestions: t }) }), {
        name: "overlay-friends-popout-settings",
        partialize: (e) => ({ showSuggestions: e.showSuggestions }),
    }),
);
var ts = n(894564);
function ta(e) {
    let { title: t, count: n, isCollapsed: l, canCollapse: r, onToggle: s, rightAccessory: a } = e,
        u = l && null != n ? `${t} (${n})` : t,
        o = r ? (0, i.jsx)(O, { isCollapsed: l, size: "md", className: ts.t4 }) : null;
    return (0, i.jsx)(v.A, {
        className: ts.uW,
        children: (0, i.jsxs)("div", {
            className: ts.bV,
            children: [
                (0, i.jsxs)(A.D, {
                    onClick: () => r && s(),
                    "aria-hidden": !0,
                    className: r ? ts.Ws : void 0,
                    children: [u, o],
                }),
                a,
            ],
        }),
    });
}
var tu = n(228366),
    to = n(956753);
let td = new Set(Object.values(o.x)),
    tc = {
        [o.x.FRIENDS]: { FAVORITES: !0, FRIEND_REQUESTS: !0, OFFLINE: !0 },
        [o.x.MESSAGES]: { FAVORITES: !0 },
        [o.x.VOICE]: {},
    },
    th = { ...tc };
function tg(e, t) {
    return !!(e === o.x.FRIENDS && t.startsWith("GROUP:")) || tc[e]?.[t] === !0;
}
function tm() {
    return (th = { ...tc }), !0;
}
class tI extends s.Ay.Store {
    static displayName = "FriendsWidgetCollapsibleStore";
    initialize() {
        th = { ...tc };
    }
    getCollapsedSectionOverridesForTab(e) {
        return th[e];
    }
    isSectionCollapsedByDefault(e, t) {
        return tg(e, t);
    }
}
let tE = (e) => (0, to.v$)(e, "FriendsWidgetCollapsibleStore"),
    tA = new tI(
        tu.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED: tE(function (e) {
                      let t = e.tab;
                      if (!td.has(t)) return !1;
                      let n = (function (e) {
                          if ("string" != typeof e) return null;
                          let t = e.trim();
                          return "" === t ? null : t;
                      })(e.sectionKey);
                      if (null == n) return !1;
                      let l = th[t] ?? {},
                          i = l[n],
                          r = tg(t, n),
                          s = { ...l, [n]: !(i ?? r) };
                      return (th = { ...th, [t]: s }), !0;
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: tE(tm),
                  OVERLAY_INITIALIZE: tE(tm),
                  LOGOUT: tE(tm),
              },
    );
function tf(e) {
    let { tab: t, sectionKey: n } = e;
    return tu.h.dispatch({ type: "OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED", tab: t, sectionKey: n });
}
var tp = n(406595);
function tS(e) {
    let {
            scrollerRef: t,
            favoriteTargetIds: n,
            getScrollTargetForTargetId: l,
            getFallbackScrollTarget: i,
            padding: s = 8,
            animate: a = !1,
        } = e,
        u = eN.Ay.useState((e) => e.recentlyAddedFavoriteTimestampMsByKey),
        o = r.useMemo(
            () =>
                (function (e) {
                    let { targetIds: t, timestampsByKey: n } = e,
                        l = Date.now(),
                        i = null;
                    for (let e of t) {
                        let t = n[e];
                        null == t ||
                            t > l ||
                            (!(l - t > eN.WS) &&
                                (null == i || t > i.addedTimestampMs) &&
                                (i = { targetId: e, addedTimestampMs: t }));
                    }
                    return i;
                })({ targetIds: n, timestampsByKey: u }),
            [n, u],
        ),
        d = r.useRef(null);
    r.useEffect(() => {
        if (null == o) return;
        let e = d.current;
        if (e?.targetId === o.targetId && e.addedTimestampMs === o.addedTimestampMs) return;
        let n = t.current;
        if (null == n) return;
        let r = l(o.targetId) ?? i?.() ?? null;
        null != r && ((d.current = o), n.scrollToIndex({ section: r.section, row: r.row, padding: s, animate: a }));
    }, [a, o, i, l, s, t]);
}
var tN = (((l = {}).BEFORE = "before"), (l.AFTER = "after"), l),
    tx = n(870391),
    tT = n(379078),
    t_ = n(704554),
    ty = n(403362),
    tv = n(185657);
function tC(e) {
    return { user: e.user, activities: e.activities, nickname: e.nickname, relationshipType: e.relationshipType };
}
function tR(e) {
    return e.map(tC);
}
function tD(e, t) {
    let [, n] = e,
        [, l] = t;
    return n === l;
}
function tb(e) {
    let { user: t, activities: n, nickname: l } = e;
    return [t.username, t.globalName, l, ...n.map((e) => e.name)].filter(ty.Vq);
}
let tj = { searchType: tT.n.FUZZY, searchStringGenerator: tb, sortType: tT.r.JARO_WINKLER, throttleMs: 100 };
function tk(e, t) {
    let [n, l] = r.useState(t),
        i = r.useCallback(() => l(t), [t]);
    return (0, t_.RT)(e, t, l, tj), [n, i];
}
var tM = n(499214),
    tO = n(150045);
function tw(e) {
    let {
            groupId: t,
            groupName: n,
            displayText: l,
            isCollapsed: r,
            onToggle: s,
            onContextMenu: a,
            isReorderDisabled: u,
            draggedGroupId: o,
            dropTargetGroupId: d,
            dropTargetPosition: c,
            getDragHandleProps: g,
        } = e,
        m = !u,
        I = null != d && d === t,
        E = I && c === tN.BEFORE,
        f = I && c === tN.AFTER;
    return (0, i.jsx)(v.A, {
        className: h()(ts.uW, { [tO.EU]: m, [tO.Me]: null != o && o === t, [tO.hV]: I, [tO.nH]: E, [tO._M]: f }),
        children: (0, i.jsx)("div", {
            ...g(t, m),
            onContextMenu: a,
            children: (0, i.jsxs)(A.D, {
                onClick: s,
                "aria-hidden": !0,
                className: ts.Ws,
                children: [l, (0, i.jsx)(O, { isCollapsed: r, size: "md", className: ts.t4 })],
            }),
        }),
    });
}
function tF(e) {
    return Array.from(e).sort();
}
let tL = (0, g.throttle)(
    (e) => {
        (0, u.Y)(ez.uss.FRIENDS, {
            locked: b.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function tG() {}
function tU(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: l } = e,
        [d, c] = r.useState(new Set()),
        [h, m] = r.useState(new Set()),
        v = r.useCallback(
            (e, t, n) => {
                c((n) => {
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
                    l?.(e, t, n);
            },
            [l],
        ),
        b = (0, u.Dk)(() => d, [d]),
        k = (0, u.Dk)(() => h, [h]);
    r.useEffect(() => {
        0 !== b.size && tL({ shownUserIds: tF(b), liveUserIds: tF(k) });
    }, [b, k]);
    let M = (function () {
            let [e] = (0, s.bG)(
                [tv.A, tx.A, ef.A],
                () => {
                    let e = tx.A.getGroups(),
                        [t, n] = tv.A.getRows(tv.j.FRIEND_REQUESTS),
                        l = tR(t),
                        i = tR(tv.A.getRows(tv.j.SUGGESTIONS)[0]),
                        r = tR(tv.A.getRows(tv.j.SAME_ACTIVITY)[0]),
                        s = tR(tv.A.getRows(tv.j.ACTIVITIES)[0]),
                        a = tR(tv.A.getRows(tv.j.IN_GAME)[0]),
                        u = tR(tv.A.getRows(tv.j.ONLINE)[0]),
                        o = tR(tv.A.getRows(tv.j.OFFLINE)[0]),
                        d = e.map((e) => {
                            let [t] = tv.A.getRows(`GROUP:${e.id}`);
                            return { id: e.id, name: e.name, users: tR(t) };
                        }),
                        c = ef.A.getPrimaryActivity()?.name ?? "",
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
                            online: u,
                            offline: o,
                            currentActivityName: c,
                        },
                        g,
                    ];
                },
                [],
                tD,
            );
            return e;
        })(),
        {
            searchQuery: O,
            setSearchQuery: w,
            clearSearch: F,
            ...L
        } = (function (e) {
            let [t, n] = r.useState(""),
                [l, i] = tk(t, e.friendRequests),
                [s, a] = tk(t, e.suggestions),
                [u, o] = tk(t, e.sameActivity),
                [d, c] = tk(t, e.activities),
                [h, g] = tk(t, e.inGame),
                [m, I] = tk(t, e.online),
                [E, A] = tk(t, e.offline),
                f = r.useMemo(() => {
                    if ("" === t.trim()) return e.groups;
                    let n = t.toLowerCase();
                    return e.groups
                        .map((e) => {
                            let t = e.users.filter((e) => tb(e).some((e) => null != e && e.toLowerCase().includes(n)));
                            return { ...e, users: t };
                        })
                        .filter((e) => e.users.length > 0);
                }, [t, e.groups]),
                p = r.useCallback(() => {
                    n(""), i(), a(), o(), c(), g(), I(), A();
                }, [i, a, o, c, g, I, A]);
            return {
                groups: f,
                friendRequests: l,
                suggestions: s,
                sameActivity: u,
                inGame: h,
                activities: d,
                online: m,
                offline: E,
                currentActivityName: e.currentActivityName,
                searchQuery: t,
                setSearchQuery: n,
                clearSearch: p,
            };
        })(M),
        { showSuggestions: G, setShowSuggestions: U } = tr(),
        P = O.trim().length > 0,
        V = r.useMemo(() => L.groups.filter((e) => e.users.length > 0), [L.groups]),
        {
            draggedGroupId: H,
            dropTargetGroupId: Y,
            dropTargetPosition: K,
            getDragHandleProps: z,
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
                u = r.useRef(s),
                o = r.useCallback((e) => {
                    a((t) => {
                        let n = { ...t, ...e };
                        return (u.current = n), n;
                    });
                }, []),
                d = r.useCallback(
                    (e, t) => {
                        let { draggedGroupId: r, didCommitDrop: s } = u.current;
                        if (s || n || null == r) return;
                        let d = (function (e) {
                            let { groupIds: t, draggedGroupId: n, targetGroupId: l, position: i } = e,
                                r = t.indexOf(n),
                                s = t.indexOf(l);
                            if (-1 === r || -1 === s || n === l) return null;
                            let a = [...t];
                            a.splice(r, 1);
                            let u = r < s ? s - 1 : s;
                            return a.splice("before" === i ? u : u + 1, 0, n), a;
                        })({ groupIds: i.current, draggedGroupId: r, targetGroupId: e, position: t });
                        null != d &&
                            ((u.current = { ...u.current, didCommitDrop: !0 }),
                            a(u.current),
                            l(d),
                            o({ draggedGroupId: null, dropTargetGroupId: null, dropTargetPosition: null }));
                    },
                    [n, l, o],
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
                                    o({
                                        draggedGroupId: e,
                                        dropTargetGroupId: null,
                                        dropTargetPosition: null,
                                        didCommitDrop: !1,
                                    })));
                        },
                        onDragOver: (t) => {
                            let { draggedGroupId: l } = u.current;
                            if (n || null == l || l === e) return;
                            t.preventDefault(), (t.dataTransfer.dropEffect = "move");
                            let i = t.currentTarget.getBoundingClientRect();
                            o({
                                dropTargetGroupId: e,
                                dropTargetPosition: t.clientY < i.top + i.height / 2 ? "before" : "after",
                            });
                        },
                        onDrop: (t) => {
                            let { draggedGroupId: l } = u.current;
                            if (n || null == l || l === e) return;
                            t.preventDefault();
                            let i = t.currentTarget.getBoundingClientRect();
                            d(e, t.clientY < i.top + i.height / 2 ? "before" : "after");
                        },
                        onDragEnd: () => {
                            let { didCommitDrop: e, dropTargetGroupId: t, dropTargetPosition: n } = u.current;
                            e || null == t || null == n || d(t, n),
                                o({
                                    draggedGroupId: null,
                                    dropTargetGroupId: null,
                                    dropTargetPosition: null,
                                    didCommitDrop: !1,
                                });
                        },
                    }),
                    [d, n, o],
                );
            return {
                draggedGroupId: s.draggedGroupId,
                dropTargetGroupId: s.dropTargetGroupId,
                dropTargetPosition: s.dropTargetPosition,
                getDragHandleProps: c,
            };
        })({
            groupIds: r.useMemo(() => M.groups.map((e) => e.id), [M.groups]),
            isDisabled: P,
            onCommitNewOrder: C.A.reorderGroups,
        }),
        [X, B] = (0, s.bG)([tp.A], () => tp.A.getFavoriteTargetIdsForTab(o.x.FRIENDS), [], j.D),
        Z = (0, s.bG)([a.default, R.A, D.A], () => {
            let e = [];
            for (let t of X) {
                let n = a.default.getUser(t);
                null != n && e.push({ user: n, activities: R.A.getActivities(t), nickname: D.A.getNickname(t) });
            }
            return e;
        }, [X]),
        W = r.useRef(new Set());
    r.useEffect(() => {
        for (let e of X)
            null == a.default.getUser(e) &&
                (W.current.has(e) ||
                    (W.current.add(e),
                    (0, _.wz)(e).catch(() => {
                        W.current.delete(e);
                    })));
    }, [X]);
    let $ = r.useMemo(() => {
            let e = O.trim().toLowerCase();
            return "" === e
                ? Z
                : Z.filter((t) => {
                      let { user: n, activities: l, nickname: i } = t;
                      return [n.username, n.globalName, i, ...l.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [Z, O]),
        Q = B > 0 && $.length > 0,
        q =
            !Q &&
            0 === V.length &&
            0 === L.friendRequests.length &&
            (!G || 0 === L.suggestions.length) &&
            0 === L.sameActivity.length &&
            0 === L.inGame.length &&
            0 === L.activities.length &&
            0 === L.online.length &&
            0 === L.offline.length,
        J = (0, s.bG)([tA], () => tA.getCollapsedSectionOverridesForTab(o.x.FRIENDS), []),
        ee = r.useRef(null),
        et = (0, y.A)("friends-popout", ee),
        en = r.useCallback((e) => {
            tf({ tab: o.x.FRIENDS, sectionKey: e });
        }, []),
        el = r.useCallback((e) => J[e] ?? tA.isSectionCollapsedByDefault(o.x.FRIENDS, e), [J]),
        ei = r.useCallback(
            (e) => {
                e.stopPropagation(), U(!1);
            },
            [U],
        ),
        er = r.useCallback(
            (0, g.debounce)(
                () => {
                    t?.({ type: eK.c.SEARCH_FRIENDS });
                },
                1e3,
                { leading: !0, trailing: !1 },
            ),
            [t],
        ),
        es = r.useCallback(
            (e) => {
                w(e), er(), ee.current?.scrollToTop();
            },
            [w, er],
        ),
        ea = r.useCallback(() => {
            F(), er(), ee.current?.scrollToTop();
        }, [F, er]),
        eu = r.useMemo(() => {
            let e = (e) => {
                let t = R.A.getStatus(e);
                return t !== ez.clD.ONLINE && t !== ez.clD.IDLE && t !== ez.clD.DND;
            };
            if (q) return [{ kind: "EMPTY_STATE", key: "EMPTY_STATE", title: "", count: 0, length: 1, rows: [] }];
            let t = [];
            if (Q) {
                let n = el("FAVORITES") ? $.filter((t) => !e(t.user.id)) : $;
                t.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eX.intl.string(tM.default.GKTlS6),
                    count: $.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.friendRequests.length > 0) {
                let e = L.friendRequests,
                    n = el("FRIEND_REQUESTS") ? [] : e;
                t.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: eX.intl.formatToPlainString(eX.t.xxFCW8, { count: e.length }),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            for (let n of V) {
                let l = `GROUP:${n.id}`,
                    i = n.users,
                    r = el(l) ? i.filter((t) => !e(t.user.id)) : i;
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
                    n = el("SAME_ACTIVITY") ? [] : e;
                t.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: M.currentActivityName,
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.inGame.length > 0) {
                let e = L.inGame,
                    n = el("IN_GAME") ? [] : e;
                t.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: eX.intl.string(tM.default.trKJoT),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.activities.length > 0) {
                let e = L.activities,
                    n = el("ACTIVITIES") ? [] : e;
                t.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: eX.intl.string(eX.t.TxqPQR),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (G && L.suggestions.length > 0) {
                let e = L.suggestions,
                    n = el("SUGGESTIONS") ? [] : e;
                t.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: eX.intl.string(eX.t.qm9dSj),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.online.length > 0) {
                let e = L.online,
                    n = el("ONLINE") ? [] : e;
                t.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: eX.intl.string(eX.t.WbGtnH),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (L.offline.length > 0) {
                let e = L.offline,
                    n = el("OFFLINE") ? [] : e;
                t.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: eX.intl.string(eX.t.Vv0abJ),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            return t;
        }, [
            el,
            L.friendRequests,
            V,
            L.sameActivity,
            L.activities,
            L.inGame,
            L.suggestions,
            L.online,
            L.offline,
            M.currentActivityName,
            q,
            G,
            Q,
            $,
        ]),
        eo = r.useCallback((e) => eu[e], [eu]),
        ed = r.useCallback(
            (e) => {
                let { section: t } = e,
                    l = eo(t);
                if (null == l || "EMPTY_STATE" === l.kind) return null;
                let r = el(l.key),
                    s = l.title,
                    a = l.count,
                    u = "GROUP" === l.kind,
                    o = r && "FRIEND_REQUESTS" !== l.kind ? `${s} (${a})` : s,
                    d =
                        u && null != n
                            ? (e) => {
                                  n({ type: eK.K.FRIEND_GROUP, event: e, groupId: l.group?.id ?? "", groupName: s });
                              }
                            : void 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.A, { children: eX.intl.format(eX.t.Uaqbke, { title: s, count: a }) }),
                        u
                            ? (0, i.jsx)(tw, {
                                  groupId: l.group?.id ?? "",
                                  groupName: s,
                                  displayText: o,
                                  isCollapsed: r,
                                  onToggle: () => en(l.key),
                                  onContextMenu: d,
                                  isReorderDisabled: P,
                                  draggedGroupId: H,
                                  dropTargetGroupId: Y,
                                  dropTargetPosition: K,
                                  getDragHandleProps: z,
                              })
                            : (0, i.jsx)(ta, {
                                  title: s,
                                  count: "FRIEND_REQUESTS" === l.kind ? void 0 : a,
                                  isCollapsed: r,
                                  canCollapse: !0,
                                  onToggle: () => en(l.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === l.kind
                                          ? (0, i.jsx)(E.m, {
                                                text: eX.intl.string(eX.t.N86XcP),
                                                children: (0, i.jsx)(A.D, {
                                                    className: ts.LQ,
                                                    "aria-label": eX.intl.string(eX.t.N86XcP),
                                                    onClick: ei,
                                                    children: (0, i.jsx)(p.a, { size: "xs", color: "currentColor" }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [eo, el, en, P, H, Y, K, z, ei, n],
        ),
        ec = r.useCallback(
            (e) => {
                let l;
                if (q)
                    return (0, i.jsx)(
                        "div",
                        {
                            className: ts.y7,
                            children: (0, i.jsx)(S.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: eX.intl.string(eX.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let r = eo(e.section);
                if (null == r) return null;
                "GROUP" === r.kind && (l = r.group?.id);
                let s = r.rows[e.row];
                return null == s || null == s.user
                    ? null
                    : (0, i.jsx)(
                          "div",
                          {
                              children: (0, i.jsx)(tn, {
                                  ...s,
                                  closeParentPopout: tG,
                                  isSuggestion: "SUGGESTIONS" === r.kind,
                                  shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                                  appContext: ez.BRT.OVERLAY,
                                  onPrimaryAction: t,
                                  onContextMenu: n,
                                  onFriendVisible: v,
                                  friendGroupId: l,
                              }),
                          },
                          `${e.section}:${s.user.id}`,
                      );
            },
            [eo, q, tG, t, n, v],
        ),
        eh = r.useMemo(() => eu.map((e) => e.length), [eu]),
        eg = r.useCallback(
            (e) => {
                let t = eu.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) return null;
                let n = eu[t],
                    l = n?.rows.findIndex((t) => t.user.id === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [eu],
        );
    tS({
        scrollerRef: ee,
        favoriteTargetIds: X,
        getScrollTargetForTargetId: (e) => eg(e),
        getFallbackScrollTarget: r.useCallback(() => {
            let e = eu.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [eu]),
        padding: 8,
        animate: !1,
    });
    let em = r.useCallback(() => 40, []),
        eI = r.useCallback(
            (e) => {
                if (q) return 300;
                let t = eo(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [eo, q],
        );
    return (0, i.jsxs)("div", {
        className: ts.kL,
        children: [
            (0, i.jsx)("div", {
                className: ts.MT,
                children: (0, i.jsx)(N.I, {
                    query: O,
                    onChange: es,
                    onClear: ea,
                    placeholder: eX.intl.string(eX.t.lLDtTK),
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: et,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(x.sk, {
                            children: (e) =>
                                (0, i.jsx)(T.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eX.intl.string(eX.t.TdEu5X),
                                    ref: (e) => {
                                        (ee.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ts.p_,
                                    sectionHeight: em,
                                    rowHeight: eI,
                                    sidebarHeight: 0,
                                    renderSection: ed,
                                    renderRow: ec,
                                    sections: eh,
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
var tP = n(687966),
    tV = n(983851),
    tH = n(730134),
    tY = n(775602),
    tK = n(410540),
    tz = n(302223),
    tX = n(853390),
    tB = n(885386),
    tZ = n(763827),
    tW = n(741961),
    t$ = n(486020),
    tQ = n(427262),
    tq = n(589051),
    tJ = n(545807),
    t0 = n(340281);
let t1 = r.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, tJ.A)(),
        [l, i] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = n.setInterval(() => i(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, tX.fU)(s);
});
t1.displayName = "OverlayElapsedTime";
let t3 = r.memo(function () {
    let e = (0, tJ.A)(),
        [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, s.bG)([tZ.A], () => tZ.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, tX.fU)(l / 1e3);
});
function t2(e) {
    var t;
    let n,
        { currentUser: l, activity: a, currentGameName: u } = e,
        o = l?.id ?? null,
        d = (0, tq.Mn)("UserActivityBanner"),
        c = (0, tQ.tx)(l),
        h = d ? c : (l?.globalName ?? l?.username),
        g = (0, el.A)({ userId: o, guildId: null }),
        { isMobileOnline: m, status: I } = (0, s.cf)(
            [R.A],
            () =>
                null == o
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: R.A.isMobileOnline(o), status: R.A.getStatus(o) },
            [o],
        ),
        E = (0, s.bG)([eA.A], () => eA.A.getVoiceChannelId()),
        A = (0, s.bG)([em.A], () => (null != E ? em.A.getChannel(E) : null), [E]),
        f = (0, q.Ay)(A),
        p = (0, tK.A)(o ?? "0") ?? null,
        N = null != o ? p : null,
        x =
            null == (n = (0, z.A)(a, !0).text ?? u)
                ? null
                : a?.type === ez.$pd.PLAYING || null == a
                  ? eX.intl.formatToPlainString(eX.t.lFApmz, { game: n })
                  : n,
        T = a?.timestamps?.start != null ? ((t = a.timestamps.start) < 1e12 ? 1e3 * t : t) : null,
        _ = r.useMemo(
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
                })({ activityLabel: x, activityStartTimestampMs: T, voiceCallName: f, customStatusActivity: N }),
            [x, T, f, N],
        );
    if (null == l) return null;
    let y =
        null == l.banner
            ? null
            : ((0, t$.z)({ id: l.id, banner: l.banner, canAnimate: tB.kt.getSetting(), size: 600 }) ?? null);
    return (0, i.jsxs)("div", {
        className: t0.cI,
        children: [
            (0, i.jsx)("div", { className: t0.CK, style: { backgroundImage: null != y ? `url(${y})` : void 0 } }),
            (0, i.jsxs)("div", {
                className: t0.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: t0.iy,
                        children: [
                            (0, i.jsx)(tH.A, { user: l, isMobile: m, status: I, className: t0.my, size: F._3.SIZE_40 }),
                            (0, i.jsxs)("div", {
                                className: t0.ic,
                                children: [
                                    (0, i.jsx)(er.A, {
                                        userName: h,
                                        textClassName: t0.Xh,
                                        displayNameStyles: g,
                                        effectDisplayType: ei.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (_.type) {
                                            case "activity":
                                                return (0, i.jsxs)("div", {
                                                    className: t0.nU,
                                                    children: [
                                                        (0, i.jsx)(tP._, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: t0.Wo,
                                                        }),
                                                        (0, i.jsx)(S.E, {
                                                            className: t0.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: _.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, i.jsxs)("div", {
                                                    className: t0.nU,
                                                    children: [
                                                        (0, i.jsx)(tV.H, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: t0.Wo,
                                                        }),
                                                        (0, i.jsx)(S.E, {
                                                            className: t0.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: _.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, i.jsx)("div", {
                                                    className: t0.nU,
                                                    children: (0, i.jsx)(tz.A, {
                                                        activity: _.customStatusActivity,
                                                        className: t0.tR,
                                                        emojiClassName: t0.qp,
                                                        textClassName: t0.Yg,
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
                    "activity" === _.type
                        ? null == _.startTimestampMs
                            ? null
                            : (0, i.jsx)(S.E, {
                                  className: t0.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, i.jsx)(t1, { startTimestampMs: _.startTimestampMs }),
                              })
                        : "voice_call" === _.type
                          ? null == E
                              ? null
                              : (0, i.jsx)(S.E, {
                                    className: t0.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, i.jsx)(t3, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}
function t6(e) {
    let { currentUser: t, activity: n, currentGameName: l, activeTab: u, onTabChange: d } = e,
        {
            friendsHasUnreadFavorites: c,
            messagesHasUnreadFavorites: h,
            voiceHasActiveFavorites: g,
            friendsHasTypingInFavorites: m,
            messagesHasTypingInFavorites: I,
        } = (0, s.cf)([tp.A, eE.Ay, em.A, eV.A, tW.A, a.default], () => {
            let e = a.default.getCurrentUser()?.id ?? null,
                [t] = tp.A.getFavoriteTargetIdsForTab(o.x.FRIENDS),
                [n] = tp.A.getFavoriteTargetIdsForTab(o.x.MESSAGES),
                [l] = tp.A.getFavoriteTargetIdsForTab(o.x.VOICE),
                i = (e) => eE.Ay.hasUnread(e) || eE.Ay.getMentionCount(e) > 0,
                r = (t) => {
                    let n = tW.A.getTypingUsers(t);
                    for (let t in n) if (t !== e) return !0;
                    return !1;
                },
                s = (e) => em.A.getDMFromUserId(e) ?? null,
                u = t.some((e) => {
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
                friendsHasUnreadFavorites: u,
                messagesHasUnreadFavorites: c,
                voiceHasActiveFavorites: l.some((e) => {
                    let t = eV.A.getVoiceStatesForChannel(e);
                    for (let e in t) return !0;
                    return !1;
                }),
                friendsHasTypingInFavorites: d,
                messagesHasTypingInFavorites: h,
            };
        }, []),
        E = r.useMemo(() => ({ [o.x.FRIENDS]: c, [o.x.MESSAGES]: h, [o.x.VOICE]: g }), [c, h, g]),
        A = (0, s.bG)([tY.A], () => tY.A.useReducedMotion),
        f = r.useMemo(() => ({ [o.x.FRIENDS]: !A && m, [o.x.MESSAGES]: !A && I, [o.x.VOICE]: !1 }), [A, m, I]);
    return (0, i.jsxs)("div", {
        className: t0.kL,
        children: [
            (0, i.jsx)(t2, { currentUser: t, activity: n, currentGameName: l }),
            (0, i.jsx)("div", {
                className: t0.vR,
                role: "tablist",
                "aria-label": eX.intl.string(eX.t.TdEu5X),
                children: [
                    { id: o.x.FRIENDS, label: eX.t.TdEu5X },
                    { id: o.x.MESSAGES, label: eX.t.OIgYlQ },
                    { id: o.x.VOICE, label: eX.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        l = !0 === E[t],
                        r = !0 === f[t];
                    return (0, i.jsx)(
                        t4,
                        {
                            tab: t,
                            label: eX.intl.formatToPlainString(n, {}),
                            selected: u === t,
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
function t4(e) {
    let {
            tab: t,
            label: n,
            selected: l,
            shouldShowCutoutDot: r = !1,
            shouldPulseDot: s = !1,
            onSelect: a,
            className: u,
        } = e,
        o = r ? h()(t0.OD, s && t0.S) : null;
    return (0, i.jsxs)(A.D, {
        role: "tab",
        "aria-selected": l,
        className: h()(t0.Mf, l && t0.jP, u),
        onClick: () => a(t),
        children: [
            null != o ? (0, i.jsx)("span", { className: o, "aria-hidden": !0 }) : null,
            (0, i.jsx)(S.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
t3.displayName = "OverlayVoiceCallElapsedTime";
var t5 = n(141157),
    t7 = n(567761),
    t9 = n(777666),
    t8 = n(602853),
    ne = n(713654),
    nt = n(636537),
    nn = n(439372),
    nl = n(723176),
    ni = n(626584),
    nr = n(587626);
n(95701);
var ns = n(495544),
    na = n(973153);
class nu {
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
        this.pending.delete(e), this.fetching.delete(e);
    }
    nextWants(e) {
        let t = [...this.pending];
        return (t.length = Math.min(e, t.length)), t;
    }
    markFetching(e) {
        for (let t of e) this.pending.delete(t), this.fetching.add(t);
    }
    markCompleted(e) {
        for (let t of e) this.pending.delete(t), this.fetching.delete(t);
    }
    markFailed(e) {
        for (let t of e) this.pending.add(t), this.fetching.delete(t);
    }
    async try(e, t) {
        try {
            this.markFetching(e);
            let n = await t();
            return this.markCompleted(e), n;
        } catch (t) {
            throw (this.markFailed(e), t);
        }
    }
}
let no = new ni.A("MessagePreviewManager");
class nd extends nn.A {
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
        em.A.getBasicChannel(e);
    }
    remoteTick = m().debounce(
        (() => {
            var e = this;
            return async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!nr.A.isConnected()) {
                    e.tickQueued = !0;
                    return;
                }
                if (!e.remoteTicking && !(t > 5)) {
                    e.tickQueued = !1;
                    try {
                        for (let [t, n] of ((e.remoteTicking = !0), e.remote))
                            await (null == t ? e.fetchDms(n) : e.fetchGuilds(t, n));
                        e.cleanup(), (e.remoteTicking = !1);
                    } catch (n) {
                        no.log(`couldn't fetch message previews (attempt: ${t}, error: ${n})`),
                            (e.remoteTicking = !1),
                            e.remoteTick(t + 1);
                    }
                }
            };
        })(),
        100,
    );
    async fetchLocal(e) {
        if (!(!na.A.isLocalFetchNeeded(e) || this.localFetching.has(e)))
            try {
                no.verbose(`fetching local previews (via: database, guild_id: ${e})`), this.localFetching.add(e);
                let t = ns.default.getId(),
                    n = await nl.A.messages()?.getMostRecents(e);
                null != n &&
                    t === ns.default.getId() &&
                    tu.h.dispatch({
                        type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                        guildId: e,
                        messages: n.map((e) => {
                            let [t, n] = e;
                            return [t, n.message];
                        }),
                    });
            } catch (e) {
                no.log(`couldn't fetch local previews (error: ${e})`);
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
                      no.verbose(
                          `fetching guild previews (via: gateway, guild_id: ${e}, channel_ids: ${n.join(", ")})`,
                      ),
                      nr.A.getSocket().requestLastMessages(e, n),
                      Promise.resolve()
                  ),
              );
    }
    fetchDms(e) {
        let t = e.nextWants(30);
        return 0 === t.length
            ? Promise.resolve()
            : e.try(t, async () => {
                  no.verbose(`fetching dm previews (via: http, channel_ids: ${t.join(", ")})`);
                  let e = (
                      await nt.Bo.post({ url: ez.Rsh.MESSAGE_PREVIEWS, body: { channel_ids: t }, rejectWithError: !1 })
                  ).body;
                  tu.h.dispatch({ type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: e });
              });
    }
    syncChannel(e, t) {
        let n = this.remote.get(e);
        null != n && na.A.isLatest(e, t) && n.removeWant(t);
    }
    getOrCreate(e) {
        return this.remote.has(e) || this.remote.set(e, new nu()), this.remote.get(e);
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
        this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1);
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
        let t = em.A.getBasicChannel(e.channelId),
            n = t?.guild_id ?? null;
        if (null != t) for (let t of e.messages ?? []) this.syncChannel(n, t.channel_id);
    }
    handleThreadListSync(e) {
        let t = this.remote.get(e.guildId);
        if (null != t) for (let n of e.mostRecentMessages ?? []) t.removeWant(n.channel_id);
    }
}
let nc = new nd();
function nh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        l = e.id,
        [i, a] = (0, s.yK)([na.A], () => (t ? [null, !0] : [na.A.message(n, l), na.A.isLatest(n, l)]));
    return (
        (0, r.useEffect)(() => {
            null == l || a || nc.addWant(l);
        }, [l, a]),
        i
    );
}
var ng = n(172491),
    nm = n(912156),
    nI = n(191023),
    nE = n(428689),
    nA = n(432017),
    nf = n(588975),
    np = n(173936),
    nS = n(797285),
    nN = n(978940),
    nx = n(960027),
    nT = n(46054),
    n_ = n(448761),
    ny = n(470710),
    nv = n(313961),
    nC = n(806931),
    nR = n(427930),
    nD = n(59318),
    nb = n(944052),
    nj = n(763754),
    nk = n(861464),
    nM = n(465364),
    nO = n(427358),
    nw = n(830666);
function nF(e) {
    let { icon: t, ...n } = e;
    switch (t) {
        case "image":
            return (0, i.jsx)(nI.x, { ...n });
        case "video":
            return (0, i.jsx)(nE.n, { ...n });
        case "audio":
            return (0, i.jsx)(nA.T, { ...n });
        case "attachment":
            return (0, i.jsx)(nf.P, { ...n });
        case "link":
            return (0, i.jsx)(np.q, { ...n });
        case "sticker":
            return (0, i.jsx)(nS.t, { ...n });
        case "call-active":
            return (0, i.jsx)(nN._, { ...n });
        case "call-ended":
            return (0, i.jsx)(nx.z, { ...n });
    }
}
let nL = r.memo(function (e) {
        let { message: t } = e;
        return (0, nM.Ay)(t, { formatInline: !0, noStyleAndInteraction: !0 }).content;
    }),
    nG = r.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, nM.jp)(nT.A.parseInlineReply, { content: t, channelId: n });
    });
function nU(e) {
    let { channel: t, typingUserIds: n } = e,
        l = (0, s.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let l = [];
                    for (let i of e) {
                        let e = a.default.getUser(i);
                        null != e && l.push(ep.Ay.getName(n, t, e));
                    }
                    let [i, r, s, u] = l;
                    return null == i
                        ? null
                        : null == r
                          ? eX.intl.format(eX.t.lJ9sZX, { a: i })
                          : null == s
                            ? eX.intl.format(eX.t.rB0CUa, { a: i, b: r })
                            : null == u
                              ? eX.intl.format(eX.t.StKThj, { a: i, b: r, c: s })
                              : eX.intl.string(eX.t.uVDhqZ);
                })(n, t.id, t.guild_id),
            [n, t.id, t.guild_id],
        );
    return null == l
        ? null
        : (0, i.jsx)("div", { className: nw.Sl, children: (0, i.jsx)("span", { className: nw.BK, children: l }) });
}
function nP(e) {
    let t,
        { channel: n, message: l } = e,
        r = (function (e, t) {
            var n, l;
            let { isBlocked: i, isIgnored: r } = (0, s.cf)(
                    [D.A],
                    () => ({ isBlocked: D.A.isBlocked(e.author.id), isIgnored: D.A.isIgnored(e.author.id) }),
                    [e.author.id],
                ),
                u =
                    ((n = t.id),
                    (l = e.id),
                    (0, s.bG)(
                        [ny.A, nv.A],
                        () =>
                            ny.A.isCallActive(n, l) &&
                            nv.A.getParticipants(n).some((e) => e.type === nC.lp.USER && !e.ringing),
                        [n, l],
                    )),
                o = (0, s.bG)([ns.default], () => ns.default.getId()),
                d = (0, nj.Ay)(e).nick,
                c = e.type !== n_.l.USER_JOIN && e.author.id === o ? eX.intl.string(eX.t.LuZzxn) : d,
                h = (0, s.bG)([a.default], () => (e.mentions.length > 0 ? a.default.getUser(e.mentions[0]) : void 0)),
                m = (0, nj.d8)(h, t).nick;
            return (function (e, t) {
                let { isBlocked: n, isIgnored: l, authorNick: i } = t;
                if (n) return { type: "text", text: eX.intl.string(eX.t.XAkOo2) };
                if (l) return { type: "text", text: eX.intl.string(eX.t["G7p6v/"]) };
                if (
                    (function (e) {
                        switch (e.type) {
                            case n_.l.DEFAULT:
                            case n_.l.CHANGELOG:
                            case n_.l.REPLY:
                            case n_.l.CHAT_INPUT_COMMAND:
                            case n_.l.CONTEXT_MENU_COMMAND:
                            case n_.l.POLL_RESULT:
                            case n_.l.AUTO_MODERATION_ACTION:
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
                        if (e.hasFlag(ez.pr7.IS_VOICE_MESSAGE))
                            return { type: "text", text: eX.intl.string(eX.t.slFYgi) };
                        if (e.attachments.length > 0) {
                            let t = e.attachments.every((e) => (0, nD.u)(e.filename)),
                                n = !t && e.attachments.every((e) => (0, nD.AE)(e.filename)),
                                l = !t && !n && e.attachments.every((e) => (0, nD.L8)(e.filename));
                            return t
                                ? {
                                      type: "text",
                                      text: eX.intl.formatToPlainString(eX.t.h4pFfU, { count: e.attachments.length }),
                                      trailingIcon: "image",
                                  }
                                : n
                                  ? {
                                        type: "text",
                                        text: eX.intl.formatToPlainString(eX.t.SJ6pPX, { count: e.attachments.length }),
                                        trailingIcon: "video",
                                    }
                                  : l
                                    ? {
                                          type: "text",
                                          text: eX.intl.formatToPlainString(eX.t.fnO3hK, {
                                              count: e.attachments.length,
                                          }),
                                          trailingIcon: "audio",
                                      }
                                    : {
                                          type: "text",
                                          text: eX.intl.formatToPlainString(eX.t["89ihS8"], {
                                              count: e.attachments.length,
                                          }),
                                          trailingIcon: "attachment",
                                      };
                        }
                        if (e.embeds.length > 0) {
                            let t = e.embeds.every((e) => null != e.url && (0, nD.Zj)(e.url)),
                                n = !t && e.embeds.every((e) => null != e.url && (0, nD.r1)(e.url)),
                                l = !t && !n && e.embeds.every((e) => null != e.url && (0, nD.L8)(e.url));
                            if (t)
                                return {
                                    type: "text",
                                    text: eX.intl.formatToPlainString(eX.t.h4pFfU, { count: e.embeds.length }),
                                    trailingIcon: "image",
                                };
                            if (n)
                                return {
                                    type: "text",
                                    text: eX.intl.formatToPlainString(eX.t.SJ6pPX, { count: e.embeds.length }),
                                    trailingIcon: "video",
                                };
                            if (l)
                                return {
                                    type: "text",
                                    text: eX.intl.formatToPlainString(eX.t.fnO3hK, { count: e.embeds.length }),
                                    trailingIcon: "audio",
                                };
                            else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle)
                                return { type: "markup", markup: e.embeds[0].rawTitle };
                            else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription)
                                return { type: "markup", markup: e.embeds[0].rawDescription };
                            else
                                return {
                                    type: "text",
                                    text: eX.intl.formatToPlainString(eX.t["9XuYjs"], { count: e.embeds.length }),
                                    trailingIcon: "link",
                                };
                        }
                        return e.stickerItems.length > 0
                            ? { type: "text", text: e.stickerItems[0].name, trailingIcon: "sticker" }
                            : e.isPoll()
                              ? {
                                    type: "text",
                                    text: eX.intl.formatToPlainString(eX.t.ImizdM, { question: e.poll?.question.text }),
                                }
                              : (0, nR.A)(e)
                                ? { type: "text", text: eX.intl.string(eX.t["9ddYKt"]) }
                                : void 0;
                    })(e);
                    if (null != t) return { ...t, authorLabel: i };
                }
                let r = (function (e, t) {
                    let { currentUserId: n, authorNick: l, otherUser: i, otherUserNick: r, isCallActive: s } = t;
                    return e.type === n_.l.RECIPIENT_ADD && null != r
                        ? {
                              type: "text",
                              text: eX.intl.formatToPlainString(eX.t.MMN2Jq, {
                                  username: l,
                                  usernameHook: g.identity,
                                  otherUsername: r,
                                  otherUsernameHook: g.identity,
                              }),
                          }
                        : e.type === n_.l.RECIPIENT_REMOVE && null != r
                          ? {
                                type: "text",
                                text:
                                    e.author.id === i?.id
                                        ? eX.intl.formatToPlainString(eX.t["5v2xa8"], {
                                              username: l,
                                              usernameHook: g.identity,
                                          })
                                        : eX.intl.formatToPlainString(eX.t.L2FyVq, {
                                              username: l,
                                              usernameHook: g.identity,
                                              otherUsername: r,
                                              otherUsernameHook: g.identity,
                                          }),
                            }
                          : e.type === n_.l.CALL
                            ? {
                                  type: "text",
                                  text: s
                                      ? eX.intl.string(eX.t["NGg/fm"])
                                      : null == e.call || e.call.participants.includes(n)
                                        ? eX.intl.string(eX.t.v05Xd6)
                                        : eX.intl.string(eX.t["2CnhoI"]),
                                  color: s ? "text-feedback-positive" : void 0,
                                  trailingIcon: s ? "call-active" : "call-ended",
                              }
                            : e.type === n_.l.CHANNEL_NAME_CHANGE
                              ? {
                                    type: "text",
                                    text: eX.intl.formatToPlainString(eX.t.oItgEw, {
                                        username: l,
                                        usernameHook: g.identity,
                                        channelName: e.content,
                                    }),
                                }
                              : e.type === n_.l.CHANNEL_ICON_CHANGE
                                ? {
                                      type: "text",
                                      text: eX.intl.formatToPlainString(eX.t.OEdU6X, {
                                          username: l,
                                          usernameHook: g.identity,
                                      }),
                                  }
                                : e.type === n_.l.CHANNEL_PINNED_MESSAGE
                                  ? {
                                        type: "text",
                                        text: eX.intl.formatToPlainString(eX.t.vfkjqx, {
                                            username: l,
                                            usernameHook: g.identity,
                                        }),
                                    }
                                  : e.type === n_.l.USER_JOIN
                                    ? {
                                          type: "text",
                                          text: eX.intl.formatToPlainString(nk.A.getSystemMessageUserJoin(e.id), {
                                              username: l,
                                              usernameHook: g.identity,
                                          }),
                                      }
                                    : e.type === n_.l.THREAD_CREATED
                                      ? {
                                            type: "text",
                                            text: eX.intl.formatToPlainString(eX.t.SGaUAU, {
                                                actorName: l,
                                                actorHook: g.identity,
                                                threadName: e.content,
                                                threadOnClick: g.identity,
                                            }),
                                        }
                                      : e.type === n_.l.PREMIUM_REFERRAL
                                        ? {
                                              type: "text",
                                              text: eX.intl.formatToPlainString(eX.t.lieTqU, { username: l }),
                                          }
                                        : e.type === n_.l.STAGE_START
                                          ? {
                                                type: "text",
                                                text: eX.intl.formatToPlainString(eX.t.aZtRW8, {
                                                    username: l,
                                                    usernameOnClick: g.identity,
                                                    topic: e.content,
                                                }),
                                            }
                                          : e.type === n_.l.STAGE_END
                                            ? {
                                                  type: "text",
                                                  text: eX.intl.formatToPlainString(eX.t.vMJhvG, {
                                                      username: l,
                                                      usernameOnClick: g.identity,
                                                      topic: e.content,
                                                  }),
                                              }
                                            : e.type === n_.l.STAGE_SPEAKER
                                              ? {
                                                    type: "text",
                                                    text: eX.intl.formatToPlainString(eX.t.V4uCm4, {
                                                        username: l,
                                                        usernameOnClick: g.identity,
                                                    }),
                                                }
                                              : e.type === n_.l.STAGE_TOPIC
                                                ? {
                                                      type: "text",
                                                      text: eX.intl.formatToPlainString(eX.t.ro3RM0, {
                                                          username: l,
                                                          usernameOnClick: g.identity,
                                                          topic: e.content,
                                                      }),
                                                  }
                                                : e.type === n_.l.VOICE_SESSION
                                                  ? { type: "text", text: (0, nb.fn)(e) }
                                                  : void 0;
                })(e, t);
                if (null != r) return r;
            })(e, {
                message: e,
                channel: t,
                currentUserId: o,
                authorNick: c,
                otherUser: h,
                otherUserNick: m,
                isBlocked: i,
                isIgnored: r,
                isCallActive: u,
            });
        })(l, n);
    if (null == r) return null;
    let { authorLabel: u, color: o, trailingIcon: d } = r;
    return (
        "text" === r.type
            ? (t = r.text)
            : "markup" === r.type
              ? (t = (0, i.jsx)(nG, { markup: r.markup, channelId: l.channel_id }))
              : "message" === r.type && (t = (0, i.jsx)(nL, { message: r.message })),
        (0, i.jsxs)("div", {
            className: h()(nw.Sl, { [nw.Vz]: "text-feedback-positive" === o }),
            children: [
                (0, i.jsxs)("span", { className: nw.BK, children: [null != u && `${u}: `, t] }),
                null != d && (0, i.jsx)(nF, { icon: d, size: "xxs", color: "currentColor", className: nw.sl }),
            ],
        })
    );
}
function nV(e) {
    let { channel: t, message: n, showTypingPreview: l } = e,
        r = (0, s.bG)([a.default], () => {
            if (!l) return [];
            let e = a.default.getCurrentUser()?.id ?? null;
            var n = t.id;
            let i = tW.A.getTypingUsers(n),
                r = [];
            for (let t in i) t !== e && r.push(t);
            return r.sort((e, t) => {
                let n = +!!D.A.isFriend(e),
                    l = +!!D.A.isFriend(t);
                if (n !== l) return l - n;
                let i = nO.A.getUserAffinity(e)?.communicationProbability ?? 0;
                return (nO.A.getUserAffinity(t)?.communicationProbability ?? 0) - i;
            });
        }, [t.id, l]);
    return r.length > 0
        ? (0, i.jsx)(nU, { channel: t, typingUserIds: r })
        : null == n
          ? null
          : (0, i.jsx)(nP, { channel: t, message: n });
}
var nH = n(680049),
    nY = n(240516);
function nK(e) {
    return (0, s.bG)([tW.A, a.default], () => {
        if (null == e) return !1;
        let t = a.default.getCurrentUser()?.id ?? null,
            n = tW.A.getTypingUsers(e.id);
        for (let e in n) if (e !== t) return !0;
        return !1;
    }, [e]);
}
function nz(e) {
    return (0, i.jsx)(t9.hV, { count: e });
}
function nX(e) {
    let { channelId: t, listItemId: n, mentionCount: l, unread: r } = e,
        s = (0, q.Ay)(em.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, i.jsx)(eT, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(ed.A, { unread: r }),
        avatar: (0, i.jsx)(G.eu, { src: void 0, "aria-hidden": !0, size: F._3.SIZE_32 }),
        primaryText: (0, i.jsx)("span", {
            children: (0, i.jsx)(S.E, {
                className: ex.Xh,
                variant: "text-sm/medium",
                color: "text-muted",
                children: s,
            }),
        }),
        rightActions: () => (l > 0 ? nz(l) : null),
    });
}
function nB(e) {
    let {
            channel: t,
            listItemId: n,
            mentionCount: l,
            isMentionLowImportance: u,
            unread: d,
            onPrimaryAction: c,
            onContextMenu: h,
        } = e,
        g = t.id,
        m = (0, q.Ay)(t, !1) ?? "???",
        I = nK(t),
        E = nh(t, !1),
        {
            user: A,
            status: f,
            isMobile: p,
        } = (0, s.cf)([a.default, R.A], () => {
            if (!t.isDM()) return { user: null, status: null, isMobile: !1 };
            let e = t.getRecipientId(),
                n = null != e ? a.default.getUser(e) : null;
            return {
                user: n,
                status: null != e ? R.A.getStatus(e) : null,
                isMobile: null != e && R.A.isMobileOnline(e),
            };
        }, [t]),
        N = r.useCallback(
            (e) => {
                let n = t.isMultiUserDM() ? eK.K.GROUP_DM_CHANNEL : eK.K.DM_CHANNEL;
                h?.({ type: n, event: e, channel: t, user: A ?? void 0 });
            },
            [t, h, A],
        ),
        x = t.isMultiUserDM() || (t.isPrivate() && t.recipients.length >= 2),
        T = r.useCallback(() => {
            c?.({ type: eK.c.OPEN_TEXT_CHAT_CHANNEL, channelId: g, guildId: null });
        }, [g, c]);
    return (0, i.jsx)(eT, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(ed.A, { unread: d }),
        onClick: T,
        onContextMenu: N,
        avatar: (0, i.jsx)(ng.h, {
            channel: t,
            user: A,
            "aria-hidden": !0,
            size: F._3.SIZE_32,
            status: f,
            isMobile: p,
            isTyping: I,
            mentionCount: l,
            isMentionLowImportance: u,
        }),
        primaryText: (0, i.jsx)("div", {
            className: ex.QV,
            children: (0, i.jsx)(S.E, {
                className: ex.Xh,
                variant: "text-sm/medium",
                color: d || l > 0 ? "text-strong" : "text-muted",
                children: m,
            }),
        }),
        secondaryText:
            null != E
                ? (0, i.jsx)(S.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, i.jsx)(nV, { channel: t, message: E }),
                  })
                : null,
        rightActions: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [l > 0 ? nz(l) : null, e && x ? (0, i.jsx)(e_.j, { tab: o.x.MESSAGES, targetId: g }) : null],
            }),
    });
}
function nZ(e) {
    let t,
        {
            channel: n,
            listItemId: l,
            mentionCount: u,
            unread: d,
            recentlyAddedTimestampMs: c,
            onPrimaryAction: h,
            onContextMenu: g,
        } = e,
        m = n.id,
        I = n.getGuildId?.() ?? null,
        E = (0, s.bG)([eI.A], () => (null != I ? (eI.A.getGuild(I) ?? null) : null), [I]),
        A = (0, q.Ay)(n, !1) ?? "???",
        f = nK(n),
        p = (0, s.bG)([tW.A, a.default, D.A, nO.A], () => {
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
                              return r >= nY.u.HIGH_AFFINITY_MINIMUM
                                  ? "HIGH_AFFINITY"
                                  : r > 0
                                    ? "LOW_AFFINITY"
                                    : "NONE";
                          })(s, [i, r]);
                })(n, [tW.A, a.default, D.A, nO.A])
            ) {
                case "FRIEND":
                    return eQ.A.colors.STATUS_ONLINE.resolve({ theme: nH.NJ.DARK, saturation: 1 }).hex();
                case "HIGH_AFFINITY":
                    return eQ.A.colors.STATUS_ONLINE.resolve({ theme: nH.NJ.DARK, saturation: 0.7 }).hex();
                case "LOW_AFFINITY":
                    return eQ.A.colors.STATUS_ONLINE.resolve({ theme: nH.NJ.DARK, saturation: 0.4 }).hex();
                default:
                    return null;
            }
        }, [n]),
        N = nh(n, !1),
        x = (0, t8.r)(eQ.A.colors.TEXT_STRONG),
        T = (0, t8.r)(eQ.A.colors.TEXT_MUTED),
        _ = d || u > 0 ? "text-strong" : "text-muted",
        y = d || u > 0 ? x : T,
        v = r.useCallback(
            (e) => {
                g?.({ type: eK.K.GUILD_TEXT_CHANNEL, event: e, channel: n, guild: E });
            },
            [n, E, g],
        ),
        C = r.useCallback(() => {
            h?.({ type: eK.c.OPEN_TEXT_CHAT_CHANNEL, channelId: m, guildId: I });
        }, [m, I, h]);
    return (0, i.jsx)(eT, {
        listItemId: l,
        recentlyAddedTimestampMs: c,
        leftIndicator: (0, i.jsx)(ed.A, { unread: d }),
        onClick: C,
        onContextMenu: v,
        avatar: (0, i.jsx)(nm.A, {
            channel: n,
            guild: E ?? void 0,
            size: nm.Q.SMALL_32,
            isTyping: f,
            typingFillColor: p ?? void 0,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: ex.QV,
            children: [
                null == (t = (0, ne.gU)(n, E)) ? null : (0, i.jsx)(t, { color: y.hex(), size: "xxs", className: ex.p }),
                (0, i.jsx)(S.E, { className: ex.Xh, variant: "text-sm/medium", color: _, children: A }),
            ],
        }),
        secondaryText: (0, i.jsx)(S.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsx)(nV, { channel: n, message: N, showTypingPreview: !0 }),
        }),
        rightActions: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [u > 0 ? nz(u) : null, e ? (0, i.jsx)(e_.j, { tab: o.x.MESSAGES, targetId: m }) : null],
            }),
    });
}
function nW(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: l, onPrimaryAction: r, onContextMenu: a } = e,
        u = (0, s.bG)([em.A], () => em.A.getChannel(t), [t]),
        {
            mentionCount: o,
            unread: d,
            isMentionLowImportance: c,
        } = (0, s.cf)(
            [eE.Ay],
            () => ({
                mentionCount: eE.Ay.getMentionCount(t),
                isMentionLowImportance: eE.Ay.getIsMentionLowImportance(t),
                unread: eE.Ay.hasUnread(t),
            }),
            [t],
        ),
        h = (0, eN.A2)(t);
    return null == u
        ? (0, i.jsx)(nX, { channelId: t, listItemId: n, mentionCount: o, unread: d })
        : u.isPrivate()
          ? (0, i.jsx)(nB, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                isMentionLowImportance: c,
                unread: d,
                onPrimaryAction: r,
                onContextMenu: a,
            })
          : (0, i.jsx)(nZ, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                unread: d,
                recentlyAddedTimestampMs: l ? h : null,
                onPrimaryAction: r,
                onContextMenu: a,
            });
}
var n$ = n(91868);
function nQ(e) {
    return Array.from(e).sort();
}
let nq = (0, g.throttle)(
        (e) => {
            (0, u.Y)(ez.uss.FRIENDS, {
                locked: b.default.isInstanceLocked(),
                shownUserIds: e.shownUserIds,
                liveUserIds: [],
                contentInventoryIds: e.contentInventoryIds,
            });
        },
        3e3,
        { leading: !0, trailing: !1 },
    ),
    nJ = {
        searchType: tT.n.REGEX,
        sortType: tT.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t } = e,
                n = [(0, q.m1)(t, a.default, D.A), t.name, t.id];
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
            let l = null != t.guild_id ? (eI.A.getGuild(t.guild_id)?.name ?? null) : null;
            return null != l && n.push(l), n.filter(ty.Vq);
        },
        throttleMs: 100,
    };
function n0() {
    let e,
        { onPrimaryAction: t, onContextMenu: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [l, a] = r.useState(""),
        d = l.trim().toLowerCase(),
        c =
            ((e = (0, t5.Dz)()),
            (0, s.yK)([t7.default, em.A], () => {
                let t = [];
                for (let e of t7.default.getPrivateChannelIds()) {
                    let n = em.A.getChannel(e);
                    null != n && t.push({ channel: n, voiceStates: [] });
                }
                for (let n of e) t.push(n);
                return t;
            }, [e])),
        [h, g] = r.useState([]);
    (0, t_.RT)(l, c, g, nJ);
    let m = r.useRef(null),
        E = (0, y.A)("friends-widget-messages", m),
        [A, p] = (0, s.bG)([tp.A], () => tp.A.getFavoriteTargetIdsForTab(o.x.MESSAGES), [], j.D),
        [S, _] = (0, s.bG)(
            [n$.A],
            () => {
                let [e, t] = n$.A.getRows(n$.Y.ACTIVE_NOW),
                    [n] = n$.A.getRows(n$.Y.DMS),
                    [l] = n$.A.getRows(n$.Y.RECENT_TEXT),
                    i = n.slice(0, 5),
                    r = l.slice(0, 8);
                return [{ activeNowRows: e.slice(0, 8), dmRows: i, recentTextRows: r }, t];
            },
            [],
            j.D,
        ),
        v = (0, s.bG)([tA], () => tA.getCollapsedSectionOverridesForTab(o.x.MESSAGES), []),
        C = r.useCallback((e) => {
            tf({ tab: o.x.MESSAGES, sectionKey: e });
        }, []),
        R = r.useMemo(() => {
            let e = new Set();
            for (let t of A) e.add(t);
            for (let t of S.dmRows) e.add(t.channelId);
            for (let t of S.activeNowRows) e.add(t.channelId);
            for (let t of S.recentTextRows) e.add(t.channelId);
            return Array.from(e);
        }, [A, S.activeNowRows, S.dmRows, S.recentTextRows]),
        { unreadOrMentionChannels: D } = (0, s.cf)([eE.Ay], () => {
            let e = new Set();
            for (let t of R) {
                let n = eE.Ay.hasUnread(t),
                    l = eE.Ay.getMentionCount(t),
                    i = eE.Ay.getIsMentionLowImportance(t),
                    r = l > 0 && !i;
                (n || r) && e.add(t);
            }
            return { unreadOrMentionChannels: e };
        }, [R]),
        b = r.useMemo(() => {
            let e = (e) => !0 === v[e],
                t = (e) => D.has(e),
                n = [];
            if (0 === _) return [];
            if ("" !== d)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: eX.intl.string(tM.default.HGimIS),
                        count: h.length,
                        channelIds: h.map((e) => e.channel.id),
                        length: h.length,
                    }),
                    n
                );
            if (A.length > 0 && p > 0) {
                let l = e("FAVORITES") ? A.filter(t) : A;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eX.intl.string(tM.default.GKTlS6),
                    count: A.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (S.activeNowRows.length > 0) {
                let t = S.activeNowRows.map((e) => e.channelId),
                    l = e("ACTIVE_NOW") ? [] : t;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: eX.intl.string(tM.default.d3yO98),
                    count: t.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (S.dmRows.length > 0) {
                let l = S.dmRows.map((e) => e.channelId),
                    i = e("DMS") ? l.filter(t) : l;
                n.push({
                    kind: "DMS",
                    key: "DMS",
                    title: eX.intl.string(eX.t.YUU0RF),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (S.recentTextRows.length > 0) {
                let l = S.recentTextRows.map((e) => e.channelId),
                    i = e("TEXT_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "TEXT_CHANNELS",
                    key: "TEXT_CHANNELS",
                    title: eX.intl.string(tM.default.uC6Lhg),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [v, D, d, A, S.activeNowRows, S.dmRows, S.recentTextRows, p, h, _]),
        k = r.useMemo(() => b.map((e) => e.length), [b]),
        M = r.useCallback(
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
    tS({
        scrollerRef: m,
        favoriteTargetIds: A,
        getScrollTargetForTargetId: (e) => M(e),
        getFallbackScrollTarget: r.useCallback(() => {
            let e = b.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [b]),
        padding: 8,
        animate: !1,
    });
    let O = (0, u.Dk)(() => {
            let e = new Set();
            for (let t of b) for (let n of t.channelIds) e.add(n);
            return e;
        }, [b]),
        { shownUserIds: w, contentInventoryIds: F } = (0, s.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let l of e) {
                        let e = em.A.getChannel(l);
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
                })(O),
            [O],
        ),
        L = (0, u.Dk)(() => w, [w]),
        G = (0, u.Dk)(() => F, [F]);
    r.useEffect(() => {
        (0 !== L.size || 0 !== G.size) && nq({ shownUserIds: nQ(L), contentInventoryIds: nQ(G) });
    }, [L, G]);
    let U = r.useCallback((e) => b[e], [b]),
        P = r.useCallback(
            (e) => {
                let { section: t } = e,
                    n = U(t);
                if (null == n) return null;
                let l = "SEARCH_RESULTS" !== n.kind,
                    r = l && !0 === v[n.key];
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.A, { children: n.title }),
                        (0, i.jsx)(ta, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: l,
                            onToggle: () => C(n.key),
                        }),
                    ],
                });
            },
            [v, U, C],
        ),
        V = r.useCallback(
            (e) => {
                let l = U(e.section);
                if (null == l) return null;
                let r = l.channelIds[e.row];
                if (null == r) return null;
                let s = `${l.key}:${e.row}`;
                return (0, i.jsx)(
                    nW,
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
            [U, n, t],
        ),
        H = r.useCallback(() => 40, []),
        Y = r.useCallback(
            (e, t) => {
                let n = U(e);
                return null == n ? 50 : 50 * (null != n.channelIds[t]);
            },
            [U],
        ),
        K = r.useCallback((e) => {
            a(e), m.current?.scrollToTop();
        }, []);
    return (0, i.jsxs)("div", {
        className: ts.kL,
        children: [
            (0, i.jsx)("div", {
                className: ts.MT,
                children: (0, i.jsx)(N.I, {
                    query: l,
                    onChange: K,
                    onClear: () => a(""),
                    placeholder: eX.intl.string(tM.default["xB/0Z9"]),
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: E,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(x.sk, {
                            children: (e) =>
                                (0, i.jsx)(T.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eX.intl.string(eX.t.OIgYlQ),
                                    ref: (e) => {
                                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ts.p_,
                                    sectionHeight: H,
                                    rowHeight: Y,
                                    sidebarHeight: 0,
                                    renderSection: P,
                                    renderRow: V,
                                    sections: k,
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
var n1 = n(776096),
    n3 = n(607567),
    n2 = n(377802),
    n6 = n(342952),
    n4 = n(676923),
    n5 = n(342296),
    n7 = n(481947),
    n9 = n(567346);
let n8 = r.memo(function (e) {
    let { channelId: t, guildId: n, userId: l, onDoubleClick: u, onContextMenu: o } = e,
        d = r.useRef(null),
        [c, h] = r.useState(!1),
        g = (0, s.bG)([a.default], () => a.default.getUser(l), [l]),
        m = (function (e, t) {
            let [n] = (0, s.bG)(
                [eV.A],
                () => [eV.A.getVoiceStateForChannel(e, t) ?? null, eV.A.getVoiceStateVersion()],
                [e, t],
                j.D,
            );
            return n;
        })(t, l),
        I = (0, el.A)({ userId: l, guildId: n }),
        E = (0, s.bG)([eg.A], () => null != n && null != eg.A.getStreamForUser(l, n), [n, l]),
        f = (0, s.bG)([R.A], () => R.A.findActivity(l, e3.A), [l]),
        p = (0, eq.h)(f?.application_id),
        N = (0, ep.tx)(n ?? void 0, t, g),
        x = r.useCallback(
            (e) => {
                (0, ty.Vq)(g) && null != m && o?.({ type: eK.K.VOICE_USER, event: e, user: g, channelId: t });
            },
            [t, o, g, m],
        );
    return (0, ty.Vq)(g) && null != m
        ? (0, i.jsx)(n5.A, {
              targetElementRef: d,
              user: g,
              guildId: n ?? void 0,
              channelId: t,
              appContext: ez.BRT.OVERLAY,
              shouldShow: c,
              onRequestClose: () => h(!1),
              spacing: 24,
              children: (e) =>
                  (0, i.jsx)(A.D, {
                      ...e,
                      innerRef: d,
                      className: n9.gD,
                      onDoubleClick: u,
                      onContextMenu: x,
                      onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), h(!0);
                      },
                      children: (0, i.jsxs)("div", {
                          className: n9.h6,
                          children: [
                              (0, i.jsx)(G.eu, {
                                  src: g.getAvatarURL(n ?? void 0, 24),
                                  size: F._3.SIZE_24,
                                  "aria-label": N,
                              }),
                              (0, i.jsxs)(S.E, {
                                  className: n9.rg,
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, i.jsx)(er.A, {
                                          userName: N,
                                          displayNameStyles: I,
                                          effectDisplayType: ei.G.STATIC,
                                          textClassName: n9.m2,
                                      }),
                                      (0, i.jsx)(eo.Ay, { userId: l, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: n9.ZA,
                                  onDoubleClick: u,
                                  children: (0, i.jsx)(n7.Kc, {
                                      guildId: n ?? void 0,
                                      user: g,
                                      video: m.selfVideo,
                                      isStreaming: E,
                                      className: n9.ZA,
                                      iconClassName: n9.Ow,
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
                              null != p ? (0, i.jsx)(es.A, { game: p, size: es.M.XSMALL, className: n9.IV }) : null,
                          ],
                      }),
                  }),
          })
        : null;
});
function le(e) {
    let { isCollapsed: t } = e;
    return (0, i.jsx)(O, { isCollapsed: t, size: "md", className: ts.t4 });
}
function lt(e) {
    e.preventDefault(), e.stopPropagation();
}
function ln(e) {
    let { channelId: t, guildId: n } = e,
        l = (function (e) {
            let { channelId: t } = e;
            return (0, s.yK)(
                [eV.A, a.default, nO.A, D.A],
                () =>
                    Object.values(eV.A.getVoiceStatesForChannel(t))
                        .map((e) => a.default.getUser(e.userId))
                        .filter(ty.Vq)
                        .sort((e, t) =>
                            D.A.isFriend(e.id) && !D.A.isFriend(t.id)
                                ? -1
                                : !D.A.isFriend(e.id) && D.A.isFriend(t.id)
                                  ? 1
                                  : (nO.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (nO.A.getUserAffinity(e.id)?.vcProbability ?? 0),
                        ),
                [t],
            );
        })({ channelId: t });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: n9.X0,
              children: (0, i.jsx)(n6.A, {
                  users: l,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(l.length, 4),
                  size: F._3.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": eX.intl.string(eX.t.TxqPQR),
              }),
          });
}
function ll(e) {
    let t,
        {
            channelId: n,
            listItemId: l,
            voiceStates: a,
            shouldHighlightIfRecentlyAdded: u,
            isExpanded: d = !1,
            onToggleExpanded: c,
            onPrimaryAction: h,
            onContextMenu: g,
        } = e,
        m = (0, s.bG)([em.A], () => em.A.getChannel(n), [n]),
        I = (0, q.Ay)(m ?? void 0, !0) ?? "???",
        E = m?.getGuildId?.() ?? null,
        A = (0, s.bG)([eI.A], () => (null != E ? (eI.A.getGuild(E) ?? null) : null), [E]),
        f = (0, s.bG)([eA.A], () => eA.A.getVoiceChannelId() === n, [n]),
        p = (0, s.bG)([eP.A], () => null != m && (!!m.isPrivate?.() || eP.A.can(ez.xBc.READ_MESSAGE_HISTORY, m)), [m]),
        [N] = (0, s.bG)(
            [n3.Ay],
            () =>
                null == m || null == E ? [[], 0] : [n3.Ay.getVoiceStatesForChannel(m), n3.Ay.getVoiceStateVersion(E)],
            [m, E],
            j.D,
        ),
        x = null != N && N.length > 0,
        T = (0, s.bG)([eV.A, R.A], () => {
            for (let e of Object.values(eV.A.getVoiceStatesForChannel(n))) {
                let t = R.A.findActivity(e.userId, e3.A);
                if (t?.name != null) return t.name;
            }
            return null;
        }, [n]),
        _ = (0, eN.A2)(n),
        y = nK(m),
        v = r.useRef(null),
        C = r.useCallback(() => {
            let e = v.current;
            null != e && (clearTimeout(e), (v.current = null));
        }, []);
    r.useEffect(
        () => () => {
            C();
        },
        [C],
    );
    let D = r.useCallback(
            (e) => {
                e.stopPropagation(), h?.({ type: eK.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: E }), d || c?.(n);
            },
            [n, E, d, h, c],
        ),
        b = r.useCallback(
            (e) => {
                e.stopPropagation(), h?.({ type: eK.c.DISCONNECT_VOICE_CHANNEL, channelId: n });
            },
            [n, h],
        ),
        k = r.useCallback(() => {
            p && h?.({ type: eK.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: E });
        }, [p, n, E, h]),
        M = r.useCallback(
            (e) => {
                if (x) return void c?.(n);
            },
            [n, x, c],
        ),
        O = r.useCallback(
            (e) => {
                C(), k();
            },
            [C, k],
        ),
        w = r.useCallback(
            (e) => {
                g?.({ type: eK.K.VOICE_CHANNEL, event: e, channel: m ?? void 0, guild: A, channelId: n });
            },
            [m, n, A, g],
        ),
        { mentionCount: F } = (0, s.cf)(
            [eE.Ay],
            () => ({
                mentionCount: eE.Ay.getMentionCount(n),
                isMentionLowImportance: eE.Ay.getIsMentionLowImportance(n),
                unread: eE.Ay.hasUnread(n),
            }),
            [n],
        ),
        L = (0, t8.r)(eQ.A.colors.STATUS_POSITIVE),
        G = (0, t8.r)(eQ.A.colors.STATUS_DANGER),
        U = (0, t8.r)(eQ.A.colors.TEXT_STRONG),
        P = (0, t8.r)(eQ.A.colors.TEXT_MUTED),
        V = f ? L : F > 0 ? U : P,
        {
            Component: H,
            events: { onMouseEnter: Y, onMouseLeave: K },
        } = (0, n2.O)(),
        z = () => {
            let e = f ? eX.intl.string(eX.t["6vrfgt"]) : eX.intl.string(eX.t.S0W8Z5),
                t = f ? G.hex() : L.hex(),
                n = f ? H : nN._;
            return (0, i.jsx)("div", {
                onDoubleClick: lt,
                children: (0, i.jsx)(n4.S, {
                    tooltipText: e,
                    onClick: f ? b : D,
                    onMouseEnter: Y,
                    onMouseLeave: K,
                    children: (0, i.jsx)(n, { size: "sm", color: t }),
                }),
            });
        };
    return (0, i.jsxs)("div", {
        onDoubleClick: O,
        children: [
            (0, i.jsx)(eT, {
                listItemId: l,
                recentlyAddedTimestampMs: u ? _ : null,
                onClick: M,
                onContextMenu: w,
                avatar:
                    null != m
                        ? (0, i.jsx)(nm.A, { isTyping: y, guild: A ?? void 0, channel: m, size: nm.Q.SMALL_32 })
                        : null,
                primaryText: (0, i.jsxs)("div", {
                    className: ex.QV,
                    children: [
                        null == (t = (0, ne.gU)(m, A))
                            ? null
                            : (0, i.jsx)(t, { color: V.hex(), size: "xxs", className: ex.p }),
                        (0, i.jsx)(S.E, {
                            className: ex.Xh,
                            variant: "text-sm/medium",
                            color: f ? "status-positive-text" : F > 0 ? "text-strong" : "text-muted",
                            children: I,
                        }),
                    ],
                }),
                secondaryText:
                    null != T
                        ? (0, i.jsxs)("div", {
                              className: n9.z2,
                              children: [
                                  (0, i.jsx)(tP._, { size: "xxs", color: "currentColor", className: n9.AE }),
                                  (0, i.jsx)(S.E, { variant: "text-xs/normal", color: "text-muted", children: T }),
                              ],
                          })
                        : A?.name != null
                          ? (0, i.jsx)(S.E, { variant: "text-xs/normal", color: "text-muted", children: A.name })
                          : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !x:
                            return e
                                ? (0, i.jsxs)("div", {
                                      className: n9.YT,
                                      onDoubleClick: lt,
                                      children: [z(), (0, i.jsx)(e_.j, { tab: o.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case x:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    d
                                        ? (0, i.jsxs)("div", {
                                              className: n9.YT,
                                              onDoubleClick: lt,
                                              children: [z(), (0, i.jsx)(e_.j, { tab: o.x.VOICE, targetId: n })],
                                          })
                                        : (0, i.jsx)(ln, { channelId: n, guildId: E }),
                                    (0, i.jsx)(le, { isCollapsed: !d }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            d && N.length > 0
                ? (0, i.jsx)("div", {
                      className: n9.Nz,
                      children: N.slice(0, 25).map((e) =>
                          (0, i.jsx)(
                              n8,
                              { channelId: n, guildId: E, userId: e.user.id, onDoubleClick: lt, onContextMenu: g },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
var li = n(315240);
function lr(e) {
    return Array.from(e).sort();
}
let ls = (0, g.throttle)(
    (e) => {
        (0, u.Y)(ez.uss.FRIENDS, {
            locked: b.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function la(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function lu() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, l] = r.useState(""),
        a = n.trim().toLowerCase(),
        [d, c] = r.useState(() => new Set()),
        h = (0, s.bG)([tA], () => tA.getCollapsedSectionOverridesForTab(o.x.VOICE), []),
        g = (0, t5.qZ)(),
        m = r.useMemo(() => {
            let e = new Map();
            for (let t of g) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [g]),
        E = r.useCallback((e) => {
            c((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        A = r.useCallback((e) => {
            tf({ tab: o.x.VOICE, sectionKey: e });
        }, []),
        p = r.useMemo(() => new Set(g.map((e) => e.channel.id)), [g]),
        [S, _] = r.useState([]);
    (0, t_.RT)(n, g, _, t5.MV);
    let v = r.useRef(null),
        C = (0, y.A)("friends-widget-voice", v),
        [R, b] = (0, s.bG)([tp.A], () => tp.A.getFavoriteTargetIdsForTab(o.x.VOICE), [], j.D),
        k = r.useMemo(() => R.filter((e) => p.has(e)), [R, p]),
        { friendVoiceChannelIds: M, recentVoiceChannelIds: O } = (0, t5.S4)(),
        w = r.useMemo(() => M.filter((e) => p.has(e)), [M, p]),
        F = r.useMemo(() => O.filter((e) => p.has(e)), [O, p]),
        L = (0, s.bG)([eA.A], () => eA.A.getVoiceChannelId(), []),
        G = (0, s.bG)([li.A], () => li.A.getActiveNowChannelIds({ kind: li.u.Voice }), []),
        U = (0, s.bG)(
            [n1.A],
            () =>
                n1.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        P = r.useMemo(() => {
            let e, t, n, l;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (l = String(e.getFullYear() % 100).padStart(2, "0")),
                la(`${t}${n}${l}`)
            );
        }, []),
        V = r.useMemo(() => new Set(R), [R]),
        H = r.useMemo(() => w.filter((e) => !V.has(e)), [w, V]),
        Y = r.useMemo(() => F.filter((e) => !V.has(e)), [F, V]),
        K = r.useMemo(() => new Set(H), [H]),
        z = r.useMemo(() => G.filter((e) => !V.has(e) && !K.has(e) && p.has(e)), [G, V, K, p]),
        X = r.useMemo(() => {
            let e = [],
                t = new Set(),
                n = (n) => {
                    null == n || !p.has(n) || V.has(n) || t.has(n) || (t.add(n), e.push(n));
                };
            for (let t of (null != L && em.A.getChannel(L)?.isVocal() && n(L), Y)) {
                if (e.length >= 8) break;
                n(t);
            }
            let l = new Set(U),
                i = new Set([...V, ...H]),
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
                            shuffle: ((t = e.channel.id), la(`${P}:${t}`)),
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
        }, [g, p, L, V, H, Y, P, U]),
        B = r.useMemo(() => {
            let e = (e) => !0 === h[e],
                t = (e) => (e.voiceStates?.length ?? 0) > 0,
                n = [];
            if ("" !== a)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: eX.intl.string(tM.default.DUIbKP),
                        count: S.length,
                        rows: S.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: S.length,
                    }),
                    n
                );
            if (k.length > 0 && b > 0) {
                let l = k.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("FAVORITES") ? l.filter(t) : l;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eX.intl.string(tM.default.OskevP),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (H.length > 0) {
                let l = H.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("FRIENDS_IN_VOICE") ? l.filter(t) : l;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: eX.intl.string(tM.default["C+ojiQ"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (z.length > 0) {
                let l = z.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("ACTIVE_NOW") ? l.filter(t) : l;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: eX.intl.string(tM.default.eiie2x),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.length > 0) {
                let l = X.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("SUGGESTED_VOICE_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: eX.intl.string(tM.default["9ME4wE"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [h, a, k, b, z, H, S, X, m]),
        Z = r.useMemo(() => B.map((e) => e.length), [B]),
        W = r.useCallback(
            (e) => {
                for (let t = 0; t < B.length; t += 1) {
                    let n = B[t].rows.findIndex((t) => t.channelId === e);
                    if (-1 !== n) return { section: t, row: n };
                }
                return null;
            },
            [B],
        );
    tS({
        scrollerRef: v,
        favoriteTargetIds: k,
        getScrollTargetForTargetId: (e) => W(e),
        getFallbackScrollTarget: r.useCallback(() => {
            let e = B.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [B]),
        padding: 8,
        animate: !1,
    });
    let $ = (0, u.Dk)(() => {
            let e = new Set();
            for (let t of B) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [B]),
        { shownUserIds: Q, liveUserIds: q } = (0, s.cf)([em.A, eg.A], () => {
            let e = new Map();
            for (let t of g) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let l of $) {
                let i = em.A.getChannel(l),
                    r = i?.getGuildId?.() ?? i?.guild_id ?? null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(eV.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = D.A.isFriend(e),
                                l = D.A.isFriend(t);
                            return n && !l
                                ? -1
                                : !n && l
                                  ? 1
                                  : (nO.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                    (nO.A.getUserAffinity(e)?.vcProbability ?? 0);
                        }),
                        n.slice(0, 4)
                    );
                })(l, e.get(l)))
                    t.add(i), null != r && null != eg.A.getStreamForUser(i, r) && n.add(i);
            }
            return { shownUserIds: t, liveUserIds: n };
        }, [$, g]),
        J = (0, u.Dk)(() => Q, [Q]),
        ee = (0, u.Dk)(() => q, [q]);
    r.useEffect(() => {
        (0 !== J.size || 0 !== ee.size) && ls({ shownUserIds: lr(J), liveUserIds: lr(ee) });
    }, [J, ee]);
    let et = r.useCallback((e) => B[e], [B]),
        en = r.useCallback(
            (e) => {
                let { section: t } = e,
                    n = et(t);
                if (null == n) return null;
                let l = "SEARCH_RESULTS" !== n.kind,
                    r = l && !0 === h[n.key];
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.A, { children: n.title }),
                        (0, i.jsx)(ta, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: l,
                            onToggle: () => A(n.key),
                        }),
                    ],
                });
            },
            [h, et, A],
        ),
        el = r.useCallback(
            (n) => {
                let l = et(n.section);
                if (null == l) return null;
                let r = l.rows[n.row];
                if (null == r) return null;
                let s = `${l.key}:${r.channelId}`,
                    a = d.has(r.channelId);
                return (0, i.jsx)(
                    ll,
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
            [d, et, t, e, E],
        ),
        ei = r.useCallback(() => 40, []),
        er = r.useCallback(
            (e, t) => {
                let n = et(e);
                if (null == n) return 50;
                if (0 === n.rows.length) return 0;
                let l = n.rows[t];
                if (null == l || !d.has(l.channelId)) return 50;
                let i = em.A.getChannel(l.channelId),
                    r = Math.min((null != i ? n3.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [d, et],
        ),
        es = r.useCallback((e) => {
            l(e), v.current?.scrollToTop();
        }, []);
    return (0, i.jsxs)("div", {
        className: ts.kL,
        children: [
            (0, i.jsx)("div", {
                className: ts.MT,
                children: (0, i.jsx)(N.I, {
                    query: n,
                    onChange: es,
                    onClear: () => l(""),
                    placeholder: eX.intl.string(tM.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: C,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(x.sk, {
                            children: (e) =>
                                (0, i.jsx)(T.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eX.intl.string(eX.t.OGiMXJ),
                                    ref: (e) => {
                                        (v.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ts.p_,
                                    sectionHeight: ei,
                                    rowHeight: er,
                                    sidebarHeight: 0,
                                    renderSection: en,
                                    renderRow: el,
                                    sections: Z,
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
var lo = n(308368),
    ld = n(308528),
    lc = n(442433),
    lh = n(780907),
    lg = n(684013),
    lm = n(717398),
    lI = n(730852),
    lE = n(428249),
    lA = n(975732),
    lf = n(145567),
    lp = n(34307),
    lS = n(381941),
    lN = n(731854),
    lx = n(952866);
function lT() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = (0, d.b4)(),
        l = n?.id,
        c = n?.altId,
        h = (0, s.bG)([a.default], () => a.default.getCurrentUser()) ?? null,
        g = eN.Ay.useField("activeTab"),
        m = eN.Ay.useField("setActiveTab"),
        I = r.useCallback(
            (e) => {
                e !== g &&
                    (m(e),
                    (0, u.YX)(ez.uss.FRIENDS, {
                        type: u.Z5.TAB_SELECTED,
                        value: (function (e) {
                            switch (e) {
                                case o.x.FRIENDS:
                                    return u.IP.FRIEND_TAB_SELECTED;
                                case o.x.MESSAGES:
                                    return u.IP.MESSAGES_TAB_SELECTED;
                                case o.x.VOICE:
                                    return u.IP.VOICE_TAB_SELECTED;
                                default:
                                    return u.IP.FRIEND_TAB_SELECTED;
                            }
                        })(e),
                    }));
            },
            [g, m],
        ),
        E = (0, d.xl)(null != c ? c : l);
    return (0, i.jsxs)("div", {
        className: lx.kL,
        children: [
            (0, i.jsx)(t6, {
                currentUser: h,
                activity: E,
                currentGameName: n?.name ?? null,
                activeTab: g,
                onTabChange: I,
            }),
            (0, i.jsx)("div", {
                className: lx.Qs,
                children:
                    g === o.x.FRIENDS
                        ? (0, i.jsx)(tU, { onPrimaryAction: e, onContextMenu: t })
                        : g === o.x.MESSAGES
                          ? (0, i.jsx)(n0, { onPrimaryAction: e, onContextMenu: t })
                          : g === o.x.VOICE
                            ? (0, i.jsx)(lu, { onPrimaryAction: e, onContextMenu: t })
                            : null,
            }),
        ],
    });
}
let l_ = r.memo(function (e) {
    let { locked: t } = e,
        { handlePrimaryAction: l, handleContextMenu: s } = {
            handlePrimaryAction: r.useCallback((e) => {
                switch (e.type) {
                    case eK.c.OPEN_DIRECT_MESSAGE:
                        if (null == e.userId) return;
                        (async () => {
                            try {
                                await (0, lf.D$)({
                                    target: { kind: lf.bB.DM_USER, userId: e.userId, messageId: null },
                                    source: lp.B.FRIENDS_WIDGET_CLICK,
                                    widgetType: ez.uss.FRIENDS,
                                });
                            } catch {}
                        })(),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.CHAT,
                                userId: e.userId,
                                secondaryValue: "dm",
                            });
                        break;
                    case eK.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == e.channelId) return;
                        (0, lf.D$)({
                            target: {
                                kind: lf.bB.CHANNEL,
                                channelId: e.channelId,
                                guildId: e.guildId ?? null,
                                messageId: null,
                            },
                            source: lp.B.FRIENDS_WIDGET_CLICK,
                            widgetType: ez.uss.FRIENDS,
                        }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.CHAT,
                                userId: e.userId,
                                secondaryValue: "channel",
                            });
                        break;
                    case eK.c.CONNECT_VOICE_CHANNEL:
                        if (null == e.channelId) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.VOICE,
                            value: u.IP.CHANNEL_SELECTED,
                            secondaryValue: "voice",
                        }),
                            lI.default.selectVoiceChannel(e.channelId);
                        break;
                    case eK.c.DISCONNECT_VOICE_CHANNEL:
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.CALL_BUTTON,
                            value: u.IP.DISABLED,
                            secondaryValue: "voice",
                            userId: ns.default.getId(),
                        }),
                            lI.default.disconnect();
                        break;
                    case eK.c.ACCEPT_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lm.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.ACCEPT_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eK.c.DECLINE_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lm.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.DECLINE_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eK.c.CANCEL_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lm.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.CANCEL_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eK.c.SEND_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lm.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.SEND_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eK.c.OPEN_FRIEND_MODAL:
                        if (null == e.userId) return;
                        (0, lA.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId ?? void 0,
                            channelId: e.channelId,
                            appContext: ez.BRT.OVERLAY,
                        }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.PROFILE_OPENED,
                                userId: e.userId,
                            });
                        break;
                    case eK.c.SEARCH_FRIENDS:
                        (0, u.YX)(ez.uss.FRIENDS, { type: u.Z5.FRIEND_LIST, value: u.IP.SEARCH });
                        break;
                    case eK.c.SEND_ACTIVITY_INVITE:
                        if (null == e.userId || null == e.activity) return;
                        lo.A.sendActivityInviteUser({
                            type: ez.xL.JOIN,
                            userId: e.userId,
                            activity: e.activity,
                            location: ez.ThZ.UNLOCKED_OVERLAY,
                        }),
                            lg.A.track(ez.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                            (0, u.YX)(ez.uss.FRIENDS, { type: u.Z5.INVITE, value: u.IP.INVITE_SENT, userId: e.userId });
                        break;
                    case eK.c.JOIN:
                        if (null == e.userId || null == e.activity) return;
                        lh.Ay.join({
                            userId: e.userId,
                            sessionId: e.activity.session_id,
                            applicationId: e.activity.application_id,
                            channelId: null,
                            messageId: null,
                            source: ez.ThZ.UNLOCKED_OVERLAY,
                        });
                        break;
                    case eK.c.ASK_TO_JOIN:
                        if (null == e.userId || null == e.activity) return;
                        lo.A.sendActivityInviteUser({
                            type: ez.xL.JOIN_REQUEST,
                            userId: e.userId,
                            activity: e.activity,
                            location: ez.ThZ.UNLOCKED_OVERLAY,
                        }),
                            lg.A.track(ez.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.INVITE,
                                value: u.IP.JOIN_REQUEST_SENT,
                                userId: e.userId,
                            });
                        break;
                    case eK.c.SEND_GAME_INVITE_MESSAGE: {
                        if (null == e.userId) return;
                        let t = e.gameEntry,
                            n = e.userId;
                        (async () => {
                            try {
                                if (
                                    (await (0, lf.D$)({
                                        target: { kind: lf.bB.DM_USER, userId: n, messageId: null },
                                        source: lp.B.FRIENDS_WIDGET_CLICK,
                                        widgetType: ez.uss.FRIENDS,
                                    }),
                                    null == t)
                                )
                                    return;
                                let e = await ld.A.getOrEnsurePrivateChannel(n),
                                    l = em.A.getChannel(e);
                                if (null == l) return;
                                !0 === t.extra.fake_inventory_item
                                    ? await (0, lE.J)({
                                          channel: l,
                                          content: eX.intl.formatToPlainString(eX.t.UVBA9g, {
                                              gameName: t.extra.game_name,
                                          }),
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: lS.Hx.OVERLAY,
                                      })
                                    : await (0, lE.d)({
                                          channel: l,
                                          content: eX.intl.string(eX.t.DwAcMz),
                                          entry: t,
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: lS.Hx.OVERLAY,
                                      });
                            } catch {}
                        })(),
                            lg.A.track(ez.HAw.OVERLAY_GAME_INVITE_SENT, {
                                target_user_id: n,
                                target_content_entry_id: t?.id,
                            }),
                            (0, u.YX)(ez.uss.FRIENDS, { type: u.Z5.INVITE, value: u.IP.INVITE_SENT, userId: e.userId });
                        break;
                    }
                    case eK.c.USER_CONTEXT_MENU:
                    case eK.c.OPEN_SETTINGS_MODAL:
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SETTINGS_OPENED,
                            userId: e.userId,
                        });
                        break;
                    case eK.c.TAB_CHANGE: {
                        let t = e.tab;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.FRIEND_LIST,
                            value: ((e) => {
                                switch (e) {
                                    case o.x.FRIENDS:
                                        return u.IP.FRIEND_TAB_SELECTED;
                                    case o.x.MESSAGES:
                                        return u.IP.MESSAGES_TAB_SELECTED;
                                    case o.x.VOICE:
                                        return u.IP.VOICE_TAB_SELECTED;
                                    default:
                                        return u.IP.UNKNOWN;
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
                    case eK.K.FRIEND_ROW: {
                        let { user: t, friendGroupId: l } = e;
                        if (null == t) return;
                        (0, lc.L3)(
                            e.event,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("74389"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("34552"),
                                    n.e("8757"),
                                    n.e("89673"),
                                    n.e("85968"),
                                    n.e("60195"),
                                    n.e("68403"),
                                    n.e("29787"),
                                    n.e("97558"),
                                    n.e("94000"),
                                    n.e("91994"),
                                    n.e("76665"),
                                    n.e("76273"),
                                    n.e("72883"),
                                    n.e("81609"),
                                    n.e("23490"),
                                    n.e("77687"),
                                ]).then(n.bind(n, 341354));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        user: t,
                                        appContext: ez.BRT.OVERLAY,
                                        widgetType: ez.uss.FRIENDS,
                                        friendGroupId: l,
                                        showManageFriendGroupsItems: !0,
                                    });
                            },
                            { context: ez.BRT.OVERLAY },
                        ),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.SETTINGS_OPENED,
                                secondaryValue: "friend-row",
                            });
                        break;
                    }
                    case eK.K.FRIEND_GROUP: {
                        let { groupId: t, groupName: l } = e;
                        if (null == t || null == l) return;
                        (0, lc.L3)(e.event, async () => {
                            let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                            return (n) => (0, i.jsx)(e, { ...n, groupId: t, groupName: l });
                        }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.SETTINGS_OPENED,
                                secondaryValue: "friend-group",
                            });
                        break;
                    }
                    case eK.K.DM_CHANNEL: {
                        let { channel: t, user: l } = e;
                        if (null == t || null == l) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "dm",
                        }),
                            (0, lc.L3)(e.event, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("74389"),
                                    n.e("80203"),
                                    n.e("685"),
                                    n.e("12697"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("34552"),
                                    n.e("93103"),
                                    n.e("8757"),
                                    n.e("91763"),
                                    n.e("89673"),
                                    n.e("85968"),
                                    n.e("60195"),
                                    n.e("68403"),
                                    n.e("29787"),
                                    n.e("71210"),
                                    n.e("97558"),
                                    n.e("94000"),
                                    n.e("88342"),
                                    n.e("91994"),
                                    n.e("38730"),
                                    n.e("42451"),
                                    n.e("76665"),
                                    n.e("98965"),
                                    n.e("35313"),
                                    n.e("76273"),
                                    n.e("36564"),
                                    n.e("45996"),
                                    n.e("52229"),
                                    n.e("792"),
                                    n.e("92822"),
                                    n.e("23427"),
                                    n.e("29422"),
                                    n.e("9291"),
                                    n.e("72883"),
                                    n.e("38056"),
                                    n.e("7059"),
                                    n.e("8829"),
                                    n.e("81609"),
                                    n.e("98199"),
                                    n.e("41175"),
                                    n.e("60816"),
                                    n.e("23490"),
                                    n.e("95049"),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        user: l,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: ez.uss.FRIENDS,
                                    });
                            });
                        break;
                    }
                    case eK.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "group-dm",
                        }),
                            (0, lc.L3)(e.event, async () => {
                                let { default: t } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("91763"),
                                    n.e("38730"),
                                    n.e("81609"),
                                    n.e("46149"),
                                    n.e("53416"),
                                    n.e("77927"),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        channel: e.channel,
                                        selected: !1,
                                        widgetType: ez.uss.FRIENDS,
                                    });
                            });
                        break;
                    case eK.K.GUILD_TEXT_CHANNEL: {
                        let { channel: t, guild: l } = e;
                        if (null == t || null == l) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-text-channel",
                        }),
                            t.isModeratorReportChannel?.()
                                ? (0, lc.L3)(e.event, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("91763"),
                                          n.e("38730"),
                                          n.e("35321"),
                                          n.e("50033"),
                                          n.e("43266"),
                                          n.e("81609"),
                                          n.e("56985"),
                                      ]).then(n.bind(n, 95616));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: ez.uss.FRIENDS });
                                  })
                                : (0, lc.L3)(e.event, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("93190"),
                                          n.e("91763"),
                                          n.e("38730"),
                                          n.e("35321"),
                                          n.e("50033"),
                                          n.e("43266"),
                                          n.e("9004"),
                                          n.e("44058"),
                                          n.e("91377"),
                                          n.e("81609"),
                                          n.e("66540"),
                                          n.e("54036"),
                                      ]).then(n.bind(n, 813407));
                                      return (n) =>
                                          (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: ez.uss.FRIENDS });
                                  });
                        break;
                    }
                    case eK.K.VOICE_CHANNEL: {
                        let { channel: t, guild: l } = e;
                        if (null == t || null == l) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-voice-channel",
                        }),
                            (0, lc.L3)(e.event, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("47459"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93103"),
                                    n.e("91763"),
                                    n.e("38730"),
                                    n.e("35321"),
                                    n.e("50033"),
                                    n.e("52229"),
                                    n.e("43266"),
                                    n.e("9004"),
                                    n.e("44058"),
                                    n.e("81609"),
                                    n.e("94138"),
                                    n.e("58262"),
                                    n.e("18663"),
                                    n.e("21905"),
                                ]).then(n.bind(n, 769192));
                                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: ez.uss.FRIENDS });
                            });
                        break;
                    }
                    case eK.K.VOICE_USER: {
                        let { user: t, channelId: l, guild: r } = e;
                        if (null == t || null == l) return;
                        let s = r?.id ?? null;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-voice-user",
                        }),
                            (0, lc.L3)(e.event, async () => {
                                let { default: l } = await Promise.all([
                                    n.e("74389"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("34552"),
                                    n.e("8757"),
                                    n.e("89673"),
                                    n.e("85968"),
                                    n.e("60195"),
                                    n.e("21921"),
                                    n.e("68403"),
                                    n.e("76418"),
                                    n.e("97558"),
                                    n.e("94000"),
                                    n.e("82263"),
                                    n.e("91994"),
                                    n.e("39171"),
                                    n.e("49145"),
                                    n.e("70314"),
                                    n.e("27435"),
                                    n.e("58980"),
                                ]).then(n.bind(n, 535503));
                                return (n) =>
                                    (0, i.jsx)(l, {
                                        ...n,
                                        user: t,
                                        guildId: s ?? void 0,
                                        channelId: e.channelId,
                                        mediaEngineContext: lN.x.DEFAULT,
                                        appContext: ez.BRT.OVERLAY,
                                    });
                            });
                        break;
                    }
                    default:
                        e.type;
                }
            }, []),
        };
    return t ? null : (0, i.jsx)(lT, { onPrimaryAction: l, onContextMenu: s });
});
