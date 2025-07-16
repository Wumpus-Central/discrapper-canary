(n.d(t, { Z: () => Y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(71347),
    s = n(91192),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    p = n(902840),
    h = n(448986),
    f = n(607070),
    m = n(931056),
    g = n(835473),
    b = n(95398),
    _ = n(580747),
    y = n(135938),
    C = n(160404),
    x = n(765104),
    v = n(695346),
    O = n(314897),
    j = n(796974),
    E = n(323873),
    S = n(607744),
    P = n(375954),
    I = n(496675),
    Z = n(306680),
    N = n(62817),
    T = n(594174),
    A = n(459273),
    w = n(255269),
    R = n(47481),
    M = n(977391),
    D = n(959258),
    k = n(73274),
    L = n(419388),
    U = n(406534),
    B = n(981631),
    F = n(388032),
    H = n(977659);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let W = i.memo(
        function (e) {
            var t, n;
            let { className: l, messageGroupSpacing: p, scrollerClassName: m, channel: g, messages: b, unreadCount: _, showNewMessagesBar: y, messageDisplayCompact: x, channelStream: v, uploads: O, hasUnreads: E, editingMessageId: S, fontSize: P, keyboardModeEnabled: Z, filterAfterTimestamp: N, showingQuarantineBanner: T, hideSummaries: w = !1, jumpBarClassName: R, typingGradient: D, isChatInputBottomAligned: W } = e,
                [Y, q] = i.useState(null != (n = j.Z.isAtBottom(g.id)) && n),
                K = i.useMemo(
                    () =>
                        x
                            ? (0, M.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: P,
                                  groupSpacing: p
                              })
                            : (0, M.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: P,
                                  groupSpacing: p
                              }),
                    [x, P, p]
                ),
                X = (0, L.ZP)({
                    messages: b,
                    channel: g,
                    compact: x,
                    hasUnreads: E,
                    focusId: S,
                    placeholderHeight: K.totalHeight,
                    canLoadMore: null == N,
                    handleScrollToBottom: i.useCallback(() => q(!0), [q]),
                    handleScrollFromBottom: i.useCallback(() => q(!1), [q]),
                    additionalMessagePadding: 48 * !!W
                }),
                Q = (0, k.Z)({
                    scrollerRef: X.ref,
                    isEditing: null != S,
                    keyboardModeEnabled: Z,
                    hasMoreAfter: b.hasMoreAfter
                }),
                J = (0, c.e7)([C.Z], () => (I.Z.can(B.Plq.READ_MESSAGE_HISTORY, g) ? null : C.Z.getViewingRolesTimestamp(g.getGuildId()))),
                {
                    channelStreamMarkup: $,
                    newMessagesBar: ee,
                    jumpToPresentBar: et,
                    forumPostActionBar: en,
                    safetyWarningBanner: er
                } = (0, U.Z)({
                    channel: g,
                    messages: b,
                    unreadCount: _,
                    showNewMessagesBar: y,
                    messageDisplayCompact: x,
                    channelStream: v,
                    uploads: O,
                    loadMore: X.loadMore,
                    scrollManager: X,
                    specs: K,
                    filterAfterTimestamp: null != N ? N : J,
                    showingQuarantineBanner: T,
                    hideSummaries: w,
                    jumpToPresent: () => {
                        if (b.hasPresent()) {
                            var e;
                            null == (e = X.ref.current) || e.scrollToBottom({ animate: !f.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(g.id, B.AQB);
                    },
                    jumpBarClassName: R
                });
            !(function (e) {
                let t = i.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollToBottom();
                    }, [e]),
                    n = i.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollPageUp({ animate: !f.Z.useReducedMotion });
                    }, [e]),
                    r = i.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollPageDown({ animate: !f.Z.useReducedMotion });
                    }, [e]);
                ((0, A.yp)({
                    event: B.CkL.SCROLLTO_PRESENT,
                    handler: t
                }),
                    (0, A.yp)({
                        event: B.CkL.SCROLL_PAGE_UP,
                        handler: n
                    }),
                    (0, A.yp)({
                        event: B.CkL.SCROLL_PAGE_DOWN,
                        handler: r
                    }));
            })(X.ref);
            let ei = (0, u.mFp)(),
                el = (0, s.l2)(Q),
                { ref: ea } = el,
                eo = z(el, ['ref']),
                es = (0, h.Z)((e) => {
                    var t;
                    ((X.ref.current = e), (ea.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                }),
                { fadeStart: ec, fadeEnd: eu } = (0, u.q_F)({
                    fadeStart: D && !Y ? 96 : D ? 32 : 16,
                    fadeEnd: D && !Y ? 24 : 24 * !!D,
                    config: {
                        tension: 150,
                        friction: 15,
                        clamp: !0
                    }
                });
            return (0, r.jsxs)(s.bG, {
                navigator: Q,
                children: [
                    null != er && er,
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(H.messagesWrapper, l, 'group-spacing-'.concat(p)),
                        style: W
                            ? {
                                  mask: (0, o.to)([ec, eu], (e, t) => 'linear-gradient(180deg, black 0%, black calc(100% - '.concat(e, 'px), rgba(0,0,0,0) calc(100% - ').concat(t, 'px), rgba(0,0,0,0) 100%)'))
                              }
                            : void 0,
                        children: [
                            null == er && ee,
                            (0, r.jsxs)(
                                u.eTT,
                                V(
                                    G(
                                        {
                                            ref: es,
                                            customTheme: !0,
                                            className: a()(m, H.scroller),
                                            contentClassName: H.scrollerContent,
                                            onResize: X.handleResize,
                                            onScroll: X.handleScroll,
                                            onMouseDown: X.handleMouseDown,
                                            onMouseUp: X.handleMouseUp
                                        },
                                        ei
                                    ),
                                    {
                                        tabIndex: -1,
                                        role: 'group',
                                        children: [
                                            en,
                                            (0, r.jsxs)(
                                                'ol',
                                                V(
                                                    G(
                                                        {
                                                            className: a()(H.scrollerInner, { [H.scrollerAllowSticky]: g.isModeratorReportChannel() }),
                                                            'aria-label': F.intl.formatToPlainString(F.t.XarRiI, { channelName: g.name })
                                                        },
                                                        eo
                                                    ),
                                                    {
                                                        children: [
                                                            (0, r.jsx)('span', {
                                                                className: H.navigationDescription,
                                                                id: 'messagesNavigationDescription',
                                                                'aria-hidden': !0,
                                                                children: F.intl.string(F.t.Spb3s7)
                                                            }),
                                                            $,
                                                            (0, r.jsx)('div', {
                                                                className: a()({
                                                                    [H.scrollerSpacer]: !T,
                                                                    [H.empty]: 0 === b.length && !b.loadingMore,
                                                                    [H.emptyForum]: 1 === b.length && !b.loadingMore && g.isForumPost() && (null == (t = b.first()) ? void 0 : t.isFirstMessageInForumPost(g))
                                                                })
                                                            })
                                                        ]
                                                    }
                                                )
                                            )
                                        ]
                                    }
                                )
                            ),
                            W ? null : et
                        ]
                    }),
                    W ? et : null
                ]
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
    ),
    Y = i.memo(function (e) {
        var { channel: t, showingQuarantineBanner: n, hideSummaries: l = !1, forceCompact: a = !1, forceCozy: o = !1, typingGradient: s = !1, isChatInputBottomAligned: u = !1 } = e,
            d = z(e, ['channel', 'showingQuarantineBanner', 'hideSummaries', 'forceCompact', 'forceCozy', 'typingGradient', 'isChatInputBottomAligned']);
        let {
                canManageMessages: h,
                permissionVersion: C,
                canChat: j
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.e7)([S.Z], () => null == t || S.Z.canChatInGuild(t), [t]),
                    { canManageMessages: r, permissionVersion: i } = (0, c.cj)(
                        [I.Z],
                        () => ({
                            canManageMessages: I.Z.can(B.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? I.Z.getGuildVersion(t) : null
                        }),
                        [e, t]
                    );
                return {
                    canChat: n,
                    permissionVersion: i,
                    canManageMessages: r
                };
            })(t),
            {
                messageGroupSpacing: A,
                fontSize: M,
                messageDisplayCompact: k,
                renderSpoilers: L,
                keyboardModeEnabled: U
            } = (function () {
                let e = v.jU.useSetting(),
                    t = v.cC.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: r,
                        keyboardModeEnabled: i
                    } = (0, c.cj)([f.Z], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = f.Z;
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
                    fontSize: r,
                    keyboardModeEnabled: i
                };
            })(),
            {
                messages: F,
                channelStream: H,
                oldestUnreadMessageId: Y,
                editingMessageId: q
            } = (function (e) {
                var t, n;
                let r = (0, c.e7)([P.Z], () => P.Z.getMessages(e.id), [e.id]),
                    l = (0, c.e7)(
                        [Z.ZP],
                        () => {
                            var t;
                            return null != (t = Z.ZP.getOldestUnreadMessageId(e.id)) ? t : null;
                        },
                        [e.id]
                    ),
                    { enabled: a } = y.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                    o = null != (n = null == (t = T.default.getUser(O.default.getId())) ? void 0 : t.hasFlag(B.xW$.SPAMMER)) && n,
                    s = (0, p.ts)(e),
                    u = (0, _.Z)('use_topic_dividers_in_chat'),
                    d = (0, c.Wu)(
                        [x.Z],
                        () => {
                            var t;
                            return s && u && null != (t = x.Z.summaries(e.id)) ? t : [];
                        },
                        [s, e.id, u]
                    ),
                    h = (0, c.e7)([x.Z], () => (s ? x.Z.selectedSummary(e.id) : null), [s, e.id]),
                    f = (function (e) {
                        let t = i.useMemo(() => {
                            let t = new Set();
                            return (
                                e.forEach((e) => {
                                    null != e.applicationId && null == e.application && t.add(e.applicationId);
                                }),
                                Array.from(t)
                            );
                        }, [e]);
                        return (0, g.Z)(t);
                    })(r);
                (0, m.Z)(r, e);
                let b = i.useMemo(
                    () =>
                        (0, R.Z)({
                            channel: e,
                            messages: r,
                            oldestUnreadMessageId: l,
                            treatSpam: a && !o,
                            summaries: d,
                            selectedSummary: h
                        }),
                    [r, e, l, a, d, h, f, o]
                );
                return {
                    messages: r,
                    channelStream: b,
                    oldestUnreadMessageId: l,
                    editingMessageId: (0, c.e7)([E.Z], () => {
                        var t;
                        return null == (t = E.Z.getEditingMessage(e.id)) ? void 0 : t.id;
                    })
                };
            })(t);
        return (0, r.jsx)(b.aQ.Provider, {
            value: (0, w.Z)(L, h),
            children: (0, r.jsx)(D.v, {
                children: (0, r.jsx)(
                    W,
                    V(G({}, d), {
                        messageGroupSpacing: A,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !o && (a || k),
                        messages: F,
                        channelStream: H,
                        permissionVersion: C,
                        uploads: (0, c.e7)([N.Z], () => N.Z.getFiles(t.id), [t]),
                        unreadCount: (0, c.e7)([Z.ZP], () => Z.ZP.getUnreadCount(t.id), [t]),
                        hasUnreads: null != Y,
                        canChat: j,
                        editingMessageId: q,
                        fontSize: M,
                        keyboardModeEnabled: U,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: s,
                        isChatInputBottomAligned: u
                    })
                )
            })
        });
    });
