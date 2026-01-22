n.d(t, {
    A: () => j,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n.n(s),
    c = n(397927),
    u = n(770178),
    d = n(954571),
    p = n(403362),
    f = n(449054),
    h = n(351022),
    A = n(282026),
    g = n(965660),
    m = n(19925),
    b = n(44440),
    _ = n(22862),
    E = n(416082),
    O = n(418616),
    y = n(599907),
    I = n(652215),
    v = n(683959);
let S = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202,
    }),
    C = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32,
    }),
    N = {
        page: I.liQ.GUILD_DISCOVERY,
        object: I.ZSU.CARD,
        section: I.JJy.DISCOVER_SEARCH,
    },
    T = o().throttle(f.Cf, 1e3, {
        leading: !1,
        trailing: !0,
    });

function j(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        {
            guildIds: o,
            loading: f,
            searchResultsQuery: I,
            loadMore: j,
            searchCategoryId: x,
        } = (0, m.I)({
            loadId: t,
        }),
        P = 0 === o.length && !f,
        w = i.useContext(d.AnalyticsContext),
        [L, R] = i.useState((0, g.YP)()),
        [D, M] = i.useState(!0),
        k = i.useRef(D),
        [U, G] = i.useState(3),
        V = i.useRef(U),
        B = i.useRef(null),
        H = i.useCallback(
            (e) => {
                null == e || P || f || (336 * (o.length / U) <= e.height && j());
            },
            [P, f, o.length, U, j],
        ),
        F = i.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let n = t.width;
                n < 1024 && k.current ? ((k.current = !1), M(!1)) : n > 1024 && !k.current && ((k.current = !0), M(!0));
                let r = 1;
                for (n -= 450 * !!D, n -= 280; n > 0; ) (n -= 264), (r += 1);
                r !== V.current && ((V.current = r), G(r)), H(t);
            },
            [D, H],
        ),
        Y = (0, u.w)(F, [D, H]);
    i.useEffect(() => {
        R((0, g.YP)());
    }, [I]),
        i.useEffect(() => {
            T({
                loadId: t,
                searchId: L,
                query: I,
                guildResults: o.map(h.A.getGuild).filter(p.Vq),
                analyticsContext: w,
                categoryId: x,
            });
        }, [w, o, t, x, L, I]);
    let K = i.useCallback((e) => n(e, x), [n, x]),
        z = i.useMemo(() => (f ? [o.length, 0] : [o.length]), [o.length, f]),
        W = i.useCallback(
            (e, n, i) => {
                switch (e) {
                    case 0:
                        return (0, r.jsxs)(
                            "div",
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16,
                                },
                                className: a()(v.R_, {
                                    [v.Ze]: !D,
                                }),
                                children: [
                                    !D &&
                                        (0, r.jsxs)("div", {
                                            className: v.eW,
                                            children: [
                                                (0, r.jsx)(_.A, {
                                                    loadId: t,
                                                }),
                                                (0, r.jsx)(O.A, {
                                                    loadId: t,
                                                }),
                                            ],
                                        }),
                                    P &&
                                        (0, r.jsx)(E.A, {
                                            loadId: t,
                                        }),
                                ],
                            },
                            i,
                        );
                    case 1:
                        return (0, r.jsx)(
                            c.y$y,
                            {
                                className: a()(v.u1, {
                                    [v.qx]: D,
                                }),
                            },
                            i,
                        );
                }
            },
            [P, D, t],
        ),
        q = i.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = D ? 16 : 50;
                        return P ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error("[getSectionHeight] Failed for section: ".concat(e));
                }
            },
            [P, D],
        ),
        Q = i.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return o[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error("[getItemKey] Failed for section: ".concat(e));
                }
            },
            [o],
        ),
        X = i.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error("[getItemHeight] Failed for section: ".concat(e));
            }
        }, []),
        Z = i.useCallback(
            async (e, t, n, r) => {
                var i, a;
                await l(e, t, n, r);
                let s = null == (a = B.current) || null == (i = a.getScrollerState()) ? void 0 : i.scrollTop;
                null != s &&
                    A.A.setState({
                        scrollPosition: s,
                    });
            },
            [l],
        ),
        J = i.useCallback(
            (e, t, n, i) => {
                if (0 !== e) return null;
                {
                    let e = o[t];
                    return (0, r.jsx)(
                        "div",
                        {
                            style: n,
                            children: (0, r.jsx)(y.Ay, {
                                guildId: e,
                                onClick: async (e) => await Z(e, t, x, N),
                                onView: (e) => K(e),
                            }),
                        },
                        i,
                    );
                }
            },
            [o, Z, K, x],
        );
    i.useEffect(() => {
        let e = B.current;
        return () => {
            var t;
            let n = null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollTop;
            null != n &&
                A.A.setState({
                    scrollPosition: n,
                });
        };
    }, []),
        i.useLayoutEffect(() => {
            let e = A.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    var t;
                    null == (t = B.current) ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                A.A.setState({
                                    scrollPosition: null,
                                });
                            },
                        });
                });
        }, []);
    let $ = i.useMemo(
            () =>
                (0, s.debounce)(
                    () => {
                        var e;
                        let t = null == (e = B.current) ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 240 && j();
                    },
                    100,
                    {
                        leading: !0,
                    },
                ),
            [j],
        ),
        ee = D ? S : C;
    return (0, r.jsx)("div", {
        className: v.kL,
        ref: Y,
        children: (0, r.jsx)(c.a0_, {
            ref: B,
            className: v.kf,
            sections: z,
            columns: U,
            itemGutter: 16,
            padding: ee,
            renderItem: J,
            renderSection: W,
            getSectionHeight: q,
            getItemKey: Q,
            getItemHeight: X,
            chunkSize: 24,
            onScroll: $,
            renderAccessory: (e) =>
                D
                    ? (0, r.jsx)("div", {
                          className: v.pz,
                          style: {
                              height: e,
                          },
                          children: (0, r.jsxs)("div", {
                              className: v.wp,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: v.jp,
                                      children: (0, r.jsx)(O.A, {
                                          loadId: t,
                                      }),
                                  }),
                                  (0, r.jsx)(b.A, {
                                      loadId: t,
                                  }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
