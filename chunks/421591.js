n.d(t, { Z: () => x }), n(47120), n(852437);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(100527),
    o = n(367907),
    c = n(906732),
    s = n(541099),
    u = n(695676),
    d = n(173790),
    p = n(692656),
    m = n(684256),
    f = n(314734),
    h = n(981631),
    b = n(899429);
let C = {
        width: f.Gy,
        height: f.lv
    },
    _ = { height: f.lv },
    x = r.memo(
        r.forwardRef(function (e, t) {
            let { context: n, entrypoint: l, initHistory: u } = e,
                { analyticsLocations: d } = (0, c.ZP)(a.Z.APP_LAUNCHER);
            return (
                r.useEffect(() => {
                    (0, o.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: l,
                        location: 'app_launcher'
                    });
                }, [l]),
                r.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, o.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
                            reason: s.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: l
                        });
                    };
                }, [l]),
                (0, i.jsx)('div', {
                    className: b.drawerSizingWrapper,
                    ref: t,
                    style: C,
                    children: (0, i.jsx)('div', {
                        className: b.contentWrapper,
                        children: (0, i.jsx)(c.Gt, {
                            value: d,
                            children: (0, i.jsx)(v, {
                                initHistory: u,
                                children: (0, i.jsx)(y, {
                                    context: n,
                                    entrypoint: l
                                })
                            })
                        })
                    })
                })
            );
        })
    );
function v(e) {
    let { initHistory: t, children: n } = e,
        [l, a] = r.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [o, c] = r.useState({}),
        s = l[l.length - 1],
        [d, p] = r.useState(!1),
        m = r.useCallback((e) => {
            a((t) => [...t, e]);
        }, []),
        f = r.useCallback(() => {
            let e = null;
            a((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                c((t) => {
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
        h = r.useCallback(
            (e) => {
                var t;
                return null != (t = l.findLast((t) => t.type === e)) ? t : o[e];
            },
            [l, o]
        );
    return (0, i.jsx)(u.uX.Provider, {
        value: {
            history: l,
            discard: o,
            currentView: s,
            pushHistory: m,
            goBack: f,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: p
        },
        children: n
    });
}
function y(e) {
    let { context: t, entrypoint: n } = e,
        [a, o] = r.useState(''),
        { setScroller: c, isCloseToBottom: s } = (function (e) {
            let [t, n] = r.useState(null),
                [i, l] = r.useState(!1),
                a = r.useRef(0);
            return (
                r.useEffect(() => {
                    null == t || t.scrollTo(0, 0);
                }, [t, e]),
                r.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, a.current),
                            t.addEventListener('scroll', e),
                            () => {
                                t.removeEventListener('scroll', e, !1);
                            }
                        );
                    function e() {
                        null != t && ((a.current = t.scrollTop), l(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * f.K7));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: i
                }
            );
        })(a),
        { currentView: h, getMostRecentHistoryItemByType: C, setSlideReady: x } = (0, u.hH)();
    r.useEffect(() => {
        x(!1);
    }, [null == h ? void 0 : h.type, x]);
    let v = r.useCallback(() => {
        x(!0);
    }, [x]);
    if (null == h) return null;
    let y = C(u.gc.LIST),
        N = C(u.gc.APPLICATION);
    return (0, i.jsxs)(l.MyZ, {
        activeSlide: h.type,
        width: f.Gy,
        onSlideReady: v,
        children: [
            (0, i.jsx)(l.Mi4, {
                id: u.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: _,
                    children: (0, i.jsx)(p.Z, {
                        isScrollCloseToBottom: s,
                        setScroller: c,
                        context: t,
                        entrypoint: n,
                        searchQuery: a,
                        setSearchQuery: o
                    })
                })
            }),
            (0, i.jsx)(l.Mi4, {
                id: u.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: _,
                    children:
                        null != y &&
                        (0, i.jsx)(m.Z, {
                            context: t,
                            entrypoint: n,
                            title: y.title,
                            look: y.look,
                            items: y.items,
                            sectionName: y.sectionName,
                            sectionOverallPosition: y.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(l.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: _,
                    children:
                        null != N &&
                        (0, i.jsx)(d.Z, {
                            context: t,
                            application: N.application,
                            sectionName: N.sectionName
                        })
                })
            })
        ]
    });
}
