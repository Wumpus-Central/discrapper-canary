var s = n(477900),
    l = n(582128),
    a = n(855986),
    r = n(775602),
    i = n(607470),
    o = n(139384),
    u = n(241762);
n.d(
    t,
    {},
    {
        X: function (e) {
            let { isHovered: t, asset: n, poster: c, className: d, autoPlay: m = !1, ref: p } = e,
                { isExpanded: x } = (0, u.H)(),
                f = (0, a.bG)([r.Ay], () => r.Ay.useReducedMotion),
                h = l.useRef(null);
            return (
                l.useEffect(() => {
                    null != h.current &&
                        (x && (!f || t) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
                }, [h, x, t, f]),
                (0, o.A)(h),
                (0, s.jsx)(i.A, {
                    ref: (e) => {
                        ((h.current = e), null != p && ("function" == typeof p ? p(e) : (p.current = e)));
                    },
                    autoPlay: m,
                    poster: c,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: d,
                    controls: !1,
                    children: (0, s.jsx)("source", { src: n.url, type: n.mimetype ?? void 0 }),
                })
            );
        },
    },
);
