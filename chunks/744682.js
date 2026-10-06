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
function g(e) {
    let {
            color: t,
            useLottieDefaultColors: l,
            src: a,
            size: g = "md",
            width: h,
            height: y,
            className: v,
            initialAnimation: b,
            initialFrame: A,
            markers: S,
            onBeforeDismount: C,
            ref: _,
        } = e,
        [k, M] = u.useState(null),
        O = u.useRef(null),
        x = u.useRef(null),
        F = u.useRef(null),
        G = "custom" === g ? { width: h, height: y } : (0, d.J)(g),
        I = !(0, p.A)("lottie_hover_multiple_loop"),
        R = u.useContext(o.C).reducedMotion.enabled,
        j = (0, i.G9)().isMainWindowVisible?.() ?? !0,
        w = R || !j,
        D = u.useRef(b);
    return (
        (0, f.l0)(() => {
            C?.({ finalFrame: F.current?.currentFrame ?? null });
        }),
        u.useImperativeHandle(
            _,
            () => ({
                play: (e) => {
                    if (null == F.current) return;
                    let t = null == x.current;
                    if (((x.current = e), w)) {
                        let t = S[e];
                        (F.current.resetSegments(!0),
                            F.current.setSegment(t.start + t.duration, t.start + t.duration),
                            F.current.stop());
                    } else {
                        (F.current.setLoop(!I && e.includes("hover")), F.current.resetSegments(!0));
                        let r = t && null != A && A >= S[e].start && A <= S[e].start + S[e].duration ? A : S[e].start;
                        F.current.playSegments([r, S[e].start + S[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == F.current || w) return;
                },
                stopIfPlaying: (e) => {
                    null == F.current ||
                        w ||
                        (x.current === e &&
                            (F.current.resetSegments(!0),
                            F.current.setSegment(S[e].start, S[e].start),
                            F.current.stop()));
                },
                getDuration: (e) => (null == F.current ? null : F.current.getDuration(e)),
                getCurrentFrame: () => (null == F.current ? null : F.current.currentFrame),
            }),
            [w, I, S, A],
        ),
        u.useEffect(() => {
            null == k && a().then((e) => M(e.default));
        }, [k, a]),
        u.useEffect(
            () => (
                r
                    .e("996382")
                    .then(r.t.bind(r, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: r } = e;
                        if (null == O.current) return;
                        let n = 1 === Object.keys(S).length ? Object.values(S)[0].name : void 0,
                            u = x.current ?? D.current ?? n;
                        if (null != u && null != S[u]) {
                            let e = S[u];
                            t = null != e ? [A ?? e.start, e.start + e.duration] : void 0;
                        }
                        F.current = r.loadAnimation({
                            container: O.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: c()(k),
                            initialSegment: t,
                        });
                    }),
                () => {
                    F.current?.destroy();
                }
            ),
            [k, S, A],
        ),
        (0, n.jsx)("div", {
            style: { "--__lottieIconColor": null != t && "string" == typeof t ? t : t?.css, display: "flex", ...G },
            className: s()(m.f, l ? void 0 : m.P, v),
            ref: O,
        })
    );
}
