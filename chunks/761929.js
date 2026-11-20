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
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: l,
                    minDimension: a,
                    onElementResize: o,
                    onElementResizeStart: s,
                    onElementResizeEnd: c,
                    throttleDuration: f = 300,
                    orientation: p,
                    usePointerEvents: d = !1,
                    getClampedValue: h = i.clamp,
                    onApplyDimension: m,
                } = e,
                [g, y] = r.useState(!1),
                v = r.useRef(0),
                E = r.useRef(!1),
                w = r.useRef(null == t ? 0 : t);
            return (
                r.useLayoutEffect(() => {
                    if (!g || null == n.current) return;
                    function e(e) {
                        let t = 1 === u(p) ? e.screenX : e.screenY,
                            n = 0 === p || 2 === p,
                            l = (t - v.current) * (n ? -1 : 1);
                        return w.current + l;
                    }
                    function t(e) {
                        return h(e, a ?? 0, l ?? e);
                    }
                    let r = null != o ? (0, i.throttle)(o, f) : null,
                        x = 1 === u(p) ? "width" : "height",
                        L =
                            m ??
                            ((e) => {
                                null != n.current && (n.current.style[x] = `${e}px`);
                            });
                    function T(l) {
                        if (null == n.current) return null;
                        let i = e(l),
                            a = t(i);
                        (L(a), E.current || ((E.current = !0), s?.(a)), r?.(a, i));
                    }
                    function C(n) {
                        y(!1);
                        let l = e(n),
                            r = t(l);
                        (L(r), o?.(r, l), c?.(r), (E.current = !1));
                    }
                    let N = d ? "pointerup" : "mouseup",
                        R = d ? "pointermove" : "mousemove",
                        A = n.current.ownerDocument;
                    return (
                        A.addEventListener(N, C),
                        A.addEventListener(R, T),
                        () => {
                            (A.removeEventListener(N, C), A.removeEventListener(R, T), r?.cancel());
                        }
                    );
                }, [g, o, a, l, p, n, f, c, d, h, s, m]),
                r.useCallback(
                    (e) => {
                        let t = 1 === u(p);
                        (null != n.current && (w.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                            (v.current = t ? e.screenX : e.screenY),
                            y(!0));
                    },
                    [p, n],
                )
            );
        },
        R: a,
    },
);
