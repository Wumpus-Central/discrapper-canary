n.d(t, { A: () => u, R: () => i });
var l,
    r = n(582128),
    s = n(435558),
    i =
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
            minDimension: i,
            onElementResize: u,
            onElementResizeStart: c,
            onElementResizeEnd: o,
            throttleDuration: d = 300,
            orientation: f,
            usePointerEvents: h = !1,
            getClampedValue: m = s.clamp,
        } = e,
        [p, g] = r.useState(!1),
        A = r.useRef(0),
        v = r.useRef(!1),
        C = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!p || null == n.current) return;
            function e(e) {
                let t = 1 === a(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    l = (t - A.current) * (n ? -1 : 1);
                return C.current + l;
            }
            function t(e) {
                return m(e, i ?? 0, l ?? e);
            }
            let r = (0, s.throttle)(u, d);
            function E(l) {
                if (null == n.current) return null;
                let s = e(l),
                    i = t(s),
                    u = 1 === a(f) ? "width" : "height";
                (n.current.style[u] = `${i}px`), v.current || ((v.current = !0), c?.(i)), r(i, s);
            }
            function I(n) {
                g(!1);
                let l = e(n),
                    r = t(l);
                u(r, l), o?.(r), (v.current = !1);
            }
            let y = h ? "pointerup" : "mouseup",
                x = h ? "pointermove" : "mousemove",
                S = n.current.ownerDocument;
            return (
                S.addEventListener(y, I),
                S.addEventListener(x, E),
                () => {
                    S.removeEventListener(y, I), S.removeEventListener(x, E), r.cancel();
                }
            );
        }, [p, u, i, l, f, n, d, o, h, m, c]),
        r.useCallback(
            (e) => {
                let t = 1 === a(f);
                null != n.current && (C.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (A.current = t ? e.screenX : e.screenY),
                    g(!0);
            },
            [f, n],
        )
    );
};
