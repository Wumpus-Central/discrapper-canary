n.d(t, {
    B$: () => u,
    l7: () => p,
    p: () => m
}),
    n(47120),
    n(653041);
var r = n(200651),
    o = n(192379),
    s = n(995295),
    a = n(642128),
    i = n(393238),
    l = n(743294);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let u = o.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: o.createRef(),
        collapsedContentRef: o.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: null,
        mountPoints: new Map()
    }),
    p = o.forwardRef(function (e, t) {
        var n;
        let { children: l, id: c, inState: d, isTextTransition: p = !1 } = e,
            { recalculateAnimationPositions: m, registerComponent: f, unregisterComponent: g, expansionSpring: x, mountPoints: h } = o.useContext(u),
            b = o.useRef(null),
            j = o.useRef(null),
            v = o.useRef();
        o.useEffect(() => {
            m();
        }, [m]),
            o.useLayoutEffect(() => {
                let e = b.current;
                return (
                    null != e && f(e, c, d),
                    () => {
                        null != e && g(c, d);
                    }
                );
            }, [c, d, f, g]);
        let y = o.useCallback(
            (e) => {
                let { height: t } = e;
                v.current !== t && (m(), (v.current = t));
            },
            [m]
        );
        (0, i.P)(b, y);
        let _ = null == (n = h.get(c)) ? void 0 : n.current,
            C = null;
        return (
            null == _
                ? (C = null)
                : p && null != x
                  ? (C = (0, r.jsxs)(r.Fragment, {
                        children: [
                            'collapsed' === d &&
                                (0, s.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            })
                                        },
                                        children: l(j)
                                    }),
                                    _
                                ),
                            'expanded' === d &&
                                (0, s.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        },
                                        children: l(j)
                                    }),
                                    _
                                )
                        ]
                    }))
                  : 'collapsed' === d && (C = (0, s.createPortal)(l(j), _)),
            (0, r.jsxs)('div', {
                style: { opacity: +((null == C && 'collapsed' === d) || null == _) },
                ref: t,
                children: [l(b), C]
            })
        );
    }),
    m = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: s, expansionSpring: a } = e,
            [i, p] = o.useState({}),
            [m, f] = o.useState([]),
            [g, x] = o.useState(() => new Map()),
            h = o.useCallback((e, t, n) => {
                p((r) => {
                    var o;
                    let s =
                        null != (o = r[t])
                            ? o
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return d(c({}, r), { [t]: d(c({}, s), { [n]: e }) });
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, o.createRef()), n;
                    });
            }, []),
            b = o.useCallback((e, t) => {
                let n = !1;
                p((r) => {
                    var o;
                    let s =
                        null != (o = r[e])
                            ? o
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return (s[t] = null), (n = null == s.expanded && null == s.collapsed), d(c({}, r), { [e]: s });
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            j = o.useCallback(() => {
                let e = [];
                for (let t in i) {
                    if (null == i[t] || null == n.current || null == s.current) continue;
                    let r = i[t].collapsed,
                        o = i[t].expanded;
                    if (null == r || null == o) continue;
                    let a = o.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        d = r.getBoundingClientRect(),
                        u = s.current.getBoundingClientRect(),
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
                        width: a.width
                    });
                }
                f(e);
            }, [i, n, s, f]);
        return (0, r.jsx)(u.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: b,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: s,
                recalculateAnimationPositions: j,
                animatedComponentProps: m,
                expansionSpring: a,
                mountPoints: g
            },
            children: t
        });
    };
