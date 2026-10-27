n.d(t, { X: () => c });
var l = n(477900),
    r = n(582128),
    u = n(17928),
    a = n(775602),
    o = n(607470),
    i = n(139384),
    s = n(241762);
function c(e) {
    let { isHovered: t, asset: n, poster: c, className: d, autoPlay: p = !1, ref: f } = e,
        { isExpanded: m } = (0, s.H)(),
        x = (0, u.bG)([a.Ay], () => a.Ay.useReducedMotion),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            null != h.current && (m && (!x || t) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
        }, [h, m, t, x]),
        (0, i.A)(h),
        (0, l.jsx)(o.A, {
            ref: (e) => {
                ((h.current = e), null != f && ("function" == typeof f ? f(e) : (f.current = e)));
            },
            autoPlay: p,
            poster: c,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: d,
            controls: !1,
            children: (0, l.jsx)("source", { src: n.url, type: n.mimetype ?? void 0 }),
        })
    );
}
