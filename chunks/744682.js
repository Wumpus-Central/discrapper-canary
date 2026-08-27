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
            initialFrame: x,
            markers: C,
            onBeforeDismount: S,
        } = e,
        [I, T] = r.useState(null),
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
            S?.({ finalFrame: w.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == w.current) return;
                    let t = null == b.current;
                    if (((b.current = e), L)) {
                        let t = C[e];
                        w.current.resetSegments(!0),
                            w.current.setSegment(t.start + t.duration, t.start + t.duration),
                            w.current.stop();
                    } else {
                        w.current.setLoop(!_ && e.includes("hover")), w.current.resetSegments(!0);
                        let n = t && null != x && x >= C[e].start && x <= C[e].start + C[e].duration ? x : C[e].start;
                        w.current.playSegments([n, C[e].start + C[e].duration], !0);
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
                            w.current.setSegment(C[e].start, C[e].start),
                            w.current.stop()));
                },
                getDuration: (e) => (null == w.current ? null : w.current.getDuration(e)),
                getCurrentFrame: () => (null == w.current ? null : w.current.currentFrame),
            }),
            [L, _, C, x],
        ),
        r.useEffect(() => {
            null == I && p().then((e) => T(e.default));
        }, [I, p]),
        r.useEffect(
            () => (
                n
                    .e("996382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e;
                        if (null == R.current) return;
                        let l = 1 === Object.keys(C).length ? Object.values(C)[0].name : void 0,
                            r = b.current ?? O.current ?? l;
                        if (null != r && null != C[r]) {
                            let e = C[r];
                            t = null != e ? [x ?? e.start, e.start + e.duration] : void 0;
                        }
                        w.current = n.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: u()(I),
                            initialSegment: t,
                        });
                    }),
                () => {
                    w.current?.destroy();
                }
            ),
            [I, C, x],
        ),
        (0, l.jsx)("div", {
            style: { "--__lottieIconColor": null != i && "string" == typeof i ? i : i?.css, display: "flex", ...N },
            className: s()(m.f, a ? void 0 : m.P, A),
            ref: R,
        })
    );
});
