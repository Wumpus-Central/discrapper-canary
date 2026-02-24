"use strict";
n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(928039),
    A = n(793574),
    p = n(688810),
    g = n(222823),
    m = n(203982),
    _ = n(661191),
    f = n(851109),
    x = n(932883),
    C = n(39324),
    E = n(320697),
    I = n(394953),
    N = n(628325),
    b = n(524628),
    S = n(849077),
    T = n(652215),
    y = n(21786),
    v = n(985018),
    j = n(19e3);
function R(e) {
    e.stopPropagation();
}
function O(e) {
    let { group: t, isOpen: n, toggleOpenedState: s } = e;
    return (0, i.jsx)(u.DUT, {
        "aria-expanded": n,
        onClick: s,
        className: r()(j.TP, { [j.yZ]: !n }),
        children: (0, i.jsxs)(u.BJc, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(u.Heading, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: j.P7,
                    children: (0, a.capitalize)(v.intl.string(S.v7[t]).toLowerCase()),
                }),
                (0, i.jsx)(u.abt, { size: "xxs", className: j.ai }),
            ],
        }),
    });
}
let L = [S.Ur.UNREAD, S.Ur.TODAY, S.Ur.YESTERDAY, S.Ur.OLDER];
function M() {
    let { analyticsLocations: e } = (0, p.Ay)(A.A.NOTIFICATIONS_INBOX);
    return (0, i.jsx)("div", {
        className: j.y7,
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
                            children: v.intl.string(y.default["O+racd"]),
                        }),
                    ],
                }),
                (0, i.jsx)(u.Button, {
                    variant: "secondary",
                    onClick: () => (0, I.tZ)(e),
                    text: v.intl.string(y.default.klSpfs),
                }),
            ],
        }),
    });
}
function D(e) {
    let t,
        {
            messages: n,
            unreadMessages: l,
            loadMore: a,
            renderLoadingState: A,
            renderMessageGroup: p,
            scrollerClassName: y,
            className: v,
            listName: D,
            ignoreGrouping: G = !1,
        } = e,
        U = (0, x.op)(),
        P = s.useRef(null),
        w = (0, h.A)(D, P),
        { entrypoint: k, notificationCenterVariant: V } = (0, f.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: B,
            isLoadingComplete: H,
            hasLoadedEver: F,
        } = (0, d.cf)([E.A], () => ({
            isLoading: E.A.isLoading,
            isLoadingComplete: E.A.isLoadingComplete,
            hasLoadedEver: E.A.hasLoadedEver,
        })),
        K = !F && B,
        { messageCategoryOpenStates: W, toggleOpenState: Y } = (0, C.A)(),
        z =
            ((t = (0, d.yK)([E.A], () => E.A.getNotifyingChannelIds() ?? [])),
            (0, d.bG)([E.A, g.Ay], () => {
                let e = E.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === S.Ve.UNLOADED) && g.Ay.hasUnread(n)) return !0;
                }
                return !1;
            }, [t]));
    s.useEffect(() => {
        function e() {
            P.current?.scrollPageUp({ animate: !0 });
        }
        function t() {
            P.current?.scrollPageDown({ animate: !0 });
        }
        return (
            m._.subscribe(T.jej.SCROLL_PAGE_DOWN, t),
            m._.subscribe(T.jej.SCROLL_PAGE_UP, e),
            () => {
                m._.unsubscribe(T.jej.SCROLL_PAGE_DOWN, t), m._.unsubscribe(T.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let X = s.useCallback(() => {
            let e = P.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && a?.(S.VA.USER_SCROLL);
        }, [a]),
        q = s.useMemo(() => {
            let e = { [S.Ur.UNREAD]: [], [S.Ur.TODAY]: [], [S.Ur.YESTERDAY]: [], [S.Ur.OLDER]: [] },
                t = { [S.Ur.UNREAD]: [], [S.Ur.TODAY]: [], [S.Ur.YESTERDAY]: [], [S.Ur.OLDER]: [] },
                i = { [S.Ur.UNREAD]: {}, [S.Ur.TODAY]: {}, [S.Ur.YESTERDAY]: {}, [S.Ur.OLDER]: {} };
            return (
                (n.length > 0 || l.length > 0) &&
                    (o().each(l, (e) => {
                        e.kind === S.yL.MENTION
                            ? t[S.Ur.UNREAD].push(e)
                            : e.channelId in i[S.Ur.UNREAD]
                              ? i[S.Ur.UNREAD][e.channelId].push(e)
                              : (i[S.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    o().each(n, (e) => {
                        let n = (0, I.i7)(e);
                        e.kind === S.yL.MENTION
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
        }, [n, l]),
        J = 0 === n.length && 0 === l.length && H,
        Q = 0 === n.length && 0 === l.length && !F && B,
        $ = s.useMemo(() => {
            let e = [];
            return (
                Q
                    ? e.push(A())
                    : J
                      ? e.push((0, i.jsx)(M, {}, "empty-state"))
                      : G
                        ? (e.push(...l.map((e) => p([e], !0))), e.push(...n.map((e) => p([e], !1))))
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
                                                  Y(t), (0, x.Ut)({ section: t, enabled: !e, viewId: U });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  W[t] && e.push(...q[t].map((e) => p(e, t === S.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, l, A, W, Y, q, G, p, J, Q, U]),
        Z = $[$.length - 1],
        ee = s.isValidElement(Z) && Z.type === O,
        et = (0, N.S)((e) => e.setInboxReadState);
    s.useEffect(() => {
        Q || et(0 === q.UNREAD.length);
    }, [q, Q, et]);
    let en = (n.length > 0 || l.length > 0) && null != a && B;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            i = s.useRef(!1),
            l = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: r } = (0, C.A)();
        s.useEffect(() => {
            t || i.current || (r(l), (i.current = !0));
        }, [r, l, t]);
    })({ messagesByCategory: q, loadingInitial: K });
    let ei = s.useCallback(() => {
        let e = L.filter((e) => W[e]).reduce((e, t) => e + q[t].length, 0),
            t = P.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [W, q]);
    s.useEffect(() => {
        Q || B || 0 >= ei() || ((!ee || z) && a?.(S.VA.FILL_SCROLLER));
    }, [ei, a, Q, B, ee, z]);
    let es = s.useMemo(() => {
        let e = Math.min(Math.max(2, ei()), 20);
        return (0, i.jsx)(b.A, { withHeader: !1, size: e });
    }, [ei]);
    return (
        (0, x.Hi)({
            notificationCenterVariant: V,
            entrypoint: k,
            messages: n,
            unreadMessages: l,
            messagesByCategory: q,
            viewId: U,
        }),
        (0, i.jsx)("div", {
            className: r()(v, j.KQ),
            onClick: R,
            onDoubleClick: R,
            "aria-label": e["aria-label"],
            children: (0, i.jsx)(c.hD, {
                navigator: w,
                children: (0, i.jsx)(c.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsxs)(u.T7Y, {
                            ref: (e) => {
                                (P.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            className: r()(j.m4, y),
                            onScroll: X,
                            fade: !0,
                            ...n,
                            children: [$, en && !ee ? es : null],
                        });
                    },
                }),
            }),
        })
    );
}
