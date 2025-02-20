n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(607070);
function a(e) {
    let { key: t, isExpanded: n, durationMs: a = 100, minHeightOverride: s, maxHeightOverride: l, maxAnimationHeight: c } = e,
        u = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        [d, f] = r.useState(null),
        p = r.useCallback(() => {}, []),
        _ = u ? p : f,
        h = r.useRef(),
        m = r.useRef(),
        g = r.useRef(t),
        E = r.useRef(a);
    E.current = a;
    let v = r.useRef(s);
    v.current = s;
    let b = r.useRef(l);
    b.current = l;
    let y = r.useRef(c);
    y.current = c;
    let [O, S] = r.useState(!1),
        I = r.useCallback(() => S(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((h.current = void 0), (m.current = void 0), S(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            var e, r, i;
            if (null == d) return;
            let { height: o } = d.getBoundingClientRect();
            !n && (null == h.current || o < h.current) && (h.current = o), n && (null == m.current || o > m.current) && (m.current = o);
            let a = null !== (e = v.current) && void 0 !== e ? e : h.current,
                s = null !== (r = b.current) && void 0 !== r ? r : m.current,
                l = g.current !== t;
            if (((g.current = t), null == a || null == s || l)) return;
            let c = Math.min(null !== (i = y.current) && void 0 !== i ? i : s, s),
                u = n ? a : c,
                f = n ? c : a;
            if (u === f) return;
            S(!0), (d.style.height = ''.concat(u, 'px')), (d.style.transition = '');
            let p = null;
            return (
                (p = requestAnimationFrame(() => {
                    (p = null), (d.style.height = ''.concat(f, 'px')), (d.style.transition = 'height '.concat(E.current, 'ms ease-in-out'));
                })),
                () => (null != p ? cancelAnimationFrame(p) : void 0)
            );
        }, [t, d, n]),
        r.useLayoutEffect(() => {
            null != d && !O && ((d.style.height = ''), (d.style.transition = ''));
        }, [t, d, O]),
        {
            ref: _,
            isTransitioning: O,
            onTransitionEnd: I
        }
    );
}
