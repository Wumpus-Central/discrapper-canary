n.d(t, {
    B$: () => c,
    l7: () => d,
    p: () => u
}),
    n(47120),
    n(653041);
var r = n(200651),
    o = n(192379),
    s = n(995295),
    a = n(642128),
    i = n(393238),
    l = n(743294);
let c = o.createContext({
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
    d = o.forwardRef(function (e, t) {
        var n;
        let { children: l, id: d, inState: u, isTextTransition: p = !1 } = e,
            { recalculateAnimationPositions: m, registerComponent: x, unregisterComponent: h, expansionSpring: g, mountPoints: f } = o.useContext(c),
            _ = o.useRef(null),
            C = o.useRef(null),
            v = o.useRef();
        o.useEffect(() => {
            m();
        }, [m]),
            o.useLayoutEffect(() => {
                let e = _.current;
                return (
                    null != e && x(e, d, u),
                    () => {
                        null != e && h(d, u);
                    }
                );
            }, [d, u, x, h]);
        let j = o.useCallback(
            (e) => {
                let { height: t } = e;
                v.current !== t && (m(), (v.current = t));
            },
            [m]
        );
        (0, i.P)(_, j);
        let b = null === (n = f.get(d)) || void 0 === n ? void 0 : n.current,
            T = null;
        return (
            null == b
                ? (T = null)
                : p && null != g
                  ? (T = (0, r.jsxs)(r.Fragment, {
                        children: [
                            'collapsed' === u &&
                                (0, s.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            })
                                        },
                                        children: l(C)
                                    }),
                                    b
                                ),
                            'expanded' === u &&
                                (0, s.createPortal)(
                                    (0, r.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        },
                                        children: l(C)
                                    }),
                                    b
                                )
                        ]
                    }))
                  : 'collapsed' === u && (T = (0, s.createPortal)(l(C), b)),
            (0, r.jsxs)('div', {
                style: { opacity: (null == T && 'collapsed' === u) || null == b ? 1 : 0 },
                ref: t,
                children: [l(_), T]
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: s, expansionSpring: a } = e,
            [i, d] = o.useState({}),
            [u, p] = o.useState([]),
            [m, x] = o.useState(() => new Map()),
            h = o.useCallback((e, t, n) => {
                d((r) => {
                    var o;
                    let s =
                        null !== (o = r[t]) && void 0 !== o
                            ? o
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return {
                        ...r,
                        [t]: {
                            ...s,
                            [n]: e
                        }
                    };
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, o.createRef()), n;
                    });
            }, []),
            g = o.useCallback((e, t) => {
                let n = !1;
                d((r) => {
                    var o;
                    let s =
                        null !== (o = r[e]) && void 0 !== o
                            ? o
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return (
                        (s[t] = null),
                        (n = null == s.expanded && null == s.collapsed),
                        {
                            ...r,
                            [e]: s
                        }
                    );
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            f = o.useCallback(() => {
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
                        x = a.left - c.left + l.Li,
                        h = d.left - u.left,
                        g = -a.right + c.right + l.Li,
                        f = -d.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: h,
                        expandedLeft: x,
                        collapsedRight: f,
                        expandedRight: g,
                        collapsedTop: m,
                        expandedTop: p,
                        width: a.width
                    });
                }
                p(e);
            }, [i, n, s, p]);
        return (0, r.jsx)(c.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: g,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: s,
                recalculateAnimationPositions: f,
                animatedComponentProps: u,
                expansionSpring: a,
                mountPoints: m
            },
            children: t
        });
    };
