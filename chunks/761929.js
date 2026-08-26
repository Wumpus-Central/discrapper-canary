n.d(t, { A: () => u, R: () => s });
var l,
    r = n(582128),
    i = n(435558),
    s =
        (((l = {})[(l.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (l[(l.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (l[(l.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (l[(l.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        l);
function a(e) {
    return +(2 === e || 3 === e);
}
let u = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: l,
            minDimension: s,
            onElementResize: u,
            onElementResizeStart: o,
            onElementResizeEnd: c,
            throttleDuration: d = 300,
            orientation: f,
            usePointerEvents: h = !1,
            getClampedValue: m = i.clamp,
        } = e,
        [p, g] = r.useState(!1),
        y = r.useRef(0),
        v = r.useRef(!1),
        A = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!p || null == n.current) return;
            function e(e) {
                let t = 1 === a(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    l = (t - y.current) * (n ? -1 : 1);
                return A.current + l;
            }
            function t(e) {
                return m(e, s ?? 0, l ?? e);
            }
            let r = (0, i.throttle)(u, d);
            function E(l) {
                if (null == n.current) return null;
                let i = e(l),
                    s = t(i),
                    u = 1 === a(f) ? "width" : "height";
                (n.current.style[u] = `${s}px`), v.current || ((v.current = !0), o?.(s)), r(s, i);
            }
            function C(n) {
                g(!1);
                let l = e(n),
                    r = t(l);
                u(r, l), c?.(r), (v.current = !1);
            }
            let x = h ? "pointerup" : "mouseup",
                I = h ? "pointermove" : "mousemove",
                S = n.current.ownerDocument;
            return (
                S.addEventListener(x, C),
                S.addEventListener(I, E),
                () => {
                    S.removeEventListener(x, C), S.removeEventListener(I, E), r.cancel();
                }
            );
        }, [p, u, s, l, f, n, d, c, h, m, o]),
        r.useCallback(
            (e) => {
                let t = 1 === a(f);
                null != n.current && (A.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (y.current = t ? e.screenX : e.screenY),
                    g(!0);
            },
            [f, n],
        )
    );
};
