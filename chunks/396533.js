n.d(t, { A: () => s });
var i = n(64700),
    l = n(17928),
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
        d = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        [u, m] = i.useState(null),
        p = i.useCallback(() => {}, []),
        _ = i.useRef(null),
        h = i.useRef(null),
        A = i.useRef(t),
        f = i.useRef(s);
    f.current = s;
    let x = i.useRef(r);
    x.current = r;
    let C = i.useRef(o);
    C.current = o;
    let g = i.useRef(c);
    g.current = c;
    let [N, E] = i.useState(!1),
        b = i.useCallback(() => E(!1), []);
    return (
        i.useLayoutEffect(() => {
            void 0 !== t && ((_.current = null), (h.current = null), E(!1));
        }, [t]),
        i.useLayoutEffect(() => {
            if (null == u) return;
            let { height: e } = u.getBoundingClientRect();
            !n && (null == _.current || e < _.current) && (_.current = e),
                n && (null == h.current || e > h.current) && (h.current = e);
            let i = x.current ?? _.current,
                l = C.current ?? h.current,
                a = A.current !== t;
            if (((A.current = t), null == i || null == l || a)) return;
            let s = Math.min(g.current ?? l, l),
                r = n ? i : s,
                o = n ? s : i;
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
        i.useLayoutEffect(() => {
            null == u || N || ((u.style.height = ""), (u.style.transition = ""));
        }, [t, u, N]),
        { ref: d ? p : m, isTransitioning: N, onTransitionEnd: b }
    );
}
