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
            onApplyDimension: m,
        } = e,
        [g, y] = r.useState(!1),
        E = r.useRef(0),
        v = r.useRef(!1),
        A = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!g || null == n.current) return;
            function e(e) {
                let t = 1 === s(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    l = (t - E.current) * (n ? -1 : 1);
                return A.current + l;
            }
            function t(e) {
                return p(e, a ?? 0, l ?? e);
            }
            let r = (0, i.throttle)(u, d),
                C = 1 === s(f) ? "width" : "height",
                x =
                    m ??
                    ((e) => {
                        null != n.current && (n.current.style[C] = `${e}px`);
                    });
            function S(l) {
                if (null == n.current) return null;
                let i = e(l),
                    a = t(i);
                (x(a), v.current || ((v.current = !0), o?.(a)), r(a, i));
            }
            function I(n) {
                y(!1);
                let l = e(n),
                    r = t(l);
                (x(r), u(r, l), c?.(r), (v.current = !1));
            }
            let w = h ? "pointerup" : "mouseup",
                R = h ? "pointermove" : "mousemove",
                T = n.current.ownerDocument;
            return (
                T.addEventListener(w, I),
                T.addEventListener(R, S),
                () => {
                    (T.removeEventListener(w, I), T.removeEventListener(R, S), r.cancel());
                }
            );
        }, [g, u, a, l, f, n, d, c, h, p, o, m]),
        r.useCallback(
            (e) => {
                let t = 1 === s(f);
                (null != n.current && (A.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (E.current = t ? e.screenX : e.screenY),
                    y(!0));
            },
            [f, n],
        )
    );
};
