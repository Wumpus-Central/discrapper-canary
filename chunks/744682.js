"use strict";
n.d(t, { P: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(488528),
    l = n.n(o),
    u = n(844222),
    c = n(460890),
    d = n(260612),
    _ = n(964486),
    h = n(354328),
    f = n(274661);
let p = r.forwardRef(function (e, t) {
    let {
            color: s,
            useLottieDefaultColors: o,
            src: p,
            size: E = "md",
            width: m,
            height: g,
            className: A,
            initialAnimation: I,
            initialFrame: T,
            markers: S,
            onBeforeDismount: y,
        } = e,
        [C, N] = r.useState(null),
        v = r.useRef(null),
        R = r.useRef(null),
        O = r.useRef(null),
        b = "custom" === E ? { width: m, height: g } : (0, d.J)(E),
        D = !(0, h.A)("lottie_hover_multiple_loop"),
        L = r.useContext(u.C).reducedMotion.enabled,
        w = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        M = L || !w,
        P = r.useRef(I);
    return (
        (0, _.l0)(() => {
            y?.({ finalFrame: O.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == O.current) return;
                    let t = null == R.current;
                    if (((R.current = e), M)) {
                        let t = S[e];
                        O.current.resetSegments(!0),
                            O.current.setSegment(t.start + t.duration, t.start + t.duration),
                            O.current.stop();
                    } else {
                        O.current.setLoop(!D && e.includes("hover")), O.current.resetSegments(!0);
                        let n = t && null != T && T >= S[e].start && T <= S[e].start + S[e].duration ? T : S[e].start;
                        O.current.playSegments([n, S[e].start + S[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == O.current || M) return;
                },
                stopIfPlaying: (e) => {
                    null == O.current ||
                        M ||
                        (R.current === e &&
                            (O.current.resetSegments(!0),
                            O.current.setSegment(S[e].start, S[e].start),
                            O.current.stop()));
                },
                getDuration: (e) => (null == O.current ? null : O.current.getDuration(e)),
                getCurrentFrame: () => (null == O.current ? null : O.current.currentFrame),
            }),
            [M, D, S, T],
        ),
        r.useEffect(() => {
            null == C && p().then((e) => N(e.default));
        }, [C, p]),
        r.useEffect(
            () => (
                n
                    .e("96382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e;
                        if (null == v.current) return;
                        let i = 1 === Object.keys(S).length ? Object.values(S)[0].name : void 0,
                            r = R.current ?? P.current ?? i;
                        if (null != r && null != S[r]) {
                            let e = S[r];
                            t = null != e ? [T ?? e.start, e.start + e.duration] : void 0;
                        }
                        O.current = n.loadAnimation({
                            container: v.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: l()(C),
                            initialSegment: t,
                        });
                    }),
                () => {
                    O.current?.destroy();
                }
            ),
            [C, S, T],
        ),
        (0, i.jsx)("div", {
            style: { "--__lottieIconColor": null != s && "string" == typeof s ? s : s?.css, display: "flex", ...b },
            className: a()(f.f, o ? void 0 : f.P, A),
            ref: v,
        })
    );
});
