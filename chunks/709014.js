n.d(t, { L: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(906280),
    l = n.n(s),
    c = n(186325),
    u = n(390507),
    d = n(679400),
    f = n(493773),
    _ = n(580747),
    p = n(480993);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    let { color: a, useLottieDefaultColors: s, src: h, size: g = 'md', width: E, height: b, className: y, initialAnimation: O, initialFrame: v, markers: I, onBeforeDismount: S } = e,
        [T, A] = i.useState(null),
        N = i.useRef(null),
        C = i.useRef(null),
        R = i.useRef(null),
        P =
            'custom' === g
                ? {
                      width: E,
                      height: b
                  }
                : (0, u.m)(g),
        w = !(0, _.Z)('lottie_hover_multiple_loop'),
        D = i.useContext(c.S).reducedMotion.enabled,
        { enabled: L } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        x = D || !L,
        M = i.useRef(O);
    return (
        (0, f.zq)(() => {
            var e, t;
            null == S || S({ finalFrame: null != (t = null == (e = R.current) ? void 0 : e.currentFrame) ? t : null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == R.current) return;
                    let t = null == C.current;
                    if (((C.current = e), x)) {
                        let t = I[e];
                        R.current.resetSegments(!0), R.current.setSegment(t.start + t.duration, t.start + t.duration), R.current.stop();
                    } else {
                        R.current.setLoop(!w && e.includes('hover')), R.current.resetSegments(!0);
                        let n = t && null != v && v >= I[e].start && v <= I[e].start + I[e].duration ? v : I[e].start;
                        R.current.playSegments([n, I[e].start + I[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == R.current || x) return;
                },
                stopIfPlaying: (e) => {
                    null == R.current || x || (C.current === e && (R.current.resetSegments(!0), R.current.setSegment(I[e].start, I[e].start), R.current.stop()));
                },
                getDuration: (e) => (null == R.current ? null : R.current.getDuration(e)),
                getCurrentFrame: () => (null == R.current ? null : R.current.currentFrame)
            }),
            [x, w, I, v]
        ),
        i.useEffect(() => {
            null == T && h().then((e) => A(e.default));
        }, [T, h]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t, n;
                        let r,
                            { default: i } = e,
                            a = 1 === Object.keys(I).length ? Object.values(I)[0].name : void 0,
                            o = null != (n = null != (t = C.current) ? t : M.current) ? n : a;
                        if (null != o && null != I[o]) {
                            let e = I[o];
                            r = [x ? e.start : null != v ? v : e.start, e.start + e.duration];
                        }
                        null != N.current &&
                            (R.current = i.loadAnimation({
                                container: N.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(T),
                                initialSegment: r
                            }));
                    }),
                () => {
                    var e;
                    null == (e = R.current) || e.destroy();
                }
            ),
            [T, I, v, x]
        ),
        (0, r.jsx)('div', {
            style: m(
                {
                    '--__lottieIconColor': null != a && 'string' == typeof a ? a : null == a ? void 0 : a.css,
                    display: 'flex'
                },
                P
            ),
            className: o()(p.lottieIcon, s ? void 0 : p.lottieIconColors, y),
            ref: N
        })
    );
}
let E = i.forwardRef(g);
