n.d(t, { A: () => D }), n(321073), n(264879), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    f = n(928039),
    p = n(793574),
    h = n(688810),
    b = n(222823),
    g = n(203982),
    m = n(661191),
    A = n(851109),
    y = n(932883),
    O = n(39324),
    j = n(320697),
    v = n(394953),
    x = n(628325),
    E = n(524628),
    _ = n(849077),
    C = n(652215),
    S = n(228160),
    I = n(985018),
    N = n(128354);
function T(e) {
    e.stopPropagation();
}
function P(e) {
    let { group: t, isOpen: n, toggleOpenedState: l } = e;
    return (0, r.jsx)(d.DUT, {
        "aria-expanded": n,
        onClick: l,
        className: a()(N.TP, { [N.yZ]: !n }),
        children: (0, r.jsxs)(d.BJc, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: N.P7,
                    children: (0, s.capitalize)(I.intl.string(_.v7[t]).toLowerCase()),
                }),
                (0, r.jsx)(d.abt, {
                    size: "xxs",
                    className: N.ai,
                }),
            ],
        }),
    });
}
let w = [_.Ur.UNREAD, _.Ur.TODAY, _.Ur.YESTERDAY, _.Ur.OLDER];
function R() {
    let { analyticsLocations: e } = (0, h.Ay)(p.A.NOTIFICATIONS_INBOX);
    return (0, r.jsx)("div", {
        className: N.y7,
        children: (0, r.jsxs)(d.BJc, {
            gap: 24,
            align: "center",
            children: [
                (0, r.jsxs)(d.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(d.K$s, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: d.LU0.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: I.intl.string(S.default["O+racd"]),
                        }),
                    ],
                }),
                (0, r.jsx)(d.Button, {
                    variant: "secondary",
                    onClick: () => (0, v.tZ)(e),
                    text: I.intl.string(S.default.klSpfs),
                }),
            ],
        }),
    });
}
function D(e) {
    let t,
        {
            messages: n,
            unreadMessages: i,
            loadMore: s,
            renderLoadingState: p,
            renderMessageGroup: h,
            scrollerClassName: S,
            className: I,
            listName: D,
            ignoreGrouping: M = !1,
        } = e,
        L = (0, y.op)(),
        G = l.useRef(null),
        k = (0, f.A)(D, G),
        { entrypoint: U, notificationCenterVariant: V } = (0, A.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: F,
            isLoadingComplete: H,
            hasLoadedEver: B,
        } = (0, u.cf)([j.A], () => ({
            isLoading: j.A.isLoading,
            isLoadingComplete: j.A.isLoadingComplete,
            hasLoadedEver: j.A.hasLoadedEver,
        })),
        K = !B && F,
        { messageCategoryOpenStates: W, toggleOpenState: z } = (0, O.A)(),
        Y =
            ((t = (0, u.yK)([j.A], () => {
                var e;
                return null != (e = j.A.getNotifyingChannelIds()) ? e : [];
            })),
            (0, u.bG)([j.A, b.Ay], () => {
                let e = j.A.getChannelInfoMap();
                for (let r of t) {
                    var n;
                    let t = e[r];
                    if ((null == t || t.loadState === _.Ve.UNLOADED) && null != (n = b.Ay.hasUnread(r)) && n) return !0;
                }
                return !1;
            }, [t]));
    l.useEffect(() => {
        function e() {
            var e;
            null == (e = G.current) || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null == (e = G.current) || e.scrollPageDown({ animate: !0 });
        }
        return (
            g._.subscribe(C.jej.SCROLL_PAGE_DOWN, t),
            g._.subscribe(C.jej.SCROLL_PAGE_UP, e),
            () => {
                g._.unsubscribe(C.jej.SCROLL_PAGE_DOWN, t), g._.unsubscribe(C.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let q = l.useCallback(() => {
            var e;
            let t = null == (e = G.current) ? void 0 : e.getScrollerState();
            if (null == t) return;
            let n = 0.5 * t.offsetHeight;
            t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == s || s(_.VA.USER_SCROLL));
        }, [s]),
        X = l.useMemo(() => {
            let e = {
                    [_.Ur.UNREAD]: [],
                    [_.Ur.TODAY]: [],
                    [_.Ur.YESTERDAY]: [],
                    [_.Ur.OLDER]: [],
                },
                t = {
                    [_.Ur.UNREAD]: [],
                    [_.Ur.TODAY]: [],
                    [_.Ur.YESTERDAY]: [],
                    [_.Ur.OLDER]: [],
                },
                r = {
                    [_.Ur.UNREAD]: {},
                    [_.Ur.TODAY]: {},
                    [_.Ur.YESTERDAY]: {},
                    [_.Ur.OLDER]: {},
                };
            return (
                (n.length > 0 || i.length > 0) &&
                    (o().each(i, (e) => {
                        e.kind === _.yL.MENTION
                            ? t[_.Ur.UNREAD].push(e)
                            : e.channelId in r[_.Ur.UNREAD]
                              ? r[_.Ur.UNREAD][e.channelId].push(e)
                              : (r[_.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    o().each(n, (e) => {
                        let n = (0, v.i7)(e);
                        e.kind === _.yL.MENTION
                            ? t[n].push(e)
                            : e.channelId in r[n]
                              ? r[n][e.channelId].push(e)
                              : (r[n][e.channelId] = [e]);
                    }),
                    o().each(w, (n) => {
                        [...Object.values(r[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => m.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, i]),
        J = 0 === n.length && 0 === i.length && H,
        Q = 0 === n.length && 0 === i.length && !B && F,
        Z = l.useMemo(() => {
            let e = [];
            return (
                Q
                    ? e.push(p())
                    : J
                      ? e.push((0, r.jsx)(R, {}, "empty-state"))
                      : M
                        ? (e.push(...i.map((e) => h([e], !0))), e.push(...n.map((e) => h([e], !1))))
                        : o().each(w, (t) => {
                              0 !== X[t].length &&
                                  (e.push(
                                      (0, r.jsx)(
                                          P,
                                          {
                                              group: t,
                                              isOpen: W[t],
                                              toggleOpenedState: () => {
                                                  let e = W[t];
                                                  z(t),
                                                      (0, y.Ut)({
                                                          section: t,
                                                          enabled: !e,
                                                          viewId: L,
                                                      });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  W[t] && e.push(...X[t].map((e) => h(e, t === _.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, i, p, W, z, X, M, h, J, Q, L]),
        $ = Z[Z.length - 1],
        ee = l.isValidElement($) && $.type === P,
        et = (0, x.S)((e) => e.setInboxReadState);
    l.useEffect(() => {
        Q || et(0 === X.UNREAD.length);
    }, [X, Q, et]);
    let en = (n.length > 0 || i.length > 0) && null != s && F;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            r = l.useRef(!1),
            i = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: a } = (0, O.A)();
        l.useEffect(() => {
            t || r.current || (a(i), (r.current = !0));
        }, [a, i, t]);
    })({
        messagesByCategory: X,
        loadingInitial: K,
    });
    let er = l.useCallback(() => {
        var e;
        let t = w.filter((e) => W[e]).reduce((e, t) => e + X[t].length, 0),
            n = null == (e = G.current) ? void 0 : e.getScrollerState();
        return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t);
    }, [W, X]);
    l.useEffect(() => {
        Q || F || 0 >= er() || ((!ee || Y) && (null == s || s(_.VA.FILL_SCROLLER)));
    }, [er, s, Q, F, ee, Y]);
    let el = l.useMemo(() => {
        let e = Math.min(Math.max(2, er()), 20);
        return (0, r.jsx)(E.A, {
            withHeader: !1,
            size: e,
        });
    }, [er]);
    return (
        (0, y.Hi)({
            notificationCenterVariant: V,
            entrypoint: U,
            messages: n,
            unreadMessages: i,
            messagesByCategory: X,
            viewId: L,
        }),
        (0, r.jsx)("div", {
            className: a()(I, N.KQ),
            onClick: T,
            onDoubleClick: T,
            "aria-label": e["aria-label"],
            children: (0, r.jsx)(c.hD, {
                navigator: k,
                children: (0, r.jsx)(c.PR, {
                    children: (e) => {
                        var t, n;
                        let { ref: l } = e,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l,
                                    i = {};
                                if ("u" > typeof Reflect && Reflect.ownKeys) {
                                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                        (r = n[l]),
                                            !(t.indexOf(r) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                (i[r] = e[r]);
                                    return i;
                                }
                                if (
                                    ((i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            l = {},
                                            i = Object.getOwnPropertyNames(e);
                                        for (r = 0; r < i.length; r++)
                                            (n = i[r]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (l[n] = e[n]);
                                        return l;
                                    })(e, t)),
                                    Object.getOwnPropertySymbols)
                                )
                                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                        (r = n[l]),
                                            !(t.indexOf(r) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                (i[r] = e[r]);
                                return i;
                            })(e, ["ref"]);
                        return (0, r.jsxs)(
                            d.T7Y,
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
                                        (G.current = e),
                                            (l.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    className: a()(N.m4, S),
                                    onScroll: q,
                                    fade: !0,
                                },
                                i,
                            )),
                            (n = n =
                                {
                                    children: [Z, en && !ee ? el : null],
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
