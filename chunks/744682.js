"use strict";
n.d(t, { P: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(488528),
    l = n.n(o),
    u = n(158954),
    c = n(260612),
    d = n(384694),
    _ = n(964486),
    f = n(354328),
    p = n(533832);
function h(e, t) {
    let {
            color: a,
            useLottieDefaultColors: o,
            src: h,
            size: m = "md",
            width: g,
            height: E,
            className: A,
            initialAnimation: I,
            initialFrame: T,
            markers: y,
            onBeforeDismount: S,
        } = e,
        [v, C] = i.useState(null),
        b = i.useRef(null),
        N = i.useRef(null),
        R = i.useRef(null),
        O = "custom" === m ? { width: g, height: E } : (0, c.J)(m),
        D = !(0, f.A)("lottie_hover_multiple_loop"),
        L = i.useContext(u.CZY).reducedMotion.enabled,
        { enabled: w } = d.A.useExperiment({ location: "LottieIcon web entry point" }),
        x = L || !w,
        P = i.useRef(I);
    return (
        (0, _.l0)(() => {
            S?.({ finalFrame: R.current?.currentFrame ?? null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == R.current) return;
                    let t = null == N.current;
                    if (((N.current = e), x)) {
                        let t = y[e];
                        R.current.resetSegments(!0),
                            R.current.setSegment(t.start + t.duration, t.start + t.duration),
                            R.current.stop();
                    } else {
                        R.current.setLoop(!D && e.includes("hover")), R.current.resetSegments(!0);
                        let n = t && null != T && T >= y[e].start && T <= y[e].start + y[e].duration ? T : y[e].start;
                        R.current.playSegments([n, y[e].start + y[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == R.current || x) return;
                },
                stopIfPlaying: (e) => {
                    null == R.current ||
                        x ||
                        (N.current === e &&
                            (R.current.resetSegments(!0),
                            R.current.setSegment(y[e].start, y[e].start),
                            R.current.stop()));
                },
                getDuration: (e) => (null == R.current ? null : R.current.getDuration(e)),
                getCurrentFrame: () => (null == R.current ? null : R.current.currentFrame),
            }),
            [x, D, y, T],
        ),
        i.useEffect(() => {
            null == v && h().then((e) => C(e.default));
        }, [v, h]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e,
                            r = 1 === Object.keys(y).length ? Object.values(y)[0].name : void 0,
                            i = N.current ?? P.current ?? r;
                        if (null != i && null != y[i]) {
                            let e = y[i];
                            t = [x ? e.start : (T ?? e.start), e.start + e.duration];
                        }
                        null != b.current &&
                            (R.current = n.loadAnimation({
                                container: b.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(v),
                                initialSegment: t,
                            }));
                    }),
                () => {
                    R.current?.destroy();
                }
            ),
            [v, y, T, x],
        ),
        (0, r.jsx)("div", {
            style: { "--__lottieIconColor": null != a && "string" == typeof a ? a : a?.css, display: "flex", ...O },
            className: s()(p.f, o ? void 0 : p.P, A),
            ref: b,
        })
    );
}
let m = i.forwardRef(h);
