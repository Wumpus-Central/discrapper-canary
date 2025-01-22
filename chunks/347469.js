r.d(n, {
    y: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(192379),
    l = r(392711);
let u = 300;
function c(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
!(function (e) {
    (e[(e.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (e[(e.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (e[(e.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (e[(e.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT');
})(i || (i = {})),
    !(function (e) {
        (e[(e.VERTICAL = 0)] = 'VERTICAL'), (e[(e.HORIZONTAL = 1)] = 'HORIZONTAL');
    })(a || (a = {}));
let d = (e) => {
    let { initialElementDimension: n, resizableDomNodeRef: r, maxDimension: i, minDimension: a, onElementResize: o, onElementResizeStart: d, onElementResizeEnd: f, throttleDuration: p = u, orientation: h, usePointerEvents: _ = !1, getClampedValue: m = l.clamp } = e,
        [g, E] = s.useState(!1),
        v = s.useRef(0),
        y = s.useRef(!1),
        b = s.useRef(null == n ? 0 : n);
    return (
        s.useLayoutEffect(() => {
            if (!g || null == r.current) return;
            function e(e) {
                let n = 1 === c(h) ? e.screenX : e.screenY,
                    r = 0 === h || 2 === h,
                    i = (n - v.current) * (r ? -1 : 1);
                return b.current + i;
            }
            function n(e) {
                return m(e, null != a ? a : 0, null != i ? i : e);
            }
            let s = (0, l.throttle)(o, p),
                u = (i) => {
                    if (null == r.current) return null;
                    let a = e(i),
                        o = n(a),
                        l = 1 === c(h) ? 'width' : 'height';
                    (r.current.style[l] = ''.concat(o, 'px')), !y.current && ((y.current = !0), null == d || d(o)), s(o, a);
                },
                I = (r) => {
                    E(!1);
                    let i = e(r),
                        a = n(i);
                    o(a, i), null == f || f(a), (y.current = !1);
                },
                T = _ ? 'pointerup' : 'mouseup',
                S = _ ? 'pointermove' : 'mousemove',
                A = r.current.ownerDocument;
            return (
                A.addEventListener(T, I),
                A.addEventListener(S, u),
                () => {
                    A.removeEventListener(T, I), A.removeEventListener(S, u), s.cancel();
                }
            );
        }, [g, o, a, i, h, r, p, f, _, m, d]),
        s.useCallback(
            (e) => {
                let n = 1 === c(h);
                null != r.current && (b.current = n ? r.current.offsetWidth : r.current.offsetHeight), (v.current = n ? e.screenX : e.screenY), E(!0);
            },
            [h, r]
        )
    );
};
n.Z = d;
