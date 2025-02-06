n.d(t, { Z: () => F }), n(47120);
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
    m = n(835473),
    f = n(95398),
    g = n(580747),
    _ = n(135938),
    C = n(160404),
    x = n(765104),
    v = n(695346),
    E = n(314897),
    I = n(323873),
    b = n(607744),
    Z = n(375954),
    N = n(496675),
    T = n(306680),
    S = n(62817),
    j = n(594174),
    y = n(459273),
    A = n(255269),
    P = n(47481),
    R = n(977391),
    M = n(959258),
    L = n(73274),
    k = n(419388),
    O = n(406534),
    D = n(981631),
    w = n(388032),
    U = n(991823);
let B = l.memo(
        function (e) {
            var t;
            let { className: n, messageGroupSpacing: a, scrollerClassName: u, channel: m, messages: f, unreadCount: g, showNewMessagesBar: _, messageDisplayCompact: x, channelStream: v, uploads: E, hasUnreads: I, editingMessageId: b, fontSize: Z, keyboardModeEnabled: T, filterAfterTimestamp: S, showingQuarantineBanner: j, hideSummaries: A = !1, jumpBarClassName: P } = e,
                [M, B] = l.useState(!1),
                F = l.useMemo(
                    () =>
                        x
                            ? (0, R.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: Z,
                                  groupSpacing: a
                              })
                            : (0, R.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: Z,
                                  groupSpacing: a
                              }),
                    [x, Z, a]
                ),
                H = (0, k.ZP)({
                    messages: f,
                    channel: m,
                    compact: x,
                    hasUnreads: I,
                    focusId: b,
                    placeholderHeight: F.totalHeight,
                    canLoadMore: null == S,
                    handleScrollToBottom: l.useCallback(() => B(!0), [B]),
                    handleScrollFromBottom: l.useCallback(() => B(!1), [B])
                }),
                G = (0, L.Z)({
                    scrollerRef: H.ref,
                    isEditing: null != b,
                    keyboardModeEnabled: T,
                    hasMoreAfter: f.hasMoreAfter
                }),
                V = (0, o.e7)([C.Z], () => (N.Z.can(D.Plq.READ_MESSAGE_HISTORY, m) ? null : C.Z.getViewingRolesTimestamp(m.getGuildId()))),
                {
                    channelStreamMarkup: z,
                    newMessagesBar: W,
                    jumpToPresentBar: Y,
                    forumPostActionBar: q,
                    safetyWarningBanner: K
                } = (0, O.Z)({
                    channel: m,
                    messages: f,
                    unreadCount: g,
                    showNewMessagesBar: _,
                    messageDisplayCompact: x,
                    channelStream: v,
                    uploads: E,
                    loadMore: H.loadMore,
                    scrollManager: H,
                    specs: F,
                    filterAfterTimestamp: null != S ? S : V,
                    showingQuarantineBanner: j,
                    hideSummaries: A,
                    isAtBottom: M,
                    jumpToPresent: () => {
                        if (f.hasPresent()) {
                            var e;
                            null === (e = H.ref.current) || void 0 === e || e.scrollToBottom({ animate: !p.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(m.id, D.AQB);
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
                (0, y.yp)({
                    event: D.CkL.SCROLLTO_PRESENT,
                    handler: t
                }),
                    (0, y.yp)({
                        event: D.CkL.SCROLL_PAGE_UP,
                        handler: n
                    }),
                    (0, y.yp)({
                        event: D.CkL.SCROLL_PAGE_DOWN,
                        handler: i
                    });
            })(H.ref);
            let X = (0, c.mFp)(),
                { ref: Q, ...J } = (0, s.l2)(G),
                $ = (0, h.Z)((e) => {
                    var t;
                    (H.ref.current = e), (Q.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                });
            return (0, i.jsxs)(s.bG, {
                navigator: G,
                children: [
                    null != K && K,
                    (0, i.jsxs)('div', {
                        className: r()(U.messagesWrapper, n, 'group-spacing-'.concat(a)),
                        children: [
                            null == K && W,
                            (0, i.jsxs)(c.eTT, {
                                ref: $,
                                customTheme: !0,
                                className: r()(u, U.scroller),
                                contentClassName: U.scrollerContent,
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
                                        className: U.scrollerInner,
                                        'aria-label': w.intl.formatToPlainString(w.t.XarRiI, { channelName: m.name }),
                                        ...J,
                                        children: [
                                            (0, i.jsx)('span', {
                                                className: U.navigationDescription,
                                                id: 'messagesNavigationDescription',
                                                'aria-hidden': !0,
                                                children: w.intl.string(w.t.Spb3s7)
                                            }),
                                            z,
                                            (0, i.jsx)('div', {
                                                className: r()({
                                                    [U.scrollerSpacer]: !j,
                                                    [U.empty]: 0 === f.length && !f.loadingMore,
                                                    [U.emptyForum]: 1 === f.length && !f.loadingMore && m.isForumPost() && (null === (t = f.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m))
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
    F = l.memo(function (e) {
        let { channel: t, showingQuarantineBanner: n, hideSummaries: a = !1, forceCompact: r = !1, forceCozy: s = !1, ...c } = e,
            {
                canManageMessages: d,
                permissionVersion: h,
                canChat: C
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, o.e7)([b.Z], () => null == t || b.Z.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: l } = (0, o.cj)(
                        [N.Z],
                        () => ({
                            canManageMessages: N.Z.can(D.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? N.Z.getGuildVersion(t) : null
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
                messageGroupSpacing: y,
                fontSize: R,
                messageDisplayCompact: L,
                renderSpoilers: k,
                keyboardModeEnabled: O
            } = (function () {
                let e = v.jU.useSetting(),
                    t = v.cC.useSetting(),
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
                messages: w,
                channelStream: U,
                oldestUnreadMessageId: F,
                editingMessageId: H
            } = (function (e) {
                var t, n;
                let i = (0, o.e7)([Z.Z], () => Z.Z.getMessages(e.id), [e.id]),
                    a = (0, o.e7)(
                        [T.ZP],
                        () => {
                            var t;
                            return null !== (t = T.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
                        },
                        [e.id]
                    ),
                    { enabled: r } = _.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                    s = null !== (n = null === (t = j.default.getUser(E.default.getId())) || void 0 === t ? void 0 : t.hasFlag(D.xW$.SPAMMER)) && void 0 !== n && n,
                    c = (0, u.ts)(e),
                    d = (0, g.Z)('use_topic_dividers_in_chat'),
                    h = (0, o.Wu)(
                        [x.Z],
                        () => {
                            var t;
                            return c && d && null !== (t = x.Z.summaries(e.id)) && void 0 !== t ? t : [];
                        },
                        [c, e.id, d]
                    ),
                    p = (0, o.e7)([x.Z], () => (c ? x.Z.selectedSummary(e.id) : null), [c, e.id]),
                    f = (function (e) {
                        let t = l.useMemo(() => {
                            let t = new Set();
                            return (
                                e.forEach((e) => {
                                    null != e.applicationId && null == e.application && t.add(e.applicationId);
                                }),
                                Array.from(t)
                            );
                        }, [e]);
                        return (0, m.Z)(t);
                    })(i),
                    C = l.useMemo(
                        () =>
                            (0, P.Z)({
                                channel: e,
                                messages: i,
                                oldestUnreadMessageId: a,
                                treatSpam: r && !s,
                                summaries: h,
                                selectedSummary: p
                            }),
                        [i, e, a, r, h, p, f, s]
                    );
                return {
                    messages: i,
                    channelStream: C,
                    oldestUnreadMessageId: a,
                    editingMessageId: (0, o.e7)([I.Z], () => {
                        var t;
                        return null === (t = I.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
                    })
                };
            })(t);
        return (0, i.jsx)(f.a.Provider, {
            value: (0, A.Z)(k, d),
            children: (0, i.jsx)(M.v, {
                children: (0, i.jsx)(B, {
                    ...c,
                    messageGroupSpacing: y,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !s && (r || L),
                    messages: w,
                    channelStream: U,
                    permissionVersion: h,
                    uploads: (0, o.e7)([S.Z], () => S.Z.getFiles(t.id), [t]),
                    unreadCount: (0, o.e7)([T.ZP], () => T.ZP.getUnreadCount(t.id), [t]),
                    hasUnreads: null != F,
                    canChat: C,
                    editingMessageId: H,
                    fontSize: R,
                    keyboardModeEnabled: O,
                    showingQuarantineBanner: n,
                    hideSummaries: a
                })
            })
        });
    });
