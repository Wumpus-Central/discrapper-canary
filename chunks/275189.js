n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(92951),
    l = n(442837),
    c = n(607070),
    u = n(193869),
    d = n(225055),
    f = n(23839);
function p(e) {
    let { className: t, slide: n, videoEntrySrc: o, videoLoopSrc: p } = e,
        _ = i.useRef(null),
        m = i.useRef(null),
        h = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [g, E] = i.useState(h),
        b = i.useContext(u.$r),
        y = i.useContext(d.xS),
        O = i.useCallback(() => {
            var e, t;
            E(!0), h || null == (t = m.current) || t.play(), null == (e = _.current) || e.pause();
        }, [h]),
        v = i.useCallback(
            (e) => {
                let t = (g ? m : _).current,
                    r = e.detail.canvas,
                    i = e.detail.context;
                if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
                let o = t.getBoundingClientRect(),
                    a = r.getBoundingClientRect(),
                    s = r.width / a.width,
                    l = r.height / a.height,
                    c = (o.left - a.left) * s,
                    u = (o.top - a.top) * l,
                    d = o.width,
                    f = o.height,
                    p = 0;
                null == y || y((e, t) => (t === n && (p = Math.max(e.opacity.get(), 0)), null)),
                    i.save(),
                    (i.globalCompositeOperation = "screen"),
                    (i.globalAlpha = p),
                    i.drawImage(t, c, u, d, f),
                    i.restore();
            },
            [g, n, y],
        );
    return (
        i.useEffect(() => (b.addEventListener("frameEnd", v), () => b.removeEventListener("frameEnd", v)), [b, v]),
        (0, r.jsxs)("div", {
            className: a()(f.wrapper, t),
            children: [
                (0, r.jsx)(s.Z, {
                    ref: _,
                    className: f.entryVideo,
                    style: { opacity: 0 },
                    autoPlay: !h,
                    muted: !0,
                    playsInline: !0,
                    onEnded: O,
                    children: (0, r.jsx)("source", {
                        src: o,
                        type: "video/webm",
                    }),
                }),
                (0, r.jsx)(s.Z, {
                    ref: m,
                    className: f.loopingVideo,
                    style: { opacity: 0 },
                    muted: !0,
                    playsInline: !0,
                    loop: !0,
                    children: (0, r.jsx)("source", {
                        src: p,
                        type: "video/webm",
                    }),
                }),
            ],
        })
    );
}
