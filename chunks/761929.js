n.d(t, { A: () => o, R: () => s });
var i,
    a = n(64700),
    r = n(735438),
    s =
        (((i = {})[(i.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (i[(i.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (i[(i.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (i[(i.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        i);
function l(e) {
    return +(2 === e || 3 === e);
}
let o = (e) => {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: s,
            onElementResize: o,
            onElementResizeStart: d,
            onElementResizeEnd: c,
            throttleDuration: _ = 300,
            orientation: E,
            usePointerEvents: u = !1,
            getClampedValue: A = r.clamp,
        } = e,
        [I, T] = a.useState(!1),
        h = a.useRef(0),
        S = a.useRef(!1),
        N = a.useRef(null == t ? 0 : t);
    return (
        a.useLayoutEffect(() => {
            if (!I || null == n.current) return;
            function e(e) {
                let t = 1 === l(E) ? e.screenX : e.screenY,
                    n = 0 === E || 2 === E,
                    i = (t - h.current) * (n ? -1 : 1);
                return N.current + i;
            }
            function t(e) {
                return A(e, s ?? 0, i ?? e);
            }
            let a = (0, r.throttle)(o, _),
                f = (i) => {
                    if (null == n.current) return null;
                    let r = e(i),
                        s = t(r),
                        o = 1 === l(E) ? "width" : "height";
                    (n.current.style[o] = `${s}px`), S.current || ((S.current = !0), d?.(s)), a(s, r);
                },
                p = (n) => {
                    T(!1);
                    let i = e(n),
                        a = t(i);
                    o(a, i), c?.(a), (S.current = !1);
                },
                m = u ? "pointerup" : "mouseup",
                O = u ? "pointermove" : "mousemove",
                C = n.current.ownerDocument;
            return (
                C.addEventListener(m, p),
                C.addEventListener(O, f),
                () => {
                    C.removeEventListener(m, p), C.removeEventListener(O, f), a.cancel();
                }
            );
        }, [I, o, s, i, E, n, _, c, u, A, d]),
        a.useCallback(
            (e) => {
                let t = 1 === l(E);
                null != n.current && (N.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (h.current = t ? e.screenX : e.screenY),
                    T(!0);
            },
            [E, n],
        )
    );
};
