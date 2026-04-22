n.d(t, { A: () => Z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(517738),
    o = n(837381),
    c = n(311907),
    d = n(725027),
    u = n(312138),
    h = n(843472),
    m = n(432371),
    A = n(765548),
    g = n(775602),
    p = n(821720),
    _ = n(429913),
    f = n(47167),
    E = n(17447),
    C = n(736339),
    x = n(354328),
    S = n(559149),
    I = n(164956),
    N = n(302031),
    v = n(513272),
    T = n(253932),
    y = n(617617),
    b = n(961350),
    j = n(72314),
    R = n(580745),
    M = n(834942),
    L = n(320501),
    D = n(576705),
    P = n(222823),
    O = n(399263),
    w = n(287809),
    U = n(234320),
    k = n(863439),
    G = n(504136),
    F = n(326337),
    H = n(540385),
    B = n(830178),
    V = n(722432),
    z = n(258024),
    K = n(672341),
    W = n(652215),
    Y = n(985018),
    J = n(1987);
let q = (0, r.animated)(d.f),
    $ = l.memo(
        function (e) {
            var t;
            let n,
                a,
                r,
                {
                    className: d,
                    messageGroupSpacing: m,
                    scrollerClassName: p,
                    channel: _,
                    messages: E,
                    unreadCount: C,
                    showNewMessagesBar: x,
                    messageDisplayCompact: S,
                    channelStream: N,
                    uploads: v,
                    hasUnreads: T,
                    editingMessageId: b,
                    fontSize: R,
                    keyboardModeEnabled: M,
                    filterAfterTimestamp: L,
                    showingQuarantineBanner: P,
                    hideSummaries: O = !1,
                    jumpBarClassName: w,
                    typingGradient: k,
                } = e,
                [G, B] = l.useState(j.A.isAtBottom(_.id) ?? !1),
                $ = (0, f.Ay)(_),
                Z = (0, F.I)(S, R),
                X = S ? Z : Math.round(0.87 * Z),
                Q = Math.max(1, Math.round((X / 30) * 8)),
                ee = l.useMemo(
                    () =>
                        (0, H.bW)({
                            compact: S,
                            messageGroups: X,
                            groupRange: 4,
                            attachments: Q,
                            fontSize: R,
                            groupSpacing: m,
                        }),
                    [S, X, Q, R, m],
                ),
                et = (0, z.Ay)({
                    messages: E,
                    channel: _,
                    compact: S,
                    hasUnreads: T,
                    focusId: b,
                    placeholderHeight: ee.totalHeight,
                    canLoadMore: null == L,
                    handleScrollToBottom: l.useCallback(() => B(!0), [B]),
                    handleScrollFromBottom: l.useCallback(() => B(!1), [B]),
                    additionalMessagePadding: 48,
                }),
                en = (0, V.A)({
                    scrollerRef: et.ref,
                    isEditing: null != b,
                    keyboardModeEnabled: M,
                    hasMoreAfter: E.hasMoreAfter,
                }),
                ei = (0, c.bG)([I.A], () =>
                    D.A.can(W.xBc.READ_MESSAGE_HISTORY, _) ? null : I.A.getViewingRolesTimestamp(_.getGuildId()),
                ),
                {
                    channelStreamMarkup: el,
                    newMessagesBar: ea,
                    jumpToPresentBar: es,
                    forumPostActionBar: er,
                    safetyWarningBanner: eo,
                } = (0, K.A)({
                    channel: _,
                    messages: E,
                    unreadCount: C,
                    showNewMessagesBar: x,
                    messageDisplayCompact: S,
                    channelStream: N,
                    uploads: v,
                    loadMore: et.loadMore,
                    scrollManager: et,
                    specs: ee,
                    filterAfterTimestamp: L ?? ei,
                    showingQuarantineBanner: P,
                    hideSummaries: O,
                    jumpToPresent: () => {
                        E.hasPresent()
                            ? et.ref.current?.scrollToBottom({ animate: !g.A.useReducedMotion })
                            : h.A.jumpToPresent(_.id, Z);
                    },
                    jumpBarClassName: w,
                });
            (t = et.ref),
                (n = l.useCallback(() => t.current?.scrollToBottom(), [t])),
                (a = l.useCallback(() => t.current?.scrollPageUp({ animate: !g.A.useReducedMotion }), [t])),
                (r = l.useCallback(() => t.current?.scrollPageDown({ animate: !g.A.useReducedMotion }), [t])),
                (0, U.Vo)({ event: W.jej.SCROLLTO_PRESENT, handler: n }),
                (0, U.Vo)({ event: W.jej.SCROLL_PAGE_UP, handler: a }),
                (0, U.Vo)({ event: W.jej.SCROLL_PAGE_DOWN, handler: r });
            let ec = (0, u.R7)(),
                { ref: ed, ...eu } = (0, o.LT)(en),
                eh = (0, A.A)((e) => {
                    (et.ref.current = e), (ed.current = e?.getScrollerNode() ?? null);
                }),
                em = (0, c.bG)([y.A], () => {
                    let e = y.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eA = l.useMemo(() => (k ? (G ? J.gA : J.ru) : J.Zd), [k, G]),
                eg = l.useMemo(() => (k ? (G ? J.cz : J.XF) : J.U6), [k, G]);
            return (0, i.jsxs)(o.hD, {
                navigator: en,
                children: [
                    null != eo && eo,
                    (0, i.jsxs)("div", {
                        className: s()(J.Og, d, `group-spacing-${m}`),
                        children: [
                            null == eo && ea,
                            (0, i.jsxs)(q, {
                                ref: eh,
                                customTheme: !0,
                                className: s()(p, J.XG, em ? eg : void 0),
                                contentClassName: J.gT,
                                onResize: et.handleResize,
                                onScroll: et.handleScroll,
                                onMouseDown: et.handleMouseDown,
                                onMouseUp: et.handleMouseUp,
                                ...ec,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    er,
                                    (0, i.jsxs)("ol", {
                                        className: s()(J.bv, { [J.FD]: _.isModeratorReportChannel() }),
                                        "aria-label": Y.intl.formatToPlainString(Y.t.XarRiL, { channelName: $ ?? "" }),
                                        ...eu,
                                        children: [
                                            (0, i.jsx)("span", {
                                                className: J.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: Y.intl.string(Y.t["Spb3s/"]),
                                            }),
                                            el,
                                            (0, i.jsx)("div", {
                                                className: s()({
                                                    [J.lB]: !P,
                                                    [J.Ie]: 0 === E.length && !E.loadingMore,
                                                    [J.Fb]:
                                                        1 === E.length &&
                                                        !E.loadingMore &&
                                                        _.isForumPost() &&
                                                        E.first()?.isFirstMessageInForumPost(_),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            em ? null : (0, i.jsx)("div", { className: eA }),
                            es,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    Z = l.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: a = !1,
                forceCompact: s = !1,
                forceCozy: r = !1,
                typingGradient: o = !1,
                ...d
            } = e,
            {
                canManageMessages: u,
                permissionVersion: h,
                canChat: A,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.bG)([M.A], () => null == t || M.A.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: l } = (0, c.cf)(
                        [D.A],
                        () => ({
                            canManageMessages: D.A.can(W.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? D.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: l, canManageMessages: i };
            })(t),
            {
                messageGroupSpacing: f,
                fontSize: I,
                messageDisplayCompact: y,
                renderSpoilers: j,
                keyboardModeEnabled: U,
            } = (function () {
                let e = T.hH.useSetting(),
                    t = T.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: i,
                        keyboardModeEnabled: l,
                    } = (0, c.cf)([g.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = g.A;
                        return { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n };
                    });
                return {
                    messageGroupSpacing: n,
                    messageDisplayCompact: e,
                    renderSpoilers: t,
                    fontSize: i,
                    keyboardModeEnabled: l,
                };
            })(),
            {
                messages: F,
                channelStream: H,
                oldestUnreadMessageId: V,
                editingMessageId: z,
            } = (function (e) {
                var t;
                let n,
                    i = (0, c.bG)([L.A], () => L.A.getMessages(e.id), [e.id]),
                    a = (0, c.bG)([P.Ay], () => P.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = S.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    r = w.default.getUser(b.default.getId())?.hasFlag(W.nhx.SPAMMER) ?? !1,
                    o = (0, m.cI)(e),
                    d = (0, x.A)("use_topic_dividers_in_chat"),
                    u = (0, c.yK)([v.A], () => (o && d ? (v.A.summaries(e.id) ?? []) : []), [o, e.id, d]),
                    h = (0, c.bG)([v.A], () => (o ? v.A.selectedSummary(e.id) : null), [o, e.id]),
                    A = (0, E.f)("message_stream"),
                    g = (0, c.bG)([C.A], () => (A ? C.A.getSelectedConversation(e.id) : null), [A, e.id]),
                    f =
                        ((t = i),
                        (n = l.useMemo(() => {
                            let e = new Set();
                            return (
                                t.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [t])),
                        (0, _.A)(n));
                (0, p.A)(i, e);
                let I = l.useMemo(
                    () =>
                        (0, G.A)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: a,
                            treatSpam: s && !r,
                            summaries: u,
                            selectedSummary: h,
                            selectedConversation: g,
                        }),
                    [i, e, a, s, u, h, g, f, r],
                );
                return {
                    messages: i,
                    channelStream: I,
                    oldestUnreadMessageId: a,
                    editingMessageId: (0, c.bG)([R.A], () => R.A.getEditingMessage(e.id)?.id),
                };
            })(t);
        return (0, i.jsx)(N.Bs.Provider, {
            value: (0, k.A)(j, u),
            children: (0, i.jsx)(B.t, {
                children: (0, i.jsx)($, {
                    ...d,
                    messageGroupSpacing: f,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (s || y),
                    messages: F,
                    channelStream: H,
                    permissionVersion: h,
                    uploads: (0, c.bG)([O.A], () => O.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([P.Ay], () => P.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != V,
                    canChat: A,
                    editingMessageId: z,
                    fontSize: I,
                    keyboardModeEnabled: U,
                    showingQuarantineBanner: n,
                    hideSummaries: a,
                    typingGradient: o,
                }),
            }),
        });
    });
