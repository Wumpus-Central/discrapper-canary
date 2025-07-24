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
    v = n(787879),
    C = n(370774),
    j = n(334426),
    E = n(862149),
    x = n(982183),
    S = n(981631),
    I = n(144717),
    P = n(388032),
    N = n(709701);
function w(e) {
    e.stopPropagation();
}
function Z(e) {
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
                    children: (0, a.capitalize)(P.intl.string(x.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(h.CJ0, {
                    size: 'xxs',
                    className: N.chevron
                })
            ]
        })
    });
}
let T = [x.KZ.UNREAD, x.KZ.TODAY, x.KZ.YESTERDAY, x.KZ.OLDER];
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
                            color: S.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: P.intl.string(I.default['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(d.zx, {
                    onClick: () => (0, C.j4)(e),
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
        R = i.useRef(null),
        D = (0, p.Z)(I, R),
        { notificationCenterVariant: L } = _.Lk.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        {
            isLoading: M,
            isLoadingComplete: k,
            hasLoadedEver: U
        } = (0, u.cj)([v.Z], () => ({
            isLoading: v.Z.isLoading,
            isLoadingComplete: v.Z.isLoadingComplete,
            hasLoadedEver: v.Z.hasLoadedEver
        })),
        G = !U && M,
        { messageCategoryOpenStates: B, toggleOpenState: V } = (0, y.Z)();
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
            m.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, t),
            m.S.subscribe(S.CkL.SCROLL_PAGE_UP, e),
            () => {
                (m.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, t), m.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let F = i.useCallback(() => {
            var e;
            let t = null == (e = R.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == l || l());
        }, [l]),
        H = i.useMemo(() => {
            let e = {
                    [x.KZ.UNREAD]: [],
                    [x.KZ.TODAY]: [],
                    [x.KZ.YESTERDAY]: [],
                    [x.KZ.OLDER]: []
                },
                r = {
                    [x.KZ.UNREAD]: [],
                    [x.KZ.TODAY]: [],
                    [x.KZ.YESTERDAY]: [],
                    [x.KZ.OLDER]: []
                },
                i = {
                    [x.KZ.UNREAD]: {},
                    [x.KZ.TODAY]: {},
                    [x.KZ.YESTERDAY]: {},
                    [x.KZ.OLDER]: {}
                };
            return (
                (t.length > 0 || n.length > 0) &&
                    (s().each(n, (e) => {
                        e.kind === x.fL.MENTION ? r[x.KZ.UNREAD].push(e) : e.channelId in i[x.KZ.UNREAD] ? i[x.KZ.UNREAD][e.channelId].push(e) : (i[x.KZ.UNREAD][e.channelId] = [e]);
                    }),
                    s().each(t, (e) => {
                        let t = (0, C.bl)(e);
                        e.kind === x.fL.MENTION ? r[t].push(e) : e.channelId in i[t] ? i[t][e.channelId].push(e) : (i[t][e.channelId] = [e]);
                    }),
                    s().each(T, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => b.default.compare(t[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, n]),
        z = 0 === t.length && 0 === n.length && k,
        W = 0 === t.length && 0 === n.length && !k,
        K = i.useMemo(() => {
            let e = [];
            return (
                W
                    ? e.push(a())
                    : z
                      ? e.push((0, r.jsx)(A, {}, 'empty-state'))
                      : P
                        ? (e.push(...n.map((e) => d([e], !0))), e.push(...t.map((e) => d([e], !1))))
                        : s().each(T, (t) => {
                              0 !== H[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          Z,
                                          {
                                              group: t,
                                              isOpen: B[t],
                                              toggleOpenedState: () => {
                                                  let e = B[t];
                                                  (V(t),
                                                      (0, O.RZ)({
                                                          section: t,
                                                          enabled: !e
                                                      }));
                                              }
                                          },
                                          t
                                      )
                                  ),
                                  B[t] && e.push(...H[t].map((e) => d(e, t === x.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, a, B, V, H, P, d, z, W]),
        Y = K[K.length - 1],
        q = i.isValidElement(Y) && Y.type === Z;
    i.useEffect(() => {
        var e, t, n, r, i, l, o;
        if (W) return;
        let a = 0 === H.UNREAD.length,
            s = null != (o = null != (l = null != (i = null == (t = (e = H).TODAY[0]) ? void 0 : t[0]) ? i : null == (n = e.YESTERDAY[0]) ? void 0 : n[0]) ? l : null == (r = e.OLDER[0]) ? void 0 : r[0]) ? o : null;
        j.Z.setInboxReadState(a, (null == s ? void 0 : s.id) != null ? b.default.extractTimestamp(null == s ? void 0 : s.id) : null);
    }, [H, W]);
    let X = (t.length > 0 || n.length > 0) && null != l && M;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = i.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: o } = (0, y.Z)();
        i.useEffect(() => {
            t || r.current || (o(l), (r.current = !0));
        }, [o, l, t]);
    })({
        messagesByCategory: H,
        loadingInitial: G
    });
    let Q = i.useCallback(() => {
        var e;
        let t = T.filter((e) => B[e]).reduce((e, t) => e + H[t].length, 0),
            n = null == (e = R.current) ? void 0 : e.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t);
    }, [B, H]);
    i.useEffect(() => {
        W || M || (Q() > 0 && (null == l || l()));
    }, [Q, l, W, M]);
    let J = i.useMemo(() => {
        let e = Math.min(Math.max(2, Q()), 20);
        return (0, r.jsx)(E.Z, {
            withHeader: !1,
            size: e
        });
    }, [Q]);
    return (
        (0, O.vU)({
            notificationCenterVariant: L,
            messages: t,
            unreadMessages: n
        }),
        (0, r.jsx)('div', {
            className: o()(g, N.messagesPopoutWrap),
            onClick: w,
            onDoubleClick: w,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(c.bG, {
                navigator: D,
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
                                        ((R.current = e), (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: o()(N.messagesPopout, f),
                                    onScroll: F,
                                    fade: !0
                                },
                                l
                            )),
                            (n = n =
                                {
                                    children: [K, X && !q ? J : null]
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
