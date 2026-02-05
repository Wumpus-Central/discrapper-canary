n.d(t, { A: () => z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(563495),
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
    w = n(540385),
    k = n(830178),
    U = n(722432),
    G = n(258024),
    F = n(672341),
    H = n(652215),
    B = n(985018),
    V = n(478186);
let W = (0, r.animated)(d.fKU),
    K = l.memo(
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
                    jumpBarClassName: k,
                    typingGradient: K,
                } = e,
                [z, Y] = l.useState(N.A.isAtBottom(f.id) ?? !1),
                q = l.useMemo(
                    () =>
                        S
                            ? (0, w.bW)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: j,
                                  groupSpacing: p,
                              })
                            : (0, w.bW)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: j,
                                  groupSpacing: p,
                              }),
                    [S, j, p],
                ),
                J = (0, G.Ay)({
                    messages: _,
                    channel: f,
                    compact: S,
                    hasUnreads: y,
                    focusId: b,
                    placeholderHeight: q.totalHeight,
                    canLoadMore: null == D,
                    handleScrollToBottom: l.useCallback(() => Y(!0), [Y]),
                    handleScrollFromBottom: l.useCallback(() => Y(!1), [Y]),
                    additionalMessagePadding: 48,
                }),
                $ = (0, U.A)({
                    scrollerRef: J.ref,
                    isEditing: null != b,
                    keyboardModeEnabled: M,
                    hasMoreAfter: _.hasMoreAfter,
                }),
                Z = (0, c.bG)([E.A], () =>
                    R.A.can(H.xBc.READ_MESSAGE_HISTORY, f) ? null : E.A.getViewingRolesTimestamp(f.getGuildId()),
                ),
                {
                    channelStreamMarkup: X,
                    newMessagesBar: Q,
                    jumpToPresentBar: ee,
                    forumPostActionBar: et,
                    safetyWarningBanner: en,
                } = (0, F.A)({
                    channel: f,
                    messages: _,
                    unreadCount: C,
                    showNewMessagesBar: x,
                    messageDisplayCompact: S,
                    channelStream: I,
                    uploads: v,
                    loadMore: J.loadMore,
                    scrollManager: J,
                    specs: q,
                    filterAfterTimestamp: D ?? Z,
                    showingQuarantineBanner: L,
                    hideSummaries: P,
                    jumpToPresent: () => {
                        _.hasPresent()
                            ? J.ref.current?.scrollToBottom({ animate: !A.A.useReducedMotion })
                            : u.A.jumpToPresent(f.id, H.EMb);
                    },
                    jumpBarClassName: k,
                });
            (t = J.ref),
                (n = l.useCallback(() => t.current?.scrollToBottom(), [t])),
                (a = l.useCallback(() => t.current?.scrollPageUp({ animate: !A.A.useReducedMotion }), [t])),
                (r = l.useCallback(() => t.current?.scrollPageDown({ animate: !A.A.useReducedMotion }), [t])),
                (0, O.Vo)({ event: H.jej.SCROLLTO_PRESENT, handler: n }),
                (0, O.Vo)({ event: H.jej.SCROLL_PAGE_UP, handler: a }),
                (0, O.Vo)({ event: H.jej.SCROLL_PAGE_DOWN, handler: r });
            let ei = (0, d.R7z)(),
                { ref: el, ...ea } = (0, o.LT)($),
                es = (0, m.A)((e) => {
                    (J.ref.current = e), (el.current = e?.getScrollerNode() ?? null);
                }),
                er = (0, c.bG)([T.A], () => {
                    let e = T.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eo = l.useMemo(() => (K ? (z ? V.gA : V.ru) : V.Zd), [K, z]),
                ec = l.useMemo(() => (K ? (z ? V.cz : V.XF) : V.U6), [K, z]);
            return (0, i.jsxs)(o.hD, {
                navigator: $,
                children: [
                    null != en && en,
                    (0, i.jsxs)("div", {
                        className: s()(V.Og, h, `group-spacing-${p}`),
                        children: [
                            null == en && Q,
                            (0, i.jsxs)(W, {
                                ref: es,
                                customTheme: !0,
                                className: s()(g, V.XG, er ? ec : void 0),
                                contentClassName: V.gT,
                                onResize: J.handleResize,
                                onScroll: J.handleScroll,
                                onMouseDown: J.handleMouseDown,
                                onMouseUp: J.handleMouseUp,
                                ...ei,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    et,
                                    (0, i.jsxs)("ol", {
                                        className: s()(V.bv, { [V.FD]: f.isModeratorReportChannel() }),
                                        "aria-label": B.intl.formatToPlainString(B.t.XarRiL, { channelName: f.name }),
                                        ...ea,
                                        children: [
                                            (0, i.jsx)("span", {
                                                className: V.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: B.intl.string(B.t["Spb3s/"]),
                                            }),
                                            X,
                                            (0, i.jsx)("div", {
                                                className: s()({
                                                    [V.lB]: !L,
                                                    [V.Ie]: 0 === _.length && !_.loadingMore,
                                                    [V.Fb]:
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
                            er ? null : (0, i.jsx)("div", { className: eo }),
                            ee,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    z = l.memo(function (e) {
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
                            canManageMessages: R.A.can(H.xBc.MANAGE_MESSAGES, e),
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
                keyboardModeEnabled: U,
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
                oldestUnreadMessageId: B,
                editingMessageId: V,
            } = (function (e) {
                var t;
                let n,
                    i = (0, c.bG)([b.A], () => b.A.getMessages(e.id), [e.id]),
                    a = (0, c.bG)([j.Ay], () => j.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = _.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    r = D.default.getUser(I.default.getId())?.hasFlag(H.nhx.SPAMMER) ?? !1,
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
            children: (0, i.jsx)(k.t, {
                children: (0, i.jsx)(K, {
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
                    hasUnreads: null != B,
                    canChat: E,
                    editingMessageId: V,
                    fontSize: N,
                    keyboardModeEnabled: U,
                    showingQuarantineBanner: n,
                    hideSummaries: a,
                    typingGradient: o,
                }),
            }),
        });
    });
