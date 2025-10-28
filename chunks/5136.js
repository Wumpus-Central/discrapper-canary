n.d(t, { r: () => l });
var r = n(647438),
    i = n(79116),
    a = n(481060);
function l(e) {
    let { container: t, edgeDistance: n = 130, maxSpeed: l = 1700, power: o = 2.2 } = e,
        c = (0, r.useRef)(null),
        s = (0, r.useRef)(0),
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
            (c.current = requestAnimationFrame(function e(r) {
                if (p || null == t) return;
                if (((c.current = requestAnimationFrame(e)), !1 === d || null == f || "WIDGET" !== g)) {
                    (t.style.overflowAnchor = "auto"), (t.style.overscrollBehavior = "auto"), (s.current = r);
                    return;
                }
                (t.style.overflowAnchor = "none"), (t.style.overscrollBehavior = "contain");
                let i = Math.min(32, 0 !== s.current ? r - s.current : 16) / 1000;
                s.current = r;
                let a = t.getBoundingClientRect(),
                    u = f.y,
                    m = u - a.top,
                    b = a.bottom - u,
                    y = 0;
                m >= 0 && m < n
                    ? (y = -l * Math.pow(1 - m / n, o))
                    : b >= 0 && b < n && (y = l * Math.pow(1 - b / n, o)),
                    0 !== y && (t.scrollTop += y * i);
            })),
            () => {
                null !== c.current && cancelAnimationFrame(c.current), (c.current = null), (s.current = 0);
            }
        ),
        [t, d, f, g, n, l, o, p],
    );
}
