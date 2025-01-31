n.d(t, {
    B$: () => c,
    l7: () => d,
    p: () => u
}),
    n(47120),
    n(653041);
var s = n(200651),
    r = n(192379),
    a = n(995295),
    o = n(642128),
    i = n(393238),
    l = n(743294);
let c = r.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: r.createRef(),
        collapsedContentRef: r.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: null,
        mountPoints: new Map()
    }),
    d = r.forwardRef(function (e, t) {
        var n;
        let { children: l, id: d, inState: u, isTextTransition: p = !1 } = e,
            { recalculateAnimationPositions: m, registerComponent: x, unregisterComponent: h, expansionSpring: g, mountPoints: f } = r.useContext(c),
            v = r.useRef(null),
            _ = r.useRef(null),
            C = r.useRef();
        r.useEffect(() => {
            m();
        }, [m]),
            r.useLayoutEffect(() => {
                let e = v.current;
                return (
                    null != e && x(e, d, u),
                    () => {
                        null != e && h(d, u);
                    }
                );
            }, [d, u, x, h]);
        let j = r.useCallback(
            (e) => {
                let { height: t } = e;
                C.current !== t && (m(), (C.current = t));
            },
            [m]
        );
        (0, i.P)(v, j);
        let b = null === (n = f.get(d)) || void 0 === n ? void 0 : n.current,
            T = null;
        return (
            null == b
                ? (T = null)
                : p && null != g
                  ? (T = (0, s.jsxs)(s.Fragment, {
                        children: [
                            'collapsed' === u &&
                                (0, a.createPortal)(
                                    (0, s.jsx)(o.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            })
                                        },
                                        children: l(_)
                                    }),
                                    b
                                ),
                            'expanded' === u &&
                                (0, a.createPortal)(
                                    (0, s.jsx)(o.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        },
                                        children: l(_)
                                    }),
                                    b
                                )
                        ]
                    }))
                  : 'collapsed' === u && (T = (0, a.createPortal)(l(_), b)),
            (0, s.jsxs)('div', {
                style: { opacity: (null == T && 'collapsed' === u) || null == b ? 1 : 0 },
                ref: t,
                children: [l(v), T]
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: a, expansionSpring: o } = e,
            [i, d] = r.useState({}),
            [u, p] = r.useState([]),
            [m, x] = r.useState(() => new Map()),
            h = r.useCallback((e, t, n) => {
                d((s) => {
                    var r;
                    let a =
                        null !== (r = s[t]) && void 0 !== r
                            ? r
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return {
                        ...s,
                        [t]: {
                            ...a,
                            [n]: e
                        }
                    };
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, r.createRef()), n;
                    });
            }, []),
            g = r.useCallback((e, t) => {
                let n = !1;
                d((s) => {
                    var r;
                    let a =
                        null !== (r = s[e]) && void 0 !== r
                            ? r
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return (
                        (a[t] = null),
                        (n = null == a.expanded && null == a.collapsed),
                        {
                            ...s,
                            [e]: a
                        }
                    );
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            f = r.useCallback(() => {
                let e = [];
                for (let t in i) {
                    if (null == i[t] || null == n.current || null == a.current) continue;
                    let s = i[t].collapsed,
                        r = i[t].expanded;
                    if (null == s || null == r) continue;
                    let o = r.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        d = s.getBoundingClientRect(),
                        u = a.current.getBoundingClientRect(),
                        p = o.top - c.top + l.Li,
                        m = d.top - u.top,
                        x = o.left - c.left + l.Li,
                        h = d.left - u.left,
                        g = -o.right + c.right + l.Li,
                        f = -d.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: h,
                        expandedLeft: x,
                        collapsedRight: f,
                        expandedRight: g,
                        collapsedTop: m,
                        expandedTop: p,
                        width: o.width
                    });
                }
                p(e);
            }, [i, n, a, p]);
        return (0, s.jsx)(c.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: g,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: a,
                recalculateAnimationPositions: f,
                animatedComponentProps: u,
                expansionSpring: o,
                mountPoints: m
            },
            children: t
        });
    };
