var l = n(477900),
    s = n(582128),
    a = n(855986),
    i = n(775602),
    r = n(607470),
    o = n(139384),
    u = n(241762);
n.d(
    t,
    {},
    {
        X: function (e) {
            let { isHovered: t, asset: n, poster: c, className: d, autoPlay: p = !1, ref: m } = e,
                { isExpanded: x } = (0, u.H)(),
                f = (0, a.bG)([i.Ay], () => i.Ay.useReducedMotion),
                h = s.useRef(null);
            return (
                s.useEffect(() => {
                    null != h.current &&
                        (x && (!f || t) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
                }, [h, x, t, f]),
                (0, o.A)(h),
                (0, l.jsx)(r.A, {
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
        },
    },
);
