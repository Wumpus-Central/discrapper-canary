n.d(t, { $: () => l_, A: () => ly });
var l,
    i = n(477900),
    r = n(582128),
    s = n(17928),
    a = n(287809),
    u = n(810412),
    o = n(914853),
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
    p = n(285796),
    S = n(834730),
    N = n(683438),
    x = n(312138),
    T = n(475825),
    _ = n(803306),
    y = n(928039),
    C = n(485947),
    v = n(545059),
    R = n(290863),
    D = n(994500),
    b = n(184809),
    j = n(996439),
    k = n(973196),
    M = n(320448),
    O = n(847374);
function w(e) {
    let { isCollapsed: t, size: n = "md", className: l } = e;
    return t
        ? (0, i.jsx)(M._, { size: n, color: "currentColor", className: l })
        : (0, i.jsx)(O.a, { size: n, color: "currentColor", className: l });
}
var F = n(172218),
    G = n(778712),
    L = n(935154),
    U = n(97808),
    P = n(408278),
    V = n(933832),
    H = n(789645),
    Y = n(565829),
    K = n(283973),
    X = n(960076),
    z = n(566903),
    B = n(397244),
    Z = n(714114),
    W = n(394871),
    $ = n(864436),
    Q = n(835072),
    q = n(87664),
    J = n(47167),
    ee = n(20805),
    et = n(506326),
    en = n(365185),
    el = n(490427),
    ei = n(609425),
    er = n(922301),
    es = n(660184),
    ea = n(769015),
    eu = n(834757),
    eo = n(145497),
    ed = n(534400),
    ec = n(941971),
    eh = n(854627),
    eg = n(10862),
    em = n(616356),
    eI = n(734057),
    eE = n(71393),
    eA = n(573163),
    ef = n(309010),
    ep = n(461213),
    eS = n(562153),
    eN = n(193663),
    ex = n(576420),
    eT = n(583964);
function e_(e) {
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
        [T, _] = r.useState(!1),
        y = r.useCallback(() => _(!0), []),
        C = r.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || _(!1);
        }, []),
        v = r.useRef(null),
        [R, D] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (null == l || v.current === l) return;
            v.current = l;
            let e = Date.now();
            l > e || e - l > ex.WS || D(!0);
        }, [l]),
        (0, i.jsxs)("div", {
            ref: s,
            className: h()(eT.nM, f, { [eT.SS]: n }),
            onFocus: y,
            onBlur: C,
            onAnimationEnd: (e) => {
                "friendsWidgetRowRecentlyAdded" === e.animationName && D(!1);
            },
            children: [
                null != a ? (0, i.jsx)("div", { className: eT.oT, children: a }) : null,
                (0, i.jsx)(eN.A, {
                    innerClassName: h()(eT.bL, p),
                    className: R ? eT.fc : void 0,
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
                    hovered: N || T,
                    ...S,
                    children: null != c ? (0, i.jsx)("div", { className: eT.cm, children: c(N || T) }) : null,
                }),
            ],
        })
    );
}
var ey = n(220884),
    eC = n(6161),
    ev = n(681154),
    eR = n(974690),
    eD = n(820081),
    eb = n(297152),
    ej = n(241541),
    ek = n(559647),
    eM = n(173054),
    eO = n(933958),
    ew = n(776677),
    eF = n(206589),
    eG = n(55730),
    eL = n(672979),
    eU = n(498642),
    eP = n(480595),
    eV = n(576705),
    eH = n(977997),
    eY = n(689168),
    eK = n(935208),
    eX = n(67103),
    ez = n(652215),
    eB = n(375708);
