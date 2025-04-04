n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(607070);
function a(e) {
    let { key: t, isExpanded: n, durationMs: a = 100, minHeightOverride: s, maxHeightOverride: l, maxAnimationHeight: c } = e,
        u = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        [d, f] = r.useState(null),
        _ = r.useCallback(() => {}, []),
        p = u ? _ : f,
        h = r.useRef(),
        m = r.useRef(),
        g = r.useRef(t),
        E = r.useRef(a);
    E.current = a;
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
            void 0 !== t && ((h.current = void 0), (m.current = void 0), I(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: o } = d.getBoundingClientRect();
            !n && (null == h.current || o < h.current) && (h.current = o), n && (null == m.current || o > m.current) && (m.current = o);
            let a = null != (e = b.current) ? e : h.current,
                s = null != (r = y.current) ? r : m.current,
                l = g.current !== t;
            if (((g.current = t), null == a || null == s || l)) return;
            let c = Math.min(null != (i = v.current) ? i : s, s),
                u = n ? a : c,
                f = n ? c : a;
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
