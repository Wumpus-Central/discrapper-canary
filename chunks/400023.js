n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(135938),
    x = n(160404),
    v = n(765104),
    _ = n(695346),
    I = n(314897),
    E = n(323873),
    b = n(607744),
    Z = n(375954),
    N = n(496675),
    S = n(306680),
    T = n(62817),
    j = n(594174),
    A = n(459273),
    y = n(255269),
    P = n(47481),
    M = n(977391),
    R = n(959258),
    L = n(73274),
    k = n(419388),
    O = n(406534),
    D = n(981631),
    w = n(388032),
    B = n(991823);
let U = l.memo(
    function (e) {
        var t, n;
        let { className: r, messageGroupSpacing: u, scrollerClassName: m, channel: f, messages: g, unreadCount: C, showNewMessagesBar: v, messageDisplayCompact: _, channelStream: I, uploads: E, hasUnreads: b, editingMessageId: Z, fontSize: S, keyboardModeEnabled: T, filterAfterTimestamp: j, showingQuarantineBanner: y, hideSummaries: P = !1, jumpBarClassName: R } = e,
            [U, H] = l.useState(!1),
            G = l.useMemo(
                () =>
                    _
                        ? (0, M.aJ)({
                              compact: !0,
                              messageGroups: 30,
                              groupRange: 4,
                              attachments: 8,
                              fontSize: S,
                              groupSpacing: u
                          })
                        : (0, M.aJ)({
                              compact: !1,
                              messageGroups: 26,
                              groupRange: 4,
                              attachments: 8,
                              fontSize: S,
                              groupSpacing: u
                          }),
                [_, S, u]
            ),
            F = (0, k.ZP)({
                messages: g,
                channel: f,
                compact: _,
                hasUnreads: b,
                focusId: Z,
                placeholderHeight: G.totalHeight,
                canLoadMore: null == j,
                handleScrollToBottom: l.useCallback(() => H(!0), [H]),
                handleScrollFromBottom: l.useCallback(() => H(!1), [H])
            }),
            V = (0, L.Z)({
                scrollerRef: F.ref,
                isEditing: null != Z,
                keyboardModeEnabled: T,
                hasMoreAfter: g.hasMoreAfter
            });
        let z = ((n = f), (0, o.e7)([x.Z], () => (N.Z.can(D.Plq.READ_MESSAGE_HISTORY, n) ? null : x.Z.getViewingRolesTimestamp(n.getGuildId())))),
            {
                channelStreamMarkup: W,
                newMessagesBar: K,
                jumpToPresentBar: Y,
                forumPostActionBar: q,
                safetyWarningBanner: X
            } = (0, O.Z)({
                channel: f,
                messages: g,
                unreadCount: C,
                showNewMessagesBar: v,
                messageDisplayCompact: _,
                channelStream: I,
                uploads: E,
                loadMore: F.loadMore,
                scrollManager: F,
                specs: G,
                filterAfterTimestamp: null != j ? j : z,
                showingQuarantineBanner: y,
                hideSummaries: P,
                isAtBottom: U,
                jumpToPresent: () => {
                    if (g.hasPresent()) {
                        var e;
                        null === (e = F.ref.current) || void 0 === e || e.scrollToBottom({ animate: !p.Z.useReducedMotion });
                    } else d.Z.jumpToPresent(f.id, D.AQB);
                },
                jumpBarClassName: R
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
                event: D.CkL.SCROLLTO_PRESENT,
                handler: t
            }),
                (0, A.yp)({
                    event: D.CkL.SCROLL_PAGE_UP,
                    handler: n
                }),
                (0, A.yp)({
                    event: D.CkL.SCROLL_PAGE_DOWN,
                    handler: i
                });
        })(F.ref);
        let J = (0, c.useFocusJumpSection)(),
            { ref: Q, ...$ } = (0, s.l2)(V),
            ee = (0, h.Z)((e) => {
                var t;
                (F.ref.current = e), (Q.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
            });
        return (0, i.jsxs)(s.bG, {
            navigator: V,
            children: [
                null != X && X,
                (0, i.jsxs)('div', {
                    className: a()(B.messagesWrapper, r, 'group-spacing-'.concat(u)),
                    children: [
                        null == X && K,
                        (0, i.jsxs)(c.PinToBottomScrollerAuto, {
                            ref: ee,
                            customTheme: !0,
                            className: a()(m, B.scroller),
                            contentClassName: B.scrollerContent,
                            onResize: F.handleResize,
                            onScroll: F.handleScroll,
                            onMouseDown: F.handleMouseDown,
                            onMouseUp: F.handleMouseUp,
                            ...J,
                            tabIndex: -1,
                            role: 'group',
                            children: [
                                q,
                                (0, i.jsxs)('ol', {
                                    className: B.scrollerInner,
                                    'aria-label': w.intl.formatToPlainString(w.t.XarRiI, { channelName: f.name }),
                                    ...$,
                                    children: [
                                        (0, i.jsx)('span', {
                                            className: B.navigationDescription,
                                            id: 'messagesNavigationDescription',
                                            'aria-hidden': !0,
                                            children: w.intl.string(w.t.Spb3s7)
                                        }),
                                        W,
                                        (0, i.jsx)('div', {
                                            className: a()({
                                                [B.scrollerSpacer]: !y,
                                                [B.empty]: 0 === g.length && !g.loadingMore,
                                                [B.emptyForum]: 1 === g.length && !g.loadingMore && f.isForumPost() && (null === (t = g.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(f))
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
);
t.Z = l.memo(function (e) {
    let { channel: t, showingQuarantineBanner: n, hideSummaries: r = !1, forceCompact: a = !1, forceCozy: s = !1, ...c } = e,
        {
            canManageMessages: d,
            permissionVersion: h,
            canChat: x
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
            messageGroupSpacing: A,
            fontSize: M,
            messageDisplayCompact: L,
            renderSpoilers: k,
            keyboardModeEnabled: O
        } = (function () {
            let e = _.jU.useSetting(),
                t = _.cC.useSetting(),
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
            channelStream: B,
            oldestUnreadMessageId: H,
            editingMessageId: G
        } = (function (e) {
            var t, n;
            let i = (0, o.e7)([Z.Z], () => Z.Z.getMessages(e.id), [e.id]),
                r = (0, o.e7)(
                    [S.ZP],
                    () => {
                        var t;
                        return null !== (t = S.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
                    },
                    [e.id]
                ),
                { enabled: a } = C.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                s = null !== (n = null === (t = j.default.getUser(I.default.getId())) || void 0 === t ? void 0 : t.hasFlag(D.xW$.SPAMMER)) && void 0 !== n && n,
                c = (0, u.ts)(e),
                d = (0, g.Z)('use_topic_dividers_in_chat'),
                h = (0, o.Wu)(
                    [v.Z],
                    () => {
                        var t;
                        return c && d && null !== (t = v.Z.summaries(e.id)) && void 0 !== t ? t : [];
                    },
                    [c, e.id, d]
                ),
                p = (0, o.e7)([v.Z], () => (c ? v.Z.selectedSummary(e.id) : null), [c, e.id]),
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
                x = l.useMemo(
                    () =>
                        (0, P.Z)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: r,
                            treatSpam: a && !s,
                            summaries: h,
                            selectedSummary: p
                        }),
                    [i, e, r, a, h, p, f, s]
                );
            return {
                messages: i,
                channelStream: x,
                oldestUnreadMessageId: r,
                editingMessageId: (0, o.e7)([E.Z], () => {
                    var t;
                    return null === (t = E.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
                })
            };
        })(t);
    return (0, i.jsx)(f.a.Provider, {
        value: (0, y.Z)(k, d),
        children: (0, i.jsx)(R.v, {
            children: (0, i.jsx)(U, {
                ...c,
                messageGroupSpacing: A,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (a || L),
                messages: w,
                channelStream: B,
                permissionVersion: h,
                uploads: (0, o.e7)([T.Z], () => T.Z.getFiles(t.id), [t]),
                unreadCount: (0, o.e7)([S.ZP], () => S.ZP.getUnreadCount(t.id), [t]),
                hasUnreads: null != H,
                canChat: x,
                editingMessageId: G,
                fontSize: M,
                keyboardModeEnabled: O,
                showingQuarantineBanner: n,
                hideSummaries: r
            })
        })
    });
});
