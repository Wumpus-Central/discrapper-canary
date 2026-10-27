n.d(t, { X: () => c });
var l = n(477900),
    r = n(582128),
    a = n(17928),
    o = n(775602),
    s = n(607470),
    i = n(139384),
    u = n(241762);
function c(e) {
    let { isHovered: t, asset: n, poster: c, className: d, autoPlay: p = !1, ref: m } = e,
        { isExpanded: x } = (0, u.H)(),
        h = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        C = r.useRef(null);
    return (
        r.useEffect(() => {
            null != C.current && (x && (!h || t) ? ((C.current.currentTime = 0), C.current.play()) : C.current.pause());
        }, [C, x, t, h]),
        (0, i.A)(C),
        (0, l.jsx)(s.A, {
            ref: (e) => {
                ((C.current = e), null != m && ("function" == typeof m ? m(e) : (m.current = e)));
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
