n.d(t, { P: () => E }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(488528),
    l = n.n(o),
    c = n(158954),
    u = n(260612),
    d = n(384694),
    f = n(964486),
    p = n(354328),
    _ = n(533832);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    let {
            color: a,
            useLottieDefaultColors: o,
            src: h,
            size: g = "md",
            width: E,
            height: b,
            className: y,
            initialAnimation: O,
            initialFrame: A,
            markers: v,
            onBeforeDismount: S,
        } = e,
        [I, T] = i.useState(null),
        C = i.useRef(null),
        N = i.useRef(null),
        R = i.useRef(null),
        w =
            "custom" === g
                ? {
                      width: E,
                      height: b,
                  }
                : (0, u.J)(g),
        P = !(0, p.A)("lottie_hover_multiple_loop"),
        D = i.useContext(c.CZY).reducedMotion.enabled,
        { enabled: x } = d.A.useExperiment({ location: "LottieIcon web entry point" }),
        L = D || !x,
        j = i.useRef(O);
    return (
        (0, f.l0)(() => {
            var e, t;
            null == S || S({ finalFrame: null != (e = null == (t = R.current) ? void 0 : t.currentFrame) ? e : null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == R.current) return;
                    let t = null == N.current;
                    if (((N.current = e), L)) {
                        let t = v[e];
                        R.current.resetSegments(!0),
                            R.current.setSegment(t.start + t.duration, t.start + t.duration),
                            R.current.stop();
                    } else {
                        R.current.setLoop(!P && e.includes("hover")), R.current.resetSegments(!0);
                        let n = t && null != A && A >= v[e].start && A <= v[e].start + v[e].duration ? A : v[e].start;
                        R.current.playSegments([n, v[e].start + v[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == R.current || L) return;
                },
                stopIfPlaying: (e) => {
                    null == R.current ||
                        L ||
                        (N.current === e &&
                            (R.current.resetSegments(!0),
                            R.current.setSegment(v[e].start, v[e].start),
                            R.current.stop()));
                },
                getDuration: (e) => (null == R.current ? null : R.current.getDuration(e)),
                getCurrentFrame: () => (null == R.current ? null : R.current.currentFrame),
            }),
            [L, P, v, A],
        ),
        i.useEffect(() => {
            null == I && h().then((e) => T(e.default));
        }, [I, h]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 883885, 23))
                    .then((e) => {
                        var t, n;
                        let r,
                            { default: i } = e,
                            a = 1 === Object.keys(v).length ? Object.values(v)[0].name : void 0,
                            s = null != (t = null != (n = N.current) ? n : j.current) ? t : a;
                        if (null != s && null != v[s]) {
                            let e = v[s];
                            r = [L ? e.start : null != A ? A : e.start, e.start + e.duration];
                        }
                        null != C.current &&
                            (R.current = i.loadAnimation({
                                container: C.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(I),
                                initialSegment: r,
                            }));
                    }),
                () => {
                    var e;
                    null == (e = R.current) || e.destroy();
                }
            ),
            [I, v, A, L],
        ),
        (0, r.jsx)("div", {
            style: m(
                {
                    "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? void 0 : a.css,
                    display: "flex",
                },
                w,
            ),
            className: s()(_.f, o ? void 0 : _.P, y),
            ref: C,
        })
    );
}
let E = i.forwardRef(g);
