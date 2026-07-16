"use strict";
n.d(t, { A: () => o, R: () => s });
var i,
    r = n(64700),
    a = n(435558),
    s =
        (((i = {})[(i.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (i[(i.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (i[(i.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (i[(i.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        i);
function l(e) {
    return +(2 === e || 3 === e);
}
let o = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: s,
            onElementResize: o,
            onElementResizeStart: d,
            onElementResizeEnd: c,
            throttleDuration: u = 300,
            orientation: _,
            usePointerEvents: E = !1,
            getClampedValue: A = a.clamp,
        } = e,
        [h, I] = r.useState(!1),
        f = r.useRef(0),
        p = r.useRef(!1),
        T = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!h || null == n.current) return;
            function e(e) {
                let t = 1 === l(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    i = (t - f.current) * (n ? -1 : 1);
                return T.current + i;
            }
            function t(e) {
                return A(e, s ?? 0, i ?? e);
            }
            let r = (0, a.throttle)(o, u);
            function m(i) {
                if (null == n.current) return null;
                let a = e(i),
                    s = t(a),
                    o = 1 === l(_) ? "width" : "height";
                (n.current.style[o] = `${s}px`), p.current || ((p.current = !0), d?.(s)), r(s, a);
            }
            function g(n) {
                I(!1);
                let i = e(n),
                    r = t(i);
                o(r, i), c?.(r), (p.current = !1);
            }
            let S = E ? "pointerup" : "mouseup",
                N = E ? "pointermove" : "mousemove",
                C = n.current.ownerDocument;
            return (
                C.addEventListener(S, g),
                C.addEventListener(N, m),
                () => {
                    C.removeEventListener(S, g), C.removeEventListener(N, m), r.cancel();
                }
            );
        }, [h, o, s, i, _, n, u, c, E, A, d]),
        r.useCallback(
            (e) => {
                let t = 1 === l(_);
                null != n.current && (T.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (f.current = t ? e.screenX : e.screenY),
                    I(!0);
            },
            [_, n],
        )
    );
};
