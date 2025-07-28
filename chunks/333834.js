(n.d(t, { Z: () => R }), n(539854), n(583741), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
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
    C = n(787879),
    v = n(370774),
    j = n(334426),
    E = n(862149),
    S = n(982183),
    x = n(981631),
    I = n(144717),
    P = n(388032),
    N = n(709701);
function w(e) {
    e.stopPropagation();
}
function T(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(h.P3F, {
        onClick: i,
        className: o()(N.messagesGroupHeaderWrap, { [N.collapsed]: !n }),
        children: (0, r.jsxs)(h.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(h.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: N.messagesGroupHeader,
                    children: (0, a.capitalize)(P.intl.string(S.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(h.CJ0, {
                    size: 'xxs',
                    className: N.chevron
                })
            ]
        })
    });
}
let Z = [S.KZ.UNREAD, S.KZ.TODAY, S.KZ.YESTERDAY, S.KZ.OLDER];
function A() {
    let { analyticsLocations: e } = (0, g.ZP)(f.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)('div', {
        className: N.emptyStateContainer,
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
                            children: P.intl.string(I.default['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(d.zx, {
                    onClick: () => (0, v.j4)(e),
                    color: d.zx.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: P.intl.string(I.default.klSpfn)
                })
            ]
        })
    });
}
function R(e) {
    let { messages: t, unreadMessages: n, loadMore: l, renderLoadingState: a, renderMessageGroup: d, scrollerClassName: f, className: g, listName: I, ignoreGrouping: P = !1 } = e,
        R = (0, O.fJ)(),
        D = i.useRef(null),
        L = (0, p.Z)(I, D),
        { entrypoint: M, notificationCenterVariant: k } = _.Lk.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        {
            isLoading: U,
            isLoadingComplete: G,
            hasLoadedEver: B
        } = (0, u.cj)([C.Z], () => ({
            isLoading: C.Z.isLoading,
            isLoadingComplete: C.Z.isLoadingComplete,
            hasLoadedEver: C.Z.hasLoadedEver
        })),
        V = !B && U,
        { messageCategoryOpenStates: F, toggleOpenState: H } = (0, y.Z)();
    i.useEffect(() => {
        function e() {
            var e;
            null == (e = D.current) || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null == (e = D.current) || e.scrollPageDown({ animate: !0 });
        }
        return (
            m.S.subscribe(x.CkL.SCROLL_PAGE_DOWN, t),
            m.S.subscribe(x.CkL.SCROLL_PAGE_UP, e),
            () => {
                (m.S.unsubscribe(x.CkL.SCROLL_PAGE_DOWN, t), m.S.unsubscribe(x.CkL.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let z = i.useCallback(() => {
            var e;
            let t = null == (e = D.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == l || l(S.X.USER_SCROLL));
        }, [l]),
        W = i.useMemo(() => {
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
                        let t = (0, v.bl)(e);
                        e.kind === S.fL.MENTION ? r[t].push(e) : e.channelId in i[t] ? i[t][e.channelId].push(e) : (i[t][e.channelId] = [e]);
                    }),
                    s().each(Z, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => b.default.compare(t[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, n]),
        K = 0 === t.length && 0 === n.length && G,
        Y = 0 === t.length && 0 === n.length && !G,
        q = i.useMemo(() => {
            let e = [];
            return (
                Y
                    ? e.push(a())
                    : K
                      ? e.push((0, r.jsx)(A, {}, 'empty-state'))
                      : P
                        ? (e.push(...n.map((e) => d([e], !0))), e.push(...t.map((e) => d([e], !1))))
                        : s().each(Z, (t) => {
                              0 !== W[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          T,
                                          {
                                              group: t,
                                              isOpen: F[t],
                                              toggleOpenedState: () => {
                                                  let e = F[t];
                                                  (H(t),
                                                      (0, O.RZ)({
                                                          section: t,
                                                          enabled: !e,
                                                          viewId: R
                                                      }));
                                              }
                                          },
                                          t
                                      )
                                  ),
                                  F[t] && e.push(...W[t].map((e) => d(e, t === S.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, a, F, H, W, P, d, K, Y, R]),
        X = q[q.length - 1],
        Q = i.isValidElement(X) && X.type === T;
    i.useEffect(() => {
        var e, t, n, r, i, l, o;
        if (Y) return;
        let a = 0 === W.UNREAD.length,
            s = null != (o = null != (l = null != (i = null == (t = (e = W).TODAY[0]) ? void 0 : t[0]) ? i : null == (n = e.YESTERDAY[0]) ? void 0 : n[0]) ? l : null == (r = e.OLDER[0]) ? void 0 : r[0]) ? o : null;
        j.Z.setInboxReadState(a, (null == s ? void 0 : s.id) != null ? b.default.extractTimestamp(null == s ? void 0 : s.id) : null);
    }, [W, Y]);
    let J = (t.length > 0 || n.length > 0) && null != l && U;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = i.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: o } = (0, y.Z)();
        i.useEffect(() => {
            t || r.current || (o(l), (r.current = !0));
        }, [o, l, t]);
    })({
        messagesByCategory: W,
        loadingInitial: V
    });
    let $ = i.useCallback(() => {
        var e;
        let t = Z.filter((e) => F[e]).reduce((e, t) => e + W[t].length, 0),
            n = null == (e = D.current) ? void 0 : e.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t);
    }, [F, W]);
    i.useEffect(() => {
        Y || U || ($() > 0 && !Q && (null == l || l(S.X.FILL_SCROLLER)));
    }, [$, l, Y, U, Q]);
    let ee = i.useMemo(() => {
        let e = Math.min(Math.max(2, $()), 20);
        return (0, r.jsx)(E.Z, {
            withHeader: !1,
            size: e
        });
    }, [$]);
    return (
        (0, O.vU)({
            notificationCenterVariant: k,
            entrypoint: M,
            messages: t,
            unreadMessages: n,
            messagesByCategory: W,
            viewId: R
        }),
        (0, r.jsx)('div', {
            className: o()(g, N.messagesPopoutWrap),
            onClick: w,
            onDoubleClick: w,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(c.bG, {
                navigator: L,
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
                            h.Den,
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
                                    ref: (e) => {
                                        var t;
                                        ((D.current = e), (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: o()(N.messagesPopout, f),
                                    onScroll: z,
                                    fade: !0
                                },
                                l
                            )),
                            (n = n =
                                {
                                    children: [q, J && !Q ? ee : null]
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
    );
}
