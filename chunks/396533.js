"use strict";
i.d(t, { A: () => a });
var r = i(64700),
    l = i(311907),
    n = i(775602);
function a(e) {
    let {
            key: t,
            isExpanded: i,
            durationMs: a = 100,
            minHeightOverride: s,
            maxHeightOverride: o,
            maxAnimationHeight: c,
        } = e,
        u = (0, l.bG)([n.A], () => n.A.useReducedMotion),
        [d, _] = r.useState(null),
        h = r.useCallback(() => {}, []),
        p = r.useRef(null),
        f = r.useRef(null),
        g = r.useRef(t),
        m = r.useRef(a);
    m.current = a;
    let A = r.useRef(s);
    A.current = s;
    let v = r.useRef(o);
    v.current = o;
    let b = r.useRef(c);
    b.current = c;
    let [E, I] = r.useState(!1),
        x = r.useCallback(() => I(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((p.current = null), (f.current = null), I(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            if (null == d) return;
            let { height: e } = d.getBoundingClientRect();
            !i && (null == p.current || e < p.current) && (p.current = e),
                i && (null == f.current || e > f.current) && (f.current = e);
            let r = A.current ?? p.current,
                l = v.current ?? f.current,
                n = g.current !== t;
            if (((g.current = t), null == r || null == l || n)) return;
            let a = Math.min(b.current ?? l, l),
                s = i ? r : a,
                o = i ? a : r;
            if (s === o) return;
            I(!0), (d.style.height = `${s}px`), (d.style.transition = "");
            let c = null;
            return (
                (c = requestAnimationFrame(() => {
                    (c = null), (d.style.height = `${o}px`), (d.style.transition = `height ${m.current}ms ease-in-out`);
                })),
                () => (null != c ? cancelAnimationFrame(c) : void 0)
            );
        }, [t, d, i]),
        r.useLayoutEffect(() => {
            null == d || E || ((d.style.height = ""), (d.style.transition = ""));
        }, [t, d, E]),
        { ref: u ? h : _, isTransitioning: E, onTransitionEnd: x }
    );
}
