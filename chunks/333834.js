(n.d(t, { Z: () => D }), n(539854), n(583741), n(388685), n(642613));
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
    m = n(306680),
    b = n(585483),
    _ = n(709054),
    O = n(821020),
    y = n(804932),
    C = n(389160),
    v = n(787879),
    j = n(370774),
    E = n(334426),
    S = n(862149),
    x = n(982183),
    I = n(981631),
    P = n(144717),
    N = n(388032),
    w = n(709701);
function T(e) {
    e.stopPropagation();
}
function Z(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(h.P3F, {
        'aria-expanded': n,
        onClick: i,
        className: o()(w.messagesGroupHeaderWrap, { [w.collapsed]: !n }),
        children: (0, r.jsxs)(h.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(h.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: w.messagesGroupHeader,
                    children: (0, a.capitalize)(N.intl.string(x.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(h.CJ0, {
                    size: 'xxs',
                    className: w.chevron
                })
            ]
        })
    });
}
let A = [x.KZ.UNREAD, x.KZ.TODAY, x.KZ.YESTERDAY, x.KZ.OLDER];
function R() {
    let { analyticsLocations: e } = (0, g.ZP)(f.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)('div', {
        className: w.emptyStateContainer,
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
                            color: I.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: N.intl.string(P.default['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(d.zx, {
                    onClick: () => (0, j.j4)(e),
                    color: d.zx.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: N.intl.string(P.default.klSpfn)
                })
            ]
        })
    });
}
function D(e) {
    let { messages: t, unreadMessages: n, loadMore: l, renderLoadingState: a, renderMessageGroup: d, scrollerClassName: f, className: g, listName: P, ignoreGrouping: N = !1 } = e,
        D = (0, y.fJ)(),
        L = i.useRef(null),
        M = (0, p.Z)(P, L),
        { entrypoint: k, notificationCenterVariant: U } = O.Lk.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        {
            isLoading: G,
            isLoadingComplete: B,
            hasLoadedEver: V
        } = (0, u.cj)([v.Z], () => ({
            isLoading: v.Z.isLoading,
            isLoadingComplete: v.Z.isLoadingComplete,
            hasLoadedEver: v.Z.hasLoadedEver
        })),
        H = !V && G,
        { messageCategoryOpenStates: F, toggleOpenState: z } = (0, C.Z)(),
        W = (function () {
            let e = (0, u.Wu)([v.Z], () => {
                var e;
                return null != (e = v.Z.getNotifyingChannelIds()) ? e : [];
            });
            return (0, u.e7)(
                [v.Z, m.ZP],
                () => {
                    let t = v.Z.getChannelInfoMap();
                    for (let r of e) {
                        var n;
                        let e = t[r],
                            i = null != (n = m.ZP.hasUnread(r)) && n;
                        if ((null == e ? void 0 : e.loadState) === x.a7.UNLOADED && i) return !0;
                    }
                    return !1;
                },
                [e]
            );
        })();
    i.useEffect(() => {
        function e() {
            var e;
            null == (e = L.current) || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null == (e = L.current) || e.scrollPageDown({ animate: !0 });
        }
        return (
            b.S.subscribe(I.CkL.SCROLL_PAGE_DOWN, t),
            b.S.subscribe(I.CkL.SCROLL_PAGE_UP, e),
            () => {
                (b.S.unsubscribe(I.CkL.SCROLL_PAGE_DOWN, t), b.S.unsubscribe(I.CkL.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let K = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == l || l(x.X.USER_SCROLL));
        }, [l]),
        Y = i.useMemo(() => {
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
                        let t = (0, j.bl)(e);
                        e.kind === x.fL.MENTION ? r[t].push(e) : e.channelId in i[t] ? i[t][e.channelId].push(e) : (i[t][e.channelId] = [e]);
                    }),
                    s().each(A, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => _.default.compare(t[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, n]),
        q = 0 === t.length && 0 === n.length && B,
        X = 0 === t.length && 0 === n.length && !B,
        Q = i.useMemo(() => {
            let e = [];
            return (
                X
                    ? e.push(a())
                    : q
                      ? e.push((0, r.jsx)(R, {}, 'empty-state'))
                      : N
                        ? (e.push(...n.map((e) => d([e], !0))), e.push(...t.map((e) => d([e], !1))))
                        : s().each(A, (t) => {
                              0 !== Y[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          Z,
                                          {
                                              group: t,
                                              isOpen: F[t],
                                              toggleOpenedState: () => {
                                                  let e = F[t];
                                                  (z(t),
                                                      (0, y.RZ)({
                                                          section: t,
                                                          enabled: !e,
                                                          viewId: D
                                                      }));
                                              }
                                          },
                                          t
                                      )
                                  ),
                                  F[t] && e.push(...Y[t].map((e) => d(e, t === x.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, a, F, z, Y, N, d, q, X, D]),
        J = Q[Q.length - 1],
        $ = i.isValidElement(J) && J.type === Z;
    i.useEffect(() => {
        var e, t, n, r, i, l, o;
        if (X) return;
        let a = 0 === Y.UNREAD.length,
            s = null != (o = null != (l = null != (i = null == (t = (e = Y).TODAY[0]) ? void 0 : t[0]) ? i : null == (n = e.YESTERDAY[0]) ? void 0 : n[0]) ? l : null == (r = e.OLDER[0]) ? void 0 : r[0]) ? o : null;
        E.Z.setInboxReadState(a, (null == s ? void 0 : s.id) != null ? _.default.extractTimestamp(null == s ? void 0 : s.id) : null);
    }, [Y, X]);
    let ee = (t.length > 0 || n.length > 0) && null != l && G;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = i.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: o } = (0, C.Z)();
        i.useEffect(() => {
            t || r.current || (o(l), (r.current = !0));
        }, [o, l, t]);
    })({
        messagesByCategory: Y,
        loadingInitial: H
    });
    let et = i.useCallback(() => {
        var e;
        let t = A.filter((e) => F[e]).reduce((e, t) => e + Y[t].length, 0),
            n = null == (e = L.current) ? void 0 : e.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t);
    }, [F, Y]);
    i.useEffect(() => {
        X || G || 0 >= et() || ((!$ || W) && (null == l || l(x.X.FILL_SCROLLER)));
    }, [et, l, X, G, $, W]);
    let en = i.useMemo(() => {
        let e = Math.min(Math.max(2, et()), 20);
        return (0, r.jsx)(S.Z, {
            withHeader: !1,
            size: e
        });
    }, [et]);
    return (
        (0, y.vU)({
            notificationCenterVariant: U,
            entrypoint: k,
            messages: t,
            unreadMessages: n,
            messagesByCategory: Y,
            viewId: D
        }),
        (0, r.jsx)('div', {
            className: o()(g, w.messagesPopoutWrap),
            onClick: T,
            onDoubleClick: T,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(c.bG, {
                navigator: M,
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
                                        ((L.current = e), (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    },
                                    className: o()(w.messagesPopout, f),
                                    onScroll: K,
                                    fade: !0
                                },
                                l
                            )),
                            (n = n =
                                {
                                    children: [Q, ee && !$ ? en : null]
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
