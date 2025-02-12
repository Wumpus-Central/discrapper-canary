n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(62170),
    d = n(640108),
    f = n(793148),
    _ = n(585483),
    p = n(70956),
    h = n(36703),
    m = n(347312),
    g = n(981631),
    E = n(388032),
    v = n(490486);
let y = r.lazy(() => Promise.all([n.e('26460'), n.e('89792')]).then(n.bind(n, 711635)));
function I(e) {
    let { played: t, duration: n, currentTime: r } = e,
        a = null == n ? '--:--' : t ? (0, d.yv)(Math.ceil(n - r)) : (0, d.yv)(Math.ceil(n));
    return (0, i.jsx)(l.Text, {
        variant: 'text-sm/normal',
        className: v.duration,
        tabularNumbers: !0,
        children: a
    });
}
function T(e, t, n) {
    r.useEffect(() => {
        let i;
        function r() {
            let a = e.current;
            if (null != a) n(a.currentTime), t && (i = requestAnimationFrame(r));
        }
        return (
            r(),
            () => {
                null != i && cancelAnimationFrame(i);
            }
        );
    }, [e, t, n]);
}
function b(e, t, n) {
    r.useEffect(() => {
        if (t)
            return (
                _.S.dispatch(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                _.S.subscribe(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, i),
                () => {
                    _.S.unsubscribe(g.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, i);
                }
            );
        function i(t) {
            let { src: i } = t;
            e !== i && n(!1);
        }
    }, [e, t, n]);
}
let S = r.memo(function (e) {
    let t,
        { src: n, volume: a = 1, onVolumeChange: d, onMute: _, waveform: g, durationSecs: S, onVolumeShow: A, onVolumeHide: N, onPlay: C, onPause: R, onError: O } = e,
        D = r.useRef(null),
        [L, x] = r.useState(0),
        [P, w] = r.useState(S),
        [M, k] = r.useState(!1),
        [U, G] = r.useState(!1),
        [B, Z] = r.useState(!1),
        [F, V] = r.useState(!1),
        [j, H] = r.useState('none'),
        [Y, W] = r.useState(() => ('function' == typeof a ? a() : a)),
        K = r.useRef(void 0),
        z = r.useCallback(() => {
            G((e) => !e);
        }, []),
        q = r.useCallback(() => {
            H('metadata');
        }, []),
        Q = r.useCallback((e) => {
            let t = e.currentTarget.duration;
            !isNaN(t) && w(t);
        }, []),
        X = r.useCallback(() => {
            G(!1),
                null == K.current &&
                    (K.current = setTimeout(() => {
                        V(!1), (K.current = void 0);
                    }, 500));
        }, []),
        J = r.useCallback(() => {
            !B && X();
        }, [X, B]),
        $ = r.useCallback(() => {
            let e = D.current;
            if (null == e) return;
            let t = e.error;
            null == O || O(t);
        }, [O]),
        ee = r.useCallback(
            (e) => {
                let t = (0, h.A)(e, 1);
                k(0 === t), W(t), null == d || d(t);
            },
            [d]
        ),
        et = r.useCallback(() => {
            k(!M), null == _ || _(!M);
        }, [M, _]),
        en = r.useCallback(() => {
            Z(!0);
        }, []),
        ei = r.useCallback(() => {
            Z(!1), L === P && X();
        }, [L, P, X]),
        er = r.useCallback(
            (e) => {
                let t = D.current;
                if (null == P || null == t) return;
                let n = e * P;
                x(n), (t.currentTime = n), V(!0), clearTimeout(K.current), (K.current = void 0);
            },
            [P]
        );
    r.useEffect(() => {
        !F && U && V(!0);
    }, [U, F]);
    let ea = r.useRef(null),
        es = {
            played: F,
            currentTime: L,
            onPause: R,
            onPlay: C
        },
        eo = r.useRef(es);
    r.useEffect(() => {
        eo.current = es;
    }),
        r.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: i } = eo.current;
            if (e || U) {
                if (U) {
                    var r, a;
                    (ea.current = performance.now()), null == i || i(!1, t, (null !== (a = null === (r = D.current) || void 0 === r ? void 0 : r.duration) && void 0 !== a ? a : 0) * p.Z.Millis.SECOND);
                } else {
                    let e = performance.now(),
                        i = ea.current,
                        r = null != i ? (e - i) / 1000 : 0;
                    null == n || n(t, r), (ea.current = null);
                }
            }
        }, [U]),
        T(D, U, x),
        b(n, U, G);
    let el = U ? l.fpf : l.o1U,
        eu = U ? E.intl.string(E.t.ZcgDJS) : E.intl.string(E.t.RscU7O);
    'Safari' === platform.name
        ? (t = (0, i.jsx)(r.Suspense, {
              children: (0, i.jsx)(y, {
                  ref: D,
                  className: v.audioElement,
                  src: n,
                  preload: j,
                  playing: U && !B,
                  onEnded: J,
                  onLoadedMetadata: Q,
                  onError: $,
                  muted: M,
                  volume: Y
              })
          }))
        : (t = (0, i.jsx)(c.Z, {
              ref: D,
              className: v.audioElement,
              controls: !1,
              preload: j,
              onEnded: J,
              onLoadedMetadata: Q,
              onError: $,
              muted: M,
              volume: Y,
              playing: U && !B,
              children: (0, i.jsx)('source', { src: n })
          }));
    let ec = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        { enabled: ed } = (0, l.bWb)();
    return (0, i.jsxs)('div', {
        className: s()(v.container, { [v.playing]: U }),
        onMouseEnter: q,
        children: [
            (0, i.jsx)('div', {
                className: v.rippleContainer,
                children: (0, i.jsx)('div', { className: s()(v.ripple, { [v.reducedMotion]: ec }) })
            }),
            (0, i.jsx)(l.P3F, {
                className: v.playButtonContainer,
                onClick: z,
                'aria-label': eu,
                children: (0, i.jsx)(el, {
                    className: s()(v.playIcon, { [v.oldPlayIconSpacing]: !ed && !U }),
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 18
                })
            }),
            (0, i.jsx)(m.Z, {
                className: v.waveform,
                waveform: g,
                currentTime: L,
                duration: null != P ? P : 1,
                playing: U,
                played: F,
                onDrag: er,
                onDragStart: en,
                onDragEnd: ei
            }),
            (0, i.jsx)(I, {
                played: F,
                currentTime: L,
                duration: P
            }),
            (0, i.jsx)(f.Z, {
                className: v.volumeButton,
                iconClassName: v.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: v.volumeSlider,
                muted: M,
                value: (0, h.P)(Y, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ee,
                onToggleMute: et,
                onVolumeShow: A,
                onVolumeHide: N
            }),
            t
        ]
    });
});
