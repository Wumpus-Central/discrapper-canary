n.d(t, { Z: () => H }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(91192),
    o = n(442837),
    c = n(481060),
    d = n(904245),
    u = n(902840),
    h = n(448986),
    p = n(607070),
    m = n(931056),
    f = n(835473),
    g = n(95398),
    _ = n(580747),
    C = n(135938),
    x = n(160404),
    v = n(765104),
    E = n(695346),
    I = n(314897),
    b = n(323873),
    Z = n(607744),
    N = n(375954),
    T = n(496675),
    S = n(306680),
    j = n(62817),
    y = n(594174),
    A = n(459273),
    P = n(255269),
    R = n(47481),
    M = n(977391),
    L = n(959258),
    k = n(73274),
    O = n(419388),
    D = n(406534),
    w = n(981631),
    U = n(388032),
    B = n(813591);
let F = l.memo(
        function (e) {
            var t;
            let { className: n, messageGroupSpacing: a, scrollerClassName: u, channel: m, messages: f, unreadCount: g, showNewMessagesBar: _, messageDisplayCompact: C, channelStream: v, uploads: E, hasUnreads: I, editingMessageId: b, fontSize: Z, keyboardModeEnabled: N, filterAfterTimestamp: S, showingQuarantineBanner: j, hideSummaries: y = !1, jumpBarClassName: P } = e,
                [R, L] = l.useState(!1),
                F = l.useMemo(
                    () =>
                        C
                            ? (0, M.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: Z,
                                  groupSpacing: a
                              })
                            : (0, M.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: Z,
                                  groupSpacing: a
                              }),
                    [C, Z, a]
                ),
                H = (0, O.ZP)({
                    messages: f,
                    channel: m,
                    compact: C,
                    hasUnreads: I,
                    focusId: b,
                    placeholderHeight: F.totalHeight,
                    canLoadMore: null == S,
                    handleScrollToBottom: l.useCallback(() => L(!0), [L]),
                    handleScrollFromBottom: l.useCallback(() => L(!1), [L])
                }),
                G = (0, k.Z)({
                    scrollerRef: H.ref,
                    isEditing: null != b,
                    keyboardModeEnabled: N,
                    hasMoreAfter: f.hasMoreAfter
                }),
                V = (0, o.e7)([x.Z], () => (T.Z.can(w.Plq.READ_MESSAGE_HISTORY, m) ? null : x.Z.getViewingRolesTimestamp(m.getGuildId()))),
                {
                    channelStreamMarkup: z,
                    newMessagesBar: W,
                    jumpToPresentBar: Y,
                    forumPostActionBar: q,
                    safetyWarningBanner: K
                } = (0, D.Z)({
                    channel: m,
                    messages: f,
                    unreadCount: g,
                    showNewMessagesBar: _,
                    messageDisplayCompact: C,
                    channelStream: v,
                    uploads: E,
                    loadMore: H.loadMore,
                    scrollManager: H,
                    specs: F,
                    filterAfterTimestamp: null != S ? S : V,
                    showingQuarantineBanner: j,
                    hideSummaries: y,
                    isAtBottom: R,
                    jumpToPresent: () => {
                        if (f.hasPresent()) {
                            var e;
                            null === (e = H.ref.current) || void 0 === e || e.scrollToBottom({ animate: !p.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(m.id, w.AQB);
                    },
                    jumpBarClassName: P
                });
            !(function (e) {
                let t = l.useCallback(() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom();
                    }, [e]),
                    n = l.useCallback(() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({ animate: !p.Z.useReducedMotion });
                    }, [e]),
                    i = l.useCallback(() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({ animate: !p.Z.useReducedMotion });
                    }, [e]);
                (0, A.yp)({
                    event: w.CkL.SCROLLTO_PRESENT,
                    handler: t
                }),
                    (0, A.yp)({
                        event: w.CkL.SCROLL_PAGE_UP,
                        handler: n
                    }),
                    (0, A.yp)({
                        event: w.CkL.SCROLL_PAGE_DOWN,
                        handler: i
                    });
            })(H.ref);
            let X = (0, c.mFp)(),
                { ref: J, ...Q } = (0, s.l2)(G),
                $ = (0, h.Z)((e) => {
                    var t;
                    (H.ref.current = e), (J.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                });
            return (0, i.jsxs)(s.bG, {
                navigator: G,
                children: [
                    null != K && K,
                    (0, i.jsxs)('div', {
                        className: r()(B.messagesWrapper, n, 'group-spacing-'.concat(a)),
                        children: [
                            null == K && W,
                            (0, i.jsxs)(c.eTT, {
                                ref: $,
                                customTheme: !0,
                                className: r()(u, B.scroller),
                                contentClassName: B.scrollerContent,
                                onResize: H.handleResize,
                                onScroll: H.handleScroll,
                                onMouseDown: H.handleMouseDown,
                                onMouseUp: H.handleMouseUp,
                                ...X,
                                tabIndex: -1,
                                role: 'group',
                                children: [
                                    q,
                                    (0, i.jsxs)('ol', {
                                        className: B.scrollerInner,
                                        'aria-label': U.intl.formatToPlainString(U.t.XarRiI, { channelName: m.name }),
                                        ...Q,
                                        children: [
                                            (0, i.jsx)('span', {
                                                className: B.navigationDescription,
                                                id: 'messagesNavigationDescription',
                                                'aria-hidden': !0,
                                                children: U.intl.string(U.t.Spb3s7)
                                            }),
                                            z,
                                            (0, i.jsx)('div', {
                                                className: r()({
                                                    [B.scrollerSpacer]: !j,
                                                    [B.empty]: 0 === f.length && !f.loadingMore,
                                                    [B.emptyForum]: 1 === f.length && !f.loadingMore && m.isForumPost() && (null === (t = f.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m))
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Y
                        ]
                    })
                ]
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
    ),
    H = l.memo(function (e) {
        let { channel: t, showingQuarantineBanner: n, hideSummaries: a = !1, forceCompact: r = !1, forceCozy: s = !1, ...c } = e,
            {
                canManageMessages: d,
                permissionVersion: h,
                canChat: x
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, o.e7)([Z.Z], () => null == t || Z.Z.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: l } = (0, o.cj)(
                        [T.Z],
                        () => ({
                            canManageMessages: T.Z.can(w.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? T.Z.getGuildVersion(t) : null
                        }),
                        [e, t]
                    );
                return {
                    canChat: n,
                    permissionVersion: l,
                    canManageMessages: i
                };
            })(t),
            {
                messageGroupSpacing: A,
                fontSize: M,
                messageDisplayCompact: k,
                renderSpoilers: O,
                keyboardModeEnabled: D
            } = (function () {
                let e = E.jU.useSetting(),
                    t = E.cC.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: i,
                        keyboardModeEnabled: l
                    } = (0, o.cj)([p.Z], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = p.Z;
                        return {
                            messageGroupSpacing: e,
                            fontSize: t,
                            keyboardModeEnabled: n
                        };
                    });
                return {
                    messageGroupSpacing: n,
                    messageDisplayCompact: e,
                    renderSpoilers: t,
                    fontSize: i,
                    keyboardModeEnabled: l
                };
            })(),
            {
                messages: U,
                channelStream: B,
                oldestUnreadMessageId: H,
                editingMessageId: G
            } = (function (e) {
                var t, n;
                let i = (0, o.e7)([N.Z], () => N.Z.getMessages(e.id), [e.id]),
                    a = (0, o.e7)(
                        [S.ZP],
                        () => {
                            var t;
                            return null !== (t = S.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
                        },
                        [e.id]
                    ),
                    { enabled: r } = C.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                    s = null !== (n = null === (t = y.default.getUser(I.default.getId())) || void 0 === t ? void 0 : t.hasFlag(w.xW$.SPAMMER)) && void 0 !== n && n,
                    c = (0, u.ts)(e),
                    d = (0, _.Z)('use_topic_dividers_in_chat'),
                    h = (0, o.Wu)(
                        [v.Z],
                        () => {
                            var t;
                            return c && d && null !== (t = v.Z.summaries(e.id)) && void 0 !== t ? t : [];
                        },
                        [c, e.id, d]
                    ),
                    p = (0, o.e7)([v.Z], () => (c ? v.Z.selectedSummary(e.id) : null), [c, e.id]),
                    g = (function (e) {
                        let t = l.useMemo(() => {
                            let t = new Set();
                            return (
                                e.forEach((e) => {
                                    null != e.applicationId && null == e.application && t.add(e.applicationId);
                                }),
                                Array.from(t)
                            );
                        }, [e]);
                        return (0, f.Z)(t);
                    })(i),
                    [x, E] = (0, m.Z)(i, e),
                    Z = l.useMemo(
                        () =>
                            (0, R.Z)({
                                channel: e,
                                messages: i,
                                oldestUnreadMessageId: a,
                                treatSpam: r && !s,
                                summaries: h,
                                selectedSummary: p
                            }),
                        [i, e, a, r, h, p, g, s]
                    );
                return {
                    messages: i,
                    channelStream: Z,
                    oldestUnreadMessageId: a,
                    editingMessageId: (0, o.e7)([b.Z], () => {
                        var t;
                        return null === (t = b.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
                    })
                };
            })(t);
        return (0, i.jsx)(g.a.Provider, {
            value: (0, P.Z)(O, d),
            children: (0, i.jsx)(L.v, {
                children: (0, i.jsx)(F, {
                    ...c,
                    messageGroupSpacing: A,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !s && (r || k),
                    messages: U,
                    channelStream: B,
                    permissionVersion: h,
                    uploads: (0, o.e7)([j.Z], () => j.Z.getFiles(t.id), [t]),
                    unreadCount: (0, o.e7)([S.ZP], () => S.ZP.getUnreadCount(t.id), [t]),
                    hasUnreads: null != H,
                    canChat: x,
                    editingMessageId: G,
                    fontSize: M,
                    keyboardModeEnabled: D,
                    showingQuarantineBanner: n,
                    hideSummaries: a
                })
            })
        });
    });
