n.d(t, { ZP: () => P }), n(388685), n(539854);
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
    v = n(709701);
function _(e) {
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
let S = () =>
    (0, r.jsxs)('div', {
        className: v.unreadsEmpty,
        children: [
            (0, r.jsx)(u.xx7, {
                color: 'currentColor',
                size: 'custom',
                className: v.unreadsEmptyIcon,
                width: 36,
                height: 36
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: O.intl.string(O.t['6XMM+P'])
            })
        ]
    });
function E(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(u.P3F, {
        onClick: i,
        className: o()(v.messagesGroupHeaderWrap, { [v.collapsed]: !n }),
        children: (0, r.jsxs)(u.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: v.messagesGroupHeader,
                    children: (0, s.capitalize)(O.intl.string(b.Ty[t]).toLowerCase())
                }),
                (0, r.jsx)(u.CJ0, {
                    size: 'xxs',
                    className: v.chevron
                })
            ]
        })
    });
}
let x = {
    [b.dm.UNREAD]: !0,
    [b.dm.TODAY]: !1,
    [b.dm.YESTERDAY]: !1,
    [b.dm.OLDER]: !1
};
function P(e) {
    let { analyticsName: t, messages: n, hasMore: l, loading: s, loadMore: O, renderEmptyState: P, renderMessage: I, scrollerClassName: w, className: N, listName: Z } = e,
        T = i.useRef(null),
        A = (0, d.Z)(Z, T),
        { notificationCenterVariant: R } = g.L.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        [D, L] = i.useState(x);
    i.useEffect(() => {
        p.default.track(y.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
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
                f.S.subscribe(y.CkL.SCROLL_PAGE_DOWN, t),
                f.S.subscribe(y.CkL.SCROLL_PAGE_UP, e),
                () => {
                    f.S.unsubscribe(y.CkL.SCROLL_PAGE_DOWN, t), f.S.unsubscribe(y.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let k = i.useCallback(() => {
            var e;
            let t = null == (e = T.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && l && !s && (null == O || O());
        }, [l, O, s]),
        M = [],
        U = {
            [b.dm.UNREAD]: [],
            [b.dm.TODAY]: [],
            [b.dm.YESTERDAY]: [],
            [b.dm.OLDER]: []
        };
    null == n
        ? (M = [
              (0, r.jsx)(
                  'div',
                  {
                      className: o()(v.emptyPlaceholder, v.loadingPlaceholder),
                      children: (0, r.jsx)(u.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? M.push((0, r.jsx)(i.Fragment, { children: P(h.Z.theme) }, 'empty-state'))
          : (a().each(n, (e) => {
                U[(0, m.Q)(e)].push(I(e, 'sidebar' === R));
            }),
            (M = []),
            a().each([b.dm.UNREAD, b.dm.TODAY, b.dm.YESTERDAY, b.dm.OLDER], (e) => {
                if (0 === U[e].length) {
                    e === b.dm.UNREAD &&
                        (M.push(
                            (0, r.jsx)(E, {
                                group: e,
                                isOpen: D[e],
                                toggleOpenedState: () => L((t) => C(_({}, t), { [e]: !t[e] }))
                            })
                        ),
                        D[e] && M.push((0, r.jsx)(S, {}, 'unread-empty-state')));
                    return;
                }
                M.push(
                    (0, r.jsx)(E, {
                        group: e,
                        isOpen: D[e],
                        toggleOpenedState: () => L((t) => C(_({}, t), { [e]: !t[e] }))
                    })
                ),
                    D[e] && M.push(...U[e]);
            })),
        M.push((0, r.jsx)(u.LZC, { size: 8 }, 'spacer'));
    let G = null;
    null != n &&
        n.length > 0 &&
        null != O &&
        s &&
        (G = (0, r.jsx)(
            'div',
            {
                className: v.loadingMore,
                children: (0, r.jsx)(u.$jN, {})
            },
            'loading-more-after'
        ));
    let B = null != O && l;
    return (0, r.jsx)('div', {
        className: o()(N, v.messagesPopoutWrap),
        onClick: j,
        onDoubleClick: j,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(u.Den, {
            className: o()(v.messagesPopout, w),
            onScroll: B ? k : void 0,
            ref: T,
            children: [
                (0, r.jsx)(c.bG, {
                    navigator: A,
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
                            return (0, r.jsx)('div', C(_({ ref: t }, n), { children: M }));
                        }
                    })
                }),
                G
            ]
        })
    });
}
