var n = r(477900),
    u = r(582128),
    l = r(503698),
    s = r.n(l),
    a = r(480664),
    i = r.n(a),
    c = r(844222),
    o = r(116711),
    d = r(260612),
    f = r(964486),
    p = r(354328),
    m = r(162118);
r.d(
    t,
    {},
    {
        P: function (e) {
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
                [k, L] = u.useState(null),
                w = u.useRef(null),
                x = u.useRef(null),
                F = u.useRef(null),
                G = "custom" === h ? { width: g ?? void 0, height: v ?? void 0 } : (0, d.J)(h),
                R = !(0, p.A)("lottie_hover_multiple_loop"),
                j = u.useContext(c.C).reducedMotion.enabled,
                D = (0, o.G9)().isMainWindowVisible?.() ?? !0,
                I = j || !D,
                O = u.useRef(b);
            ((0, f.l0)(() => {
                C?.({ finalFrame: F.current?.currentFrame ?? null });
            }),
                u.useImperativeHandle(
                    _,
                    () => ({
                        play: (e) => {
                            if (null == F.current) return;
                            let t = null == x.current;
                            if (((x.current = e), I)) {
                                let t = S[e];
                                (F.current.resetSegments(!0),
                                    F.current.setSegment(t.start + t.duration, t.start + t.duration),
                                    F.current.stop());
                            } else {
                                (F.current.setLoop(!R && e.includes("hover")), F.current.resetSegments(!0));
                                let r =
                                    t && null != A && A >= S[e].start && A <= S[e].start + S[e].duration
                                        ? A
                                        : S[e].start;
                                F.current.playSegments([r, S[e].start + S[e].duration], !0);
                            }
                        },
                        stop: () => {
                            if (null == F.current || I) return;
                        },
                        stopIfPlaying: (e) => {
                            null == F.current ||
                                I ||
                                (x.current === e &&
                                    (F.current.resetSegments(!0),
                                    F.current.setSegment(S[e].start, S[e].start),
                                    F.current.stop()));
                        },
                        getDuration: (e) => (null == F.current ? null : F.current.getDuration(e)),
                        getCurrentFrame: () => (null == F.current ? null : F.current.currentFrame),
                    }),
                    [I, R, S, A],
                ),
                u.useEffect(() => {
                    null == k && a().then((e) => L(e.default));
                }, [k, a]),
                u.useEffect(
                    () => (
                        r
                            .e(996382)
                            .then(r.t.bind(r, 883885, 23))
                            .then((e) => {
                                let t,
                                    { default: r } = e;
                                if (null == w.current) return;
                                let n = 1 === Object.keys(S).length ? Object.values(S)[0].name : void 0,
                                    u = x.current ?? O.current ?? n;
                                if (null != u && null != S[u]) {
                                    let e = S[u];
                                    t = null != e ? [A ?? e.start, e.start + e.duration] : void 0;
                                }
                                F.current = r.loadAnimation({
                                    container: w.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !1,
                                    animationData: i()(k),
                                    initialSegment: t,
                                });
                            }),
                        () => {
                            F.current?.destroy();
                        }
                    ),
                    [k, S, A],
                ));
            let P = { "--__lottieIconColor": null != t && "string" == typeof t ? t : t?.css, display: "flex", ...G };
            return (0, n.jsx)("div", { style: P, className: s()(m.f, l ? void 0 : m.P, y), ref: w });
        },
    },
);
