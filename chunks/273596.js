n.d(t, { Z: () => j }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(481060),
    u = n(393903),
    d = n(626135),
    p = n(823379),
    f = n(900849),
    h = n(356164),
    g = n(164991),
    m = n(726115),
    b = n(28494),
    _ = n(746728),
    E = n(140700),
    O = n(665807),
    v = n(188493),
    y = n(294330),
    I = n(981631),
    C = n(857847);
let S = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202,
    }),
    N = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32,
    }),
    T = {
        page: I.ZY5.GUILD_DISCOVERY,
        object: I.qAy.CARD,
        section: I.jXE.DISCOVER_SEARCH,
    },
    P = s().throttle(f.c6, 1000, {
        leading: !1,
        trailing: !0,
    });
function j(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: s, loading: f, searchResultsQuery: I, loadMore: j, searchCategoryId: x } = (0, b.f)({ loadId: t }),
        A = 0 === s.length && !f,
        Z = i.useContext(d.AnalyticsContext),
        [w, L] = i.useState((0, m.PM)()),
        [R, D] = i.useState(!0),
        M = i.useRef(R),
        [k, U] = i.useState(3),
        G = i.useRef(k),
        B = i.useRef(null),
        H = i.useCallback(
            (e) => {
                if (null != e && !A && !f) 336 * (s.length / k) <= e.height && j();
            },
            [A, f, s.length, k, j],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let n = t.width;
                n < 1024 && M.current ? ((M.current = !1), D(!1)) : n > 1024 && !M.current && ((M.current = !0), D(!0));
                let r = 1;
                for (n -= 450 * !!R, n -= 280; n > 0; ) (n -= 264), (r += 1);
                r !== G.current && ((G.current = r), U(r)), H(t);
            },
            [R, H],
        ),
        F = (0, u.y)(V, [R, H]);
    i.useEffect(() => {
        L((0, m.PM)());
    }, [I]),
        i.useEffect(() => {
            P({
                loadId: t,
                searchId: w,
                query: I,
                guildResults: s.map(h.Z.getGuild).filter(p.lm),
                analyticsContext: Z,
                categoryId: x,
            });
        }, [Z, s, t, x, w, I]);
    let z = i.useCallback((e) => n(e, x), [n, x]),
        W = i.useMemo(() => (f ? [s.length, 0] : [s.length]), [s.length, f]),
        Y = i.useCallback(
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
                                className: a()(C.heading, { [C.headingTopbar]: !R }),
                                children: [
                                    !R &&
                                        (0, r.jsxs)("div", {
                                            className: C.headingFilters,
                                            children: [(0, r.jsx)(E.Z, { loadId: t }), (0, r.jsx)(v.Z, { loadId: t })],
                                        }),
                                    A && (0, r.jsx)(O.Z, { loadId: t }),
                                ],
                            },
                            i,
                        );
                    case 1:
                        return (0, r.jsx)(c.$jN, { className: a()(C.spinner, { [C.spinnerWithSidebar]: R }) }, i);
                }
            },
            [A, R, t],
        ),
        q = i.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = R ? 16 : 50;
                        return A ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error("[getSectionHeight] Failed for section: ".concat(e));
                }
            },
            [A, R],
        ),
        K = i.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return s[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error("[getItemKey] Failed for section: ".concat(e));
                }
            },
            [s],
        ),
        Q = i.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error("[getItemHeight] Failed for section: ".concat(e));
            }
        }, []),
        X = i.useCallback(
            async (e, t, n, r) => {
                var i, a;
                await l(e, t, n, r);
                let o = null == (a = B.current) || null == (i = a.getScrollerState()) ? void 0 : i.scrollTop;
                null != o && g.Z.setState({ scrollPosition: o });
            },
            [l],
        ),
        J = i.useCallback(
            (e, t, n, i) => {
                if (0 !== e) return null;
                {
                    let e = s[t];
                    return (0, r.jsx)(
                        "div",
                        {
                            style: n,
                            children: (0, r.jsx)(y.ZP, {
                                guildId: e,
                                onClick: async (e) => await X(e, t, x, T),
                                onView: (e) => z(e),
                            }),
                        },
                        i,
                    );
                }
            },
            [s, X, z, x],
        );
    i.useEffect(() => {
        let e = B.current;
        return () => {
            var t;
            let n = null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollTop;
            null != n && g.Z.setState({ scrollPosition: n });
        };
    }, []),
        i.useLayoutEffect(() => {
            let e = g.Z.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    var t;
                    null == (t = B.current) ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                g.Z.setState({ scrollPosition: null });
                            },
                        });
                });
        }, []);
    let $ = i.useMemo(
            () =>
                (0, o.debounce)(
                    () => {
                        var e;
                        let t = null == (e = B.current) ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 240 && j();
                    },
                    100,
                    { leading: !0 },
                ),
            [j],
        ),
        ee = R ? S : N;
    return (0, r.jsx)("div", {
        className: C.container,
        ref: F,
        children: (0, r.jsx)(c.GMG, {
            ref: B,
            className: C.masonryList,
            sections: W,
            columns: k,
            itemGutter: 16,
            padding: ee,
            renderItem: J,
            renderSection: Y,
            getSectionHeight: q,
            getItemKey: K,
            getItemHeight: Q,
            chunkSize: 24,
            onScroll: $,
            renderAccessory: (e) =>
                R
                    ? (0, r.jsx)("div", {
                          className: C.sidebar,
                          style: { height: e },
                          children: (0, r.jsxs)("div", {
                              className: C.sidebarContent,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: C.sidebarLanguageSelect,
                                      children: (0, r.jsx)(v.Z, { loadId: t }),
                                  }),
                                  (0, r.jsx)(_.Z, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
