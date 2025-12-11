n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(92951),
    l = n(442837),
    c = n(607070),
    u = n(193869),
    d = n(225055),
    f = n(609150);
function p(e) {
    let { className: t, slide: n, videoEntrySrc: a, videoLoopSrc: p } = e,
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
                let a = t.getBoundingClientRect(),
                    o = r.getBoundingClientRect(),
                    s = r.width / o.width,
                    l = r.height / o.height,
                    c = (a.left - o.left) * s,
                    u = (a.top - o.top) * l,
                    d = a.width,
                    f = a.height,
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
            className: o()(f.wrapper, t),
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
                        src: a,
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
