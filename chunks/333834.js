n.d(t, { ZP: () => I }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    h = n(724757),
    p = n(210887),
    f = n(626135),
    g = n(585483),
    m = n(821020),
    b = n(846355),
    y = n(982183),
    O = n(981631),
    v = n(388032),
    _ = n(709701);
function C(e) {
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
function j(e, t) {
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
function S(e) {
    e.stopPropagation();
}
let E = () =>
    (0, r.jsxs)('div', {
        className: _.unreadsEmpty,
        children: [
            (0, r.jsx)(d.xx7, {
                color: 'currentColor',
                size: 'custom',
                className: _.unreadsEmptyIcon,
                width: 36,
                height: 36
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: v.intl.string(v.t['6XMM+P'])
            })
        ]
    });
function x(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(d.P3F, {
        onClick: i,
        className: o()(_.messagesGroupHeaderWrap, { [_.collapsed]: !n }),
        children: (0, r.jsxs)(d.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(d.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: _.messagesGroupHeader,
                    children: (0, s.capitalize)(v.intl.string(y.Ty[t]).toLowerCase())
                }),
                (0, r.jsx)(d.CJ0, {
                    size: 'xxs',
                    className: _.chevron
                })
            ]
        })
    });
}
let P = {
    [y.dm.UNREAD]: !0,
    [y.dm.TODAY]: !1,
    [y.dm.YESTERDAY]: !1,
    [y.dm.OLDER]: !1
};
function I(e) {
    let { analyticsName: t, messages: n, hasMore: l, loading: s, loadMore: v, renderEmptyState: I, renderMessage: w, scrollerClassName: N, className: Z, listName: T } = e,
        A = i.useRef(null),
        R = (0, h.Z)(T, A),
        D = (0, u.e7)([b.Z], () => b.Z.unreadMessageIds),
        { notificationCenterVariant: L } = m.L.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        [k, M] = i.useState(P);
    i.useEffect(() => {
        f.default.track(O.rMx.OPEN_POPOUT, { type: t });
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
                g.S.subscribe(O.CkL.SCROLL_PAGE_DOWN, t),
                g.S.subscribe(O.CkL.SCROLL_PAGE_UP, e),
                () => {
                    g.S.unsubscribe(O.CkL.SCROLL_PAGE_DOWN, t), g.S.unsubscribe(O.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let U = i.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && l && !s && (null == v || v());
        }, [l, v, s]),
        G = [],
        B = {
            [y.dm.UNREAD]: [],
            [y.dm.TODAY]: [],
            [y.dm.YESTERDAY]: [],
            [y.dm.OLDER]: []
        };
    null == n
        ? (G = [
              (0, r.jsx)(
                  'div',
                  {
                      className: o()(_.emptyPlaceholder, _.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? G.push((0, r.jsx)(i.Fragment, { children: I(p.Z.theme) }, 'empty-state'))
          : (a().each(n, (e) => {
                B[(0, y.Qz)(e, D)].push(w(e, 'sidebar' === L));
            }),
            (G = []),
            a().each([y.dm.UNREAD, y.dm.TODAY, y.dm.YESTERDAY, y.dm.OLDER], (e) => {
                if (0 === B[e].length) {
                    e === y.dm.UNREAD &&
                        (G.push(
                            (0, r.jsx)(x, {
                                group: e,
                                isOpen: k[e],
                                toggleOpenedState: () => M((t) => j(C({}, t), { [e]: !t[e] }))
                            })
                        ),
                        k[e] && G.push((0, r.jsx)(E, {}, 'unread-empty-state')));
                    return;
                }
                G.push(
                    (0, r.jsx)(x, {
                        group: e,
                        isOpen: k[e],
                        toggleOpenedState: () => M((t) => j(C({}, t), { [e]: !t[e] }))
                    })
                ),
                    k[e] && G.push(...B[e]);
            }),
            G.push((0, r.jsx)(d.LZC, { size: 8 }, 'spacer')));
    let V = null;
    null != n &&
        n.length > 0 &&
        null != v &&
        s &&
        (V = (0, r.jsx)(
            'div',
            {
                className: _.loadingMore,
                children: (0, r.jsx)(d.$jN, {})
            },
            'loading-more-after'
        ));
    let H = null != v && l;
    return (0, r.jsx)('div', {
        className: o()(Z, _.messagesPopoutWrap),
        onClick: S,
        onDoubleClick: S,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.Den, {
            className: o()(_.messagesPopout, N),
            onScroll: H ? U : void 0,
            ref: A,
            children: [
                (0, r.jsx)(c.bG, {
                    navigator: R,
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
                            return (0, r.jsx)('div', j(C({ ref: t }, n), { children: G }));
                        }
                    })
                }),
                V
            ]
        })
    });
}
