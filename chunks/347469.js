n.d(t, {
    Z: () => l,
    y: () => s
}),
    n(47120);
var i = n(192379),
    r = n(392711);
let a = 300;
var s = (function (e) {
    return (e[(e.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (e[(e.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (e[(e.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (e[(e.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'), e;
})({});
function o(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
let l = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: s, minDimension: l, onElementResize: u, onElementResizeStart: c, onElementResizeEnd: d, throttleDuration: f = a, orientation: _, usePointerEvents: p = !1, getClampedValue: h = r.clamp } = e,
        [m, g] = i.useState(!1),
        E = i.useRef(0),
        v = i.useRef(!1),
        y = i.useRef(null == t ? 0 : t);
    return (
        i.useLayoutEffect(() => {
            if (!m || null == n.current) return;
            function e(e) {
                let t = 1 === o(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    i = (t - E.current) * (n ? -1 : 1);
                return y.current + i;
            }
            function t(e) {
                return h(e, null != l ? l : 0, null != s ? s : e);
            }
            let i = (0, r.throttle)(u, f),
                a = (r) => {
                    if (null == n.current) return null;
                    let a = e(r),
                        s = t(a),
                        l = 1 === o(_) ? 'width' : 'height';
                    (n.current.style[l] = ''.concat(s, 'px')), v.current || ((v.current = !0), null == c || c(s)), i(s, a);
                },
                I = (n) => {
                    g(!1);
                    let i = e(n),
                        r = t(i);
                    u(r, i), null == d || d(r), (v.current = !1);
                },
                T = p ? 'pointerup' : 'mouseup',
                b = p ? 'pointermove' : 'mousemove',
                S = n.current.ownerDocument;
            return (
                S.addEventListener(T, I),
                S.addEventListener(b, a),
                () => {
                    S.removeEventListener(T, I), S.removeEventListener(b, a), i.cancel();
                }
            );
        }, [m, u, l, s, _, n, f, d, p, h, c]),
        i.useCallback(
            (e) => {
                let t = 1 === o(_);
                null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight), (E.current = t ? e.screenX : e.screenY), g(!0);
            },
            [_, n]
        )
    );
};
