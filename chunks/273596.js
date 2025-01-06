n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    d = n(393903),
    u = n(626135),
    h = n(823379),
    m = n(900849),
    p = n(356164),
    g = n(164991),
    f = n(726115),
    _ = n(28494),
    E = n(746728),
    I = n(140700),
    C = n(665807),
    N = n(188493),
    v = n(294330),
    S = n(981631),
    T = n(841787);
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
        page: S.ZY5.GUILD_DISCOVERY,
        object: S.qAy.CARD,
        section: S.jXE.DISCOVER_SEARCH
    },
    x = o().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function L(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        { guildIds: o, loading: m, searchResultsQuery: S, loadMore: L, searchCategoryId: P } = (0, _.f)({ loadId: t }),
        O = 0 === o.length && !m,
        y = r.useContext(u.AnalyticsContext),
        [R, j] = r.useState((0, f.PM)()),
        [D, M] = r.useState(!0),
        w = r.useRef(D),
        [k, U] = r.useState(3),
        G = r.useRef(k),
        B = r.useRef(null),
        V = r.useCallback(
            (e) => {
                if (null == e || O || m) return;
                let t = o.length / k;
                336 * t <= e.height && L();
            },
            [O, m, o.length, k, L]
        ),
        H = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && w.current ? ((w.current = !1), M(!1)) : n > 1024 && !w.current && ((w.current = !0), M(!0));
            let i = 1;
            for (n -= D ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== G.current && ((G.current = i), U(i)), V(t);
        });
    r.useLayoutEffect(() => {
        var e;
        V(null === (e = H.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [H, V]),
        r.useEffect(() => {
            j((0, f.PM)());
        }, [S]),
        r.useEffect(() => {
            x({
                loadId: t,
                searchId: R,
                query: S,
                guildResults: o.map(p.Z.getGuild).filter(h.lm),
                analyticsContext: y,
                categoryId: P
            });
        }, [y, o, t, P, R, S]);
    let F = r.useCallback((e) => n(e, P), [n, P]),
        z = r.useMemo(() => (m ? [o.length, 0] : [o.length]), [o.length, m]),
        W = r.useCallback(
            (e, n, r) => {
                switch (e) {
                    case 0:
                        return (0, i.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                className: a()(T.heading, { [T.headingTopbar]: !D }),
                                children: [
                                    !D &&
                                        (0, i.jsxs)('div', {
                                            className: T.headingFilters,
                                            children: [(0, i.jsx)(I.Z, { loadId: t }), (0, i.jsx)(N.Z, { loadId: t })]
                                        }),
                                    O && (0, i.jsx)(C.Z, { loadId: t })
                                ]
                            },
                            r
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: a()(T.spinner, { [T.spinnerWithSidebar]: D }) }, r);
                }
            },
            [O, D, t]
        ),
        Y = r.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = D ? 16 : 50;
                        return O ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [O, D]
        ),
        K = r.useCallback(
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
        q = r.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        X = r.useCallback(
            async (e, t, n, i) => {
                var r, a;
                await l(e, t, n, i);
                let s = null === (a = B.current) || void 0 === a ? void 0 : null === (r = a.getScrollerState()) || void 0 === r ? void 0 : r.scrollTop;
                null != s && g.Z.setState({ scrollPosition: s });
            },
            [l]
        ),
        Q = r.useCallback(
            (e, t, n, r) => {
                if (0 === e) {
                    let e = o[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(v.ZP, {
                                guildId: e,
                                onClick: async (e) => await X(e, t, P, Z),
                                onView: (e) => F(e)
                            })
                        },
                        r
                    );
                }
                return null;
            },
            [o, X, F, P]
        );
    r.useEffect(() => {
        let e = B.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && g.Z.setState({ scrollPosition: n });
        };
    }, []),
        r.useLayoutEffect(() => {
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
    let J = r.useMemo(
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
        className: T.container,
        ref: H,
        children: (0, i.jsx)(c.MasonryList, {
            ref: B,
            className: T.masonryList,
            sections: z,
            columns: k,
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
                          className: T.sidebar,
                          style: { height: e },
                          children: (0, i.jsxs)('div', {
                              className: T.sidebarContent,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: T.sidebarLanguageSelect,
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
