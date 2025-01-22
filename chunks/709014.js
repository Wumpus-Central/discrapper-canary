r.d(n, {
    L: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(906280),
    c = r.n(u),
    d = r(186325),
    f = r(390507),
    p = r(679400),
    h = r(580747),
    _ = r(189954);
function m(e, n) {
    let { color: i, src: s, size: u = 'md', width: m, height: g, className: E, initialAnimation: v, markers: y } = e,
        [b, I] = o.useState(null),
        T = o.useRef(null),
        S = o.useRef(null),
        A = o.useRef(null),
        C =
            'custom' === u
                ? {
                      width: m,
                      height: g
                  }
                : (0, f.m)(u),
        N = !(0, h.Z)('lottie_hover_multiple_loop'),
        R = o.useContext(d.S).reducedMotion.enabled,
        { enabled: O } = p.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        D = R || !O,
        L = o.useRef(v);
    return (
        o.useImperativeHandle(
            n,
            () => ({
                play: (e) => {
                    if (null != A.current) {
                        if (((S.current = e), D)) {
                            let n = y[e];
                            A.current.resetSegments(!0), A.current.setSegment(n.start + n.duration, n.start + n.duration), A.current.stop();
                        } else A.current.setLoop(!N && e.includes('hover')), A.current.resetSegments(!0), A.current.playSegments([y[e].start, y[e].start + y[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == A.current || D) return;
                },
                stopIfPlaying: (e) => {
                    null != A.current && !D && S.current === e && (A.current.resetSegments(!0), A.current.setSegment(y[e].start, y[e].start), A.current.stop());
                }
            }),
            [D, N, y]
        ),
        o.useEffect(() => {
            null == b && s().then((e) => I(e.default));
        }, [b, s]),
        o.useEffect(
            () => (
                Promise.resolve()
                    .then(r.t.bind(r, 500923, 23))
                    .then((e) => {
                        var n;
                        let r,
                            { default: i } = e,
                            a = null !== (n = S.current) && void 0 !== n ? n : L.current;
                        if (null != a && null != y[a]) {
                            let e = y[a];
                            r = [e.start, e.start + e.duration];
                        }
                        null != T.current &&
                            (A.current = i.loadAnimation({
                                container: T.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: c()(b),
                                initialSegment: r
                            }));
                    }),
                () => {
                    var e;
                    null === (e = A.current) || void 0 === e || e.destroy();
                }
            ),
            [b, y]
        ),
        (0, a.jsx)('div', {
            style: {
                '--__lottieIconColor': null != i && 'string' == typeof i ? i : null == i ? void 0 : i.css,
                display: 'flex',
                ...C
            },
            className: l()(_.lottieIcon, E),
            ref: T
        })
    );
}
let g = o.forwardRef(m);
