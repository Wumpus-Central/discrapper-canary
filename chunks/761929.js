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
function s(e) {
    return +(2 === e || 3 === e);
}
let o = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: l,
            minDimension: a,
            onElementResize: o,
            onElementResizeStart: u,
            onElementResizeEnd: c,
            throttleDuration: d = 300,
            orientation: f,
            usePointerEvents: h = !1,
            getClampedValue: m = i.clamp,
            onApplyDimension: p,
        } = e,
        [g, y] = r.useState(!1),
        v = r.useRef(0),
        C = r.useRef(!1),
        E = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!g || null == n.current) return;
            function e(e) {
                let t = 1 === s(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    l = (t - v.current) * (n ? -1 : 1);
                return E.current + l;
            }
            function t(e) {
                return m(e, a ?? 0, l ?? e);
            }
            let r = (0, i.throttle)(o, d),
                x = 1 === s(f) ? "width" : "height",
                S =
                    p ??
                    ((e) => {
                        null != n.current && (n.current.style[x] = `${e}px`);
                    });
            function A(l) {
                if (null == n.current) return null;
                let i = e(l),
                    a = t(i);
                S(a), C.current || ((C.current = !0), u?.(a)), r(a, i);
            }
            function I(n) {
                y(!1);
                let l = e(n),
                    r = t(l);
                S(r), o(r, l), c?.(r), (C.current = !1);
            }
            let T = h ? "pointerup" : "mouseup",
                R = h ? "pointermove" : "mousemove",
                w = n.current.ownerDocument;
            return (
                w.addEventListener(T, I),
                w.addEventListener(R, A),
                () => {
                    w.removeEventListener(T, I), w.removeEventListener(R, A), r.cancel();
                }
            );
        }, [g, o, a, l, f, n, d, c, h, m, u, p]),
        r.useCallback(
            (e) => {
                let t = 1 === s(f);
                null != n.current && (E.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (v.current = t ? e.screenX : e.screenY),
                    y(!0);
            },
            [f, n],
        )
    );
};
