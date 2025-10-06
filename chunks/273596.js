n.d(t, { Z: () => P }), n(388685), n(415506);
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
    O = n(140700),
    E = n(665807),
    v = n(188493),
    y = n(294330),
    I = n(981631),
    S = n(857847);
let C = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202,
    }),
    T = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32,
    }),
    N = {
        page: I.ZY5.GUILD_DISCOVERY,
        object: I.qAy.CARD,
        section: I.jXE.DISCOVER_SEARCH,
    },
    j = s().throttle(f.c6, 1000, {
        leading: !1,
        trailing: !0,
    });
function P(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: s, loading: f, searchResultsQuery: I, loadMore: P, searchCategoryId: x } = (0, b.f)({ loadId: t }),
        A = 0 === s.length && !f,
        Z = i.useContext(d.AnalyticsContext),
        [w, L] = i.useState((0, m.PM)()),
        [R, D] = i.useState(!0),
        k = i.useRef(R),
        [M, U] = i.useState(3),
        G = i.useRef(M),
        B = i.useRef(null),
        H = i.useCallback(
            (e) => {
                if (null != e && !A && !f) 336 * (s.length / M) <= e.height && P();
            },
            [A, f, s.length, M, P],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let n = t.width;
                n < 1024 && k.current ? ((k.current = !1), D(!1)) : n > 1024 && !k.current && ((k.current = !0), D(!0));
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
            j({
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
        q = i.useCallback(
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
                                className: a()(S.heading, { [S.headingTopbar]: !R }),
                                children: [
                                    !R &&
                                        (0, r.jsxs)("div", {
                                            className: S.headingFilters,
                                            children: [(0, r.jsx)(O.Z, { loadId: t }), (0, r.jsx)(v.Z, { loadId: t })],
                                        }),
                                    A && (0, r.jsx)(E.Z, { loadId: t }),
                                ],
                            },
                            i,
                        );
                    case 1:
                        return (0, r.jsx)(c.$jN, { className: a()(S.spinner, { [S.spinnerWithSidebar]: R }) }, i);
                }
            },
            [A, R, t],
        ),
        Y = i.useCallback(
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
                                onClick: async (e) => await X(e, t, x, N),
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
                        t.scrollHeight - n < 240 && P();
                    },
                    100,
                    { leading: !0 },
                ),
            [P],
        ),
        ee = R ? C : T;
    return (0, r.jsx)("div", {
        className: S.container,
        ref: F,
        children: (0, r.jsx)(c.GMG, {
            ref: B,
            className: S.masonryList,
            sections: W,
            columns: M,
            itemGutter: 16,
            padding: ee,
            renderItem: J,
            renderSection: q,
            getSectionHeight: Y,
            getItemKey: K,
            getItemHeight: Q,
            chunkSize: 24,
            onScroll: $,
            renderAccessory: (e) =>
                R
                    ? (0, r.jsx)("div", {
                          className: S.sidebar,
                          style: { height: e },
                          children: (0, r.jsxs)("div", {
                              className: S.sidebarContent,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: S.sidebarLanguageSelect,
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
