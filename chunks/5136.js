r.d(t, { r: () => l });
var n = r(647438),
    i = r(323946);
function l(e) {
    let { container: t, edgeDistance: r = 130, maxSpeed: l = 1700, power: a = 2.2 } = e,
        o = (0, n.useRef)(null),
        c = (0, n.useRef)(0),
        s = (0, n.useCallback)(
            (e) => ({
                isDragging: e.isDragging(),
                clientOffset: e.getClientOffset(),
            }),
            [],
        ),
        { isDragging: u, clientOffset: d } = (0, i.f)(s);
    (0, n.useEffect)(
        () => (
            (o.current = requestAnimationFrame(function e(n) {
                if (null == t) return;
                if (((o.current = requestAnimationFrame(e)), !1 === u || null == d)) {
                    (t.style.overflowAnchor = "auto"), (t.style.overscrollBehavior = "auto"), (c.current = n);
                    return;
                }
                (t.style.overflowAnchor = "none"), (t.style.overscrollBehavior = "contain");
                let i = Math.min(32, 0 !== c.current ? n - c.current : 16) / 1000;
                c.current = n;
                let s = t.getBoundingClientRect(),
                    f = d.y,
                    g = f - s.top,
                    p = s.bottom - f,
                    b = 0;
                g >= 0 && g < r
                    ? (b = -l * Math.pow(1 - g / r, a))
                    : p >= 0 && p < r && (b = l * Math.pow(1 - p / r, a)),
                    0 !== b && (t.scrollTop += b * i);
            })),
            () => {
                null !== o.current && cancelAnimationFrame(o.current), (o.current = null), (c.current = 0);
            }
        ),
        [t, u, d, r, l, a],
    );
}
