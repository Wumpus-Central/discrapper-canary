n.d(t, { Z: () => I }), n(539854), n(583741), n(388685), n(642613);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(91192),
    u = n(481060),
    d = n(724757),
    h = n(100527),
    p = n(906732),
    f = n(585483),
    g = n(709054),
    m = n(821020),
    b = n(538397),
    y = n(389160),
    O = n(370774),
    v = n(982183),
    _ = n(981631),
    C = n(388032),
    j = n(709701);
function S(e) {
    e.stopPropagation();
}
function x(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(u.P3F, {
        onClick: i,
        className: o()(j.messagesGroupHeaderWrap, { [j.collapsed]: !n }),
        children: (0, r.jsxs)(u.Kqy, {
            gap: 4,
            direction: 'horizontal',
            align: 'center',
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: j.messagesGroupHeader,
                    children: (0, s.capitalize)(C.intl.string(v.Vv[t]).toLowerCase())
                }),
                (0, r.jsx)(u.CJ0, {
                    size: 'xxs',
                    className: j.chevron
                })
            ]
        })
    });
}
let E = [v.KZ.UNREAD, v.KZ.TODAY, v.KZ.YESTERDAY, v.KZ.OLDER];
function P() {
    let { analyticsLocations: e } = (0, p.ZP)(h.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)('div', {
        className: j.emptyStateContainer,
        children: (0, r.jsxs)(u.Kqy, {
            gap: 24,
            align: 'center',
            children: [
                (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(u.xx7, {
                            size: 'custom',
                            height: 40,
                            width: 40,
                            color: u.TVs.colors.BG_MOD_STRONG
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: _.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: C.intl.string(C.t['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(u.zxk, {
                    onClick: () => (0, O.j4)(e),
                    color: u.zxk.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: C.intl.string(C.t.klSpfn)
                })
            ]
        })
    });
}
function I(e) {
    let { messages: t, loadingInitial: n, loadingMore: l, loadMore: s, renderLoadingState: h, renderMessageGroup: p, setInboxReadState: C, scrollerClassName: I, className: w, listName: N, ignoreGrouping: Z = !1 } = e,
        T = i.useRef(null),
        A = (0, d.Z)(N, T),
        { notificationCenterVariant: R } = m.L.useExperiment({ location: 'NotificationsInboxSidebarList' }),
        { messageCategoryOpenStates: D, toggleOpenState: L } = (0, y.Z)();
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
            f.S.subscribe(_.CkL.SCROLL_PAGE_DOWN, t),
            f.S.subscribe(_.CkL.SCROLL_PAGE_UP, e),
            () => {
                f.S.unsubscribe(_.CkL.SCROLL_PAGE_DOWN, t), f.S.unsubscribe(_.CkL.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let M = i.useCallback(() => {
            var e;
            let t = null == (e = T.current) ? void 0 : e.getScrollerState(),
                n = (0, O.s)(D);
            null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && (null == s || s(n));
        }, [s, D]),
        k = (0, O.fW)(null != t ? t : []),
        U = i.useMemo(() => {
            if (null == t || n) return null;
            let e = {
                    [v.KZ.UNREAD]: [],
                    [v.KZ.TODAY]: [],
                    [v.KZ.YESTERDAY]: [],
                    [v.KZ.OLDER]: []
                },
                r = {
                    [v.KZ.UNREAD]: [],
                    [v.KZ.TODAY]: [],
                    [v.KZ.YESTERDAY]: [],
                    [v.KZ.OLDER]: []
                },
                i = {
                    [v.KZ.UNREAD]: {},
                    [v.KZ.TODAY]: {},
                    [v.KZ.YESTERDAY]: {},
                    [v.KZ.OLDER]: {}
                };
            return (
                null != t &&
                    t.length > 0 &&
                    (a().each(t, (e) => {
                        let { message: t, kind: n } = e,
                            l = k(t.id);
                        n === v.fL.MENTION ? r[l].push(t) : t.channel_id in i[l] ? i[l][t.channel_id].push(t) : (i[l][t.channel_id] = [t]);
                    }),
                    a().each(E, (t) => {
                        [...Object.values(i[t]).map((e) => e.reverse()), ...r[t].map((e) => [e])]
                            .sort((e, t) => g.default.compare(t[0].id, e[0].id))
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
                null == t || n
                    ? e.push(h())
                    : 0 === t.length
                      ? e.push((0, r.jsx)(P, {}, 'empty-state'))
                      : Z
                        ? e.push(
                              ...t.map((e) => {
                                  let { message: t } = e;
                                  return p([t], 'sidebar' === R, k(t.id) === v.KZ.UNREAD);
                              })
                          )
                        : null != U &&
                          a().each(E, (t) => {
                              0 !== U[t].length &&
                                  (e.push(
                                      (0, r.jsx)(x, {
                                          group: t,
                                          isOpen: D[t],
                                          toggleOpenedState: () => {
                                              let e = D[t];
                                              L(t),
                                                  (0, b.RZ)({
                                                      section: t,
                                                      enabled: !e
                                                  });
                                          }
                                      })
                                  ),
                                  D[t] && e.push(...U[t].map((e) => p(e, 'sidebar' === R, k(e[0].id) === v.KZ.UNREAD))));
                          }),
                (null == t ? void 0 : t.length) !== 0 && e.push((0, r.jsx)(u.LZC, { size: 8 }, 'spacer')),
                e
            );
        }, [n, t, h, D, L, U, Z, p, R, k]);
    i.useEffect(() => {
        null != U && 0 === U.UNREAD.length ? C(v.xM.READ) : C(v.xM.UNREAD);
    }, [U, C]);
    let B = null;
    return (
        null != t &&
            t.length > 0 &&
            null != s &&
            l &&
            (B = (0, r.jsx)(
                'div',
                {
                    className: j.loadingMore,
                    children: (0, r.jsx)(u.$jN, {})
                },
                'loading-more-after'
            )),
        (0, b.vU)({
            notificationCenterVariant: R,
            wrappedMessages: t,
            groupedUnreadMessages: null == U ? void 0 : U.UNREAD
        }),
        (0, r.jsx)('div', {
            className: o()(w, j.messagesPopoutWrap),
            onClick: S,
            onDoubleClick: S,
            'aria-label': e['aria-label'],
            children: (0, r.jsx)(u.Den, {
                className: o()(j.messagesPopout, I),
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
                                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                            return i;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                    }
                                    return i;
                                })(e, ['ref']);
                            return (0, r.jsxs)(
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
                                        children: [G, B]
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
