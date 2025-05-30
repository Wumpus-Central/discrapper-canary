n.d(t, { Z: () => E }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(91192),
    u = n(481060),
    d = n(724757),
    h = n(210887),
    p = n(626135),
    f = n(585483),
    g = n(821020),
    m = n(389160),
    b = n(370774),
    y = n(982183),
    O = n(981631),
    v = n(388032),
    _ = n(709701);
function C(e) {
    e.stopPropagation();
}
function j(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(u.P3F, {
        onClick: i,
        className: o()(_.messagesGroupHeaderWrap, { [_.collapsed]: !n }),
        children: (0, r.jsxs)(u.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: _.messagesGroupHeader,
                    children: (0, s.capitalize)(v.intl.string(y.Ty[t]).toLowerCase())
                }),
                (0, r.jsx)(u.CJ0, {
                    size: 'xxs',
                    className: _.chevron
                })
            ]
        })
    });
}
let S = [y.dm.UNREAD, y.dm.TODAY, y.dm.YESTERDAY, y.dm.OLDER];
function E(e) {
    let { analyticsName: t, messages: n, loading: l, loadMore: s, renderEmptyState: v, renderMessageGroup: E, setInboxReadState: x, scrollerClassName: P, className: I, listName: w, ignoreGrouping: N = !1 } = e,
        Z = i.useRef(null),
        T = (0, d.Z)(w, Z),
        { notificationCenterVariant: R } = g.L.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        { messageGroupOpenStates: A, toggleOpenState: D } = (0, m.Z)();
    i.useEffect(() => {
        p.default.track(O.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = Z.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = Z.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                f.S.subscribe(O.CkL.SCROLL_PAGE_DOWN, t),
                f.S.subscribe(O.CkL.SCROLL_PAGE_UP, e),
                () => {
                    f.S.unsubscribe(O.CkL.SCROLL_PAGE_DOWN, t), f.S.unsubscribe(O.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let L = i.useCallback(() => {
            var e;
            let t = null == (e = Z.current) ? void 0 : e.getScrollerState(),
                n = (0, b.s)(A);
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && (null == s || s(n));
        }, [s, A]),
        k = i.useMemo(() => {
            let e = {
                    [y.dm.UNREAD]: {},
                    [y.dm.TODAY]: {},
                    [y.dm.YESTERDAY]: {},
                    [y.dm.OLDER]: {}
                },
                t = {
                    [y.dm.UNREAD]: [],
                    [y.dm.TODAY]: [],
                    [y.dm.YESTERDAY]: [],
                    [y.dm.OLDER]: []
                };
            return (
                null != n &&
                    n.length > 0 &&
                    (a().each(n, (t) => {
                        let n = (0, b.Qz)(t);
                        t.channel_id in e[n] ? e[n][t.channel_id].push(t) : (e[n][t.channel_id] = [t]);
                    }),
                    a().each(S, (n) => {
                        Object.values(e[n]).forEach((e) => {
                            t[n].push(e);
                        });
                    })),
                t
            );
        }, [n]),
        M = i.useMemo(() => {
            let e = [];
            return (
                null == n
                    ? e.push(
                          (0, r.jsx)(
                              'div',
                              {
                                  className: o()(_.emptyPlaceholder, _.loadingPlaceholder),
                                  children: (0, r.jsx)(u.$jN, {})
                              },
                              'spinner'
                          )
                      )
                    : 0 === n.length
                      ? e.push((0, r.jsx)(i.Fragment, { children: v(h.Z.theme) }, 'empty-state'))
                      : N
                        ? e.push(...n.map((e) => E([e], 'sidebar' === R)))
                        : a().each(S, (t) => {
                              0 !== k[t].length &&
                                  (e.push(
                                      (0, r.jsx)(j, {
                                          group: t,
                                          isOpen: A[t],
                                          toggleOpenedState: () => D(t)
                                      })
                                  ),
                                  A[t] && e.push(...k[t].map((e) => E(e, 'sidebar' === R))));
                          }),
                e.push((0, r.jsx)(u.LZC, { size: 8 }, 'spacer')),
                e
            );
        }, [n, v, A, D, k, N, E, R]);
    i.useEffect(() => {
        0 === k.UNREAD.length ? x(y.xM.READ) : x(y.xM.UNREAD);
    }, [k, x]);
    let U = null;
    return (
        null != n &&
            n.length > 0 &&
            null != s &&
            l &&
            (U = (0, r.jsx)(
                'div',
                {
                    className: _.loadingMore,
                    children: (0, r.jsx)(u.$jN, {})
                },
                'loading-more-after'
            )),
        (0, r.jsx)('div', {
            className: o()(I, _.messagesPopoutWrap),
            onClick: C,
            onDoubleClick: C,
            'aria-label': e['aria-label'],
            children: (0, r.jsxs)(u.Den, {
                className: o()(_.messagesPopout, P),
                onScroll: L,
                ref: Z,
                children: [
                    (0, r.jsx)(c.bG, {
                        navigator: T,
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
                                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                        }
                                        return i;
                                    })(e, ['ref']);
                                return (0, r.jsx)(
                                    'div',
                                    ((t = (function (e) {
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
                                    })({ ref: i }, l)),
                                    (n = n = { children: M }),
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
                    }),
                    U
                ]
            })
        })
    );
}
