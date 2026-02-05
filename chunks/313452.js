n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(837381),
    c = n(311907),
    u = n(397927),
    h = n(928039),
    A = n(793574),
    g = n(688810),
    m = n(222823),
    p = n(203982),
    _ = n(661191),
    x = n(851109),
    f = n(932883),
    E = n(39324),
    C = n(320697),
    I = n(394953),
    S = n(628325),
    b = n(524628),
    N = n(849077),
    T = n(652215),
    j = n(228160),
    v = n(985018),
    y = n(128354);
function R(e) {
    e.stopPropagation();
}
function O(e) {
    let { group: t, isOpen: n, toggleOpenedState: l } = e;
    return (0, i.jsx)(u.DUT, {
        "aria-expanded": n,
        onClick: l,
        className: a()(y.TP, { [y.yZ]: !n }),
        children: (0, i.jsxs)(u.BJc, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(u.Heading, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: y.P7,
                    children: (0, r.capitalize)(v.intl.string(N.v7[t]).toLowerCase()),
                }),
                (0, i.jsx)(u.abt, { size: "xxs", className: y.ai }),
            ],
        }),
    });
}
let L = [N.Ur.UNREAD, N.Ur.TODAY, N.Ur.YESTERDAY, N.Ur.OLDER];
function D() {
    let { analyticsLocations: e } = (0, g.Ay)(A.A.NOTIFICATIONS_INBOX);
    return (0, i.jsx)("div", {
        className: y.y7,
        children: (0, i.jsxs)(u.BJc, {
            gap: 24,
            align: "center",
            children: [
                (0, i.jsxs)(u.BJc, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, i.jsx)(u.K$s, {
                            size: "custom",
                            height: 40,
                            width: 40,
                            color: u.LU0.colors.BACKGROUND_MOD_STRONG,
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            style: { textAlign: "center" },
                            children: v.intl.string(j.default["O+racd"]),
                        }),
                    ],
                }),
                (0, i.jsx)(u.Button, {
                    variant: "secondary",
                    onClick: () => (0, I.tZ)(e),
                    text: v.intl.string(j.default.klSpfs),
                }),
            ],
        }),
    });
}
function M(e) {
    let t,
        {
            messages: n,
            unreadMessages: s,
            loadMore: r,
            renderLoadingState: A,
            renderMessageGroup: g,
            scrollerClassName: j,
            className: v,
            listName: M,
            ignoreGrouping: G = !1,
        } = e,
        U = (0, f.op)(),
        P = l.useRef(null),
        k = (0, h.A)(M, P),
        { entrypoint: w, notificationCenterVariant: V } = (0, x.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: B,
            isLoadingComplete: H,
            hasLoadedEver: F,
        } = (0, c.cf)([C.A], () => ({
            isLoading: C.A.isLoading,
            isLoadingComplete: C.A.isLoadingComplete,
            hasLoadedEver: C.A.hasLoadedEver,
        })),
        Y = !F && B,
        { messageCategoryOpenStates: W, toggleOpenState: K } = (0, E.A)(),
        z =
            ((t = (0, c.yK)([C.A], () => C.A.getNotifyingChannelIds() ?? [])),
            (0, c.bG)([C.A, m.Ay], () => {
                let e = C.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === N.Ve.UNLOADED) && m.Ay.hasUnread(n)) return !0;
                }
                return !1;
            }, [t]));
    l.useEffect(() => {
        function e() {
            P.current?.scrollPageUp({ animate: !0 });
        }
        function t() {
            P.current?.scrollPageDown({ animate: !0 });
        }
        return (
            p._.subscribe(T.jej.SCROLL_PAGE_DOWN, t),
            p._.subscribe(T.jej.SCROLL_PAGE_UP, e),
            () => {
                p._.unsubscribe(T.jej.SCROLL_PAGE_DOWN, t), p._.unsubscribe(T.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let X = l.useCallback(() => {
            let e = P.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && r?.(N.VA.USER_SCROLL);
        }, [r]),
        q = l.useMemo(() => {
            let e = { [N.Ur.UNREAD]: [], [N.Ur.TODAY]: [], [N.Ur.YESTERDAY]: [], [N.Ur.OLDER]: [] },
                t = { [N.Ur.UNREAD]: [], [N.Ur.TODAY]: [], [N.Ur.YESTERDAY]: [], [N.Ur.OLDER]: [] },
                i = { [N.Ur.UNREAD]: {}, [N.Ur.TODAY]: {}, [N.Ur.YESTERDAY]: {}, [N.Ur.OLDER]: {} };
            return (
                (n.length > 0 || s.length > 0) &&
                    (o().each(s, (e) => {
                        e.kind === N.yL.MENTION
                            ? t[N.Ur.UNREAD].push(e)
                            : e.channelId in i[N.Ur.UNREAD]
                              ? i[N.Ur.UNREAD][e.channelId].push(e)
                              : (i[N.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    o().each(n, (e) => {
                        let n = (0, I.i7)(e);
                        e.kind === N.yL.MENTION
                            ? t[n].push(e)
                            : e.channelId in i[n]
                              ? i[n][e.channelId].push(e)
                              : (i[n][e.channelId] = [e]);
                    }),
                    o().each(L, (n) => {
                        [...Object.values(i[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => _.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, s]),
        J = 0 === n.length && 0 === s.length && H,
        Q = 0 === n.length && 0 === s.length && !F && B,
        Z = l.useMemo(() => {
            let e = [];
            return (
                Q
                    ? e.push(A())
                    : J
                      ? e.push((0, i.jsx)(D, {}, "empty-state"))
                      : G
                        ? (e.push(...s.map((e) => g([e], !0))), e.push(...n.map((e) => g([e], !1))))
                        : o().each(L, (t) => {
                              0 !== q[t].length &&
                                  (e.push(
                                      (0, i.jsx)(
                                          O,
                                          {
                                              group: t,
                                              isOpen: W[t],
                                              toggleOpenedState: () => {
                                                  let e = W[t];
                                                  K(t), (0, f.Ut)({ section: t, enabled: !e, viewId: U });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  W[t] && e.push(...q[t].map((e) => g(e, t === N.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, s, A, W, K, q, G, g, J, Q, U]),
        $ = Z[Z.length - 1],
        ee = l.isValidElement($) && $.type === O,
        et = (0, S.S)((e) => e.setInboxReadState);
    l.useEffect(() => {
        Q || et(0 === q.UNREAD.length);
    }, [q, Q, et]);
    let en = (n.length > 0 || s.length > 0) && null != r && B;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            i = l.useRef(!1),
            s = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: a } = (0, E.A)();
        l.useEffect(() => {
            t || i.current || (a(s), (i.current = !0));
        }, [a, s, t]);
    })({ messagesByCategory: q, loadingInitial: Y });
    let ei = l.useCallback(() => {
        let e = L.filter((e) => W[e]).reduce((e, t) => e + q[t].length, 0),
            t = P.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [W, q]);
    l.useEffect(() => {
        Q || B || 0 >= ei() || ((!ee || z) && r?.(N.VA.FILL_SCROLLER));
    }, [ei, r, Q, B, ee, z]);
    let el = l.useMemo(() => {
        let e = Math.min(Math.max(2, ei()), 20);
        return (0, i.jsx)(b.A, { withHeader: !1, size: e });
    }, [ei]);
    return (
        (0, f.Hi)({
            notificationCenterVariant: V,
            entrypoint: w,
            messages: n,
            unreadMessages: s,
            messagesByCategory: q,
            viewId: U,
        }),
        (0, i.jsx)("div", {
            className: a()(v, y.KQ),
            onClick: R,
            onDoubleClick: R,
            "aria-label": e["aria-label"],
            children: (0, i.jsx)(d.hD, {
                navigator: k,
                children: (0, i.jsx)(d.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsxs)(u.T7Y, {
                            ref: (e) => {
                                (P.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            className: a()(y.m4, j),
                            onScroll: X,
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
