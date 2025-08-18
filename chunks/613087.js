n.d(t, {
    B$: () => u,
    l7: () => p,
    p: () => m,
}),
    n(388685),
    n(539854);
var r = n(951288),
    s = n(647438),
    o = n(603113),
    a = n(815061),
    i = n(393238),
    l = n(743294);
function c(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = s.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: s.createRef(),
        collapsedContentRef: s.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: null,
        mountPoints: new Map(),
    }),
    p = s.forwardRef(function (e, t) {
        var n;
        let { children: l, id: c, inState: d, isTextTransition: p = !1 } = e,
            {
                recalculateAnimationPositions: m,
                registerComponent: f,
                unregisterComponent: g,
                expansionSpring: x,
                mountPoints: h,
            } = s.useContext(u),
            b = s.useRef(null),
            _ = s.useRef(null),
            j = s.useRef(void 0);
        s.useEffect(() => {
            m();
        }, [m]),
            s.useLayoutEffect(() => {
                let e = b.current;
                return (
                    null != e && f(e, c, d),
                    () => {
                        null != e && g(c, d);
                    }
                );
            }, [c, d, f, g]);
        let v = s.useCallback(
            (e) => {
                let { height: t } = e;
                j.current !== t && (m(), (j.current = t));
            },
            [m],
        );
        (0, i.PM)(b, v);
        let C = null == (n = h.get(c)) ? void 0 : n.current,
            y = null;
        return (
            null == C
                ? (y = null)
                : p && null != x
                  ? (y = (0, r.jsxs)(r.Fragment, {
                        children: [
                            "collapsed" === d &&
                                (0, o.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                        },
                                        children: l(_),
                                    }),
                                    C,
                                ),
                            "expanded" === d &&
                                (0, o.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        },
                                        children: l(_),
                                    }),
                                    C,
                                ),
                        ],
                    }))
                  : "collapsed" === d && (y = (0, o.createPortal)(l(_), C)),
            (0, r.jsxs)("div", {
                style: { opacity: +((null == y && "collapsed" === d) || null == C) },
                ref: t,
                children: [l(b), y],
            })
        );
    }),
    m = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: o, expansionSpring: a } = e,
            [i, p] = s.useState({}),
            [m, f] = s.useState([]),
            [g, x] = s.useState(() => new Map()),
            h = s.useCallback((e, t, n) => {
                p((r) => {
                    var s;
                    let o =
                        null != (s = r[t])
                            ? s
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return d(c({}, r), { [t]: d(c({}, o), { [n]: e }) });
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            b = s.useCallback((e, t) => {
                let n = !1;
                p((r) => {
                    var s;
                    let o =
                        null != (s = r[e])
                            ? s
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return (o[t] = null), (n = null == o.expanded && null == o.collapsed), d(c({}, r), { [e]: o });
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            _ = s.useCallback(() => {
                let e = [];
                for (let t in i) {
                    if (null == i[t] || null == n.current || null == o.current) continue;
                    let r = i[t].collapsed,
                        s = i[t].expanded;
                    if (null == r || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        d = r.getBoundingClientRect(),
                        u = o.current.getBoundingClientRect(),
                        p = a.top - c.top + l.Li,
                        m = d.top - u.top,
                        f = a.left - c.left + l.Li,
                        g = d.left - u.left,
                        x = -a.right + c.right + l.Li,
                        h = -d.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: g,
                        expandedLeft: f,
                        collapsedRight: h,
                        expandedRight: x,
                        collapsedTop: m,
                        expandedTop: p,
                        width: a.width,
                    });
                }
                f(e);
            }, [i, n, o, f]);
        return (0, r.jsx)(u.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: b,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: o,
                recalculateAnimationPositions: _,
                animatedComponentProps: m,
                expansionSpring: a,
                mountPoints: g,
            },
            children: t,
        });
    };
