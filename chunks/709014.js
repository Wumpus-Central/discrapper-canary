n.d(t, { L: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(906280),
    l = n.n(s),
    c = n(793030),
    u = n(390507),
    d = n(679400),
    f = n(493773),
    p = n(580747),
    _ = n(326913);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    let {
            color: a,
            useLottieDefaultColors: s,
            src: m,
            size: g = "md",
            width: E,
            height: b,
            className: y,
            initialAnimation: O,
            initialFrame: v,
            markers: S,
            onBeforeDismount: I,
        } = e,
        [T, C] = i.useState(null),
        A = i.useRef(null),
        N = i.useRef(null),
        P = i.useRef(null),
        R =
            "custom" === g
                ? {
                      width: E,
                      height: b,
                  }
                : (0, u.m)(g),
        w = !(0, p.Z)("lottie_hover_multiple_loop"),
        D = i.useContext(c.Sfi).reducedMotion.enabled,
        { enabled: x } = d.Z.useExperiment({ location: "LottieIcon web entry point" }),
        L = D || !x,
        j = i.useRef(O);
    return (
        (0, f.zq)(() => {
            var e, t;
            null == I || I({ finalFrame: null != (t = null == (e = P.current) ? void 0 : e.currentFrame) ? t : null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == P.current) return;
                    let t = null == N.current;
                    if (((N.current = e), L)) {
                        let t = S[e];
                        P.current.resetSegments(!0),
                            P.current.setSegment(t.start + t.duration, t.start + t.duration),
                            P.current.stop();
                    } else {
                        P.current.setLoop(!w && e.includes("hover")), P.current.resetSegments(!0);
                        let n = t && null != v && v >= S[e].start && v <= S[e].start + S[e].duration ? v : S[e].start;
                        P.current.playSegments([n, S[e].start + S[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == P.current || L) return;
                },
                stopIfPlaying: (e) => {
                    null == P.current ||
                        L ||
                        (N.current === e &&
                            (P.current.resetSegments(!0),
                            P.current.setSegment(S[e].start, S[e].start),
                            P.current.stop()));
                },
                getDuration: (e) => (null == P.current ? null : P.current.getDuration(e)),
                getCurrentFrame: () => (null == P.current ? null : P.current.currentFrame),
            }),
            [L, w, S, v],
        ),
        i.useEffect(() => {
            null == T && m().then((e) => C(e.default));
        }, [T, m]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t, n;
                        let r,
                            { default: i } = e,
                            a = 1 === Object.keys(S).length ? Object.values(S)[0].name : void 0,
                            o = null != (n = null != (t = N.current) ? t : j.current) ? n : a;
                        if (null != o && null != S[o]) {
                            let e = S[o];
                            r = [L ? e.start : null != v ? v : e.start, e.start + e.duration];
                        }
                        null != A.current &&
                            (P.current = i.loadAnimation({
                                container: A.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(T),
                                initialSegment: r,
                            }));
                    }),
                () => {
                    var e;
                    null == (e = P.current) || e.destroy();
                }
            ),
            [T, S, v, L],
        ),
        (0, r.jsx)("div", {
            style: h(
                {
                    "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? void 0 : a.css,
                    display: "flex",
                },
                R,
            ),
            className: o()(_.lottieIcon, s ? void 0 : _.lottieIconColors, y),
            ref: A,
        })
    );
}
let E = i.forwardRef(g);
