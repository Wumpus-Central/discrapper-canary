n.d(t, { PW: () => d, dN: () => c, oK: () => u }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(340287),
    a = n(419354),
    r = n(765671),
    o = n(398025);
n(272111);
let d = s.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: s.createRef(),
        collapsedContentRef: s.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new a.SpringValue(0),
        mountPoints: new Map(),
    }),
    c = s.forwardRef(function (e, t) {
        let { children: n, id: c, inState: u, isTextTransition: p = !1 } = e,
            {
                recalculateAnimationPositions: h,
                registerComponent: m,
                unregisterComponent: _,
                expansionSpring: A,
                mountPoints: f,
            } = s.useContext(d),
            g = s.useRef(null),
            x = s.useRef(null),
            E = s.useRef(void 0);
        s.useEffect(() => {
            h();
        }, [h]),
            s.useLayoutEffect(() => {
                let e = g.current;
                return (
                    null != e && m(e, c, u),
                    () => {
                        null != e && _(c, u);
                    }
                );
            }, [c, u, m, _]);
        let C = s.useCallback(
            (e) => {
                let { height: t } = e;
                E.current !== t && (h(), (E.current = t));
            },
            [h],
        );
        (0, r.i4)(g, C);
        let T = f.get(c)?.current,
            v = null;
        return (
            null == T
                ? (v = null)
                : p && null != A
                  ? (v = (0, i.jsxs)(i.Fragment, {
                        children: [
                            "collapsed" === u &&
                                (0, l.createPortal)(
                                    (0, i.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, o.a)(A.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(x),
                                    }),
                                    T,
                                ),
                            "expanded" === u &&
                                (0, l.createPortal)(
                                    (0, i.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, o.a)(A.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(x),
                                    }),
                                    T,
                                ),
                        ],
                    }))
                  : "collapsed" === u && (v = (0, l.createPortal)(n(x), T)),
            (0, i.jsxs)("div", {
                style: { opacity: +((null == v && "collapsed" === u) || null == T) },
                ref: t,
                children: [n(g), v],
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: a } = e,
            [r, o] = s.useState({}),
            [c, u] = s.useState([]),
            [p, h] = s.useState(() => new Map()),
            m = s.useCallback((e, t, n) => {
                o((i) => {
                    let s = i[t] ?? { expanded: null, collapsed: null };
                    return { ...i, [t]: { ...s, [n]: e } };
                }),
                    h((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            _ = s.useCallback((e, t) => {
                let n = !1;
                o((i) => {
                    let s = i[e] ?? { expanded: null, collapsed: null };
                    return (s[t] = null), (n = null == s.expanded && null == s.collapsed), { ...i, [e]: s };
                }),
                    n &&
                        h((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            A = s.useCallback(() => {
                let e = [];
                for (let t in r) {
                    if (null == r[t] || null == n.current || null == l.current) continue;
                    let i = r[t].collapsed,
                        s = r[t].expanded;
                    if (null == i || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        d = i.getBoundingClientRect(),
                        c = l.current.getBoundingClientRect(),
                        u = a.top - o.top + 12,
                        p = d.top - c.top,
                        h = a.left - o.left + 12,
                        m = d.left - c.left,
                        _ = -a.right + o.right + 12,
                        A = -d.right + c.right;
                    e.push({
                        id: t,
                        collapsedLeft: m,
                        expandedLeft: h,
                        collapsedRight: A,
                        expandedRight: _,
                        collapsedTop: p,
                        expandedTop: u,
                        width: a.width,
                    });
                }
                u(e);
            }, [r, n, l, u]);
        return (0, i.jsx)(d.Provider, {
            value: {
                registerComponent: m,
                unregisterComponent: _,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: l,
                recalculateAnimationPositions: A,
                animatedComponentProps: c,
                expansionSpring: a,
                mountPoints: p,
            },
            children: t,
        });
    };
