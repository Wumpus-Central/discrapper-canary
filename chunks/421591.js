n.d(t, { Z: () => y }), n(47120), n(852437);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(100527),
    a = n(367907),
    s = n(906732),
    c = n(541099),
    u = n(695676),
    d = n(173790),
    m = n(361917),
    p = n(684256),
    h = n(314734),
    f = n(981631),
    v = n(820190);
let N = {
        width: h.Gy,
        height: h.lv
    },
    x = { height: h.lv },
    y = l.memo(
        l.forwardRef(function (e, t) {
            let { context: n, entrypoint: r, initHistory: u } = e,
                { analyticsLocations: d } = (0, s.ZP)(o.Z.APP_LAUNCHER);
            return (
                l.useEffect(() => {
                    (0, a.yw)(f.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: r,
                        location: 'app_launcher'
                    });
                }, [r]),
                l.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, a.yw)(f.rMx.APP_LAUNCHER_CLOSED, {
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: r
                        });
                    };
                }, [r]),
                (0, i.jsx)('div', {
                    className: v.drawerSizingWrapper,
                    ref: t,
                    style: N,
                    children: (0, i.jsx)('div', {
                        className: v.contentWrapper,
                        children: (0, i.jsx)(s.Gt, {
                            value: d,
                            children: (0, i.jsx)(b, {
                                initHistory: u,
                                children: (0, i.jsx)(E, {
                                    context: n,
                                    entrypoint: r
                                })
                            })
                        })
                    })
                })
            );
        })
    );
function b(e) {
    let { initHistory: t, children: n } = e,
        [r, o] = l.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [a, s] = l.useState({}),
        c = r[r.length - 1],
        [d, m] = l.useState(!1),
        p = l.useCallback((e) => {
            o((t) => [...t, e]);
        }, []),
        h = l.useCallback(() => {
            let e = null;
            o((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                s((t) => {
                    var n, i;
                    return null == e
                        ? t
                        : ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })({}, t)),
                          (i = i = { [e.type]: e }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          n);
                });
        }, []),
        f = l.useCallback(
            (e) => {
                var t;
                return null !== (t = r.findLast((t) => t.type === e)) && void 0 !== t ? t : a[e];
            },
            [r, a]
        );
    return (0, i.jsx)(u.uX.Provider, {
        value: {
            history: r,
            discard: a,
            currentView: c,
            pushHistory: p,
            goBack: h,
            getMostRecentHistoryItemByType: f,
            isSlideReady: d,
            setSlideReady: m
        },
        children: n
    });
}
function E(e) {
    let { context: t, entrypoint: n } = e,
        [o, a] = l.useState(''),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [t, n] = l.useState(null),
                [i, r] = l.useState(!1),
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
                        null != t && ((o.current = t.scrollTop), r(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * h.K7));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: i
                }
            );
        })(o),
        { currentView: f, getMostRecentHistoryItemByType: N, setSlideReady: y } = (0, u.hH)();
    l.useEffect(() => {
        y(!1);
    }, [null == f ? void 0 : f.type, y]);
    let b = l.useCallback(() => {
        y(!0);
    }, [y]);
    if (null == f) return null;
    let E = N(u.gc.LIST),
        C = N(u.gc.APPLICATION);
    return (0, i.jsxs)(r.MyZ, {
        activeSlide: f.type,
        width: h.Gy,
        onSlideReady: b,
        children: [
            (0, i.jsx)(r.Mi4, {
                id: u.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: v.slideContent,
                    style: x,
                    children: (0, i.jsx)(m.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: s,
                        context: t,
                        entrypoint: n,
                        searchQuery: o,
                        setSearchQuery: a
                    })
                })
            }),
            (0, i.jsx)(r.Mi4, {
                id: u.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: v.slideContent,
                    style: x,
                    children:
                        null != E &&
                        (0, i.jsx)(p.Z, {
                            context: t,
                            entrypoint: n,
                            title: E.title,
                            look: E.look,
                            items: E.items,
                            sectionName: E.sectionName,
                            sectionOverallPosition: E.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(r.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: v.slideContent,
                    style: x,
                    children:
                        null != C &&
                        (0, i.jsx)(d.Z, {
                            context: t,
                            application: C.application,
                            sectionName: C.sectionName
                        })
                })
            })
        ]
    });
}
