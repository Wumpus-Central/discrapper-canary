r.d(t, { i: () => o, q: () => c });
var n = r(64700),
    u = r(688807),
    l = r(425763);
function o(e) {
    let { containerRef: t, itemType: r = "WIDGET", edgeDistance: o = 130, maxSpeed: c = 1700, power: i = 2.2 } = e,
        a = (0, n.useRef)(null),
        s = (0, n.useRef)(0),
        f = (0, n.useRef)({ top: 0, bottom: 0 }),
        m = (0, n.useRef)(null),
        p = (0, n.useCallback)(
            (e) => ({
                isDragging: e.isDragging(),
                clientOffset: e.getClientOffset(),
                item: e.getItem(),
                draggedType: e.getItemType(),
            }),
            [],
        ),
        { isDragging: h, clientOffset: g, item: y, draggedType: v } = (0, u.V)(p);
    (0, n.useEffect)(() => {
        m.current = g;
    }, [g]);
    let d = (0, l.VU)();
    (0, n.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === h && (y?.itemType === r || v === r) && !d)) {
            null !== a.current && cancelAnimationFrame(a.current),
                (a.current = null),
                (e.style.overflowAnchor = "auto"),
                (e.style.overscrollBehavior = "auto"),
                (s.current = 0);
            return;
        }
        let n = e.getBoundingClientRect();
        return (
            (f.current = { top: n.top, bottom: n.bottom }),
            (e.style.overflowAnchor = "none"),
            (e.style.overscrollBehavior = "contain"),
            (a.current = requestAnimationFrame(function t(r) {
                a.current = requestAnimationFrame(t);
                let n = m.current;
                if (null == e || null == n) {
                    s.current = r;
                    return;
                }
                let u = Math.min(32, 0 !== s.current ? r - s.current : 16) / 1e3;
                s.current = r;
                let { top: l, bottom: p } = f.current,
                    h = n.y,
                    g = h - l,
                    y = p - h,
                    v = 0;
                if (
                    (g >= 0 && g < o
                        ? (v = -c * Math.pow(1 - g / o, i))
                        : y >= 0 && y < o && (v = c * Math.pow(1 - y / o, i)),
                    0 !== v)
                ) {
                    let t = v * u;
                    Math.abs(t) >= 1 && (e.scrollTop += Math.round(t));
                }
            })),
            () => {
                null !== a.current && cancelAnimationFrame(a.current),
                    (a.current = null),
                    (s.current = 0),
                    null != e && ((e.style.overflowAnchor = "auto"), (e.style.overscrollBehavior = "auto"));
            }
        );
    }, [t, h, y?.itemType, v, r, o, c, i, d]);
}
function c(e) {
    return o(e), null;
}
