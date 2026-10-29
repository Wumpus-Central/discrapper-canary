(n.d(t, { PW: () => u, dN: () => c, oK: () => d }), n(321073));
var l = n(477900),
    s = n(582128),
    a = n(333007),
    r = n(941143),
    i = n(765671),
    o = n(398025);
n(272111);
let u = s.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: s.createRef(),
    collapsedContentRef: s.createRef(),
    overlayRef: s.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: new r.SpringValue(0),
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
        } = s.useContext(u),
        v = s.useRef(null),
        N = s.useRef(null),
        g = s.useRef(void 0);
    (s.useEffect(() => {
        p();
    }, [p]),
        s.useLayoutEffect(() => {
            let e = v.current;
            return (
                null != e && x(e, n, c),
                () => {
                    null != e && h(n, c);
                }
            );
        }, [n, c, x, h]));
    let y = s.useCallback(
        (e) => {
            let { height: t } = e;
            g.current !== t && (p(), (g.current = t));
        },
        [p],
    );
    (0, i.i4)(v, y);
    let j = C.get(n)?.current,
        A = null;
    return (
        null == j
            ? (A = null)
            : d && null != f
              ? (A = (0, l.jsxs)(l.Fragment, {
                    children: [
                        "collapsed" === c &&
                            (0, a.createPortal)(
                                (0, l.jsx)(r.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, o.a)(f.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(N),
                                }),
                                j,
                            ),
                        "expanded" === c &&
                            (0, a.createPortal)(
                                (0, l.jsx)(r.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, o.a)(f.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(N),
                                }),
                                j,
                            ),
                    ],
                }))
              : "collapsed" === c && (A = (0, a.createPortal)(t(N), j)),
        (0, l.jsxs)("div", {
            style: { opacity: +((null == A && "collapsed" === c) || null == j) },
            ref: m,
            children: [t(v), A],
        })
    );
}
let d = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: a, overlayRef: r, expansionSpring: i } = e,
        [o, c] = s.useState({}),
        [d, m] = s.useState([]),
        [p, x] = s.useState(() => new Map()),
        h = s.useCallback((e, t, n) => {
            (c((l) => {
                let s = l[t] ?? { expanded: null, collapsed: null };
                return { ...l, [t]: { ...s, [n]: e } };
            }),
                x((e) => {
                    let n = new Map(e);
                    return (n.set(t, s.createRef()), n);
                }));
        }, []),
        f = s.useCallback((e, t) => {
            let n = !1;
            (c((l) => {
                let s = l[e] ?? { expanded: null, collapsed: null };
                return ((s[t] = null), (n = null == s.expanded && null == s.collapsed), { ...l, [e]: s });
            }),
                n &&
                    x((t) => {
                        let n = new Map(t);
                        return (n.delete(e), n);
                    }));
        }, []),
        C = s.useCallback(() => {
            let e = [];
            for (let t in o) {
                if (null == o[t] || null == n.current || null == a.current) continue;
                let l = o[t].collapsed,
                    s = o[t].expanded;
                if (null == l || null == s) continue;
                let r = s.getBoundingClientRect(),
                    i = n.current.getBoundingClientRect(),
                    u = l.getBoundingClientRect(),
                    c = a.current.getBoundingClientRect(),
                    d = r.top - i.top + 12,
                    m = u.top - c.top,
                    p = r.left - i.left + 12,
                    x = u.left - c.left,
                    h = -r.right + i.right + 12,
                    f = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: x,
                    expandedLeft: p,
                    collapsedRight: f,
                    expandedRight: h,
                    collapsedTop: m,
                    expandedTop: d,
                    width: r.width,
                });
            }
            m(e);
        }, [o, n, a, m]),
        v = s.useMemo(
            () => ({
                registerComponent: h,
                unregisterComponent: f,
                animatedComponents: o,
                expandedContentRef: n,
                collapsedContentRef: a,
                overlayRef: r,
                recalculateAnimationPositions: C,
                animatedComponentProps: d,
                expansionSpring: i,
                mountPoints: p,
            }),
            [h, f, o, n, a, r, C, d, i, p],
        );
    return (0, l.jsx)(u.Provider, { value: v, children: t });
};
