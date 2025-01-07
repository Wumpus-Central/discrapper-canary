n.d(t, {
    B$: function () {
        return c;
    },
    l7: function () {
        return d;
    },
    p: function () {
        return u;
    }
}),
    n(47120),
    n(653041);
var o = n(200651),
    r = n(192379),
    s = n(995295),
    a = n(666912),
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
            { recalculateAnimationPositions: m, registerComponent: x, unregisterComponent: f, expansionSpring: g, mountPoints: h } = r.useContext(c),
            C = r.useRef(null),
            v = r.useRef(null),
            j = r.useRef();
        r.useEffect(() => {
            m();
        }, [m]),
            r.useLayoutEffect(() => {
                let e = C.current;
                return (
                    null != e && x(e, d, u),
                    () => {
                        null != e && f(d, u);
                    }
                );
            }, [d, u, x, f]);
        let _ = r.useCallback(
            (e) => {
                let { height: t } = e;
                j.current !== t && (m(), (j.current = t));
            },
            [m]
        );
        (0, i.P)(C, _);
        let b = null === (n = h.get(d)) || void 0 === n ? void 0 : n.current,
            N = null;
        return (
            null == b
                ? (N = null)
                : p && null != g
                  ? (N = (0, o.jsxs)(o.Fragment, {
                        children: [
                            'collapsed' === u &&
                                (0, s.createPortal)(
                                    (0, o.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            })
                                        },
                                        children: l(v)
                                    }),
                                    b
                                ),
                            'expanded' === u &&
                                (0, s.createPortal)(
                                    (0, o.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        },
                                        children: l(v)
                                    }),
                                    b
                                )
                        ]
                    }))
                  : 'collapsed' === u && (N = (0, s.createPortal)(l(v), b)),
            (0, o.jsxs)('div', {
                style: { opacity: (null == N && 'collapsed' === u) || null == b ? 1 : 0 },
                ref: t,
                children: [l(C), N]
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: s, expansionSpring: a } = e,
            [i, d] = r.useState({}),
            [u, p] = r.useState([]),
            [m, x] = r.useState(() => new Map()),
            f = r.useCallback((e, t, n) => {
                d((o) => {
                    var r;
                    let s =
                        null !== (r = o[t]) && void 0 !== r
                            ? r
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return {
                        ...o,
                        [t]: {
                            ...s,
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
                d((o) => {
                    var r;
                    let s =
                        null !== (r = o[e]) && void 0 !== r
                            ? r
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return (
                        (s[t] = null),
                        (n = null == s.expanded && null == s.collapsed),
                        {
                            ...o,
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
            h = r.useCallback(() => {
                let e = [];
                for (let t in i) {
                    if (null == i[t] || null == n.current || null == s.current) continue;
                    let o = i[t].collapsed,
                        r = i[t].expanded;
                    if (null == o || null == r) continue;
                    let a = r.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        d = o.getBoundingClientRect(),
                        u = s.current.getBoundingClientRect(),
                        p = a.top - c.top + l.Li,
                        m = d.top - u.top,
                        x = a.left - c.left + l.Li,
                        f = d.left - u.left,
                        g = -a.right + c.right + l.Li,
                        h = -d.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: f,
                        expandedLeft: x,
                        collapsedRight: h,
                        expandedRight: g,
                        collapsedTop: m,
                        expandedTop: p,
                        width: a.width
                    });
                }
                p(e);
            }, [i, n, s, p]);
        return (0, o.jsx)(c.Provider, {
            value: {
                registerComponent: f,
                unregisterComponent: g,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: s,
                recalculateAnimationPositions: h,
                animatedComponentProps: u,
                expansionSpring: a,
                mountPoints: m
            },
            children: t
        });
    };
