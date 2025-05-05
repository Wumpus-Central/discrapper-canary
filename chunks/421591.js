n.d(t, { Z: () => x }), n(388685), n(482853);
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(100527),
    a = n(367907),
    s = n(906732),
    c = n(541099),
    u = n(695676),
    d = n(176412),
    p = n(173790),
    m = n(692656),
    f = n(684256),
    h = n(314734),
    b = n(981631),
    _ = n(899429);
let y = {
        width: h.Gy,
        height: (0, d.DK)()
    },
    v = { height: (0, d.DK)() },
    x = r.memo(
        r.forwardRef(function (e, t) {
            let { context: n, entrypoint: l, initHistory: u } = e,
                { analyticsLocations: d } = (0, s.ZP)(o.Z.APP_LAUNCHER);
            return (
                r.useEffect(() => {
                    (0, a.yw)(b.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: l,
                        location: 'app_launcher'
                    });
                }, [l]),
                r.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, a.yw)(b.rMx.APP_LAUNCHER_CLOSED, {
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: l
                        });
                    };
                }, [l]),
                (0, i.jsx)('div', {
                    className: _.drawerSizingWrapper,
                    ref: t,
                    style: y,
                    children: (0, i.jsx)('div', {
                        className: _.contentWrapper,
                        children: (0, i.jsx)(s.Gt, {
                            value: d,
                            children: (0, i.jsx)(C, {
                                initHistory: u,
                                children: (0, i.jsx)(g, {
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
function C(e) {
    let { initHistory: t, children: n } = e,
        [l, o] = r.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [a, s] = r.useState({}),
        c = l[l.length - 1],
        [d, p] = r.useState(!1),
        m = r.useCallback((e) => {
            o((t) => [...t, e]);
        }, []),
        f = r.useCallback(() => {
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
        h = r.useCallback(
            (e) => {
                var t;
                return null != (t = l.findLast((t) => t.type === e)) ? t : a[e];
            },
            [l, a]
        );
    return (0, i.jsx)(u.uX.Provider, {
        value: {
            history: l,
            discard: a,
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
function g(e) {
    let { context: t, entrypoint: n } = e,
        [o, a] = r.useState(''),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [t, n] = r.useState(null),
                [i, l] = r.useState(!1),
                o = r.useRef(0);
            return (
                r.useEffect(() => {
                    null == t || t.scrollTo(0, 0);
                }, [t, e]),
                r.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, o.current),
                            t.addEventListener('scroll', e),
                            () => {
                                t.removeEventListener('scroll', e, !1);
                            }
                        );
                    function e() {
                        null != t && ((o.current = t.scrollTop), l(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * (0, d.cr)()));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: i
                }
            );
        })(o),
        { currentView: b, getMostRecentHistoryItemByType: y, setSlideReady: x } = (0, u.hH)();
    r.useEffect(() => {
        x(!1);
    }, [null == b ? void 0 : b.type, x]);
    let C = r.useCallback(() => {
        x(!0);
    }, [x]);
    if (null == b) return null;
    let g = y(u.gc.LIST),
        j = y(u.gc.APPLICATION);
    return (0, i.jsxs)(l.MyZ, {
        activeSlide: b.type,
        width: h.Gy,
        onSlideReady: C,
        children: [
            (0, i.jsx)(l.Mi4, {
                id: u.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: _.slideContent,
                    style: v,
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
            (0, i.jsx)(l.Mi4, {
                id: u.gc.LIST,
                children: (0, i.jsx)('div', {
                    className: _.slideContent,
                    style: v,
                    children:
                        null != g &&
                        (0, i.jsx)(f.Z, {
                            context: t,
                            entrypoint: n,
                            title: g.title,
                            look: g.look,
                            items: g.items,
                            sectionName: g.sectionName,
                            sectionOverallPosition: g.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(l.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: _.slideContent,
                    style: v,
                    children:
                        null != j &&
                        (0, i.jsx)(p.Z, {
                            context: t,
                            application: j.application,
                            sectionName: j.sectionName,
                            showFriendsTab: !!j.showFriendsTab
                        })
                })
            })
        ]
    });
}
