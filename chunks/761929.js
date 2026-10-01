n.d(t, { A: () => o, R: () => a });
var l,
    r = n(582128),
    i = n(435558),
    a =
        (((l = {})[(l.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (l[(l.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (l[(l.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (l[(l.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        l);
function u(e) {
    return +(2 === e || 3 === e);
}
let o = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: l,
            minDimension: a,
            onElementResize: o,
            onElementResizeStart: s,
            onElementResizeEnd: c,
            throttleDuration: f = 300,
            orientation: d,
            usePointerEvents: p = !1,
            getClampedValue: h = i.clamp,
            onApplyDimension: m,
        } = e,
        [g, y] = r.useState(!1),
        E = r.useRef(0),
        v = r.useRef(!1),
        x = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!g || null == n.current) return;
            function e(e) {
                let t = 1 === u(d) ? e.screenX : e.screenY,
                    n = 0 === d || 2 === d,
                    l = (t - E.current) * (n ? -1 : 1);
                return x.current + l;
            }
            function t(e) {
                return h(e, a ?? 0, l ?? e);
            }
            let r = null != o ? (0, i.throttle)(o, f) : null,
                L = 1 === u(d) ? "width" : "height",
                T =
                    m ??
                    ((e) => {
                        null != n.current && (n.current.style[L] = `${e}px`);
                    });
            function C(l) {
                if (null == n.current) return null;
                let i = e(l),
                    a = t(i);
                (T(a), v.current || ((v.current = !0), s?.(a)), r?.(a, i));
            }
            function w(n) {
                y(!1);
                let l = e(n),
                    r = t(l);
                (T(r), o?.(r, l), c?.(r), (v.current = !1));
            }
            let R = p ? "pointerup" : "mouseup",
                S = p ? "pointermove" : "mousemove",
                A = n.current.ownerDocument;
            return (
                A.addEventListener(R, w),
                A.addEventListener(S, C),
                () => {
                    (A.removeEventListener(R, w), A.removeEventListener(S, C), r?.cancel());
                }
            );
        }, [g, o, a, l, d, n, f, c, p, h, s, m]),
        r.useCallback(
            (e) => {
                let t = 1 === u(d);
                (null != n.current && (x.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (E.current = t ? e.screenX : e.screenY),
                    y(!0));
            },
            [d, n],
        )
    );
};
