n.d(t, { A: () => Y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(4208),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(432371),
    m = n(765548),
    A = n(775602),
    g = n(821720),
    p = n(429913),
    f = n(354328),
    _ = n(559149),
    E = n(164956),
    x = n(302031),
    C = n(513272),
    S = n(253932),
    I = n(617617),
    T = n(961350),
    N = n(72314),
    v = n(580745),
    b = n(834942),
    y = n(320501),
    j = n(576705),
    R = n(222823),
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
    K = n(317651);
let W = (0, r.animated)(d.fKU),
    z = l.memo(
        function (e) {
            var t;
            let n,
                s,
                r,
                {
                    className: h,
                    messageGroupSpacing: g,
                    scrollerClassName: p,
                    channel: f,
                    messages: _,
                    unreadCount: x,
                    showNewMessagesBar: C,
                    messageDisplayCompact: S,
                    channelStream: T,
                    uploads: v,
                    hasUnreads: b,
                    editingMessageId: y,
                    fontSize: R,
                    keyboardModeEnabled: M,
                    filterAfterTimestamp: D,
                    showingQuarantineBanner: L,
                    hideSummaries: P = !1,
                    jumpBarClassName: U,
                    typingGradient: z,
                } = e,
                [Y, q] = l.useState(N.A.isAtBottom(f.id) ?? !1),
                J = (0, w.I)(S, R),
                $ = S ? J : Math.round(0.87 * J),
                Z = Math.max(1, Math.round(($ / 30) * 8)),
                X = l.useMemo(
                    () =>
                        (0, k.bW)({
                            compact: S,
                            messageGroups: $,
                            groupRange: 4,
                            attachments: Z,
                            fontSize: R,
                            groupSpacing: g,
                        }),
                    [S, $, Z, R, g],
                ),
                Q = (0, F.Ay)({
                    messages: _,
                    channel: f,
                    compact: S,
                    hasUnreads: b,
                    focusId: y,
                    placeholderHeight: X.totalHeight,
                    canLoadMore: null == D,
                    handleScrollToBottom: l.useCallback(() => q(!0), [q]),
                    handleScrollFromBottom: l.useCallback(() => q(!1), [q]),
                    additionalMessagePadding: 48,
                }),
                ee = (0, G.A)({
                    scrollerRef: Q.ref,
                    isEditing: null != y,
                    keyboardModeEnabled: M,
                    hasMoreAfter: _.hasMoreAfter,
                }),
                et = (0, c.bG)([E.A], () =>
                    j.A.can(B.xBc.READ_MESSAGE_HISTORY, f) ? null : E.A.getViewingRolesTimestamp(f.getGuildId()),
                ),
                {
                    channelStreamMarkup: en,
                    newMessagesBar: ei,
                    jumpToPresentBar: el,
                    forumPostActionBar: es,
                    safetyWarningBanner: ea,
                } = (0, H.A)({
                    channel: f,
                    messages: _,
                    unreadCount: x,
                    showNewMessagesBar: C,
                    messageDisplayCompact: S,
                    channelStream: T,
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
                (s = l.useCallback(() => t.current?.scrollPageUp({ animate: !A.A.useReducedMotion }), [t])),
                (r = l.useCallback(() => t.current?.scrollPageDown({ animate: !A.A.useReducedMotion }), [t])),
                (0, O.Vo)({ event: B.jej.SCROLLTO_PRESENT, handler: n }),
                (0, O.Vo)({ event: B.jej.SCROLL_PAGE_UP, handler: s }),
                (0, O.Vo)({ event: B.jej.SCROLL_PAGE_DOWN, handler: r });
            let er = (0, d.R7z)(),
                { ref: eo, ...ec } = (0, o.LT)(ee),
                ed = (0, m.A)((e) => {
                    (Q.ref.current = e), (eo.current = e?.getScrollerNode() ?? null);
                }),
                eu = (0, c.bG)([I.A], () => {
                    let e = I.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eh = l.useMemo(() => (z ? (Y ? K.gA : K.ru) : K.Zd), [z, Y]),
                em = l.useMemo(() => (z ? (Y ? K.cz : K.XF) : K.U6), [z, Y]);
            return (0, i.jsxs)(o.hD, {
                navigator: ee,
                children: [
                    null != ea && ea,
                    (0, i.jsxs)("div", {
                        className: a()(K.Og, h, `group-spacing-${g}`),
                        children: [
                            null == ea && ei,
                            (0, i.jsxs)(W, {
                                ref: ed,
                                customTheme: !0,
                                className: a()(p, K.XG, eu ? em : void 0),
                                contentClassName: K.gT,
                                onResize: Q.handleResize,
                                onScroll: Q.handleScroll,
                                onMouseDown: Q.handleMouseDown,
                                onMouseUp: Q.handleMouseUp,
                                ...er,
                                tabIndex: -1,
                                role: "group",
                                children: [
                                    es,
                                    (0, i.jsxs)("ol", {
                                        className: a()(K.bv, { [K.FD]: f.isModeratorReportChannel() }),
                                        "aria-label": V.intl.formatToPlainString(V.t.XarRiL, { channelName: f.name }),
                                        ...ec,
                                        children: [
                                            (0, i.jsx)("span", {
                                                className: K.$4,
                                                id: "messagesNavigationDescription",
                                                "aria-hidden": !0,
                                                children: V.intl.string(V.t["Spb3s/"]),
                                            }),
                                            en,
                                            (0, i.jsx)("div", {
                                                className: a()({
                                                    [K.lB]: !L,
                                                    [K.Ie]: 0 === _.length && !_.loadingMore,
                                                    [K.Fb]:
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
                hideSummaries: s = !1,
                forceCompact: a = !1,
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
                    n = (0, c.bG)([b.A], () => null == t || b.A.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: l } = (0, c.cf)(
                        [j.A],
                        () => ({
                            canManageMessages: j.A.can(B.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? j.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return { canChat: n, permissionVersion: l, canManageMessages: i };
            })(t),
            {
                messageGroupSpacing: I,
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
                    i = (0, c.bG)([y.A], () => y.A.getMessages(e.id), [e.id]),
                    s = (0, c.bG)([R.Ay], () => R.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: a } = _.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    r = D.default.getUser(T.default.getId())?.hasFlag(B.nhx.SPAMMER) ?? !1,
                    o = (0, h.cI)(e),
                    d = (0, f.A)("use_topic_dividers_in_chat"),
                    u = (0, c.yK)([C.A], () => (o && d ? (C.A.summaries(e.id) ?? []) : []), [o, e.id, d]),
                    m = (0, c.bG)([C.A], () => (o ? C.A.selectedSummary(e.id) : null), [o, e.id]),
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
                        (0, p.A)(n));
                (0, g.A)(i, e);
                let E = l.useMemo(
                    () =>
                        (0, P.A)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: s,
                            treatSpam: a && !r,
                            summaries: u,
                            selectedSummary: m,
                        }),
                    [i, e, s, a, u, m, A, r],
                );
                return {
                    messages: i,
                    channelStream: E,
                    oldestUnreadMessageId: s,
                    editingMessageId: (0, c.bG)([v.A], () => v.A.getEditingMessage(e.id)?.id),
                };
            })(t);
        return (0, i.jsx)(x.Bs.Provider, {
            value: (0, L.A)(w, u),
            children: (0, i.jsx)(U.t, {
                children: (0, i.jsx)(z, {
                    ...d,
                    messageGroupSpacing: I,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (a || O),
                    messages: G,
                    channelStream: F,
                    permissionVersion: m,
                    uploads: (0, c.bG)([M.A], () => M.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([R.Ay], () => R.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != H,
                    canChat: E,
                    editingMessageId: V,
                    fontSize: N,
                    keyboardModeEnabled: k,
                    showingQuarantineBanner: n,
                    hideSummaries: s,
                    typingGradient: o,
                }),
            }),
        });
    });
