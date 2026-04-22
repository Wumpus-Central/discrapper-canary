a.d(t, { A: () => T });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(735438),
    c = a.n(n),
    o = a(289873),
    d = a(42286),
    u = a(770178),
    h = a(954571),
    g = a(403362),
    A = a(449054),
    _ = a(351022),
    m = a(282026),
    C = a(965660),
    f = a(19925),
    y = a(44440),
    I = a(22862),
    S = a(416082),
    E = a(418616),
    b = a(599907),
    p = a(652215),
    x = a(284402);
let R = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    j = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    D = { page: p.liQ.GUILD_DISCOVERY, object: p.ZSU.CARD, section: p.JJy.DISCOVER_SEARCH },
    v = c().throttle(A.Cf, 1e3, { leading: !1, trailing: !0 });
function T(e) {
    let { loadId: t, onGuildCardSeen: a, onGuildCardClick: r } = e,
        { guildIds: c, loading: A, searchResultsQuery: p, loadMore: T, searchCategoryId: G } = (0, f.I)({ loadId: t }),
        L = 0 === c.length && !A,
        N = l.useContext(h.AnalyticsContext),
        [U, k] = l.useState((0, C.YP)()),
        [F, O] = l.useState(!0),
        w = l.useRef(F),
        [V, M] = l.useState(3),
        Y = l.useRef(V),
        q = l.useRef(null),
        H = l.useCallback(
            (e) => {
                null == e || L || A || (336 * (c.length / V) <= e.height && T());
            },
            [L, A, c.length, V, T],
        ),
        P = l.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let a = t.width;
                a < 1024 && w.current ? ((w.current = !1), O(!1)) : a > 1024 && !w.current && ((w.current = !0), O(!0));
                let s = 1;
                for (a -= 450 * !!F, a -= 280; a > 0; ) (a -= 264), (s += 1);
                s !== Y.current && ((Y.current = s), M(s)), H(t);
            },
            [F, H],
        ),
        Q = (0, u.w)(P, [F, H]);
    l.useEffect(() => {
        k((0, C.YP)());
    }, [p]),
        l.useEffect(() => {
            v({
                loadId: t,
                searchId: U,
                query: p,
                guildResults: c.map(_.A.getGuild).filter(g.Vq),
                analyticsContext: N,
                categoryId: G,
            });
        }, [N, c, t, G, U, p]);
    let B = l.useCallback((e) => a(e, G), [a, G]),
        z = l.useMemo(() => (A ? [c.length, 0] : [c.length]), [c.length, A]),
        K = l.useCallback(
            (e, a, l) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: a.left, width: a.width - 16 },
                                className: i()(x.R_, { [x.Ze]: !F }),
                                children: [
                                    !F &&
                                        (0, s.jsxs)("div", {
                                            className: x.eW,
                                            children: [(0, s.jsx)(I.A, { loadId: t }), (0, s.jsx)(E.A, { loadId: t })],
                                        }),
                                    L && (0, s.jsx)(S.A, { loadId: t }),
                                ],
                            },
                            l,
                        );
                    case 1:
                        return (0, s.jsx)(o.y, { className: i()(x.u1, { [x.qx]: F }) }, l);
                }
            },
            [L, F, t],
        ),
        W = l.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = F ? 16 : 68;
                        return L ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [L, F],
        ),
        Z = l.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return c[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error(`[getItemKey] Failed for section: ${e}`);
                }
            },
            [c],
        ),
        X = l.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        J = l.useCallback(
            async (e, t, a, s) => {
                await r(e, t, a, s);
                let l = q.current?.getScrollerState()?.scrollTop;
                null != l && m.A.setState({ scrollPosition: l });
            },
            [r],
        ),
        $ = l.useCallback(
            (e, t, a, l) => {
                if (0 !== e) return null;
                {
                    let e = c[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: a,
                            children: (0, s.jsx)(b.Ay, {
                                guildId: e,
                                onClick: async (e) => await J(e, t, G, D),
                                onView: (e) => B(e),
                            }),
                        },
                        l,
                    );
                }
            },
            [c, J, B, G],
        );
    l.useEffect(() => {
        let e = q.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && m.A.setState({ scrollPosition: t });
        };
    }, []),
        l.useLayoutEffect(() => {
            let e = m.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    q.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            m.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []);
    let ee = l.useMemo(
            () =>
                (0, n.debounce)(
                    () => {
                        let e = q.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && T();
                    },
                    100,
                    { leading: !0 },
                ),
            [T],
        ),
        et = F ? R : j;
    return (0, s.jsx)("div", {
        className: x.kL,
        ref: Q,
        children: (0, s.jsx)(d.f, {
            ref: q,
            className: x.kf,
            sections: z,
            columns: V,
            itemGutter: 16,
            padding: et,
            renderItem: $,
            renderSection: K,
            getSectionHeight: W,
            getItemKey: Z,
            getItemHeight: X,
            chunkSize: 24,
            onScroll: ee,
            renderAccessory: (e) =>
                F
                    ? (0, s.jsx)("div", {
                          className: x.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: x.wp,
                              children: [
                                  (0, s.jsx)("div", { className: x.jp, children: (0, s.jsx)(E.A, { loadId: t }) }),
                                  (0, s.jsx)(y.A, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
