n.d(t, {
    JC: () => m,
    iQ: () => p,
    xo: () => u,
}),
    n(388685),
    n(539854);
var a = n(54381),
    r = n(473749),
    i = n(24156),
    l = n(205120),
    s = n(393238),
    o = n(945165);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = r.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: r.createRef(),
        collapsedContentRef: r.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: null,
        mountPoints: new Map(),
    }),
    m = r.forwardRef(function (e, t) {
        var n;
        let { children: o, id: c, inState: d, isTextTransition: m = !1 } = e,
            {
                recalculateAnimationPositions: p,
                registerComponent: h,
                unregisterComponent: x,
                expansionSpring: f,
                mountPoints: g,
            } = r.useContext(u),
            b = r.useRef(null),
            v = r.useRef(null),
            j = r.useRef(void 0);
        r.useEffect(() => {
            p();
        }, [p]),
            r.useLayoutEffect(() => {
                let e = b.current;
                return (
                    null != e && h(e, c, d),
                    () => {
                        null != e && x(c, d);
                    }
                );
            }, [c, d, h, x]);
        let _ = r.useCallback(
            (e) => {
                let { height: t } = e;
                j.current !== t && (p(), (j.current = t));
            },
            [p],
        );
        (0, s.PM)(b, _);
        let y = null == (n = g.get(c)) ? void 0 : n.current,
            C = null;
        return (
            null == y
                ? (C = null)
                : m && null != f
                  ? (C = (0, a.jsxs)(a.Fragment, {
                        children: [
                            "collapsed" === d &&
                                (0, i.createPortal)(
                                    (0, a.jsx)(l.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: f.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                        },
                                        children: o(v),
                                    }),
                                    y,
                                ),
                            "expanded" === d &&
                                (0, i.createPortal)(
                                    (0, a.jsx)(l.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: f.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        },
                                        children: o(v),
                                    }),
                                    y,
                                ),
                        ],
                    }))
                  : "collapsed" === d && (C = (0, i.createPortal)(o(v), y)),
            (0, a.jsxs)("div", {
                style: { opacity: +((null == C && "collapsed" === d) || null == y) },
                ref: t,
                children: [o(b), C],
            })
        );
    }),
    p = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: i, expansionSpring: l } = e,
            [s, m] = r.useState({}),
            [p, h] = r.useState([]),
            [x, f] = r.useState(() => new Map()),
            g = r.useCallback((e, t, n) => {
                m((a) => {
                    var r;
                    let i =
                        null != (r = a[t])
                            ? r
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return d(c({}, a), { [t]: d(c({}, i), { [n]: e }) });
                }),
                    f((e) => {
                        let n = new Map(e);
                        return n.set(t, r.createRef()), n;
                    });
            }, []),
            b = r.useCallback((e, t) => {
                let n = !1;
                m((a) => {
                    var r;
                    let i =
                        null != (r = a[e])
                            ? r
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return (i[t] = null), (n = null == i.expanded && null == i.collapsed), d(c({}, a), { [e]: i });
                }),
                    n &&
                        f((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            v = r.useCallback(() => {
                let e = [];
                for (let t in s) {
                    if (null == s[t] || null == n.current || null == i.current) continue;
                    let a = s[t].collapsed,
                        r = s[t].expanded;
                    if (null == a || null == r) continue;
                    let l = r.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        d = a.getBoundingClientRect(),
                        u = i.current.getBoundingClientRect(),
                        m = l.top - c.top + o.jK,
                        p = d.top - u.top,
                        h = l.left - c.left + o.jK,
                        x = d.left - u.left,
                        f = -l.right + c.right + o.jK,
                        g = -d.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: x,
                        expandedLeft: h,
                        collapsedRight: g,
                        expandedRight: f,
                        collapsedTop: p,
                        expandedTop: m,
                        width: l.width,
                    });
                }
                h(e);
            }, [s, n, i, h]);
        return (0, a.jsx)(u.Provider, {
            value: {
                registerComponent: g,
                unregisterComponent: b,
                animatedComponents: s,
                expandedContentRef: n,
                collapsedContentRef: i,
                recalculateAnimationPositions: v,
                animatedComponentProps: p,
                expansionSpring: l,
                mountPoints: x,
            },
            children: t,
        });
    };
