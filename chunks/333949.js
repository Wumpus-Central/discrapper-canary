n.d(t, { X: () => c });
var l = n(477900),
    s = n(582128),
    r = n(17928),
    a = n(775602),
    i = n(607470),
    o = n(139384),
    u = n(241762);
function c(e) {
    let { isHovered: t, asset: n, poster: c, className: d, autoPlay: m = !1, ref: p } = e,
        { isExpanded: x } = (0, u.H)(),
        h = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion),
        f = s.useRef(null);
    return (
        s.useEffect(() => {
            null != f.current && (x && (!h || t) ? ((f.current.currentTime = 0), f.current.play()) : f.current.pause());
        }, [f, x, t, h]),
        (0, o.A)(f),
        (0, l.jsx)(i.A, {
            ref: (e) => {
                ((f.current = e), null != p && ("function" == typeof p ? p(e) : (p.current = e)));
            },
            autoPlay: m,
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
