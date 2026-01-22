n.d(t, {
    A: () => S,
}),
    n(896048),
    n(775443);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(58149),
    l = n(688810),
    c = n(989837),
    u = n(485878),
    d = n(602814),
    f = n(779309),
    p = n(198016),
    _ = n(60809),
    h = n(652215),
    m = n(732679);

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
        width: 500,
        height: _.$V,
    },
    A = {
        height: _.$V,
    };

function v(e, t) {
    let { context: n, entrypoint: a, initHistory: u } = e,
        { analyticsLocations: d } = (0, l.Ay)(s.A.APP_LAUNCHER);
    return (
        i.useEffect(() => {
            (0, o.zV)(h.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                source: a,
                location: "app_launcher",
            });
        }, [a]),
        i.useEffect(() => {
            let e = Date.now();
            return () => {
                (0, o.zV)(h.HAw.APP_LAUNCHER_CLOSED, {
                    reason: c.A.closeReason(),
                    time_spent: Date.now() - e,
                    source: a,
                });
            };
        }, [a]),
        (0, r.jsx)("div", {
            className: m.jP,
            ref: t,
            style: O,
            children: (0, r.jsx)("div", {
                className: m.FG,
                children: (0, r.jsx)(l.f5, {
                    value: d,
                    children: (0, r.jsx)(I, {
                        initHistory: u,
                        children: (0, r.jsx)(T, {
                            context: n,
                            entrypoint: a,
                        }),
                    }),
                }),
            }),
        })
    );
}
let S = i.memo(i.forwardRef(v));

function I(e) {
    let { initHistory: t, children: n } = e,
        [a, s] = i.useState(
            null != t
                ? t
                : [
                      {
                          type: u.Wy.HOME,
                      },
                  ],
        ),
        [o, l] = i.useState({}),
        c = a[a.length - 1],
        [d, f] = i.useState(!1),
        p = i.useCallback((e) => {
            s((t) => [...t, e]);
        }, []),
        _ = i.useCallback(() => {
            let e = null;
            s((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                l((t) =>
                    null == e
                        ? t
                        : y(E({}, t), {
                              [e.type]: e,
                          }),
                );
        }, []),
        h = i.useCallback(
            (e) => {
                var t;
                return null != (t = a.findLast((t) => t.type === e)) ? t : o[e];
            },
            [a, o],
        );
    return (0, r.jsx)(u.L8.Provider, {
        value: {
            history: a,
            discard: o,
            currentView: c,
            pushHistory: p,
            goBack: _,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: f,
        },
        children: n,
    });
}

function T(e) {
    let { context: t, entrypoint: n } = e,
        [s, o] = i.useState(""),
        { setScroller: l, isCloseToBottom: c } = C(s),
        { currentView: _, getMostRecentHistoryItemByType: h, setSlideReady: g } = (0, u.uM)();
    i.useEffect(() => {
        g(!1);
    }, [null == _ ? void 0 : _.type, g]);
    let E = i.useCallback(() => {
        g(!0);
    }, [g]);
    if (null == _) return null;
    let b = h(u.Wy.LIST),
        y = h(u.Wy.APPLICATION);
    return (0, r.jsxs)(a.tN_, {
        activeSlide: _.type,
        width: 500,
        onSlideReady: E,
        children: [
            (0, r.jsx)(a.q7S, {
                id: u.Wy.HOME,
                children: (0, r.jsx)("div", {
                    className: m.xD,
                    style: A,
                    children: (0, r.jsx)(f.A, {
                        isScrollCloseToBottom: c,
                        setScroller: l,
                        context: t,
                        entrypoint: n,
                        searchQuery: s,
                        setSearchQuery: o,
                    }),
                }),
            }),
            (0, r.jsx)(a.q7S, {
                id: u.Wy.LIST,
                children: (0, r.jsx)("div", {
                    className: m.xD,
                    style: A,
                    children:
                        null != b &&
                        (0, r.jsx)(p.A, {
                            context: t,
                            entrypoint: n,
                            title: b.title,
                            look: b.look,
                            items: b.items,
                            sectionName: b.sectionName,
                            sectionOverallPosition: b.sectionOverallPosition,
                        }),
                }),
            }),
            (0, r.jsx)(a.q7S, {
                id: u.Wy.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: m.xD,
                    style: A,
                    children:
                        null != y &&
                        (0, r.jsx)(d.A, {
                            context: t,
                            application: y.application,
                            sectionName: y.sectionName,
                        }),
                }),
            }),
        ],
    });
}

function C(e) {
    let [t, n] = i.useState(null),
        [r, a] = i.useState(!1),
        s = i.useRef(0);
    return (
        i.useEffect(() => {
            null == t || t.scrollTo(0, 0);
        }, [t, e]),
        i.useEffect(() => {
            if (null != t)
                return (
                    t.scrollTo(0, s.current),
                    t.addEventListener("scroll", e),
                    () => {
                        t.removeEventListener("scroll", e, !1);
                    }
                );

            function e() {
                null == t || ((s.current = t.scrollTop), a(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340));
            }
        }, [t]),
        {
            setScroller: n,
            isCloseToBottom: r,
        }
    );
}
