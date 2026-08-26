n.d(t, { P: () => p });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(480664),
    u = n.n(a),
    o = n(844222),
    c = n(460890),
    d = n(260612),
    f = n(964486),
    h = n(354328),
    m = n(162118);
let p = r.forwardRef(function (e, t) {
    let {
            color: i,
            useLottieDefaultColors: a,
            src: p,
            size: g = "md",
            width: y,
            height: v,
            className: A,
            initialAnimation: E,
            initialFrame: C,
            markers: x,
            onBeforeDismount: I,
        } = e,
        [S, T] = r.useState(null),
        R = r.useRef(null),
        b = r.useRef(null),
        w = r.useRef(null),
        N = "custom" === g ? { width: y, height: v } : (0, d.J)(g),
        _ = !(0, h.A)("lottie_hover_multiple_loop"),
        k = r.useContext(o.C).reducedMotion.enabled,
        j = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        L = k || !j,
        O = r.useRef(E);
    return (
        (0, f.l0)(() => {
            I?.({ finalFrame: w.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == w.current) return;
                    let t = null == b.current;
                    if (((b.current = e), L)) {
                        let t = x[e];
                        w.current.resetSegments(!0),
                            w.current.setSegment(t.start + t.duration, t.start + t.duration),
                            w.current.stop();
                    } else {
                        w.current.setLoop(!_ && e.includes("hover")), w.current.resetSegments(!0);
                        let n = t && null != C && C >= x[e].start && C <= x[e].start + x[e].duration ? C : x[e].start;
                        w.current.playSegments([n, x[e].start + x[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == w.current || L) return;
                },
                stopIfPlaying: (e) => {
                    null == w.current ||
                        L ||
                        (b.current === e &&
                            (w.current.resetSegments(!0),
                            w.current.setSegment(x[e].start, x[e].start),
                            w.current.stop()));
                },
                getDuration: (e) => (null == w.current ? null : w.current.getDuration(e)),
                getCurrentFrame: () => (null == w.current ? null : w.current.currentFrame),
            }),
            [L, _, x, C],
        ),
        r.useEffect(() => {
            null == S && p().then((e) => T(e.default));
        }, [S, p]),
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
                            r = b.current ?? O.current ?? l;
                        if (null != r && null != x[r]) {
                            let e = x[r];
                            t = null != e ? [C ?? e.start, e.start + e.duration] : void 0;
                        }
                        w.current = n.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: u()(S),
                            initialSegment: t,
                        });
                    }),
                () => {
                    w.current?.destroy();
                }
            ),
            [S, x, C],
        ),
        (0, l.jsx)("div", {
            style: { "--__lottieIconColor": null != i && "string" == typeof i ? i : i?.css, display: "flex", ...N },
            className: s()(m.f, a ? void 0 : m.P, A),
            ref: R,
        })
    );
});
