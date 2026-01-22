n.d(t, {
    i: () => a,
});
var r = n(64700),
    l = n(688807),
    i = n(397927);

function a(e) {
    let { containerRef: t, itemType: n = "WIDGET", edgeDistance: a = 130, maxSpeed: s = 1700, power: o = 2.2 } = e,
        c = (0, r.useRef)(null),
        u = (0, r.useRef)(0),
        d = (0, r.useRef)({
            top: 0,
            bottom: 0,
        }),
        f = (0, r.useRef)(null),
        p = (0, r.useCallback)(
            (e) => ({
                isDragging: e.isDragging(),
                clientOffset: e.getClientOffset(),
                item: e.getItem(),
            }),
            [],
        ),
        { isDragging: b, clientOffset: g, item: m } = (0, l.V)(p);
    (0, r.useEffect)(() => {
        f.current = g;
    }, [g]);
    let y = (0, i.VUy)();
    (0, r.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === b && (null == m ? void 0 : m.itemType) === n && !y)) {
            null !== c.current && cancelAnimationFrame(c.current),
                (c.current = null),
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
            (c.current = requestAnimationFrame(function t(n) {
                c.current = requestAnimationFrame(t);
                let r = f.current;
                if (null == e || null == r) {
                    u.current = n;
                    return;
                }
                let l = Math.min(32, 0 !== u.current ? n - u.current : 16) / 1e3;
                u.current = n;
                let { top: i, bottom: p } = d.current,
                    b = r.y,
                    g = b - i,
                    m = p - b,
                    y = 0;
                if (
                    (g >= 0 && g < a
                        ? (y = -s * Math.pow(1 - g / a, o))
                        : m >= 0 && m < a && (y = s * Math.pow(1 - m / a, o)),
                    0 !== y)
                ) {
                    let t = y * l;
                    Math.abs(t) >= 1 && (e.scrollTop += Math.round(t));
                }
            })),
            () => {
                null !== c.current && cancelAnimationFrame(c.current),
                    (c.current = null),
                    (u.current = 0),
                    null != e && ((e.style.overflowAnchor = "auto"), (e.style.overscrollBehavior = "auto"));
            }
        );
    }, [t, b, null == m ? void 0 : m.itemType, n, a, s, o, y]);
}
