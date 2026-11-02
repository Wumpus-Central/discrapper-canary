n.d(t, { X: () => c });
var l = n(477900),
    s = n(582128),
    a = n(17928),
    r = n(775602),
    i = n(607470),
    o = n(139384),
    u = n(241762);
function c(e) {
    let { isHovered: t, asset: n, poster: c, className: d, autoPlay: p = !1, ref: m } = e,
        { isExpanded: x } = (0, u.H)(),
        f = (0, a.bG)([r.Ay], () => r.Ay.useReducedMotion),
        h = s.useRef(null);
    return (
        s.useEffect(() => {
            null != h.current && (x && (!f || t) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
        }, [h, x, t, f]),
        (0, o.A)(h),
        (0, l.jsx)(i.A, {
            ref: (e) => {
                ((h.current = e), null != m && ("function" == typeof m ? m(e) : (m.current = e)));
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
