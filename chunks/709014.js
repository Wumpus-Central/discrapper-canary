n.d(t, { L: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(906280),
    l = n.n(s),
    c = n(186325),
    u = n(390507),
    d = n(679400),
    f = n(580747),
    _ = n(480993);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    let { color: o, useLottieDefaultColors: s, src: p, size: m = 'md', width: g, height: E, className: b, initialAnimation: y, markers: v } = e,
        [O, I] = i.useState(null),
        S = i.useRef(null),
        T = i.useRef(null),
        N = i.useRef(null),
        A =
            'custom' === m
                ? {
                      width: g,
                      height: E
                  }
                : (0, u.m)(m),
        C = !(0, f.Z)('lottie_hover_multiple_loop'),
        R = i.useContext(c.S).reducedMotion.enabled,
        { enabled: P } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        w = R || !P,
        D = i.useRef(y);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null != N.current)
                        if (((T.current = e), w)) {
                            let t = v[e];
                            N.current.resetSegments(!0), N.current.setSegment(t.start + t.duration, t.start + t.duration), N.current.stop();
                        } else N.current.setLoop(!C && e.includes('hover')), N.current.resetSegments(!0), N.current.playSegments([v[e].start, v[e].start + v[e].duration], !0);
                },
                stop: () => {
                    if (null == N.current || w) return;
                },
                stopIfPlaying: (e) => {
                    null == N.current || w || (T.current === e && (N.current.resetSegments(!0), N.current.setSegment(v[e].start, v[e].start), N.current.stop()));
                },
                getDuration: (e) => (null == N.current ? null : N.current.getDuration(e))
            }),
            [w, C, v]
        ),
        i.useEffect(() => {
            null == O && p().then((e) => I(e.default));
        }, [O, p]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t;
                        let n,
                            { default: r } = e,
                            i = null != (t = T.current) ? t : D.current;
                        if (null != i && null != v[i]) {
                            let e = v[i];
                            n = [e.start, e.start + e.duration];
                        }
                        null != S.current &&
                            (N.current = r.loadAnimation({
                                container: S.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(O),
                                initialSegment: n
                            }));
                    }),
                () => {
                    var e;
                    null == (e = N.current) || e.destroy();
                }
            ),
            [O, v]
        ),
        (0, r.jsx)('div', {
            style: h(
                {
                    '--__lottieIconColor': null != o && 'string' == typeof o ? o : null == o ? void 0 : o.css,
                    display: 'flex'
                },
                A
            ),
            className: a()(_.lottieIcon, s ? void 0 : _.lottieIconColors, b),
            ref: S
        })
    );
}
let g = i.forwardRef(m);
