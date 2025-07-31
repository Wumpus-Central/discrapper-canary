(n.d(t, {
    B$: () => d,
    l7: () => p,
    p: () => m
}),
    n(388685),
    n(539854));
var r = n(255367),
    o = n(73800),
    s = n(867309),
    a = n(855659),
    i = n(393238),
    l = n(743294);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let d = o.createContext({
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
        let { children: l, id: c, inState: u, isTextTransition: p = !1 } = e,
            { recalculateAnimationPositions: m, registerComponent: f, unregisterComponent: g, expansionSpring: x, mountPoints: h } = o.useContext(d),
            b = o.useRef(null),
            j = o.useRef(null),
            _ = o.useRef(void 0);
        (o.useEffect(() => {
            m();
        }, [m]),
            o.useLayoutEffect(() => {
                let e = b.current;
                return (
                    null != e && f(e, c, u),
                    () => {
                        null != e && g(c, u);
                    }
                );
            }, [c, u, f, g]));
        let v = o.useCallback(
            (e) => {
                let { height: t } = e;
                _.current !== t && (m(), (_.current = t));
            },
            [m]
        );
        (0, i.PM)(b, v);
        let y = null == (n = h.get(c)) ? void 0 : n.current,
            C = null;
        return (
            null == y
                ? (C = null)
                : p && null != x
                  ? (C = (0, r.jsxs)(r.Fragment, {
                        children: [
                            'collapsed' === u &&
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
                                    y
                                ),
                            'expanded' === u &&
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
                                    y
                                )
                        ]
                    }))
                  : 'collapsed' === u && (C = (0, s.createPortal)(l(j), y)),
            (0, r.jsxs)('div', {
                style: { opacity: +((null == C && 'collapsed' === u) || null == y) },
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
                (p((r) => {
                    var o;
                    let s =
                        null != (o = r[t])
                            ? o
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return u(c({}, r), { [t]: u(c({}, s), { [n]: e }) });
                }),
                    x((e) => {
                        let n = new Map(e);
                        return (n.set(t, o.createRef()), n);
                    }));
            }, []),
            b = o.useCallback((e, t) => {
                let n = !1;
                (p((r) => {
                    var o;
                    let s =
                        null != (o = r[e])
                            ? o
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return ((s[t] = null), (n = null == s.expanded && null == s.collapsed), u(c({}, r), { [e]: s }));
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return (n.delete(e), n);
                        }));
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
                        u = r.getBoundingClientRect(),
                        d = s.current.getBoundingClientRect(),
                        p = a.top - c.top + l.Li,
                        m = u.top - d.top,
                        f = a.left - c.left + l.Li,
                        g = u.left - d.left,
                        x = -a.right + c.right + l.Li,
                        h = -u.right + d.right;
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
        return (0, r.jsx)(d.Provider, {
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
