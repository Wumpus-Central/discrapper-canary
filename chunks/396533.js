n.d(t, { A: () => s });
var l = n(64700),
    i = n(311907),
    a = n(775602);
function s(e) {
    let {
            key: t,
            isExpanded: n,
            durationMs: s = 100,
            minHeightOverride: r,
            maxHeightOverride: o,
            maxAnimationHeight: c,
        } = e,
        d = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        [u, m] = l.useState(null),
        p = l.useCallback(() => {}, []),
        _ = l.useRef(null),
        A = l.useRef(null),
        h = l.useRef(t),
        f = l.useRef(s);
    f.current = s;
    let x = l.useRef(r);
    x.current = r;
    let C = l.useRef(o);
    C.current = o;
    let N = l.useRef(c);
    N.current = c;
    let [g, E] = l.useState(!1),
        v = l.useCallback(() => E(!1), []);
    return (
        l.useLayoutEffect(() => {
            void 0 !== t && ((_.current = null), (A.current = null), E(!1));
        }, [t]),
        l.useLayoutEffect(() => {
            if (null == u) return;
            let { height: e } = u.getBoundingClientRect();
            !n && (null == _.current || e < _.current) && (_.current = e),
                n && (null == A.current || e > A.current) && (A.current = e);
            let l = x.current ?? _.current,
                i = C.current ?? A.current,
                a = h.current !== t;
            if (((h.current = t), null == l || null == i || a)) return;
            let s = Math.min(N.current ?? i, i),
                r = n ? l : s,
                o = n ? s : l;
            if (r === o) return;
            E(!0), (u.style.height = `${r}px`), (u.style.transition = "");
            let c = null;
            return (
                (c = requestAnimationFrame(() => {
                    (c = null), (u.style.height = `${o}px`), (u.style.transition = `height ${f.current}ms ease-in-out`);
                })),
                () => (null != c ? cancelAnimationFrame(c) : void 0)
            );
        }, [t, u, n]),
        l.useLayoutEffect(() => {
            null == u || g || ((u.style.height = ""), (u.style.transition = ""));
        }, [t, u, g]),
        { ref: d ? p : m, isTransitioning: g, onTransitionEnd: v }
    );
}
