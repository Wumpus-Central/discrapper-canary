n.d(t, { Z: () => T }), n(388685), n(482853);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(100527),
    s = n(367907),
    l = n(906732),
    c = n(541099),
    u = n(695676),
    d = n(173790),
    f = n(692656),
    _ = n(684256),
    p = n(314734),
    h = n(981631),
    m = n(899429);
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
        width: p.Gy,
        height: p.lv,
    },
    v = { height: p.lv };
function I(e, t) {
    let { context: n, entrypoint: o, initHistory: u } = e,
        { analyticsLocations: d } = (0, l.ZP)(a.Z.APP_LAUNCHER);
    return (
        i.useEffect(() => {
            (0, s.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                source: o,
                location: "app_launcher",
            });
        }, [o]),
        i.useEffect(() => {
            let e = Date.now();
            return () => {
                (0, s.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
                    reason: c.Z.closeReason(),
                    time_spent: Date.now() - e,
                    source: o,
                });
            };
        }, [o]),
        (0, r.jsx)("div", {
            className: m.drawerSizingWrapper,
            ref: t,
            style: O,
            children: (0, r.jsx)("div", {
                className: m.contentWrapper,
                children: (0, r.jsx)(l.Gt, {
                    value: d,
                    children: (0, r.jsx)(S, {
                        initHistory: u,
                        children: (0, r.jsx)(A, {
                            context: n,
                            entrypoint: o,
                        }),
                    }),
                }),
            }),
        })
    );
}
let T = i.memo(i.forwardRef(I));
function S(e) {
    let { initHistory: t, children: n } = e,
        [o, a] = i.useState(null != t ? t : [{ type: u.gc.HOME }]),
        [s, l] = i.useState({}),
        c = o[o.length - 1],
        [d, f] = i.useState(!1),
        _ = i.useCallback((e) => {
            a((t) => [...t, e]);
        }, []),
        p = i.useCallback(() => {
            let e = null;
            a((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                l((t) => (null == e ? t : y(E({}, t), { [e.type]: e })));
        }, []),
        h = i.useCallback(
            (e) => {
                var t;
                return null != (t = o.findLast((t) => t.type === e)) ? t : s[e];
            },
            [o, s],
        );
    return (0, r.jsx)(u.uX.Provider, {
        value: {
            history: o,
            discard: s,
            currentView: c,
            pushHistory: _,
            goBack: p,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: f,
        },
        children: n,
    });
}
function A(e) {
    let { context: t, entrypoint: n } = e,
        [a, s] = i.useState(""),
        { setScroller: l, isCloseToBottom: c } = N(a),
        { currentView: h, getMostRecentHistoryItemByType: g, setSlideReady: E } = (0, u.hH)();
    i.useEffect(() => {
        E(!1);
    }, [null == h ? void 0 : h.type, E]);
    let b = i.useCallback(() => {
        E(!0);
    }, [E]);
    if (null == h) return null;
    let y = g(u.gc.LIST),
        O = g(u.gc.APPLICATION);
    return (0, r.jsxs)(o.MyZ, {
        activeSlide: h.type,
        width: p.Gy,
        onSlideReady: b,
        children: [
            (0, r.jsx)(o.Mi4, {
                id: u.gc.HOME,
                children: (0, r.jsx)("div", {
                    className: m.slideContent,
                    style: v,
                    children: (0, r.jsx)(f.Z, {
                        isScrollCloseToBottom: c,
                        setScroller: l,
                        context: t,
                        entrypoint: n,
                        searchQuery: a,
                        setSearchQuery: s,
                    }),
                }),
            }),
            (0, r.jsx)(o.Mi4, {
                id: u.gc.LIST,
                children: (0, r.jsx)("div", {
                    className: m.slideContent,
                    style: v,
                    children:
                        null != y &&
                        (0, r.jsx)(_.Z, {
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
            (0, r.jsx)(o.Mi4, {
                id: u.gc.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: m.slideContent,
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
function N(e) {
    let [t, n] = i.useState(null),
        [r, o] = i.useState(!1),
        a = i.useRef(0);
    return (
        i.useEffect(() => {
            null == t || t.scrollTo(0, 0);
        }, [t, e]),
        i.useEffect(() => {
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
                    ((a.current = t.scrollTop), o(t.scrollHeight - (t.scrollTop + t.clientHeight) < 0.5 * p.K7));
            }
        }, [t]),
        {
            setScroller: n,
            isCloseToBottom: r,
        }
    );
}
