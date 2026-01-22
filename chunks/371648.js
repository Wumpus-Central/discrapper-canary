n.d(t, {
    A: () => X,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(837381),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    f = n(432371),
    p = n(765548),
    h = n(775602),
    b = n(821720),
    g = n(429913),
    m = n(354328),
    A = n(559149),
    y = n(164956),
    O = n(302031),
    j = n(513272),
    v = n(253932),
    x = n(617617),
    E = n(961350),
    _ = n(72314),
    C = n(580745),
    S = n(834942),
    I = n(320501),
    N = n(576705),
    T = n(222823),
    P = n(399263),
    w = n(287809),
    R = n(234320),
    D = n(863439),
    M = n(504136),
    L = n(540385),
    G = n(830178),
    k = n(722432),
    U = n(258024),
    V = n(672341),
    F = n(652215),
    H = n(985018),
    B = n(478186);

function K(e) {
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

function W(e, t) {
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
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
let Y = (0, s.animated)(u.fKU),
    q = l.memo(
        function (e) {
            var t, n, i;
            let s,
                f,
                b,
                {
                    className: g,
                    messageGroupSpacing: m,
                    scrollerClassName: A,
                    channel: O,
                    messages: j,
                    unreadCount: v,
                    showNewMessagesBar: E,
                    messageDisplayCompact: C,
                    channelStream: S,
                    uploads: I,
                    hasUnreads: T,
                    editingMessageId: P,
                    fontSize: w,
                    keyboardModeEnabled: D,
                    filterAfterTimestamp: M,
                    showingQuarantineBanner: G,
                    hideSummaries: q = !1,
                    jumpBarClassName: X,
                    typingGradient: J,
                } = e,
                [Q, Z] = l.useState(null != (t = _.A.isAtBottom(O.id)) && t),
                $ = l.useMemo(
                    () =>
                        C
                            ? (0, L.bW)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: w,
                                  groupSpacing: m,
                              })
                            : (0, L.bW)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: w,
                                  groupSpacing: m,
                              }),
                    [C, w, m],
                ),
                ee = (0, U.Ay)({
                    messages: j,
                    channel: O,
                    compact: C,
                    hasUnreads: T,
                    focusId: P,
                    placeholderHeight: $.totalHeight,
                    canLoadMore: null == M,
                    handleScrollToBottom: l.useCallback(() => Z(!0), [Z]),
                    handleScrollFromBottom: l.useCallback(() => Z(!1), [Z]),
                    additionalMessagePadding: 48,
                }),
                et = (0, k.A)({
                    scrollerRef: ee.ref,
                    isEditing: null != P,
                    keyboardModeEnabled: D,
                    hasMoreAfter: j.hasMoreAfter,
                }),
                en = (0, c.bG)([y.A], () =>
                    N.A.can(F.xBc.READ_MESSAGE_HISTORY, O) ? null : y.A.getViewingRolesTimestamp(O.getGuildId()),
                ),
                {
                    channelStreamMarkup: er,
                    newMessagesBar: el,
                    jumpToPresentBar: ei,
                    forumPostActionBar: ea,
                    safetyWarningBanner: es,
                } = (0, V.A)({
                    channel: O,
                    messages: j,
                    unreadCount: v,
                    showNewMessagesBar: E,
                    messageDisplayCompact: C,
                    channelStream: S,
                    uploads: I,
                    loadMore: ee.loadMore,
                    scrollManager: ee,
                    specs: $,
                    filterAfterTimestamp: null != M ? M : en,
                    showingQuarantineBanner: G,
                    hideSummaries: q,
                    jumpToPresent: () => {
                        if (j.hasPresent()) {
                            var e;
                            null == (e = ee.ref.current) ||
                                e.scrollToBottom({
                                    animate: !h.A.useReducedMotion,
                                });
                        } else d.A.jumpToPresent(O.id, F.EMb);
                    },
                    jumpBarClassName: X,
                });
            (i = ee.ref),
                (s = l.useCallback(() => {
                    var e;
                    return null == (e = i.current) ? void 0 : e.scrollToBottom();
                }, [i])),
                (f = l.useCallback(() => {
                    var e;
                    return null == (e = i.current)
                        ? void 0
                        : e.scrollPageUp({
                              animate: !h.A.useReducedMotion,
                          });
                }, [i])),
                (b = l.useCallback(() => {
                    var e;
                    return null == (e = i.current)
                        ? void 0
                        : e.scrollPageDown({
                              animate: !h.A.useReducedMotion,
                          });
                }, [i])),
                (0, R.Vo)({
                    event: F.jej.SCROLLTO_PRESENT,
                    handler: s,
                }),
                (0, R.Vo)({
                    event: F.jej.SCROLL_PAGE_UP,
                    handler: f,
                }),
                (0, R.Vo)({
                    event: F.jej.SCROLL_PAGE_DOWN,
                    handler: b,
                });
            let eo = (0, u.R7z)(),
                ec = (0, o.LT)(et),
                { ref: eu } = ec,
                ed = z(ec, ["ref"]),
                ef = (0, p.A)((e) => {
                    var t;
                    (ee.ref.current = e),
                        (eu.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                }),
                ep = (0, c.bG)([x.A], () => {
                    var e;
                    let t = null == (e = x.A.settings.appearance) ? void 0 : e.clientThemeSettings;
                    return (
                        (null == t ? void 0 : t.backgroundGradientPresetId) != null ||
                        (null == t ? void 0 : t.customUserThemeSettings) != null
                    );
                }),
                eh = l.useMemo(() => (J ? (Q ? B.gA : B.ru) : B.Zd), [J, Q]),
                eb = l.useMemo(() => (J ? (Q ? B.cz : B.XF) : B.U6), [J, Q]);
            return (0, r.jsxs)(o.hD, {
                navigator: et,
                children: [
                    null != es && es,
                    (0, r.jsxs)("div", {
                        className: a()(B.Og, g, "group-spacing-".concat(m)),
                        children: [
                            null == es && el,
                            (0, r.jsxs)(
                                Y,
                                W(
                                    K(
                                        {
                                            ref: ef,
                                            customTheme: !0,
                                            className: a()(A, B.XG, ep ? eb : void 0),
                                            contentClassName: B.gT,
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
                                            (0, r.jsxs)(
                                                "ol",
                                                W(
                                                    K(
                                                        {
                                                            className: a()(B.bv, {
                                                                [B.FD]: O.isModeratorReportChannel(),
                                                            }),
                                                            "aria-label": H.intl.formatToPlainString(H.t.XarRiL, {
                                                                channelName: O.name,
                                                            }),
                                                        },
                                                        ed,
                                                    ),
                                                    {
                                                        children: [
                                                            (0, r.jsx)("span", {
                                                                className: B.$4,
                                                                id: "messagesNavigationDescription",
                                                                "aria-hidden": !0,
                                                                children: H.intl.string(H.t["Spb3s/"]),
                                                            }),
                                                            er,
                                                            (0, r.jsx)("div", {
                                                                className: a()({
                                                                    [B.lB]: !G,
                                                                    [B.Ie]: 0 === j.length && !j.loadingMore,
                                                                    [B.Fb]:
                                                                        1 === j.length &&
                                                                        !j.loadingMore &&
                                                                        O.isForumPost() &&
                                                                        (null == (n = j.first())
                                                                            ? void 0
                                                                            : n.isFirstMessageInForumPost(O)),
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
                                : (0, r.jsx)("div", {
                                      className: eh,
                                  }),
                            ei,
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    X = l.memo(function (e) {
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
                canChat: y,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, c.bG)([S.A], () => null == t || S.A.canChatInGuild(t), [t]),
                    { canManageMessages: r, permissionVersion: l } = (0, c.cf)(
                        [N.A],
                        () => ({
                            canManageMessages: N.A.can(F.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? N.A.getGuildVersion(t) : null,
                        }),
                        [e, t],
                    );
                return {
                    canChat: n,
                    permissionVersion: l,
                    canManageMessages: r,
                };
            })(t),
            {
                messageGroupSpacing: x,
                fontSize: _,
                messageDisplayCompact: R,
                renderSpoilers: L,
                keyboardModeEnabled: k,
            } = (function () {
                let e = v.hH.useSetting(),
                    t = v.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: r,
                        keyboardModeEnabled: l,
                    } = (0, c.cf)([h.A], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = h.A;
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
                    keyboardModeEnabled: l,
                };
            })(),
            {
                messages: U,
                channelStream: V,
                oldestUnreadMessageId: H,
                editingMessageId: B,
            } = (function (e) {
                var t, n, r;
                let i,
                    a = (0, c.bG)([I.A], () => I.A.getMessages(e.id), [e.id]),
                    s = (0, c.bG)([T.Ay], () => {
                        var t;
                        return null != (t = T.Ay.getOldestUnreadMessageId(e.id)) ? t : null;
                    }, [e.id]),
                    { enabled: o } = A.A.useExperiment(
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
                                null == (n = w.default.getUser(E.default.getId()))
                                    ? void 0
                                    : n.hasFlag(F.nhx.SPAMMER)) && t,
                    d = (0, f.cI)(e),
                    p = (0, m.A)("use_topic_dividers_in_chat"),
                    h = (0, c.yK)([j.A], () => {
                        var t;
                        return d && p && null != (t = j.A.summaries(e.id)) ? t : [];
                    }, [d, e.id, p]),
                    y = (0, c.bG)([j.A], () => (d ? j.A.selectedSummary(e.id) : null), [d, e.id]),
                    O =
                        ((r = a),
                        (i = l.useMemo(() => {
                            let e = new Set();
                            return (
                                r.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [r])),
                        (0, g.A)(i));
                (0, b.A)(a, e);
                let v = l.useMemo(
                    () =>
                        (0, M.A)({
                            channel: e,
                            messages: a,
                            oldestUnreadMessageId: s,
                            treatSpam: o && !u,
                            summaries: h,
                            selectedSummary: y,
                        }),
                    [a, e, s, o, h, y, O, u],
                );
                return {
                    messages: a,
                    channelStream: v,
                    oldestUnreadMessageId: s,
                    editingMessageId: (0, c.bG)([C.A], () => {
                        var t;
                        return null == (t = C.A.getEditingMessage(e.id)) ? void 0 : t.id;
                    }),
                };
            })(t);
        return (0, r.jsx)(O.Bs.Provider, {
            value: (0, D.A)(L, d),
            children: (0, r.jsx)(G.t, {
                children: (0, r.jsx)(
                    q,
                    W(K({}, u), {
                        messageGroupSpacing: x,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !s && (a || R),
                        messages: U,
                        channelStream: V,
                        permissionVersion: p,
                        uploads: (0, c.bG)([P.A], () => P.A.getFiles(t.id), [t]),
                        unreadCount: (0, c.bG)([T.Ay], () => T.Ay.getUnreadCount(t.id), [t]),
                        hasUnreads: null != H,
                        canChat: y,
                        editingMessageId: B,
                        fontSize: _,
                        keyboardModeEnabled: k,
                        showingQuarantineBanner: n,
                        hideSummaries: i,
                        typingGradient: o,
                    }),
                ),
            }),
        });
    });
