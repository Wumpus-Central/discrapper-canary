n.d(t, { PW: () => d, dN: () => c, oK: () => u }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(340287),
    l = n(563495),
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
        expansionSpring: new l.SpringValue(0),
        mountPoints: new Map(),
    }),
    c = s.forwardRef(function (e, t) {
        let { children: n, id: c, inState: u, isTextTransition: m = !1 } = e,
            {
                recalculateAnimationPositions: h,
                registerComponent: x,
                unregisterComponent: p,
                expansionSpring: g,
                mountPoints: _,
            } = s.useContext(d),
            f = s.useRef(null),
            v = s.useRef(null),
            b = s.useRef(void 0);
        s.useEffect(() => {
            h();
        }, [h]),
            s.useLayoutEffect(() => {
                let e = f.current;
                return (
                    null != e && x(e, c, u),
                    () => {
                        null != e && p(c, u);
                    }
                );
            }, [c, u, x, p]);
        let j = s.useCallback(
            (e) => {
                let { height: t } = e;
                b.current !== t && (h(), (b.current = t));
            },
            [h],
        );
        (0, r.i4)(f, j);
        let A = _.get(c)?.current,
            C = null;
        return (
            null == A
                ? (C = null)
                : m && null != g
                  ? (C = (0, a.jsxs)(a.Fragment, {
                        children: [
                            "collapsed" === u &&
                                (0, i.createPortal)(
                                    (0, a.jsx)(l.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, o.a)(g.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(v),
                                    }),
                                    A,
                                ),
                            "expanded" === u &&
                                (0, i.createPortal)(
                                    (0, a.jsx)(l.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, o.a)(g.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(v),
                                    }),
                                    A,
                                ),
                        ],
                    }))
                  : "collapsed" === u && (C = (0, i.createPortal)(n(v), A)),
            (0, a.jsxs)("div", {
                style: { opacity: +((null == C && "collapsed" === u) || null == A) },
                ref: t,
                children: [n(f), C],
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: i, expansionSpring: l } = e,
            [r, o] = s.useState({}),
            [c, u] = s.useState([]),
            [m, h] = s.useState(() => new Map()),
            x = s.useCallback((e, t, n) => {
                o((a) => {
                    let s = a[t] ?? { expanded: null, collapsed: null };
                    return { ...a, [t]: { ...s, [n]: e } };
                }),
                    h((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            p = s.useCallback((e, t) => {
                let n = !1;
                o((a) => {
                    let s = a[e] ?? { expanded: null, collapsed: null };
                    return (s[t] = null), (n = null == s.expanded && null == s.collapsed), { ...a, [e]: s };
                }),
                    n &&
                        h((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            g = s.useCallback(() => {
                let e = [];
                for (let t in r) {
                    if (null == r[t] || null == n.current || null == i.current) continue;
                    let a = r[t].collapsed,
                        s = r[t].expanded;
                    if (null == a || null == s) continue;
                    let l = s.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        d = a.getBoundingClientRect(),
                        c = i.current.getBoundingClientRect(),
                        u = l.top - o.top + 12,
                        m = d.top - c.top,
                        h = l.left - o.left + 12,
                        x = d.left - c.left,
                        p = -l.right + o.right + 12,
                        g = -d.right + c.right;
                    e.push({
                        id: t,
                        collapsedLeft: x,
                        expandedLeft: h,
                        collapsedRight: g,
                        expandedRight: p,
                        collapsedTop: m,
                        expandedTop: u,
                        width: l.width,
                    });
                }
                u(e);
            }, [r, n, i, u]);
        return (0, a.jsx)(d.Provider, {
            value: {
                registerComponent: x,
                unregisterComponent: p,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: i,
                recalculateAnimationPositions: g,
                animatedComponentProps: c,
                expansionSpring: l,
                mountPoints: m,
            },
            children: t,
        });
    };
