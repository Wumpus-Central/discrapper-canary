n.d(t, { Z: () => P }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    u = n(393903),
    d = n(626135),
    p = n(823379),
    f = n(900849),
    h = n(356164),
    g = n(164991),
    m = n(726115),
    _ = n(28494),
    b = n(746728),
    E = n(140700),
    O = n(665807),
    y = n(188493),
    v = n(294330),
    I = n(981631),
    C = n(857847);
let S = Object.freeze({
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
    j = o().throttle(f.c6, 1000, {
        leading: !1,
        trailing: !0,
    });
function P(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: o, loading: f, searchResultsQuery: I, loadMore: P, searchCategoryId: x } = (0, _.f)({ loadId: t }),
        A = 0 === o.length && !f,
        Z = i.useContext(d.AnalyticsContext),
        [w, L] = i.useState((0, m.PM)()),
        [R, D] = i.useState(!0),
        M = i.useRef(R),
        [k, U] = i.useState(3),
        G = i.useRef(k),
        B = i.useRef(null),
        H = i.useCallback(
            (e) => {
                if (null != e && !A && !f) 336 * (o.length / k) <= e.height && P();
            },
            [A, f, o.length, k, P],
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
            j({
                loadId: t,
                searchId: w,
                query: I,
                guildResults: o.map(h.Z.getGuild).filter(p.lm),
                analyticsContext: Z,
                categoryId: x,
            });
        }, [Z, o, t, x, w, I]);
    let z = i.useCallback((e) => n(e, x), [n, x]),
        Y = i.useMemo(() => (f ? [o.length, 0] : [o.length]), [o.length, f]),
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
                                className: a()(C.heading, { [C.headingTopbar]: !R }),
                                children: [
                                    !R &&
                                        (0, r.jsxs)("div", {
                                            className: C.headingFilters,
                                            children: [(0, r.jsx)(E.Z, { loadId: t }), (0, r.jsx)(y.Z, { loadId: t })],
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
                        return o[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error("[getItemKey] Failed for section: ".concat(e));
                }
            },
            [o],
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
        J = i.useCallback(
            async (e, t, n, r) => {
                var i, a;
                await l(e, t, n, r);
                let s = null == (a = B.current) || null == (i = a.getScrollerState()) ? void 0 : i.scrollTop;
                null != s && g.Z.setState({ scrollPosition: s });
            },
            [l],
        ),
        X = i.useCallback(
            (e, t, n, i) => {
                if (0 !== e) return null;
                {
                    let e = o[t];
                    return (0, r.jsx)(
                        "div",
                        {
                            style: n,
                            children: (0, r.jsx)(v.ZP, {
                                guildId: e,
                                onClick: async (e) => await J(e, t, x, N),
                                onView: (e) => z(e),
                            }),
                        },
                        i,
                    );
                }
            },
            [o, J, z, x],
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
                (0, s.debounce)(
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
        ee = R ? S : T;
    return (0, r.jsx)("div", {
        className: C.container,
        ref: F,
        children: (0, r.jsx)(c.GMG, {
            ref: B,
            className: C.masonryList,
            sections: Y,
            columns: k,
            itemGutter: 16,
            padding: ee,
            renderItem: X,
            renderSection: W,
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
                                      children: (0, r.jsx)(y.Z, { loadId: t }),
                                  }),
                                  (0, r.jsx)(b.Z, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
