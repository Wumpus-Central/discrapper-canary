n.d(t, { A: () => u, R: () => a });
var l,
    r = n(582128),
    i = n(435558),
    a =
        (((l = {})[(l.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (l[(l.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (l[(l.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (l[(l.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        l);
function s(e) {
    return +(2 === e || 3 === e);
}
let u = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: l,
            minDimension: a,
            onElementResize: u,
            onElementResizeStart: o,
            onElementResizeEnd: c,
            throttleDuration: d = 300,
            orientation: f,
            usePointerEvents: h = !1,
            getClampedValue: p = i.clamp,
        } = e,
        [m, g] = r.useState(!1),
        y = r.useRef(0),
        v = r.useRef(!1),
        E = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!m || null == n.current) return;
            function e(e) {
                let t = 1 === s(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    l = (t - y.current) * (n ? -1 : 1);
                return E.current + l;
            }
            function t(e) {
                return p(e, a ?? 0, l ?? e);
            }
            let r = (0, i.throttle)(u, d);
            function A(l) {
                if (null == n.current) return null;
                let i = e(l),
                    a = t(i),
                    u = 1 === s(f) ? "width" : "height";
                (n.current.style[u] = `${a}px`), v.current || ((v.current = !0), o?.(a)), r(a, i);
            }
            function C(n) {
                g(!1);
                let l = e(n),
                    r = t(l);
                u(r, l), c?.(r), (v.current = !1);
            }
            let x = h ? "pointerup" : "mouseup",
                S = h ? "pointermove" : "mousemove",
                I = n.current.ownerDocument;
            return (
                I.addEventListener(x, C),
                I.addEventListener(S, A),
                () => {
                    I.removeEventListener(x, C), I.removeEventListener(S, A), r.cancel();
                }
            );
        }, [m, u, a, l, f, n, d, c, h, p, o]),
        r.useCallback(
            (e) => {
                let t = 1 === s(f);
                null != n.current && (E.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (y.current = t ? e.screenX : e.screenY),
                    g(!0);
            },
            [f, n],
        )
    );
};
