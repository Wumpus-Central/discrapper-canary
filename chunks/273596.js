n.d(t, { Z: () => L }), n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    d = n(393903),
    u = n(626135),
    h = n(823379),
    m = n(900849),
    p = n(356164),
    g = n(164991),
    _ = n(726115),
    f = n(28494),
    E = n(746728),
    I = n(140700),
    C = n(665807),
    N = n(188493),
    v = n(294330),
    T = n(981631),
    S = n(130552);
let b = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    A = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    Z = {
        page: T.ZY5.GUILD_DISCOVERY,
        object: T.qAy.CARD,
        section: T.jXE.DISCOVER_SEARCH
    },
    x = o().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function L(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        { guildIds: o, loading: m, searchResultsQuery: T, loadMore: L, searchCategoryId: y } = (0, f.f)({ loadId: t }),
        P = 0 === o.length && !m,
        O = l.useContext(u.AnalyticsContext),
        [R, j] = l.useState((0, _.PM)()),
        [D, w] = l.useState(!0),
        k = l.useRef(D),
        [M, U] = l.useState(3),
        G = l.useRef(M),
        B = l.useRef(null),
        V = l.useCallback(
            (e) => {
                if (null != e && !P && !m) 336 * (o.length / M) <= e.height && L();
            },
            [P, m, o.length, M, L]
        ),
        H = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && k.current ? ((k.current = !1), w(!1)) : n > 1024 && !k.current && ((k.current = !0), w(!0));
            let i = 1;
            for (n -= D ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== G.current && ((G.current = i), U(i)), V(t);
        });
    l.useLayoutEffect(() => {
        var e;
        V(null === (e = H.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [H, V]),
        l.useEffect(() => {
            j((0, _.PM)());
        }, [T]),
        l.useEffect(() => {
            x({
                loadId: t,
                searchId: R,
                query: T,
                guildResults: o.map(p.Z.getGuild).filter(h.lm),
                analyticsContext: O,
                categoryId: y
            });
        }, [O, o, t, y, R, T]);
    let F = l.useCallback((e) => n(e, y), [n, y]),
        z = l.useMemo(() => (m ? [o.length, 0] : [o.length]), [o.length, m]),
        W = l.useCallback(
            (e, n, l) => {
                switch (e) {
                    case 0:
                        return (0, i.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                className: a()(S.heading, { [S.headingTopbar]: !D }),
                                children: [
                                    !D &&
                                        (0, i.jsxs)('div', {
                                            className: S.headingFilters,
                                            children: [(0, i.jsx)(I.Z, { loadId: t }), (0, i.jsx)(N.Z, { loadId: t })]
                                        }),
                                    P && (0, i.jsx)(C.Z, { loadId: t })
                                ]
                            },
                            l
                        );
                    case 1:
                        return (0, i.jsx)(c.$jN, { className: a()(S.spinner, { [S.spinnerWithSidebar]: D }) }, l);
                }
            },
            [P, D, t]
        ),
        Y = l.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = D ? 16 : 50;
                        return P ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [P, D]
        ),
        K = l.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return o[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [o]
        ),
        q = l.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        X = l.useCallback(
            async (e, t, n, i) => {
                var l, a;
                await r(e, t, n, i);
                let s = null === (a = B.current) || void 0 === a ? void 0 : null === (l = a.getScrollerState()) || void 0 === l ? void 0 : l.scrollTop;
                null != s && g.Z.setState({ scrollPosition: s });
            },
            [r]
        ),
        Q = l.useCallback(
            (e, t, n, l) => {
                if (0 === e) {
                    let e = o[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(v.ZP, {
                                guildId: e,
                                onClick: async (e) => await X(e, t, y, Z),
                                onView: (e) => F(e)
                            })
                        },
                        l
                    );
                }
                return null;
            },
            [o, X, F, y]
        );
    l.useEffect(() => {
        let e = B.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && g.Z.setState({ scrollPosition: n });
        };
    }, []),
        l.useLayoutEffect(() => {
            let e = g.Z.getField('scrollPosition');
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = B.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                g.Z.setState({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let J = l.useMemo(
            () =>
                (0, s.debounce)(
                    () => {
                        var e;
                        let t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 240 && L();
                    },
                    100,
                    { leading: !0 }
                ),
            [L]
        ),
        $ = D ? b : A;
    return (0, i.jsx)('div', {
        className: S.container,
        ref: H,
        children: (0, i.jsx)(c.GMG, {
            ref: B,
            className: S.masonryList,
            sections: z,
            columns: M,
            itemGutter: 16,
            padding: $,
            renderItem: Q,
            renderSection: W,
            getSectionHeight: Y,
            getItemKey: K,
            getItemHeight: q,
            chunkSize: 24,
            onScroll: J,
            renderAccessory: (e) =>
                D
                    ? (0, i.jsx)('div', {
                          className: S.sidebar,
                          style: { height: e },
                          children: (0, i.jsxs)('div', {
                              className: S.sidebarContent,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: S.sidebarLanguageSelect,
                                      children: (0, i.jsx)(N.Z, { loadId: t })
                                  }),
                                  (0, i.jsx)(E.Z, { loadId: t })
                              ]
                          })
                      })
                    : null
        })
    });
}
