n.d(t, { Z: () => P }), n(388685), n(539854);
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
    m = n(370774),
    b = n(982183),
    y = n(981631),
    O = n(388032),
    _ = n(709701);
function v(e) {
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
function C(e, t) {
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
function j(e) {
    e.stopPropagation();
}
function S(e) {
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
                    children: (0, s.capitalize)(O.intl.string(b.Ty[t]).toLowerCase())
                }),
                (0, r.jsx)(u.CJ0, {
                    size: 'xxs',
                    className: _.chevron
                })
            ]
        })
    });
}
let E = {
        [b.dm.UNREAD]: !0,
        [b.dm.TODAY]: !1,
        [b.dm.YESTERDAY]: !1,
        [b.dm.OLDER]: !1
    },
    x = [b.dm.UNREAD, b.dm.TODAY, b.dm.YESTERDAY, b.dm.OLDER];
function P(e) {
    let { analyticsName: t, messages: n, hasMore: l, loading: s, loadMore: O, renderEmptyState: P, renderMessageGroup: I, setInboxReadState: w, scrollerClassName: N, className: Z, listName: T, ignoreGrouping: R = !1 } = e,
        A = i.useRef(null),
        D = (0, d.Z)(T, A),
        { notificationCenterVariant: L } = g.L.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        [k, M] = i.useState(E);
    i.useEffect(() => {
        p.default.track(y.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
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
                f.S.subscribe(y.CkL.SCROLL_PAGE_DOWN, t),
                f.S.subscribe(y.CkL.SCROLL_PAGE_UP, e),
                () => {
                    f.S.unsubscribe(y.CkL.SCROLL_PAGE_DOWN, t), f.S.unsubscribe(y.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let U = i.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && l && !s && (null == O || O());
        }, [l, O, s]),
        G = i.useMemo(() => {
            let e = {
                    [b.dm.UNREAD]: {},
                    [b.dm.TODAY]: {},
                    [b.dm.YESTERDAY]: {},
                    [b.dm.OLDER]: {}
                },
                t = {
                    [b.dm.UNREAD]: [],
                    [b.dm.TODAY]: [],
                    [b.dm.YESTERDAY]: [],
                    [b.dm.OLDER]: []
                };
            return (
                null != n &&
                    n.length > 0 &&
                    (a().each(n, (t) => {
                        let n = (0, m.Q)(t);
                        t.channel_id in e[n] ? e[n][t.channel_id].push(t) : (e[n][t.channel_id] = [t]);
                    }),
                    a().each(x, (n) => {
                        Object.values(e[n]).forEach((e) => {
                            t[n].push(e);
                        });
                    })),
                t
            );
        }, [n]),
        B = i.useMemo(() => {
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
                      ? e.push((0, r.jsx)(i.Fragment, { children: P(h.Z.theme) }, 'empty-state'))
                      : R
                        ? e.push(...n.map((e) => I([e], 'sidebar' === L)))
                        : a().each(x, (t) => {
                              0 !== G[t].length &&
                                  (e.push(
                                      (0, r.jsx)(S, {
                                          group: t,
                                          isOpen: k[t],
                                          toggleOpenedState: () => M((e) => C(v({}, e), { [t]: !e[t] }))
                                      })
                                  ),
                                  k[t] && e.push(...G[t].map((e) => I(e, 'sidebar' === L))));
                          }),
                e.push((0, r.jsx)(u.LZC, { size: 8 }, 'spacer')),
                e
            );
        }, [n, P, k, G, R, I, L]);
    i.useEffect(() => {
        0 === G.UNREAD.length ? w(b.xM.READ) : w(b.xM.UNREAD);
    }, [G, w]);
    let V = null;
    null != n &&
        n.length > 0 &&
        null != O &&
        s &&
        (V = (0, r.jsx)(
            'div',
            {
                className: _.loadingMore,
                children: (0, r.jsx)(u.$jN, {})
            },
            'loading-more-after'
        ));
    let H = null != O && l;
    return (0, r.jsx)('div', {
        className: o()(Z, _.messagesPopoutWrap),
        onClick: j,
        onDoubleClick: j,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(u.Den, {
            className: o()(_.messagesPopout, N),
            onScroll: H ? U : void 0,
            ref: A,
            children: [
                (0, r.jsx)(c.bG, {
                    navigator: D,
                    children: (0, r.jsx)(c.SJ, {
                        children: (e) => {
                            var { ref: t } = e,
                                n = (function (e, t) {
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
                            return (0, r.jsx)('div', C(v({ ref: t }, n), { children: B }));
                        }
                    })
                }),
                V
            ]
        })
    });
}
