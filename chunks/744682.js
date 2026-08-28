n.d(t, { P: () => m });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(480664),
    u = n.n(s),
    o = n(844222),
    c = n(460890),
    d = n(260612),
    f = n(964486),
    h = n(354328),
    p = n(162118);
let m = r.forwardRef(function (e, t) {
    let {
            color: i,
            useLottieDefaultColors: s,
            src: m,
            size: g = "md",
            width: y,
            height: v,
            className: E,
            initialAnimation: A,
            initialFrame: C,
            markers: x,
            onBeforeDismount: S,
        } = e,
        [I, T] = r.useState(null),
        R = r.useRef(null),
        w = r.useRef(null),
        b = r.useRef(null),
        N = "custom" === g ? { width: y, height: v } : (0, d.J)(g),
        _ = !(0, h.A)("lottie_hover_multiple_loop"),
        L = r.useContext(o.C).reducedMotion.enabled,
        k = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        j = L || !k,
        O = r.useRef(A);
    return (
        (0, f.l0)(() => {
            S?.({ finalFrame: b.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == b.current) return;
                    let t = null == w.current;
                    if (((w.current = e), j)) {
                        let t = x[e];
                        b.current.resetSegments(!0),
                            b.current.setSegment(t.start + t.duration, t.start + t.duration),
                            b.current.stop();
                    } else {
                        b.current.setLoop(!_ && e.includes("hover")), b.current.resetSegments(!0);
                        let n = t && null != C && C >= x[e].start && C <= x[e].start + x[e].duration ? C : x[e].start;
                        b.current.playSegments([n, x[e].start + x[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == b.current || j) return;
                },
                stopIfPlaying: (e) => {
                    null == b.current ||
                        j ||
                        (w.current === e &&
                            (b.current.resetSegments(!0),
                            b.current.setSegment(x[e].start, x[e].start),
                            b.current.stop()));
                },
                getDuration: (e) => (null == b.current ? null : b.current.getDuration(e)),
                getCurrentFrame: () => (null == b.current ? null : b.current.currentFrame),
            }),
            [j, _, x, C],
        ),
        r.useEffect(() => {
            null == I && m().then((e) => T(e.default));
        }, [I, m]),
        r.useEffect(
            () => (
                n
                    .e("996382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e;
                        if (null == R.current) return;
                        let l = 1 === Object.keys(x).length ? Object.values(x)[0].name : void 0,
                            r = w.current ?? O.current ?? l;
                        if (null != r && null != x[r]) {
                            let e = x[r];
                            t = null != e ? [C ?? e.start, e.start + e.duration] : void 0;
                        }
                        b.current = n.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: u()(I),
                            initialSegment: t,
                        });
                    }),
                () => {
                    b.current?.destroy();
                }
            ),
            [I, x, C],
        ),
        (0, l.jsx)("div", {
            style: { "--__lottieIconColor": null != i && "string" == typeof i ? i : i?.css, display: "flex", ...N },
            className: a()(p.f, s ? void 0 : p.P, E),
            ref: R,
        })
    );
});
