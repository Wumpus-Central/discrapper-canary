n.d(t, { r: () => a });
var r = n(647438),
    i = n(79116),
    l = n(481060);
function a(e) {
    let { container: t, edgeDistance: n = 130, maxSpeed: a = 1700, power: o = 2.2 } = e,
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
        { isDragging: d, clientOffset: p, itemType: f } = (0, i.f)(u),
        h = (0, l.zPA)();
    (0, r.useEffect)(
        () => (
            (s.current = requestAnimationFrame(function e(r) {
                if (h || null == t) return;
                if (((s.current = requestAnimationFrame(e)), !1 === d || null == p || "WIDGET" !== f)) {
                    (t.style.overflowAnchor = "auto"), (t.style.overscrollBehavior = "auto"), (c.current = r);
                    return;
                }
                (t.style.overflowAnchor = "none"), (t.style.overscrollBehavior = "contain");
                let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1000;
                c.current = r;
                let l = t.getBoundingClientRect(),
                    u = p.y,
                    g = u - l.top,
                    m = l.bottom - u,
                    b = 0;
                g >= 0 && g < n
                    ? (b = -a * Math.pow(1 - g / n, o))
                    : m >= 0 && m < n && (b = a * Math.pow(1 - m / n, o)),
                    0 !== b && (t.scrollTop += b * i);
            })),
            () => {
                null !== s.current && cancelAnimationFrame(s.current), (s.current = null), (c.current = 0);
            }
        ),
        [t, d, p, f, n, a, o, h],
    );
}
