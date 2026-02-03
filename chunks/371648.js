n.d(t, {
    A: () => J,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(92674),
    o = n(837381),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    h = n(432371),
    p = n(765548),
    f = n(775602),
    m = n(821720),
    g = n(429913),
    A = n(354328),
    b = n(559149),
    _ = n(164956),
    y = n(302031),
    v = n(513272),
    E = n(253932),
    O = n(617617),
    C = n(961350),
    S = n(72314),
    x = n(580745),
    j = n(834942),
    I = n(320501),
    T = n(576705),
    N = n(222823),
    P = n(399263),
    w = n(287809),
    R = n(234320),
    D = n(863439),
    M = n(504136),
    k = n(540385),
    L = n(830178),
    U = n(722432),
    G = n(258024),
    F = n(672341),
    H = n(652215),
    B = n(985018),
    V = n(478186);

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
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
        l,
        r,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.getOwnPropertyNames(e);
            for (l = 0; l < i.length; l++)
                (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i;
}
let Y = (0, s.animated)(u.fKU),
    q = r.memo(
        function (e) {
            var t, n, i;
            let s,
                h,
                m,
                {
                    className: g,
                    messageGroupSpacing: A,
                    scrollerClassName: b,
                    channel: y,
                    messages: v,
                    unreadCount: E,
                    showNewMessagesBar: C,
                    messageDisplayCompact: x,
                    channelStream: j,
                    uploads: I,
                    hasUnreads: N,
                    editingMessageId: P,
                    fontSize: w,
                    keyboardModeEnabled: D,
                    filterAfterTimestamp: M,
                    showingQuarantineBanner: L,
                    hideSummaries: q = !1,
                    jumpBarClassName: J,
                    typingGradient: Z,
                } = e,
                [X, Q] = r.useState(null != (t = S.A.isAtBottom(y.id)) && t),
                $ = r.useMemo(
                    () =>
                        x
                            ? (0, k.bW)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: w,
                                  groupSpacing: A,
                              })
                            : (0, k.bW)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: w,
                                  groupSpacing: A,
                              }),
                    [x, w, A],
                ),
                ee = (0, G.Ay)({
                    messages: v,
                    channel: y,
                    compact: x,
                    hasUnreads: N,
                    focusId: P,
                    placeholderHeight: $.totalHeight,
                    canLoadMore: null == M,
                    handleScrollToBottom: r.useCallback(() => Q(!0), [Q]),
                    handleScrollFromBottom: r.useCallback(() => Q(!1), [Q]),
                    additionalMessagePadding: 48,
                }),
                et = (0, U.A)({
                    scrollerRef: ee.ref,
                    isEditing: null != P,
                    keyboardModeEnabled: D,
                    hasMoreAfter: v.hasMoreAfter,
                }),
                en = (0, c.bG)([_.A], () =>
                    T.A.can(H.xBc.READ_MESSAGE_HISTORY, y) ? null : _.A.getViewingRolesTimestamp(y.getGuildId()),
                ),
                {
                    channelStreamMarkup: el,
                    newMessagesBar: er,
                    jumpToPresentBar: ei,
                    forumPostActionBar: ea,
                    safetyWarningBanner: es,
                } = (0, F.A)({
                    channel: y,
                    messages: v,
                    unreadCount: E,
                    showNewMessagesBar: C,
                    messageDisplayCompact: x,
                    channelStream: j,
                    uploads: I,
                    loadMore: ee.loadMore,
                    scrollManager: ee,
                    specs: $,
                    filterAfterTimestamp: null != M ? M : en,
                    showingQuarantineBanner: L,
                    hideSummaries: q,
                    jumpToPresent: () => {
                        if (v.hasPresent()) {
                            var e;
                            null == (e = ee.ref.current) ||
                                e.scrollToBottom({
                                    animate: !f.A.useReducedMotion,
                                });
                        } else d.A.jumpToPresent(y.id, H.EMb);
                    },
                    jumpBarClassName: J,
                });
            (i = ee.ref),
                (s = r.useCallback(() => {
                    var e;
                    return null == (e = i.current) ? void 0 : e.scrollToBottom();
                }, [i])),
                (h = r.useCallback(() => {
                    var e;
                    return null == (e = i.current)
                        ? void 0
                        : e.scrollPageUp({
                              animate: !f.A.useReducedMotion,
                          });
                }, [i])),
                (m = r.useCallback(() => {
                    var e;
                    return null == (e = i.current)
                        ? void 0
                        : e.scrollPageDown({
                              animate: !f.A.useReducedMotion,
                          });
                }, [i])),
                (0, R.Vo)({
                    event: H.jej.SCROLLTO_PRESENT,
                    handler: s,
                }),
                (0, R.Vo)({
                    event: H.jej.SCROLL_PAGE_UP,
                    handler: h,
                }),
                (0, R.Vo)({
                    event: H.jej.SCROLL_PAGE_DOWN,
                    handler: m,
                });
            let eo = (0, u.R7z)(),
                ec = (0, o.LT)(et),
                { ref: eu } = ec,
                ed = z(ec, ["ref"]),
                eh = (0, p.A)((e) => {
                    var t;
                    (ee.ref.current = e),
                        (eu.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                }),
                ep = (0, c.bG)([O.A], () => {
                    var e;
                    let t = null == (e = O.A.settings.appearance) ? void 0 : e.clientThemeSettings;
                    return (
                        (null == t ? void 0 : t.backgroundGradientPresetId) != null ||
                        (null == t ? void 0 : t.customUserThemeSettings) != null
                    );
                }),
                ef = r.useMemo(() => (Z ? (X ? V.gA : V.ru) : V.Zd), [Z, X]),
                em = r.useMemo(() => (Z ? (X ? V.cz : V.XF) : V.U6), [Z, X]);
            return (0, l.jsxs)(o.hD, {
                navigator: et,
                children: [
                    null != es && es,
                    (0, l.jsxs)("div", {
                        className: a()(V.Og, g, "group-spacing-".concat(A)),
                        children: [
                            null == es && er,
                            (0, l.jsxs)(
                                Y,
                                W(
                                    K(
                                        {
                                            ref: eh,
                                            customTheme: !0,
                                            className: a()(b, V.XG, ep ? em : void 0),
                                            contentClassName: V.gT,
                                            onResize: ee.handleResize,
                                            onScroll: ee.handleScroll,
                                            onMouseDown: ee.handleMouseDown,
                                            onMouseUp: ee.handleMouseUp,
                                        },
                                        eo,
                                    ),
                                    {
                                        tabIndex: -1,
                                        role: "group",
                                        children: [
                                            ea,
                                            (0, l.jsxs)(
                                                "ol",
                                                W(
                                                    K(
                                                        {
                                                            className: a()(V.bv, {
                                                                [V.FD]: y.isModeratorReportChannel(),
                                                            }),
                                                            "aria-label": B.intl.formatToPlainString(B.t.XarRiL, {
                                                                channelName: y.name,
                                                            }),
                                                        },
                                                        ed,
                                                    ),
                                                    {
                                                        children: [
                                                            (0, l.jsx)("span", {
                                                                className: V.$4,
                                                                id: "messagesNavigationDescription",
                                                                "aria-hidden": !0,
                                                                children: B.intl.string(B.t["Spb3s/"]),
                                                            }),
                                                            el,
                                                            (0, l.jsx)("div", {
                                                                className: a()({
                                                                    [V.lB]: !L,
                                                                    [V.Ie]: 0 === v.length && !v.loadingMore,
                                                                    [V.Fb]:
                                                                        1 === v.length &&
                                                                        !v.loadingMore &&
                                                                        y.isForumPost() &&
                                                                        (null == (n = v.first())
                                                                            ? void 0
                                                                            : n.isFirstMessageInForumPost(y)),
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
                            ep
                                ? null
                                : (0, l.jsx)("div", {
                                      className: ef,
                                  }),
                            ei,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    J = r.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: i = !1,
                forceCompact: a = !1,
                forceCozy: s = !1,
                typingGradient: o = !1,
            } = e,
            u = z(e, [
                "channel",
                "showingQuarantineBanner",
                "hideSummaries",
                "forceCompact",
                "forceCozy",
                "typingGradient",
            ]),
            {
                canManageMessages: d,
                permissionVersion: p,
                canChat: _,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.bG)([j.A], () => null == t || j.A.canChatInGuild(t), [t]),
                    { canManageMessages: l, permissionVersion: r } = (0, c.cf)(
                        [T.A],
                        () => ({
                            canManageMessages: T.A.can(H.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? T.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return {
                    canChat: n,
                    permissionVersion: r,
                    canManageMessages: l,
                };
            })(t),
            {
                messageGroupSpacing: O,
                fontSize: S,
                messageDisplayCompact: R,
                renderSpoilers: k,
                keyboardModeEnabled: U,
            } = (function () {
                let e = E.hH.useSetting(),
                    t = E.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: l,
                        keyboardModeEnabled: r,
                    } = (0, c.cf)([f.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = f.A;
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
                    fontSize: l,
                    keyboardModeEnabled: r,
                };
            })(),
            {
                messages: G,
                channelStream: F,
                oldestUnreadMessageId: B,
                editingMessageId: V,
            } = (function (e) {
                var t, n, l;
                let i,
                    a = (0, c.bG)([I.A], () => I.A.getMessages(e.id), [e.id]),
                    s = (0, c.bG)([N.Ay], () => {
                        var t;
                        return null != (t = N.Ay.getOldestUnreadMessageId(e.id)) ? t : null;
                    }, [e.id]),
                    { enabled: o } = b.A.useExperiment(
                        {
                            location: "41de6d_1",
                        },
                        {
                            autoTrackExposure: !1,
                        },
                    ),
                    u =
                        null !=
                            (t =
                                null == (n = w.default.getUser(C.default.getId()))
                                    ? void 0
                                    : n.hasFlag(H.nhx.SPAMMER)) && t,
                    d = (0, h.cI)(e),
                    p = (0, A.A)("use_topic_dividers_in_chat"),
                    f = (0, c.yK)([v.A], () => {
                        var t;
                        return d && p && null != (t = v.A.summaries(e.id)) ? t : [];
                    }, [d, e.id, p]),
                    _ = (0, c.bG)([v.A], () => (d ? v.A.selectedSummary(e.id) : null), [d, e.id]),
                    y =
                        ((l = a),
                        (i = r.useMemo(() => {
                            let e = new Set();
                            return (
                                l.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [l])),
                        (0, g.A)(i));
                (0, m.A)(a, e);
                let E = r.useMemo(
                    () =>
                        (0, M.A)({
                            channel: e,
                            messages: a,
                            oldestUnreadMessageId: s,
                            treatSpam: o && !u,
                            summaries: f,
                            selectedSummary: _,
                        }),
                    [a, e, s, o, f, _, y, u],
                );
                return {
                    messages: a,
                    channelStream: E,
                    oldestUnreadMessageId: s,
                    editingMessageId: (0, c.bG)([x.A], () => {
                        var t;
                        return null == (t = x.A.getEditingMessage(e.id)) ? void 0 : t.id;
                    }),
                };
            })(t);
        return (0, l.jsx)(y.Bs.Provider, {
            value: (0, D.A)(k, d),
            children: (0, l.jsx)(L.t, {
                children: (0, l.jsx)(
                    q,
                    W(K({}, u), {
                        messageGroupSpacing: O,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !s && (a || R),
                        messages: G,
                        channelStream: F,
                        permissionVersion: p,
                        uploads: (0, c.bG)([P.A], () => P.A.getFiles(t.id), [t]),
                        unreadCount: (0, c.bG)([N.Ay], () => N.Ay.getUnreadCount(t.id), [t]),
                        hasUnreads: null != B,
                        canChat: _,
                        editingMessageId: V,
                        fontSize: S,
                        keyboardModeEnabled: U,
                        showingQuarantineBanner: n,
                        hideSummaries: i,
                        typingGradient: o,
                    }),
                ),
            }),
        });
    });
