(n.d(t, { PW: () => s, dN: () => c, oK: () => d }), n(321073));
var l = n(477900),
    r = n(582128),
    u = n(333007),
    a = n(399513),
    o = n(765671),
    i = n(398025);
n(272111);
let s = r.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: r.createRef(),
    collapsedContentRef: r.createRef(),
    overlayRef: r.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: new a.SpringValue(0),
    mountPoints: new Map(),
});
function c(e) {
    let { children: t, id: n, inState: c, isTextTransition: d = !1, ref: p } = e,
        {
            recalculateAnimationPositions: f,
            registerComponent: m,
            unregisterComponent: x,
            expansionSpring: h,
            mountPoints: v,
        } = r.useContext(s),
        g = r.useRef(null),
        C = r.useRef(null),
        y = r.useRef(void 0);
    (r.useEffect(() => {
        f();
    }, [f]),
        r.useLayoutEffect(() => {
            let e = g.current;
            return (
                null != e && m(e, n, c),
                () => {
                    null != e && x(n, c);
                }
            );
        }, [n, c, m, x]));
    let j = r.useCallback(
        (e) => {
            let { height: t } = e;
            y.current !== t && (f(), (y.current = t));
        },
        [f],
    );
    (0, o.i4)(g, j);
    let R = v.get(n)?.current,
        A = null;
    return (
        null == R
            ? (A = null)
            : d && null != h
              ? (A = (0, l.jsxs)(l.Fragment, {
                    children: [
                        "collapsed" === c &&
                            (0, u.createPortal)(
                                (0, l.jsx)(a.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, i.a)(h.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(C),
                                }),
                                R,
                            ),
                        "expanded" === c &&
                            (0, u.createPortal)(
                                (0, l.jsx)(a.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, i.a)(h.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(C),
                                }),
                                R,
                            ),
                    ],
                }))
              : "collapsed" === c && (A = (0, u.createPortal)(t(C), R)),
        (0, l.jsxs)("div", {
            style: { opacity: +((null == A && "collapsed" === c) || null == R) },
            ref: p,
            children: [t(g), A],
        })
    );
}
let d = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: u, overlayRef: a, expansionSpring: o } = e,
        [i, c] = r.useState({}),
        [d, p] = r.useState([]),
        [f, m] = r.useState(() => new Map()),
        x = r.useCallback((e, t, n) => {
            (c((l) => {
                let r = l[t] ?? { expanded: null, collapsed: null };
                return { ...l, [t]: { ...r, [n]: e } };
            }),
                m((e) => {
                    let n = new Map(e);
                    return (n.set(t, r.createRef()), n);
                }));
        }, []),
        h = r.useCallback((e, t) => {
            let n = !1;
            (c((l) => {
                let r = l[e] ?? { expanded: null, collapsed: null };
                return ((r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...l, [e]: r });
            }),
                n &&
                    m((t) => {
                        let n = new Map(t);
                        return (n.delete(e), n);
                    }));
        }, []),
        v = r.useCallback(() => {
            let e = [];
            for (let t in i) {
                if (null == i[t] || null == n.current || null == u.current) continue;
                let l = i[t].collapsed,
                    r = i[t].expanded;
                if (null == l || null == r) continue;
                let a = r.getBoundingClientRect(),
                    o = n.current.getBoundingClientRect(),
                    s = l.getBoundingClientRect(),
                    c = u.current.getBoundingClientRect(),
                    d = a.top - o.top + 12,
                    p = s.top - c.top,
                    f = a.left - o.left + 12,
                    m = s.left - c.left,
                    x = -a.right + o.right + 12,
                    h = -s.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: m,
                    expandedLeft: f,
                    collapsedRight: h,
                    expandedRight: x,
                    collapsedTop: p,
                    expandedTop: d,
                    width: a.width,
                });
            }
            p(e);
        }, [i, n, u, p]),
        g = r.useMemo(
            () => ({
                registerComponent: x,
                unregisterComponent: h,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: u,
                overlayRef: a,
                recalculateAnimationPositions: v,
                animatedComponentProps: d,
                expansionSpring: o,
                mountPoints: f,
            }),
            [x, h, i, n, u, a, v, d, o, f],
        );
    return (0, l.jsx)(s.Provider, { value: g, children: t });
};
