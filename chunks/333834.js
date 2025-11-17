n.d(t, { Z: () => D }), n(539854), n(583741), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    f = n(724757),
    h = n(100527),
    g = n(906732),
    m = n(306680),
    b = n(585483),
    _ = n(709054),
    y = n(821020),
    O = n(804932),
    v = n(389160),
    j = n(787879),
    x = n(370774),
    C = n(334426),
    E = n(862149),
    S = n(982183),
    I = n(981631),
    P = n(133948),
    N = n(388032),
    Z = n(809946);
function w(e) {
    e.stopPropagation();
}
function T(e) {
    let { group: t, isOpen: n, toggleOpenedState: i } = e;
    return (0, r.jsx)(p.P3F, {
        "aria-expanded": n,
        onClick: i,
        className: o()(Z.messagesGroupHeaderWrap, { [Z.collapsed]: !n }),
        children: (0, r.jsxs)(p.Kqy, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, r.jsx)(p.Heading, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    className: Z.messagesGroupHeader,
                    children: (0, a.capitalize)(N.intl.string(S.Vv[t]).toLowerCase()),
                }),
                (0, r.jsx)(p.CJ0, {
                    size: "xxs",
                    className: Z.chevron,
                }),
            ],
        }),
    });
}
let A = [S.KZ.UNREAD, S.KZ.TODAY, S.KZ.YESTERDAY, S.KZ.OLDER];
function R() {
    let { analyticsLocations: e } = (0, g.ZP)(h.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)("div", {
        className: Z.emptyStateContainer,
        children: (0, r.jsxs)(p.Kqy, {
            gap: 24,
            align: "center",
            children: [
                (0, r.jsxs)(p.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(p.xx7, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: p.TVs.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, r.jsx)(p.Text, {
                            variant: "text-sm/medium",
                            color: I.tPk.TEXT_MUTED,
                            style: { textAlign: "center" },
                            children: N.intl.string(P.default["O+racd"]),
                        }),
                    ],
                }),
                (0, r.jsx)(d.zx, {
                    onClick: () => (0, x.j4)(e),
                    color: d.zx.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: N.intl.string(P.default.klSpfs),
                }),
            ],
        }),
    });
}
function D(e) {
    let {
            messages: t,
            unreadMessages: n,
            loadMore: l,
            renderLoadingState: a,
            renderMessageGroup: d,
            scrollerClassName: h,
            className: g,
            listName: P,
            ignoreGrouping: N = !1,
        } = e,
        D = (0, O.fJ)(),
        L = i.useRef(null),
        M = (0, f.Z)(P, L),
        { entrypoint: k, notificationCenterVariant: G } = (0, y.pN)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: U,
            isLoadingComplete: B,
            hasLoadedEver: F,
        } = (0, u.cj)([j.Z], () => ({
            isLoading: j.Z.isLoading,
            isLoadingComplete: j.Z.isLoadingComplete,
            hasLoadedEver: j.Z.hasLoadedEver,
        })),
        V = !F && U,
        { messageCategoryOpenStates: H, toggleOpenState: z } = (0, v.Z)(),
        W = (function () {
            let e = (0, u.Wu)([j.Z], () => {
                var e;
                return null != (e = j.Z.getNotifyingChannelIds()) ? e : [];
            });
            return (0, u.e7)([j.Z, m.ZP], () => {
                let t = j.Z.getChannelInfoMap();
                for (let r of e) {
                    var n;
                    let e = t[r];
                    if ((null == e || e.loadState === S.a7.UNLOADED) && null != (n = m.ZP.hasUnread(r)) && n) return !0;
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
            b.S.subscribe(I.CkL.SCROLL_PAGE_DOWN, t),
            b.S.subscribe(I.CkL.SCROLL_PAGE_UP, e),
            () => {
                b.S.unsubscribe(I.CkL.SCROLL_PAGE_DOWN, t), b.S.unsubscribe(I.CkL.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let K = i.useCallback(() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == l || l(S.X.USER_SCROLL));
        }, [l]),
        Y = i.useMemo(() => {
            let e = {
                    [S.KZ.UNREAD]: [],
                    [S.KZ.TODAY]: [],
                    [S.KZ.YESTERDAY]: [],
                    [S.KZ.OLDER]: [],
                },
                r = {
                    [S.KZ.UNREAD]: [],
                    [S.KZ.TODAY]: [],
                    [S.KZ.YESTERDAY]: [],
                    [S.KZ.OLDER]: [],
                },
                i = {
                    [S.KZ.UNREAD]: {},
                    [S.KZ.TODAY]: {},
                    [S.KZ.YESTERDAY]: {},
                    [S.KZ.OLDER]: {},
                };
            return (
                (t.length > 0 || n.length > 0) &&
                    (s().each(n, (e) => {
                        e.kind === S.fL.MENTION
                            ? r[S.KZ.UNREAD].push(e)
                            : e.channelId in i[S.KZ.UNREAD]
                              ? i[S.KZ.UNREAD][e.channelId].push(e)
                              : (i[S.KZ.UNREAD][e.channelId] = [e]);
                    }),
                    s().each(t, (e) => {
                        let t = (0, x.bl)(e);
                        e.kind === S.fL.MENTION
                            ? r[t].push(e)
                            : e.channelId in i[t]
                              ? i[t][e.channelId].push(e)
                              : (i[t][e.channelId] = [e]);
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
        X = 0 === t.length && 0 === n.length && !F && U,
        Q = i.useMemo(() => {
            let e = [];
            return (
                X
                    ? e.push(a())
                    : q
                      ? e.push((0, r.jsx)(R, {}, "empty-state"))
                      : N
                        ? (e.push(...n.map((e) => d([e], !0))), e.push(...t.map((e) => d([e], !1))))
                        : s().each(A, (t) => {
                              0 !== Y[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          T,
                                          {
                                              group: t,
                                              isOpen: H[t],
                                              toggleOpenedState: () => {
                                                  let e = H[t];
                                                  z(t),
                                                      (0, O.RZ)({
                                                          section: t,
                                                          enabled: !e,
                                                          viewId: D,
                                                      });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  H[t] && e.push(...Y[t].map((e) => d(e, t === S.KZ.UNREAD))));
                          }),
                e
            );
        }, [t, n, a, H, z, Y, N, d, q, X, D]),
        J = Q[Q.length - 1],
        $ = i.isValidElement(J) && J.type === T,
        ee = (0, C.d)((e) => e.setInboxReadState);
    i.useEffect(() => {
        X || ee(0 === Y.UNREAD.length);
    }, [Y, X, ee]);
    let et = (t.length > 0 || n.length > 0) && null != l && U;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = i.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: o } = (0, v.Z)();
        i.useEffect(() => {
            t || r.current || (o(l), (r.current = !0));
        }, [o, l, t]);
    })({
        messagesByCategory: Y,
        loadingInitial: V,
    });
    let en = i.useCallback(() => {
        var e;
        let t = A.filter((e) => H[e]).reduce((e, t) => e + Y[t].length, 0),
            n = null == (e = L.current) ? void 0 : e.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t);
    }, [H, Y]);
    i.useEffect(() => {
        X || U || 0 >= en() || ((!$ || W) && (null == l || l(S.X.FILL_SCROLLER)));
    }, [en, l, X, U, $, W]);
    let er = i.useMemo(() => {
        let e = Math.min(Math.max(2, en()), 20);
        return (0, r.jsx)(E.Z, {
            withHeader: !1,
            size: e,
        });
    }, [en]);
    return (
        (0, O.vU)({
            notificationCenterVariant: G,
            entrypoint: k,
            messages: t,
            unreadMessages: n,
            messagesByCategory: Y,
            viewId: D,
        }),
        (0, r.jsx)("div", {
            className: o()(g, Z.messagesPopoutWrap),
            onClick: w,
            onDoubleClick: w,
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
                            p.Den,
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
                                    className: o()(Z.messagesPopout, h),
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
