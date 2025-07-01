(n.d(t, { Z: () => b }), n(388685), n(482853));
var l = n(255367),
    i = n(73800),
    r = n(481060),
    a = n(100527),
    o = n(367907),
    s = n(906732),
    c = n(541099),
    u = n(695676),
    d = n(173790),
    p = n(692656),
    m = n(684256),
    f = n(314734),
    h = n(981631),
    v = n(899429);
let y = {
        width: f.Gy,
        height: f.lv
    },
    x = { height: f.lv },
    b = i.memo(
        i.forwardRef(function (e, t) {
            let { context: n, entrypoint: r, initHistory: u } = e,
                { analyticsLocations: d } = (0, s.ZP)(a.Z.APP_LAUNCHER);
            return (
                i.useEffect(() => {
                    (0, o.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: r,
                        location: 'app_launcher'
                    });
                }, [r]),
                i.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, o.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: r
                        });
                    };
                }, [r]),
                (0, l.jsx)('div', {
                    className: v.drawerSizingWrapper,
                    ref: t,
                    style: y,
                    children: (0, l.jsx)('div', {
                        className: v.contentWrapper,
                        children: (0, l.jsx)(s.Gt, {
                            value: d,
                            children: (0, l.jsx)(g, {
                                initHistory: u,
                                children: (0, l.jsx)(j, {
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
function g(e) {
    let { initHistory: t, children: n } = e,
        [r, a] = i.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [o, s] = i.useState({}),
        c = r[r.length - 1],
        [d, p] = i.useState(!1),
        m = i.useCallback((e) => {
            a((t) => [...t, e]);
        }, []),
        f = i.useCallback(() => {
            let e = null;
            (a((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                s((t) => {
                    var n, l;
                    return null == e
                        ? t
                        : ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      l = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      l.forEach(function (t) {
                                          var l;
                                          ((l = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = l));
                                      }));
                              }
                              return e;
                          })({}, t)),
                          (l = l = { [e.type]: e }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, l);
                                    }
                                    return n;
                                })(Object(l)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                }),
                          n);
                }));
        }, []),
        h = i.useCallback(
            (e) => {
                var t;
                return null != (t = r.findLast((t) => t.type === e)) ? t : o[e];
            },
            [r, o]
        );
    return (0, l.jsx)(u.uX.Provider, {
        value: {
            history: r,
            discard: o,
            currentView: c,
            pushHistory: m,
            goBack: f,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: p
        },
        children: n
    });
}
function j(e) {
    let { context: t, entrypoint: n } = e,
        [a, o] = i.useState(''),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [t, n] = i.useState(null),
                [l, r] = i.useState(!1),
                a = i.useRef(0);
            return (
                i.useEffect(() => {
                    null == t || t.scrollTo(0, 0);
                }, [t, e]),
                i.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, a.current),
                            t.addEventListener('scroll', e),
                            () => {
                                t.removeEventListener('scroll', e, !1);
                            }
                        );
                    function e() {
                        null != t && ((a.current = t.scrollTop), r(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * f.K7));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: l
                }
            );
        })(a),
        { currentView: h, getMostRecentHistoryItemByType: y, setSlideReady: b } = (0, u.hH)();
    i.useEffect(() => {
        b(!1);
    }, [null == h ? void 0 : h.type, b]);
    let g = i.useCallback(() => {
        b(!0);
    }, [b]);
    if (null == h) return null;
    let j = y(u.gc.LIST),
        N = y(u.gc.APPLICATION);
    return (0, l.jsxs)(r.MyZ, {
        activeSlide: h.type,
        width: f.Gy,
        onSlideReady: g,
        children: [
            (0, l.jsx)(r.Mi4, {
                id: u.gc.HOME,
                children: (0, l.jsx)('div', {
                    className: v.slideContent,
                    style: x,
                    children: (0, l.jsx)(p.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: s,
                        context: t,
                        entrypoint: n,
                        searchQuery: a,
                        setSearchQuery: o
                    })
                })
            }),
            (0, l.jsx)(r.Mi4, {
                id: u.gc.LIST,
                children: (0, l.jsx)('div', {
                    className: v.slideContent,
                    style: x,
                    children:
                        null != j &&
                        (0, l.jsx)(m.Z, {
                            context: t,
                            entrypoint: n,
                            title: j.title,
                            look: j.look,
                            items: j.items,
                            sectionName: j.sectionName,
                            sectionOverallPosition: j.sectionOverallPosition
                        })
                })
            }),
            (0, l.jsx)(r.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, l.jsx)('div', {
                    className: v.slideContent,
                    style: x,
                    children:
                        null != N &&
                        (0, l.jsx)(d.Z, {
                            context: t,
                            application: N.application,
                            sectionName: N.sectionName
                        })
                })
            })
        ]
    });
}
