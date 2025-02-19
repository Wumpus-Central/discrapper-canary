n.d(t, { Z: () => V }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(904245),
    d = n(902840),
    p = n(448986),
    h = n(607070),
    f = n(931056),
    m = n(835473),
    g = n(95398),
    b = n(580747),
    _ = n(135938),
    C = n(160404),
    v = n(765104),
    y = n(695346),
    x = n(314897),
    j = n(323873),
    O = n(607744),
    N = n(375954),
    E = n(496675),
    P = n(306680),
    I = n(62817),
    S = n(594174),
    Z = n(459273),
    T = n(255269),
    A = n(47481),
    w = n(977391),
    R = n(959258),
    k = n(73274),
    M = n(419388),
    L = n(406534),
    D = n(981631),
    W = n(388032),
    U = n(623342);
function B(e) {
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
function F(e, t) {
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
function H(e, t) {
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
let G = i.memo(
        function (e) {
            var t;
            let { className: n, messageGroupSpacing: l, scrollerClassName: d, channel: f, messages: m, unreadCount: g, showNewMessagesBar: b, messageDisplayCompact: _, channelStream: v, uploads: y, hasUnreads: x, editingMessageId: j, fontSize: O, keyboardModeEnabled: N, filterAfterTimestamp: P, showingQuarantineBanner: I, hideSummaries: S = !1, jumpBarClassName: T } = e,
                [A, R] = i.useState(!1),
                G = i.useMemo(
                    () =>
                        _
                            ? (0, w.aJ)({
                                  compact: !0,
                                  messageGroups: 30,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: O,
                                  groupSpacing: l
                              })
                            : (0, w.aJ)({
                                  compact: !1,
                                  messageGroups: 26,
                                  groupRange: 4,
                                  attachments: 8,
                                  fontSize: O,
                                  groupSpacing: l
                              }),
                    [_, O, l]
                ),
                V = (0, M.ZP)({
                    messages: m,
                    channel: f,
                    compact: _,
                    hasUnreads: x,
                    focusId: j,
                    placeholderHeight: G.totalHeight,
                    canLoadMore: null == P,
                    handleScrollToBottom: i.useCallback(() => R(!0), [R]),
                    handleScrollFromBottom: i.useCallback(() => R(!1), [R])
                }),
                z = (0, k.Z)({
                    scrollerRef: V.ref,
                    isEditing: null != j,
                    keyboardModeEnabled: N,
                    hasMoreAfter: m.hasMoreAfter
                }),
                q = (0, s.e7)([C.Z], () => (E.Z.can(D.Plq.READ_MESSAGE_HISTORY, f) ? null : C.Z.getViewingRolesTimestamp(f.getGuildId()))),
                {
                    channelStreamMarkup: Y,
                    newMessagesBar: K,
                    jumpToPresentBar: X,
                    forumPostActionBar: J,
                    safetyWarningBanner: Q
                } = (0, L.Z)({
                    channel: f,
                    messages: m,
                    unreadCount: g,
                    showNewMessagesBar: b,
                    messageDisplayCompact: _,
                    channelStream: v,
                    uploads: y,
                    loadMore: V.loadMore,
                    scrollManager: V,
                    specs: G,
                    filterAfterTimestamp: null != P ? P : q,
                    showingQuarantineBanner: I,
                    hideSummaries: S,
                    isAtBottom: A,
                    jumpToPresent: () => {
                        if (m.hasPresent()) {
                            var e;
                            null === (e = V.ref.current) || void 0 === e || e.scrollToBottom({ animate: !h.Z.useReducedMotion });
                        } else u.Z.jumpToPresent(f.id, D.AQB);
                    },
                    jumpBarClassName: T
                });
            !(function (e) {
                let t = i.useCallback(() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom();
                    }, [e]),
                    n = i.useCallback(() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({ animate: !h.Z.useReducedMotion });
                    }, [e]),
                    r = i.useCallback(() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({ animate: !h.Z.useReducedMotion });
                    }, [e]);
                (0, Z.yp)({
                    event: D.CkL.SCROLLTO_PRESENT,
                    handler: t
                }),
                    (0, Z.yp)({
                        event: D.CkL.SCROLL_PAGE_UP,
                        handler: n
                    }),
                    (0, Z.yp)({
                        event: D.CkL.SCROLL_PAGE_DOWN,
                        handler: r
                    });
            })(V.ref);
            let $ = (0, c.mFp)(),
                ee = (0, a.l2)(z),
                { ref: et } = ee,
                en = H(ee, ['ref']),
                er = (0, p.Z)((e) => {
                    var t;
                    (V.ref.current = e), (et.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                });
            return (0, r.jsxs)(a.bG, {
                navigator: z,
                children: [
                    null != Q && Q,
                    (0, r.jsxs)('div', {
                        className: o()(U.messagesWrapper, n, 'group-spacing-'.concat(l)),
                        children: [
                            null == Q && K,
                            (0, r.jsxs)(
                                c.eTT,
                                F(
                                    B(
                                        {
                                            ref: er,
                                            customTheme: !0,
                                            className: o()(d, U.scroller),
                                            contentClassName: U.scrollerContent,
                                            onResize: V.handleResize,
                                            onScroll: V.handleScroll,
                                            onMouseDown: V.handleMouseDown,
                                            onMouseUp: V.handleMouseUp
                                        },
                                        $
                                    ),
                                    {
                                        tabIndex: -1,
                                        role: 'group',
                                        children: [
                                            J,
                                            (0, r.jsxs)(
                                                'ol',
                                                F(
                                                    B(
                                                        {
                                                            className: U.scrollerInner,
                                                            'aria-label': W.NW.formatToPlainString(W.t.XarRiI, { channelName: f.name })
                                                        },
                                                        en
                                                    ),
                                                    {
                                                        children: [
                                                            (0, r.jsx)('span', {
                                                                className: U.navigationDescription,
                                                                id: 'messagesNavigationDescription',
                                                                'aria-hidden': !0,
                                                                children: W.NW.string(W.t.Spb3s7)
                                                            }),
                                                            Y,
                                                            (0, r.jsx)('div', {
                                                                className: o()({
                                                                    [U.scrollerSpacer]: !I,
                                                                    [U.empty]: 0 === m.length && !m.loadingMore,
                                                                    [U.emptyForum]: 1 === m.length && !m.loadingMore && f.isForumPost() && (null === (t = m.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(f))
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
                            X
                        ]
                    })
                ]
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
    ),
    V = i.memo(function (e) {
        var { channel: t, showingQuarantineBanner: n, hideSummaries: l = !1, forceCompact: o = !1, forceCozy: a = !1 } = e,
            c = H(e, ['channel', 'showingQuarantineBanner', 'hideSummaries', 'forceCompact', 'forceCozy']);
        let {
                canManageMessages: u,
                permissionVersion: p,
                canChat: C
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, s.e7)([O.Z], () => null == t || O.Z.canChatInGuild(t), [t]),
                    { canManageMessages: r, permissionVersion: i } = (0, s.cj)(
                        [E.Z],
                        () => ({
                            canManageMessages: E.Z.can(D.Plq.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? E.Z.getGuildVersion(t) : null
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
                messageGroupSpacing: Z,
                fontSize: w,
                messageDisplayCompact: k,
                renderSpoilers: M,
                keyboardModeEnabled: L
            } = (function () {
                let e = y.jU.useSetting(),
                    t = y.cC.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: r,
                        keyboardModeEnabled: i
                    } = (0, s.cj)([h.Z], () => {
                        let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = h.Z;
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
                messages: W,
                channelStream: U,
                oldestUnreadMessageId: V,
                editingMessageId: z
            } = (function (e) {
                var t, n;
                let r = (0, s.e7)([N.Z], () => N.Z.getMessages(e.id), [e.id]),
                    l = (0, s.e7)(
                        [P.ZP],
                        () => {
                            var t;
                            return null !== (t = P.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
                        },
                        [e.id]
                    ),
                    { enabled: o } = _.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                    a = null !== (n = null === (t = S.default.getUser(x.default.getId())) || void 0 === t ? void 0 : t.hasFlag(D.xW$.SPAMMER)) && void 0 !== n && n,
                    c = (0, d.ts)(e),
                    u = (0, b.Z)('use_topic_dividers_in_chat'),
                    p = (0, s.Wu)(
                        [v.Z],
                        () => {
                            var t;
                            return c && u && null !== (t = v.Z.summaries(e.id)) && void 0 !== t ? t : [];
                        },
                        [c, e.id, u]
                    ),
                    h = (0, s.e7)([v.Z], () => (c ? v.Z.selectedSummary(e.id) : null), [c, e.id]),
                    g = (function (e) {
                        let t = i.useMemo(() => {
                            let t = new Set();
                            return (
                                e.forEach((e) => {
                                    null != e.applicationId && null == e.application && t.add(e.applicationId);
                                }),
                                Array.from(t)
                            );
                        }, [e]);
                        return (0, m.Z)(t);
                    })(r),
                    [C, y] = (0, f.Z)(r, e),
                    O = i.useMemo(
                        () =>
                            (0, A.Z)({
                                channel: e,
                                messages: r,
                                oldestUnreadMessageId: l,
                                treatSpam: o && !a,
                                summaries: p,
                                selectedSummary: h
                            }),
                        [r, e, l, o, p, h, g, a]
                    );
                return {
                    messages: r,
                    channelStream: O,
                    oldestUnreadMessageId: l,
                    editingMessageId: (0, s.e7)([j.Z], () => {
                        var t;
                        return null === (t = j.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
                    })
                };
            })(t);
        return (0, r.jsx)(g.a.Provider, {
            value: (0, T.Z)(M, u),
            children: (0, r.jsx)(R.v, {
                children: (0, r.jsx)(
                    G,
                    F(B({}, c), {
                        messageGroupSpacing: Z,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !a && (o || k),
                        messages: W,
                        channelStream: U,
                        permissionVersion: p,
                        uploads: (0, s.e7)([I.Z], () => I.Z.getFiles(t.id), [t]),
                        unreadCount: (0, s.e7)([P.ZP], () => P.ZP.getUnreadCount(t.id), [t]),
                        hasUnreads: null != V,
                        canChat: C,
                        editingMessageId: z,
                        fontSize: w,
                        keyboardModeEnabled: L,
                        showingQuarantineBanner: n,
                        hideSummaries: l
                    })
                )
            })
        });
    });
