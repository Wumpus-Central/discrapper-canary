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
    p = n(650601);
function _(e, t, n) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    let { color: o, src: s, size: _ = 'md', width: m, height: g, className: E, initialAnimation: v, markers: b } = e,
        [y, O] = i.useState(null),
        S = i.useRef(null),
        I = i.useRef(null),
        T = i.useRef(null),
        N =
            'custom' === _
                ? {
                      width: m,
                      height: g
                  }
                : (0, u.m)(_),
        A = !(0, f.Z)('lottie_hover_multiple_loop'),
        C = i.useContext(c.S).reducedMotion.enabled,
        { enabled: R } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        P = C || !R,
        w = i.useRef(v);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null != T.current) {
                        if (((I.current = e), P)) {
                            let t = b[e];
                            T.current.resetSegments(!0), T.current.setSegment(t.start + t.duration, t.start + t.duration), T.current.stop();
                        } else T.current.setLoop(!A && e.includes('hover')), T.current.resetSegments(!0), T.current.playSegments([b[e].start, b[e].start + b[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == T.current || P) return;
                },
                stopIfPlaying: (e) => {
                    null == T.current || P || I.current !== e || (T.current.resetSegments(!0), T.current.setSegment(b[e].start, b[e].start), T.current.stop());
                }
            }),
            [P, A, b]
        ),
        i.useEffect(() => {
            null == y && s().then((e) => O(e.default));
        }, [y, s]),
        i.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t;
                        let n,
                            { default: r } = e,
                            i = null !== (t = I.current) && void 0 !== t ? t : w.current;
                        if (null != i && null != b[i]) {
                            let e = b[i];
                            n = [e.start, e.start + e.duration];
                        }
                        null != S.current &&
                            (T.current = r.loadAnimation({
                                container: S.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(y),
                                initialSegment: n
                            }));
                    }),
                () => {
                    var e;
                    null === (e = T.current) || void 0 === e || e.destroy();
                }
            ),
            [y, b]
        ),
        (0, r.jsx)('div', {
            style: h(
                {
                    '--__lottieIconColor': null != o && 'string' == typeof o ? o : null == o ? void 0 : o.css,
                    display: 'flex'
                },
                N
            ),
            className: a()(p.lottieIcon, E),
            ref: S
        })
    );
}
let g = i.forwardRef(m);
