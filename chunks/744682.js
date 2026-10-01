r.d(t, { P: () => g });
var n = r(477900),
    u = r(582128),
    l = r(503698),
    s = r.n(l),
    a = r(480664),
    c = r.n(a),
    o = r(844222),
    i = r(460890),
    d = r(260612),
    f = r(964486),
    p = r(354328),
    m = r(162118);
let g = u.forwardRef(function (e, t) {
    let {
            color: l,
            useLottieDefaultColors: a,
            src: g,
            size: h = "md",
            width: y,
            height: v,
            className: b,
            initialAnimation: A,
            initialFrame: S,
            markers: C,
            onBeforeDismount: _,
        } = e,
        [k, M] = u.useState(null),
        O = u.useRef(null),
        R = u.useRef(null),
        w = u.useRef(null),
        x = "custom" === h ? { width: y, height: v } : (0, d.J)(h),
        F = !(0, p.A)("lottie_hover_multiple_loop"),
        G = u.useContext(o.C).reducedMotion.enabled,
        I = (0, i.G9)().isMainWindowVisible?.() ?? !0,
        j = G || !I,
        D = u.useRef(A);
    return (
        (0, f.l0)(() => {
            _?.({ finalFrame: w.current?.currentFrame ?? null });
        }),
        u.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == w.current) return;
                    let t = null == R.current;
                    if (((R.current = e), j)) {
                        let t = C[e];
                        (w.current.resetSegments(!0),
                            w.current.setSegment(t.start + t.duration, t.start + t.duration),
                            w.current.stop());
                    } else {
                        (w.current.setLoop(!F && e.includes("hover")), w.current.resetSegments(!0));
                        let r = t && null != S && S >= C[e].start && S <= C[e].start + C[e].duration ? S : C[e].start;
                        w.current.playSegments([r, C[e].start + C[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == w.current || j) return;
                },
                stopIfPlaying: (e) => {
                    null == w.current ||
                        j ||
                        (R.current === e &&
                            (w.current.resetSegments(!0),
                            w.current.setSegment(C[e].start, C[e].start),
                            w.current.stop()));
                },
                getDuration: (e) => (null == w.current ? null : w.current.getDuration(e)),
                getCurrentFrame: () => (null == w.current ? null : w.current.currentFrame),
            }),
            [j, F, C, S],
        ),
        u.useEffect(() => {
            null == k && g().then((e) => M(e.default));
        }, [k, g]),
        u.useEffect(
            () => (
                r
                    .e("996382")
                    .then(r.t.bind(r, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: r } = e;
                        if (null == O.current) return;
                        let n = 1 === Object.keys(C).length ? Object.values(C)[0].name : void 0,
                            u = R.current ?? D.current ?? n;
                        if (null != u && null != C[u]) {
                            let e = C[u];
                            t = null != e ? [S ?? e.start, e.start + e.duration] : void 0;
                        }
                        w.current = r.loadAnimation({
                            container: O.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: c()(k),
                            initialSegment: t,
                        });
                    }),
                () => {
                    w.current?.destroy();
                }
            ),
            [k, C, S],
        ),
        (0, n.jsx)("div", {
            style: { "--__lottieIconColor": null != l && "string" == typeof l ? l : l?.css, display: "flex", ...x },
            className: s()(m.f, a ? void 0 : m.P, b),
            ref: O,
        })
    );
});
