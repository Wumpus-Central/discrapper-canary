r.d(n, {
    L: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(906280),
    c = r.n(u),
    d = r(186325),
    f = r(390507),
    _ = r(679400),
    h = r(580747),
    p = r(189954);
function m(e, n) {
    let { color: i, src: o, size: u = 'md', width: m, height: g, className: E, initialAnimation: v, markers: I } = e,
        [T, b] = s.useState(null),
        y = s.useRef(null),
        S = s.useRef(null),
        A = s.useRef(null),
        N =
            'custom' === u
                ? {
                      width: m,
                      height: g
                  }
                : (0, f.m)(u),
        C = !(0, h.Z)('lottie_hover_multiple_loop'),
        R = s.useContext(d.S).reducedMotion.enabled,
        { enabled: O } = _.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        D = R || !O,
        L = s.useRef(v);
    return (
        s.useImperativeHandle(
            n,
            () => ({
                play: (e) => {
                    if (null != A.current) {
                        if (((S.current = e), D)) {
                            let n = I[e];
                            A.current.resetSegments(!0), A.current.setSegment(n.start + n.duration, n.start + n.duration), A.current.stop();
                        } else A.current.setLoop(!C && e.includes('hover')), A.current.resetSegments(!0), A.current.playSegments([I[e].start, I[e].start + I[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == A.current || D) return;
                },
                stopIfPlaying: (e) => {
                    null != A.current && !D && S.current === e && (A.current.resetSegments(!0), A.current.setSegment(I[e].start, I[e].start), A.current.stop());
                }
            }),
            [D, C, I]
        ),
        s.useEffect(() => {
            null == T && o().then((e) => b(e.default));
        }, [T, o]),
        s.useEffect(
            () => (
                Promise.resolve()
                    .then(r.t.bind(r, 500923, 23))
                    .then((e) => {
                        var n;
                        let r,
                            { default: i } = e,
                            a = null !== (n = S.current) && void 0 !== n ? n : L.current;
                        if (null != a && null != I[a]) {
                            let e = I[a];
                            r = [e.start, e.start + e.duration];
                        }
                        null != y.current &&
                            (A.current = i.loadAnimation({
                                container: y.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: c()(T),
                                initialSegment: r
                            }));
                    }),
                () => {
                    var e;
                    null === (e = A.current) || void 0 === e || e.destroy();
                }
            ),
            [T, I]
        ),
        (0, a.jsx)('div', {
            style: {
                '--__lottieIconColor': null != i && 'string' == typeof i ? i : null == i ? void 0 : i.css,
                display: 'flex',
                ...N
            },
            className: l()(p.lottieIcon, E),
            ref: y
        })
    );
}
let g = s.forwardRef(m);
