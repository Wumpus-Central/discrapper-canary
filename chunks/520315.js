n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(607070);
function o(e) {
    let {
            key: t,
            isExpanded: n,
            durationMs: o = 100,
            minHeightOverride: s,
            maxHeightOverride: l,
            maxAnimationHeight: c,
        } = e,
        u = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [d, f] = r.useState(null),
        p = r.useCallback(() => {}, []),
        _ = u ? p : f,
        m = r.useRef(null),
        h = r.useRef(null),
        g = r.useRef(t),
        E = r.useRef(o);
    E.current = o;
    let b = r.useRef(s);
    b.current = s;
    let y = r.useRef(l);
    y.current = l;
    let O = r.useRef(c);
    O.current = c;
    let [v, S] = r.useState(!1),
        I = r.useCallback(() => S(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((m.current = null), (h.current = null), S(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == m.current || a < m.current) && (m.current = a),
                n && (null == h.current || a > h.current) && (h.current = a);
            let o = null != (e = b.current) ? e : m.current,
                s = null != (r = y.current) ? r : h.current,
                l = g.current !== t;
            if (((g.current = t), null == o || null == s || l)) return;
            let c = Math.min(null != (i = O.current) ? i : s, s),
                u = n ? o : c,
                f = n ? c : o;
            if (u === f) return;
            S(!0), (d.style.height = "".concat(u, "px")), (d.style.transition = "");
            let p = null;
            return (
                (p = requestAnimationFrame(() => {
                    (p = null),
                        (d.style.height = "".concat(f, "px")),
                        (d.style.transition = "height ".concat(E.current, "ms ease-in-out"));
                })),
                () => (null != p ? cancelAnimationFrame(p) : void 0)
            );
        }, [t, d, n]),
        r.useLayoutEffect(() => {
            null == d || v || ((d.style.height = ""), (d.style.transition = ""));
        }, [t, d, v]),
        {
            ref: _,
            isTransitioning: v,
            onTransitionEnd: I,
        }
    );
}
