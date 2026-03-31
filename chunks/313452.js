n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(928039),
    A = n(793574),
    _ = n(688810),
    m = n(222823),
    g = n(203982),
    p = n(661191),
    f = n(851109),
    x = n(932883),
    E = n(39324),
    I = n(320697),
    C = n(394953),
    N = n(628325),
    T = n(524628),
    S = n(849077),
    b = n(652215),
    y = n(21786),
    v = n(985018),
    j = n(702440);
function R(e) {
    e.stopPropagation();
}
function O(e) {
    let { group: t, isOpen: n, toggleOpenedState: l } = e;
    return (0, i.jsx)(u.DUT, {
        "aria-expanded": n,
        onClick: l,
        className: a()(j.TP, { [j.yZ]: !n }),
        children: (0, i.jsxs)(u.BJc, {
            gap: 4,
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(u.Heading, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: j.P7,
                    children: (0, r.capitalize)(v.intl.string(S.v7[t]).toLowerCase()),
                }),
                (0, i.jsx)(u.abt, { size: "xxs", className: j.ai }),
            ],
        }),
    });
}
let L = [S.Ur.UNREAD, S.Ur.TODAY, S.Ur.YESTERDAY, S.Ur.OLDER];
function M() {
    let { analyticsLocations: e } = (0, _.Ay)(A.A.NOTIFICATIONS_INBOX);
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
                    onClick: () => (0, C.tZ)(e),
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
            unreadMessages: s,
            loadMore: r,
            renderLoadingState: A,
            renderMessageGroup: _,
            scrollerClassName: y,
            className: v,
            listName: D,
            ignoreGrouping: U = !1,
        } = e,
        G = (0, x.op)(),
        P = l.useRef(null),
        k = (0, h.A)(D, P),
        { entrypoint: w, notificationCenterVariant: B } = (0, f.X8)({ location: "NotificationsInboxSidebarList" }),
        {
            isLoading: V,
            isLoadingComplete: H,
            hasLoadedEver: F,
        } = (0, d.cf)([I.A], () => ({
            isLoading: I.A.isLoading,
            isLoadingComplete: I.A.isLoadingComplete,
            hasLoadedEver: I.A.hasLoadedEver,
        })),
        K = !F && V,
        { messageCategoryOpenStates: W, toggleOpenState: Y } = (0, E.A)(),
        z =
            ((t = (0, d.yK)([I.A], () => I.A.getNotifyingChannelIds() ?? [])),
            (0, d.bG)([I.A, m.Ay], () => {
                let e = I.A.getChannelInfoMap();
                for (let n of t) {
                    let t = e[n];
                    if ((null == t || t.loadState === S.Ve.UNLOADED) && m.Ay.hasUnread(n)) return !0;
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
            g._.subscribe(b.jej.SCROLL_PAGE_DOWN, t),
            g._.subscribe(b.jej.SCROLL_PAGE_UP, e),
            () => {
                g._.unsubscribe(b.jej.SCROLL_PAGE_DOWN, t), g._.unsubscribe(b.jej.SCROLL_PAGE_UP, e);
            }
        );
    }, []);
    let q = l.useCallback(() => {
            let e = P.current?.getScrollerState();
            if (null == e) return;
            let t = 0.5 * e.offsetHeight;
            e.scrollHeight - (e.scrollTop + e.offsetHeight) <= t && r?.(S.VA.USER_SCROLL);
        }, [r]),
        X = l.useMemo(() => {
            let e = { [S.Ur.UNREAD]: [], [S.Ur.TODAY]: [], [S.Ur.YESTERDAY]: [], [S.Ur.OLDER]: [] },
                t = { [S.Ur.UNREAD]: [], [S.Ur.TODAY]: [], [S.Ur.YESTERDAY]: [], [S.Ur.OLDER]: [] },
                i = { [S.Ur.UNREAD]: {}, [S.Ur.TODAY]: {}, [S.Ur.YESTERDAY]: {}, [S.Ur.OLDER]: {} };
            return (
                (n.length > 0 || s.length > 0) &&
                    (o().each(s, (e) => {
                        e.kind === S.yL.MENTION
                            ? t[S.Ur.UNREAD].push(e)
                            : e.channelId in i[S.Ur.UNREAD]
                              ? i[S.Ur.UNREAD][e.channelId].push(e)
                              : (i[S.Ur.UNREAD][e.channelId] = [e]);
                    }),
                    o().each(n, (e) => {
                        let n = (0, C.i7)(e);
                        e.kind === S.yL.MENTION
                            ? t[n].push(e)
                            : e.channelId in i[n]
                              ? i[n][e.channelId].push(e)
                              : (i[n][e.channelId] = [e]);
                    }),
                    o().each(L, (n) => {
                        [...Object.values(i[n]).map((e) => e.reverse()), ...t[n].map((e) => [e])]
                            .sort((e, t) => p.default.compare(t[0].id, e[0].id))
                            .forEach((t) => {
                                e[n].push(t);
                            });
                    })),
                e
            );
        }, [n, s]),
        J = 0 === n.length && 0 === s.length && H,
        Q = 0 === n.length && 0 === s.length && !F && V,
        $ = l.useMemo(() => {
            let e = [];
            return (
                Q
                    ? e.push(A())
                    : J
                      ? e.push((0, i.jsx)(M, {}, "empty-state"))
                      : U
                        ? (e.push(...s.map((e) => _([e], !0))), e.push(...n.map((e) => _([e], !1))))
                        : o().each(L, (t) => {
                              0 !== X[t].length &&
                                  (e.push(
                                      (0, i.jsx)(
                                          O,
                                          {
                                              group: t,
                                              isOpen: W[t],
                                              toggleOpenedState: () => {
                                                  let e = W[t];
                                                  Y(t), (0, x.Ut)({ section: t, enabled: !e, viewId: G });
                                              },
                                          },
                                          t,
                                      ),
                                  ),
                                  W[t] && e.push(...X[t].map((e) => _(e, t === S.Ur.UNREAD))));
                          }),
                e
            );
        }, [n, s, A, W, Y, X, U, _, J, Q, G]),
        Z = $[$.length - 1],
        ee = l.isValidElement(Z) && Z.type === O,
        et = (0, N.S)((e) => e.setInboxReadState);
    l.useEffect(() => {
        Q || et(0 === X.UNREAD.length);
    }, [X, Q, et]);
    let en = (n.length > 0 || s.length > 0) && null != r && V;
    !(function (e) {
        let { loadingInitial: t, messagesByCategory: n } = e,
            i = l.useRef(!1),
            s = n.UNREAD.length > 0,
            { setOpenStateFromUnreads: a } = (0, E.A)();
        l.useEffect(() => {
            t || i.current || (a(s), (i.current = !0));
        }, [a, s, t]);
    })({ messagesByCategory: X, loadingInitial: K });
    let ei = l.useCallback(() => {
        let e = L.filter((e) => W[e]).reduce((e, t) => e + X[t].length, 0),
            t = P.current?.getScrollerState();
        return null == t ? 0 : Math.max(0, Math.ceil(t.offsetHeight / 64) - e);
    }, [W, X]);
    l.useEffect(() => {
        Q || V || 0 >= ei() || ((!ee || z) && r?.(S.VA.FILL_SCROLLER));
    }, [ei, r, Q, V, ee, z]);
    let el = l.useMemo(() => {
        let e = Math.min(Math.max(2, ei()), 20);
        return (0, i.jsx)(T.A, { withHeader: !1, size: e });
    }, [ei]);
    return (
        (0, x.Hi)({
            notificationCenterVariant: B,
            entrypoint: w,
            messages: n,
            unreadMessages: s,
            messagesByCategory: X,
            viewId: G,
        }),
        (0, i.jsx)("div", {
            className: a()(v, j.KQ),
            onClick: R,
            onDoubleClick: R,
            "aria-label": e["aria-label"],
            children: (0, i.jsx)(c.hD, {
                navigator: k,
                children: (0, i.jsx)(c.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsxs)(u.T7Y, {
                            ref: (e) => {
                                (P.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            className: a()(j.m4, y),
                            onScroll: q,
                            fade: !0,
                            ...n,
                            children: [$, en && !ee ? el : null],
                        });
                    },
                }),
            }),
        })
    );
}
