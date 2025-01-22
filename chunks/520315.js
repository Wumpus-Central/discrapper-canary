r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(607070);
function l(e) {
    let { key: n, isExpanded: r, durationMs: i = 100, minHeightOverride: l, maxHeightOverride: u, maxAnimationHeight: c } = e,
        d = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [f, p] = a.useState(null),
        h = a.useCallback(() => {}, []),
        _ = d ? h : p,
        m = a.useRef(),
        g = a.useRef(),
        E = a.useRef(n),
        v = a.useRef(i);
    v.current = i;
    let y = a.useRef(l);
    y.current = l;
    let b = a.useRef(u);
    b.current = u;
    let I = a.useRef(c);
    I.current = c;
    let [T, S] = a.useState(!1),
        A = a.useCallback(() => S(!1), []);
    return (
        a.useLayoutEffect(() => {
            void 0 !== n && ((m.current = void 0), (g.current = void 0), S(!1));
        }, [n]),
        a.useLayoutEffect(() => {
            var e, i, a;
            if (null == f) return;
            let { height: o } = f.getBoundingClientRect();
            !r && (null == m.current || o < m.current) && (m.current = o), r && (null == g.current || o > g.current) && (g.current = o);
            let s = null !== (e = y.current) && void 0 !== e ? e : m.current,
                l = null !== (i = b.current) && void 0 !== i ? i : g.current,
                u = E.current !== n;
            if (((E.current = n), null == s || null == l || u)) return;
            let c = Math.min(null !== (a = I.current) && void 0 !== a ? a : l, l),
                d = r ? s : c,
                p = r ? c : s;
            if (!(d !== p)) return;
            S(!0), (f.style.height = ''.concat(d, 'px')), (f.style.transition = '');
            let h = null;
            return (
                (h = requestAnimationFrame(() => {
                    (h = null), (f.style.height = ''.concat(p, 'px')), (f.style.transition = 'height '.concat(v.current, 'ms ease-in-out'));
                })),
                () => (null != h ? cancelAnimationFrame(h) : void 0)
            );
        }, [n, f, r]),
        a.useLayoutEffect(() => {
            if (null != f && !T) (f.style.height = ''), (f.style.transition = '');
        }, [n, f, T]),
        {
            ref: _,
            isTransitioning: T,
            onTransitionEnd: A
        }
    );
}
