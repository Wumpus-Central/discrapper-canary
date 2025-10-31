n.d(t, { Z: () => x }), n(388685), n(482853);
var i = n(951288),
    l = n(647438),
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
    v = n(487303);
let y = {
        width: f.Gy,
        height: f.lv,
    },
    g = { height: f.lv },
    x = l.memo(
        l.forwardRef(function (e, t) {
            let { context: n, entrypoint: r, initHistory: u } = e,
                { analyticsLocations: d } = (0, s.ZP)(a.Z.APP_LAUNCHER);
            return (
                l.useEffect(() => {
                    (0, o.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                        source: r,
                        location: "app_launcher",
                    });
                }, [r]),
                l.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, o.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
                            reason: c.Z.closeReason(),
                            time_spent: Date.now() - e,
                            source: r,
                        });
                    };
                }, [r]),
                (0, i.jsx)("div", {
                    className: v.drawerSizingWrapper,
                    ref: t,
                    style: y,
                    children: (0, i.jsx)("div", {
                        className: v.contentWrapper,
                        children: (0, i.jsx)(s.Gt, {
                            value: d,
                            children: (0, i.jsx)(b, {
                                initHistory: u,
                                children: (0, i.jsx)(N, {
                                    context: n,
                                    entrypoint: r,
                                }),
                            }),
                        }),
                    }),
                })
            );
        }),
    );
function b(e) {
    let { initHistory: t, children: n } = e,
        [r, a] = l.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [o, s] = l.useState({}),
        c = r[r.length - 1],
        [d, p] = l.useState(!1),
        m = l.useCallback((e) => {
            a((t) => [...t, e]);
        }, []),
        f = l.useCallback(() => {
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
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
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
        h = l.useCallback(
            (e) => {
                var t;
                return null != (t = r.findLast((t) => t.type === e)) ? t : o[e];
            },
            [r, o],
        );
    return (0, i.jsx)(u.uX.Provider, {
        value: {
            history: r,
            discard: o,
            currentView: c,
            pushHistory: m,
            goBack: f,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: p,
        },
        children: n,
    });
}
function N(e) {
    let { context: t, entrypoint: n } = e,
        [a, o] = l.useState(""),
        { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [t, n] = l.useState(null),
                [i, r] = l.useState(!1),
                a = l.useRef(0);
            return (
                l.useEffect(() => {
                    null == t || t.scrollTo(0, 0);
                }, [t, e]),
                l.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, a.current),
                            t.addEventListener("scroll", e),
                            () => {
                                t.removeEventListener("scroll", e, !1);
                            }
                        );
                    function e() {
                        null != t &&
                            ((a.current = t.scrollTop),
                            r(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * f.K7));
                    }
                }, [t]),
                {
                    setScroller: n,
                    isCloseToBottom: i,
                }
            );
        })(a),
        { currentView: h, getMostRecentHistoryItemByType: y, setSlideReady: x } = (0, u.hH)();
    l.useEffect(() => {
        x(!1);
    }, [null == h ? void 0 : h.type, x]);
    let b = l.useCallback(() => {
        x(!0);
    }, [x]);
    if (null == h) return null;
    let N = y(u.gc.LIST),
        j = y(u.gc.APPLICATION);
    return (0, i.jsxs)(r.MyZ, {
        activeSlide: h.type,
        width: f.Gy,
        onSlideReady: b,
        children: [
            (0, i.jsx)(r.Mi4, {
                id: u.gc.HOME,
                children: (0, i.jsx)("div", {
                    className: v.slideContent,
                    style: g,
                    children: (0, i.jsx)(p.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: s,
                        context: t,
                        entrypoint: n,
                        searchQuery: a,
                        setSearchQuery: o,
                    }),
                }),
            }),
            (0, i.jsx)(r.Mi4, {
                id: u.gc.LIST,
                children: (0, i.jsx)("div", {
                    className: v.slideContent,
                    style: g,
                    children:
                        null != N &&
                        (0, i.jsx)(m.Z, {
                            context: t,
                            entrypoint: n,
                            title: N.title,
                            look: N.look,
                            items: N.items,
                            sectionName: N.sectionName,
                            sectionOverallPosition: N.sectionOverallPosition,
                        }),
                }),
            }),
            (0, i.jsx)(r.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, i.jsx)("div", {
                    className: v.slideContent,
                    style: g,
                    children:
                        null != j &&
                        (0, i.jsx)(d.Z, {
                            context: t,
                            application: j.application,
                            sectionName: j.sectionName,
                        }),
                }),
            }),
        ],
    });
}
