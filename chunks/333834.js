(n.d(t, { Z: () => A }), n(539854), n(583741), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(755721),
    h = n(481060),
    p = n(724757),
    f = n(100527),
    g = n(906732),
    m = n(585483),
    b = n(709054),
    _ = n(821020),
    O = n(804932),
    y = n(389160),
    v = n(787879),
    C = n(370774),
    j = n(334426),
    E = n(982183),
    x = n(981631),
    S = n(144717),
    I = n(388032),
    P = n(709701);
function N(e) {
    e.stopPropagation();
}
function w(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(h.P3F, {
        onClick: i,
        className: o()(P.messagesGroupHeaderWrap, { [P.collapsed]: !n }),
        children: (0, r.jsxs)(h.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(h.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: P.messagesGroupHeader,
                    children: (0, s.capitalize)(I.intl.string(E.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(h.CJ0, {
                    size: 'xxs',
                    className: P.chevron
                })
            ]
        })
    });
}
let Z = [E.KZ.UNREAD, E.KZ.TODAY, E.KZ.YESTERDAY, E.KZ.OLDER];
function T() {
    let { analyticsLocations: e } = (0, g.ZP)(f.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)('div', {
        className: P.emptyStateContainer,
        children: (0, r.jsxs)(h.Kqy, {
            gap: 24,
            align: 'center',
            children: [
                (0, r.jsxs)(h.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(h.xx7, {
                            size: 'custom',
                            height: 40,
                            width: 40,
                            color: h.TVs.colors.BACKGROUND_MOD_STRONG
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: 'text-sm/medium',
                            color: x.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: I.intl.string(S.default['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(d.zx, {
                    onClick: () => (0, C.j4)(e),
                    color: d.zx.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: I.intl.string(S.default.klSpfn)
                })
            ]
        })
    });
}
function A(e) {
    let { messages: t, unreadMessages: n, loadMore: l, renderLoadingState: s, renderMessageGroup: d, scrollerClassName: f, className: g, listName: S, ignoreGrouping: I = !1 } = e,
        A = i.useRef(null),
        R = (0, p.Z)(S, A),
        { notificationCenterVariant: D } = _.Lk.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        {
            isLoading: L,
            isLoadingComplete: M,
            hasLoadedEver: k
        } = (0, u.cj)([v.Z], () => ({
            isLoading: v.Z.isLoading,
            isLoadingComplete: v.Z.isLoadingComplete,
            hasLoadedEver: v.Z.hasLoadedEver
        })),
        U = !k && L,
        { messageCategoryOpenStates: G, toggleOpenState: B } = (0, y.Z)();
    i.useEffect(() => {
        function e() {
            var e;
            null == (e = A.current) || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null == (e = A.current) || e.scrollPageDown({ animate: !0 });
        }
        return (
            m.S.subscribe(x.CkL.SCROLL_PAGE_DOWN, t),
            m.S.subscribe(x.CkL.SCROLL_PAGE_UP, e),
            () => {
                (m.S.unsubscribe(x.CkL.SCROLL_PAGE_DOWN, t), m.S.unsubscribe(x.CkL.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let V = i.useMemo(
            () =>
                (0, C.s)({
                    UNREAD: G.UNREAD,
                    TODAY: G.TODAY,
                    YESTERDAY: G.YESTERDAY,
                    OLDER: G.OLDER
                }),
            [G.UNREAD, G.TODAY, G.YESTERDAY, G.OLDER]
        ),
        F = i.useCallback(() => {
            null == l || l(V);
        }, [V, l]),
        H = i.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && F();
        }, [F]);
    i.useEffect(() => {
        if (L || M) return;
        let e = setTimeout(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight <= t.offsetHeight && F();
        }, 100);
        return () => clearTimeout(e);
    }, [L, M, F]);
    let z = i.useMemo(() => {
            let e = {
                    [E.KZ.UNREAD]: [],
                    [E.KZ.TODAY]: [],
                    [E.KZ.YESTERDAY]: [],
                    [E.KZ.OLDER]: []
                },
                r = {
                    [E.KZ.UNREAD]: [],
                    [E.KZ.TODAY]: [],
                    [E.KZ.YESTERDAY]: [],
                    [E.KZ.OLDER]: []
                },
                i = {
                    [E.KZ.UNREAD]: {},
                    [E.KZ.TODAY]: {},
                    [E.KZ.YESTERDAY]: {},
                    [E.KZ.OLDER]: {}
                };
            return (
                (t.length > 0 || n.length > 0) &&
                    (a().each(n, (e) => {
                        e.kind === E.fL.MENTION ? r[E.KZ.UNREAD].push(e) : e.channelId in i[E.KZ.UNREAD] ? i[E.KZ.UNREAD][e.channelId].push(e) : (i[E.KZ.UNREAD][e.channelId] = [e]);
                    }),
                    a().each(t, (e) => {
                        let t = (0, C.bl)(e);
                        e.kind === E.fL.MENTION ? r[t].push(e) : e.channelId in i[t] ? i[t][e.channelId].push(e) : (i[t][e.channelId] = [e]);
                    }),
                    a().each(Z, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => b.default.compare(t[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, n]),
        W = 0 === t.length && 0 === n.length && M,
        K = U || (0 === t.length && 0 === n.length && !M),
        Y = L && K,
        q = i.useMemo(() => {
            let e = [];
            return (
                Y
                    ? e.push(s())
                    : W
                      ? e.push((0, r.jsx)(T, {}, 'empty-state'))
                      : I
                        ? (e.push(...n.map((e) => d([e], !0))), e.push(...t.map((e) => d([e], !1))))
                        : a().each(Z, (t) => {
                              0 !== z[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          w,
                                          {
                                              group: t,
                                              isOpen: G[t],
                                              toggleOpenedState: () => {
                                                  let e = G[t];
                                                  (B(t),
                                                      (0, O.RZ)({
                                                          section: t,
                                                          enabled: !e
                                                      }));
                                              }
                                          },
                                          t
                                      )
                                  ),
                                  G[t] && e.push(...z[t].map((e) => d(e, t === E.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, s, G, B, z, I, d, W, Y]);
    i.useEffect(() => {
        var e, t, n, r, i, l, o;
        if (Y) return;
        let s = 0 === z.UNREAD.length,
            a = null != (o = null != (l = null != (i = null == (t = (e = z).TODAY[0]) ? void 0 : t[0]) ? i : null == (n = e.YESTERDAY[0]) ? void 0 : n[0]) ? l : null == (r = e.OLDER[0]) ? void 0 : r[0]) ? o : null;
        j.Z.setInboxReadState(s, (null == a ? void 0 : a.id) != null ? b.default.extractTimestamp(null == a ? void 0 : a.id) : null);
    }, [z, Y]);
    let X = (t.length > 0 || n.length > 0) && null != l && L,
        Q = (0, r.jsx)(
            'div',
            {
                className: o()(P.loadMore, { [P.showLoadMore]: X }),
                children: (0, r.jsx)(h.$jN, {})
            },
            'loading-more-after'
        );
    return (
        (function (e) {
            let { loadingInitial: t, messagesByCategory: n } = e,
                r = i.useRef(!1),
                l = n.UNREAD.length > 0,
                { setOpenStateFromUnreads: o } = (0, y.Z)();
            i.useEffect(() => {
                t || r.current || (o(l), (r.current = !0));
            }, [o, l, t]);
        })({
            messagesByCategory: z,
            loadingInitial: U
        }),
        (0, O.vU)({
            notificationCenterVariant: D,
            messages: t,
            unreadMessages: n
        }),
        (0, r.jsx)('div', {
            className: o()(g, P.messagesPopoutWrap),
            onClick: N,
            onDoubleClick: N,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(h.Den, {
                className: o()(P.messagesPopout, f),
                onScroll: H,
                fade: !0,
                ref: A,
                children: (0, r.jsx)(c.bG, {
                    navigator: R,
                    children: (0, r.jsx)(c.SJ, {
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
                                            overflow: U ? 'hidden' : void 0
                                        }
                                    },
                                    l
                                )),
                                (n = n =
                                    {
                                        children: [q, Q]
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
