n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(62170),
    d = n(640108),
    f = n(793148),
    _ = n(585483),
    p = n(70956),
    h = n(36703),
    m = n(347312),
    g = n(981631),
    E = n(388032),
    b = n(182525);
let y = i.lazy(() => n.e('89792').then(n.bind(n, 711635)));
function v(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? '--:--' : t ? (0, d.yv)(Math.ceil(n - i)) : (0, d.yv)(Math.ceil(n));
    return (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        className: b.duration,
        tabularNumbers: !0,
        children: a
    });
}
function O(e, t, n) {
    i.useEffect(() => {
        let r;
        function i() {
            let a = e.current;
            null != a && (n(a.currentTime), t && (r = requestAnimationFrame(i)));
        }
        return (
            i(),
            () => {
                null != r && cancelAnimationFrame(r);
            }
        );
    }, [e, t, n]);
}
function I(e, t, n) {
    i.useEffect(() => {
        if (t)
            return (
                _.S.dispatch(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                _.S.subscribe(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    _.S.unsubscribe(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );
        function r(t) {
            let { src: r } = t;
            e !== r && n(!1);
        }
    }, [e, t, n]);
}
let S = i.memo(function (e) {
    let t,
        { src: n, volume: a = 1, onVolumeChange: d, onMute: _, waveform: g, durationSecs: S, onVolumeShow: T, onVolumeHide: A, onPlay: N, onPause: C, onError: R } = e,
        P = i.useRef(null),
        [w, D] = i.useState(0),
        [L, x] = i.useState(S),
        [M, k] = i.useState(!1),
        [j, U] = i.useState(!1),
        [G, B] = i.useState(!1),
        [V, F] = i.useState(!1),
        [Z, H] = i.useState('none'),
        [Y, W] = i.useState(() => ('function' == typeof a ? a() : a)),
        K = i.useRef(void 0),
        z = i.useCallback(() => {
            U((e) => !e);
        }, []),
        q = i.useCallback(() => {
            H('metadata');
        }, []),
        Q = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || x(t);
        }, []),
        X = i.useCallback(() => {
            U(!1),
                null == K.current &&
                    (K.current = setTimeout(() => {
                        F(!1), (K.current = void 0);
                    }, 500));
        }, []),
        J = i.useCallback(() => {
            G || X();
        }, [X, G]),
        $ = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = e.error;
            null == R || R(t);
        }, [R]),
        ee = i.useCallback(
            (e) => {
                let t = (0, h.A)(e, 1);
                k(0 === t), W(t), null == d || d(t);
            },
            [d]
        ),
        et = i.useCallback(() => {
            k(!M), null == _ || _(!M);
        }, [M, _]),
        en = i.useCallback(() => {
            B(!0);
        }, []),
        er = i.useCallback(() => {
            B(!1), w === L && X();
        }, [w, L, X]),
        ei = i.useCallback(
            (e) => {
                let t = P.current;
                if (null == L || null == t) return;
                let n = e * L;
                D(n), (t.currentTime = n), F(!0), clearTimeout(K.current), (K.current = void 0);
            },
            [L]
        );
    i.useEffect(() => {
        !V && j && F(!0);
    }, [j, V]);
    let ea = i.useRef(null),
        eo = {
            played: V,
            currentTime: w,
            onPause: C,
            onPlay: N
        },
        es = i.useRef(eo);
    i.useEffect(() => {
        es.current = eo;
    }),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = es.current;
            if (e || j)
                if (j) {
                    var i, a;
                    (ea.current = performance.now()), null == r || r(!1, t, (null != (a = null == (i = P.current) ? void 0 : i.duration) ? a : 0) * p.Z.Millis.SECOND);
                } else {
                    let e = performance.now(),
                        r = ea.current,
                        i = null != r ? (e - r) / 1000 : 0;
                    null == n || n(t, i), (ea.current = null);
                }
        }, [j]),
        O(P, j, D),
        I(n, j, U);
    let el = j ? l.fpf : l.o1U,
        ec = j ? E.intl.string(E.t.ZcgDJS) : E.intl.string(E.t.RscU7O);
    t =
        'Safari' === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(y, {
                      ref: P,
                      className: b.audioElement,
                      src: n,
                      preload: Z,
                      playing: j && !G,
                      onEnded: J,
                      onLoadedMetadata: Q,
                      onError: $,
                      muted: M,
                      volume: Y
                  })
              })
            : (0, r.jsx)(u.Z, {
                  ref: P,
                  className: b.audioElement,
                  controls: !1,
                  preload: Z,
                  onEnded: J,
                  onLoadedMetadata: Q,
                  onError: $,
                  muted: M,
                  volume: Y,
                  playing: j && !G,
                  children: (0, r.jsx)('source', { src: n })
              });
    let eu = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: o()(b.container, { [b.playing]: j }),
        onMouseEnter: q,
        children: [
            (0, r.jsx)('div', {
                className: b.rippleContainer,
                children: (0, r.jsx)('div', { className: o()(b.ripple, { [b.reducedMotion]: eu }) })
            }),
            (0, r.jsx)(l.P3F, {
                className: b.playButtonContainer,
                onClick: z,
                'aria-label': ec,
                children: (0, r.jsx)(el, {
                    className: b.playIcon,
                    color: 'currentColor',
                    size: 'sm'
                })
            }),
            (0, r.jsx)(m.Z, {
                className: b.waveform,
                waveform: g,
                currentTime: w,
                duration: null != L ? L : 1,
                playing: j,
                played: V,
                onDrag: ei,
                onDragStart: en,
                onDragEnd: er
            }),
            (0, r.jsx)(v, {
                played: V,
                currentTime: w,
                duration: L
            }),
            (0, r.jsx)(f.Z, {
                className: b.volumeButton,
                iconClassName: b.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: b.volumeSlider,
                muted: M,
                value: (0, h.P)(Y, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ee,
                onToggleMute: et,
                onVolumeShow: T,
                onVolumeHide: A
            }),
            t
        ]
    });
});
