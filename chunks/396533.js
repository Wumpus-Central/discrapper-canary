"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(17928),
    s = n(775602);
function a(e) {
    let {
            key: t,
            isExpanded: n,
            durationMs: a = 100,
            minHeightOverride: o,
            maxHeightOverride: l,
            maxAnimationHeight: u,
        } = e,
        c = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion),
        [d, _] = i.useState(null),
        h = i.useCallback(() => {}, []),
        f = i.useRef(null),
        p = i.useRef(null),
        E = i.useRef(t),
        m = i.useRef(a);
    m.current = a;
    let g = i.useRef(o);
    g.current = o;
    let A = i.useRef(l);
    A.current = l;
    let I = i.useRef(u);
    I.current = u;
    let [T, S] = i.useState(!1),
        y = i.useCallback(() => S(!1), []);
    return (
        i.useLayoutEffect(() => {
            void 0 !== t && ((f.current = null), (p.current = null), S(!1));
        }, [t]),
        i.useLayoutEffect(() => {
            if (null == d) return;
            let { height: e } = d.getBoundingClientRect();
            !n && (null == f.current || e < f.current) && (f.current = e),
                n && (null == p.current || e > p.current) && (p.current = e);
            let i = g.current ?? f.current,
                r = A.current ?? p.current,
                s = E.current !== t;
            if (((E.current = t), null == i || null == r || s)) return;
            let a = Math.min(I.current ?? r, r),
                o = n ? i : a,
                l = n ? a : i;
            if (o === l) return;
            S(!0), (d.style.height = `${o}px`), (d.style.transition = "");
            let u = null;
            return (
                (u = requestAnimationFrame(() => {
                    (u = null), (d.style.height = `${l}px`), (d.style.transition = `height ${m.current}ms ease-in-out`);
                })),
                () => (null != u ? cancelAnimationFrame(u) : void 0)
            );
        }, [t, d, n]),
        i.useLayoutEffect(() => {
            null == d || T || ((d.style.height = ""), (d.style.transition = ""));
        }, [t, d, T]),
        { ref: c ? h : _, isTransitioning: T, onTransitionEnd: y }
    );
}
