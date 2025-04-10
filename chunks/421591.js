n.d(t, { Z: () => _ }), n(388685), n(482853);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(100527),
    o = n(367907),
    s = n(906732),
    c = n(541099),
    d = n(695676),
    u = n(173790),
    p = n(692656),
    m = n(684256),
    f = n(314734),
    h = n(981631),
    b = n(899429);
let x = {
        width: f.Gy,
        height: f.lv
    },
    C = { height: f.lv },
    _ = r.memo(
        r.forwardRef(function (e, t) {
            let { context: n, entrypoint: l, initHistory: d } = e,
                { analyticsLocations: u } = (0, s.ZP)(a.Z.APP_LAUNCHER);
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
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: l
                        });
                    };
                }, [l]),
                (0, i.jsx)('div', {
                    className: b.drawerSizingWrapper,
                    ref: t,
                    style: x,
                    children: (0, i.jsx)('div', {
                        className: b.contentWrapper,
                        children: (0, i.jsx)(s.Gt, {
                            value: u,
                            children: (0, i.jsx)(v, {
                                initHistory: d,
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
        [l, a] = r.useState(null != t ? t : [{ type: d.gc.HOME }]),
        [o, s] = r.useState({}),
        c = l[l.length - 1],
        [u, p] = r.useState(!1),
        m = r.useCallback((e) => {
            a((t) => [...t, e]);
        }, []),
        f = r.useCallback(() => {
            let e = null;
            a((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
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
        h = r.useCallback(
            (e) => {
                var t;
                return null != (t = l.findLast((t) => t.type === e)) ? t : o[e];
            },
            [l, o]
        );
    return (0, i.jsx)(d.uX.Provider, {
        value: {
            history: l,
            discard: o,
            currentView: c,
            pushHistory: m,
            goBack: f,
            getMostRecentHistoryItemByType: h,
            isSlideReady: u,
            setSlideReady: p
        },
        children: n
    });
}
function y(e) {
    let { context: t, entrypoint: n } = e,
        [a, o] = r.useState(''),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
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
        { currentView: h, getMostRecentHistoryItemByType: x, setSlideReady: _ } = (0, d.hH)();
    r.useEffect(() => {
        _(!1);
    }, [null == h ? void 0 : h.type, _]);
    let v = r.useCallback(() => {
        _(!0);
    }, [_]);
    if (null == h) return null;
    let y = x(d.gc.LIST),
        N = x(d.gc.APPLICATION);
    return (0, i.jsxs)(l.MyZ, {
        activeSlide: h.type,
        width: f.Gy,
        onSlideReady: v,
        children: [
            (0, i.jsx)(l.Mi4, {
                id: d.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: C,
                    children: (0, i.jsx)(p.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: s,
                        context: t,
                        entrypoint: n,
                        searchQuery: a,
                        setSearchQuery: o
                    })
                })
            }),
            (0, i.jsx)(l.Mi4, {
                id: d.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: C,
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
                id: d.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: C,
                    children:
                        null != N &&
                        (0, i.jsx)(u.Z, {
                            context: t,
                            application: N.application,
                            sectionName: N.sectionName,
                            showFriendsTab: !!N.showFriendsTab
                        })
                })
            })
        ]
    });
}
