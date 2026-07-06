u.d(t, { A: () => c });
var r = u(64700),
    n = u(17928),
    l = u(775602);
function c(e) {
    let {
            key: t,
            isExpanded: u,
            durationMs: c = 100,
            minHeightOverride: s,
            maxHeightOverride: i,
            maxAnimationHeight: a,
        } = e,
        f = (0, n.bG)([l.Ay], () => l.Ay.useReducedMotion),
        [o, h] = r.useState(null),
        y = r.useCallback(() => {}, []),
        d = r.useRef(null),
        p = r.useRef(null),
        R = r.useRef(t),
        g = r.useRef(c);
    g.current = c;
    let k = r.useRef(s);
    k.current = s;
    let m = r.useRef(i);
    m.current = i;
    let b = r.useRef(a);
    b.current = a;
    let [A, C] = r.useState(!1),
        v = r.useCallback(() => C(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((d.current = null), (p.current = null), C(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            if (null == o) return;
            let { height: e } = o.getBoundingClientRect();
            !u && (null == d.current || e < d.current) && (d.current = e),
                u && (null == p.current || e > p.current) && (p.current = e);
            let r = k.current ?? d.current,
                n = m.current ?? p.current,
                l = R.current !== t;
            if (((R.current = t), null == r || null == n || l)) return;
            let c = Math.min(b.current ?? n, n),
                s = u ? r : c,
                i = u ? c : r;
            if (s === i) return;
            C(!0), (o.style.height = `${s}px`), (o.style.transition = "");
            let a = null;
            return (
                (a = requestAnimationFrame(() => {
                    (a = null), (o.style.height = `${i}px`), (o.style.transition = `height ${g.current}ms ease-in-out`);
                })),
                () => (null != a ? cancelAnimationFrame(a) : void 0)
            );
        }, [t, o, u]),
        r.useLayoutEffect(() => {
            null == o || A || ((o.style.height = ""), (o.style.transition = ""));
        }, [t, o, A]),
        { ref: f ? y : h, isTransitioning: A, onTransitionEnd: v }
    );
}
