n.d(t, {
    Z: () => l,
    y: () => o
}),
    n(388685);
var r = n(73800),
    i = n(392711);
let a = 300;
var o = (function (e) {
    return (e[(e.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (e[(e.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (e[(e.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (e[(e.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'), e;
})({});
function s(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: o, minDimension: l, onElementResize: c, onElementResizeStart: u, onElementResizeEnd: d, throttleDuration: f = a, orientation: _, usePointerEvents: p = !1, getClampedValue: h = i.clamp } = e,
        [m, g] = r.useState(!1),
        E = r.useRef(0),
        b = r.useRef(!1),
        y = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!m || null == n.current) return;
            function e(e) {
                let t = 1 === s(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    r = (t - E.current) * (n ? -1 : 1);
                return y.current + r;
            }
            function t(e) {
                return h(e, null != l ? l : 0, null != o ? o : e);
            }
            let r = (0, i.throttle)(c, f),
                a = (i) => {
                    if (null == n.current) return null;
                    let a = e(i),
                        o = t(a),
                        l = 1 === s(_) ? 'width' : 'height';
                    (n.current.style[l] = ''.concat(o, 'px')), b.current || ((b.current = !0), null == u || u(o)), r(o, a);
                },
                O = (n) => {
                    g(!1);
                    let r = e(n),
                        i = t(r);
                    c(i, r), null == d || d(i), (b.current = !1);
                },
                v = p ? 'pointerup' : 'mouseup',
                I = p ? 'pointermove' : 'mousemove',
                S = n.current.ownerDocument;
            return (
                S.addEventListener(v, O),
                S.addEventListener(I, a),
                () => {
                    S.removeEventListener(v, O), S.removeEventListener(I, a), r.cancel();
                }
            );
        }, [m, c, l, o, _, n, f, d, p, h, u]),
        r.useCallback(
            (e) => {
                let t = 1 === s(_);
                null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight), (E.current = t ? e.screenX : e.screenY), g(!0);
            },
            [_, n]
        )
    );
};
