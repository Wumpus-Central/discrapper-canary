n.d(t, { Z: () => x }), n(539854), n(583741), n(388685), n(642613);
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
    g = n(709054),
    m = n(821020),
    b = n(389160),
    y = n(370774),
    O = n(982183),
    v = n(981631),
    _ = n(388032),
    C = n(709701);
function j(e) {
    e.stopPropagation();
}
function S(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(u.P3F, {
        onClick: i,
        className: o()(C.messagesGroupHeaderWrap, { [C.collapsed]: !n }),
        children: (0, r.jsxs)(u.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: C.messagesGroupHeader,
                    children: (0, s.capitalize)(_.intl.string(O.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(u.CJ0, {
                    size: 'xxs',
                    className: C.chevron
                })
            ]
        })
    });
}
let E = [O.KZ.UNREAD, O.KZ.TODAY, O.KZ.YESTERDAY, O.KZ.OLDER];
function x(e) {
    let { analyticsName: t, messages: n, loading: l, loadMore: s, renderEmptyState: _, renderMessageGroup: x, setInboxReadState: P, scrollerClassName: I, className: w, listName: N, ignoreGrouping: Z = !1 } = e,
        T = i.useRef(null),
        A = (0, d.Z)(N, T),
        { notificationCenterVariant: R } = m.L.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        { messageCategoryOpenStates: D, toggleOpenState: L } = (0, b.Z)();
    i.useEffect(() => {
        p.default.track(v.rMx.OPEN_POPOUT, { type: t });
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
                f.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, t),
                f.S.subscribe(v.CkL.SCROLL_PAGE_UP, e),
                () => {
                    f.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, t), f.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let M = i.useCallback(() => {
            var e;
            let t = null == (e = T.current) ? void 0 : e.getScrollerState(),
                n = (0, y.s)(D);
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && (null == s || s(n));
        }, [s, D]),
        k = (0, y.fW)(null != n ? n : []),
        U = i.useMemo(() => {
            let e = {
                    [O.KZ.UNREAD]: [],
                    [O.KZ.TODAY]: [],
                    [O.KZ.YESTERDAY]: [],
                    [O.KZ.OLDER]: []
                },
                t = {
                    [O.KZ.UNREAD]: {},
                    [O.KZ.TODAY]: {},
                    [O.KZ.YESTERDAY]: {},
                    [O.KZ.OLDER]: {}
                },
                r = {
                    [O.KZ.UNREAD]: [],
                    [O.KZ.TODAY]: [],
                    [O.KZ.YESTERDAY]: [],
                    [O.KZ.OLDER]: []
                };
            return (
                null != n &&
                    n.length > 0 &&
                    (a().each(n, (n) => {
                        let { message: r, kind: i } = n,
                            l = k(r.id);
                        i === O.fL.MENTION ? e[l].push(r) : r.channel_id in t[l] ? t[l][r.channel_id].push(r) : (t[l][r.channel_id] = [r]);
                    }),
                    a().each(E, (n) => {
                        [...Object.values(t[n]).map((e) => e.reverse()), ...e[n].map((e) => [e])]
                            .sort((e, t) => g.default.compare(t[0].id, e[0].id))
                            .forEach((e) => {
                                r[n].push(e);
                            });
                    })),
                r
            );
        }, [n, k]),
        G = i.useMemo(() => {
            let e = [];
            return (
                null == n
                    ? e.push(
                          (0, r.jsx)(
                              'div',
                              {
                                  className: o()(C.emptyPlaceholder, C.loadingPlaceholder),
                                  children: (0, r.jsx)(u.$jN, {})
                              },
                              'spinner'
                          )
                      )
                    : 0 === n.length
                      ? e.push((0, r.jsx)(i.Fragment, { children: _(h.Z.theme) }, 'empty-state'))
                      : Z
                        ? e.push(
                              ...n.map((e) => {
                                  let { message: t } = e;
                                  return x([t], 'sidebar' === R, k(t.id) === O.KZ.UNREAD);
                              })
                          )
                        : a().each(E, (t) => {
                              0 !== U[t].length &&
                                  (e.push(
                                      (0, r.jsx)(S, {
                                          group: t,
                                          isOpen: D[t],
                                          toggleOpenedState: () => L(t)
                                      })
                                  ),
                                  D[t] && e.push(...U[t].map((e) => x(e, 'sidebar' === R, k(e[0].id) === O.KZ.UNREAD))));
                          }),
                (null == n ? void 0 : n.length) !== 0 && e.push((0, r.jsx)(u.LZC, { size: 8 }, 'spacer')),
                e
            );
        }, [n, _, D, L, U, Z, x, R, k]);
    i.useEffect(() => {
        0 === U.UNREAD.length ? P(O.xM.READ) : P(O.xM.UNREAD);
    }, [U, P]);
    let B = null;
    return (
        null != n &&
            n.length > 0 &&
            null != s &&
            l &&
            (B = (0, r.jsx)(
                'div',
                {
                    className: C.loadingMore,
                    children: (0, r.jsx)(u.$jN, {})
                },
                'loading-more-after'
            )),
        (0, r.jsx)('div', {
            className: o()(w, C.messagesPopoutWrap),
            onClick: j,
            onDoubleClick: j,
            'aria-label': e['aria-label'],
            children: (0, r.jsxs)(u.Den, {
                className: o()(C.messagesPopout, I),
                onScroll: M,
                ref: T,
                children: [
                    (0, r.jsx)(c.bG, {
                        navigator: A,
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
                                    })(
                                        {
                                            ref: i,
                                            style: { height: '100%' }
                                        },
                                        l
                                    )),
                                    (n = n = { children: G }),
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
                    B
                ]
            })
        })
    );
}
