n(321073);
var s = n(477900),
    l = n(582128),
    a = n(333007),
    r = n(120692),
    i = n(765671),
    o = n(398025);
n(272111);
let u = l.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: l.createRef(),
    collapsedContentRef: l.createRef(),
    overlayRef: l.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: new r.SpringValue(0),
    mountPoints: new Map(),
});
n.d(
    t,
    {},
    {
        PW: u,
        dN: function (e) {
            let { children: t, id: n, inState: c, isTextTransition: d = !1, ref: m } = e,
                {
                    recalculateAnimationPositions: p,
                    registerComponent: x,
                    unregisterComponent: f,
                    expansionSpring: h,
                    mountPoints: C,
                } = l.useContext(u),
                v = l.useRef(null),
                N = l.useRef(null),
                y = l.useRef(void 0);
            (l.useEffect(() => {
                p();
            }, [p]),
                l.useLayoutEffect(() => {
                    let e = v.current;
                    return (
                        null != e && x(e, n, c),
                        () => {
                            null != e && f(n, c);
                        }
                    );
                }, [n, c, x, f]));
            let g = l.useCallback(
                (e) => {
                    let { height: t } = e;
                    y.current !== t && (p(), (y.current = t));
                },
                [p],
            );
            (0, i.i4)(v, g);
            let j = C.get(n)?.current,
                A = null;
            return (
                null == j
                    ? (A = null)
                    : d && null != h
                      ? (A = (0, s.jsxs)(s.Fragment, {
                            children: [
                                "collapsed" === c &&
                                    (0, a.createPortal)(
                                        (0, s.jsx)(r.animated.div, {
                                            style: {
                                                position: "absolute",
                                                opacity: (0, o.a)(h.to({ range: [0, 1], output: [1, 0] })),
                                            },
                                            children: t(N),
                                        }),
                                        j,
                                    ),
                                "expanded" === c &&
                                    (0, a.createPortal)(
                                        (0, s.jsx)(r.animated.div, {
                                            style: {
                                                position: "absolute",
                                                opacity: (0, o.a)(h.to({ range: [0, 1], output: [0, 1] })),
                                            },
                                            children: t(N),
                                        }),
                                        j,
                                    ),
                            ],
                        }))
                      : "collapsed" === c && (A = (0, a.createPortal)(t(N), j)),
                (0, s.jsxs)("div", {
                    style: { opacity: +((null == A && "collapsed" === c) || null == j) },
                    ref: m,
                    children: [t(v), A],
                })
            );
        },
        oK: (e) => {
            let { children: t, expandedContentRef: n, collapsedContentRef: a, overlayRef: r, expansionSpring: i } = e,
                [o, c] = l.useState({}),
                [d, m] = l.useState([]),
                [p, x] = l.useState(() => new Map()),
                f = l.useCallback((e, t, n) => {
                    (c((s) => {
                        let l = s[t] ?? { expanded: null, collapsed: null };
                        return { ...s, [t]: { ...l, [n]: e } };
                    }),
                        x((e) => {
                            let n = new Map(e);
                            return (n.set(t, l.createRef()), n);
                        }));
                }, []),
                h = l.useCallback((e, t) => {
                    let n = !1;
                    (c((s) => {
                        let l = s[e] ?? { expanded: null, collapsed: null };
                        return ((l[t] = null), (n = null == l.expanded && null == l.collapsed), { ...s, [e]: l });
                    }),
                        n &&
                            x((t) => {
                                let n = new Map(t);
                                return (n.delete(e), n);
                            }));
                }, []),
                C = l.useCallback(() => {
                    let e = [];
                    for (let t in o) {
                        if (null == o[t] || null == n.current || null == a.current) continue;
                        let s = o[t].collapsed,
                            l = o[t].expanded;
                        if (null == s || null == l) continue;
                        let r = l.getBoundingClientRect(),
                            i = n.current.getBoundingClientRect(),
                            u = s.getBoundingClientRect(),
                            c = a.current.getBoundingClientRect(),
                            d = r.top - i.top + 12,
                            m = u.top - c.top,
                            p = r.left - i.left + 12,
                            x = u.left - c.left,
                            f = -r.right + i.right + 12,
                            h = -u.right + c.right;
                        e.push({
                            id: t,
                            collapsedLeft: x,
                            expandedLeft: p,
                            collapsedRight: h,
                            expandedRight: f,
                            collapsedTop: m,
                            expandedTop: d,
                            width: r.width,
                        });
                    }
                    m(e);
                }, [o, n, a, m]),
                v = l.useMemo(
                    () => ({
                        registerComponent: f,
                        unregisterComponent: h,
                        animatedComponents: o,
                        expandedContentRef: n,
                        collapsedContentRef: a,
                        overlayRef: r,
                        recalculateAnimationPositions: C,
                        animatedComponentProps: d,
                        expansionSpring: i,
                        mountPoints: p,
                    }),
                    [f, h, o, n, a, r, C, d, i, p],
                );
            return (0, s.jsx)(u.Provider, { value: v, children: t });
        },
    },
);
