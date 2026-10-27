(n.d(t, { PW: () => u, dN: () => c, oK: () => d }), n(321073));
var l = n(477900),
    r = n(582128),
    a = n(333007),
    o = n(399513),
    s = n(765671),
    i = n(398025);
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
    expansionSpring: new o.SpringValue(0),
    mountPoints: new Map(),
});
function c(e) {
    let { children: t, id: n, inState: c, isTextTransition: d = !1, ref: p } = e,
        {
            recalculateAnimationPositions: m,
            registerComponent: x,
            unregisterComponent: h,
            expansionSpring: C,
            mountPoints: f,
        } = r.useContext(u),
        v = r.useRef(null),
        N = r.useRef(null),
        E = r.useRef(void 0);
    (r.useEffect(() => {
        m();
    }, [m]),
        r.useLayoutEffect(() => {
            let e = v.current;
            return (
                null != e && x(e, n, c),
                () => {
                    null != e && h(n, c);
                }
            );
        }, [n, c, x, h]));
    let _ = r.useCallback(
        (e) => {
            let { height: t } = e;
            E.current !== t && (m(), (E.current = t));
        },
        [m],
    );
    (0, s.i4)(v, _);
    let j = f.get(n)?.current,
        g = null;
    return (
        null == j
            ? (g = null)
            : d && null != C
              ? (g = (0, l.jsxs)(l.Fragment, {
                    children: [
                        "collapsed" === c &&
                            (0, a.createPortal)(
                                (0, l.jsx)(o.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, i.a)(C.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(N),
                                }),
                                j,
                            ),
                        "expanded" === c &&
                            (0, a.createPortal)(
                                (0, l.jsx)(o.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, i.a)(C.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(N),
                                }),
                                j,
                            ),
                    ],
                }))
              : "collapsed" === c && (g = (0, a.createPortal)(t(N), j)),
        (0, l.jsxs)("div", {
            style: { opacity: +((null == g && "collapsed" === c) || null == j) },
            ref: p,
            children: [t(v), g],
        })
    );
}
let d = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: a, overlayRef: o, expansionSpring: s } = e,
        [i, c] = r.useState({}),
        [d, p] = r.useState([]),
        [m, x] = r.useState(() => new Map()),
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
        C = r.useCallback((e, t) => {
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
        f = r.useCallback(() => {
            let e = [];
            for (let t in i) {
                if (null == i[t] || null == n.current || null == a.current) continue;
                let l = i[t].collapsed,
                    r = i[t].expanded;
                if (null == l || null == r) continue;
                let o = r.getBoundingClientRect(),
                    s = n.current.getBoundingClientRect(),
                    u = l.getBoundingClientRect(),
                    c = a.current.getBoundingClientRect(),
                    d = o.top - s.top + 12,
                    p = u.top - c.top,
                    m = o.left - s.left + 12,
                    x = u.left - c.left,
                    h = -o.right + s.right + 12,
                    C = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: x,
                    expandedLeft: m,
                    collapsedRight: C,
                    expandedRight: h,
                    collapsedTop: p,
                    expandedTop: d,
                    width: o.width,
                });
            }
            p(e);
        }, [i, n, a, p]),
        v = r.useMemo(
            () => ({
                registerComponent: h,
                unregisterComponent: C,
                animatedComponents: i,
                expandedContentRef: n,
                collapsedContentRef: a,
                overlayRef: o,
                recalculateAnimationPositions: f,
                animatedComponentProps: d,
                expansionSpring: s,
                mountPoints: m,
            }),
            [h, C, i, n, a, o, f, d, s, m],
        );
    return (0, l.jsx)(u.Provider, { value: v, children: t });
};
