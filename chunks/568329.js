n.d(t, {
    PW: () => d,
    dN: () => u,
    oK: () => m,
}),
    n(896048),
    n(321073);
var a = n(627968),
    l = n(64700),
    r = n(340287),
    i = n(353709),
    s = n(765671);

function o(e) {
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

function c(e, t) {
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
n(272111);
let d = l.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: l.createRef(),
        collapsedContentRef: l.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new i.SpringValue(0),
        mountPoints: new Map(),
    }),
    u = l.forwardRef(function (e, t) {
        var n;
        let { children: o, id: c, inState: u, isTextTransition: m = !1 } = e,
            {
                recalculateAnimationPositions: p,
                registerComponent: h,
                unregisterComponent: x,
                expansionSpring: g,
                mountPoints: f,
            } = l.useContext(d),
            b = l.useRef(null),
            v = l.useRef(null),
            j = l.useRef(void 0);
        l.useEffect(() => {
            p();
        }, [p]),
            l.useLayoutEffect(() => {
                let e = b.current;
                return (
                    null != e && h(e, c, u),
                    () => {
                        null != e && x(c, u);
                    }
                );
            }, [c, u, h, x]);
        let _ = l.useCallback(
            (e) => {
                let { height: t } = e;
                j.current !== t && (p(), (j.current = t));
            },
            [p],
        );
        (0, s.i4)(b, _);
        let y = null == (n = f.get(c)) ? void 0 : n.current,
            A = null;
        return (
            null == y
                ? (A = null)
                : m && null != g
                  ? (A = (0, a.jsxs)(a.Fragment, {
                        children: [
                            "collapsed" === u &&
                                (0, r.createPortal)(
                                    (0, a.jsx)(i.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                        },
                                        children: o(v),
                                    }),
                                    y,
                                ),
                            "expanded" === u &&
                                (0, r.createPortal)(
                                    (0, a.jsx)(i.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: g.to({
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
                  : "collapsed" === u && (A = (0, r.createPortal)(o(v), y)),
            (0, a.jsxs)("div", {
                style: {
                    opacity: +((null == A && "collapsed" === u) || null == y),
                },
                ref: t,
                children: [o(b), A],
            })
        );
    }),
    m = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: r, expansionSpring: i } = e,
            [s, u] = l.useState({}),
            [m, p] = l.useState([]),
            [h, x] = l.useState(() => new Map()),
            g = l.useCallback((e, t, n) => {
                u((a) => {
                    var l;
                    let r =
                        null != (l = a[t])
                            ? l
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return c(o({}, a), {
                        [t]: c(o({}, r), {
                            [n]: e,
                        }),
                    });
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, l.createRef()), n;
                    });
            }, []),
            f = l.useCallback((e, t) => {
                let n = !1;
                u((a) => {
                    var l;
                    let r =
                        null != (l = a[e])
                            ? l
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return (
                        (r[t] = null),
                        (n = null == r.expanded && null == r.collapsed),
                        c(o({}, a), {
                            [e]: r,
                        })
                    );
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            b = l.useCallback(() => {
                let e = [];
                for (let t in s) {
                    if (null == s[t] || null == n.current || null == r.current) continue;
                    let a = s[t].collapsed,
                        l = s[t].expanded;
                    if (null == a || null == l) continue;
                    let i = l.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        c = a.getBoundingClientRect(),
                        d = r.current.getBoundingClientRect(),
                        u = i.top - o.top + 12,
                        m = c.top - d.top,
                        p = i.left - o.left + 12,
                        h = c.left - d.left,
                        x = -i.right + o.right + 12,
                        g = -c.right + d.right;
                    e.push({
                        id: t,
                        collapsedLeft: h,
                        expandedLeft: p,
                        collapsedRight: g,
                        expandedRight: x,
                        collapsedTop: m,
                        expandedTop: u,
                        width: i.width,
                    });
                }
                p(e);
            }, [s, n, r, p]);
        return (0, a.jsx)(d.Provider, {
            value: {
                registerComponent: g,
                unregisterComponent: f,
                animatedComponents: s,
                expandedContentRef: n,
                collapsedContentRef: r,
                recalculateAnimationPositions: b,
                animatedComponentProps: m,
                expansionSpring: i,
                mountPoints: h,
            },
            children: t,
        });
    };
