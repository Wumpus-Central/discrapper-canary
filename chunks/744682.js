"use strict";
n.d(t, { P: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(488528),
    l = n.n(o),
    u = n(844222),
    d = n(260612),
    c = n(964486),
    _ = n(354328),
    f = n(274661);
let E = i.forwardRef(function (e, t) {
    let {
            color: s,
            useLottieDefaultColors: o,
            src: E,
            size: h = "md",
            width: p,
            height: m,
            className: g,
            initialAnimation: A,
            initialFrame: I,
            markers: T,
            onBeforeDismount: S,
        } = e,
        [y, N] = i.useState(null),
        O = i.useRef(null),
        R = i.useRef(null),
        v = i.useRef(null),
        C = "custom" === h ? { width: p, height: m } : (0, d.J)(h),
        b = !(0, _.A)("lottie_hover_multiple_loop"),
        D = i.useContext(u.C).reducedMotion.enabled,
        L = i.useRef(A);
    return (
        (0, c.l0)(() => {
            S?.({ finalFrame: v.current?.currentFrame ?? null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == v.current) return;
                    let t = null == R.current;
                    if (((R.current = e), D)) {
                        let t = T[e];
                        v.current.resetSegments(!0),
                            v.current.setSegment(t.start + t.duration, t.start + t.duration),
                            v.current.stop();
                    } else {
                        v.current.setLoop(!b && e.includes("hover")), v.current.resetSegments(!0);
                        let n = t && null != I && I >= T[e].start && I <= T[e].start + T[e].duration ? I : T[e].start;
                        v.current.playSegments([n, T[e].start + T[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == v.current || D) return;
                },
                stopIfPlaying: (e) => {
                    null == v.current ||
                        D ||
                        (R.current === e &&
                            (v.current.resetSegments(!0),
                            v.current.setSegment(T[e].start, T[e].start),
                            v.current.stop()));
                },
                getDuration: (e) => (null == v.current ? null : v.current.getDuration(e)),
                getCurrentFrame: () => (null == v.current ? null : v.current.currentFrame),
            }),
            [D, b, T, I],
        ),
        i.useEffect(() => {
            null == y && E().then((e) => N(e.default));
        }, [y, E]),
        i.useEffect(
            () => (
                n
                    .e("96382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e,
                            r = 1 === Object.keys(T).length ? Object.values(T)[0].name : void 0,
                            i = R.current ?? L.current ?? r;
                        if (null != i && null != T[i]) {
                            let e = T[i];
                            t = [D ? e.start : (I ?? e.start), e.start + e.duration];
                        }
                        null != O.current &&
                            (v.current = n.loadAnimation({
                                container: O.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(y),
                                initialSegment: t,
                            }));
                    }),
                () => {
                    v.current?.destroy();
                }
            ),
            [y, T, I, D],
        ),
        (0, r.jsx)("div", {
            style: { "--__lottieIconColor": null != s && "string" == typeof s ? s : s?.css, display: "flex", ...C },
            className: a()(f.f, o ? void 0 : f.P, g),
            ref: O,
        })
    );
});
