n.d(t, { r: () => l });
var r = n(647438),
    i = n(79116),
    a = n(481060);
function l(e) {
    let { container: t, edgeDistance: n = 130, maxSpeed: l = 1700, power: o = 2.2 } = e,
        s = (0, r.useRef)(null),
        c = (0, r.useRef)(0),
        u = (0, r.useCallback)(
            (e) => ({
                isDragging: e.isDragging(),
                clientOffset: e.getClientOffset(),
                itemType: e.getItemType(),
            }),
            [],
        ),
        { isDragging: d, clientOffset: f, itemType: g } = (0, i.f)(u),
        p = (0, a.zPA)();
    (0, r.useEffect)(
        () => (
            (s.current = requestAnimationFrame(function e(r) {
                if (p || null == t) return;
                if (((s.current = requestAnimationFrame(e)), !1 === d || null == f || "WIDGET" !== g)) {
                    (t.style.overflowAnchor = "auto"), (t.style.overscrollBehavior = "auto"), (c.current = r);
                    return;
                }
                (t.style.overflowAnchor = "none"), (t.style.overscrollBehavior = "contain");
                let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1000;
                c.current = r;
                let a = t.getBoundingClientRect(),
                    u = f.y,
                    m = u - a.top,
                    b = a.bottom - u,
                    h = 0;
                m >= 0 && m < n
                    ? (h = -l * Math.pow(1 - m / n, o))
                    : b >= 0 && b < n && (h = l * Math.pow(1 - b / n, o)),
                    0 !== h && (t.scrollTop += h * i);
            })),
            () => {
                null !== s.current && cancelAnimationFrame(s.current), (s.current = null), (c.current = 0);
            }
        ),
        [t, d, f, g, n, l, o, p],
    );
}
