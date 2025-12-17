n.d(t, { r: () => l });
var r = n(473749),
    i = n(85707),
    a = n(481060);
function l(e) {
    let { containerRef: t, itemType: n = "WIDGET", edgeDistance: l = 130, maxSpeed: o = 1700, power: c = 2.2 } = e,
        s = (0, r.useRef)(null),
        u = (0, r.useRef)(0),
        d = (0, r.useRef)({
            top: 0,
            bottom: 0,
        }),
        f = (0, r.useRef)(null),
        g = (0, r.useCallback)(
            (e) => ({
                isDragging: e.isDragging(),
                clientOffset: e.getClientOffset(),
                item: e.getItem(),
            }),
            [],
        ),
        { isDragging: p, clientOffset: b, item: m } = (0, i.f)(g);
    (0, r.useEffect)(() => {
        f.current = b;
    }, [b]);
    let h = (0, a.zPA)();
    (0, r.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === p && (null == m ? void 0 : m.itemType) === n && !h)) {
            null !== s.current && cancelAnimationFrame(s.current),
                (s.current = null),
                (e.style.overflowAnchor = "auto"),
                (e.style.overscrollBehavior = "auto"),
                (u.current = 0);
            return;
        }
        let r = e.getBoundingClientRect();
        return (
            (d.current = {
                top: r.top,
                bottom: r.bottom,
            }),
            (e.style.overflowAnchor = "none"),
            (e.style.overscrollBehavior = "contain"),
            (s.current = requestAnimationFrame(function t(n) {
                s.current = requestAnimationFrame(t);
                let r = f.current;
                if (null == e || null == r) {
                    u.current = n;
                    return;
                }
                let i = Math.min(32, 0 !== u.current ? n - u.current : 16) / 1000;
                u.current = n;
                let { top: a, bottom: g } = d.current,
                    p = r.y,
                    b = p - a,
                    m = g - p,
                    h = 0;
                if (
                    (b >= 0 && b < l
                        ? (h = -o * Math.pow(1 - b / l, c))
                        : m >= 0 && m < l && (h = o * Math.pow(1 - m / l, c)),
                    0 !== h)
                ) {
                    let t = h * i;
                    Math.abs(t) >= 1 && (e.scrollTop += Math.round(t));
                }
            })),
            () => {
                null !== s.current && cancelAnimationFrame(s.current),
                    (s.current = null),
                    (u.current = 0),
                    null != e && ((e.style.overflowAnchor = "auto"), (e.style.overscrollBehavior = "auto"));
            }
        );
    }, [t, p, null == m ? void 0 : m.itemType, n, l, o, c, h]);
}
