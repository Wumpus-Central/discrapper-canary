n.d(t, { A: () => s, R: () => a });
var r,
    l = n(582128),
    u = n(435558),
    a =
        (((r = {})[(r.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (r[(r.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (r[(r.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (r[(r.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        r);
function i(e) {
    return +(2 === e || 3 === e);
}
let s = function (e) {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: r,
            minDimension: a,
            onElementResize: s,
            onElementResizeStart: c,
            onElementResizeEnd: o,
            throttleDuration: d = 300,
            orientation: f,
            usePointerEvents: h = !1,
            getClampedValue: p = u.clamp,
            onApplyDimension: C,
        } = e,
        [E, m] = l.useState(!1),
        v = l.useRef(0),
        S = l.useRef(!1),
        y = l.useRef(null == t ? 0 : t);
    return (
        l.useLayoutEffect(() => {
            if (!E || null == n.current) return;
            function e(e) {
                let t = 1 === i(f) ? e.screenX : e.screenY,
                    n = 0 === f || 2 === f,
                    r = (t - v.current) * (n ? -1 : 1);
                return y.current + r;
            }
            function t(e) {
                return p(e, a ?? 0, r ?? e);
            }
            let l = (0, u.throttle)(s, d),
                I = 1 === i(f) ? "width" : "height",
                A =
                    C ??
                    ((e) => {
                        null != n.current && (n.current.style[I] = `${e}px`);
                    });
            function _(r) {
                if (null == n.current) return null;
                let u = e(r),
                    a = t(u);
                (A(a), S.current || ((S.current = !0), c?.(a)), l(a, u));
            }
            function L(n) {
                m(!1);
                let r = e(n),
                    l = t(r);
                (A(l), s(l, r), o?.(l), (S.current = !1));
            }
            let g = h ? "pointerup" : "mouseup",
                R = h ? "pointermove" : "mousemove",
                T = n.current.ownerDocument;
            return (
                T.addEventListener(g, L),
                T.addEventListener(R, _),
                () => {
                    (T.removeEventListener(g, L), T.removeEventListener(R, _), l.cancel());
                }
            );
        }, [E, s, a, r, f, n, d, o, h, p, c, C]),
        l.useCallback(
            (e) => {
                let t = 1 === i(f);
                (null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (v.current = t ? e.screenX : e.screenY),
                    m(!0));
            },
            [f, n],
        )
    );
};
