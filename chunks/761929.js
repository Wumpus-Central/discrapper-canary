"use strict";
n.d(t, { A: () => l, R: () => a });
var i,
    r = n(64700),
    s = n(735438),
    a =
        (((i = {})[(i.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (i[(i.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (i[(i.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (i[(i.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        i);
function o(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: a,
            onElementResize: l,
            onElementResizeStart: u,
            onElementResizeEnd: c,
            throttleDuration: d = 300,
            orientation: _,
            usePointerEvents: f = !1,
            getClampedValue: h = s.clamp,
        } = e,
        [p, E] = r.useState(!1),
        m = r.useRef(0),
        g = r.useRef(!1),
        A = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!p || null == n.current) return;
            function e(e) {
                let t = 1 === o(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    i = (t - m.current) * (n ? -1 : 1);
                return A.current + i;
            }
            function t(e) {
                return h(e, a ?? 0, i ?? e);
            }
            let r = (0, s.throttle)(l, d),
                I = (i) => {
                    if (null == n.current) return null;
                    let s = e(i),
                        a = t(s),
                        l = 1 === o(_) ? "width" : "height";
                    (n.current.style[l] = `${a}px`), g.current || ((g.current = !0), u?.(a)), r(a, s);
                },
                T = (n) => {
                    E(!1);
                    let i = e(n),
                        r = t(i);
                    l(r, i), c?.(r), (g.current = !1);
                },
                S = f ? "pointerup" : "mouseup",
                N = f ? "pointermove" : "mousemove",
                y = n.current.ownerDocument;
            return (
                y.addEventListener(S, T),
                y.addEventListener(N, I),
                () => {
                    y.removeEventListener(S, T), y.removeEventListener(N, I), r.cancel();
                }
            );
        }, [p, l, a, i, _, n, d, c, f, h, u]),
        r.useCallback(
            (e) => {
                let t = 1 === o(_);
                null != n.current && (A.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (m.current = t ? e.screenX : e.screenY),
                    E(!0);
            },
            [_, n],
        )
    );
};
