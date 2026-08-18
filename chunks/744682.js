"use strict";
n.d(t, { P: () => p });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(480664),
    o = n.n(a),
    u = n(844222),
    c = n(460890),
    d = n(260612),
    h = n(964486),
    m = n(354328),
    f = n(598893);
let p = i.forwardRef(function (e, t) {
    let {
            color: s,
            useLottieDefaultColors: a,
            src: p,
            size: g = "md",
            width: x,
            height: A,
            className: E,
            initialAnimation: C,
            initialFrame: I,
            markers: y,
            onBeforeDismount: S,
        } = e,
        [v, _] = i.useState(null),
        N = i.useRef(null),
        T = i.useRef(null),
        j = i.useRef(null),
        b = "custom" === g ? { width: x, height: A } : (0, d.J)(g),
        R = !(0, m.A)("lottie_hover_multiple_loop"),
        L = i.useContext(u.C).reducedMotion.enabled,
        O = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        M = L || !O,
        w = i.useRef(C);
    return (
        (0, h.l0)(() => {
            S?.({ finalFrame: j.current?.currentFrame ?? null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == j.current) return;
                    let t = null == T.current;
                    if (((T.current = e), M)) {
                        let t = y[e];
                        j.current.resetSegments(!0),
                            j.current.setSegment(t.start + t.duration, t.start + t.duration),
                            j.current.stop();
                    } else {
                        j.current.setLoop(!R && e.includes("hover")), j.current.resetSegments(!0);
                        let n = t && null != I && I >= y[e].start && I <= y[e].start + y[e].duration ? I : y[e].start;
                        j.current.playSegments([n, y[e].start + y[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == j.current || M) return;
                },
                stopIfPlaying: (e) => {
                    null == j.current ||
                        M ||
                        (T.current === e &&
                            (j.current.resetSegments(!0),
                            j.current.setSegment(y[e].start, y[e].start),
                            j.current.stop()));
                },
                getDuration: (e) => (null == j.current ? null : j.current.getDuration(e)),
                getCurrentFrame: () => (null == j.current ? null : j.current.currentFrame),
            }),
            [M, R, y, I],
        ),
        i.useEffect(() => {
            null == v && p().then((e) => _(e.default));
        }, [v, p]),
        i.useEffect(
            () => (
                n
                    .e("996382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e;
                        if (null == N.current) return;
                        let l = 1 === Object.keys(y).length ? Object.values(y)[0].name : void 0,
                            i = T.current ?? w.current ?? l;
                        if (null != i && null != y[i]) {
                            let e = y[i];
                            t = null != e ? [I ?? e.start, e.start + e.duration] : void 0;
                        }
                        j.current = n.loadAnimation({
                            container: N.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: o()(v),
                            initialSegment: t,
                        });
                    }),
                () => {
                    j.current?.destroy();
                }
            ),
            [v, y, I],
        ),
        (0, l.jsx)("div", {
            style: { "--__lottieIconColor": null != s && "string" == typeof s ? s : s?.css, display: "flex", ...b },
            className: r()(f.f, a ? void 0 : f.P, E),
            ref: N,
        })
    );
});
