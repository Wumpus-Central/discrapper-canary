n.d(t, { PW: () => d, dN: () => c, oK: () => u }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(340287),
    l = n(4208),
    r = n(765671),
    o = n(398025);
n(272111);
let d = i.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: i.createRef(),
        collapsedContentRef: i.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new l.SpringValue(0),
        mountPoints: new Map(),
    }),
    c = i.forwardRef(function (e, t) {
        let { children: n, id: c, inState: u, isTextTransition: m = !1 } = e,
            {
                recalculateAnimationPositions: h,
                registerComponent: x,
                unregisterComponent: p,
                expansionSpring: g,
                mountPoints: _,
            } = i.useContext(d),
            f = i.useRef(null),
            v = i.useRef(null),
            b = i.useRef(void 0);
        i.useEffect(() => {
            h();
        }, [h]),
            i.useLayoutEffect(() => {
                let e = f.current;
                return (
                    null != e && x(e, c, u),
                    () => {
                        null != e && p(c, u);
                    }
                );
            }, [c, u, x, p]);
        let j = i.useCallback(
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
                                (0, s.createPortal)(
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
                                (0, s.createPortal)(
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
                  : "collapsed" === u && (C = (0, s.createPortal)(n(v), A)),
            (0, a.jsxs)("div", {
                style: { opacity: +((null == C && "collapsed" === u) || null == A) },
                ref: t,
                children: [n(f), C],
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: s, expansionSpring: l } = e,
            [r, o] = i.useState({}),
            [c, u] = i.useState([]),
            [m, h] = i.useState(() => new Map()),
            x = i.useCallback((e, t, n) => {
                o((a) => {
                    let i = a[t] ?? { expanded: null, collapsed: null };
                    return { ...a, [t]: { ...i, [n]: e } };
                }),
                    h((e) => {
                        let n = new Map(e);
                        return n.set(t, i.createRef()), n;
                    });
            }, []),
            p = i.useCallback((e, t) => {
                let n = !1;
                o((a) => {
                    let i = a[e] ?? { expanded: null, collapsed: null };
                    return (i[t] = null), (n = null == i.expanded && null == i.collapsed), { ...a, [e]: i };
                }),
                    n &&
                        h((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            g = i.useCallback(() => {
                let e = [];
                for (let t in r) {
                    if (null == r[t] || null == n.current || null == s.current) continue;
                    let a = r[t].collapsed,
                        i = r[t].expanded;
                    if (null == a || null == i) continue;
                    let l = i.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        d = a.getBoundingClientRect(),
                        c = s.current.getBoundingClientRect(),
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
            }, [r, n, s, u]);
        return (0, a.jsx)(d.Provider, {
            value: {
                registerComponent: x,
                unregisterComponent: p,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: s,
                recalculateAnimationPositions: g,
                animatedComponentProps: c,
                expansionSpring: l,
                mountPoints: m,
            },
            children: t,
        });
    };
