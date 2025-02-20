n.d(t, {
    Z: () => l,
    y: () => a
}),
    n(47120);
var r = n(192379),
    i = n(392711);
let o = 300;
var a = (function (e) {
    return (e[(e.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (e[(e.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (e[(e.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (e[(e.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'), e;
})({});
function s(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: a, minDimension: l, onElementResize: c, onElementResizeStart: u, onElementResizeEnd: d, throttleDuration: f = o, orientation: p, usePointerEvents: _ = !1, getClampedValue: h = i.clamp } = e,
        [m, g] = r.useState(!1),
        E = r.useRef(0),
        v = r.useRef(!1),
        b = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!m || null == n.current) return;
            function e(e) {
                let t = 1 === s(p) ? e.screenX : e.screenY,
                    n = 0 === p || 2 === p,
                    r = (t - E.current) * (n ? -1 : 1);
                return b.current + r;
            }
            function t(e) {
                return h(e, null != l ? l : 0, null != a ? a : e);
            }
            let r = (0, i.throttle)(c, f),
                o = (i) => {
                    if (null == n.current) return null;
                    let o = e(i),
                        a = t(o),
                        l = 1 === s(p) ? 'width' : 'height';
                    (n.current.style[l] = ''.concat(a, 'px')), v.current || ((v.current = !0), null == u || u(a)), r(a, o);
                },
                y = (n) => {
                    g(!1);
                    let r = e(n),
                        i = t(r);
                    c(i, r), null == d || d(i), (v.current = !1);
                },
                O = _ ? 'pointerup' : 'mouseup',
                S = _ ? 'pointermove' : 'mousemove',
                I = n.current.ownerDocument;
            return (
                I.addEventListener(O, y),
                I.addEventListener(S, o),
                () => {
                    I.removeEventListener(O, y), I.removeEventListener(S, o), r.cancel();
                }
            );
        }, [m, c, l, a, p, n, f, d, _, h, u]),
        r.useCallback(
            (e) => {
                let t = 1 === s(p);
                null != n.current && (b.current = t ? n.current.offsetWidth : n.current.offsetHeight), (E.current = t ? e.screenX : e.screenY), g(!0);
            },
            [p, n]
        )
    );
};
