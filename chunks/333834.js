(n.d(t, { Z: () => Z }), n(539854), n(583741), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(91192),
    u = n(755721),
    d = n(481060),
    h = n(724757),
    p = n(100527),
    f = n(906732),
    g = n(585483),
    m = n(709054),
    b = n(821020),
    _ = n(538397),
    O = n(389160),
    y = n(370774),
    v = n(334426),
    C = n(982183),
    j = n(981631),
    E = n(144717),
    S = n(388032),
    x = n(709701);
function I(e) {
    e.stopPropagation();
}
function P(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(d.P3F, {
        onClick: i,
        className: o()(x.messagesGroupHeaderWrap, { [x.collapsed]: !n }),
        children: (0, r.jsxs)(d.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(d.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: x.messagesGroupHeader,
                    children: (0, a.capitalize)(S.intl.string(C.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(d.CJ0, {
                    size: 'xxs',
                    className: x.chevron
                })
            ]
        })
    });
}
let N = [C.KZ.UNREAD, C.KZ.TODAY, C.KZ.YESTERDAY, C.KZ.OLDER];
function w() {
    let { analyticsLocations: e } = (0, f.ZP)(p.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)('div', {
        className: x.emptyStateContainer,
        children: (0, r.jsxs)(d.Kqy, {
            gap: 24,
            align: 'center',
            children: [
                (0, r.jsxs)(d.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(d.xx7, {
                            size: 'custom',
                            height: 40,
                            width: 40,
                            color: d.TVs.colors.BACKGROUND_MOD_STRONG
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: j.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: S.intl.string(E.default['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(u.zx, {
                    onClick: () => (0, y.j4)(e),
                    color: u.zx.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: S.intl.string(E.default.klSpfn)
                })
            ]
        })
    });
}
function Z(e) {
    let { messages: t, loadingInitial: n, loadingMore: l, loadMore: a, renderLoadingState: u, renderMessageGroup: p, scrollerClassName: f, className: E, listName: S, ignoreGrouping: Z = !1 } = e,
        T = i.useRef(null),
        A = (0, h.Z)(S, T),
        { notificationCenterVariant: R } = b.Lk.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        { messageCategoryOpenStates: D, toggleOpenState: L } = (0, O.Z)();
    i.useEffect(() => {
        function e() {
            var e;
            null == (e = T.current) || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null == (e = T.current) || e.scrollPageDown({ animate: !0 });
        }
        return (
            g.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, t),
            g.S.subscribe(j.CkL.SCROLL_PAGE_UP, e),
            () => {
                (g.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, t), g.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, e));
            }
        );
    }, []);
    let M = i.useCallback(() => {
            var e;
            let t = null == (e = T.current) ? void 0 : e.getScrollerState(),
                n = (0, y.s)(D);
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && (null == a || a(n));
        }, [a, D]),
        k = (0, y.fW)(null != t ? t : []),
        U = i.useMemo(() => {
            if (null == t || n) return null;
            let e = {
                    [C.KZ.UNREAD]: [],
                    [C.KZ.TODAY]: [],
                    [C.KZ.YESTERDAY]: [],
                    [C.KZ.OLDER]: []
                },
                r = {
                    [C.KZ.UNREAD]: [],
                    [C.KZ.TODAY]: [],
                    [C.KZ.YESTERDAY]: [],
                    [C.KZ.OLDER]: []
                },
                i = {
                    [C.KZ.UNREAD]: {},
                    [C.KZ.TODAY]: {},
                    [C.KZ.YESTERDAY]: {},
                    [C.KZ.OLDER]: {}
                };
            return (
                null != t &&
                    t.length > 0 &&
                    (s().each(t, (e) => {
                        let { message: t, kind: n } = e,
                            l = k(t.id);
                        n === C.fL.MENTION ? r[l].push(t) : t.channel_id in i[l] ? i[l][t.channel_id].push(t) : (i[l][t.channel_id] = [t]);
                    }),
                    s().each(N, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => m.default.compare(t[0].id, e[0].id))
                            .forEach((n) => {
                                e[t].push(n);
                            });
                    })),
                e
            );
        }, [t, k, n]),
        G = i.useMemo(() => {
            let e = [];
            return (
                null == t || n || null == U
                    ? e.push(u())
                    : 0 === t.length
                      ? e.push((0, r.jsx)(w, {}, 'empty-state'))
                      : Z
                        ? e.push(
                              ...t.map((e) => {
                                  let { message: t } = e;
                                  return p([t], R === b.jP.SIDEBAR, k(t.id) === C.KZ.UNREAD);
                              })
                          )
                        : null != U &&
                          s().each(N, (t) => {
                              0 !== U[t].length &&
                                  (e.push(
                                      (0, r.jsx)(P, {
                                          group: t,
                                          isOpen: D[t],
                                          toggleOpenedState: () => {
                                              let e = D[t];
                                              (L(t),
                                                  (0, _.RZ)({
                                                      section: t,
                                                      enabled: !e
                                                  }));
                                          }
                                      })
                                  ),
                                  D[t] && e.push(...U[t].map((e) => p(e, R === b.jP.SIDEBAR, k(e[0].id) === C.KZ.UNREAD))));
                          }),
                e
            );
        }, [n, t, u, D, L, U, Z, p, R, k]);
    i.useEffect(() => {
        var e, t, r, i, l, o, a;
        if (n) return;
        let s = null != U && 0 === U.UNREAD.length,
            c = null != (a = null != (o = null != (l = null == (e = U) || null == (t = e.TODAY[0]) ? void 0 : t[0]) ? l : null == e || null == (r = e.YESTERDAY[0]) ? void 0 : r[0]) ? o : null == e || null == (i = e.OLDER[0]) ? void 0 : i[0]) ? a : null;
        v.Z.setInboxReadState(s, c);
    }, [U, n]);
    let B = null != t && t.length > 0 && null != a && l,
        F = (0, r.jsx)(
            'div',
            {
                className: o()(x.loadMore, { [x.showLoadMore]: B }),
                children: (0, r.jsx)(d.$jN, {})
            },
            'loading-more-after'
        );
    return (
        (function (e) {
            let { loadingInitial: t, messagesByCategory: n } = e,
                r = i.useRef(!1),
                l = null != n && n.UNREAD.length > 0,
                o = null == n || t,
                { setOpenStateFromUnreads: a } = (0, O.Z)();
            i.useEffect(() => {
                o || r.current || (a(l), (r.current = !0));
            }, [a, l, o]);
        })({
            messagesByCategory: U,
            loadingInitial: n
        }),
        (0, _.vU)({
            notificationCenterVariant: R,
            wrappedMessages: t,
            groupedUnreadMessages: null == U ? void 0 : U.UNREAD
        }),
        (0, r.jsx)('div', {
            className: o()(E, x.messagesPopoutWrap),
            onClick: I,
            onDoubleClick: I,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(d.Den, {
                className: o()(x.messagesPopout, f),
                onScroll: M,
                fade: !0,
                ref: T,
                children: (0, r.jsx)(c.bG, {
                    navigator: A,
                    children: (0, r.jsx)(c.SJ, {
                        children: (e) => {
                            var t,
                                i,
                                { ref: l } = e,
                                o = (function (e, t) {
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
                                        ref: l,
                                        style: {
                                            height: '100%',
                                            overflow: n ? 'hidden' : void 0
                                        }
                                    },
                                    o
                                )),
                                (i = i =
                                    {
                                        children: [G, F]
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
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
