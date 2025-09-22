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
            }),
            [],
        ),
        { isDragging: d, clientOffset: p } = (0, i.f)(u),
        f = (0, l.zPA)();
    (0, r.useEffect)(
        () => (
            (s.current = requestAnimationFrame(function e(r) {
                if (f || null == t) return;
                if (((s.current = requestAnimationFrame(e)), !1 === d || null == p)) {
                    (t.style.overflowAnchor = "auto"), (t.style.overscrollBehavior = "auto"), (c.current = r);
                    return;
                }
                (t.style.overflowAnchor = "none"), (t.style.overscrollBehavior = "contain");
                let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1000;
                c.current = r;
                let l = t.getBoundingClientRect(),
                    u = p.y,
                    h = u - l.top,
                    g = l.bottom - u,
                    m = 0;
                h >= 0 && h < n
                    ? (m = -a * Math.pow(1 - h / n, o))
                    : g >= 0 && g < n && (m = a * Math.pow(1 - g / n, o)),
                    0 !== m && (t.scrollTop += m * i);
            })),
            () => {
                null !== s.current && cancelAnimationFrame(s.current), (s.current = null), (c.current = 0);
            }
        ),
        [t, d, p, n, a, o, f],
    );
}
