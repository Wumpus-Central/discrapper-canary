n.d(t, {
    B$: () => _,
    l7: () => p,
    p: () => h,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(603113),
    o = n(6383),
    s = n(393238),
    l = n(743294);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = i.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: i.createRef(),
        collapsedContentRef: i.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: null,
        mountPoints: new Map(),
    }),
    p = i.forwardRef(function (e, t) {
        var n;
        let { children: l, id: c, inState: u, isTextTransition: d = !1 } = e,
            {
                recalculateAnimationPositions: f,
                registerComponent: p,
                unregisterComponent: h,
                expansionSpring: m,
                mountPoints: g,
            } = i.useContext(_),
            E = i.useRef(null),
            b = i.useRef(null),
            y = i.useRef(void 0);
        i.useEffect(() => {
            f();
        }, [f]),
            i.useLayoutEffect(() => {
                let e = E.current;
                return (
                    null != e && p(e, c, u),
                    () => {
                        null != e && h(c, u);
                    }
                );
            }, [c, u, p, h]);
        let O = i.useCallback(
            (e) => {
                let { height: t } = e;
                y.current !== t && (f(), (y.current = t));
            },
            [f],
        );
        (0, s.PM)(E, O);
        let v = null == (n = g.get(c)) ? void 0 : n.current,
            I = null;
        return (
            null == v
                ? (I = null)
                : d && null != m
                  ? (I = (0, r.jsxs)(r.Fragment, {
                        children: [
                            "collapsed" === u &&
                                (0, a.createPortal)(
                                    (0, r.jsx)(o.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: m.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                        },
                                        children: l(b),
                                    }),
                                    v,
                                ),
                            "expanded" === u &&
                                (0, a.createPortal)(
                                    (0, r.jsx)(o.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: m.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        },
                                        children: l(b),
                                    }),
                                    v,
                                ),
                        ],
                    }))
                  : "collapsed" === u && (I = (0, a.createPortal)(l(b), v)),
            (0, r.jsxs)("div", {
                style: { opacity: +((null == I && "collapsed" === u) || null == v) },
                ref: t,
                children: [l(E), I],
            })
        );
    }),
    h = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: a, expansionSpring: o } = e,
            [s, c] = i.useState({}),
            [d, p] = i.useState([]),
            [h, m] = i.useState(() => new Map()),
            g = i.useCallback((e, t, n) => {
                c((r) => {
                    var i;
                    let a =
                        null != (i = r[t])
                            ? i
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return f(u({}, r), { [t]: f(u({}, a), { [n]: e }) });
                }),
                    m((e) => {
                        let n = new Map(e);
                        return n.set(t, i.createRef()), n;
                    });
            }, []),
            E = i.useCallback((e, t) => {
                let n = !1;
                c((r) => {
                    var i;
                    let a =
                        null != (i = r[e])
                            ? i
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return (a[t] = null), (n = null == a.expanded && null == a.collapsed), f(u({}, r), { [e]: a });
                }),
                    n &&
                        m((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            b = i.useCallback(() => {
                let e = [];
                for (let t in s) {
                    if (null == s[t] || null == n.current || null == a.current) continue;
                    let r = s[t].collapsed,
                        i = s[t].expanded;
                    if (null == r || null == i) continue;
                    let o = i.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        u = r.getBoundingClientRect(),
                        d = a.current.getBoundingClientRect(),
                        f = o.top - c.top + l.Li,
                        _ = u.top - d.top,
                        p = o.left - c.left + l.Li,
                        h = u.left - d.left,
                        m = -o.right + c.right + l.Li,
                        g = -u.right + d.right;
                    e.push({
                        id: t,
                        collapsedLeft: h,
                        expandedLeft: p,
                        collapsedRight: g,
                        expandedRight: m,
                        collapsedTop: _,
                        expandedTop: f,
                        width: o.width,
                    });
                }
                p(e);
            }, [s, n, a, p]);
        return (0, r.jsx)(_.Provider, {
            value: {
                registerComponent: g,
                unregisterComponent: E,
                animatedComponents: s,
                expandedContentRef: n,
                collapsedContentRef: a,
                recalculateAnimationPositions: b,
                animatedComponentProps: d,
                expansionSpring: o,
                mountPoints: h,
            },
            children: t,
        });
    };
