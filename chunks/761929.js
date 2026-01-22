n.d(t, {
    A: () => l,
    R: () => s,
}),
    n(896048);
var r = n(64700),
    i = n(735438);
let a = 300;
var s = (function (e) {
    return (
        (e[(e.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
        (e[(e.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
        (e[(e.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
        (e[(e.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
        e
    );
})({});

function o(e) {
    return +(2 === e || 3 === e);
}
let l = (e) => {
    let {
            initialElementDimension: t,
            resizableDomNodeRef: n,
            maxDimension: s,
            minDimension: l,
            onElementResize: c,
            onElementResizeStart: u,
            onElementResizeEnd: d,
            throttleDuration: f = a,
            orientation: p,
            usePointerEvents: _ = !1,
            getClampedValue: h = i.clamp,
        } = e,
        [m, g] = r.useState(!1),
        E = r.useRef(0),
        b = r.useRef(!1),
        y = r.useRef(null == t ? 0 : t);
    return (
        r.useLayoutEffect(() => {
            if (!m || null == n.current) return;

            function e(e) {
                let t = 1 === o(p) ? e.screenX : e.screenY,
                    n = 0 === p || 2 === p,
                    r = (t - E.current) * (n ? -1 : 1);
                return y.current + r;
            }

            function t(e) {
                return h(e, null != l ? l : 0, null != s ? s : e);
            }
            let r = (0, i.throttle)(c, f),
                a = (i) => {
                    if (null == n.current) return null;
                    let a = e(i),
                        s = t(a),
                        l = 1 === o(p) ? "width" : "height";
                    (n.current.style[l] = "".concat(s, "px")),
                        b.current || ((b.current = !0), null == u || u(s)),
                        r(s, a);
                },
                O = (n) => {
                    g(!1);
                    let r = e(n),
                        i = t(r);
                    c(i, r), null == d || d(i), (b.current = !1);
                },
                A = _ ? "pointerup" : "mouseup",
                v = _ ? "pointermove" : "mousemove",
                S = n.current.ownerDocument;
            return (
                S.addEventListener(A, O),
                S.addEventListener(v, a),
                () => {
                    S.removeEventListener(A, O), S.removeEventListener(v, a), r.cancel();
                }
            );
        }, [m, c, l, s, p, n, f, d, _, h, u]),
        r.useCallback(
            (e) => {
                let t = 1 === o(p);
                null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight),
                    (E.current = t ? e.screenX : e.screenY),
                    g(!0);
            },
            [p, n],
        )
    );
};
