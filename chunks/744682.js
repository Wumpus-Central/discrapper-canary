n.d(t, { P: () => p });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    i = n.n(s),
    a = n(480664),
    u = n.n(a),
    c = n(844222),
    o = n(460890),
    d = n(260612),
    f = n(964486),
    h = n(354328),
    m = n(162118);
let p = r.forwardRef(function (e, t) {
    let {
            color: s,
            useLottieDefaultColors: a,
            src: p,
            size: g = "md",
            width: A,
            height: v,
            className: C,
            initialAnimation: E,
            initialFrame: I,
            markers: y,
            onBeforeDismount: x,
        } = e,
        [S, T] = r.useState(null),
        R = r.useRef(null),
        _ = r.useRef(null),
        b = r.useRef(null),
        w = "custom" === g ? { width: A, height: v } : (0, d.J)(g),
        N = !(0, h.A)("lottie_hover_multiple_loop"),
        j = r.useContext(c.C).reducedMotion.enabled,
        k = (0, o.G9)().isMainWindowVisible?.() ?? !0,
        L = j || !k,
        D = r.useRef(E);
    return (
        (0, f.l0)(() => {
            x?.({ finalFrame: b.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == b.current) return;
                    let t = null == _.current;
                    if (((_.current = e), L)) {
                        let t = y[e];
                        b.current.resetSegments(!0),
                            b.current.setSegment(t.start + t.duration, t.start + t.duration),
                            b.current.stop();
                    } else {
                        b.current.setLoop(!N && e.includes("hover")), b.current.resetSegments(!0);
                        let n = t && null != I && I >= y[e].start && I <= y[e].start + y[e].duration ? I : y[e].start;
                        b.current.playSegments([n, y[e].start + y[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == b.current || L) return;
                },
                stopIfPlaying: (e) => {
                    null == b.current ||
                        L ||
                        (_.current === e &&
                            (b.current.resetSegments(!0),
                            b.current.setSegment(y[e].start, y[e].start),
                            b.current.stop()));
                },
                getDuration: (e) => (null == b.current ? null : b.current.getDuration(e)),
                getCurrentFrame: () => (null == b.current ? null : b.current.currentFrame),
            }),
            [L, N, y, I],
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
                        let l = 1 === Object.keys(y).length ? Object.values(y)[0].name : void 0,
                            r = _.current ?? D.current ?? l;
                        if (null != r && null != y[r]) {
                            let e = y[r];
                            t = null != e ? [I ?? e.start, e.start + e.duration] : void 0;
                        }
                        b.current = n.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: u()(S),
                            initialSegment: t,
                        });
                    }),
                () => {
                    b.current?.destroy();
                }
            ),
            [S, y, I],
        ),
        (0, l.jsx)("div", {
            style: { "--__lottieIconColor": null != s && "string" == typeof s ? s : s?.css, display: "flex", ...w },
            className: i()(m.f, a ? void 0 : m.P, C),
            ref: R,
        })
    );
});
