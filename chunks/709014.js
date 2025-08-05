(n.d(t, { L: () => E }), n(388685));
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    let { color: a, useLottieDefaultColors: s, src: h, size: g = 'md', width: E, height: b, className: y, initialAnimation: O, initialFrame: v, markers: I, onBeforeDismount: T } = e,
        [S, A] = i.useState(null),
        N = i.useRef(null),
        C = i.useRef(null),
        w = i.useRef(null),
        R =
            'custom' === g
                ? {
                      width: E,
                      height: b
                  }
                : (0, u.m)(g),
        P = !(0, _.Z)('lottie_hover_multiple_loop'),
        D = i.useContext(c.S).reducedMotion.enabled,
        { enabled: L } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        x = D || !L,
        k = i.useRef(O);
    return (
        (0, f.zq)(() => {
            var e, t;
            null == T || T({ finalFrame: null != (t = null == (e = w.current) ? void 0 : e.currentFrame) ? t : null });
        }),
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null == w.current) return;
                    let t = null == C.current;
                    if (((C.current = e), x)) {
                        let t = I[e];
                        (w.current.resetSegments(!0), w.current.setSegment(t.start + t.duration, t.start + t.duration), w.current.stop());
                    } else {
                        (w.current.setLoop(!P && e.includes('hover')), w.current.resetSegments(!0));
                        let n = t && null != v && v >= I[e].start && v <= I[e].start + I[e].duration ? v : I[e].start;
                        w.current.playSegments([n, I[e].start + I[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == w.current || x) return;
                },
                stopIfPlaying: (e) => {
                    null == w.current || x || (C.current === e && (w.current.resetSegments(!0), w.current.setSegment(I[e].start, I[e].start), w.current.stop()));
                },
                getDuration: (e) => (null == w.current ? null : w.current.getDuration(e)),
                getCurrentFrame: () => (null == w.current ? null : w.current.currentFrame)
            }),
            [x, P, I, v]
        ),
        i.useEffect(() => {
            null == S && h().then((e) => A(e.default));
        }, [S, h]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t, n;
                        let r,
                            { default: i } = e,
                            a = 1 === Object.keys(I).length ? Object.values(I)[0].name : void 0,
                            o = null != (n = null != (t = C.current) ? t : k.current) ? n : a;
                        if (null != o && null != I[o]) {
                            let e = I[o];
                            r = [x ? e.start : null != v ? v : e.start, e.start + e.duration];
                        }
                        null != N.current &&
                            (w.current = i.loadAnimation({
                                container: N.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(S),
                                initialSegment: r
                            }));
                    }),
                () => {
                    var e;
                    null == (e = w.current) || e.destroy();
                }
            ),
            [S, I, v, x]
        ),
        (0, r.jsx)('div', {
            style: m(
                {
                    '--__lottieIconColor': null != a && 'string' == typeof a ? a : null == a ? void 0 : a.css,
                    display: 'flex'
                },
                R
            ),
            className: o()(p.lottieIcon, s ? void 0 : p.lottieIconColors, y),
            ref: N
        })
    );
}
let E = i.forwardRef(g);
