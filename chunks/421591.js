n.d(t, { Z: () => I }), n(388685), n(482853);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(367907),
    l = n(906732),
    c = n(541099),
    u = n(695676),
    d = n(173790),
    f = n(692656),
    p = n(684256),
    _ = n(314734),
    m = n(981631),
    h = n(778376);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
        width: _.Gy,
        height: _.lv,
    },
    v = { height: _.lv };
function S(e, t) {
    let { context: n, entrypoint: a, initHistory: u } = e,
        { analyticsLocations: d } = (0, l.ZP)(o.Z.APP_LAUNCHER);
    return (
        i.useEffect(() => {
            (0, s.yw)(m.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                source: a,
                location: "app_launcher",
            });
        }, [a]),
        i.useEffect(() => {
            let e = Date.now();
            return () => {
                (0, s.yw)(m.rMx.APP_LAUNCHER_CLOSED, {
                    reason: c.Z.closeReason(),
                    time_spent: Date.now() - e,
                    source: a,
                });
            };
        }, [a]),
        (0, r.jsx)("div", {
            className: h.drawerSizingWrapper,
            ref: t,
            style: O,
            children: (0, r.jsx)("div", {
                className: h.contentWrapper,
                children: (0, r.jsx)(l.Gt, {
                    value: d,
                    children: (0, r.jsx)(T, {
                        initHistory: u,
                        children: (0, r.jsx)(C, {
                            context: n,
                            entrypoint: a,
                        }),
                    }),
                }),
            }),
        })
    );
}
let I = i.memo(i.forwardRef(S));
function T(e) {
    let { initHistory: t, children: n } = e,
        [a, o] = i.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [s, l] = i.useState({}),
        c = a[a.length - 1],
        [d, f] = i.useState(!1),
        p = i.useCallback((e) => {
            o((t) => [...t, e]);
        }, []),
        _ = i.useCallback(() => {
            let e = null;
            o((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                l((t) => (null == e ? t : y(E({}, t), { [e.type]: e })));
        }, []),
        m = i.useCallback(
            (e) => {
                var t;
                return null != (t = a.findLast((t) => t.type === e)) ? t : s[e];
            },
            [a, s],
        );
    return (0, r.jsx)(u.uX.Provider, {
        value: {
            history: a,
            discard: s,
            currentView: c,
            pushHistory: p,
            goBack: _,
            getMostRecentHistoryItemByType: m,
            isSlideReady: d,
            setSlideReady: f,
        },
        children: n,
    });
}
function C(e) {
    let { context: t, entrypoint: n } = e,
        [o, s] = i.useState(""),
        { setScroller: l, isCloseToBottom: c } = A(o),
        { currentView: m, getMostRecentHistoryItemByType: g, setSlideReady: E } = (0, u.hH)();
    i.useEffect(() => {
        E(!1);
    }, [null == m ? void 0 : m.type, E]);
    let b = i.useCallback(() => {
        E(!0);
    }, [E]);
    if (null == m) return null;
    let y = g(u.gc.LIST),
        O = g(u.gc.APPLICATION);
    return (0, r.jsxs)(a.MyZ, {
        activeSlide: m.type,
        width: _.Gy,
        onSlideReady: b,
        children: [
            (0, r.jsx)(a.Mi4, {
                id: u.gc.HOME,
                children: (0, r.jsx)("div", {
                    className: h.slideContent,
                    style: v,
                    children: (0, r.jsx)(f.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: l,
                        context: t,
                        entrypoint: n,
                        searchQuery: o,
                        setSearchQuery: s,
                    }),
                }),
            }),
            (0, r.jsx)(a.Mi4, {
                id: u.gc.LIST,
                children: (0, r.jsx)("div", {
                    className: h.slideContent,
                    style: v,
                    children:
                        null != y &&
                        (0, r.jsx)(p.Z, {
                            context: t,
                            entrypoint: n,
                            title: y.title,
                            look: y.look,
                            items: y.items,
                            sectionName: y.sectionName,
                            sectionOverallPosition: y.sectionOverallPosition,
                        }),
                }),
            }),
            (0, r.jsx)(a.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: h.slideContent,
                    style: v,
                    children:
                        null != O &&
                        (0, r.jsx)(d.Z, {
                            context: t,
                            application: O.application,
                            sectionName: O.sectionName,
                        }),
                }),
            }),
        ],
    });
}
function A(e) {
    let [t, n] = i.useState(null),
        [r, a] = i.useState(!1),
        o = i.useRef(0);
    return (
        i.useEffect(() => {
            null == t || t.scrollTo(0, 0);
        }, [t, e]),
        i.useEffect(() => {
            if (null != t)
                return (
                    t.scrollTo(0, o.current),
                    t.addEventListener("scroll", e),
                    () => {
                        t.removeEventListener("scroll", e, !1);
                    }
                );
            function e() {
                null != t &&
                    ((o.current = t.scrollTop), a(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * _.K7));
            }
        }, [t]),
        {
            setScroller: n,
            isCloseToBottom: r,
        }
    );
}
