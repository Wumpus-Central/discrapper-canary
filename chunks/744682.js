r.d(t, { P: () => g });
var n = r(477900),
    u = r(582128),
    l = r(503698),
    s = r.n(l),
    a = r(480664),
    i = r.n(a),
    c = r(844222),
    o = r(460890),
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
            height: v,
            className: y,
            initialAnimation: b,
            initialFrame: S,
            markers: _,
            onBeforeDismount: C,
            ref: k,
        } = e,
        [w, F] = u.useState(null),
        R = u.useRef(null),
        j = u.useRef(null),
        x = u.useRef(null),
        D = "custom" === g ? { width: h ?? void 0, height: v ?? void 0 } : (0, d.J)(g),
        I = !(0, p.A)("lottie_hover_multiple_loop"),
        P = u.useContext(c.C).reducedMotion.enabled,
        A = (0, o.G9)().isMainWindowVisible?.() ?? !0,
        E = P || !A,
        M = u.useRef(b);
    ((0, f.l0)(() => {
        C?.({ finalFrame: x.current?.currentFrame ?? null });
    }),
        u.useImperativeHandle(
            k,
            () => ({
                play: (e) => {
                    if (null == x.current) return;
                    let t = null == j.current;
                    if (((j.current = e), E)) {
                        let t = _[e];
                        (x.current.resetSegments(!0),
                            x.current.setSegment(t.start + t.duration, t.start + t.duration),
                            x.current.stop());
                    } else {
                        (x.current.setLoop(!I && e.includes("hover")), x.current.resetSegments(!0));
                        let r = t && null != S && S >= _[e].start && S <= _[e].start + _[e].duration ? S : _[e].start;
                        x.current.playSegments([r, _[e].start + _[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == x.current || E) return;
                },
                stopIfPlaying: (e) => {
                    null == x.current ||
                        E ||
                        (j.current === e &&
                            (x.current.resetSegments(!0),
                            x.current.setSegment(_[e].start, _[e].start),
                            x.current.stop()));
                },
                getDuration: (e) => (null == x.current ? null : x.current.getDuration(e)),
                getCurrentFrame: () => (null == x.current ? null : x.current.currentFrame),
            }),
            [E, I, _, S],
        ),
        u.useEffect(() => {
            null == w && a().then((e) => F(e.default));
        }, [w, a]),
        u.useEffect(
            () => (
                r
                    .e("996382")
                    .then(r.t.bind(r, 883885, 23))
                    .then((e) => {
                        let t,
                            { default: r } = e;
                        if (null == R.current) return;
                        let n = 1 === Object.keys(_).length ? Object.values(_)[0].name : void 0,
                            u = j.current ?? M.current ?? n;
                        if (null != u && null != _[u]) {
                            let e = _[u];
                            t = null != e ? [S ?? e.start, e.start + e.duration] : void 0;
                        }
                        x.current = r.loadAnimation({
                            container: R.current,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: i()(w),
                            initialSegment: t,
                        });
                    }),
                () => {
                    x.current?.destroy();
                }
            ),
            [w, _, S],
        ));
    let O = { "--__lottieIconColor": null != t && "string" == typeof t ? t : t?.css, display: "flex", ...D };
    return (0, n.jsx)("div", { style: O, className: s()(m.f, l ? void 0 : m.P, y), ref: R });
}
