t(47120), t(852437);
var i = t(200651),
    l = t(192379),
    o = t(481060),
    a = t(100527),
    r = t(367907),
    s = t(906732),
    c = t(541099),
    d = t(695676),
    u = t(173790),
    m = t(361917),
    p = t(684256),
    h = t(314734),
    f = t(981631),
    C = t(814894);
let v = {
        width: h.Gy,
        height: h.lv
    },
    x = { height: h.lv };
function _(e) {
    let { initHistory: n, children: t } = e,
        [o, a] = l.useState(null != n ? n : [{ type: d.gc.HOME }]),
        [r, s] = l.useState({}),
        c = o[o.length - 1],
        [u, m] = l.useState(!1),
        p = l.useCallback((e) => {
            a((n) => [...n, e]);
        }, []),
        h = l.useCallback(() => {
            let e = null;
            a((n) => (n.length <= 1 ? n : ((e = n[n.length - 1]), n.slice(0, -1)))),
                s((n) =>
                    null == e
                        ? n
                        : {
                              ...n,
                              [e.type]: e
                          }
                );
        }, []),
        f = l.useCallback(
            (e) => {
                var n;
                return null !== (n = o.findLast((n) => n.type === e)) && void 0 !== n ? n : r[e];
            },
            [o, r]
        );
    return (0, i.jsx)(d.uX.Provider, {
        value: {
            history: o,
            discard: r,
            currentView: c,
            pushHistory: p,
            goBack: h,
            getMostRecentHistoryItemByType: f,
            isSlideReady: u,
            setSlideReady: m
        },
        children: t
    });
}
function N(e) {
    let { context: n, entrypoint: t } = e,
        [a, r] = l.useState(''),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [n, t] = l.useState(null),
                [i, o] = l.useState(!1),
                a = l.useRef(0);
            return (
                l.useEffect(() => {
                    null == n || n.scrollTo(0, 0);
                }, [n, e]),
                l.useEffect(() => {
                    if (null != n)
                        return (
                            n.scrollTo(0, a.current),
                            n.addEventListener('scroll', e),
                            () => {
                                n.removeEventListener('scroll', e, !1);
                            }
                        );
                    function e() {
                        if (null != n) (a.current = n.scrollTop), o(n.scrollHeight - (n.scrollTop + n.clientHeight) < 0.5 * h.K7);
                    }
                }, [n]),
                {
                    setScroller: t,
                    isCloseToBottom: i
                }
            );
        })(a),
        { currentView: f, getMostRecentHistoryItemByType: v, setSlideReady: _ } = (0, d.hH)();
    l.useEffect(() => {
        _(!1);
    }, [null == f ? void 0 : f.type, _]);
    let N = l.useCallback(() => {
        _(!0);
    }, [_]);
    if (null == f) return null;
    let A = v(d.gc.LIST),
        I = v(d.gc.APPLICATION);
    return (0, i.jsxs)(o.Slides, {
        activeSlide: f.type,
        width: h.Gy,
        onSlideReady: N,
        children: [
            (0, i.jsx)(o.Slide, {
                id: d.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: C.slideContent,
                    style: x,
                    children: (0, i.jsx)(m.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: s,
                        context: n,
                        entrypoint: t,
                        searchQuery: a,
                        setSearchQuery: r
                    })
                })
            }),
            (0, i.jsx)(o.Slide, {
                id: d.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: C.slideContent,
                    style: x,
                    children:
                        null != A &&
                        (0, i.jsx)(p.Z, {
                            context: n,
                            entrypoint: t,
                            title: A.title,
                            look: A.look,
                            items: A.items,
                            sectionName: A.sectionName,
                            sectionOverallPosition: A.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(o.Slide, {
                id: d.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: C.slideContent,
                    style: x,
                    children:
                        null != I &&
                        (0, i.jsx)(u.Z, {
                            context: n,
                            application: I.application,
                            sectionName: I.sectionName
                        })
                })
            })
        ]
    });
}
n.Z = l.memo(
    l.forwardRef(function (e, n) {
        let { context: t, entrypoint: o, initHistory: d } = e,
            { analyticsLocations: u } = (0, s.ZP)(a.Z.APP_LAUNCHER);
        return (
            l.useEffect(() => {
                (0, r.yw)(f.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                    source: o,
                    location: 'app_launcher'
                });
            }, [o]),
            l.useEffect(() => {
                let e = Date.now();
                return () => {
                    (0, r.yw)(f.rMx.APP_LAUNCHER_CLOSED, {
                        reason: c.Z.closeReason(),
                        time_spent: Date.now() - e,
                        source: o
                    });
                };
            }, [o]),
            (0, i.jsx)('div', {
                className: C.drawerSizingWrapper,
                ref: n,
                style: v,
                children: (0, i.jsx)('div', {
                    className: C.contentWrapper,
                    children: (0, i.jsx)(s.Gt, {
                        value: u,
                        children: (0, i.jsx)(_, {
                            initHistory: d,
                            children: (0, i.jsx)(N, {
                                context: t,
                                entrypoint: o
                            })
                        })
                    })
                })
            })
        );
    })
);
