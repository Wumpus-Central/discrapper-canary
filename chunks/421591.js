n.d(t, { Z: () => x }), n(388685), n(482853);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(100527),
    a = n(367907),
    s = n(906732),
    c = n(541099),
    u = n(695676),
    d = n(173790),
    p = n(692656),
    m = n(684256),
    f = n(314734),
    h = n(981631),
    b = n(899429);
let _ = {
        width: f.Gy,
        height: f.lv
    },
    y = { height: f.lv },
    x = r.memo(
        r.forwardRef(function (e, t) {
            let { context: n, entrypoint: l, initHistory: u } = e,
                { analyticsLocations: d } = (0, s.ZP)(o.Z.APP_LAUNCHER);
            return (
                r.useEffect(() => {
                    (0, a.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: l,
                        location: 'app_launcher'
                    });
                }, [l]),
                r.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, a.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: l
                        });
                    };
                }, [l]),
                (0, i.jsx)('div', {
                    className: b.drawerSizingWrapper,
                    ref: t,
                    style: _,
                    children: (0, i.jsx)('div', {
                        className: b.contentWrapper,
                        children: (0, i.jsx)(s.Gt, {
                            value: d,
                            children: (0, i.jsx)(C, {
                                initHistory: u,
                                children: (0, i.jsx)(v, {
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
function v(e) {
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
                        null != t && ((o.current = t.scrollTop), l(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * f.K7));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: i
                }
            );
        })(o),
        { currentView: h, getMostRecentHistoryItemByType: _, setSlideReady: x } = (0, u.hH)();
    r.useEffect(() => {
        x(!1);
    }, [null == h ? void 0 : h.type, x]);
    let C = r.useCallback(() => {
        x(!0);
    }, [x]);
    if (null == h) return null;
    let v = _(u.gc.LIST),
        g = _(u.gc.APPLICATION);
    return (0, i.jsxs)(l.MyZ, {
        activeSlide: h.type,
        width: f.Gy,
        onSlideReady: C,
        children: [
            (0, i.jsx)(l.Mi4, {
                id: u.gc.HOME,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: y,
                    children: (0, i.jsx)(p.Z, {
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
                    className: b.slideContent,
                    style: y,
                    children:
                        null != v &&
                        (0, i.jsx)(m.Z, {
                            context: t,
                            entrypoint: n,
                            title: v.title,
                            look: v.look,
                            items: v.items,
                            sectionName: v.sectionName,
                            sectionOverallPosition: v.sectionOverallPosition
                        })
                })
            }),
            (0, i.jsx)(l.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)('div', {
                    className: b.slideContent,
                    style: y,
                    children:
                        null != g &&
                        (0, i.jsx)(d.Z, {
                            context: t,
                            application: g.application,
                            sectionName: g.sectionName,
                            showFriendsTab: !!g.showFriendsTab
                        })
                })
            })
        ]
    });
}
