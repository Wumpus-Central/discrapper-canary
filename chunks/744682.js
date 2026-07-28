"use strict";
n.d(t, { P: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(480664),
    o = n.n(l),
    d = n(844222),
    c = n(460890),
    u = n(260612),
    _ = n(964486),
    E = n(354328),
    A = n(598893);
let h = r.forwardRef(function (e, t) {
    let {
            color: a,
            useLottieDefaultColors: l,
            src: h,
            size: I = "md",
            width: f,
            height: p,
            className: T,
            initialAnimation: m,
            initialFrame: g,
            markers: S,
            onBeforeDismount: N,
        } = e,
        [C, O] = r.useState(null),
        R = r.useRef(null),
        L = r.useRef(null),
        y = r.useRef(null),
        D = "custom" === I ? { width: f, height: p } : (0, u.J)(I),
        v = !(0, E.A)("lottie_hover_multiple_loop"),
        b = r.useContext(d.C).reducedMotion.enabled,
        M = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        P = b || !M,
        U = r.useRef(m);
    return (
        (0, _.l0)(() => {
            N?.({ finalFrame: y.current?.currentFrame ?? null });
        }),
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == y.current) return;
                    let t = null == L.current;
                    if (((L.current = e), P)) {
                        let t = S[e];
                        y.current.resetSegments(!0),
                            y.current.setSegment(t.start + t.duration, t.start + t.duration),
                            y.current.stop();
                    } else {
                        y.current.setLoop(!v && e.includes("hover")), y.current.resetSegments(!0);
                        let n = t && null != g && g >= S[e].start && g <= S[e].start + S[e].duration ? g : S[e].start;
                        y.current.playSegments([n, S[e].start + S[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == y.current || P) return;
                },
                stopIfPlaying: (e) => {
                    null == y.current ||
                        P ||
                        (L.current === e &&
                            (y.current.resetSegments(!0),
                            y.current.setSegment(S[e].start, S[e].start),
                            y.current.stop()));
                },
                getDuration: (e) => (null == y.current ? null : y.current.getDuration(e)),
                getCurrentFrame: () => (null == y.current ? null : y.current.currentFrame),
            }),
            [P, v, S, g],
        ),
        r.useEffect(() => {
            null == C && h().then((e) => O(e.default));
        }, [C, h]),
        r.useEffect(
            () => (
                n
                    .e("96382")
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: n } = e;
                        if (null == R.current) return;
                        let i = 1 === Object.keys(S).length ? Object.values(S)[0].name : void 0,
                            r = L.current ?? U.current ?? i;
                        if (null != r && null != S[r]) {
                            let e = S[r];
                            t = null != e ? [g ?? e.start, e.start + e.duration] : void 0;
                        }
                        y.current = n.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: o()(C),
                            initialSegment: t,
                        });
                    }),
                () => {
                    y.current?.destroy();
                }
            ),
            [C, S, g],
        ),
        (0, i.jsx)("div", {
            style: { "--__lottieIconColor": null != a && "string" == typeof a ? a : a?.css, display: "flex", ...D },
            className: s()(A.f, l ? void 0 : A.P, T),
            ref: R,
        })
    );
});
