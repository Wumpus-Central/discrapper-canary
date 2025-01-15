t(47120), t(852437);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(100527),
    r = t(367907),
    s = t(906732),
    c = t(541099),
    d = t(695676),
    u = t(173790),
    m = t(361917),
    p = t(684256),
    h = t(314734),
    f = t(981631),
    C = t(885494);
let v = {
        width: h.Gy,
        height: h.lv
    },
    x = { height: h.lv };
function _(e) {
    let { initHistory: n, children: t } = e,
        [a, o] = l.useState(null != n ? n : [{ type: d.gc.HOME }]),
        [r, s] = l.useState({}),
        c = a[a.length - 1],
        [u, m] = l.useState(!1),
        p = l.useCallback((e) => {
            o((n) => [...n, e]);
        }, []),
        h = l.useCallback(() => {
            let e = null;
            o((n) => (n.length <= 1 ? n : ((e = n[n.length - 1]), n.slice(0, -1)))),
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
                return null !== (n = a.findLast((n) => n.type === e)) && void 0 !== n ? n : r[e];
            },
            [a, r]
        );
    return (0, i.jsx)(d.uX.Provider, {
        value: {
            history: a,
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
    let { channel: n, entrypoint: t } = e,
        [o, r] = l.useState(''),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [n, t] = l.useState(null),
                [i, a] = l.useState(!1),
                o = l.useRef(0);
            return (
                l.useEffect(() => {
                    null == n || n.scrollTo(0, 0);
                }, [n, e]),
                l.useEffect(() => {
                    if (null != n)
                        return (
                            n.scrollTo(0, o.current),
                            n.addEventListener('scroll', e),
                            () => {
                                n.removeEventListener('scroll', e, !1);
                            }
                        );
                    function e() {
                        if (null != n) (o.current = n.scrollTop), a(n.scrollHeight - (n.scrollTop + n.clientHeight) < 0.5 * h.K7);
                    }
                }, [n]),
                {
                    setScroller: t,
                    isCloseToBottom: i
                }
            );
        })(o),
        { currentView: f, getMostRecentHistoryItemByType: v, setSlideReady: _ } = (0, d.hH)();
    l.useEffect(() => {
        _(!1);
    }, [null == f ? void 0 : f.type, _]);
    let N = l.useCallback(() => {
        _(!0);
    }, [_]);
    if (null == f) return null;
    let g = v(d.gc.LIST),
        A = v(d.gc.APPLICATION);
    return (0, i.jsxs)(a.Slides, {
        activeSlide: f.type,
        width: h.Gy,
        onSlideReady: N,
        children: [
            (0, i.jsx)(a.Slide, {
                id: d.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: C.slideContent,
                    style: x,
                    children: (0, i.jsx)(m.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: s,
                        channel: n,
                        entrypoint: t,
                        searchQuery: o,
                        setSearchQuery: r
                    })
                })
            }),
            (0, i.jsx)(a.Slide, {
                id: d.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: C.slideContent,
                    style: x,
                    children:
                        null != g &&
                        (0, i.jsx)(p.Z, {
                            channel: n,
                            entrypoint: t,
                            title: g.title,
                            look: g.look,
                            items: g.items,
                            sectionName: g.sectionName,
                            sectionOverallPosition: g.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(a.Slide, {
                id: d.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: C.slideContent,
                    style: x,
                    children:
                        null != A &&
                        (0, i.jsx)(u.Z, {
                            channel: n,
                            application: A.application,
                            sectionName: A.sectionName
                        })
                })
            })
        ]
    });
}
n.Z = l.memo(
    l.forwardRef(function (e, n) {
        let { channel: t, entrypoint: a, initHistory: d } = e,
            { analyticsLocations: u } = (0, s.ZP)(o.Z.APP_LAUNCHER);
        return (
            l.useEffect(() => {
                (0, r.yw)(f.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                    source: a,
                    location: 'app_launcher'
                });
            }, [a]),
            l.useEffect(() => {
                let e = Date.now();
                return () => {
                    (0, r.yw)(f.rMx.APP_LAUNCHER_CLOSED, {
                        reason: c.Z.closeReason(),
                        time_spent: Date.now() - e,
                        source: a
                    });
                };
            }, [a]),
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
                                channel: t,
                                entrypoint: a
                            })
                        })
                    })
                })
            })
        );
    })
);
