(n.d(t, { Z: () => R }), n(539854), n(583741), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(114858),
    u = n(91192),
    d = n(442837),
    h = n(755721),
    p = n(481060),
    f = n(724757),
    g = n(100527),
    m = n(906732),
    b = n(585483),
    _ = n(709054),
    O = n(821020),
    y = n(804932),
    v = n(389160),
    C = n(854454),
    j = n(370774),
    E = n(334426),
    S = n(982183),
    x = n(981631),
    I = n(144717),
    P = n(388032),
    N = n(709701);
function w(e) {
    e.stopPropagation();
}
function Z(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(p.P3F, {
        onClick: i,
        className: o()(N.messagesGroupHeaderWrap, { [N.collapsed]: !n }),
        children: (0, r.jsxs)(p.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(p.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: N.messagesGroupHeader,
                    children: (0, a.capitalize)(P.intl.string(S.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(p.CJ0, {
                    size: 'xxs',
                    className: N.chevron
                })
            ]
        })
    });
}
let T = [S.KZ.UNREAD, S.KZ.TODAY, S.KZ.YESTERDAY, S.KZ.OLDER];
function A() {
    let { analyticsLocations: e } = (0, m.ZP)(g.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)('div', {
        className: N.emptyStateContainer,
        children: (0, r.jsxs)(p.Kqy, {
            gap: 24,
            align: 'center',
            children: [
                (0, r.jsxs)(p.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(p.xx7, {
                            size: 'custom',
                            height: 40,
                            width: 40,
                            color: p.TVs.colors.BACKGROUND_MOD_STRONG
                        }),
                        (0, r.jsx)(p.Text, {
                            variant: 'text-sm/medium',
                            color: x.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: P.intl.string(I.default['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(h.zx, {
                    onClick: () => (0, j.j4)(e),
                    color: h.zx.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: P.intl.string(I.default.klSpfn)
                })
            ]
        })
    });
}
function R(e) {
    let { messages: t, unreadMessages: n, loadMore: l, renderLoadingState: a, renderMessageGroup: h, scrollerClassName: g, className: m, listName: I, ignoreGrouping: P = !1 } = e,
        R = i.useRef(null),
        D = (0, f.Z)(I, R),
        { notificationCenterVariant: L } = O.Lk.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        {
            isLoading: M,
            isLoadingComplete: k,
            hasLoadedEver: U
        } = (0, d.cj)([C.ZP], () => ({
            isLoading: C.ZP.isLoading,
            isLoadingComplete: C.ZP.isLoadingComplete,
            hasLoadedEver: C.ZP.hasLoadedEver
        })),
        G = !U && M,
        { messageCategoryOpenStates: B, toggleOpenState: V } = (0, v.Z)();
    i.useEffect(() => {
        function e() {
            var e;
            null == (e = R.current) || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null == (e = R.current) || e.scrollPageDown({ animate: !0 });
        }
        return (
            b.S.subscribe(x.CkL.SCROLL_PAGE_DOWN, t),
            b.S.subscribe(x.CkL.SCROLL_PAGE_UP, e),
            () => {
                (b.S.unsubscribe(x.CkL.SCROLL_PAGE_DOWN, t), b.S.unsubscribe(x.CkL.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let F = i.useMemo(
            () =>
                (0, j.s)({
                    UNREAD: B.UNREAD,
                    TODAY: B.TODAY,
                    YESTERDAY: B.YESTERDAY,
                    OLDER: B.OLDER
                }),
            [B.UNREAD, B.TODAY, B.YESTERDAY, B.OLDER]
        ),
        H = i.useCallback(() => {
            null == l || l(F);
        }, [F, l]),
        z = i.useCallback(() => {
            var e;
            let t = null == (e = R.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && H();
        }, [H]);
    i.useEffect(() => {
        if (M || k) return;
        let e = setTimeout(() => {
            var e;
            let t = null == (e = R.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight <= t.offsetHeight && H();
        }, 100);
        return () => clearTimeout(e);
    }, [M, k, H]);
    let W = i.useMemo(() => {
            let e = {
                    [S.KZ.UNREAD]: [],
                    [S.KZ.TODAY]: [],
                    [S.KZ.YESTERDAY]: [],
                    [S.KZ.OLDER]: []
                },
                r = {
                    [S.KZ.UNREAD]: [],
                    [S.KZ.TODAY]: [],
                    [S.KZ.YESTERDAY]: [],
                    [S.KZ.OLDER]: []
                },
                i = {
                    [S.KZ.UNREAD]: {},
                    [S.KZ.TODAY]: {},
                    [S.KZ.YESTERDAY]: {},
                    [S.KZ.OLDER]: {}
                };
            return (
                (t.length > 0 || n.length > 0) &&
                    (s().each(n, (e) => {
                        e.kind === S.fL.MENTION ? r[S.KZ.UNREAD].push(e) : e.channelId in i[S.KZ.UNREAD] ? i[S.KZ.UNREAD][e.channelId].push(e) : (i[S.KZ.UNREAD][e.channelId] = [e]);
                    }),
                    s().each(t, (e) => {
                        let t = (0, j.bl)(e);
                        e.kind === S.fL.MENTION ? r[t].push(e) : e.channelId in i[t] ? i[t][e.channelId].push(e) : (i[t][e.channelId] = [e]);
                    }),
                    s().each(T, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => _.default.compare(t[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, n]),
        K = 0 === t.length && 0 === n.length && k,
        Y = G || (0 === t.length && 0 === n.length && !k),
        q = M && Y,
        X = i.useMemo(() => {
            let e = [];
            return (
                q
                    ? e.push(a())
                    : K
                      ? e.push((0, r.jsx)(A, {}, 'empty-state'))
                      : P
                        ? (e.push(...n.map((e) => h([e], L === O.jP.SIDEBAR, !0))), e.push(...t.map((e) => h([e], L === O.jP.SIDEBAR, !1))))
                        : s().each(T, (t) => {
                              0 !== W[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          Z,
                                          {
                                              group: t,
                                              isOpen: B[t],
                                              toggleOpenedState: () => {
                                                  let e = B[t];
                                                  (V(t),
                                                      (0, y.RZ)({
                                                          section: t,
                                                          enabled: !e
                                                      }));
                                              }
                                          },
                                          t
                                      )
                                  ),
                                  B[t] && e.push(...W[t].map((e) => h(e, L === O.jP.SIDEBAR, t === S.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, a, B, V, W, P, h, L, K, q]);
    i.useEffect(() => {
        var e, t, n, r, i, l, o;
        if (q) return;
        let a = 0 === W.UNREAD.length,
            s = null != (o = null != (l = null != (i = null == (t = (e = W).TODAY[0]) ? void 0 : t[0]) ? i : null == (n = e.YESTERDAY[0]) ? void 0 : n[0]) ? l : null == (r = e.OLDER[0]) ? void 0 : r[0]) ? o : null;
        E.Z.setInboxReadState(a, (null == s ? void 0 : s.id) != null ? _.default.extractTimestamp(null == s ? void 0 : s.id) : null);
    }, [W, q]);
    let Q = (t.length > 0 || n.length > 0) && null != l && M,
        J = (0, r.jsx)(
            'div',
            {
                className: o()(N.loadMore, { [N.showLoadMore]: Q }),
                children: (0, r.jsx)(p.$jN, {})
            },
            'loading-more-after'
        );
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = i.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: o } = (0, v.Z)();
        i.useEffect(() => {
            t || r.current || (o(l), (r.current = !0));
        }, [o, l, t]);
    })({
        messagesByCategory: W,
        loadingInitial: G
    });
    let { params: $ } = (0, c.$B)(),
        ee = $.messageId;
    return (
        i.useEffect(() => {
            if (null == ee || null == W || L !== O.jP.SIDEBAR) return;
            let e = (0, j.bl)({ id: ee });
            null == e || B[e] || V(e);
        }, [ee, V, W, B, L]),
        (0, y.vU)({
            notificationCenterVariant: L,
            messages: t,
            unreadMessages: n
        }),
        (0, r.jsx)('div', {
            className: o()(m, N.messagesPopoutWrap),
            onClick: w,
            onDoubleClick: w,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(p.Den, {
                className: o()(N.messagesPopout, g),
                onScroll: z,
                fade: !0,
                ref: R,
                children: (0, r.jsx)(u.bG, {
                    navigator: D,
                    children: (0, r.jsx)(u.SJ, {
                        children: (e) => {
                            var t,
                                n,
                                { ref: i } = e,
                                l = (function (e, t) {
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
                                })(e, ['ref']);
                            return (0, r.jsxs)(
                                'div',
                                ((t = (function (e) {
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
                                })(
                                    {
                                        ref: i,
                                        style: {
                                            height: '100%',
                                            overflow: G ? 'hidden' : void 0
                                        }
                                    },
                                    l
                                )),
                                (n = n =
                                    {
                                        children: [X, J]
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    })
                })
            })
        })
    );
}
