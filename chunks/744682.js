"use strict";
n.d(t, { P: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(488528),
    l = n.n(o),
    u = n(158954),
    c = n(260612),
    d = n(964486),
    _ = n(354328),
    f = n(215394);
function p(e, t) {
    let {
            color: s,
            useLottieDefaultColors: o,
            src: p,
            size: h = "md",
            width: m,
            height: E,
            className: g,
            initialAnimation: A,
            initialFrame: I,
            markers: T,
            onBeforeDismount: S,
        } = e,
        [y, v] = i.useState(null),
        N = i.useRef(null),
        C = i.useRef(null),
        R = i.useRef(null),
        O = "custom" === h ? { width: m, height: E } : (0, c.J)(h),
        b = !(0, _.A)("lottie_hover_multiple_loop"),
        D = i.useContext(u.CZY).reducedMotion.enabled,
        L = i.useRef(A);
    return (
        (0, d.l0)(() => {
            S?.({ finalFrame: R.current?.currentFrame ?? null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == R.current) return;
                    let t = null == C.current;
                    if (((C.current = e), D)) {
                        let t = T[e];
                        R.current.resetSegments(!0),
                            R.current.setSegment(t.start + t.duration, t.start + t.duration),
                            R.current.stop();
                    } else {
                        R.current.setLoop(!b && e.includes("hover")), R.current.resetSegments(!0);
                        let n = t && null != I && I >= T[e].start && I <= T[e].start + T[e].duration ? I : T[e].start;
                        R.current.playSegments([n, T[e].start + T[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == R.current || D) return;
                },
                stopIfPlaying: (e) => {
                    null == R.current ||
                        D ||
                        (C.current === e &&
                            (R.current.resetSegments(!0),
                            R.current.setSegment(T[e].start, T[e].start),
                            R.current.stop()));
                },
                getDuration: (e) => (null == R.current ? null : R.current.getDuration(e)),
                getCurrentFrame: () => (null == R.current ? null : R.current.currentFrame),
            }),
            [D, b, T, I],
        ),
        i.useEffect(() => {
            null == y && p().then((e) => v(e.default));
        }, [y, p]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e,
                            r = 1 === Object.keys(T).length ? Object.values(T)[0].name : void 0,
                            i = C.current ?? L.current ?? r;
                        if (null != i && null != T[i]) {
                            let e = T[i];
                            t = [D ? e.start : (I ?? e.start), e.start + e.duration];
                        }
                        null != N.current &&
                            (R.current = n.loadAnimation({
                                container: N.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(y),
                                initialSegment: t,
                            }));
                    }),
                () => {
                    R.current?.destroy();
                }
            ),
            [y, T, I, D],
        ),
        (0, r.jsx)("div", {
            style: { "--__lottieIconColor": null != s && "string" == typeof s ? s : s?.css, display: "flex", ...O },
            className: a()(f.f, o ? void 0 : f.P, g),
            ref: N,
        })
    );
}
let h = i.forwardRef(p);
