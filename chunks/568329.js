n.d(t, {
    PW: () => d,
    dN: () => u,
    oK: () => m,
}),
    n(896048),
    n(321073);
var a = n(627968),
    l = n(64700),
    i = n(340287),
    r = n(108531),
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
        expansionSpring: new r.SpringValue(0),
        mountPoints: new Map(),
    }),
    u = l.forwardRef(function (e, t) {
        var n;
        let { children: o, id: c, inState: u, isTextTransition: m = !1 } = e,
            {
                recalculateAnimationPositions: p,
                registerComponent: h,
                unregisterComponent: f,
                expansionSpring: x,
                mountPoints: b,
            } = l.useContext(d),
            g = l.useRef(null),
            v = l.useRef(null),
            j = l.useRef(void 0);
        l.useEffect(() => {
            p();
        }, [p]),
            l.useLayoutEffect(() => {
                let e = g.current;
                return (
                    null != e && h(e, c, u),
                    () => {
                        null != e && f(c, u);
                    }
                );
            }, [c, u, h, f]);
        let y = l.useCallback(
            (e) => {
                let { height: t } = e;
                j.current !== t && (p(), (j.current = t));
            },
            [p],
        );
        (0, s.i4)(g, y);
        let _ = null == (n = b.get(c)) ? void 0 : n.current,
            A = null;
        return (
            null == _
                ? (A = null)
                : m && null != x
                  ? (A = (0, a.jsxs)(a.Fragment, {
                        children: [
                            "collapsed" === u &&
                                (0, i.createPortal)(
                                    (0, a.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                        },
                                        children: o(v),
                                    }),
                                    _,
                                ),
                            "expanded" === u &&
                                (0, i.createPortal)(
                                    (0, a.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        },
                                        children: o(v),
                                    }),
                                    _,
                                ),
                        ],
                    }))
                  : "collapsed" === u && (A = (0, i.createPortal)(o(v), _)),
            (0, a.jsxs)("div", {
                style: {
                    opacity: +((null == A && "collapsed" === u) || null == _),
                },
                ref: t,
                children: [o(g), A],
            })
        );
    }),
    m = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: i, expansionSpring: r } = e,
            [s, u] = l.useState({}),
            [m, p] = l.useState([]),
            [h, f] = l.useState(() => new Map()),
            x = l.useCallback((e, t, n) => {
                u((a) => {
                    var l;
                    let i =
                        null != (l = a[t])
                            ? l
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return c(o({}, a), {
                        [t]: c(o({}, i), {
                            [n]: e,
                        }),
                    });
                }),
                    f((e) => {
                        let n = new Map(e);
                        return n.set(t, l.createRef()), n;
                    });
            }, []),
            b = l.useCallback((e, t) => {
                let n = !1;
                u((a) => {
                    var l;
                    let i =
                        null != (l = a[e])
                            ? l
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return (
                        (i[t] = null),
                        (n = null == i.expanded && null == i.collapsed),
                        c(o({}, a), {
                            [e]: i,
                        })
                    );
                }),
                    n &&
                        f((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            g = l.useCallback(() => {
                let e = [];
                for (let t in s) {
                    if (null == s[t] || null == n.current || null == i.current) continue;
                    let a = s[t].collapsed,
                        l = s[t].expanded;
                    if (null == a || null == l) continue;
                    let r = l.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        c = a.getBoundingClientRect(),
                        d = i.current.getBoundingClientRect(),
                        u = r.top - o.top + 12,
                        m = c.top - d.top,
                        p = r.left - o.left + 12,
                        h = c.left - d.left,
                        f = -r.right + o.right + 12,
                        x = -c.right + d.right;
                    e.push({
                        id: t,
                        collapsedLeft: h,
                        expandedLeft: p,
                        collapsedRight: x,
                        expandedRight: f,
                        collapsedTop: m,
                        expandedTop: u,
                        width: r.width,
                    });
                }
                p(e);
            }, [s, n, i, p]);
        return (0, a.jsx)(d.Provider, {
            value: {
                registerComponent: x,
                unregisterComponent: b,
                animatedComponents: s,
                expandedContentRef: n,
                collapsedContentRef: i,
                recalculateAnimationPositions: g,
                animatedComponentProps: m,
                expansionSpring: r,
                mountPoints: h,
            },
            children: t,
        });
    };
