r.d(t, { P: () => h });
var n = r(477900),
    u = r(582128),
    l = r(503698),
    s = r.n(l),
    a = r(480664),
    i = r.n(a),
    o = r(844222),
    c = r(460890),
    d = r(260612),
    f = r(964486),
    p = r(354328),
    m = r(162118);
function h(e) {
    let {
            color: t,
            useLottieDefaultColors: l,
            src: a,
            size: h = "md",
            width: g,
            height: v,
            className: y,
            initialAnimation: b,
            initialFrame: A,
            markers: S,
            onBeforeDismount: C,
            ref: _,
        } = e,
        [k, M] = u.useState(null),
        O = u.useRef(null),
        w = u.useRef(null),
        x = u.useRef(null),
        F = "custom" === h ? { width: g ?? void 0, height: v ?? void 0 } : (0, d.J)(h),
        G = !(0, p.A)("lottie_hover_multiple_loop"),
        I = u.useContext(o.C).reducedMotion.enabled,
        R = (0, c.G9)().isMainWindowVisible?.() ?? !0,
        j = I || !R,
        D = u.useRef(b);
    ((0, f.l0)(() => {
        C?.({ finalFrame: x.current?.currentFrame ?? null });
    }),
        u.useImperativeHandle(
            _,
            () => ({
                play: (e) => {
                    if (null == x.current) return;
                    let t = null == w.current;
                    if (((w.current = e), j)) {
                        let t = S[e];
                        (x.current.resetSegments(!0),
                            x.current.setSegment(t.start + t.duration, t.start + t.duration),
                            x.current.stop());
                    } else {
                        (x.current.setLoop(!G && e.includes("hover")), x.current.resetSegments(!0));
                        let r = t && null != A && A >= S[e].start && A <= S[e].start + S[e].duration ? A : S[e].start;
                        x.current.playSegments([r, S[e].start + S[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == x.current || j) return;
                },
                stopIfPlaying: (e) => {
                    null == x.current ||
                        j ||
                        (w.current === e &&
                            (x.current.resetSegments(!0),
                            x.current.setSegment(S[e].start, S[e].start),
                            x.current.stop()));
                },
                getDuration: (e) => (null == x.current ? null : x.current.getDuration(e)),
                getCurrentFrame: () => (null == x.current ? null : x.current.currentFrame),
            }),
            [j, G, S, A],
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
                            u = w.current ?? D.current ?? n;
                        if (null != u && null != S[u]) {
                            let e = S[u];
                            t = null != e ? [A ?? e.start, e.start + e.duration] : void 0;
                        }
                        x.current = r.loadAnimation({
                            container: O.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: i()(k),
                            initialSegment: t,
                        });
                    }),
                () => {
                    x.current?.destroy();
                }
            ),
            [k, S, A],
        ));
    let L = { "--__lottieIconColor": null != t && "string" == typeof t ? t : t?.css, display: "flex", ...F };
    return (0, n.jsx)("div", { style: L, className: s()(m.f, l ? void 0 : m.P, y), ref: O });
}
