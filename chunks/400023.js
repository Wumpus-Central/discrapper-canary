n.d(t, { Z: () => Y }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(636606),
    s = n(91192),
    c = n(442837),
    u = n(481060),
    d = n(904245),
    p = n(902840),
    h = n(448986),
    f = n(607070),
    m = n(931056),
    g = n(835473),
    b = n(580747),
    y = n(135938),
    C = n(160404),
    v = n(411405),
    _ = n(765104),
    x = n(695346),
    j = n(581883),
    O = n(314897),
    E = n(796974),
    S = n(323873),
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
    k = n(959258),
    D = n(73274),
    U = n(419388),
    B = n(406534),
    H = n(981631),
    V = n(388032),
    F = n(266834);
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
                    showNewMessagesBar: y,
                    messageDisplayCompact: v,
                    channelStream: _,
                    uploads: x,
                    hasUnreads: O,
                    editingMessageId: S,
                    fontSize: P,
                    keyboardModeEnabled: I,
                    filterAfterTimestamp: T,
                    showingQuarantineBanner: N,
                    hideSummaries: A = !1,
                    jumpBarClassName: M,
                    typingGradient: R,
                } = e,
                [k, K] = r.useState(null != (n = E.Z.isAtBottom(m.id)) && n),
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
                    hasUnreads: O,
                    focusId: S,
                    placeholderHeight: Y.totalHeight,
                    canLoadMore: null == T,
                    handleScrollToBottom: r.useCallback(() => K(!0), [K]),
                    handleScrollFromBottom: r.useCallback(() => K(!1), [K]),
                    additionalMessagePadding: 48,
                }),
                J = (0, D.Z)({
                    scrollerRef: X.ref,
                    isEditing: null != S,
                    keyboardModeEnabled: I,
                    hasMoreAfter: g.hasMoreAfter,
                }),
                Q = (0, c.e7)([C.Z], () =>
                    Z.Z.can(H.Plq.READ_MESSAGE_HISTORY, m) ? null : C.Z.getViewingRolesTimestamp(m.getGuildId()),
                ),
                {
                    channelStreamMarkup: $,
                    newMessagesBar: ee,
                    jumpToPresentBar: et,
                    forumPostActionBar: en,
                    safetyWarningBanner: ei,
                } = (0, B.Z)({
                    channel: m,
                    messages: g,
                    unreadCount: b,
                    showNewMessagesBar: y,
                    messageDisplayCompact: v,
                    channelStream: _,
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
                            null == (e = X.ref.current) || e.scrollToBottom({ animate: !f.Z.useReducedMotion });
                        } else d.Z.jumpToPresent(m.id, H.AQB);
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
                        return null == (t = e.current) ? void 0 : t.scrollPageUp({ animate: !f.Z.useReducedMotion });
                    }, [e]),
                    i = r.useCallback(() => {
                        var t;
                        return null == (t = e.current) ? void 0 : t.scrollPageDown({ animate: !f.Z.useReducedMotion });
                    }, [e]);
                (0, w.yp)({
                    event: H.CkL.SCROLLTO_PRESENT,
                    handler: t,
                }),
                    (0, w.yp)({
                        event: H.CkL.SCROLL_PAGE_UP,
                        handler: n,
                    }),
                    (0, w.yp)({
                        event: H.CkL.SCROLL_PAGE_DOWN,
                        handler: i,
                    });
            })(X.ref);
            let er = (0, u.mFp)(),
                el = (0, s.l2)(J),
                { ref: ea } = el,
                eo = W(el, ["ref"]),
                es = (0, h.Z)((e) => {
                    var t;
                    (X.ref.current = e),
                        (ea.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                }),
                ec = (0, c.e7)([j.Z], () => {
                    var e;
                    let t = null == (e = j.Z.settings.appearance) ? void 0 : e.clientThemeSettings;
                    return (
                        (null == t ? void 0 : t.backgroundGradientPresetId) != null ||
                        (null == t ? void 0 : t.customUserThemeSettings) != null
                    );
                }),
                eu = r.useMemo(
                    () => (R ? (k ? F.chatTypingGradientAtBottom : F.chatTypingGradientNotAtBottom) : F.chatGradient),
                    [R, k],
                ),
                ed = r.useMemo(
                    () => (R ? (k ? F.typingGradientAtBottom : F.typingGradientNotAtBottom) : F.gradientDefault),
                    [R, k],
                );
            return (0, i.jsxs)(s.bG, {
                navigator: J,
                children: [
                    null != ei && ei,
                    (0, i.jsxs)("div", {
                        className: a()(F.messagesWrapper, l, "group-spacing-".concat(o)),
                        children: [
                            null == ei && ee,
                            (0, i.jsxs)(
                                q,
                                z(
                                    G(
                                        {
                                            ref: es,
                                            customTheme: !0,
                                            className: a()(p, F.scroller, ec ? ed : void 0),
                                            contentClassName: F.scrollerContent,
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
                                                            className: a()(F.scrollerInner, {
                                                                [F.scrollerAllowSticky]: m.isModeratorReportChannel(),
                                                            }),
                                                            "aria-label": V.intl.formatToPlainString(V.t.XarRiL, {
                                                                channelName: m.name,
                                                            }),
                                                        },
                                                        eo,
                                                    ),
                                                    {
                                                        children: [
                                                            (0, i.jsx)("span", {
                                                                className: F.navigationDescription,
                                                                id: "messagesNavigationDescription",
                                                                "aria-hidden": !0,
                                                                children: V.intl.string(V.t["Spb3s/"]),
                                                            }),
                                                            $,
                                                            (0, i.jsx)("div", {
                                                                className: a()({
                                                                    [F.scrollerSpacer]: !N,
                                                                    [F.empty]: 0 === g.length && !g.loadingMore,
                                                                    [F.emptyForum]:
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
                permissionVersion: h,
                canChat: C,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.e7)([P.Z], () => null == t || P.Z.canChatInGuild(t), [t]),
                    { canManageMessages: i, permissionVersion: r } = (0, c.cj)(
                        [Z.Z],
                        () => ({
                            canManageMessages: Z.Z.can(H.Plq.MANAGE_MESSAGES, e),
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
                messageGroupSpacing: j,
                fontSize: E,
                messageDisplayCompact: w,
                renderSpoilers: L,
                keyboardModeEnabled: D,
            } = (function () {
                let e = x.jU.useSetting(),
                    t = x.cC.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: i,
                        keyboardModeEnabled: r,
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
                    fontSize: i,
                    keyboardModeEnabled: r,
                };
            })(),
            {
                messages: U,
                channelStream: B,
                oldestUnreadMessageId: V,
                editingMessageId: F,
            } = (function (e) {
                var t, n;
                let i = (0, c.e7)([I.Z], () => I.Z.getMessages(e.id), [e.id]),
                    l = (0, c.e7)([T.ZP], () => {
                        var t;
                        return null != (t = T.ZP.getOldestUnreadMessageId(e.id)) ? t : null;
                    }, [e.id]),
                    { enabled: a } = y.Z.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    o =
                        null !=
                            (n =
                                null == (t = A.default.getUser(O.default.getId()))
                                    ? void 0
                                    : t.hasFlag(H.xW$.SPAMMER)) && n,
                    s = (0, p.ts)(e),
                    u = (0, b.Z)("use_topic_dividers_in_chat"),
                    d = (0, c.Wu)([_.Z], () => {
                        var t;
                        return s && u && null != (t = _.Z.summaries(e.id)) ? t : [];
                    }, [s, e.id, u]),
                    h = (0, c.e7)([_.Z], () => (s ? _.Z.selectedSummary(e.id) : null), [s, e.id]),
                    f = (function (e) {
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
                let C = r.useMemo(
                    () =>
                        (0, R.Z)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: l,
                            treatSpam: a && !o,
                            summaries: d,
                            selectedSummary: h,
                        }),
                    [i, e, l, a, d, h, f, o],
                );
                return {
                    messages: i,
                    channelStream: C,
                    oldestUnreadMessageId: l,
                    editingMessageId: (0, c.e7)([S.Z], () => {
                        var t;
                        return null == (t = S.Z.getEditingMessage(e.id)) ? void 0 : t.id;
                    }),
                };
            })(t);
        return (0, i.jsx)(v.aQ.Provider, {
            value: (0, M.Z)(L, d),
            children: (0, i.jsx)(k.v, {
                children: (0, i.jsx)(
                    K,
                    z(G({}, u), {
                        messageGroupSpacing: j,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !o && (a || w),
                        messages: U,
                        channelStream: B,
                        permissionVersion: h,
                        uploads: (0, c.e7)([N.Z], () => N.Z.getFiles(t.id), [t]),
                        unreadCount: (0, c.e7)([T.ZP], () => T.ZP.getUnreadCount(t.id), [t]),
                        hasUnreads: null != V,
                        canChat: C,
                        editingMessageId: F,
                        fontSize: E,
                        keyboardModeEnabled: D,
                        showingQuarantineBanner: n,
                        hideSummaries: l,
                        typingGradient: s,
                    }),
                ),
            }),
        });
    });
