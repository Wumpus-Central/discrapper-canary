n.d(t, { A: () => $ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(432371),
    m = n(765548),
    A = n(775602),
    g = n(821720),
    p = n(429913),
    f = n(47167),
    _ = n(17447),
    E = n(736339),
    x = n(354328),
    C = n(559149),
    S = n(164956),
    T = n(302031),
    N = n(513272),
    I = n(253932),
    v = n(617617),
    y = n(961350),
    b = n(72314),
    j = n(580745),
    R = n(834942),
    M = n(320501),
    D = n(576705),
    O = n(222823),
    L = n(399263),
    P = n(287809),
    k = n(234320),
    w = n(863439),
    U = n(504136),
    G = n(326337),
    F = n(540385),
    B = n(830178),
    H = n(722432),
    V = n(258024),
    K = n(672341),
    W = n(652215),
    z = n(985018),
    q = n(906324);
let Y = (0, r.animated)(d.fKU),
    J = l.memo(
        function (e) {
            var t;
            let n,
                s,
                r,
                {
                    className: h,
                    messageGroupSpacing: g,
                    scrollerClassName: p,
                    channel: _,
                    messages: E,
                    unreadCount: x,
                    showNewMessagesBar: C,
                    messageDisplayCompact: T,
                    channelStream: N,
                    uploads: I,
                    hasUnreads: y,
                    editingMessageId: j,
                    fontSize: R,
                    keyboardModeEnabled: M,
                    filterAfterTimestamp: O,
                    showingQuarantineBanner: L,
                    hideSummaries: P = !1,
                    jumpBarClassName: w,
                    typingGradient: U,
                } = e,
                [B, J] = l.useState(b.A.isAtBottom(_.id) ?? !1),
                $ = (0, f.Ay)(_),
                Z = (0, G.I)(T, R),
                X = T ? Z : Math.round(0.87 * Z),
                Q = Math.max(1, Math.round((X / 30) * 8)),
                ee = l.useMemo(
                    () =>
                        (0, F.bW)({
                            compact: T,
                            messageGroups: X,
                            groupRange: 4,
                            attachments: Q,
                            fontSize: R,
                            groupSpacing: g,
                        }),
                    [T, X, Q, R, g],
                ),
                et = (0, V.Ay)({
                    messages: E,
                    channel: _,
                    compact: T,
                    hasUnreads: y,
                    focusId: j,
                    placeholderHeight: ee.totalHeight,
                    canLoadMore: null == O,
                    handleScrollToBottom: l.useCallback(() => J(!0), [J]),
                    handleScrollFromBottom: l.useCallback(() => J(!1), [J]),
                    additionalMessagePadding: 48,
                }),
                en = (0, H.A)({
                    scrollerRef: et.ref,
                    isEditing: null != j,
                    keyboardModeEnabled: M,
                    hasMoreAfter: E.hasMoreAfter,
                }),
                ei = (0, c.bG)([S.A], () =>
                    D.A.can(W.xBc.READ_MESSAGE_HISTORY, _) ? null : S.A.getViewingRolesTimestamp(_.getGuildId()),
                ),
                {
                    channelStreamMarkup: el,
                    newMessagesBar: es,
                    jumpToPresentBar: ea,
                    forumPostActionBar: er,
                    safetyWarningBanner: eo,
                } = (0, K.A)({
                    channel: _,
                    messages: E,
                    unreadCount: x,
                    showNewMessagesBar: C,
                    messageDisplayCompact: T,
                    channelStream: N,
                    uploads: I,
                    loadMore: et.loadMore,
                    scrollManager: et,
                    specs: ee,
                    filterAfterTimestamp: O ?? ei,
                    showingQuarantineBanner: L,
                    hideSummaries: P,
                    jumpToPresent: () => {
                        E.hasPresent()
                            ? et.ref.current?.scrollToBottom({ animate: !A.A.useReducedMotion })
                            : u.A.jumpToPresent(_.id, Z);
                    },
                    jumpBarClassName: w,
                });
            (t = et.ref),
                (n = l.useCallback(() => t.current?.scrollToBottom(), [t])),
                (s = l.useCallback(() => t.current?.scrollPageUp({ animate: !A.A.useReducedMotion }), [t])),
                (r = l.useCallback(() => t.current?.scrollPageDown({ animate: !A.A.useReducedMotion }), [t])),
                (0, k.Vo)({ event: W.jej.SCROLLTO_PRESENT, handler: n }),
                (0, k.Vo)({ event: W.jej.SCROLL_PAGE_UP, handler: s }),
                (0, k.Vo)({ event: W.jej.SCROLL_PAGE_DOWN, handler: r });
            let ec = (0, d.R7z)(),
                { ref: ed, ...eu } = (0, o.LT)(en),
                eh = (0, m.A)((e) => {
                    (et.ref.current = e), (ed.current = e?.getScrollerNode() ?? null);
                }),
                em = (0, c.bG)([v.A], () => {
                    let e = v.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eA = l.useMemo(() => (U ? (B ? q.gA : q.ru) : q.Zd), [U, B]),
                eg = l.useMemo(() => (U ? (B ? q.cz : q.XF) : q.U6), [U, B]);
            return (0, i.jsxs)(o.hD, {
                navigator: en,
                children: [
                    null != eo && eo,
                    (0, i.jsxs)("div", {
                        className: a()(q.Og, h, `group-spacing-${g}`),
                        children: [
                            null == eo && es,
                            (0, i.jsxs)(Y, {
                                ref: eh,
                                customTheme: !0,
                                className: a()(p, q.XG, em ? eg : void 0),
                                contentClassName: q.gT,
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
                                        className: a()(q.bv, { [q.FD]: _.isModeratorReportChannel() }),
                                        "aria-label": z.intl.formatToPlainString(z.t.XarRiL, { channelName: $ ?? "" }),
                                        ...eu,
                                        children: [
                                            (0, i.jsx)("span", {
                                                className: q.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: z.intl.string(z.t["Spb3s/"]),
                                            }),
                                            el,
                                            (0, i.jsx)("div", {
                                                className: a()({
                                                    [q.lB]: !L,
                                                    [q.Ie]: 0 === E.length && !E.loadingMore,
                                                    [q.Fb]:
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
                            ea,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    $ = l.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: s = !1,
                forceCompact: a = !1,
                forceCozy: r = !1,
                typingGradient: o = !1,
                ...d
            } = e,
            {
                canManageMessages: u,
                permissionVersion: m,
                canChat: f,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.bG)([R.A], () => null == t || R.A.canChatInGuild(t), [t]),
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
                messageGroupSpacing: S,
                fontSize: v,
                messageDisplayCompact: b,
                renderSpoilers: k,
                keyboardModeEnabled: G,
            } = (function () {
                let e = I.hH.useSetting(),
                    t = I.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: i,
                        keyboardModeEnabled: l,
                    } = (0, c.cf)([A.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = A.A;
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
                editingMessageId: K,
            } = (function (e) {
                var t;
                let n,
                    i = (0, c.bG)([M.A], () => M.A.getMessages(e.id), [e.id]),
                    s = (0, c.bG)([O.Ay], () => O.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: a } = C.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    r = P.default.getUser(y.default.getId())?.hasFlag(W.nhx.SPAMMER) ?? !1,
                    o = (0, h.cI)(e),
                    d = (0, x.A)("use_topic_dividers_in_chat"),
                    u = (0, c.yK)([N.A], () => (o && d ? (N.A.summaries(e.id) ?? []) : []), [o, e.id, d]),
                    m = (0, c.bG)([N.A], () => (o ? N.A.selectedSummary(e.id) : null), [o, e.id]),
                    A = (0, _.f)("message_stream"),
                    f = (0, c.bG)([E.A], () => (A ? E.A.getSelectedConversation(e.id) : null), [A, e.id]),
                    S =
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
                        (0, p.A)(n));
                (0, g.A)(i, e);
                let T = l.useMemo(
                    () =>
                        (0, U.A)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: s,
                            treatSpam: a && !r,
                            summaries: u,
                            selectedSummary: m,
                            selectedConversation: f,
                        }),
                    [i, e, s, a, u, m, f, S, r],
                );
                return {
                    messages: i,
                    channelStream: T,
                    oldestUnreadMessageId: s,
                    editingMessageId: (0, c.bG)([j.A], () => j.A.getEditingMessage(e.id)?.id),
                };
            })(t);
        return (0, i.jsx)(T.Bs.Provider, {
            value: (0, w.A)(k, u),
            children: (0, i.jsx)(B.t, {
                children: (0, i.jsx)(J, {
                    ...d,
                    messageGroupSpacing: S,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (a || b),
                    messages: F,
                    channelStream: H,
                    permissionVersion: m,
                    uploads: (0, c.bG)([L.A], () => L.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([O.Ay], () => O.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != V,
                    canChat: f,
                    editingMessageId: K,
                    fontSize: v,
                    keyboardModeEnabled: G,
                    showingQuarantineBanner: n,
                    hideSummaries: s,
                    typingGradient: o,
                }),
            }),
        });
    });
