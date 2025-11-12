n.d(t, { r: () => l });
var r = n(647438),
    i = n(79116),
    a = n(481060);
function l(e) {
    let { container: t, edgeDistance: n = 130, maxSpeed: l = 1700, power: o = 2.2 } = e,
        c = (0, r.useRef)(null),
        s = (0, r.useRef)(0),
        u = (0, r.useRef)({
            top: 0,
            bottom: 0,
        }),
        d = (0, r.useRef)(null),
        f = (0, r.useCallback)(
            (e) => ({
                isDragging: e.isDragging(),
                clientOffset: e.getClientOffset(),
                item: e.getItem(),
            }),
            [],
        ),
        { isDragging: g, clientOffset: p, item: m } = (0, i.f)(f);
    (0, r.useEffect)(() => {
        d.current = p;
    }, [p]);
    let b = (0, a.zPA)();
    (0, r.useEffect)(() => {
        if (null == t) return;
        if (!(!0 === g && (null == m ? void 0 : m.itemType) === "WIDGET" && !b)) {
            null !== c.current && cancelAnimationFrame(c.current),
                (c.current = null),
                (t.style.overflowAnchor = "auto"),
                (t.style.overscrollBehavior = "auto"),
                (s.current = 0);
            return;
        }
        let e = t.getBoundingClientRect();
        return (
            (u.current = {
                top: e.top,
                bottom: e.bottom,
            }),
            (t.style.overflowAnchor = "none"),
            (t.style.overscrollBehavior = "contain"),
            (c.current = requestAnimationFrame(function e(r) {
                c.current = requestAnimationFrame(e);
                let i = d.current;
                if (null == t || null == i) {
                    s.current = r;
                    return;
                }
                let a = Math.min(32, 0 !== s.current ? r - s.current : 16) / 1000;
                s.current = r;
                let { top: f, bottom: g } = u.current,
                    p = i.y,
                    m = p - f,
                    b = g - p,
                    h = 0;
                if (
                    (m >= 0 && m < n
                        ? (h = -l * Math.pow(1 - m / n, o))
                        : b >= 0 && b < n && (h = l * Math.pow(1 - b / n, o)),
                    0 !== h)
                ) {
                    let e = h * a;
                    Math.abs(e) >= 1 && (t.scrollTop += Math.round(e));
                }
            })),
            () => {
                null !== c.current && cancelAnimationFrame(c.current),
                    (c.current = null),
                    (s.current = 0),
                    null != t && ((t.style.overflowAnchor = "auto"), (t.style.overscrollBehavior = "auto"));
            }
        );
    }, [t, g, null == m ? void 0 : m.itemType, n, l, o, b]);
}
