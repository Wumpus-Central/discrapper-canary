n.d(t, { i: () => r });
var i = n(64700),
    l = n(688807),
    a = n(397927);
function r(e) {
    let { containerRef: t, itemType: n = "WIDGET", edgeDistance: r = 130, maxSpeed: s = 1700, power: o = 2.2 } = e,
        d = (0, i.useRef)(null),
        c = (0, i.useRef)(0),
        u = (0, i.useRef)({ top: 0, bottom: 0 }),
        g = (0, i.useRef)(null),
        m = (0, i.useCallback)(
            (e) => ({ isDragging: e.isDragging(), clientOffset: e.getClientOffset(), item: e.getItem() }),
            [],
        ),
        { isDragging: x, clientOffset: f, item: h } = (0, l.V)(m);
    (0, i.useEffect)(() => {
        g.current = f;
    }, [f]);
    let p = (0, a.VUy)();
    (0, i.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === x && h?.itemType === n && !p)) {
            null !== d.current && cancelAnimationFrame(d.current),
                (d.current = null),
                (e.style.overflowAnchor = "auto"),
                (e.style.overscrollBehavior = "auto"),
                (c.current = 0);
            return;
        }
        let i = e.getBoundingClientRect();
        return (
            (u.current = { top: i.top, bottom: i.bottom }),
            (e.style.overflowAnchor = "none"),
            (e.style.overscrollBehavior = "contain"),
            (d.current = requestAnimationFrame(function t(n) {
                d.current = requestAnimationFrame(t);
                let i = g.current;
                if (null == e || null == i) {
                    c.current = n;
                    return;
                }
                let l = Math.min(32, 0 !== c.current ? n - c.current : 16) / 1e3;
                c.current = n;
                let { top: a, bottom: m } = u.current,
                    x = i.y,
                    f = x - a,
                    h = m - x,
                    p = 0;
                if (
                    (f >= 0 && f < r
                        ? (p = -s * Math.pow(1 - f / r, o))
                        : h >= 0 && h < r && (p = s * Math.pow(1 - h / r, o)),
                    0 !== p)
                ) {
                    let t = p * l;
                    Math.abs(t) >= 1 && (e.scrollTop += Math.round(t));
                }
            })),
            () => {
                null !== d.current && cancelAnimationFrame(d.current),
                    (d.current = null),
                    (c.current = 0),
                    null != e && ((e.style.overflowAnchor = "auto"), (e.style.overscrollBehavior = "auto"));
            }
        );
    }, [t, x, h?.itemType, n, r, s, o, p]);
}
