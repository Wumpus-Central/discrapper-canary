n.d(t, { A: () => l, R: () => s });
var i,
    r = n(64700),
    a = n(735438),
    s =
        (((i = {})[(i.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (i[(i.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (i[(i.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (i[(i.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        i);
function _(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: i,
            minDimension: s,
            onElementResize: l,
            onElementResizeStart: o,
            onElementResizeEnd: E,
            throttleDuration: d = 300,
            orientation: c,
            usePointerEvents: u = !1,
            getClampedValue: I = a.clamp,
        } = e,
        [A, T] = r.useState(!1),
        S = r.useRef(0),
        N = r.useRef(!1),
        O = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!A || null == n.current) return;
            function e(e) {
                let t = 1 === _(c) ? e.screenX : e.screenY,
                    n = 0 === c || 2 === c,
                    i = (t - S.current) * (n ? -1 : 1);
                return O.current + i;
            }
            function t(e) {
                return I(e, s ?? 0, i ?? e);
            }
            let r = (0, a.throttle)(l, d),
                R = (i) => {
                    if (null == n.current) return null;
                    let a = e(i),
                        s = t(a),
                        l = 1 === _(c) ? "width" : "height";
                    (n.current.style[l] = `${s}px`), N.current || ((N.current = !0), o?.(s)), r(s, a);
                },
                f = (n) => {
                    T(!1);
                    let i = e(n),
                        r = t(i);
                    l(r, i), E?.(r), (N.current = !1);
                },
                C = u ? "pointerup" : "mouseup",
                p = u ? "pointermove" : "mousemove",
                m = n.current.ownerDocument;
            return (
                m.addEventListener(C, f),
                m.addEventListener(p, R),
                () => {
                    m.removeEventListener(C, f), m.removeEventListener(p, R), r.cancel();
                }
            );
        }, [A, l, s, i, c, n, d, E, u, I, o]),
        r.useCallback(
            (e) => {
                let t = 1 === _(c);
                null != n.current && (O.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (S.current = t ? e.screenX : e.screenY),
                    T(!0);
            },
            [c, n],
        )
    );
};
