i.d(t, { i: () => a });
var n = i(64700),
    l = i(688807),
    s = i(425763);
function a(e) {
    let { containerRef: t, itemType: i = "WIDGET", edgeDistance: a = 130, maxSpeed: r = 1700, power: c = 2.2 } = e,
        u = (0, n.useRef)(null),
        o = (0, n.useRef)(0),
        d = (0, n.useRef)({ top: 0, bottom: 0 }),
        g = (0, n.useRef)(null),
        m = (0, n.useCallback)(
            (e) => ({ isDragging: e.isDragging(), clientOffset: e.getClientOffset(), item: e.getItem() }),
            [],
        ),
        { isDragging: f, clientOffset: x, item: p } = (0, l.V)(m);
    (0, n.useEffect)(() => {
        g.current = x;
    }, [x]);
    let I = (0, s.VU)();
    (0, n.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === f && p?.itemType === i && !I)) {
            null !== u.current && cancelAnimationFrame(u.current),
                (u.current = null),
                (e.style.overflowAnchor = "auto"),
                (e.style.overscrollBehavior = "auto"),
                (o.current = 0);
            return;
        }
        let n = e.getBoundingClientRect();
        return (
            (d.current = { top: n.top, bottom: n.bottom }),
            (e.style.overflowAnchor = "none"),
            (e.style.overscrollBehavior = "contain"),
            (u.current = requestAnimationFrame(function t(i) {
                u.current = requestAnimationFrame(t);
                let n = g.current;
                if (null == e || null == n) {
                    o.current = i;
                    return;
                }
                let l = Math.min(32, 0 !== o.current ? i - o.current : 16) / 1e3;
                o.current = i;
                let { top: s, bottom: m } = d.current,
                    f = n.y,
                    x = f - s,
                    p = m - f,
                    I = 0;
                if (
                    (x >= 0 && x < a
                        ? (I = -r * Math.pow(1 - x / a, c))
                        : p >= 0 && p < a && (I = r * Math.pow(1 - p / a, c)),
                    0 !== I)
                ) {
                    let t = I * l;
                    Math.abs(t) >= 1 && (e.scrollTop += Math.round(t));
                }
            })),
            () => {
                null !== u.current && cancelAnimationFrame(u.current),
                    (u.current = null),
                    (o.current = 0),
                    null != e && ((e.style.overflowAnchor = "auto"), (e.style.overscrollBehavior = "auto"));
            }
        );
    }, [t, f, p?.itemType, i, a, r, c, I]);
}
