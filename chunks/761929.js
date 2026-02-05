"use strict";
n.d(t, { A: () => l, R: () => s });
var r = n(64700),
    i = n(735438);
let a = 300;
var s = (function (e) {
    return (
        (e[(e.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (e[(e.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (e[(e.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (e[(e.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        e
    );
})({});
function o(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: s,
            minDimension: l,
            onElementResize: u,
            onElementResizeStart: c,
            onElementResizeEnd: d,
            throttleDuration: _ = a,
            orientation: f,
            usePointerEvents: p = !1,
            getClampedValue: h = i.clamp,
        } = e,
        [m, g] = r.useState(!1),
        E = r.useRef(0),
        A = r.useRef(!1),
        I = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!m || null == n.current) return;
            function e(e) {
                let t = 1 === o(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    r = (t - E.current) * (n ? -1 : 1);
                return I.current + r;
            }
            function t(e) {
                return h(e, l ?? 0, s ?? e);
            }
            let r = (0, i.throttle)(u, _),
                a = (i) => {
                    if (null == n.current) return null;
                    let a = e(i),
                        s = t(a),
                        l = 1 === o(f) ? "width" : "height";
                    (n.current.style[l] = `${s}px`), A.current || ((A.current = !0), c?.(s)), r(s, a);
                },
                T = (n) => {
                    g(!1);
                    let r = e(n),
                        i = t(r);
                    u(i, r), d?.(i), (A.current = !1);
                },
                y = p ? "pointerup" : "mouseup",
                S = p ? "pointermove" : "mousemove",
                v = n.current.ownerDocument;
            return (
                v.addEventListener(y, T),
                v.addEventListener(S, a),
                () => {
                    v.removeEventListener(y, T), v.removeEventListener(S, a), r.cancel();
                }
            );
        }, [m, u, l, s, f, n, _, d, p, h, c]),
        r.useCallback(
            (e) => {
                let t = 1 === o(f);
                null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (E.current = t ? e.screenX : e.screenY),
                    g(!0);
            },
            [f, n],
        )
    );
};
