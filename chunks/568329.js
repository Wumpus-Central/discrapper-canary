(n.d(t, { PW: () => u, dN: () => c, oK: () => d }), n(321073));
var l = n(477900),
    s = n(582128),
    a = n(333007),
    r = n(29477),
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
    let { children: t, id: n, inState: c, isTextTransition: d = !1, ref: p } = e,
        {
            recalculateAnimationPositions: m,
            registerComponent: x,
            unregisterComponent: f,
            expansionSpring: h,
            mountPoints: C,
        } = s.useContext(u),
        v = s.useRef(null),
        y = s.useRef(null),
        N = s.useRef(void 0);
    (s.useEffect(() => {
        m();
    }, [m]),
        s.useLayoutEffect(() => {
            let e = v.current;
            return (
                null != e && x(e, n, c),
                () => {
                    null != e && f(n, c);
                }
            );
        }, [n, c, x, f]));
    let g = s.useCallback(
        (e) => {
            let { height: t } = e;
            N.current !== t && (m(), (N.current = t));
        },
        [m],
    );
    (0, i.i4)(v, g);
    let j = C.get(n)?.current,
        A = null;
    return (
        null == j
            ? (A = null)
            : d && null != h
              ? (A = (0, l.jsxs)(l.Fragment, {
                    children: [
                        "collapsed" === c &&
                            (0, a.createPortal)(
                                (0, l.jsx)(r.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, o.a)(h.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(y),
                                }),
                                j,
                            ),
                        "expanded" === c &&
                            (0, a.createPortal)(
                                (0, l.jsx)(r.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, o.a)(h.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(y),
                                }),
                                j,
                            ),
                    ],
                }))
              : "collapsed" === c && (A = (0, a.createPortal)(t(y), j)),
        (0, l.jsxs)("div", {
            style: { opacity: +((null == A && "collapsed" === c) || null == j) },
            ref: p,
            children: [t(v), A],
        })
    );
}
let d = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: a, overlayRef: r, expansionSpring: i } = e,
        [o, c] = s.useState({}),
        [d, p] = s.useState([]),
        [m, x] = s.useState(() => new Map()),
        f = s.useCallback((e, t, n) => {
            (c((l) => {
                let s = l[t] ?? { expanded: null, collapsed: null };
                return { ...l, [t]: { ...s, [n]: e } };
            }),
                x((e) => {
                    let n = new Map(e);
                    return (n.set(t, s.createRef()), n);
                }));
        }, []),
        h = s.useCallback((e, t) => {
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
                    p = u.top - c.top,
                    m = r.left - i.left + 12,
                    x = u.left - c.left,
                    f = -r.right + i.right + 12,
                    h = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: x,
                    expandedLeft: m,
                    collapsedRight: h,
                    expandedRight: f,
                    collapsedTop: p,
                    expandedTop: d,
                    width: r.width,
                });
            }
            p(e);
        }, [o, n, a, p]),
        v = s.useMemo(
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
                mountPoints: m,
            }),
            [f, h, o, n, a, r, C, d, i, m],
        );
    return (0, l.jsx)(u.Provider, { value: v, children: t });
};
