(n.d(t, { PW: () => u, dN: () => c, oK: () => d }), n(321073));
var l = n(477900),
    r = n(582128),
    s = n(333007),
    a = n(399513),
    i = n(765671),
    o = n(398025);
n(272111);
let u = r.createContext({
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
    let { children: t, id: n, inState: c, isTextTransition: d = !1, ref: m } = e,
        {
            recalculateAnimationPositions: p,
            registerComponent: x,
            unregisterComponent: h,
            expansionSpring: f,
            mountPoints: C,
        } = r.useContext(u),
        v = r.useRef(null),
        g = r.useRef(null),
        N = r.useRef(void 0);
    (r.useEffect(() => {
        p();
    }, [p]),
        r.useLayoutEffect(() => {
            let e = v.current;
            return (
                null != e && x(e, n, c),
                () => {
                    null != e && h(n, c);
                }
            );
        }, [n, c, x, h]));
    let A = r.useCallback(
        (e) => {
            let { height: t } = e;
            N.current !== t && (p(), (N.current = t));
        },
        [p],
    );
    (0, i.i4)(v, A);
    let y = C.get(n)?.current,
        j = null;
    return (
        null == y
            ? (j = null)
            : d && null != f
              ? (j = (0, l.jsxs)(l.Fragment, {
                    children: [
                        "collapsed" === c &&
                            (0, s.createPortal)(
                                (0, l.jsx)(a.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, o.a)(f.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(g),
                                }),
                                y,
                            ),
                        "expanded" === c &&
                            (0, s.createPortal)(
                                (0, l.jsx)(a.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, o.a)(f.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(g),
                                }),
                                y,
                            ),
                    ],
                }))
              : "collapsed" === c && (j = (0, s.createPortal)(t(g), y)),
        (0, l.jsxs)("div", {
            style: { opacity: +((null == j && "collapsed" === c) || null == y) },
            ref: m,
            children: [t(v), j],
        })
    );
}
let d = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: s, overlayRef: a, expansionSpring: i } = e,
        [o, c] = r.useState({}),
        [d, m] = r.useState([]),
        [p, x] = r.useState(() => new Map()),
        h = r.useCallback((e, t, n) => {
            (c((l) => {
                let r = l[t] ?? { expanded: null, collapsed: null };
                return { ...l, [t]: { ...r, [n]: e } };
            }),
                x((e) => {
                    let n = new Map(e);
                    return (n.set(t, r.createRef()), n);
                }));
        }, []),
        f = r.useCallback((e, t) => {
            let n = !1;
            (c((l) => {
                let r = l[e] ?? { expanded: null, collapsed: null };
                return ((r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...l, [e]: r });
            }),
                n &&
                    x((t) => {
                        let n = new Map(t);
                        return (n.delete(e), n);
                    }));
        }, []),
        C = r.useCallback(() => {
            let e = [];
            for (let t in o) {
                if (null == o[t] || null == n.current || null == s.current) continue;
                let l = o[t].collapsed,
                    r = o[t].expanded;
                if (null == l || null == r) continue;
                let a = r.getBoundingClientRect(),
                    i = n.current.getBoundingClientRect(),
                    u = l.getBoundingClientRect(),
                    c = s.current.getBoundingClientRect(),
                    d = a.top - i.top + 12,
                    m = u.top - c.top,
                    p = a.left - i.left + 12,
                    x = u.left - c.left,
                    h = -a.right + i.right + 12,
                    f = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: x,
                    expandedLeft: p,
                    collapsedRight: f,
                    expandedRight: h,
                    collapsedTop: m,
                    expandedTop: d,
                    width: a.width,
                });
            }
            m(e);
        }, [o, n, s, m]),
        v = r.useMemo(
            () => ({
                registerComponent: h,
                unregisterComponent: f,
                animatedComponents: o,
                expandedContentRef: n,
                collapsedContentRef: s,
                overlayRef: a,
                recalculateAnimationPositions: C,
                animatedComponentProps: d,
                expansionSpring: i,
                mountPoints: p,
            }),
            [h, f, o, n, s, a, C, d, i, p],
        );
    return (0, l.jsx)(u.Provider, { value: v, children: t });
};
