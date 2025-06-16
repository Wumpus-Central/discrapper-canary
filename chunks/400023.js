n.d(t, { Z: () => W }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(524979),
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
    j = n(314897),
    O = n(323873),
    E = n(607744),
    I = n(375954),
    P = n(496675),
    S = n(306680),
    Z = n(62817),
    N = n(594174),
    T = n(459273),
    A = n(255269),
    w = n(47481),
    R = n(977391),
    M = n(959258),
    k = n(73274),
    D = n(419388),
    L = n(406534),
    U = n(981631),
    B = n(388032),
    F = n(977659);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function H(e, t) {
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
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let z = i.memo(
        function (e) {
            var t;
            let { className: n, messageGroupSpacing: l, scrollerClassName: p, channel: m, messages: g, unreadCount: b, showNewMessagesBar: _, messageDisplayCompact: y, channelStream: x, uploads: v, hasUnreads: j, editingMessageId: O, fontSize: E, keyboardModeEnabled: I, filterAfterTimestamp: S, showingQuarantineBanner: Z, hideSummaries: N = !1, jumpBarClassName: A, typingGradient: w } = e,
                [M, z] = i.useState(!1),
                W = i.useMemo(
                    () =>
                        y
                            ? (0, R.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: E,
                                  groupSpacing: l
                              })
                            : (0, R.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: E,
                                  groupSpacing: l
                              }),
                    [y, E, l]
                ),
                Y = (0, D.ZP)({
                    messages: g,
                    channel: m,
                    compact: y,
                    hasUnreads: j,
                    focusId: O,
                    placeholderHeight: W.totalHeight,
                    canLoadMore: null == S,
                    handleScrollToBottom: i.useCallback(() => z(!0), [z]),
                    handleScrollFromBottom: i.useCallback(() => z(!1), [z])
                }),
                q = (0, k.Z)({
                    scrollerRef: Y.ref,
                    isEditing: null != O,
                    keyboardModeEnabled: I,
                    hasMoreAfter: g.hasMoreAfter
                }),
                K = (0, c.e7)([C.Z], () => (P.Z.can(U.Plq.READ_MESSAGE_HISTORY, m) ? null : C.Z.getViewingRolesTimestamp(m.getGuildId()))),
                {
                    channelStreamMarkup: X,
                    newMessagesBar: Q,
                    jumpToPresentBar: J,
                    forumPostActionBar: $,
                    safetyWarningBanner: ee
                } = (0, L.Z)({
                    channel: m,
                    messages: g,
                    unreadCount: b,
                    showNewMessagesBar: _,
                    messageDisplayCompact: y,
                    channelStream: x,
                    uploads: v,
                    loadMore: Y.loadMore,
                    scrollManager: Y,
                    specs: W,
                    filterAfterTimestamp: null != S ? S : K,
                    showingQuarantineBanner: Z,
                    hideSummaries: N,
                    isAtBottom: M,
                    jumpToPresent: () => {
                        if (g.hasPresent()) {
                            var e;
                            null == (e = Y.ref.current) || e.scrollToBottom({ animate: !f.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(m.id, U.AQB);
                    },
                    jumpBarClassName: A
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
                (0, T.yp)({
                    event: U.CkL.SCROLLTO_PRESENT,
                    handler: t
                }),
                    (0, T.yp)({
                        event: U.CkL.SCROLL_PAGE_UP,
                        handler: n
                    }),
                    (0, T.yp)({
                        event: U.CkL.SCROLL_PAGE_DOWN,
                        handler: r
                    });
            })(Y.ref);
            let et = (0, u.mFp)(),
                en = (0, s.l2)(q),
                { ref: er } = en,
                ei = V(en, ['ref']),
                el = (0, h.Z)((e) => {
                    var t;
                    (Y.ref.current = e), (er.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                }),
                { fadeStart: ea, maskOpacity: eo } = (0, u.q_F)({
                    fadeStart: M ? 28 : 84,
                    maskOpacity: +!w,
                    config: {
                        tension: 100,
                        friction: 20,
                        clamp: !0
                    }
                });
            return (0, r.jsxs)(s.bG, {
                navigator: q,
                children: [
                    null != ee && ee,
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(F.messagesWrapper, n, 'group-spacing-'.concat(l)),
                        style: {
                            mask: (0, o.to)([ea, eo], (e, t) => 'linear-gradient(180deg, black 0%, black calc(100% - '.concat(e, 'px), rgba(0,0,0,').concat(t, ') calc(100% - 12px), rgba(0,0,0,').concat(t, ') 100%)'))
                        },
                        children: [
                            null == ee && Q,
                            (0, r.jsxs)(
                                u.eTT,
                                H(
                                    G(
                                        {
                                            ref: el,
                                            customTheme: !0,
                                            className: a()(p, F.scroller),
                                            contentClassName: F.scrollerContent,
                                            onResize: Y.handleResize,
                                            onScroll: Y.handleScroll,
                                            onMouseDown: Y.handleMouseDown,
                                            onMouseUp: Y.handleMouseUp
                                        },
                                        et
                                    ),
                                    {
                                        tabIndex: -1,
                                        role: 'group',
                                        children: [
                                            $,
                                            (0, r.jsxs)(
                                                'ol',
                                                H(
                                                    G(
                                                        {
                                                            className: a()(F.scrollerInner, { [F.scrollerAllowSticky]: m.isModeratorReportChannel() }),
                                                            'aria-label': B.intl.formatToPlainString(B.t.XarRiI, { channelName: m.name })
                                                        },
                                                        ei
                                                    ),
                                                    {
                                                        children: [
                                                            (0, r.jsx)('span', {
                                                                className: F.navigationDescription,
                                                                id: 'messagesNavigationDescription',
                                                                'aria-hidden': !0,
                                                                children: B.intl.string(B.t.Spb3s7)
                                                            }),
                                                            X,
                                                            (0, r.jsx)('div', {
                                                                className: a()({
                                                                    [F.scrollerSpacer]: !Z,
                                                                    [F.empty]: 0 === g.length && !g.loadingMore,
                                                                    [F.emptyForum]: 1 === g.length && !g.loadingMore && m.isForumPost() && (null == (t = g.first()) ? void 0 : t.isFirstMessageInForumPost(m))
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
                            J
                        ]
                    })
                ]
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
    ),
    W = i.memo(function (e) {
        var { channel: t, showingQuarantineBanner: n, hideSummaries: l = !1, forceCompact: a = !1, forceCozy: o = !1, typingGradient: s = !1 } = e,
            u = V(e, ['channel', 'showingQuarantineBanner', 'hideSummaries', 'forceCompact', 'forceCozy', 'typingGradient']);
        let {
                canManageMessages: d,
                permissionVersion: h,
                canChat: C
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.e7)([E.Z], () => null == t || E.Z.canChatInGuild(t), [t]),
                    { canManageMessages: r, permissionVersion: i } = (0, c.cj)(
                        [P.Z],
                        () => ({
                            canManageMessages: P.Z.can(U.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? P.Z.getGuildVersion(t) : null
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
                messageGroupSpacing: T,
                fontSize: R,
                messageDisplayCompact: k,
                renderSpoilers: D,
                keyboardModeEnabled: L
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
                messages: B,
                channelStream: F,
                oldestUnreadMessageId: W,
                editingMessageId: Y
            } = (function (e) {
                var t, n;
                let r = (0, c.e7)([I.Z], () => I.Z.getMessages(e.id), [e.id]),
                    l = (0, c.e7)(
                        [S.ZP],
                        () => {
                            var t;
                            return null != (t = S.ZP.getOldestUnreadMessageId(e.id)) ? t : null;
                        },
                        [e.id]
                    ),
                    { enabled: a } = y.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                    o = null != (n = null == (t = N.default.getUser(j.default.getId())) ? void 0 : t.hasFlag(U.xW$.SPAMMER)) && n,
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
                        (0, w.Z)({
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
                    editingMessageId: (0, c.e7)([O.Z], () => {
                        var t;
                        return null == (t = O.Z.getEditingMessage(e.id)) ? void 0 : t.id;
                    })
                };
            })(t);
        return (0, r.jsx)(b.aQ.Provider, {
            value: (0, A.Z)(D, d),
            children: (0, r.jsx)(M.v, {
                children: (0, r.jsx)(
                    z,
                    H(G({}, u), {
                        messageGroupSpacing: T,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !o && (a || k),
                        messages: B,
                        channelStream: F,
                        permissionVersion: h,
                        uploads: (0, c.e7)([Z.Z], () => Z.Z.getFiles(t.id), [t]),
                        unreadCount: (0, c.e7)([S.ZP], () => S.ZP.getUnreadCount(t.id), [t]),
                        hasUnreads: null != W,
                        canChat: C,
                        editingMessageId: Y,
                        fontSize: R,
                        keyboardModeEnabled: L,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: s
                    })
                )
            })
        });
    });
