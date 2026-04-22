"use strict";
n.d(t, { A: () => l, R: () => a });
var r,
    i = n(64700),
    s = n(735438),
    a =
        (((r = {})[(r.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (r[(r.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (r[(r.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (r[(r.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        r);
function o(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: r,
            minDimension: a,
            onElementResize: l,
            onElementResizeStart: u,
            onElementResizeEnd: d,
            throttleDuration: c = 300,
            orientation: _,
            usePointerEvents: f = !1,
            getClampedValue: E = s.clamp,
        } = e,
        [h, p] = i.useState(!1),
        m = i.useRef(0),
        g = i.useRef(!1),
        A = i.useRef(null == t ? 0 : t);
    return (
        i.useLayoutEffect(() => {
            if (!h || null == n.current) return;
            function e(e) {
                let t = 1 === o(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    r = (t - m.current) * (n ? -1 : 1);
                return A.current + r;
            }
            function t(e) {
                return E(e, a ?? 0, r ?? e);
            }
            let i = (0, s.throttle)(l, c),
                I = (r) => {
                    if (null == n.current) return null;
                    let s = e(r),
                        a = t(s),
                        l = 1 === o(_) ? "width" : "height";
                    (n.current.style[l] = `${a}px`), g.current || ((g.current = !0), u?.(a)), i(a, s);
                },
                T = (n) => {
                    p(!1);
                    let r = e(n),
                        i = t(r);
                    l(i, r), d?.(i), (g.current = !1);
                },
                S = f ? "pointerup" : "mouseup",
                y = f ? "pointermove" : "mousemove",
                N = n.current.ownerDocument;
            return (
                N.addEventListener(S, T),
                N.addEventListener(y, I),
                () => {
                    N.removeEventListener(S, T), N.removeEventListener(y, I), i.cancel();
                }
            );
        }, [h, l, a, r, _, n, c, d, f, E, u]),
        i.useCallback(
            (e) => {
                let t = 1 === o(_);
                null != n.current && (A.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (m.current = t ? e.screenX : e.screenY),
                    p(!0);
            },
            [_, n],
        )
    );
};
