n.d(t, {
    JC: () => p,
    iQ: () => m,
    xo: () => d,
}),
    n(388685),
    n(539854);
var r = n(54381),
    s = n(473749),
    o = n(24156),
    a = n(205120),
    i = n(393238),
    l = n(945165);
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
function u(e, t) {
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
let d = s.createContext({
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
        let { children: l, id: c, inState: u, isTextTransition: p = !1 } = e,
            {
                recalculateAnimationPositions: m,
                registerComponent: f,
                unregisterComponent: g,
                expansionSpring: x,
                mountPoints: h,
            } = s.useContext(d),
            _ = s.useRef(null),
            b = s.useRef(null),
            j = s.useRef(void 0);
        s.useEffect(() => {
            m();
        }, [m]),
            s.useLayoutEffect(() => {
                let e = _.current;
                return (
                    null != e && f(e, c, u),
                    () => {
                        null != e && g(c, u);
                    }
                );
            }, [c, u, f, g]);
        let v = s.useCallback(
            (e) => {
                let { height: t } = e;
                j.current !== t && (m(), (j.current = t));
            },
            [m],
        );
        (0, i.PM)(_, v);
        let C = null == (n = h.get(c)) ? void 0 : n.current,
            y = null;
        return (
            null == C
                ? (y = null)
                : p && null != x
                  ? (y = (0, r.jsxs)(r.Fragment, {
                        children: [
                            "collapsed" === u &&
                                (0, o.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                        },
                                        children: l(b),
                                    }),
                                    C,
                                ),
                            "expanded" === u &&
                                (0, o.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        },
                                        children: l(b),
                                    }),
                                    C,
                                ),
                        ],
                    }))
                  : "collapsed" === u && (y = (0, o.createPortal)(l(b), C)),
            (0, r.jsxs)("div", {
                style: { opacity: +((null == y && "collapsed" === u) || null == C) },
                ref: t,
                children: [l(_), y],
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
                    return u(c({}, r), { [t]: u(c({}, o), { [n]: e }) });
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            _ = s.useCallback((e, t) => {
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
                    return (o[t] = null), (n = null == o.expanded && null == o.collapsed), u(c({}, r), { [e]: o });
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            b = s.useCallback(() => {
                let e = [];
                for (let t in i) {
                    if (null == i[t] || null == n.current || null == o.current) continue;
                    let r = i[t].collapsed,
                        s = i[t].expanded;
                    if (null == r || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        u = r.getBoundingClientRect(),
                        d = o.current.getBoundingClientRect(),
                        p = a.top - c.top + l.jK,
                        m = u.top - d.top,
                        f = a.left - c.left + l.jK,
                        g = u.left - d.left,
                        x = -a.right + c.right + l.jK,
                        h = -u.right + d.right;
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
        return (0, r.jsx)(d.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: _,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: o,
                recalculateAnimationPositions: b,
                animatedComponentProps: m,
                expansionSpring: a,
                mountPoints: g,
            },
            children: t,
        });
    };
