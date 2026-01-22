n.d(t, { A: () => s }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(775602);
function s(e) {
    let {
            key: t,
            isExpanded: n,
            durationMs: s = 100,
            minHeightOverride: o,
            maxHeightOverride: l,
            maxAnimationHeight: c,
        } = e,
        u = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        [d, f] = r.useState(null),
        p = r.useCallback(() => {}, []),
        _ = u ? p : f,
        h = r.useRef(null),
        m = r.useRef(null),
        g = r.useRef(t),
        E = r.useRef(s);
    E.current = s;
    let b = r.useRef(o);
    b.current = o;
    let y = r.useRef(l);
    y.current = l;
    let O = r.useRef(c);
    O.current = c;
    let [A, v] = r.useState(!1),
        S = r.useCallback(() => v(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((h.current = null), (m.current = null), v(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == h.current || a < h.current) && (h.current = a),
                n && (null == m.current || a > m.current) && (m.current = a);
            let s = null != (e = b.current) ? e : h.current,
                o = null != (r = y.current) ? r : m.current,
                l = g.current !== t;
            if (((g.current = t), null == s || null == o || l)) return;
            let c = Math.min(null != (i = O.current) ? i : o, o),
                u = n ? s : c,
                f = n ? c : s;
            if (u === f) return;
            v(!0), (d.style.height = "".concat(u, "px")), (d.style.transition = "");
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
            null == d || A || ((d.style.height = ""), (d.style.transition = ""));
        }, [t, d, A]),
        {
            ref: _,
            isTransitioning: A,
            onTransitionEnd: S,
        }
    );
}
