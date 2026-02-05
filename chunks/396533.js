"use strict";
n.d(t, { A: () => s });
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
            maxAnimationHeight: u,
        } = e,
        c = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        [d, _] = r.useState(null),
        f = r.useCallback(() => {}, []),
        p = c ? f : _,
        h = r.useRef(null),
        m = r.useRef(null),
        g = r.useRef(t),
        E = r.useRef(s);
    E.current = s;
    let A = r.useRef(o);
    A.current = o;
    let I = r.useRef(l);
    I.current = l;
    let T = r.useRef(u);
    T.current = u;
    let [y, S] = r.useState(!1),
        v = r.useCallback(() => S(!1), []);
    return (
        r.useLayoutEffect(() => {
            void 0 !== t && ((h.current = null), (m.current = null), S(!1));
        }, [t]),
        r.useLayoutEffect(() => {
            if (null == d) return;
            let { height: e } = d.getBoundingClientRect();
            !n && (null == h.current || e < h.current) && (h.current = e),
                n && (null == m.current || e > m.current) && (m.current = e);
            let r = A.current ?? h.current,
                i = I.current ?? m.current,
                a = g.current !== t;
            if (((g.current = t), null == r || null == i || a)) return;
            let s = Math.min(T.current ?? i, i),
                o = n ? r : s,
                l = n ? s : r;
            if (o === l) return;
            S(!0), (d.style.height = `${o}px`), (d.style.transition = "");
            let u = null;
            return (
                (u = requestAnimationFrame(() => {
                    (u = null), (d.style.height = `${l}px`), (d.style.transition = `height ${E.current}ms ease-in-out`);
                })),
                () => (null != u ? cancelAnimationFrame(u) : void 0)
            );
        }, [t, d, n]),
        r.useLayoutEffect(() => {
            null == d || y || ((d.style.height = ""), (d.style.transition = ""));
        }, [t, d, y]),
        { ref: p, isTransitioning: y, onTransitionEnd: v }
    );
}
