n.d(t, { Z: () => C }), n(47120), n(852437);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(100527),
    s = n(367907),
    r = n(906732),
    c = n(541099),
    d = n(695676),
    u = n(173790),
    m = n(361917),
    p = n(684256),
    h = n(314734),
    x = n(981631),
    v = n(814894);
let f = {
        width: h.Gy,
        height: h.lv
    },
    N = { height: h.lv },
    C = l.memo(
        l.forwardRef(function (e, t) {
            let { context: n, entrypoint: a, initHistory: d } = e,
                { analyticsLocations: u } = (0, r.ZP)(o.Z.APP_LAUNCHER);
            return (
                l.useEffect(() => {
                    (0, s.yw)(x.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: a,
                        location: 'app_launcher'
                    });
                }, [a]),
                l.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, s.yw)(x.rMx.APP_LAUNCHER_CLOSED, {
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: a
                        });
                    };
                }, [a]),
                (0, i.jsx)('div', {
                    className: v.drawerSizingWrapper,
                    ref: t,
                    style: f,
                    children: (0, i.jsx)('div', {
                        className: v.contentWrapper,
                        children: (0, i.jsx)(r.Gt, {
                            value: u,
                            children: (0, i.jsx)(E, {
                                initHistory: d,
                                children: (0, i.jsx)(A, {
                                    context: n,
                                    entrypoint: a
                                })
                            })
                        })
                    })
                })
            );
        })
    );
function E(e) {
    let { initHistory: t, children: n } = e,
        [a, o] = l.useState(null != t ? t : [{ type: d.gc.HOME }]),
        [s, r] = l.useState({}),
        c = a[a.length - 1],
        [u, m] = l.useState(!1),
        p = l.useCallback((e) => {
            o((t) => [...t, e]);
        }, []),
        h = l.useCallback(() => {
            let e = null;
            o((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                r((t) =>
                    null == e
                        ? t
                        : {
                              ...t,
                              [e.type]: e
                          }
                );
        }, []),
        x = l.useCallback(
            (e) => {
                var t;
                return null !== (t = a.findLast((t) => t.type === e)) && void 0 !== t ? t : s[e];
            },
            [a, s]
        );
    return (0, i.jsx)(d.uX.Provider, {
        value: {
            history: a,
            discard: s,
            currentView: c,
            pushHistory: p,
            goBack: h,
            getMostRecentHistoryItemByType: x,
            isSlideReady: u,
            setSlideReady: m
        },
        children: n
    });
}
function A(e) {
    let { context: t, entrypoint: n } = e,
        [o, s] = l.useState(''),
        { setScroller: r, isCloseToBottom: c } = (function (e) {
            let [t, n] = l.useState(null),
                [i, a] = l.useState(!1),
                o = l.useRef(0);
            return (
                l.useEffect(() => {
                    null == t || t.scrollTo(0, 0);
                }, [t, e]),
                l.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, o.current),
                            t.addEventListener('scroll', e),
                            () => {
                                t.removeEventListener('scroll', e, !1);
                            }
                        );
                    function e() {
                        null != t && ((o.current = t.scrollTop), a(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * h.K7));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: i
                }
            );
        })(o),
        { currentView: x, getMostRecentHistoryItemByType: f, setSlideReady: C } = (0, d.hH)();
    l.useEffect(() => {
        C(!1);
    }, [null == x ? void 0 : x.type, C]);
    let E = l.useCallback(() => {
        C(!0);
    }, [C]);
    if (null == x) return null;
    let A = f(d.gc.LIST),
        I = f(d.gc.APPLICATION);
    return (0, i.jsxs)(a.MyZ, {
        activeSlide: x.type,
        width: h.Gy,
        onSlideReady: E,
        children: [
            (0, i.jsx)(a.Mi4, {
                id: d.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: v.slideContent,
                    style: N,
                    children: (0, i.jsx)(m.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: r,
                        context: t,
                        entrypoint: n,
                        searchQuery: o,
                        setSearchQuery: s
                    })
                })
            }),
            (0, i.jsx)(a.Mi4, {
                id: d.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: v.slideContent,
                    style: N,
                    children:
                        null != A &&
                        (0, i.jsx)(p.Z, {
                            context: t,
                            entrypoint: n,
                            title: A.title,
                            look: A.look,
                            items: A.items,
                            sectionName: A.sectionName,
                            sectionOverallPosition: A.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(a.Mi4, {
                id: d.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: v.slideContent,
                    style: N,
                    children:
                        null != I &&
                        (0, i.jsx)(u.Z, {
                            context: t,
                            application: I.application,
                            sectionName: I.sectionName
                        })
                })
            })
        ]
    });
}