function eZ(e) {
    return e.find((e) => (0, eG.A)(e, ez.jUm.JOIN));
}
function eW(e, t) {
    return null == t ? eZ(e) : (e.find((e) => (0, eG.A)(e, ez.jUm.JOIN) && e.application_id === t) ?? eZ(e));
}
function e$(e) {
    let { user: t, friendActivities: n, currentUserPlayingActivities: l, gameProfileEntry: u, onPrimaryAction: o } = e,
        [c, h] = r.useState(!1),
        g = r.useRef(null);
    r.useEffect(
        () => () => {
            null != g.current && clearTimeout(g.current);
        },
        [],
    );
    let m = (0, s.bG)([a.default, eI.A, eE.A, eU.A, D.A, ef.Ay, eH.A, eV.A, eP.A, ep.A, eO.Ay, eY.A], () => {
            let e = a.default.getCurrentUser(),
                i = (0, d.qv)(),
                r = i?.altId ?? i?.id,
                s = eW(n, r),
                o = eW(l, r);
            if (null != s && null != s.application_id) {
                if (eY.A.getState(s.application_id, ez.xL.JOIN) === ez.eAD.LOADING)
                    return { kind: "joining", activity: s };
                let n = (0, ew.A)({
                    user: t,
                    activity: s,
                    application: null,
                    channelId: null,
                    currentUser: e,
                    isEmbedded: !1,
                    ChannelStore: eI.A,
                    GuildStore: eE.A,
                    GuildMemberCountStore: eU.A,
                    RelationshipStore: D.A,
                    SelectedChannelStore: ef.Ay,
                    VoiceStateStore: eH.A,
                    PermissionStore: eV.A,
                    LocalActivityStore: eP.A,
                    SelfPresenceStore: ep.A,
                    EmbeddedActivitiesStore: eO.Ay,
                });
                if (n === ew.o.JOINED) return { kind: "joined", activity: s };
                if (n === ew.o.CAN_JOIN) return { kind: "join", activity: s };
                if (null == o) return { kind: "ask_to_join", activity: s };
            }
            if (null != o)
                return {
                    kind: n.some((e) => e.application_id === o.application_id && (0, eF.w)(e, o))
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
                            id: eK.default.fromTimestamp(e),
                            author_id: h,
                            extra: {
                                type: "played_game_extra",
                                game_name: c.name,
                                application_id: c.application_id ?? "",
                                fake_inventory_item: !0,
                            },
                            content_type: ev.ContentInventoryEntryType.PLAYED_GAME,
                            author_type: eC.ContentInventoryAuthorType.USER,
                            participants: [],
                            traits: [{ type: eR.K.IS_LIVE, is_live: !0 }],
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
                                        return eX.c.ASK_TO_JOIN;
                                    case "invite_to_activity":
                                        return eX.c.SEND_ACTIVITY_INVITE;
                                    case "send_game_invite_message":
                                        return eX.c.SEND_GAME_INVITE_MESSAGE;
                                    case "join":
                                    case "joining":
                                    case "joined":
                                        return eX.c.JOIN;
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
    let E = (function (e, t) {
            if (t) return eD.B;
            switch (e) {
                case "ask_to_join":
                    return eb.E;
                case "invite_to_activity":
                    return ej.D;
                case "send_game_invite_message":
                    return ek.SendMessageIcon;
                case "join":
                case "joining":
                case "joined":
                    return eM.M;
            }
        })(m.kind, c),
        A = (function (e) {
            switch (e) {
                case "ask_to_join":
                    return eB.intl.string(eB.t.OKsSCR);
                case "invite_to_activity":
                    return eB.intl.string(eB.t["3fRySx"]);
                case "send_game_invite_message":
                    return eB.intl.string(eB.t.XHxDIV);
                case "join":
                    return eB.intl.string(eB.t.VJlc0S);
                case "joining":
                    return eB.intl.string(eB.t.bf6Ci7);
                case "joined":
                    return eB.intl.string(eB.t.KC26NR);
            }
        })(m.kind);
    return (0, i.jsx)(f.m, {
        text: A,
        "aria-label": A,
        children: (0, i.jsx)(P.K, {
            icon: E,
            "aria-label": A,
            size: "sm",
            variant: "icon-only",
            onClick: I,
            disabled: c || "joining" === m.kind,
        }),
    });
}
var eQ = n(808380),
    eq = n(661531),
    eJ = n(429913),
    e0 = n(263577),
    e1 = n(790381),
    e3 = n(266080),
    e5 = n(70191);
let e2 = { [eQ.Y.XBOX]: e3.A, [eQ.Y.PLAYSTATION]: e1.A };
function e6(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: l, platformIconSizePx: s } = e,
        a = (0, d.b4)(),
        u = r.useMemo(() => {
            let e = t.find(e5.A);
            if (null != a) {
                let n = a.altId ?? a.id;
                return t.find((e) => e.application_id === n) ?? e;
            }
            return e;
        }, [t, a]),
        o = (0, eJ.h)(u?.application_id);
    return null == u
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: l, platformIconSizePx: r } = e,
                  s = t?.extra?.platform,
                  a = null != s ? e2[s] : null,
                  u =
                      null != a
                          ? (0, i.jsx)(a, { width: r, height: r, color: eq.A.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  o = n?.getIconURL(r),
                  d = null != o ? (0, i.jsx)(e0.V, { src: o, alt: n?.name, size: r }) : null;
              return (0, i.jsx)(ea.A, { game: n, size: l, unknownGameIconFallback: u ?? d });
          })({ gameProfileEntry: n, gameApplication: o, gameIconSize: l, platformIconSizePx: s });
}
let e4 = G._3.SIZE_32,
    e9 = [et.iq, et.tR, et.K7, et.sp, et.MK];
function e8(e) {
    let t,
        { channel: n, textVariant: l, activities: u, applicationStream: o } = e,
        d = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        c = (0, L.S3)(ez.clD.ONLINE),
        h = (0, J.Ay)(n),
        m = (0, s.bG)([eE.A], () => eE.A.getGuild(n.getGuildId())),
        I = m?.name;
    (0, q.A)(d?.id);
    let E = o?.discoverable !== !1 ? o : null,
        A = (0, eu.AO)(E),
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
        className: eT.fE,
        children: [
            ((t = p?.length > 0),
            (0, i.jsxs)("div", {
                className: eT._9,
                children: [
                    !t &&
                        !f &&
                        null != m &&
                        (0, i.jsxs)("div", {
                            className: eT.j1,
                            children: [
                                (0, i.jsx)(eo.Ay, { guild: m, iconSize: 14 }),
                                (0, i.jsx)(S.E, {
                                    className: eT.J5,
                                    variant: l,
                                    color: "currentColor",
                                    lineClamp: 1,
                                    children: I,
                                }),
                                (0, i.jsx)(M._, { size: "xxs", color: "currentColor" }),
                            ],
                        }),
                    (0, i.jsx)(eg.A, { size: "custom", color: c, channel: n, className: eT.WT }),
                    (0, i.jsx)(S.E, { variant: l, color: "currentColor", lineClamp: 1, className: eT.Qo, children: h }),
                ],
            })),
            (function () {
                if (null == N) return null;
                let { text: e } = (0, z.A)(N, !1),
                    t = (0, Q.f)(N);
                return null == e && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: eT._9,
                          children: [
                              null != t ? (0, i.jsx)($.A, { icon: t, className: eT.WT }) : void 0,
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
function e7(e) {
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
        } = (0, eh.A)({ userId: g, size: e4, animateOnHover: !0, guildId: null }),
        A = r.useMemo(() => {
            let e = h ?? "no-group",
                t = l ?? "no-relationship",
                n = a ? "suggestion" : "not-suggestion";
            return `friends-widget-friend-row:${g}:${e}:${t}:${n}`;
        }, [h, a, l, g]),
        f = (0, s.yK)([ep.A], () =>
            [...ep.A.getActivities(!0), ...ep.A.getHiddenActivities()].filter(
                (e) => e.type === ez.$pd.PLAYING && null != e.application_id,
            ),
        ),
        { voiceChannel: p } = (0, Z.Ay)({ userId: t.id }),
        {
            status: S,
            applicationStream: N,
            isMobile: x,
            newStatus: T,
        } = (0, s.cf)([R.A, em.A], () => {
            let e = R.A.getStatus(t.id),
                l = em.A.getAnyStreamForUser(t.id),
                i = R.A.isMobileOnline(t.id),
                r = (0, X.A)(n ?? []) ? ez.clD.STREAMING : e;
            return { status: e, applicationStream: l, isMobile: i, newStatus: r };
        }, [t.id, n]),
        _ = f.length > 0,
        y = r.useCallback(
            (e) => {
                c?.(g, e, _);
            },
            [c, g, _],
        ),
        C = (0, F.K)(y),
        v = r.useMemo(() => n?.find(e5.A), [n]),
        D = (0, en.A)({ activity: v, user: t }),
        b = (0, ee.zD)(D) ? D : void 0,
        j = r.useCallback(() => {
            if (null != b) {
                let e = b.traits,
                    t = { ...b, traits: e.slice(0, 3) };
                return (0, i.jsx)(et.mG, {
                    location: et.N5.FRIENDS_POPOUT,
                    className: eT.cV,
                    children: e9.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                });
            }
            if ((0, B.A)({ activities: n, status: S, applicationStream: N, voiceChannel: p })) {
                let e = !(0, el.A)({
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
                    ? (0, i.jsx)(e8, {
                          channel: p,
                          textVariant: "text-xs/medium",
                          activities: n ?? [],
                          applicationStream: N,
                      })
                    : (0, i.jsx)(W.A, {
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
        intersectionRef: C,
        isMobile: x,
        newStatus: T,
        status: S,
        currentUserPlayingActivities: f,
        renderSubtext: j,
        renderUserContextMenu: r.useCallback(
            (e) => {
                d?.({ type: eX.K.FRIEND_ROW, event: e, user: t, friendGroupId: h });
            },
            [h, d, t],
        ),
    };
}
function te(e) {
    return (0, s.bG)([eI.A, eA.Ay], () => {
        let t = eI.A.getDMFromUserId(e) ?? null;
        return null != t && eA.Ay.hasUnread(t);
    }, [e]);
}
let tt = r.memo((e) => {
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
            status: C,
            currentUserPlayingActivities: v,
            renderSubtext: R,
            renderUserContextMenu: D,
        } = e7({
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
        b = te(t.id),
        { guildId: j, channelId: k } = (0, s.cf)([ef.Ay, eI.A], () => {
            let e = ef.Ay.getVoiceChannelId() ?? ef.Ay.getChannelId();
            return { guildId: null != e ? eI.A.getChannel(e)?.guild_id : null, channelId: e };
        }),
        M = (0, ei.A)({ userId: t.id, guildId: j }),
        O = eS.Ay.useName(j, k, t),
        w = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), c?.({ type: eX.c.OPEN_DIRECT_MESSAGE, userId: t.id }), l?.();
            },
            [l, c, t.id],
        ),
        F = n.some(e5.A),
        G = (0, d.b4)(),
        L = r.useMemo(() => {
            let e = G?.altId ?? G?.id;
            return null != e && n.some((t) => (0, e5.A)(t) && t.application_id === e);
        }, [n, G]),
        P = C !== ez.clD.ONLINE && C !== ez.clD.IDLE && C !== ez.clD.DND,
        V = (0, ex.A2)(t.id),
        H = r.useCallback(
            (e) => {
                let l = [],
                    r = e || L;
                return (
                    e && l.push((0, i.jsx)(ey.j, { tab: o.x.FRIENDS, targetId: t.id }, "favorite")),
                    r &&
                        l.push(
                            (0, i.jsx)(
                                e$,
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
                                    className: eT.im,
                                    children: (0, i.jsx)(e6, {
                                        activities: n,
                                        gameProfileEntry: N,
                                        gameIconSize: ea.M.SMALL,
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
        listItemId: x,
        outerRef: T,
        leftIndicator: (0, i.jsx)(ec.A, { unread: b }),
        isVisuallyOffline: P,
        recentlyAddedTimestampMs: I ? V : null,
        onClick: w,
        onContextMenu: D,
        avatar: (0, i.jsx)(U.eu, {
            ...S,
            size: e4,
            src: p,
            isMobile: _,
            isTyping: !1,
            status: y,
            className: eT.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: f,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: eT.QV,
            children: [
                (0, i.jsx)(es.A, {
                    userName: O,
                    displayNameStyles: M,
                    effectDisplayType: er.G.STATIC,
                    textClassName: eT.Xh,
                }),
                (0, i.jsx)(ed.Ay, { userId: t.id, disableGuildProfile: !0 }),
            ],
        }),
        secondaryText: R(),
        rightActions: H,
    });
});
tt.displayName = "FriendListRow";
let tn = r.memo((e) => {
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
            gameProfileEntry: E,
            listItemId: A,
            intersectionRef: p,
            isMobile: S,
            newStatus: N,
            status: x,
            renderSubtext: T,
            renderUserContextMenu: _,
        } = e7({
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
        y = te(t.id),
        C = (0, ei.A)({ userId: t.id, guildId: null }),
        v = eS.Ay.useName(null, null, t),
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
                e.preventDefault(), e.stopPropagation(), o?.({ type: eX.c.OPEN_DIRECT_MESSAGE, userId: t.id });
            },
            [o, t.id],
        ),
        M = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eX.c.ACCEPT_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        O = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eX.c.DECLINE_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        w = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eX.c.CANCEL_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        F = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    R || (j(), o?.({ type: eX.c.SEND_FRIEND_REQUEST, userId: t.id }));
            },
            [t.id, o, R, j],
        ),
        G = n.some((e) => {
            let { type: t } = e;
            return t === ez.$pd.PLAYING;
        }),
        L = x !== ez.clD.ONLINE && x !== ez.clD.IDLE && x !== ez.clD.DND;
    return (0, i.jsx)(e_, {
        listItemId: A,
        outerRef: p,
        leftIndicator: (0, i.jsx)(ec.A, { unread: y }),
        isVisuallyOffline: L,
        onClick: k,
        onContextMenu: _,
        avatar: (0, i.jsx)(U.eu, {
            ...I,
            size: e4,
            src: m,
            isMobile: S,
            isTyping: !1,
            status: N,
            className: eT.my,
            "aria-label": t.username,
            statusTooltip: !0,
            avatarDecoration: g,
        }),
        primaryText: (0, i.jsx)(es.A, {
            userName: v,
            displayNameStyles: C,
            effectDisplayType: er.G.PLAIN,
            textClassName: eT.Xh,
        }),
        secondaryText: T(),
        rightActions: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    G
                        ? (0, i.jsx)("div", {
                              className: eT.im,
                              children: (0, i.jsx)(e6, {
                                  activities: n,
                                  gameProfileEntry: E,
                                  gameIconSize: ea.M.XSMALL,
                                  platformIconSizePx: 20,
                              }),
                          })
                        : null,
                    l === ez.eA$.PENDING_INCOMING
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(f.m, {
                                      text: eB.intl.string(eB.t.MMlhsr),
                                      children: (0, i.jsx)(P.K, {
                                          "aria-label": eB.intl.string(eB.t.MMlhsr),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: V.CheckmarkLargeIcon,
                                          onClick: M,
                                          disabled: R,
                                      }),
                                  }),
                                  (0, i.jsx)(f.m, {
                                      text: eB.intl.string(eB.t.ytCpKs),
                                      children: (0, i.jsx)(P.K, {
                                          "aria-label": eB.intl.string(eB.t.ytCpKs),
                                          size: "sm",
                                          variant: "secondary",
                                          icon: H.P,
                                          onClick: O,
                                          disabled: R,
                                      }),
                                  }),
                              ],
                          })
                        : l === ez.eA$.PENDING_OUTGOING
                          ? (0, i.jsx)(f.m, {
                                text: eB.intl.string(eB.t["bTfA//"]),
                                children: (0, i.jsx)(P.K, {
                                    "aria-label": eB.intl.string(eB.t["bTfA//"]),
                                    size: "sm",
                                    variant: "secondary",
                                    icon: Y.l,
                                    onClick: w,
                                    disabled: R,
                                }),
                            })
                          : s
                            ? (0, i.jsx)(f.m, {
                                  text: eB.intl.string(eB.t.w5uwoI),
                                  children: (0, i.jsx)(P.K, {
                                      "aria-label": eB.intl.string(eB.t.w5uwoI),
                                      size: "sm",
                                      variant: "secondary",
                                      icon: K.R,
                                      onClick: F,
                                      disabled: R,
                                  }),
                              })
                            : null,
                ],
            }),
    });
});
tn.displayName = "FriendRequestRow";
let tl = r.memo((e) =>
    "friend_request" ===
    (function (e) {
        let { relationshipType: t, isSuggestion: n } = e;
        return t === ez.eA$.PENDING_INCOMING || t === ez.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend";
    })(e)
        ? (0, i.jsx)(tn, { ...e })
        : (0, i.jsx)(tt, { ...e }),
);
tl.displayName = "FriendRow";
var ti = n(196765),
    tr = n(537812);
let ts = (0, ti.v)()(
    (0, tr.Zr)((e) => ({ showSuggestions: !0, setShowSuggestions: (t) => e({ showSuggestions: t }) }), {
        name: "overlay-friends-popout-settings",
        partialize: (e) => ({ showSuggestions: e.showSuggestions }),
    }),
);
var ta = n(103767);
function tu(e) {
    let { title: t, count: n, isCollapsed: l, canCollapse: r, onToggle: s, rightAccessory: a } = e,
        u = l && null != n ? `${t} (${n})` : t,
        o = r ? (0, i.jsx)(w, { isCollapsed: l, size: "md", className: ta.t4 }) : null;
    return (0, i.jsx)(C.A, {
        className: ta.uW,
        children: (0, i.jsxs)("div", {
            className: ta.bV,
            children: [
                (0, i.jsxs)(E.D, {
                    onClick: () => r && s(),
                    "aria-hidden": !0,
                    className: r ? ta.Ws : void 0,
                    children: [u, o],
                }),
                a,
            ],
        }),
    });
}
var to = n(228366),
    td = n(956753);
let tc = new Set(Object.values(o.x)),
    th = {
        [o.x.FRIENDS]: { FAVORITES: !0, FRIEND_REQUESTS: !0, OFFLINE: !0 },
        [o.x.MESSAGES]: { FAVORITES: !0 },
        [o.x.VOICE]: {},
    },
    tg = { ...th };
function tm(e, t) {
    return !!(e === o.x.FRIENDS && t.startsWith("GROUP:")) || (!!tc.has(e) && t in th[e]);
}
function tI() {
    return (tg = { ...th }), !0;
}
class tE extends s.Ay.Store {
    static displayName = "FriendsWidgetCollapsibleStore";
    initialize() {
        tg = { ...th };
    }
    getCollapsedSectionOverridesForTab(e) {
        return tg[e];
    }
    isSectionCollapsedByDefault(e, t) {
        return tm(e, t);
    }
}
function tA(e) {
    return (0, td.v$)(e, "FriendsWidgetCollapsibleStore");
}
let tf = new tE(
    to.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED: tA(function (e) {
                  let t = e.tab;
                  if (!tc.has(t)) return !1;
                  let n = (function (e) {
                      if ("string" != typeof e) return null;
                      let t = e.trim();
                      return "" === t ? null : t;
                  })(e.sectionKey);
                  if (null == n) return !1;
                  let l = tg[t] ?? {},
                      i = l[n],
                      r = tm(t, n),
                      s = { ...l, [n]: !(i ?? r) };
                  return (tg = { ...tg, [t]: s }), !0;
              }),
              FRIENDS_LIST_POPOUT_MOUNTED: tA(tI),
              OVERLAY_INITIALIZE: tA(tI),
              LOGOUT: tA(tI),
          },
);
function tp(e) {
    let { tab: t, sectionKey: n } = e;
    return to.h.dispatch({ type: "OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED", tab: t, sectionKey: n });
}
var tS = n(406595);
function tN(e) {
    let {
            scrollerRef: t,
            favoriteTargetIds: n,
            getScrollTargetForTargetId: l,
            getFallbackScrollTarget: i,
            padding: s = 8,
            animate: a = !1,
        } = e,
        u = ex.Ay.useState((e) => e.recentlyAddedFavoriteTimestampMsByKey),
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
                            (!(l - t > ex.WS) &&
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
var tx = (((l = {}).BEFORE = "before"), (l.AFTER = "after"), l),
    tT = n(870391),
    t_ = n(379078),
    ty = n(704554),
    tC = n(403362),
    tv = n(185657);
function tR(e) {
    return { user: e.user, activities: e.activities, nickname: e.nickname, relationshipType: e.relationshipType };
}
function tD(e) {
    return e.map(tR);
}
function tb(e, t) {
    let [, n] = e,
        [, l] = t;
    return n === l;
}
function tj(e) {
    let { user: t, activities: n, nickname: l } = e;
    return [t.username, t.globalName, l, ...n.map((e) => e.name)].filter(tC.Vq);
}
let tk = { searchType: t_.n.FUZZY, searchStringGenerator: tj, sortType: t_.r.JARO_WINKLER, throttleMs: 100 };
function tM(e, t) {
    let [n, l] = r.useState(t),
        i = r.useCallback(() => l(t), [t]);
    return (0, ty.RT)(e, t, l, tk), [n, i];
}
var tO = n(530478),
    tw = n(690132);
function tF(e) {
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
        A = I && c === tx.BEFORE,
        f = I && c === tx.AFTER;
    return (0, i.jsx)(C.A, {
        className: h()(ta.uW, { [tw.EU]: m, [tw.Me]: null != o && o === t, [tw.hV]: I, [tw.nH]: A, [tw._M]: f }),
        children: (0, i.jsx)("div", {
            ...g(t, m),
            onContextMenu: a,
            children: (0, i.jsxs)(E.D, {
                onClick: s,
                "aria-hidden": !0,
                className: ta.Ws,
                children: [l, (0, i.jsx)(w, { isCollapsed: r, size: "md", className: ta.t4 })],
            }),
        }),
    });
}
function tG(e) {
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
function tU() {}
function tP(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: l } = e,
        [d, c] = r.useState(new Set()),
        [h, m] = r.useState(new Set()),
        C = r.useCallback(
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
        M = (0, u.Dk)(() => h, [h]);
    r.useEffect(() => {
        0 !== b.size && tL({ shownUserIds: tG(b), liveUserIds: tG(M) });
    }, [b, M]);
    let O = (function () {
            let [e] = (0, s.bG)(
                [tv.A, tT.A, ep.A],
                () => {
                    let e = tT.A.getGroups(),
                        [t, n] = tv.A.getRows(tv.j.FRIEND_REQUESTS),
                        l = tD(t),
                        i = tD(tv.A.getRows(tv.j.SUGGESTIONS)[0]),
                        r = tD(tv.A.getRows(tv.j.SAME_ACTIVITY)[0]),
                        s = tD(tv.A.getRows(tv.j.ACTIVITIES)[0]),
                        a = tD(tv.A.getRows(tv.j.IN_GAME)[0]),
                        u = tD(tv.A.getRows(tv.j.ONLINE)[0]),
                        o = tD(tv.A.getRows(tv.j.OFFLINE)[0]),
                        d = e.map((e) => {
                            let [t] = tv.A.getRows(`GROUP:${e.id}`);
                            return { id: e.id, name: e.name, users: tD(t) };
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
                            online: u,
                            offline: o,
                            currentActivityName: c,
                        },
                        g,
                    ];
                },
                [],
                tb,
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
                [l, i] = tM(t, e.friendRequests),
                [s, a] = tM(t, e.suggestions),
                [u, o] = tM(t, e.sameActivity),
                [d, c] = tM(t, e.activities),
                [h, g] = tM(t, e.inGame),
                [m, I] = tM(t, e.online),
                [E, A] = tM(t, e.offline),
                f = r.useMemo(() => {
                    if ("" === t.trim()) return e.groups;
                    let n = t.toLowerCase();
                    return e.groups
                        .map((e) => {
                            let t = e.users.filter((e) => tj(e).some((e) => null != e && e.toLowerCase().includes(n)));
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
        })(O),
        { showSuggestions: U, setShowSuggestions: P } = ts(),
        V = w.trim().length > 0,
        H = r.useMemo(() => L.groups.filter((e) => e.users.length > 0), [L.groups]),
        {
            draggedGroupId: Y,
            dropTargetGroupId: K,
            dropTargetPosition: X,
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
            groupIds: r.useMemo(() => O.groups.map((e) => e.id), [O.groups]),
            isDisabled: V,
            onCommitNewOrder: v.A.reorderGroups,
        }),
        [B, Z] = (0, s.bG)([tS.A], () => tS.A.getFavoriteTargetIdsForTab(o.x.FRIENDS), [], j.D),
        W = (0, s.bG)(
            [a.default, R.A, D.A],
            () => {
                let e = [];
                for (let t of B) {
                    let n = a.default.getUser(t);
                    null != n && e.push({ user: n, activities: R.A.getActivities(t), nickname: D.A.getNickname(t) });
                }
                return e;
            },
            [B],
            s.My,
        ),
        $ = r.useRef(new Set());
    r.useEffect(() => {
        for (let e of B)
            null == a.default.getUser(e) &&
                ($.current.has(e) ||
                    ($.current.add(e),
                    (0, _.getUser)(e).catch(() => {
                        $.current.delete(e);
                    })));
    }, [B]);
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
        ee = (0, s.bG)([tf], () => tf.getCollapsedSectionOverridesForTab(o.x.FRIENDS), []),
        et = r.useRef(null),
        en = (0, y.A)("friends-popout", et),
        el = r.useCallback((e) => {
            tp({ tab: o.x.FRIENDS, sectionKey: e });
        }, []),
        ei = r.useCallback((e) => ee[e] ?? tf.isSectionCollapsedByDefault(o.x.FRIENDS, e), [ee]),
        er = r.useCallback(
            (e) => {
                e.stopPropagation(), P(!1);
            },
            [P],
        ),
        es = r.useCallback(
            (0, g.debounce)(
                () => {
                    t?.({ type: eX.c.SEARCH_FRIENDS });
                },
                1e3,
                { leading: !0, trailing: !1 },
            ),
            [t],
        ),
        ea = r.useCallback(
            (e) => {
                F(e), es(), et.current?.scrollToTop();
            },
            [F, es],
        ),
        eu = r.useCallback(() => {
            G(), es(), et.current?.scrollToTop();
        }, [G, es]),
        eo = (0, k.A)(),
        ed = r.useMemo(() => {
            function e(e) {
                let t = R.A.getStatus(e);
                return t !== ez.clD.ONLINE && t !== ez.clD.IDLE && t !== ez.clD.DND;
            }
            if (J) return [{ kind: "EMPTY_STATE", key: "EMPTY_STATE", title: "", count: 0, length: 1, rows: [] }];
            let t = [];
            if (q) {
                let n = ei("FAVORITES") ? Q.filter((t) => !e(t.user.id)) : Q;
                t.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eB.intl.string(tO.default.GKTlS6),
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
                    title: eB.intl.formatToPlainString(eB.t.xxFCW8, { count: e.length }),
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
                    title: eB.intl.string(tO.default.trKJoT),
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
                    title: eB.intl.string(eB.t.TxqPQR),
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
                    title: eB.intl.string(eB.t.qm9dSj),
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
                    title: eB.intl.string(eB.t.WbGtnH),
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
                    title: eB.intl.string(eB.t.Vv0abJ),
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
                    u = "GROUP" === l.kind,
                    o = r && "FRIEND_REQUESTS" !== l.kind ? `${s} (${a})` : s,
                    d =
                        u && null != n
                            ? (e) => {
                                  n({ type: eX.K.FRIEND_GROUP, event: e, groupId: l.group?.id ?? "", groupName: s });
                              }
                            : void 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(A.A, { children: eB.intl.format(eB.t.Uaqbke, { title: s, count: a }) }),
                        u
                            ? (0, i.jsx)(tF, {
                                  groupId: l.group?.id ?? "",
                                  groupName: s,
                                  displayText: o,
                                  isCollapsed: r,
                                  onToggle: () => el(l.key),
                                  onContextMenu: d,
                                  isReorderDisabled: V,
                                  draggedGroupId: Y,
                                  dropTargetGroupId: K,
                                  dropTargetPosition: X,
                                  getDragHandleProps: z,
                              })
                            : (0, i.jsx)(tu, {
                                  title: s,
                                  count: "FRIEND_REQUESTS" === l.kind ? void 0 : a,
                                  isCollapsed: r,
                                  canCollapse: !0,
                                  onToggle: () => el(l.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === l.kind
                                          ? (0, i.jsx)(f.m, {
                                                text: eB.intl.string(eB.t.N86XcP),
                                                children: (0, i.jsx)(E.D, {
                                                    className: ta.LQ,
                                                    "aria-label": eB.intl.string(eB.t.N86XcP),
                                                    onClick: er,
                                                    children: (0, i.jsx)(p.a, { size: "xs", color: "currentColor" }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [ec, ei, el, V, Y, K, X, z, er, n],
        ),
        eg = r.useCallback(
            (e) => {
                let l;
                if (J)
                    return (0, i.jsx)(
                        "div",
                        {
                            className: ta.y7,
                            children: (0, i.jsx)(S.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: eB.intl.string(eB.t["7sW4h1"]),
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
                              children: (0, i.jsx)(tl, {
                                  ...s,
                                  closeParentPopout: tU,
                                  isSuggestion: "SUGGESTIONS" === r.kind,
                                  shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                                  appContext: ez.BRT.OVERLAY,
                                  onPrimaryAction: t,
                                  onContextMenu: n,
                                  onFriendVisible: C,
                                  friendGroupId: l,
                              }),
                          },
                          `${e.section}:${s.user.id}`,
                      );
            },
            [ec, J, tU, t, n, C],
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
    tN({
        scrollerRef: et,
        favoriteTargetIds: B,
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
        className: ta.kL,
        children: [
            (0, i.jsx)("div", {
                className: ta.MT,
                children: (0, i.jsx)(N.I, {
                    query: w,
                    onChange: ea,
                    onClear: eu,
                    placeholder: eo ? eB.intl.string(eB.t.KA1U4B) : eB.intl.string(eB.t.lLDtTK),
                    disabled: eo,
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: en,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(x.sk, {
                            children: (e) =>
                                (0, i.jsx)(T.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eB.intl.string(eB.t.TdEu5X),
                                    ref: (e) => {
                                        (et.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ta.p_,
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
var tV = n(687966),
    tH = n(983851),
    tY = n(730134),
    tK = n(775602),
    tX = n(410540),
    tz = n(302223),
    tB = n(853390),
    tZ = n(885386),
    tW = n(763827),
    t$ = n(741961),
    tQ = n(486020),
    tq = n(427262),
    tJ = n(589051),
    t0 = n(545807),
    t1 = n(659540);
let t3 = r.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, t0.A)(),
        [l, i] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = n.setInterval(() => i(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let s = Math.max(0, (l - t) / 1e3);
    return (0, tB.fU)(s);
});
t3.displayName = "OverlayElapsedTime";
let t5 = r.memo(function () {
    let e = (0, t0.A)(),
        [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t);
    }, [e]);
    let l = (0, s.bG)([tW.A], () => tW.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, tB.fU)(l / 1e3);
});
function t2(e) {
    var t;
    let n,
        { currentUser: l, activity: a, currentGameName: u } = e,
        o = l?.id ?? null,
        d = (0, tJ.Mn)("UserActivityBanner"),
        c = (0, tq.tx)(l),
        h = d ? c : (l?.globalName ?? l?.username),
        g = (0, ei.A)({ userId: o, guildId: null }),
        { isMobileOnline: m, status: I } = (0, s.cf)(
            [R.A],
            () =>
                null == o
                    ? { isMobileOnline: void 0, status: void 0 }
                    : { isMobileOnline: R.A.isMobileOnline(o), status: R.A.getStatus(o) },
            [o],
        ),
        E = (0, s.bG)([ef.Ay], () => ef.Ay.getVoiceChannelId()),
        A = (0, s.bG)([eI.A], () => (null != E ? eI.A.getChannel(E) : null), [E]),
        f = (0, J.Ay)(A),
        p = (0, tX.A)(o ?? "0") ?? null,
        N = null != o ? p : null,
        x =
            null == (n = (0, z.A)(a, !0).text ?? u)
                ? null
                : a?.type === ez.$pd.PLAYING || null == a
                  ? eB.intl.formatToPlainString(eB.t.lFApmz, { game: n })
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
            : ((0, tQ.z)({ id: l.id, banner: l.banner, canAnimate: tZ.kt.getSetting(), size: 600 }) ?? null);
    return (0, i.jsxs)("div", {
        className: t1.cI,
        children: [
            (0, i.jsx)("div", { className: t1.CK, style: { backgroundImage: null != y ? `url(${y})` : void 0 } }),
            (0, i.jsxs)("div", {
                className: t1.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: t1.iy,
                        children: [
                            (0, i.jsx)(tY.A, { user: l, isMobile: m, status: I, className: t1.my, size: G._3.SIZE_40 }),
                            (0, i.jsxs)("div", {
                                className: t1.ic,
                                children: [
                                    (0, i.jsx)(es.A, {
                                        userName: h,
                                        textClassName: t1.Xh,
                                        displayNameStyles: g,
                                        effectDisplayType: er.G.ANIMATED,
                                    }),
                                    (function () {
                                        switch (_.type) {
                                            case "activity":
                                                return (0, i.jsxs)("div", {
                                                    className: t1.nU,
                                                    children: [
                                                        (0, i.jsx)(tV.GameControllerIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: t1.Wo,
                                                        }),
                                                        (0, i.jsx)(S.E, {
                                                            className: t1.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: _.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, i.jsxs)("div", {
                                                    className: t1.nU,
                                                    children: [
                                                        (0, i.jsx)(tH.H, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: t1.Wo,
                                                        }),
                                                        (0, i.jsx)(S.E, {
                                                            className: t1.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: _.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, i.jsx)("div", {
                                                    className: t1.nU,
                                                    children: (0, i.jsx)(tz.A, {
                                                        activity: _.customStatusActivity,
                                                        className: t1.tR,
                                                        emojiClassName: t1.qp,
                                                        textClassName: t1.Yg,
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
                                  className: t1.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, i.jsx)(t3, { startTimestampMs: _.startTimestampMs }),
                              })
                        : "voice_call" === _.type
                          ? null == E
                              ? null
                              : (0, i.jsx)(S.E, {
                                    className: t1.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, i.jsx)(t5, {}),
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
        } = (0, s.cf)([tS.A, eA.Ay, eI.A, eH.A, t$.A, a.default], () => {
            let e = a.default.getCurrentUser()?.id ?? null,
                [t] = tS.A.getFavoriteTargetIdsForTab(o.x.FRIENDS),
                [n] = tS.A.getFavoriteTargetIdsForTab(o.x.MESSAGES),
                [l] = tS.A.getFavoriteTargetIdsForTab(o.x.VOICE);
            function i(e) {
                return eA.Ay.hasUnread(e) || eA.Ay.getMentionCount(e) > 0;
            }
            function r(t) {
                let n = t$.A.getTypingUsers(t);
                for (let t in n) if (t !== e) return !0;
                return !1;
            }
            function s(e) {
                return eI.A.getDMFromUserId(e) ?? null;
            }
            let u = t.some((e) => {
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
                    let t = eH.A.getVoiceStatesForChannel(e);
                    for (let e in t) return !0;
                    return !1;
                }),
                friendsHasTypingInFavorites: d,
                messagesHasTypingInFavorites: h,
            };
        }, []),
        E = r.useMemo(() => ({ [o.x.FRIENDS]: c, [o.x.MESSAGES]: h, [o.x.VOICE]: g }), [c, h, g]),
        A = (0, s.bG)([tK.Ay], () => tK.Ay.useReducedMotion),
        f = r.useMemo(() => ({ [o.x.FRIENDS]: !A && m, [o.x.MESSAGES]: !A && I, [o.x.VOICE]: !1 }), [A, m, I]);
    return (0, i.jsxs)("div", {
        className: t1.kL,
        children: [
            (0, i.jsx)(t2, { currentUser: t, activity: n, currentGameName: l }),
            (0, i.jsx)("div", {
                className: t1.vR,
                role: "tablist",
                "aria-label": eB.intl.string(eB.t.TdEu5X),
                children: [
                    { id: o.x.FRIENDS, label: eB.t.TdEu5X },
                    { id: o.x.MESSAGES, label: eB.t.OIgYlQ },
                    { id: o.x.VOICE, label: eB.t.K3lovD },
                ].map((e) => {
                    let { id: t, label: n } = e,
                        l = !0 === E[t],
                        r = !0 === f[t];
                    return (0, i.jsx)(
                        t4,
                        {
                            tab: t,
                            label: eB.intl.formatToPlainString(n, {}),
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
        o = r ? h()(t1.OD, s && t1.S) : null;
    return (0, i.jsxs)(E.D, {
        role: "tab",
        "aria-selected": l,
        className: h()(t1.Mf, l && t1.jP, u),
        onClick: () => a(t),
        children: [
            null != o ? (0, i.jsx)("span", { className: o, "aria-hidden": !0 }) : null,
            (0, i.jsx)(S.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
        ],
    });
}
t5.displayName = "OverlayVoiceCallElapsedTime";
var t9 = n(141157),
    t8 = n(645959),
    t7 = n(812993),
    ne = n(602853),
    nt = n(713654),
    nn = n(636537),
    nl = n(439372),
    ni = n(723176),
    nr = n(626584),
    ns = n(617710);
n(95701);
var na = n(280450),
    nu = n(973153);
class no {
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
let nd = new nr.A("MessagePreviewManager");
class nc extends nl.A {
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
        eI.A.getBasicChannel(e);
    }
    remoteTick = m().debounce(
        (() => {
            var e = this;
            return async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!ns.A.isConnected()) {
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
                        nd.log(`couldn't fetch message previews (attempt: ${t}, error: ${n})`),
                            (e.remoteTicking = !1),
                            e.remoteTick(t + 1);
                    }
                }
            };
        })(),
        100,
    );
    async fetchLocal(e) {
        if (!(!nu.A.isLocalFetchNeeded(e) || this.localFetching.has(e)))
            try {
                nd.verbose(`fetching local previews (via: database, guild_id: ${e})`), this.localFetching.add(e);
                let t = na.default.getId(),
                    n = await ni.A.messages()?.getMostRecents(e);
                null != n &&
                    t === na.default.getId() &&
                    to.h.dispatch({
                        type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                        guildId: e,
                        messages: n.map((e) => {
                            let [t, n] = e;
                            return [t, n.message];
                        }),
                    });
            } catch (e) {
                nd.log(`couldn't fetch local previews (error: ${e})`);
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
                      nd.verbose(
                          `fetching guild previews (via: gateway, guild_id: ${e}, channel_ids: ${n.join(", ")})`,
                      ),
                      ns.A.getSocket().requestLastMessages(e, n),
                      Promise.resolve()
                  ),
              );
    }
    fetchDms(e) {
        let t = e.nextWants(30);
        return 0 === t.length
            ? Promise.resolve()
            : e.try(t, async () => {
                  nd.verbose(`fetching dm previews (via: http, channel_ids: ${t.join(", ")})`);
                  let e = (
                      await nn.Bo.post({ url: ez.Rsh.MESSAGE_PREVIEWS, body: { channel_ids: t }, rejectWithError: !1 })
                  ).body;
                  to.h.dispatch({ type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: e });
              });
    }
    syncChannel(e, t) {
        let n = this.remote.get(e);
        null != n && nu.A.isLatest(e, t) && n.removeWant(t);
    }
    getOrCreate(e) {
        return this.remote.has(e) || this.remote.set(e, new no()), this.remote.get(e);
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
        let t = eI.A.getBasicChannel(e.channelId),
            n = t?.guild_id ?? null;
        if (null != t) for (let t of e.messages ?? []) this.syncChannel(n, t.channel_id);
    }
    handleThreadListSync(e) {
        let t = this.remote.get(e.guildId);
        if (null != t) for (let n of e.mostRecentMessages ?? []) t.removeWant(n.channel_id);
    }
}
let nh = new nc();
function ng(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        l = e.id,
        [i, a] = (0, s.yK)([nu.A], () => (t ? [null, !0] : [nu.A.message(n, l), nu.A.isLatest(n, l)]));
    return (
        (0, r.useEffect)(() => {
            null == l || a || nh.addWant(l);
        }, [l, a]),
        i
    );
}
var nm = n(172491),
    nI = n(912156),
    nE = n(191023),
    nA = n(428689),
    nf = n(432017),
    np = n(588975),
    nS = n(173936),
    nN = n(797285),
    nx = n(978940),
    nT = n(960027),
    n_ = n(46054),
    ny = n(448761),
    nC = n(470710),
    nv = n(198052),
    nR = n(806931),
    nD = n(427930),
    nb = n(59318),
    nj = n(944052),
    nk = n(763754),
    nM = n(861464),
    nO = n(521981),
    nw = n(427358),
    nF = n(898663);
function nG(e) {
    let { icon: t, ...n } = e;
    switch (t) {
        case "image":
            return (0, i.jsx)(nE.ImageIcon, { ...n });
        case "video":
            return (0, i.jsx)(nA.VideoIcon, { ...n });
        case "audio":
            return (0, i.jsx)(nf.T, { ...n });
        case "attachment":
            return (0, i.jsx)(np.P, { ...n });
        case "link":
            return (0, i.jsx)(nS.LinkIcon, { ...n });
        case "sticker":
            return (0, i.jsx)(nN.t, { ...n });
        case "call-active":
            return (0, i.jsx)(nx._, { ...n });
        case "call-ended":
            return (0, i.jsx)(nT.z, { ...n });
    }
}
let nL = r.memo(function (e) {
        let { message: t } = e;
        return (0, nO.Ay)(t, { formatInline: !0, noStyleAndInteraction: !0 }).content;
    }),
    nU = r.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, nO.jp)(n_.A.parseInlineReply, { content: t, channelId: n });
    });
function nP(e) {
    let { channel: t, typingUserIds: n } = e,
        l = (0, s.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let l = [];
                    for (let i of e) {
                        let e = a.default.getUser(i);
                        null != e && l.push(eS.Ay.getName(n, t, e));
                    }
                    let [i, r, s, u] = l;
                    return null == i
                        ? null
                        : null == r
                          ? eB.intl.format(eB.t.lJ9sZX, { a: i })
                          : null == s
                            ? eB.intl.format(eB.t.rB0CUa, { a: i, b: r })
                            : null == u
                              ? eB.intl.format(eB.t.StKThj, { a: i, b: r, c: s })
                              : eB.intl.string(eB.t.uVDhqZ);
                })(n, t.id, t.guild_id),
            [n, t.id, t.guild_id],
        );
    return null == l
        ? null
        : (0, i.jsx)("div", { className: nF.Sl, children: (0, i.jsx)("span", { className: nF.BK, children: l }) });
}
function nV(e) {
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
                        [nC.A, nv.A],
                        () =>
                            nC.A.isCallActive(n, l) &&
                            nv.A.getParticipants(n).some((e) => e.type === nR.lp.USER && !e.ringing),
                        [n, l],
                    )),
                o = (0, s.bG)([na.default], () => na.default.getId()),
                d = (0, nk.Ay)(e).nick,
                c = e.type !== ny.l.USER_JOIN && e.author.id === o ? eB.intl.string(eB.t.LuZzxn) : d,
                h = (0, s.bG)([a.default], () => (e.mentions.length > 0 ? a.default.getUser(e.mentions[0]) : void 0)),
                m = (0, nk.d8)(h, t).nick;
            return (function (e, t) {
                let { isBlocked: n, isIgnored: l, authorNick: i } = t;
                if (n) return { type: "text", text: eB.intl.string(eB.t.XAkOo2) };
                if (l) return { type: "text", text: eB.intl.string(eB.t["G7p6v/"]) };
                if (
                    (function (e) {
                        switch (e.type) {
                            case ny.l.DEFAULT:
                            case ny.l.CHANGELOG:
                            case ny.l.REPLY:
                            case ny.l.CHAT_INPUT_COMMAND:
                            case ny.l.CONTEXT_MENU_COMMAND:
                            case ny.l.POLL_RESULT:
                            case ny.l.AUTO_MODERATION_ACTION:
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
                            return { type: "text", text: eB.intl.string(eB.t.slFYgi) };
                        if (e.attachments.length > 0) {
                            let t = e.attachments.every((e) => (0, nb.u)(e.filename)),
                                n = !t && e.attachments.every((e) => (0, nb.AE)(e.filename)),
                                l = !t && !n && e.attachments.every((e) => (0, nb.L8)(e.filename));
                            return t
                                ? {
                                      type: "text",
                                      text: eB.intl.formatToPlainString(eB.t.h4pFfU, { count: e.attachments.length }),
                                      trailingIcon: "image",
                                  }
                                : n
                                  ? {
                                        type: "text",
                                        text: eB.intl.formatToPlainString(eB.t.SJ6pPX, { count: e.attachments.length }),
                                        trailingIcon: "video",
                                    }
                                  : l
                                    ? {
                                          type: "text",
                                          text: eB.intl.formatToPlainString(eB.t.fnO3hK, {
                                              count: e.attachments.length,
                                          }),
                                          trailingIcon: "audio",
                                      }
                                    : {
                                          type: "text",
                                          text: eB.intl.formatToPlainString(eB.t["89ihS8"], {
                                              count: e.attachments.length,
                                          }),
                                          trailingIcon: "attachment",
                                      };
                        }
                        if (e.embeds.length > 0) {
                            let t = e.embeds.every((e) => null != e.url && (0, nb.Zj)(e.url)),
                                n = !t && e.embeds.every((e) => null != e.url && (0, nb.r1)(e.url)),
                                l = !t && !n && e.embeds.every((e) => null != e.url && (0, nb.L8)(e.url));
                            if (t)
                                return {
                                    type: "text",
                                    text: eB.intl.formatToPlainString(eB.t.h4pFfU, { count: e.embeds.length }),
                                    trailingIcon: "image",
                                };
                            if (n)
                                return {
                                    type: "text",
                                    text: eB.intl.formatToPlainString(eB.t.SJ6pPX, { count: e.embeds.length }),
                                    trailingIcon: "video",
                                };
                            if (l)
                                return {
                                    type: "text",
                                    text: eB.intl.formatToPlainString(eB.t.fnO3hK, { count: e.embeds.length }),
                                    trailingIcon: "audio",
                                };
                            else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle)
                                return { type: "markup", markup: e.embeds[0].rawTitle };
                            else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription)
                                return { type: "markup", markup: e.embeds[0].rawDescription };
                            else
                                return {
                                    type: "text",
                                    text: eB.intl.formatToPlainString(eB.t["9XuYjs"], { count: e.embeds.length }),
                                    trailingIcon: "link",
                                };
                        }
                        return e.stickerItems.length > 0
                            ? { type: "text", text: e.stickerItems[0].name, trailingIcon: "sticker" }
                            : e.isPoll()
                              ? {
                                    type: "text",
                                    text: eB.intl.formatToPlainString(eB.t.ImizdM, { question: e.poll?.question.text }),
                                }
                              : (0, nD.A)(e)
                                ? { type: "text", text: eB.intl.string(eB.t["9ddYKt"]) }
                                : void 0;
                    })(e);
                    if (null != t) return { ...t, authorLabel: i };
                }
                let r = (function (e, t) {
                    let { currentUserId: n, authorNick: l, otherUser: i, otherUserNick: r, isCallActive: s } = t;
                    return e.type === ny.l.RECIPIENT_ADD && null != r
                        ? {
                              type: "text",
                              text: eB.intl.formatToPlainString(eB.t.MMN2Jq, {
                                  username: l,
                                  usernameHook: g.identity,
                                  otherUsername: r,
                                  otherUsernameHook: g.identity,
                              }),
                          }
                        : e.type === ny.l.RECIPIENT_REMOVE && null != r
                          ? {
                                type: "text",
                                text:
                                    e.author.id === i?.id
                                        ? eB.intl.formatToPlainString(eB.t["5v2xa8"], {
                                              username: l,
                                              usernameHook: g.identity,
                                          })
                                        : eB.intl.formatToPlainString(eB.t.L2FyVq, {
                                              username: l,
                                              usernameHook: g.identity,
                                              otherUsername: r,
                                              otherUsernameHook: g.identity,
                                          }),
                            }
                          : e.type === ny.l.CALL
                            ? {
                                  type: "text",
                                  text: s
                                      ? eB.intl.string(eB.t["NGg/fm"])
                                      : null == e.call || e.call.participants.includes(n)
                                        ? eB.intl.string(eB.t.v05Xd6)
                                        : eB.intl.string(eB.t["2CnhoI"]),
                                  color: s ? "text-feedback-positive" : void 0,
                                  trailingIcon: s ? "call-active" : "call-ended",
                              }
                            : e.type === ny.l.CHANNEL_NAME_CHANGE
                              ? {
                                    type: "text",
                                    text: eB.intl.formatToPlainString(eB.t.oItgEw, {
                                        username: l,
                                        usernameHook: g.identity,
                                        channelName: e.content,
                                    }),
                                }
                              : e.type === ny.l.CHANNEL_ICON_CHANGE
                                ? {
                                      type: "text",
                                      text: eB.intl.formatToPlainString(eB.t.OEdU6X, {
                                          username: l,
                                          usernameHook: g.identity,
                                      }),
                                  }
                                : e.type === ny.l.CHANNEL_PINNED_MESSAGE
                                  ? {
                                        type: "text",
                                        text: eB.intl.formatToPlainString(eB.t.vfkjqx, {
                                            username: l,
                                            usernameHook: g.identity,
                                        }),
                                    }
                                  : e.type === ny.l.USER_JOIN
                                    ? {
                                          type: "text",
                                          text: eB.intl.formatToPlainString(nM.A.getSystemMessageUserJoin(e.id), {
                                              username: l,
                                              usernameHook: g.identity,
                                          }),
                                      }
                                    : e.type === ny.l.THREAD_CREATED
                                      ? {
                                            type: "text",
                                            text: eB.intl.formatToPlainString(eB.t.SGaUAU, {
                                                actorName: l,
                                                actorHook: g.identity,
                                                threadName: e.content,
                                                threadOnClick: g.identity,
                                            }),
                                        }
                                      : e.type === ny.l.PREMIUM_REFERRAL
                                        ? {
                                              type: "text",
                                              text: eB.intl.formatToPlainString(eB.t.lieTqU, { username: l }),
                                          }
                                        : e.type === ny.l.STAGE_START
                                          ? {
                                                type: "text",
                                                text: eB.intl.formatToPlainString(eB.t.aZtRW8, {
                                                    username: l,
                                                    usernameOnClick: g.identity,
                                                    topic: e.content,
                                                }),
                                            }
                                          : e.type === ny.l.STAGE_END
                                            ? {
                                                  type: "text",
                                                  text: eB.intl.formatToPlainString(eB.t.vMJhvG, {
                                                      username: l,
                                                      usernameOnClick: g.identity,
                                                      topic: e.content,
                                                  }),
                                              }
                                            : e.type === ny.l.STAGE_SPEAKER
                                              ? {
                                                    type: "text",
                                                    text: eB.intl.formatToPlainString(eB.t.V4uCm4, {
                                                        username: l,
                                                        usernameOnClick: g.identity,
                                                    }),
                                                }
                                              : e.type === ny.l.STAGE_TOPIC
                                                ? {
                                                      type: "text",
                                                      text: eB.intl.formatToPlainString(eB.t.ro3RM0, {
                                                          username: l,
                                                          usernameOnClick: g.identity,
                                                          topic: e.content,
                                                      }),
                                                  }
                                                : e.type === ny.l.VOICE_SESSION
                                                  ? { type: "text", text: (0, nj.fn)(e) }
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
    switch (r.type) {
        case "text":
            t = r.text;
            break;
        case "markup":
            t = (0, i.jsx)(nU, { markup: r.markup, channelId: l.channel_id });
            break;
        case "message":
            t = (0, i.jsx)(nL, { message: r.message });
    }
    return (0, i.jsxs)("div", {
        className: h()(nF.Sl, { [nF.Vz]: "text-feedback-positive" === o }),
        children: [
            (0, i.jsxs)("span", { className: nF.BK, children: [null != u && `${u}: `, t] }),
            null != d && (0, i.jsx)(nG, { icon: d, size: "xxs", color: "currentColor", className: nF.sl }),
        ],
    });
}
function nH(e) {
    let { channel: t, message: n, showTypingPreview: l } = e,
        r = (0, s.bG)([a.default], () => {
            if (!l) return [];
            let e = a.default.getCurrentUser()?.id ?? null;
            var n = t.id;
            let i = t$.A.getTypingUsers(n),
                r = [];
            for (let t in i) t !== e && r.push(t);
            return r.sort((e, t) => {
                let n = +!!D.A.isFriend(e),
                    l = +!!D.A.isFriend(t);
                if (n !== l) return l - n;
                let i = nw.A.getUserAffinity(e)?.communicationProbability ?? 0;
                return (nw.A.getUserAffinity(t)?.communicationProbability ?? 0) - i;
            });
        }, [t.id, l]);
    return r.length > 0
        ? (0, i.jsx)(nP, { channel: t, typingUserIds: r })
        : null == n
          ? null
          : (0, i.jsx)(nV, { channel: t, message: n });
}
var nY = n(680049),
    nK = n(240516);
function nX(e) {
    return (0, s.bG)([t$.A, a.default], () => {
        if (null == e) return !1;
        let t = a.default.getCurrentUser()?.id ?? null,
            n = t$.A.getTypingUsers(e.id);
        for (let e in n) if (e !== t) return !0;
        return !1;
    }, [e]);
}
function nz(e) {
    return (0, i.jsx)(t7.hV, { count: e });
}
function nB(e) {
    let { channelId: t, listItemId: n, mentionCount: l, unread: r } = e,
        s = (0, J.Ay)(eI.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, i.jsx)(e_, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(ec.A, { unread: r }),
        avatar: (0, i.jsx)(U.eu, { src: void 0, "aria-hidden": !0, size: G._3.SIZE_32 }),
        primaryText: (0, i.jsx)("span", {
            children: (0, i.jsx)(S.E, {
                className: eT.Xh,
                variant: "text-sm/medium",
                color: "text-muted",
                children: s,
            }),
        }),
        rightActions: () => (l > 0 ? nz(l) : null),
    });
}
function nZ(e) {
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
        m = (0, J.Ay)(t, !1) ?? "???",
        I = nX(t),
        E = ng(t, !1),
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
                let n = t.isMultiUserDM() ? eX.K.GROUP_DM_CHANNEL : eX.K.DM_CHANNEL;
                h?.({ type: n, event: e, channel: t, user: A ?? void 0 });
            },
            [t, h, A],
        ),
        x = t.isMultiUserDM() || (t.isPrivate() && t.recipients.length >= 2),
        T = r.useCallback(() => {
            c?.({ type: eX.c.OPEN_TEXT_CHAT_CHANNEL, channelId: g, guildId: null });
        }, [g, c]);
    return (0, i.jsx)(e_, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(ec.A, { unread: d }),
        onClick: T,
        onContextMenu: N,
        avatar: (0, i.jsx)(nm.h, {
            channel: t,
            user: A,
            "aria-hidden": !0,
            size: G._3.SIZE_32,
            status: f,
            isMobile: p,
            isTyping: I,
            mentionCount: l,
            isMentionLowImportance: u,
        }),
        primaryText: (0, i.jsx)("div", {
            className: eT.QV,
            children: (0, i.jsx)(S.E, {
                className: eT.Xh,
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
                      children: (0, i.jsx)(nH, { channel: t, message: E }),
                  })
                : null,
        rightActions: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [l > 0 ? nz(l) : null, e && x ? (0, i.jsx)(ey.j, { tab: o.x.MESSAGES, targetId: g }) : null],
            }),
    });
}
function nW(e) {
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
        E = (0, s.bG)([eE.A], () => (null != I ? (eE.A.getGuild(I) ?? null) : null), [I]),
        A = (0, J.Ay)(n, !1) ?? "???",
        f = nX(n),
        p = (0, s.bG)([t$.A, a.default, D.A, nw.A], () => {
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
                              return r >= nK.u.HIGH_AFFINITY_MINIMUM
                                  ? "HIGH_AFFINITY"
                                  : r > 0
                                    ? "LOW_AFFINITY"
                                    : "NONE";
                          })(s, [i, r]);
                })(n, [t$.A, a.default, D.A, nw.A])
            ) {
                case "FRIEND":
                    return eq.A.colors.STATUS_ONLINE.resolve({ theme: nY.NJ.DARK, saturation: 1 }).hex();
                case "HIGH_AFFINITY":
                    return eq.A.colors.STATUS_ONLINE.resolve({ theme: nY.NJ.DARK, saturation: 0.7 }).hex();
                case "LOW_AFFINITY":
                    return eq.A.colors.STATUS_ONLINE.resolve({ theme: nY.NJ.DARK, saturation: 0.4 }).hex();
                default:
                    return null;
            }
        }, [n]),
        N = ng(n, !1),
        x = (0, ne.r)(eq.A.colors.TEXT_STRONG),
        T = (0, ne.r)(eq.A.colors.TEXT_MUTED),
        _ = d || u > 0 ? "text-strong" : "text-muted",
        y = d || u > 0 ? x : T,
        C = r.useCallback(
            (e) => {
                g?.({ type: eX.K.GUILD_TEXT_CHANNEL, event: e, channel: n, guild: E });
            },
            [n, E, g],
        ),
        v = r.useCallback(() => {
            h?.({ type: eX.c.OPEN_TEXT_CHAT_CHANNEL, channelId: m, guildId: I });
        }, [m, I, h]);
    return (0, i.jsx)(e_, {
        listItemId: l,
        recentlyAddedTimestampMs: c,
        leftIndicator: (0, i.jsx)(ec.A, { unread: d }),
        onClick: v,
        onContextMenu: C,
        avatar: (0, i.jsx)(nI.A, {
            channel: n,
            guild: E ?? void 0,
            size: nI.Q.SMALL_32,
            isTyping: f,
            typingFillColor: p ?? void 0,
        }),
        primaryText: (0, i.jsxs)("div", {
            className: eT.QV,
            children: [
                null == (t = (0, nt.gU)(n, E)) ? null : (0, i.jsx)(t, { color: y.hex(), size: "xxs", className: eT.p }),
                (0, i.jsx)(S.E, { className: eT.Xh, variant: "text-sm/medium", color: _, children: A }),
            ],
        }),
        secondaryText: (0, i.jsx)(S.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsx)(nH, { channel: n, message: N, showTypingPreview: !0 }),
        }),
        rightActions: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [u > 0 ? nz(u) : null, e ? (0, i.jsx)(ey.j, { tab: o.x.MESSAGES, targetId: m }) : null],
            }),
    });
}
function n$(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: l, onPrimaryAction: r, onContextMenu: a } = e,
        u = (0, s.bG)([eI.A], () => eI.A.getChannel(t), [t]),
        {
            mentionCount: o,
            unread: d,
            isMentionLowImportance: c,
        } = (0, s.cf)(
            [eA.Ay],
            () => ({
                mentionCount: eA.Ay.getMentionCount(t),
                isMentionLowImportance: eA.Ay.getIsMentionLowImportance(t),
                unread: eA.Ay.hasUnread(t),
            }),
            [t],
        ),
        h = (0, ex.A2)(t);
    return null == u
        ? (0, i.jsx)(nB, { channelId: t, listItemId: n, mentionCount: o, unread: d })
        : u.isPrivate()
          ? (0, i.jsx)(nZ, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                isMentionLowImportance: c,
                unread: d,
                onPrimaryAction: r,
                onContextMenu: a,
            })
          : (0, i.jsx)(nW, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                unread: d,
                recentlyAddedTimestampMs: l ? h : null,
                onPrimaryAction: r,
                onContextMenu: a,
            });
}
var nQ = n(91868);
function nq(e) {
    return Array.from(e).sort();
}
let nJ = (0, g.throttle)(
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
    n0 = {
        searchType: t_.n.REGEX,
        sortType: t_.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t } = e,
                n = [(0, J.m1)(t, a.default, D.A), t.name, t.id];
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
            let l = null != t.guild_id ? (eE.A.getGuild(t.guild_id)?.name ?? null) : null;
            return null != l && n.push(l), n.filter(tC.Vq);
        },
        throttleMs: 100,
    };
function n1() {
    let e,
        { onPrimaryAction: t, onContextMenu: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [l, a] = r.useState(""),
        d = l.trim().toLowerCase(),
        c =
            ((e = (0, t9.Dz)()),
            (0, s.yK)([t8.A, eI.A], () => {
                let t = [];
                for (let e of t8.A.getPrivateChannelIds()) {
                    let n = eI.A.getChannel(e);
                    null != n && t.push({ channel: n, voiceStates: [] });
                }
                for (let n of e) t.push(n);
                return t;
            }, [e])),
        [h, g] = r.useState([]);
    (0, ty.RT)(l, c, g, n0);
    let m = r.useRef(null),
        E = (0, y.A)("friends-widget-messages", m),
        [f, p] = (0, s.bG)([tS.A], () => tS.A.getFavoriteTargetIdsForTab(o.x.MESSAGES), [], j.D),
        [S, _] = (0, s.bG)(
            [nQ.A],
            () => {
                let [e, t] = nQ.A.getRows(nQ.Y.ACTIVE_NOW),
                    [n] = nQ.A.getRows(nQ.Y.DMS),
                    [l] = nQ.A.getRows(nQ.Y.RECENT_TEXT),
                    i = n.slice(0, 5),
                    r = l.slice(0, 8);
                return [{ activeNowRows: e.slice(0, 8), dmRows: i, recentTextRows: r }, t];
            },
            [],
            j.D,
        ),
        C = (0, s.bG)([tf], () => tf.getCollapsedSectionOverridesForTab(o.x.MESSAGES), []),
        v = r.useCallback((e) => {
            tp({ tab: o.x.MESSAGES, sectionKey: e });
        }, []),
        R = r.useMemo(() => {
            let e = new Set();
            for (let t of f) e.add(t);
            for (let t of S.dmRows) e.add(t.channelId);
            for (let t of S.activeNowRows) e.add(t.channelId);
            for (let t of S.recentTextRows) e.add(t.channelId);
            return Array.from(e);
        }, [f, S.activeNowRows, S.dmRows, S.recentTextRows]),
        { unreadOrMentionChannels: D } = (0, s.cf)([eA.Ay], () => {
            let e = new Set();
            for (let t of R) {
                let n = eA.Ay.hasUnread(t),
                    l = eA.Ay.getMentionCount(t),
                    i = eA.Ay.getIsMentionLowImportance(t),
                    r = l > 0 && !i;
                (n || r) && e.add(t);
            }
            return { unreadOrMentionChannels: e };
        }, [R]),
        b = r.useMemo(() => {
            function e(e) {
                return !0 === C[e];
            }
            function t(e) {
                return D.has(e);
            }
            let n = [];
            if (0 === _) return [];
            if ("" !== d)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: eB.intl.string(tO.default.HGimIS),
                        count: h.length,
                        channelIds: h.map((e) => e.channel.id),
                        length: h.length,
                    }),
                    n
                );
            if (f.length > 0 && p > 0) {
                let l = e("FAVORITES") ? f.filter(t) : f;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eB.intl.string(tO.default.GKTlS6),
                    count: f.length,
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
                    title: eB.intl.string(tO.default.d3yO98),
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
                    title: eB.intl.string(eB.t.YUU0RF),
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
                    title: eB.intl.string(tO.default.uC6Lhg),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [C, D, d, f, S.activeNowRows, S.dmRows, S.recentTextRows, p, h, _]),
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
    tN({
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
    let w = (0, u.Dk)(() => {
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
                        let e = eI.A.getChannel(l);
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
        L = (0, u.Dk)(() => F, [F]),
        U = (0, u.Dk)(() => G, [G]);
    r.useEffect(() => {
        (0 !== L.size || 0 !== U.size) && nJ({ shownUserIds: nq(L), contentInventoryIds: nq(U) });
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
                        (0, i.jsx)(tu, {
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
                    n$,
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
        X = r.useCallback((e) => {
            a(e), m.current?.scrollToTop();
        }, []),
        z = (0, k.A)();
    return (0, i.jsxs)("div", {
        className: ta.kL,
        children: [
            (0, i.jsx)("div", {
                className: ta.MT,
                children: (0, i.jsx)(N.I, {
                    query: l,
                    onChange: X,
                    onClear: () => a(""),
                    placeholder: z ? eB.intl.string(eB.t.KA1U4B) : eB.intl.string(tO.default["xB/0Z9"]),
                    disabled: z,
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
                                    innerAriaLabel: eB.intl.string(eB.t.OIgYlQ),
                                    ref: (e) => {
                                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ta.p_,
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
var n3 = n(776096),
    n5 = n(607567),
    n2 = n(377802),
    n6 = n(342952),
    n4 = n(676923),
    n9 = n(342296),
    n8 = n(481947),
    n7 = n(956123);
let le = r.memo(function (e) {
    let { channelId: t, guildId: n, userId: l, onDoubleClick: u, onContextMenu: o } = e,
        d = r.useRef(null),
        [c, h] = r.useState(!1),
        g = (0, s.bG)([a.default], () => a.default.getUser(l), [l]),
        m = (function (e, t) {
            let [n] = (0, s.bG)(
                [eH.A],
                () => [eH.A.getVoiceStateForChannel(e, t) ?? null, eH.A.getVoiceStateVersion()],
                [e, t],
                j.D,
            );
            return n;
        })(t, l),
        I = (0, ei.A)({ userId: l, guildId: n }),
        A = (0, s.bG)([em.A], () => null != n && null != em.A.getStreamForUser(l, n), [n, l]),
        f = (0, s.bG)([R.A], () => R.A.findActivity(l, e5.A), [l]),
        p = (0, eJ.h)(f?.application_id),
        N = (0, eS.tx)(n ?? void 0, t, g),
        x = r.useCallback(
            (e) => {
                (0, tC.Vq)(g) && null != m && o?.({ type: eX.K.VOICE_USER, event: e, user: g, channelId: t });
            },
            [t, o, g, m],
        );
    return (0, tC.Vq)(g) && null != m
        ? (0, i.jsx)(n9.A, {
              targetElementRef: d,
              user: g,
              guildId: n ?? void 0,
              channelId: t,
              appContext: ez.BRT.OVERLAY,
              shouldShow: c,
              onRequestClose: () => h(!1),
              spacing: 24,
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      innerRef: d,
                      className: n7.gD,
                      onDoubleClick: u,
                      onContextMenu: x,
                      onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), h(!0);
                      },
                      children: (0, i.jsxs)("div", {
                          className: n7.h6,
                          children: [
                              (0, i.jsx)(U.eu, {
                                  src: g.getAvatarURL(n ?? void 0, 24),
                                  size: G._3.SIZE_24,
                                  "aria-label": N,
                              }),
                              (0, i.jsxs)(S.E, {
                                  className: n7.rg,
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, i.jsx)(es.A, {
                                          userName: N,
                                          displayNameStyles: I,
                                          effectDisplayType: er.G.STATIC,
                                          textClassName: n7.m2,
                                      }),
                                      (0, i.jsx)(ed.Ay, { userId: l, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: n7.ZA,
                                  onDoubleClick: u,
                                  children: (0, i.jsx)(n8.Kc, {
                                      guildId: n ?? void 0,
                                      user: g,
                                      video: m.selfVideo,
                                      isStreaming: A,
                                      className: n7.ZA,
                                      iconClassName: n7.Ow,
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
                              null != p ? (0, i.jsx)(ea.A, { game: p, size: ea.M.XSMALL, className: n7.IV }) : null,
                          ],
                      }),
                  }),
          })
        : null;
});
function lt(e) {
    let { isCollapsed: t } = e;
    return (0, i.jsx)(w, { isCollapsed: t, size: "md", className: ta.t4 });
}
function ln(e) {
    e.preventDefault(), e.stopPropagation();
}
function ll(e) {
    let { channelId: t, guildId: n } = e,
        l = (function (e) {
            let { channelId: t } = e;
            return (0, s.yK)(
                [eH.A, a.default, nw.A, D.A],
                () =>
                    Object.values(eH.A.getVoiceStatesForChannel(t))
                        .map((e) => a.default.getUser(e.userId))
                        .filter(tC.Vq)
                        .sort((e, t) =>
                            D.A.isFriend(e.id) && !D.A.isFriend(t.id)
                                ? -1
                                : !D.A.isFriend(e.id) && D.A.isFriend(t.id)
                                  ? 1
                                  : (nw.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (nw.A.getUserAffinity(e.id)?.vcProbability ?? 0),
                        ),
                [t],
            );
        })({ channelId: t });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: n7.X0,
              children: (0, i.jsx)(n6.A, {
                  users: l,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(l.length, 4),
                  size: G._3.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": eB.intl.string(eB.t.TxqPQR),
              }),
          });
}
function li(e) {
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
        m = (0, s.bG)([eI.A], () => eI.A.getChannel(n), [n]),
        I = (0, J.Ay)(m ?? void 0, !0) ?? "???",
        E = m?.getGuildId?.() ?? null,
        A = (0, s.bG)([eE.A], () => (null != E ? (eE.A.getGuild(E) ?? null) : null), [E]),
        f = (0, s.bG)([ef.Ay], () => ef.Ay.getVoiceChannelId() === n, [n]),
        p = (0, s.bG)([eV.A], () => null != m && (!!m.isPrivate?.() || eV.A.can(ez.xBc.READ_MESSAGE_HISTORY, m)), [m]),
        [N] = (0, s.bG)(
            [n5.Ay],
            () =>
                null == m || null == E ? [[], 0] : [n5.Ay.getVoiceStatesForChannel(m), n5.Ay.getVoiceStateVersion(E)],
            [m, E],
            j.D,
        ),
        x = null != N && N.length > 0,
        T = (0, s.bG)([eH.A, R.A], () => {
            for (let e of Object.values(eH.A.getVoiceStatesForChannel(n))) {
                let t = R.A.findActivity(e.userId, e5.A);
                if (t?.name != null) return t.name;
            }
            return null;
        }, [n]),
        _ = (0, ex.A2)(n),
        y = nX(m),
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
                e.stopPropagation(), h?.({ type: eX.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: E }), d || c?.(n);
            },
            [n, E, d, h, c],
        ),
        b = r.useCallback(
            (e) => {
                e.stopPropagation(), h?.({ type: eX.c.DISCONNECT_VOICE_CHANNEL, channelId: n });
            },
            [n, h],
        ),
        k = r.useCallback(() => {
            p && h?.({ type: eX.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: E });
        }, [p, n, E, h]),
        M = r.useCallback(
            (e) => {
                if (x) return void c?.(n);
            },
            [n, x, c],
        ),
        O = r.useCallback(
            (e) => {
                v(), k();
            },
            [v, k],
        ),
        w = r.useCallback(
            (e) => {
                g?.({ type: eX.K.VOICE_CHANNEL, event: e, channel: m ?? void 0, guild: A, channelId: n });
            },
            [m, n, A, g],
        ),
        { mentionCount: F } = (0, s.cf)(
            [eA.Ay],
            () => ({
                mentionCount: eA.Ay.getMentionCount(n),
                isMentionLowImportance: eA.Ay.getIsMentionLowImportance(n),
                unread: eA.Ay.hasUnread(n),
            }),
            [n],
        ),
        G = (0, ne.r)(eq.A.colors.STATUS_POSITIVE),
        L = (0, ne.r)(eq.A.colors.STATUS_DANGER),
        U = (0, ne.r)(eq.A.colors.TEXT_STRONG),
        P = (0, ne.r)(eq.A.colors.TEXT_MUTED),
        V = f ? G : F > 0 ? U : P,
        {
            Component: H,
            events: { onMouseEnter: Y, onMouseLeave: K },
        } = (0, n2.O)();
    function X() {
        let e = f ? eB.intl.string(eB.t["6vrfgt"]) : eB.intl.string(eB.t.S0W8Z5),
            t = f ? L.hex() : G.hex(),
            n = f ? H : nx._;
        return (0, i.jsx)("div", {
            onDoubleClick: ln,
            children: (0, i.jsx)(n4.S, {
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
                recentlyAddedTimestampMs: u ? _ : null,
                onClick: M,
                onContextMenu: w,
                avatar:
                    null != m
                        ? (0, i.jsx)(nI.A, { isTyping: y, guild: A ?? void 0, channel: m, size: nI.Q.SMALL_32 })
                        : null,
                primaryText: (0, i.jsxs)("div", {
                    className: eT.QV,
                    children: [
                        null == (t = (0, nt.gU)(m, A))
                            ? null
                            : (0, i.jsx)(t, { color: V.hex(), size: "xxs", className: eT.p }),
                        (0, i.jsx)(S.E, {
                            className: eT.Xh,
                            variant: "text-sm/medium",
                            color: f ? "status-positive-text" : F > 0 ? "text-strong" : "text-muted",
                            children: I,
                        }),
                    ],
                }),
                secondaryText:
                    null != T
                        ? (0, i.jsxs)("div", {
                              className: n7.z2,
                              children: [
                                  (0, i.jsx)(tV.GameControllerIcon, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: n7.AE,
                                  }),
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
                                      className: n7.YT,
                                      onDoubleClick: ln,
                                      children: [X(), (0, i.jsx)(ey.j, { tab: o.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case x:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    d
                                        ? (0, i.jsxs)("div", {
                                              className: n7.YT,
                                              onDoubleClick: ln,
                                              children: [X(), (0, i.jsx)(ey.j, { tab: o.x.VOICE, targetId: n })],
                                          })
                                        : (0, i.jsx)(ll, { channelId: n, guildId: E }),
                                    (0, i.jsx)(lt, { isCollapsed: !d }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            d && N.length > 0
                ? (0, i.jsx)("div", {
                      className: n7.Nz,
                      children: N.slice(0, 25).map((e) =>
                          (0, i.jsx)(
                              le,
                              { channelId: n, guildId: E, userId: e.user.id, onDoubleClick: ln, onContextMenu: g },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
var lr = n(315240);
function ls(e) {
    return Array.from(e).sort();
}
let la = (0, g.throttle)(
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
function lu(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function lo() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, l] = r.useState(""),
        a = n.trim().toLowerCase(),
        [d, c] = r.useState(() => new Set()),
        h = (0, s.bG)([tf], () => tf.getCollapsedSectionOverridesForTab(o.x.VOICE), []),
        g = (0, t9.qZ)(),
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
        f = r.useCallback((e) => {
            tp({ tab: o.x.VOICE, sectionKey: e });
        }, []),
        p = r.useMemo(() => new Set(g.map((e) => e.channel.id)), [g]),
        [S, _] = r.useState([]);
    (0, ty.RT)(n, g, _, t9.MV);
    let C = r.useRef(null),
        v = (0, y.A)("friends-widget-voice", C),
        [R, b] = (0, s.bG)([tS.A], () => tS.A.getFavoriteTargetIdsForTab(o.x.VOICE), [], j.D),
        M = r.useMemo(() => R.filter((e) => p.has(e)), [R, p]),
        { friendVoiceChannelIds: O, recentVoiceChannelIds: w } = (0, t9.S4)(),
        F = r.useMemo(() => O.filter((e) => p.has(e)), [O, p]),
        G = r.useMemo(() => w.filter((e) => p.has(e)), [w, p]),
        L = (0, s.bG)([ef.Ay], () => ef.Ay.getVoiceChannelId(), []),
        U = (0, s.bG)([lr.A], () => lr.A.getActiveNowChannelIds({ kind: lr.u.Voice }), []),
        P = (0, s.bG)(
            [n3.A],
            () =>
                n3.A.affinities
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
                lu(`${t}${n}${l}`)
            );
        }, []),
        H = r.useMemo(() => new Set(R), [R]),
        Y = r.useMemo(() => F.filter((e) => !H.has(e)), [F, H]),
        K = r.useMemo(() => G.filter((e) => !H.has(e)), [G, H]),
        X = r.useMemo(() => new Set(Y), [Y]),
        z = r.useMemo(() => U.filter((e) => !H.has(e) && !X.has(e) && p.has(e)), [U, H, X, p]),
        B = r.useMemo(() => {
            let e = [],
                t = new Set();
            function n(n) {
                null == n || !p.has(n) || H.has(n) || t.has(n) || (t.add(n), e.push(n));
            }
            for (let t of (null != L && eI.A.getChannel(L)?.isVocal() && n(L), K)) {
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
                            shuffle: ((t = e.channel.id), lu(`${V}:${t}`)),
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
        }, [g, p, L, H, Y, K, V, P]),
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
                        title: eB.intl.string(tO.default.DUIbKP),
                        count: S.length,
                        rows: S.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: S.length,
                    }),
                    n
                );
            if (M.length > 0 && b > 0) {
                let l = M.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("FAVORITES") ? l.filter(t) : l;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: eB.intl.string(tO.default.OskevP),
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
                    title: eB.intl.string(tO.default["C+ojiQ"]),
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
                    title: eB.intl.string(tO.default.eiie2x),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (B.length > 0) {
                let l = B.map((e) => ({ channelId: e, voiceStates: m.get(e) })),
                    i = e("SUGGESTED_VOICE_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: eB.intl.string(tO.default["9ME4wE"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [h, a, M, b, z, Y, S, B, m]),
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
    tN({
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
    let Q = (0, u.Dk)(() => {
            let e = new Set();
            for (let t of Z) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [Z]),
        { shownUserIds: q, liveUserIds: J } = (0, s.cf)([eI.A, em.A], () => {
            let e = new Map();
            for (let t of g) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let l of Q) {
                let i = eI.A.getChannel(l),
                    r = i?.getGuildId?.() ?? i?.guild_id ?? null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(eH.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = D.A.isFriend(e),
                                l = D.A.isFriend(t);
                            return n && !l
                                ? -1
                                : !n && l
                                  ? 1
                                  : (nw.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                    (nw.A.getUserAffinity(e)?.vcProbability ?? 0);
                        }),
                        n.slice(0, 4)
                    );
                })(l, e.get(l)))
                    t.add(i), null != r && null != em.A.getStreamForUser(i, r) && n.add(i);
            }
            return { shownUserIds: t, liveUserIds: n };
        }, [Q, g]),
        ee = (0, u.Dk)(() => q, [q]),
        et = (0, u.Dk)(() => J, [J]);
    r.useEffect(() => {
        (0 !== ee.size || 0 !== et.size) && la({ shownUserIds: ls(ee), liveUserIds: ls(et) });
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
                        (0, i.jsx)(tu, {
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
                    li,
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
                let i = eI.A.getChannel(l.channelId),
                    r = Math.min((null != i ? n5.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [d, en],
        ),
        ea = r.useCallback((e) => {
            l(e), C.current?.scrollToTop();
        }, []),
        eu = (0, k.A)();
    return (0, i.jsxs)("div", {
        className: ta.kL,
        children: [
            (0, i.jsx)("div", {
                className: ta.MT,
                children: (0, i.jsx)(N.I, {
                    query: n,
                    onChange: ea,
                    onClear: () => l(""),
                    placeholder: eu ? eB.intl.string(eB.t.KA1U4B) : eB.intl.string(tO.default.OV3KfO),
                    disabled: eu,
                    size: "md",
                }),
            }),
            (0, i.jsx)(I.hD, {
                navigator: v,
                children: (0, i.jsx)(I.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(x.sk, {
                            children: (e) =>
                                (0, i.jsx)(T.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: eB.intl.string(eB.t.OGiMXJ),
                                    ref: (e) => {
                                        (C.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ta.p_,
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
var ld = n(308368),
    lc = n(308528),
    lh = n(442433),
    lg = n(183208),
    lm = n(684013),
    lI = n(717398),
    lE = n(730852),
    lA = n(428249),
    lf = n(975732),
    lp = n(145567),
    lS = n(34307),
    lN = n(381941),
    lx = n(731854),
    lT = n(557555);
function l_() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = (0, d.b4)(),
        l = n?.id,
        c = n?.altId,
        h = (0, s.bG)([a.default], () => a.default.getCurrentUser()) ?? null,
        g = ex.Ay.useField("activeTab"),
        m = ex.Ay.useField("setActiveTab"),
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
        className: lT.kL,
        children: [
            (0, i.jsx)(t6, {
                currentUser: h,
                activity: E,
                currentGameName: n?.name ?? null,
                activeTab: g,
                onTabChange: I,
            }),
            (0, i.jsx)("div", {
                className: lT.Qs,
                children: (() => {
                    switch (g) {
                        case o.x.FRIENDS:
                            return (0, i.jsx)(tP, { onPrimaryAction: e, onContextMenu: t });
                        case o.x.MESSAGES:
                            return (0, i.jsx)(n1, { onPrimaryAction: e, onContextMenu: t });
                        case o.x.VOICE:
                            return (0, i.jsx)(lo, { onPrimaryAction: e, onContextMenu: t });
                        default:
                            return null;
                    }
                })(),
            }),
        ],
    });
}
let ly = r.memo(function (e) {
    let { locked: t } = e,
        { handlePrimaryAction: l, handleContextMenu: s } = {
            handlePrimaryAction: r.useCallback((e) => {
                switch (e.type) {
                    case eX.c.OPEN_DIRECT_MESSAGE:
                        if (null == e.userId) return;
                        (async () => {
                            try {
                                await (0, lp.D$)({
                                    target: { kind: lp.bB.DM_USER, userId: e.userId, messageId: null },
                                    source: lS.B.FRIENDS_WIDGET_CLICK,
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
                    case eX.c.OPEN_TEXT_CHAT_CHANNEL:
                        if (null == e.channelId) return;
                        (0, lp.D$)({
                            target: {
                                kind: lp.bB.CHANNEL,
                                channelId: e.channelId,
                                guildId: e.guildId ?? null,
                                messageId: null,
                            },
                            source: lS.B.FRIENDS_WIDGET_CLICK,
                            widgetType: ez.uss.FRIENDS,
                        }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.CHAT,
                                userId: e.userId,
                                secondaryValue: "channel",
                            });
                        break;
                    case eX.c.CONNECT_VOICE_CHANNEL:
                        if (null == e.channelId) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.VOICE,
                            value: u.IP.CHANNEL_SELECTED,
                            secondaryValue: "voice",
                        }),
                            lE.default.selectVoiceChannel(e.channelId);
                        break;
                    case eX.c.DISCONNECT_VOICE_CHANNEL:
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.CALL_BUTTON,
                            value: u.IP.DISABLED,
                            secondaryValue: "voice",
                            userId: na.default.getId(),
                        }),
                            lE.default.disconnect();
                        break;
                    case eX.c.ACCEPT_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lI.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.ACCEPT_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eX.c.DECLINE_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lI.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.DECLINE_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eX.c.CANCEL_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lI.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.CANCEL_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eX.c.SEND_FRIEND_REQUEST:
                        if (null == e.userId) return;
                        lI.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_REQUEST,
                                value: u.IP.SEND_REQUEST,
                                userId: e.userId,
                            });
                        break;
                    case eX.c.OPEN_FRIEND_MODAL:
                        if (null == e.userId) return;
                        (0, lf.openUserProfileModal)({
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
                    case eX.c.SEARCH_FRIENDS:
                        (0, u.YX)(ez.uss.FRIENDS, { type: u.Z5.FRIEND_LIST, value: u.IP.SEARCH });
                        break;
                    case eX.c.SEND_ACTIVITY_INVITE:
                        if (null == e.userId || null == e.activity) return;
                        ld.A.sendActivityInviteUser({
                            type: ez.xL.JOIN,
                            userId: e.userId,
                            activity: e.activity,
                            location: ez.ThZ.UNLOCKED_OVERLAY,
                        }),
                            lm.A.track(ez.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                            (0, u.YX)(ez.uss.FRIENDS, { type: u.Z5.INVITE, value: u.IP.INVITE_SENT, userId: e.userId });
                        break;
                    case eX.c.JOIN:
                        if (null == e.userId || null == e.activity) return;
                        lg.Ay.join({
                            userId: e.userId,
                            sessionId: e.activity.session_id,
                            applicationId: e.activity.application_id,
                            channelId: null,
                            messageId: null,
                            source: ez.ThZ.UNLOCKED_OVERLAY,
                        });
                        break;
                    case eX.c.ASK_TO_JOIN:
                        if (null == e.userId || null == e.activity) return;
                        ld.A.sendActivityInviteUser({
                            type: ez.xL.JOIN_REQUEST,
                            userId: e.userId,
                            activity: e.activity,
                            location: ez.ThZ.UNLOCKED_OVERLAY,
                        }),
                            lm.A.track(ez.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.INVITE,
                                value: u.IP.JOIN_REQUEST_SENT,
                                userId: e.userId,
                            });
                        break;
                    case eX.c.SEND_GAME_INVITE_MESSAGE: {
                        if (null == e.userId) return;
                        let t = e.gameEntry,
                            n = e.userId;
                        (async () => {
                            try {
                                if (
                                    (await (0, lp.D$)({
                                        target: { kind: lp.bB.DM_USER, userId: n, messageId: null },
                                        source: lS.B.FRIENDS_WIDGET_CLICK,
                                        widgetType: ez.uss.FRIENDS,
                                    }),
                                    null == t)
                                )
                                    return;
                                let e = await lc.A.getOrEnsurePrivateChannel(n),
                                    l = eI.A.getChannel(e);
                                if (null == l) return;
                                !0 === t.extra.fake_inventory_item
                                    ? await (0, lA.J)({
                                          channel: l,
                                          content: eB.intl.formatToPlainString(eB.t.UVBA9g, {
                                              gameName: t.extra.game_name,
                                          }),
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: lN.Hx.OVERLAY,
                                      })
                                    : await (0, lA.d)({
                                          channel: l,
                                          content: eB.intl.string(eB.t.DwAcMz),
                                          entry: t,
                                          whenReady: !0,
                                          doNotNotifyOnError: !1,
                                          location: lN.Hx.OVERLAY,
                                      });
                            } catch {}
                        })(),
                            lm.A.track(ez.HAw.OVERLAY_GAME_INVITE_SENT, {
                                target_user_id: n,
                                target_content_entry_id: t?.id,
                            }),
                            (0, u.YX)(ez.uss.FRIENDS, { type: u.Z5.INVITE, value: u.IP.INVITE_SENT, userId: e.userId });
                        break;
                    }
                    case eX.c.USER_CONTEXT_MENU:
                    case eX.c.OPEN_SETTINGS_MODAL:
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SETTINGS_OPENED,
                            userId: e.userId,
                        });
                        break;
                    case eX.c.TAB_CHANGE: {
                        let t = e.tab;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.FRIEND_LIST,
                            value: (function (e) {
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
                    case eX.K.FRIEND_ROW: {
                        let { user: t, friendGroupId: l } = e;
                        if (null == t) return;
                        (0, lh.L3)(
                            e.event,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("790484"),
                                    n.e("866038"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("834552"),
                                    n.e("708757"),
                                    n.e("585968"),
                                    n.e("776273"),
                                    n.e("893190"),
                                    n.e("189673"),
                                    n.e("229787"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("691994"),
                                    n.e("576665"),
                                    n.e("581609"),
                                    n.e("296443"),
                                    n.e("123490"),
                                    n.e("877687"),
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
                    case eX.K.FRIEND_GROUP: {
                        let { groupId: t, groupName: l } = e;
                        if (null == t || null == l) return;
                        (0, lh.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([n.e("296443"), n.e("743562")]).then(
                                n.bind(n, 602321),
                            );
                            return (n) => (0, i.jsx)(e, { ...n, groupId: t, groupName: l });
                        }),
                            (0, u.YX)(ez.uss.FRIENDS, {
                                type: u.Z5.FRIEND_LIST,
                                value: u.IP.SETTINGS_OPENED,
                                secondaryValue: "friend-group",
                            });
                        break;
                    }
                    case eX.K.DM_CHANNEL: {
                        let { channel: t, user: l } = e;
                        if (null == t || null == l) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "dm",
                        }),
                            (0, lh.L3)(e.event, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("790484"),
                                    n.e("207322"),
                                    n.e("622936"),
                                    n.e("216947"),
                                    n.e("866038"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("834552"),
                                    n.e("708757"),
                                    n.e("993103"),
                                    n.e("585968"),
                                    n.e("776273"),
                                    n.e("893190"),
                                    n.e("391763"),
                                    n.e("571210"),
                                    n.e("189673"),
                                    n.e("88342"),
                                    n.e("955557"),
                                    n.e("229787"),
                                    n.e("311802"),
                                    n.e("698965"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("691994"),
                                    n.e("576665"),
                                    n.e("235313"),
                                    n.e("436564"),
                                    n.e("252229"),
                                    n.e("245996"),
                                    n.e("700792"),
                                    n.e("592822"),
                                    n.e("838056"),
                                    n.e("823427"),
                                    n.e("393336"),
                                    n.e("529422"),
                                    n.e("508829"),
                                    n.e("309291"),
                                    n.e("307059"),
                                    n.e("581609"),
                                    n.e("298199"),
                                    n.e("864464"),
                                    n.e("960816"),
                                    n.e("296443"),
                                    n.e("123490"),
                                    n.e("895049"),
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
                    case eX.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "group-dm",
                        }),
                            (0, lh.L3)(e.event, async () => {
                                let { default: t } = await Promise.all([
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("391763"),
                                    n.e("955557"),
                                    n.e("393336"),
                                    n.e("146149"),
                                    n.e("581609"),
                                    n.e("153416"),
                                    n.e("777927"),
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
                    case eX.K.GUILD_TEXT_CHANNEL: {
                        let { channel: t, guild: l } = e;
                        if (null == t || null == l) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-text-channel",
                        }),
                            t.isModeratorReportChannel?.()
                                ? (0, lh.L3)(e.event, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("926132"),
                                          n.e("146652"),
                                          n.e("391763"),
                                          n.e("955557"),
                                          n.e("535321"),
                                          n.e("550033"),
                                          n.e("343266"),
                                          n.e("393336"),
                                          n.e("581609"),
                                          n.e("256985"),
                                      ]).then(n.bind(n, 95616));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: ez.uss.FRIENDS });
                                  })
                                : (0, lh.L3)(e.event, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("926132"),
                                          n.e("146652"),
                                          n.e("893190"),
                                          n.e("391763"),
                                          n.e("955557"),
                                          n.e("535321"),
                                          n.e("550033"),
                                          n.e("343266"),
                                          n.e("309004"),
                                          n.e("393336"),
                                          n.e("544058"),
                                          n.e("591377"),
                                          n.e("581609"),
                                          n.e("256372"),
                                          n.e("354036"),
                                      ]).then(n.bind(n, 813407));
                                      return (n) =>
                                          (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: ez.uss.FRIENDS });
                                  });
                        break;
                    }
                    case eX.K.VOICE_CHANNEL: {
                        let { channel: t, guild: l } = e;
                        if (null == t || null == l) return;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-voice-channel",
                        }),
                            (0, lh.L3)(e.event, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("546813"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("993103"),
                                    n.e("391763"),
                                    n.e("955557"),
                                    n.e("535321"),
                                    n.e("550033"),
                                    n.e("252229"),
                                    n.e("343266"),
                                    n.e("309004"),
                                    n.e("393336"),
                                    n.e("544058"),
                                    n.e("581609"),
                                    n.e("694138"),
                                    n.e("958262"),
                                    n.e("318663"),
                                    n.e("221905"),
                                ]).then(n.bind(n, 769192));
                                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: ez.uss.FRIENDS });
                            });
                        break;
                    }
                    case eX.K.VOICE_USER: {
                        let { user: t, channelId: l, guild: r } = e;
                        if (null == t || null == l) return;
                        let s = r?.id ?? null;
                        (0, u.YX)(ez.uss.FRIENDS, {
                            type: u.Z5.TEXT_CHAT,
                            value: u.IP.SETTINGS_OPENED,
                            secondaryValue: "guild-voice-user",
                        }),
                            (0, lh.L3)(e.event, async () => {
                                let { default: l } = await Promise.all([
                                    n.e("866038"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("834552"),
                                    n.e("708757"),
                                    n.e("585968"),
                                    n.e("893190"),
                                    n.e("21921"),
                                    n.e("676418"),
                                    n.e("189673"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("691994"),
                                    n.e("939171"),
                                    n.e("449145"),
                                    n.e("470314"),
                                    n.e("404524"),
                                    n.e("654148"),
                                    n.e("658980"),
                                ]).then(n.bind(n, 535503));
                                return (n) =>
                                    (0, i.jsx)(l, {
                                        ...n,
                                        user: t,
                                        guildId: s ?? void 0,
                                        channelId: e.channelId,
                                        mediaEngineContext: lx.x.DEFAULT,
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
    return t ? null : (0, i.jsx)(l_, { onPrimaryAction: l, onContextMenu: s });
});
