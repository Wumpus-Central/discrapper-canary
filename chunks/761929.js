"use strict";
n.d(t, { A: () => o, R: () => r });
var l,
    i = n(582128),
    s = n(435558),
    r =
        (((l = {})[(l.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (l[(l.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (l[(l.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (l[(l.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        l);
function a(e) {
    return +(2 === e || 3 === e);
}
let o = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: l,
            minDimension: r,
            onElementResize: o,
            onElementResizeStart: u,
            onElementResizeEnd: c,
            throttleDuration: d = 300,
            orientation: h,
            usePointerEvents: m = !1,
            getClampedValue: f = s.clamp,
        } = e,
        [p, g] = i.useState(!1),
        x = i.useRef(0),
        A = i.useRef(!1),
        E = i.useRef(null == t ? 0 : t);
    return (
        i.useLayoutEffect(() => {
            if (!p || null == n.current) return;
            function e(e) {
                let t = 1 === a(h) ? e.screenX : e.screenY,
                    n = 0 === h || 2 === h,
                    l = (t - x.current) * (n ? -1 : 1);
                return E.current + l;
            }
            function t(e) {
                return f(e, r ?? 0, l ?? e);
            }
            let i = (0, s.throttle)(o, d);
            function C(l) {
                if (null == n.current) return null;
                let s = e(l),
                    r = t(s),
                    o = 1 === a(h) ? "width" : "height";
                (n.current.style[o] = `${r}px`), A.current || ((A.current = !0), u?.(r)), i(r, s);
            }
            function I(n) {
                g(!1);
                let l = e(n),
                    i = t(l);
                o(i, l), c?.(i), (A.current = !1);
            }
            let y = m ? "pointerup" : "mouseup",
                S = m ? "pointermove" : "mousemove",
                v = n.current.ownerDocument;
            return (
                v.addEventListener(y, I),
                v.addEventListener(S, C),
                () => {
                    v.removeEventListener(y, I), v.removeEventListener(S, C), i.cancel();
                }
            );
        }, [p, o, r, l, h, n, d, c, m, f, u]),
        i.useCallback(
            (e) => {
                let t = 1 === a(h);
                null != n.current && (E.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (x.current = t ? e.screenX : e.screenY),
                    g(!0);
            },
            [h, n],
        )
    );
};
