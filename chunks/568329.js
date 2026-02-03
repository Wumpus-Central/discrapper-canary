n.d(t, {
    PW: () => u,
    dN: () => m,
    oK: () => p,
}),
    n(896048),
    n(321073);
var a = n(627968),
    l = n(64700),
    r = n(340287),
    i = n(92674),
    s = n(765671),
    o = n(398025);

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
n(272111);
let u = l.createContext({
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
    m = l.forwardRef(function (e, t) {
        var n;
        let { children: c, id: d, inState: m, isTextTransition: p = !1 } = e,
            {
                recalculateAnimationPositions: h,
                registerComponent: x,
                unregisterComponent: g,
                expansionSpring: f,
                mountPoints: b,
            } = l.useContext(u),
            v = l.useRef(null),
            j = l.useRef(null),
            _ = l.useRef(void 0);
        l.useEffect(() => {
            h();
        }, [h]),
            l.useLayoutEffect(() => {
                let e = v.current;
                return (
                    null != e && x(e, d, m),
                    () => {
                        null != e && g(d, m);
                    }
                );
            }, [d, m, x, g]);
        let y = l.useCallback(
            (e) => {
                let { height: t } = e;
                _.current !== t && (h(), (_.current = t));
            },
            [h],
        );
        (0, s.i4)(v, y);
        let A = null == (n = b.get(d)) ? void 0 : n.current,
            C = null;
        return (
            null == A
                ? (C = null)
                : p && null != f
                  ? (C = (0, a.jsxs)(a.Fragment, {
                        children: [
                            "collapsed" === m &&
                                (0, r.createPortal)(
                                    (0, a.jsx)(i.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, o.a)(
                                                f.to({
                                                    range: [0, 1],
                                                    output: [1, 0],
                                                }),
                                            ),
                                        },
                                        children: c(j),
                                    }),
                                    A,
                                ),
                            "expanded" === m &&
                                (0, r.createPortal)(
                                    (0, a.jsx)(i.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, o.a)(
                                                f.to({
                                                    range: [0, 1],
                                                    output: [0, 1],
                                                }),
                                            ),
                                        },
                                        children: c(j),
                                    }),
                                    A,
                                ),
                        ],
                    }))
                  : "collapsed" === m && (C = (0, r.createPortal)(c(j), A)),
            (0, a.jsxs)("div", {
                style: {
                    opacity: +((null == C && "collapsed" === m) || null == A),
                },
                ref: t,
                children: [c(v), C],
            })
        );
    }),
    p = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: r, expansionSpring: i } = e,
            [s, o] = l.useState({}),
            [m, p] = l.useState([]),
            [h, x] = l.useState(() => new Map()),
            g = l.useCallback((e, t, n) => {
                o((a) => {
                    var l;
                    let r =
                        null != (l = a[t])
                            ? l
                            : {
                                  expanded: null,
                                  collapsed: null,
                              };
                    return d(c({}, a), {
                        [t]: d(c({}, r), {
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
                o((a) => {
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
                        d(c({}, a), {
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
        return (0, a.jsx)(u.Provider, {
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
