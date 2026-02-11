n.d(t, { A: () => Y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(92674),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(432371),
    m = n(765548),
    A = n(775602),
    p = n(821720),
    g = n(429913),
    f = n(354328),
    _ = n(559149),
    E = n(164956),
    C = n(302031),
    x = n(513272),
    S = n(253932),
    T = n(617617),
    I = n(961350),
    N = n(72314),
    v = n(580745),
    y = n(834942),
    b = n(320501),
    R = n(576705),
    j = n(222823),
    M = n(399263),
    D = n(287809),
    O = n(234320),
    L = n(863439),
    P = n(504136),
    w = n(662433),
    k = n(540385),
    U = n(830178),
    G = n(722432),
    F = n(258024),
    H = n(672341),
    B = n(652215),
    V = n(985018),
    W = n(478186);
let K = (0, r.animated)(d.fKU),
    z = l.memo(
        function (e) {
            var t;
            let n,
                a,
                r,
                {
                    className: h,
                    messageGroupSpacing: p,
                    scrollerClassName: g,
                    channel: f,
                    messages: _,
                    unreadCount: C,
                    showNewMessagesBar: x,
                    messageDisplayCompact: S,
                    channelStream: I,
                    uploads: v,
                    hasUnreads: y,
                    editingMessageId: b,
                    fontSize: j,
                    keyboardModeEnabled: M,
                    filterAfterTimestamp: D,
                    showingQuarantineBanner: L,
                    hideSummaries: P = !1,
                    jumpBarClassName: U,
                    typingGradient: z,
                } = e,
                [Y, q] = l.useState(N.A.isAtBottom(f.id) ?? !1),
                J = (0, w.I)(S, j),
                $ = S ? J : Math.round(0.87 * J),
                Z = Math.max(1, Math.round(($ / 30) * 8)),
                X = l.useMemo(
                    () =>
                        (0, k.bW)({
                            compact: S,
                            messageGroups: $,
                            groupRange: 4,
                            attachments: Z,
                            fontSize: j,
                            groupSpacing: p,
                        }),
                    [S, $, Z, j, p],
                ),
                Q = (0, F.Ay)({
                    messages: _,
                    channel: f,
                    compact: S,
                    hasUnreads: y,
                    focusId: b,
                    placeholderHeight: X.totalHeight,
                    canLoadMore: null == D,
                    handleScrollToBottom: l.useCallback(() => q(!0), [q]),
                    handleScrollFromBottom: l.useCallback(() => q(!1), [q]),
                    additionalMessagePadding: 48,
                }),
                ee = (0, G.A)({
                    scrollerRef: Q.ref,
                    isEditing: null != b,
                    keyboardModeEnabled: M,
                    hasMoreAfter: _.hasMoreAfter,
                }),
                et = (0, c.bG)([E.A], () =>
                    R.A.can(B.xBc.READ_MESSAGE_HISTORY, f) ? null : E.A.getViewingRolesTimestamp(f.getGuildId()),
                ),
                {
                    channelStreamMarkup: en,
                    newMessagesBar: ei,
                    jumpToPresentBar: el,
                    forumPostActionBar: ea,
                    safetyWarningBanner: es,
                } = (0, H.A)({
                    channel: f,
                    messages: _,
                    unreadCount: C,
                    showNewMessagesBar: x,
                    messageDisplayCompact: S,
                    channelStream: I,
                    uploads: v,
                    loadMore: Q.loadMore,
                    scrollManager: Q,
                    specs: X,
                    filterAfterTimestamp: D ?? et,
                    showingQuarantineBanner: L,
                    hideSummaries: P,
                    jumpToPresent: () => {
                        _.hasPresent()
                            ? Q.ref.current?.scrollToBottom({ animate: !A.A.useReducedMotion })
                            : u.A.jumpToPresent(f.id, J);
                    },
                    jumpBarClassName: U,
                });
            (t = Q.ref),
                (n = l.useCallback(() => t.current?.scrollToBottom(), [t])),
                (a = l.useCallback(() => t.current?.scrollPageUp({ animate: !A.A.useReducedMotion }), [t])),
                (r = l.useCallback(() => t.current?.scrollPageDown({ animate: !A.A.useReducedMotion }), [t])),
                (0, O.Vo)({ event: B.jej.SCROLLTO_PRESENT, handler: n }),
                (0, O.Vo)({ event: B.jej.SCROLL_PAGE_UP, handler: a }),
                (0, O.Vo)({ event: B.jej.SCROLL_PAGE_DOWN, handler: r });
            let er = (0, d.R7z)(),
                { ref: eo, ...ec } = (0, o.LT)(ee),
                ed = (0, m.A)((e) => {
                    (Q.ref.current = e), (eo.current = e?.getScrollerNode() ?? null);
                }),
                eu = (0, c.bG)([T.A], () => {
                    let e = T.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eh = l.useMemo(() => (z ? (Y ? W.gA : W.ru) : W.Zd), [z, Y]),
                em = l.useMemo(() => (z ? (Y ? W.cz : W.XF) : W.U6), [z, Y]);
            return (0, i.jsxs)(o.hD, {
                navigator: ee,
                children: [
                    null != es && es,
                    (0, i.jsxs)("div", {
                        className: s()(W.Og, h, `group-spacing-${p}`),
                        children: [
                            null == es && ei,
                            (0, i.jsxs)(K, {
                                ref: ed,
                                customTheme: !0,
                                className: s()(g, W.XG, eu ? em : void 0),
                                contentClassName: W.gT,
                                onResize: Q.handleResize,
                                onScroll: Q.handleScroll,
                                onMouseDown: Q.handleMouseDown,
                                onMouseUp: Q.handleMouseUp,
                                ...er,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    ea,
                                    (0, i.jsxs)("ol", {
                                        className: s()(W.bv, { [W.FD]: f.isModeratorReportChannel() }),
                                        "aria-label": V.intl.formatToPlainString(V.t.XarRiL, { channelName: f.name }),
                                        ...ec,
                                        children: [
                                            (0, i.jsx)("span", {
                                                className: W.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: V.intl.string(V.t["Spb3s/"]),
                                            }),
                                            en,
                                            (0, i.jsx)("div", {
                                                className: s()({
                                                    [W.lB]: !L,
                                                    [W.Ie]: 0 === _.length && !_.loadingMore,
                                                    [W.Fb]:
                                                        1 === _.length &&
                                                        !_.loadingMore &&
                                                        f.isForumPost() &&
                                                        _.first()?.isFirstMessageInForumPost(f),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            eu ? null : (0, i.jsx)("div", { className: eh }),
                            el,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    Y = l.memo(function (e) {
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
                permissionVersion: m,
                canChat: E,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.bG)([y.A], () => null == t || y.A.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: l } = (0, c.cf)(
                        [R.A],
                        () => ({
                            canManageMessages: R.A.can(B.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? R.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: l, canManageMessages: i };
            })(t),
            {
                messageGroupSpacing: T,
                fontSize: N,
                messageDisplayCompact: O,
                renderSpoilers: w,
                keyboardModeEnabled: k,
            } = (function () {
                let e = S.hH.useSetting(),
                    t = S.gs.useSetting(),
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
                messages: G,
                channelStream: F,
                oldestUnreadMessageId: H,
                editingMessageId: V,
            } = (function (e) {
                var t;
                let n,
                    i = (0, c.bG)([b.A], () => b.A.getMessages(e.id), [e.id]),
                    a = (0, c.bG)([j.Ay], () => j.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = _.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    r = D.default.getUser(I.default.getId())?.hasFlag(B.nhx.SPAMMER) ?? !1,
                    o = (0, h.cI)(e),
                    d = (0, f.A)("use_topic_dividers_in_chat"),
                    u = (0, c.yK)([x.A], () => (o && d ? (x.A.summaries(e.id) ?? []) : []), [o, e.id, d]),
                    m = (0, c.bG)([x.A], () => (o ? x.A.selectedSummary(e.id) : null), [o, e.id]),
                    A =
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
                        (0, g.A)(n));
                (0, p.A)(i, e);
                let E = l.useMemo(
                    () =>
                        (0, P.A)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: a,
                            treatSpam: s && !r,
                            summaries: u,
                            selectedSummary: m,
                        }),
                    [i, e, a, s, u, m, A, r],
                );
                return {
                    messages: i,
                    channelStream: E,
                    oldestUnreadMessageId: a,
                    editingMessageId: (0, c.bG)([v.A], () => v.A.getEditingMessage(e.id)?.id),
                };
            })(t);
        return (0, i.jsx)(C.Bs.Provider, {
            value: (0, L.A)(w, u),
            children: (0, i.jsx)(U.t, {
                children: (0, i.jsx)(z, {
                    ...d,
                    messageGroupSpacing: T,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (s || O),
                    messages: G,
                    channelStream: F,
                    permissionVersion: m,
                    uploads: (0, c.bG)([M.A], () => M.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([j.Ay], () => j.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != H,
                    canChat: E,
                    editingMessageId: V,
                    fontSize: N,
                    keyboardModeEnabled: k,
                    showingQuarantineBanner: n,
                    hideSummaries: a,
                    typingGradient: o,
                }),
            }),
        });
    });
