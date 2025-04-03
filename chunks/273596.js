n.d(t, { Z: () => j }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(481060),
    u = n(393903),
    d = n(626135),
    p = n(823379),
    h = n(900849),
    f = n(356164),
    g = n(164991),
    m = n(726115),
    b = n(28494),
    _ = n(746728),
    E = n(140700),
    O = n(665807),
    N = n(188493),
    y = n(294330),
    I = n(981631),
    v = n(984503);
let C = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    S = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    T = {
        page: I.ZY5.GUILD_DISCOVERY,
        object: I.qAy.CARD,
        section: I.jXE.DISCOVER_SEARCH
    },
    P = s().throttle(h.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function j(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: s, loading: h, searchResultsQuery: I, loadMore: j, searchCategoryId: A } = (0, b.f)({ loadId: t }),
        Z = 0 === s.length && !h,
        x = i.useContext(d.AnalyticsContext),
        [L, w] = i.useState((0, m.PM)()),
        [R, D] = i.useState(!0),
        k = i.useRef(R),
        [M, U] = i.useState(3),
        G = i.useRef(M),
        W = i.useRef(null),
        V = i.useCallback(
            (e) => {
                if (null != e && !Z && !h) 336 * (s.length / M) <= e.height && j();
            },
            [Z, h, s.length, M, j]
        ),
        B = (0, u.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && k.current ? ((k.current = !1), D(!1)) : n > 1024 && !k.current && ((k.current = !0), D(!0));
            let r = 1;
            for (n -= 450 * !!R, n -= 280; n > 0; ) (n -= 264), (r += 1);
            r !== G.current && ((G.current = r), U(r)), V(t);
        });
    i.useLayoutEffect(() => {
        var e;
        V(null == (e = B.current) ? void 0 : e.getBoundingClientRect());
    }, [B, V]),
        i.useEffect(() => {
            w((0, m.PM)());
        }, [I]),
        i.useEffect(() => {
            P({
                loadId: t,
                searchId: L,
                query: I,
                guildResults: s.map(f.Z.getGuild).filter(p.lm),
                analyticsContext: x,
                categoryId: A
            });
        }, [x, s, t, A, L, I]);
    let H = i.useCallback((e) => n(e, A), [n, A]),
        F = i.useMemo(() => (h ? [s.length, 0] : [s.length]), [s.length, h]),
        z = i.useCallback(
            (e, n, i) => {
                switch (e) {
                    case 0:
                        return (0, r.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                className: a()(v.heading, { [v.headingTopbar]: !R }),
                                children: [
                                    !R &&
                                        (0, r.jsxs)('div', {
                                            className: v.headingFilters,
                                            children: [(0, r.jsx)(E.Z, { loadId: t }), (0, r.jsx)(N.Z, { loadId: t })]
                                        }),
                                    Z && (0, r.jsx)(O.Z, { loadId: t })
                                ]
                            },
                            i
                        );
                    case 1:
                        return (0, r.jsx)(c.$jN, { className: a()(v.spinner, { [v.spinnerWithSidebar]: R }) }, i);
                }
            },
            [Z, R, t]
        ),
        Y = i.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = R ? 16 : 50;
                        return Z ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [Z, R]
        ),
        K = i.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return s[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [s]
        ),
        q = i.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        Q = i.useCallback(
            async (e, t, n, r) => {
                var i, a;
                await l(e, t, n, r);
                let o = null == (a = W.current) || null == (i = a.getScrollerState()) ? void 0 : i.scrollTop;
                null != o && g.Z.setState({ scrollPosition: o });
            },
            [l]
        ),
        X = i.useCallback(
            (e, t, n, i) => {
                if (0 !== e) return null;
                {
                    let e = s[t];
                    return (0, r.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, r.jsx)(y.ZP, {
                                guildId: e,
                                onClick: async (e) => await Q(e, t, A, T),
                                onView: (e) => H(e)
                            })
                        },
                        i
                    );
                }
            },
            [s, Q, H, A]
        );
    i.useEffect(() => {
        let e = W.current;
        return () => {
            var t;
            let n = null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollTop;
            null != n && g.Z.setState({ scrollPosition: n });
        };
    }, []),
        i.useLayoutEffect(() => {
            let e = g.Z.getField('scrollPosition');
            null != e &&
                setTimeout(() => {
                    var t;
                    null == (t = W.current) ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                g.Z.setState({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let J = i.useMemo(
            () =>
                (0, o.debounce)(
                    () => {
                        var e;
                        let t = null == (e = W.current) ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 240 && j();
                    },
                    100,
                    { leading: !0 }
                ),
            [j]
        ),
        $ = R ? C : S;
    return (0, r.jsx)('div', {
        className: v.container,
        ref: B,
        children: (0, r.jsx)(c.GMG, {
            ref: W,
            className: v.masonryList,
            sections: F,
            columns: M,
            itemGutter: 16,
            padding: $,
            renderItem: X,
            renderSection: z,
            getSectionHeight: Y,
            getItemKey: K,
            getItemHeight: q,
            chunkSize: 24,
            onScroll: J,
            renderAccessory: (e) =>
                R
                    ? (0, r.jsx)('div', {
                          className: v.sidebar,
                          style: { height: e },
                          children: (0, r.jsxs)('div', {
                              className: v.sidebarContent,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: v.sidebarLanguageSelect,
                                      children: (0, r.jsx)(N.Z, { loadId: t })
                                  }),
                                  (0, r.jsx)(_.Z, { loadId: t })
                              ]
                          })
                      })
                    : null
        })
    });
}
