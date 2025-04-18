n.d(t, { Z: () => o }), n(388685);
var r = n(192379),
    i = n(442837),
    a = n(607070);
function o(e) {
    let { key: t, isExpanded: n, durationMs: o = 100, minHeightOverride: s, maxHeightOverride: l, maxAnimationHeight: c } = e,
        u = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [d, f] = r.useState(null),
        _ = r.useCallback(() => {}, []),
        p = u ? _ : f,
        h = r.useRef(null),
        m = r.useRef(null),
        g = r.useRef(t),
        E = r.useRef(o);
    E.current = o;
    let b = r.useRef(s);
    b.current = s;
    let y = r.useRef(l);
    y.current = l;
    let v = r.useRef(c);
    v.current = c;
    let [O, I] = r.useState(!1),
        S = r.useCallback(() => I(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((h.current = null), (m.current = null), I(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == h.current || a < h.current) && (h.current = a), n && (null == m.current || a > m.current) && (m.current = a);
            let o = null != (e = b.current) ? e : h.current,
                s = null != (r = y.current) ? r : m.current,
                l = g.current !== t;
            if (((g.current = t), null == o || null == s || l)) return;
            let c = Math.min(null != (i = v.current) ? i : s, s),
                u = n ? o : c,
                f = n ? c : o;
            if (u === f) return;
            I(!0), (d.style.height = ''.concat(u, 'px')), (d.style.transition = '');
            let _ = null;
            return (
                (_ = requestAnimationFrame(() => {
                    (_ = null), (d.style.height = ''.concat(f, 'px')), (d.style.transition = 'height '.concat(E.current, 'ms ease-in-out'));
                })),
                () => (null != _ ? cancelAnimationFrame(_) : void 0)
            );
        }, [t, d, n]),
        r.useLayoutEffect(() => {
            null == d || O || ((d.style.height = ''), (d.style.transition = ''));
        }, [t, d, O]),
        {
            ref: p,
            isTransitioning: O,
            onTransitionEnd: S
        }
    );
}
