n.d(t, { Z: () => Y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(202841),
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
    y = n(580747),
    _ = n(135938),
    C = n(160404),
    v = n(765104),
    x = n(695346),
    O = n(314897),
    j = n(796974),
    E = n(323873),
    S = n(607744),
    I = n(375954),
    P = n(496675),
    Z = n(306680),
    T = n(62817),
    N = n(594174),
    A = n(459273),
    w = n(255269),
    R = n(47481),
    M = n(977391),
    D = n(959258),
    L = n(73274),
    k = n(419388),
    U = n(406534),
    B = n(981631),
    F = n(388032),
    H = n(151227);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let W = (0, o.animated)(u.eTT),
    q = i.memo(
        function (e) {
            var t, n;
            let {
                    className: l,
                    messageGroupSpacing: o,
                    scrollerClassName: p,
                    channel: m,
                    messages: g,
                    unreadCount: b,
                    showNewMessagesBar: y,
                    messageDisplayCompact: _,
                    channelStream: v,
                    uploads: x,
                    hasUnreads: O,
                    editingMessageId: E,
                    fontSize: S,
                    keyboardModeEnabled: I,
                    filterAfterTimestamp: Z,
                    showingQuarantineBanner: T,
                    hideSummaries: N = !1,
                    jumpBarClassName: w,
                    isChatInputBottomAligned: R,
                    typingGradient: D,
                } = e,
                [q, Y] = i.useState(null != (n = j.Z.isAtBottom(m.id)) && n),
                K = i.useMemo(
                    () =>
                        _
                            ? (0, M.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: S,
                                  groupSpacing: o,
                              })
                            : (0, M.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: S,
                                  groupSpacing: o,
                              }),
                    [_, S, o],
                ),
                X = (0, k.ZP)({
                    messages: g,
                    channel: m,
                    compact: _,
                    hasUnreads: O,
                    focusId: E,
                    placeholderHeight: K.totalHeight,
                    canLoadMore: null == Z,
                    handleScrollToBottom: i.useCallback(() => Y(!0), [Y]),
                    handleScrollFromBottom: i.useCallback(() => Y(!1), [Y]),
                    additionalMessagePadding: 48 * !!R,
                }),
                Q = (0, L.Z)({
                    scrollerRef: X.ref,
                    isEditing: null != E,
                    keyboardModeEnabled: I,
                    hasMoreAfter: g.hasMoreAfter,
                }),
                J = (0, c.e7)([C.Z], () =>
                    P.Z.can(B.Plq.READ_MESSAGE_HISTORY, m) ? null : C.Z.getViewingRolesTimestamp(m.getGuildId()),
                ),
                {
                    channelStreamMarkup: $,
                    newMessagesBar: ee,
                    jumpToPresentBar: et,
                    forumPostActionBar: en,
                    safetyWarningBanner: er,
                } = (0, U.Z)({
                    channel: m,
                    messages: g,
                    unreadCount: b,
                    showNewMessagesBar: y,
                    messageDisplayCompact: _,
                    channelStream: v,
                    uploads: x,
                    loadMore: X.loadMore,
                    scrollManager: X,
                    specs: K,
                    filterAfterTimestamp: null != Z ? Z : J,
                    showingQuarantineBanner: T,
                    hideSummaries: N,
                    jumpToPresent: () => {
                        if (g.hasPresent()) {
                            var e;
                            null == (e = X.ref.current) || e.scrollToBottom({ animate: !f.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(m.id, B.AQB);
                    },
                    jumpBarClassName: w,
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
                (0, A.yp)({
                    event: B.CkL.SCROLLTO_PRESENT,
                    handler: t,
                }),
                    (0, A.yp)({
                        event: B.CkL.SCROLL_PAGE_UP,
                        handler: n,
                    }),
                    (0, A.yp)({
                        event: B.CkL.SCROLL_PAGE_DOWN,
                        handler: r,
                    });
            })(X.ref);
            let ei = (0, u.mFp)(),
                el = (0, s.l2)(Q),
                { ref: ea } = el,
                eo = z(el, ["ref"]),
                es = (0, h.Z)((e) => {
                    var t;
                    (X.ref.current = e),
                        (ea.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                }),
                ec = i.useMemo(() => {
                    if (R) return D ? (q ? H.typingGradientAtBottom : H.typingGradientNotAtBottom) : H.gradientDefault;
                }, [D, q, R]);
            return (0, r.jsxs)(s.bG, {
                navigator: Q,
                children: [
                    null != er && er,
                    (0, r.jsxs)("div", {
                        className: a()(H.messagesWrapper, l, "group-spacing-".concat(o)),
                        children: [
                            null == er && ee,
                            (0, r.jsxs)(
                                W,
                                V(
                                    G(
                                        {
                                            ref: es,
                                            customTheme: !0,
                                            className: a()(p, H.scroller, ec),
                                            contentClassName: H.scrollerContent,
                                            onResize: X.handleResize,
                                            onScroll: X.handleScroll,
                                            onMouseDown: X.handleMouseDown,
                                            onMouseUp: X.handleMouseUp,
                                        },
                                        ei,
                                    ),
                                    {
                                        tabIndex: -1,
                                        role: "group",
                                        children: [
                                            en,
                                            (0, r.jsxs)(
                                                "ol",
                                                V(
                                                    G(
                                                        {
                                                            className: a()(H.scrollerInner, {
                                                                [H.scrollerAllowSticky]: m.isModeratorReportChannel(),
                                                            }),
                                                            "aria-label": F.intl.formatToPlainString(F.t.XarRiI, {
                                                                channelName: m.name,
                                                            }),
                                                        },
                                                        eo,
                                                    ),
                                                    {
                                                        children: [
                                                            (0, r.jsx)("span", {
                                                                className: H.navigationDescription,
                                                                id: "messagesNavigationDescription",
                                                                "aria-hidden": !0,
                                                                children: F.intl.string(F.t.Spb3s7),
                                                            }),
                                                            $,
                                                            (0, r.jsx)("div", {
                                                                className: a()({
                                                                    [H.scrollerSpacer]: !T,
                                                                    [H.empty]: 0 === g.length && !g.loadingMore,
                                                                    [H.emptyForum]:
                                                                        1 === g.length &&
                                                                        !g.loadingMore &&
                                                                        m.isForumPost() &&
                                                                        (null == (t = g.first())
                                                                            ? void 0
                                                                            : t.isFirstMessageInForumPost(m)),
                                                                }),
                                                            }),
                                                        ],
                                                    },
                                                ),
                                            ),
                                        ],
                                    },
                                ),
                            ),
                            et,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    Y = i.memo(function (e) {
        var {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: l = !1,
                forceCompact: a = !1,
                forceCozy: o = !1,
                typingGradient: s = !1,
                isChatInputBottomAligned: u = !1,
            } = e,
            d = z(e, [
                "channel",
                "showingQuarantineBanner",
                "hideSummaries",
                "forceCompact",
                "forceCozy",
                "typingGradient",
                "isChatInputBottomAligned",
            ]);
        let {
                canManageMessages: h,
                permissionVersion: C,
                canChat: j,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.e7)([S.Z], () => null == t || S.Z.canChatInGuild(t), [t]),
                    { canManageMessages: r, permissionVersion: i } = (0, c.cj)(
                        [P.Z],
                        () => ({
                            canManageMessages: P.Z.can(B.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? P.Z.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return {
                    canChat: n,
                    permissionVersion: i,
                    canManageMessages: r,
                };
            })(t),
            {
                messageGroupSpacing: A,
                fontSize: M,
                messageDisplayCompact: L,
                renderSpoilers: k,
                keyboardModeEnabled: U,
            } = (function () {
                let e = x.jU.useSetting(),
                    t = x.cC.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: r,
                        keyboardModeEnabled: i,
                    } = (0, c.cj)([f.Z], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = f.Z;
                        return {
                            messageGroupSpacing: e,
                            fontSize: t,
                            keyboardModeEnabled: n,
                        };
                    });
                return {
                    messageGroupSpacing: n,
                    messageDisplayCompact: e,
                    renderSpoilers: t,
                    fontSize: r,
                    keyboardModeEnabled: i,
                };
            })(),
            {
                messages: F,
                channelStream: H,
                oldestUnreadMessageId: W,
                editingMessageId: Y,
            } = (function (e) {
                var t, n;
                let r = (0, c.e7)([I.Z], () => I.Z.getMessages(e.id), [e.id]),
                    l = (0, c.e7)([Z.ZP], () => {
                        var t;
                        return null != (t = Z.ZP.getOldestUnreadMessageId(e.id)) ? t : null;
                    }, [e.id]),
                    { enabled: a } = _.Z.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    o =
                        null !=
                            (n =
                                null == (t = N.default.getUser(O.default.getId()))
                                    ? void 0
                                    : t.hasFlag(B.xW$.SPAMMER)) && n,
                    s = (0, p.ts)(e),
                    u = (0, y.Z)("use_topic_dividers_in_chat"),
                    d = (0, c.Wu)([v.Z], () => {
                        var t;
                        return s && u && null != (t = v.Z.summaries(e.id)) ? t : [];
                    }, [s, e.id, u]),
                    h = (0, c.e7)([v.Z], () => (s ? v.Z.selectedSummary(e.id) : null), [s, e.id]),
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
                            selectedSummary: h,
                        }),
                    [r, e, l, a, d, h, f, o],
                );
                return {
                    messages: r,
                    channelStream: b,
                    oldestUnreadMessageId: l,
                    editingMessageId: (0, c.e7)([E.Z], () => {
                        var t;
                        return null == (t = E.Z.getEditingMessage(e.id)) ? void 0 : t.id;
                    }),
                };
            })(t);
        return (0, r.jsx)(b.aQ.Provider, {
            value: (0, w.Z)(k, h),
            children: (0, r.jsx)(D.v, {
                children: (0, r.jsx)(
                    q,
                    V(G({}, d), {
                        messageGroupSpacing: A,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !o && (a || L),
                        messages: F,
                        channelStream: H,
                        permissionVersion: C,
                        uploads: (0, c.e7)([T.Z], () => T.Z.getFiles(t.id), [t]),
                        unreadCount: (0, c.e7)([Z.ZP], () => Z.ZP.getUnreadCount(t.id), [t]),
                        hasUnreads: null != W,
                        canChat: j,
                        editingMessageId: Y,
                        fontSize: M,
                        keyboardModeEnabled: U,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: s,
                        isChatInputBottomAligned: u,
                    }),
                ),
            }),
        });
    });
