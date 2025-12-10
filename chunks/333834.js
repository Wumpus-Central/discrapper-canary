n.d(t, { Z: () => R }), n(539854), n(583741), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    f = n(724757),
    h = n(100527),
    p = n(906732),
    g = n(306680),
    m = n(585483),
    b = n(709054),
    _ = n(821020),
    y = n(804932),
    O = n(389160),
    v = n(787879),
    j = n(370774),
    x = n(334426),
    C = n(862149),
    E = n(982183),
    S = n(981631),
    I = n(512575),
    P = n(388032),
    N = n(809946);
function Z(e) {
    e.stopPropagation();
}
function w(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(d.P3F, {
        "aria-expanded": n,
        onClick: i,
        className: o()(N.messagesGroupHeaderWrap, { [N.collapsed]: !n }),
        children: (0, r.jsxs)(d.Kqy, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: N.messagesGroupHeader,
                    children: (0, a.capitalize)(P.intl.string(E.Vv[t]).toLowerCase()),
                }),
                (0, r.jsx)(d.CJ0, {
                    size: "xxs",
                    className: N.chevron,
                }),
            ],
        }),
    });
}
let T = [E.KZ.UNREAD, E.KZ.TODAY, E.KZ.YESTERDAY, E.KZ.OLDER];
function A() {
    let { analyticsLocations: e } = (0, p.ZP)(h.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)("div", {
        className: N.emptyStateContainer,
        children: (0, r.jsxs)(d.Kqy, {
            gap: 24,
            align: "center",
            children: [
                (0, r.jsxs)(d.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(d.xx7, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: d.TVs.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: P.intl.string(I.default["O+racd"]),
                        }),
                    ],
                }),
                (0, r.jsx)(d.Button, {
                    variant: "secondary",
                    onClick: () => (0, j.j4)(e),
                    text: P.intl.string(I.default.klSpfs),
                }),
            ],
        }),
    });
}
function R(e) {
    let {
            messages: t,
            unreadMessages: n,
            loadMore: l,
            renderLoadingState: a,
            renderMessageGroup: h,
            scrollerClassName: p,
            className: I,
            listName: P,
            ignoreGrouping: R = !1,
        } = e,
        D = (0, y.fJ)(),
        L = i.useRef(null),
        M = (0, f.Z)(P, L),
        { entrypoint: k, notificationCenterVariant: G } = (0, _.pN)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: U,
            isLoadingComplete: B,
            hasLoadedEver: F,
        } = (0, u.cj)([v.Z], () => ({
            isLoading: v.Z.isLoading,
            isLoadingComplete: v.Z.isLoadingComplete,
            hasLoadedEver: v.Z.hasLoadedEver,
        })),
        V = !F && U,
        { messageCategoryOpenStates: H, toggleOpenState: W } = (0, O.Z)(),
        z = (function () {
            let e = (0, u.Wu)([v.Z], () => {
                var e;
                return null != (e = v.Z.getNotifyingChannelIds()) ? e : [];
            });
            return (0, u.e7)([v.Z, g.ZP], () => {
                let t = v.Z.getChannelInfoMap();
                for (let r of e) {
                    var n;
                    let e = t[r];
                    if ((null == e || e.loadState === E.a7.UNLOADED) && null != (n = g.ZP.hasUnread(r)) && n) return !0;
                }
                return !1;
            }, [e]);
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
            m.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, t),
            m.S.subscribe(S.CkL.SCROLL_PAGE_UP, e),
            () => {
                m.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, t), m.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let K = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == l || l(E.X.USER_SCROLL));
        }, [l]),
        Y = i.useMemo(() => {
            let e = {
                    [E.KZ.UNREAD]: [],
                    [E.KZ.TODAY]: [],
                    [E.KZ.YESTERDAY]: [],
                    [E.KZ.OLDER]: [],
                },
                r = {
                    [E.KZ.UNREAD]: [],
                    [E.KZ.TODAY]: [],
                    [E.KZ.YESTERDAY]: [],
                    [E.KZ.OLDER]: [],
                },
                i = {
                    [E.KZ.UNREAD]: {},
                    [E.KZ.TODAY]: {},
                    [E.KZ.YESTERDAY]: {},
                    [E.KZ.OLDER]: {},
                };
            return (
                (t.length > 0 || n.length > 0) &&
                    (s().each(n, (e) => {
                        e.kind === E.fL.MENTION
                            ? r[E.KZ.UNREAD].push(e)
                            : e.channelId in i[E.KZ.UNREAD]
                              ? i[E.KZ.UNREAD][e.channelId].push(e)
                              : (i[E.KZ.UNREAD][e.channelId] = [e]);
                    }),
                    s().each(t, (e) => {
                        let t = (0, j.bl)(e);
                        e.kind === E.fL.MENTION
                            ? r[t].push(e)
                            : e.channelId in i[t]
                              ? i[t][e.channelId].push(e)
                              : (i[t][e.channelId] = [e]);
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
        q = 0 === t.length && 0 === n.length && B,
        X = 0 === t.length && 0 === n.length && !F && U,
        Q = i.useMemo(() => {
            let e = [];
            return (
                X
                    ? e.push(a())
                    : q
                      ? e.push((0, r.jsx)(A, {}, "empty-state"))
                      : R
                        ? (e.push(...n.map((e) => h([e], !0))), e.push(...t.map((e) => h([e], !1))))
                        : s().each(T, (t) => {
                              0 !== Y[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          w,
                                          {
                                              group: t,
                                              isOpen: H[t],
                                              toggleOpenedState: () => {
                                                  let e = H[t];
                                                  W(t),
                                                      (0, y.RZ)({
                                                          section: t,
                                                          enabled: !e,
                                                          viewId: D,
                                                      });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  H[t] && e.push(...Y[t].map((e) => h(e, t === E.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, a, H, W, Y, R, h, q, X, D]),
        J = Q[Q.length - 1],
        $ = i.isValidElement(J) && J.type === w,
        ee = (0, x.d)((e) => e.setInboxReadState);
    i.useEffect(() => {
        X || ee(0 === Y.UNREAD.length);
    }, [Y, X, ee]);
    let et = (t.length > 0 || n.length > 0) && null != l && U;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = i.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: o } = (0, O.Z)();
        i.useEffect(() => {
            t || r.current || (o(l), (r.current = !0));
        }, [o, l, t]);
    })({
        messagesByCategory: Y,
        loadingInitial: V,
    });
    let en = i.useCallback(() => {
        var e;
        let t = T.filter((e) => H[e]).reduce((e, t) => e + Y[t].length, 0),
            n = null == (e = L.current) ? void 0 : e.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t);
    }, [H, Y]);
    i.useEffect(() => {
        X || U || 0 >= en() || ((!$ || z) && (null == l || l(E.X.FILL_SCROLLER)));
    }, [en, l, X, U, $, z]);
    let er = i.useMemo(() => {
        let e = Math.min(Math.max(2, en()), 20);
        return (0, r.jsx)(C.Z, {
            withHeader: !1,
            size: e,
        });
    }, [en]);
    return (
        (0, y.vU)({
            notificationCenterVariant: G,
            entrypoint: k,
            messages: t,
            unreadMessages: n,
            messagesByCategory: Y,
            viewId: D,
        }),
        (0, r.jsx)("div", {
            className: o()(I, N.messagesPopoutWrap),
            onClick: Z,
            onDoubleClick: Z,
            "aria-label": e["aria-label"],
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
                                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++)
                                        (n = l[r]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (i[n] = e[n]);
                                }
                                return i;
                            })(e, ["ref"]);
                        return (0, r.jsxs)(
                            d.Den,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    ref: (e) => {
                                        var t;
                                        (L.current = e),
                                            (i.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: o()(N.messagesPopout, p),
                                    onScroll: K,
                                    fade: !0,
                                },
                                l,
                            )),
                            (n = n =
                                {
                                    children: [Q, et && !$ ? er : null],
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
                            t),
                        );
                    },
                }),
            }),
        })
    );
}
