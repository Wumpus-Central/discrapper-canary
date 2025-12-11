n.d(t, { Z: () => Y }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(467721),
    s = n(91192),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    p = n(902840),
    f = n(448986),
    h = n(607070),
    m = n(931056),
    g = n(835473),
    b = n(580747),
    C = n(135938),
    y = n(160404),
    v = n(411405),
    O = n(765104),
    x = n(695346),
    E = n(581883),
    j = n(314897),
    S = n(796974),
    _ = n(323873),
    P = n(607744),
    I = n(375954),
    Z = n(496675),
    T = n(306680),
    N = n(62817),
    A = n(594174),
    w = n(459273),
    M = n(255269),
    R = n(47481),
    L = n(977391),
    D = n(959258),
    k = n(73274),
    U = n(419388),
    V = n(406534),
    F = n(981631),
    B = n(388032),
    H = n(85321);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let q = (0, o.animated)(u.eTT),
    K = r.memo(
        function (e) {
            var t, n;
            let {
                    className: l,
                    messageGroupSpacing: o,
                    scrollerClassName: p,
                    channel: m,
                    messages: g,
                    unreadCount: b,
                    showNewMessagesBar: C,
                    messageDisplayCompact: v,
                    channelStream: O,
                    uploads: x,
                    hasUnreads: j,
                    editingMessageId: _,
                    fontSize: P,
                    keyboardModeEnabled: I,
                    filterAfterTimestamp: T,
                    showingQuarantineBanner: N,
                    hideSummaries: A = !1,
                    jumpBarClassName: M,
                    typingGradient: R,
                } = e,
                [D, K] = r.useState(null != (n = S.Z.isAtBottom(m.id)) && n),
                Y = r.useMemo(
                    () =>
                        v
                            ? (0, L.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: P,
                                  groupSpacing: o,
                              })
                            : (0, L.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: P,
                                  groupSpacing: o,
                              }),
                    [v, P, o],
                ),
                X = (0, U.ZP)({
                    messages: g,
                    channel: m,
                    compact: v,
                    hasUnreads: j,
                    focusId: _,
                    placeholderHeight: Y.totalHeight,
                    canLoadMore: null == T,
                    handleScrollToBottom: r.useCallback(() => K(!0), [K]),
                    handleScrollFromBottom: r.useCallback(() => K(!1), [K]),
                    additionalMessagePadding: 48,
                }),
                J = (0, k.Z)({
                    scrollerRef: X.ref,
                    isEditing: null != _,
                    keyboardModeEnabled: I,
                    hasMoreAfter: g.hasMoreAfter,
                }),
                Q = (0, c.e7)([y.Z], () =>
                    Z.Z.can(F.Plq.READ_MESSAGE_HISTORY, m) ? null : y.Z.getViewingRolesTimestamp(m.getGuildId()),
                ),
                {
                    channelStreamMarkup: $,
                    newMessagesBar: ee,
                    jumpToPresentBar: et,
                    forumPostActionBar: en,
                    safetyWarningBanner: ei,
                } = (0, V.Z)({
                    channel: m,
                    messages: g,
                    unreadCount: b,
                    showNewMessagesBar: C,
                    messageDisplayCompact: v,
                    channelStream: O,
                    uploads: x,
                    loadMore: X.loadMore,
                    scrollManager: X,
                    specs: Y,
                    filterAfterTimestamp: null != T ? T : Q,
                    showingQuarantineBanner: N,
                    hideSummaries: A,
                    jumpToPresent: () => {
                        if (g.hasPresent()) {
                            var e;
                            null == (e = X.ref.current) || e.scrollToBottom({ animate: !h.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(m.id, F.AQB);
                    },
                    jumpBarClassName: M,
                });
            !(function (e) {
                let t = r.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollToBottom();
                    }, [e]),
                    n = r.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollPageUp({ animate: !h.Z.useReducedMotion });
                    }, [e]),
                    i = r.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollPageDown({ animate: !h.Z.useReducedMotion });
                    }, [e]);
                (0, w.yp)({
                    event: F.CkL.SCROLLTO_PRESENT,
                    handler: t,
                }),
                    (0, w.yp)({
                        event: F.CkL.SCROLL_PAGE_UP,
                        handler: n,
                    }),
                    (0, w.yp)({
                        event: F.CkL.SCROLL_PAGE_DOWN,
                        handler: i,
                    });
            })(X.ref);
            let er = (0, u.mFp)(),
                el = (0, s.l2)(J),
                { ref: ea } = el,
                eo = W(el, ["ref"]),
                es = (0, f.Z)((e) => {
                    var t;
                    (X.ref.current = e),
                        (ea.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                }),
                ec = (0, c.e7)([E.Z], () => {
                    var e;
                    let t = null == (e = E.Z.settings.appearance) ? void 0 : e.clientThemeSettings;
                    return (
                        (null == t ? void 0 : t.backgroundGradientPresetId) != null ||
                        (null == t ? void 0 : t.customUserThemeSettings) != null
                    );
                }),
                eu = r.useMemo(
                    () => (R ? (D ? H.chatTypingGradientAtBottom : H.chatTypingGradientNotAtBottom) : H.chatGradient),
                    [R, D],
                ),
                ed = r.useMemo(
                    () => (R ? (D ? H.typingGradientAtBottom : H.typingGradientNotAtBottom) : H.gradientDefault),
                    [R, D],
                );
            return (0, i.jsxs)(s.bG, {
                navigator: J,
                children: [
                    null != ei && ei,
                    (0, i.jsxs)("div", {
                        className: a()(H.messagesWrapper, l, "group-spacing-".concat(o)),
                        children: [
                            null == ei && ee,
                            (0, i.jsxs)(
                                q,
                                z(
                                    G(
                                        {
                                            ref: es,
                                            customTheme: !0,
                                            className: a()(p, H.scroller, ec ? ed : void 0),
                                            contentClassName: H.scrollerContent,
                                            onResize: X.handleResize,
                                            onScroll: X.handleScroll,
                                            onMouseDown: X.handleMouseDown,
                                            onMouseUp: X.handleMouseUp,
                                        },
                                        er,
                                    ),
                                    {
                                        tabIndex: -1,
                                        role: "group",
                                        children: [
                                            en,
                                            (0, i.jsxs)(
                                                "ol",
                                                z(
                                                    G(
                                                        {
                                                            className: a()(H.scrollerInner, {
                                                                [H.scrollerAllowSticky]: m.isModeratorReportChannel(),
                                                            }),
                                                            "aria-label": B.intl.formatToPlainString(B.t.XarRiL, {
                                                                channelName: m.name,
                                                            }),
                                                        },
                                                        eo,
                                                    ),
                                                    {
                                                        children: [
                                                            (0, i.jsx)("span", {
                                                                className: H.navigationDescription,
                                                                id: "messagesNavigationDescription",
                                                                "aria-hidden": !0,
                                                                children: B.intl.string(B.t["Spb3s/"]),
                                                            }),
                                                            $,
                                                            (0, i.jsx)("div", {
                                                                className: a()({
                                                                    [H.scrollerSpacer]: !N,
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
                            ec ? null : (0, i.jsx)("div", { className: eu }),
                            et,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    Y = r.memo(function (e) {
        var {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: l = !1,
                forceCompact: a = !1,
                forceCozy: o = !1,
                typingGradient: s = !1,
            } = e,
            u = W(e, [
                "channel",
                "showingQuarantineBanner",
                "hideSummaries",
                "forceCompact",
                "forceCozy",
                "typingGradient",
            ]);
        let {
                canManageMessages: d,
                permissionVersion: f,
                canChat: y,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.e7)([P.Z], () => null == t || P.Z.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: r } = (0, c.cj)(
                        [Z.Z],
                        () => ({
                            canManageMessages: Z.Z.can(F.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? Z.Z.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return {
                    canChat: n,
                    permissionVersion: r,
                    canManageMessages: i,
                };
            })(t),
            {
                messageGroupSpacing: E,
                fontSize: S,
                messageDisplayCompact: w,
                renderSpoilers: L,
                keyboardModeEnabled: k,
            } = (function () {
                let e = x.jU.useSetting(),
                    t = x.cC.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: i,
                        keyboardModeEnabled: r,
                    } = (0, c.cj)([h.Z], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = h.Z;
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
                    fontSize: i,
                    keyboardModeEnabled: r,
                };
            })(),
            {
                messages: U,
                channelStream: V,
                oldestUnreadMessageId: B,
                editingMessageId: H,
            } = (function (e) {
                var t, n;
                let i = (0, c.e7)([I.Z], () => I.Z.getMessages(e.id), [e.id]),
                    l = (0, c.e7)([T.ZP], () => {
                        var t;
                        return null != (t = T.ZP.getOldestUnreadMessageId(e.id)) ? t : null;
                    }, [e.id]),
                    { enabled: a } = C.Z.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    o =
                        null !=
                            (n =
                                null == (t = A.default.getUser(j.default.getId()))
                                    ? void 0
                                    : t.hasFlag(F.xW$.SPAMMER)) && n,
                    s = (0, p.ts)(e),
                    u = (0, b.Z)("use_topic_dividers_in_chat"),
                    d = (0, c.Wu)([O.Z], () => {
                        var t;
                        return s && u && null != (t = O.Z.summaries(e.id)) ? t : [];
                    }, [s, e.id, u]),
                    f = (0, c.e7)([O.Z], () => (s ? O.Z.selectedSummary(e.id) : null), [s, e.id]),
                    h = (function (e) {
                        let t = r.useMemo(() => {
                            let t = new Set();
                            return (
                                e.forEach((e) => {
                                    null != e.applicationId && null == e.application && t.add(e.applicationId);
                                }),
                                Array.from(t)
                            );
                        }, [e]);
                        return (0, g.Z)(t);
                    })(i);
                (0, m.Z)(i, e);
                let y = r.useMemo(
                    () =>
                        (0, R.Z)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: l,
                            treatSpam: a && !o,
                            summaries: d,
                            selectedSummary: f,
                        }),
                    [i, e, l, a, d, f, h, o],
                );
                return {
                    messages: i,
                    channelStream: y,
                    oldestUnreadMessageId: l,
                    editingMessageId: (0, c.e7)([_.Z], () => {
                        var t;
                        return null == (t = _.Z.getEditingMessage(e.id)) ? void 0 : t.id;
                    }),
                };
            })(t);
        return (0, i.jsx)(v.aQ.Provider, {
            value: (0, M.Z)(L, d),
            children: (0, i.jsx)(D.v, {
                children: (0, i.jsx)(
                    K,
                    z(G({}, u), {
                        messageGroupSpacing: E,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !o && (a || w),
                        messages: U,
                        channelStream: V,
                        permissionVersion: f,
                        uploads: (0, c.e7)([N.Z], () => N.Z.getFiles(t.id), [t]),
                        unreadCount: (0, c.e7)([T.ZP], () => T.ZP.getUnreadCount(t.id), [t]),
                        hasUnreads: null != B,
                        canChat: y,
                        editingMessageId: H,
                        fontSize: S,
                        keyboardModeEnabled: k,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: s,
                    }),
                ),
            }),
        });
    });
