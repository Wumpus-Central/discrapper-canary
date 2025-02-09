n.d(t, { L: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(906280),
    l = n.n(o),
    u = n(186325),
    c = n(390507),
    d = n(679400),
    f = n(580747),
    _ = n(844928);
function p(e, t) {
    let { color: a, src: o, size: p = 'md', width: h, height: m, className: g, initialAnimation: E, markers: v } = e,
        [y, I] = r.useState(null),
        T = r.useRef(null),
        b = r.useRef(null),
        S = r.useRef(null),
        A =
            'custom' === p
                ? {
                      width: h,
                      height: m
                  }
                : (0, c.m)(p),
        N = !(0, f.Z)('lottie_hover_multiple_loop'),
        C = r.useContext(u.S).reducedMotion.enabled,
        { enabled: R } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        O = C || !R,
        D = r.useRef(E);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null != S.current) {
                        if (((b.current = e), O)) {
                            let t = v[e];
                            S.current.resetSegments(!0), S.current.setSegment(t.start + t.duration, t.start + t.duration), S.current.stop();
                        } else S.current.setLoop(!N && e.includes('hover')), S.current.resetSegments(!0), S.current.playSegments([v[e].start, v[e].start + v[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == S.current || O) return;
                },
                stopIfPlaying: (e) => {
                    null == S.current || O || b.current !== e || (S.current.resetSegments(!0), S.current.setSegment(v[e].start, v[e].start), S.current.stop());
                }
            }),
            [O, N, v]
        ),
        r.useEffect(() => {
            null == y && o().then((e) => I(e.default));
        }, [y, o]),
        r.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t;
                        let n,
                            { default: i } = e,
                            r = null !== (t = b.current) && void 0 !== t ? t : D.current;
                        if (null != r && null != v[r]) {
                            let e = v[r];
                            n = [e.start, e.start + e.duration];
                        }
                        null != T.current &&
                            (S.current = i.loadAnimation({
                                container: T.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(y),
                                initialSegment: n
                            }));
                    }),
                () => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.destroy();
                }
            ),
            [y, v]
        ),
        (0, i.jsx)('div', {
            style: {
                '--__lottieIconColor': null != a && 'string' == typeof a ? a : null == a ? void 0 : a.css,
                display: 'flex',
                ...A
            },
            className: s()(_.lottieIcon, g),
            ref: T
        })
    );
}
let h = r.forwardRef(p);
