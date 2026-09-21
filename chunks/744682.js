n.d(t, { P: () => C });
var r = n(477900),
    l = n(582128),
    u = n(503698),
    a = n.n(u),
    i = n(480664),
    s = n.n(i),
    c = n(844222),
    o = n(460890),
    d = n(260612),
    f = n(964486),
    h = n(354328),
    p = n(162118);
let C = l.forwardRef(function (e, t) {
    let {
            color: u,
            useLottieDefaultColors: i,
            src: C,
            size: E = "md",
            width: m,
            height: v,
            className: S,
            initialAnimation: y,
            initialFrame: I,
            markers: A,
            onBeforeDismount: _,
        } = e,
        [g, R] = l.useState(null),
        L = l.useRef(null),
        T = l.useRef(null),
        w = l.useRef(null),
        b = "custom" === E ? { width: m, height: v } : (0, d.J)(E),
        k = !(0, h.A)("lottie_hover_multiple_loop"),
        N = l.useContext(c.C).reducedMotion.enabled,
        x = (0, o.G9)().isMainWindowVisible?.() ?? !0,
        P = N || !x,
        D = l.useRef(y);
    return (
        (0, f.l0)(() => {
            _?.({ finalFrame: w.current?.currentFrame ?? null });
        }),
        l.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == w.current) return;
                    let t = null == T.current;
                    if (((T.current = e), P)) {
                        let t = A[e];
                        (w.current.resetSegments(!0),
                            w.current.setSegment(t.start + t.duration, t.start + t.duration),
                            w.current.stop());
                    } else {
                        (w.current.setLoop(!k && e.includes("hover")), w.current.resetSegments(!0));
                        let n = t && null != I && I >= A[e].start && I <= A[e].start + A[e].duration ? I : A[e].start;
                        w.current.playSegments([n, A[e].start + A[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == w.current || P) return;
                },
                stopIfPlaying: (e) => {
                    null == w.current ||
                        P ||
                        (T.current === e &&
                            (w.current.resetSegments(!0),
                            w.current.setSegment(A[e].start, A[e].start),
                            w.current.stop()));
                },
                getDuration: (e) => (null == w.current ? null : w.current.getDuration(e)),
                getCurrentFrame: () => (null == w.current ? null : w.current.currentFrame),
            }),
            [P, k, A, I],
        ),
        l.useEffect(() => {
            null == g && C().then((e) => R(e.default));
        }, [g, C]),
        l.useEffect(
            () => (
                n
                    .e("996382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e;
                        if (null == L.current) return;
                        let r = 1 === Object.keys(A).length ? Object.values(A)[0].name : void 0,
                            l = T.current ?? D.current ?? r;
                        if (null != l && null != A[l]) {
                            let e = A[l];
                            t = null != e ? [I ?? e.start, e.start + e.duration] : void 0;
                        }
                        w.current = n.loadAnimation({
                            container: L.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: s()(g),
                            initialSegment: t,
                        });
                    }),
                () => {
                    w.current?.destroy();
                }
            ),
            [g, A, I],
        ),
        (0, r.jsx)("div", {
            style: { "--__lottieIconColor": null != u && "string" == typeof u ? u : u?.css, display: "flex", ...b },
            className: a()(p.f, i ? void 0 : p.P, S),
            ref: L,
        })
    );
});
