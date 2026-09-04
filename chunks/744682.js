n.d(t, { P: () => p });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(480664),
    o = n.n(s),
    u = n(844222),
    c = n(460890),
    d = n(260612),
    f = n(964486),
    h = n(354328),
    m = n(162118);
let p = r.forwardRef(function (e, t) {
    let {
            color: i,
            useLottieDefaultColors: s,
            src: p,
            size: g = "md",
            width: y,
            height: v,
            className: C,
            initialAnimation: E,
            initialFrame: x,
            markers: S,
            onBeforeDismount: A,
        } = e,
        [I, T] = r.useState(null),
        R = r.useRef(null),
        N = r.useRef(null),
        w = r.useRef(null),
        b = "custom" === g ? { width: y, height: v } : (0, d.J)(g),
        _ = !(0, h.A)("lottie_hover_multiple_loop"),
        k = r.useContext(u.C).reducedMotion.enabled,
        L = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        j = k || !L,
        O = r.useRef(E);
    return (
        (0, f.l0)(() => {
            A?.({ finalFrame: w.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == w.current) return;
                    let t = null == N.current;
                    if (((N.current = e), j)) {
                        let t = S[e];
                        w.current.resetSegments(!0),
                            w.current.setSegment(t.start + t.duration, t.start + t.duration),
                            w.current.stop();
                    } else {
                        w.current.setLoop(!_ && e.includes("hover")), w.current.resetSegments(!0);
                        let n = t && null != x && x >= S[e].start && x <= S[e].start + S[e].duration ? x : S[e].start;
                        w.current.playSegments([n, S[e].start + S[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == w.current || j) return;
                },
                stopIfPlaying: (e) => {
                    null == w.current ||
                        j ||
                        (N.current === e &&
                            (w.current.resetSegments(!0),
                            w.current.setSegment(S[e].start, S[e].start),
                            w.current.stop()));
                },
                getDuration: (e) => (null == w.current ? null : w.current.getDuration(e)),
                getCurrentFrame: () => (null == w.current ? null : w.current.currentFrame),
            }),
            [j, _, S, x],
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
                        let l = 1 === Object.keys(S).length ? Object.values(S)[0].name : void 0,
                            r = N.current ?? O.current ?? l;
                        if (null != r && null != S[r]) {
                            let e = S[r];
                            t = null != e ? [x ?? e.start, e.start + e.duration] : void 0;
                        }
                        w.current = n.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: o()(I),
                            initialSegment: t,
                        });
                    }),
                () => {
                    w.current?.destroy();
                }
            ),
            [I, S, x],
        ),
        (0, l.jsx)("div", {
            style: { "--__lottieIconColor": null != i && "string" == typeof i ? i : i?.css, display: "flex", ...b },
            className: a()(m.f, s ? void 0 : m.P, C),
            ref: R,
        })
    );
});
