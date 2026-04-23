n.d(t, { A: () => H }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(837381),
    c = n(311907),
    u = n(939249),
    h = n(331322),
    A = n(534514),
    _ = n(847374),
    m = n(912592),
    g = n(827734),
    p = n(834730),
    f = n(821609),
    E = n(599319),
    x = n(928039),
    I = n(793574),
    C = n(688810),
    b = n(222823),
    N = n(203982),
    S = n(661191),
    v = n(851109),
    T = n(932883),
    y = n(816943),
    j = n(320697),
    R = n(394953),
    L = n(628325),
    O = n(524628),
    G = n(849077),
    D = n(652215),
    M = n(756195),
    U = n(985018),
    P = n(645875);
function w(e) {
    e.stopPropagation();
}
function k(e) {
    let { group: t, isOpen: n, toggleOpenedState: l } = e;
    return (0, i.jsx)(u.D, {
        "aria-expanded": n,
        onClick: l,
        className: a()(P.TP, { [P.yZ]: !n }),
        children: (0, i.jsxs)(h.B, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(A.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: P.P7,
                    children: (0, r.capitalize)(U.intl.string(G.v7[t]).toLowerCase()),
                }),
                (0, i.jsx)(_.a, { size: "xxs", className: P.ai }),
            ],
        }),
    });
}
let V = [G.Ur.UNREAD, G.Ur.TODAY, G.Ur.YESTERDAY, G.Ur.OLDER];
function B() {
    let { analyticsLocations: e } = (0, C.Ay)(I.A.NOTIFICATIONS_INBOX);
    return (0, i.jsx)("div", {
        className: P.y7,
        children: (0, i.jsxs)(h.B, {
            gap: 24,
            align: "center",
            children: [
                (0, i.jsxs)(h.B, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, i.jsx)(m.K, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: g.A.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, i.jsx)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: U.intl.string(M.default["O+racd"]),
                        }),
                    ],
                }),
                (0, i.jsx)(f.$, {
                    variant: "secondary",
                    onClick: () => (0, R.tZ)(e),
                    text: U.intl.string(M.default.klSpfs),
                }),
            ],
        }),
    });
}
function H(e) {
    let t,
        {
            messages: n,
            unreadMessages: s,
            loadMore: r,
            renderLoadingState: u,
            renderMessageGroup: h,
            scrollerClassName: A,
            className: _,
            listName: m,
            ignoreGrouping: g = !1,
        } = e,
        p = (0, T.op)(),
        f = l.useRef(null),
        I = (0, x.A)(m, f),
        { entrypoint: C, notificationCenterVariant: M } = (0, v.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: U,
            isLoadingComplete: H,
            hasLoadedEver: F,
        } = (0, c.cf)([j.A], () => ({
            isLoading: j.A.isLoading,
            isLoadingComplete: j.A.isLoadingComplete,
            hasLoadedEver: j.A.hasLoadedEver,
        })),
        W = !F && U,
        { messageCategoryOpenStates: Y, toggleOpenState: K } = (0, y.A)(),
        z =
            ((t = (0, c.yK)([j.A], () => j.A.getNotifyingChannelIds() ?? [])),
            (0, c.bG)([j.A, b.Ay], () => {
                let e = j.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === G.Ve.UNLOADED) && b.Ay.hasUnread(n)) return !0;
                }
                return !1;
            }, [t]));
    l.useEffect(() => {
        function e() {
            f.current?.scrollPageUp({ animate: !0 });
        }
        function t() {
            f.current?.scrollPageDown({ animate: !0 });
        }
        return (
            N._.subscribe(D.jej.SCROLL_PAGE_DOWN, t),
            N._.subscribe(D.jej.SCROLL_PAGE_UP, e),
            () => {
                N._.unsubscribe(D.jej.SCROLL_PAGE_DOWN, t), N._.unsubscribe(D.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let q = l.useCallback(() => {
            let e = f.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && r?.(G.VA.USER_SCROLL);
        }, [r]),
        X = l.useMemo(() => {
            let e = { [G.Ur.UNREAD]: [], [G.Ur.TODAY]: [], [G.Ur.YESTERDAY]: [], [G.Ur.OLDER]: [] },
                t = { [G.Ur.UNREAD]: [], [G.Ur.TODAY]: [], [G.Ur.YESTERDAY]: [], [G.Ur.OLDER]: [] },
                i = { [G.Ur.UNREAD]: {}, [G.Ur.TODAY]: {}, [G.Ur.YESTERDAY]: {}, [G.Ur.OLDER]: {} };
            return (
                (n.length > 0 || s.length > 0) &&
                    (o().each(s, (e) => {
                        e.kind === G.yL.MENTION
                            ? t[G.Ur.UNREAD].push(e)
                            : e.channelId in i[G.Ur.UNREAD]
                              ? i[G.Ur.UNREAD][e.channelId].push(e)
                              : (i[G.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    o().each(n, (e) => {
                        let n = (0, R.i7)(e);
                        e.kind === G.yL.MENTION
                            ? t[n].push(e)
                            : e.channelId in i[n]
                              ? i[n][e.channelId].push(e)
                              : (i[n][e.channelId] = [e]);
                    }),
                    o().each(V, (n) => {
                        [...Object.values(i[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => S.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, s]),
        Q = 0 === n.length && 0 === s.length && H,
        J = 0 === n.length && 0 === s.length && !F && U,
        Z = l.useMemo(() => {
            let e = [];
            return (
                J
                    ? e.push(u())
                    : Q
                      ? e.push((0, i.jsx)(B, {}, "empty-state"))
                      : g
                        ? (e.push(...s.map((e) => h([e], !0))), e.push(...n.map((e) => h([e], !1))))
                        : o().each(V, (t) => {
                              0 !== X[t].length &&
                                  (e.push(
                                      (0, i.jsx)(
                                          k,
                                          {
                                              group: t,
                                              isOpen: Y[t],
                                              toggleOpenedState: () => {
                                                  let e = Y[t];
                                                  K(t), (0, T.Ut)({ section: t, enabled: !e, viewId: p });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  Y[t] && e.push(...X[t].map((e) => h(e, t === G.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, s, u, Y, K, X, g, h, Q, J, p]),
        $ = Z[Z.length - 1],
        ee = l.isValidElement($) && $.type === k,
        et = (0, L.S)((e) => e.setInboxReadState);
    l.useEffect(() => {
        J || et(0 === X.UNREAD.length);
    }, [X, J, et]);
    let en = (n.length > 0 || s.length > 0) && null != r && U;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            i = l.useRef(!1),
            s = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: a } = (0, y.A)();
        l.useEffect(() => {
            t || i.current || (a(s), (i.current = !0));
        }, [a, s, t]);
    })({ messagesByCategory: X, loadingInitial: W });
    let ei = l.useCallback(() => {
        let e = V.filter((e) => Y[e]).reduce((e, t) => e + X[t].length, 0),
            t = f.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [Y, X]);
    l.useEffect(() => {
        J || U || 0 >= ei() || ((!ee || z) && r?.(G.VA.FILL_SCROLLER));
    }, [ei, r, J, U, ee, z]);
    let el = l.useMemo(() => {
        let e = Math.min(Math.max(2, ei()), 20);
        return (0, i.jsx)(O.A, { withHeader: !1, size: e });
    }, [ei]);
    return (
        (0, T.Hi)({
            notificationCenterVariant: M,
            entrypoint: C,
            messages: n,
            unreadMessages: s,
            messagesByCategory: X,
            viewId: p,
        }),
        (0, i.jsx)("div", {
            className: a()(_, P.KQ),
            onClick: w,
            onDoubleClick: w,
            "aria-label": e["aria-label"],
            children: (0, i.jsx)(d.hD, {
                navigator: I,
                children: (0, i.jsx)(d.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsxs)(E.Ch, {
                            ref: (e) => {
                                (f.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            className: a()(P.m4, A),
                            onScroll: q,
                            fade: !0,
                            ...n,
                            children: [Z, en && !ee ? el : null],
                        });
                    },
                }),
            }),
        })
    );
}
