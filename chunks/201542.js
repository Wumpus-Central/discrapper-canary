var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(607070),
    f = r(62170),
    _ = r(640108),
    h = r(793148),
    p = r(585483),
    m = r(70956),
    g = r(36703),
    E = r(347312),
    v = r(981631),
    I = r(388032),
    T = r(438922);
let b = s.lazy(() => Promise.all([r.e('26460'), r.e('89792')]).then(r.bind(r, 711635)));
function y(e) {
    let { played: n, duration: r, currentTime: i } = e,
        s = null == r ? '--:--' : n ? (0, _.yv)(Math.ceil(r - i)) : (0, _.yv)(Math.ceil(r));
    return (0, a.jsx)(c.Text, {
        variant: 'text-sm/normal',
        className: T.duration,
        tabularNumbers: !0,
        children: s
    });
}
function S(e, n, r) {
    s.useEffect(() => {
        let i;
        function a() {
            let s = e.current;
            if (null == s) return;
            if ((r(s.currentTime), !!n)) i = requestAnimationFrame(a);
        }
        return (
            a(),
            () => {
                null != i && cancelAnimationFrame(i);
            }
        );
    }, [e, n, r]);
}
function A(e, n, r) {
    s.useEffect(() => {
        if (!!n)
            return (
                p.S.dispatch(v.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                p.S.subscribe(v.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, i),
                () => {
                    p.S.unsubscribe(v.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, i);
                }
            );
        function i(n) {
            let { src: i } = n;
            if (e !== i) r(!1);
        }
    }, [e, n, r]);
}
n.Z = s.memo(function (e) {
    let n,
        { src: r, volume: i = 1, onVolumeChange: o, onMute: _, waveform: p, durationSecs: v, onVolumeShow: N, onVolumeHide: C, onPlay: R, onPause: O, onError: D } = e,
        L = s.useRef(null),
        [x, w] = s.useState(0),
        [P, M] = s.useState(v),
        [k, U] = s.useState(!1),
        [B, G] = s.useState(!1),
        [Z, F] = s.useState(!1),
        [V, j] = s.useState(!1),
        [H, Y] = s.useState('none'),
        [W, K] = s.useState(() => ('function' == typeof i ? i() : i)),
        z = s.useRef(void 0),
        q = s.useCallback(() => {
            G((e) => !e);
        }, []),
        Q = s.useCallback(() => {
            Y('metadata');
        }, []),
        X = s.useCallback((e) => {
            let n = e.currentTarget.duration;
            if (!isNaN(n)) M(n);
        }, []),
        J = s.useCallback(() => {
            if ((G(!1), null == z.current))
                z.current = setTimeout(() => {
                    j(!1), (z.current = void 0);
                }, 500);
        }, []),
        $ = s.useCallback(() => {
            if (!Z) J();
        }, [J, Z]),
        ee = s.useCallback(() => {
            let e = L.current;
            if (null == e) return;
            let n = e.error;
            null == D || D(n);
        }, [D]),
        et = s.useCallback(
            (e) => {
                let n = (0, g.A)(e, 1);
                U(0 === n), K(n), null == o || o(n);
            },
            [o]
        ),
        en = s.useCallback(() => {
            U(!k), null == _ || _(!k);
        }, [k, _]),
        er = s.useCallback(() => {
            F(!0);
        }, []),
        ei = s.useCallback(() => {
            F(!1), x === P && J();
        }, [x, P, J]),
        ea = s.useCallback(
            (e) => {
                let n = L.current;
                if (null == P || null == n) return;
                let r = e * P;
                w(r), (n.currentTime = r), j(!0), clearTimeout(z.current), (z.current = void 0);
            },
            [P]
        );
    s.useEffect(() => {
        !V && B && j(!0);
    }, [B, V]);
    let es = s.useRef(null),
        eo = {
            played: V,
            currentTime: x,
            onPause: O,
            onPlay: R
        },
        el = s.useRef(eo);
    s.useEffect(() => {
        el.current = eo;
    }),
        s.useEffect(() => {
            let { played: e, currentTime: n, onPause: r, onPlay: i } = el.current;
            if (e || B) {
                if (B) {
                    var a, s;
                    (es.current = performance.now()), null == i || i(!1, n, (null !== (s = null === (a = L.current) || void 0 === a ? void 0 : a.duration) && void 0 !== s ? s : 0) * m.Z.Millis.SECOND);
                } else {
                    let e = performance.now(),
                        i = es.current,
                        a = null != i ? (e - i) / 1000 : 0;
                    null == r || r(n, a), (es.current = null);
                }
            }
        }, [B]),
        S(L, B, w),
        A(r, B, G);
    let eu = B ? c.PauseIcon : c.PlayIcon,
        ec = B ? I.intl.string(I.t.ZcgDJS) : I.intl.string(I.t.RscU7O);
    'Safari' === platform.name
        ? (n = (0, a.jsx)(s.Suspense, {
              children: (0, a.jsx)(b, {
                  ref: L,
                  className: T.audioElement,
                  src: r,
                  preload: H,
                  playing: B && !Z,
                  onEnded: $,
                  onLoadedMetadata: X,
                  onError: ee,
                  muted: k,
                  volume: W
              })
          }))
        : (n = (0, a.jsx)(f.Z, {
              ref: L,
              className: T.audioElement,
              controls: !1,
              preload: H,
              onEnded: $,
              onLoadedMetadata: X,
              onError: ee,
              muted: k,
              volume: W,
              playing: B && !Z,
              children: (0, a.jsx)('source', { src: r })
          }));
    let ed = (0, u.e7)([d.Z], () => d.Z.useReducedMotion),
        { enabled: ef } = (0, c.useRedesignIconContext)();
    return (0, a.jsxs)('div', {
        className: l()(T.container, { [T.playing]: B }),
        onMouseEnter: Q,
        children: [
            (0, a.jsx)('div', {
                className: T.rippleContainer,
                children: (0, a.jsx)('div', { className: l()(T.ripple, { [T.reducedMotion]: ed }) })
            }),
            (0, a.jsx)(c.Clickable, {
                className: T.playButtonContainer,
                onClick: q,
                'aria-label': ec,
                children: (0, a.jsx)(eu, {
                    className: l()(T.playIcon, { [T.oldPlayIconSpacing]: !ef && !B }),
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 18
                })
            }),
            (0, a.jsx)(E.Z, {
                className: T.waveform,
                waveform: p,
                currentTime: x,
                duration: null != P ? P : 1,
                playing: B,
                played: V,
                onDrag: ea,
                onDragStart: er,
                onDragEnd: ei
            }),
            (0, a.jsx)(y, {
                played: V,
                currentTime: x,
                duration: P
            }),
            (0, a.jsx)(h.Z, {
                className: T.volumeButton,
                iconClassName: T.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: T.volumeSlider,
                muted: k,
                value: (0, g.P)(W, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: et,
                onToggleMute: en,
                onVolumeShow: N,
                onVolumeHide: C
            }),
            n
        ]
    });
});
