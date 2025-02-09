n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(607070);
function s(e) {
    let { key: t, isExpanded: n, durationMs: s = 100, minHeightOverride: o, maxHeightOverride: l, maxAnimationHeight: u } = e,
        c = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        [d, f] = i.useState(null),
        _ = i.useCallback(() => {}, []),
        p = c ? _ : f,
        h = i.useRef(),
        m = i.useRef(),
        g = i.useRef(t),
        E = i.useRef(s);
    E.current = s;
    let v = i.useRef(o);
    v.current = o;
    let y = i.useRef(l);
    y.current = l;
    let I = i.useRef(u);
    I.current = u;
    let [T, b] = i.useState(!1),
        S = i.useCallback(() => b(!1), []);
    return (
        i.useLayoutEffect(() => {
            void 0 !== t && ((h.current = void 0), (m.current = void 0), b(!1));
        }, [t]),
        i.useLayoutEffect(() => {
            var e, i, r;
            if (null == d) return;
            let { height: a } = d.getBoundingClientRect();
            !n && (null == h.current || a < h.current) && (h.current = a), n && (null == m.current || a > m.current) && (m.current = a);
            let s = null !== (e = v.current) && void 0 !== e ? e : h.current,
                o = null !== (i = y.current) && void 0 !== i ? i : m.current,
                l = g.current !== t;
            if (((g.current = t), null == s || null == o || l)) return;
            let u = Math.min(null !== (r = I.current) && void 0 !== r ? r : o, o),
                c = n ? s : u,
                f = n ? u : s;
            if (!(c !== f)) return;
            b(!0), (d.style.height = ''.concat(c, 'px')), (d.style.transition = '');
            let _ = null;
            return (
                (_ = requestAnimationFrame(() => {
                    (_ = null), (d.style.height = ''.concat(f, 'px')), (d.style.transition = 'height '.concat(E.current, 'ms ease-in-out'));
                })),
                () => (null != _ ? cancelAnimationFrame(_) : void 0)
            );
        }, [t, d, n]),
        i.useLayoutEffect(() => {
            null != d && !T && ((d.style.height = ''), (d.style.transition = ''));
        }, [t, d, T]),
        {
            ref: p,
            isTransitioning: T,
            onTransitionEnd: S
        }
    );
}
