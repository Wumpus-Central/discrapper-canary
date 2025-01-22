var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(607070),
    f = r(62170),
    p = r(640108),
    h = r(793148),
    _ = r(585483),
    m = r(70956),
    g = r(36703),
    E = r(347312),
    v = r(981631),
    y = r(388032),
    b = r(438922);
let I = o.lazy(() => Promise.all([r.e('26460'), r.e('89792')]).then(r.bind(r, 711635)));
function T(e) {
    let { played: n, duration: r, currentTime: i } = e,
        o = null == r ? '--:--' : n ? (0, p.yv)(Math.ceil(r - i)) : (0, p.yv)(Math.ceil(r));
    return (0, a.jsx)(c.Text, {
        variant: 'text-sm/normal',
        className: b.duration,
        tabularNumbers: !0,
        children: o
    });
}
function S(e, n, r) {
    o.useEffect(() => {
        let i;
        function a() {
            let o = e.current;
            if (null == o) return;
            if ((r(o.currentTime), !!n)) i = requestAnimationFrame(a);
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
    o.useEffect(() => {
        if (!!n)
            return (
                _.S.dispatch(v.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                _.S.subscribe(v.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, i),
                () => {
                    _.S.unsubscribe(v.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, i);
                }
            );
        function i(n) {
            let { src: i } = n;
            if (e !== i) r(!1);
        }
    }, [e, n, r]);
}
n.Z = o.memo(function (e) {
    let n,
        { src: r, volume: i = 1, onVolumeChange: s, onMute: p, waveform: _, durationSecs: v, onVolumeShow: C, onVolumeHide: N, onPlay: R, onPause: O, onError: D } = e,
        L = o.useRef(null),
        [x, w] = o.useState(0),
        [P, M] = o.useState(v),
        [k, U] = o.useState(!1),
        [B, G] = o.useState(!1),
        [Z, F] = o.useState(!1),
        [V, j] = o.useState(!1),
        [H, Y] = o.useState('none'),
        [W, K] = o.useState(() => ('function' == typeof i ? i() : i)),
        z = o.useRef(void 0),
        q = o.useCallback(() => {
            G((e) => !e);
        }, []),
        Q = o.useCallback(() => {
            Y('metadata');
        }, []),
        X = o.useCallback((e) => {
            let n = e.currentTarget.duration;
            if (!isNaN(n)) M(n);
        }, []),
        J = o.useCallback(() => {
            if ((G(!1), null == z.current))
                z.current = setTimeout(() => {
                    j(!1), (z.current = void 0);
                }, 500);
        }, []),
        $ = o.useCallback(() => {
            if (!Z) J();
        }, [J, Z]),
        ee = o.useCallback(() => {
            let e = L.current;
            if (null == e) return;
            let n = e.error;
            null == D || D(n);
        }, [D]),
        et = o.useCallback(
            (e) => {
                let n = (0, g.A)(e, 1);
                U(0 === n), K(n), null == s || s(n);
            },
            [s]
        ),
        en = o.useCallback(() => {
            U(!k), null == p || p(!k);
        }, [k, p]),
        er = o.useCallback(() => {
            F(!0);
        }, []),
        ei = o.useCallback(() => {
            F(!1), x === P && J();
        }, [x, P, J]),
        ea = o.useCallback(
            (e) => {
                let n = L.current;
                if (null == P || null == n) return;
                let r = e * P;
                w(r), (n.currentTime = r), j(!0), clearTimeout(z.current), (z.current = void 0);
            },
            [P]
        );
    o.useEffect(() => {
        !V && B && j(!0);
    }, [B, V]);
    let eo = o.useRef(null),
        es = {
            played: V,
            currentTime: x,
            onPause: O,
            onPlay: R
        },
        el = o.useRef(es);
    o.useEffect(() => {
        el.current = es;
    }),
        o.useEffect(() => {
            let { played: e, currentTime: n, onPause: r, onPlay: i } = el.current;
            if (e || B) {
                if (B) {
                    var a, o;
                    (eo.current = performance.now()), null == i || i(!1, n, (null !== (o = null === (a = L.current) || void 0 === a ? void 0 : a.duration) && void 0 !== o ? o : 0) * m.Z.Millis.SECOND);
                } else {
                    let e = performance.now(),
                        i = eo.current,
                        a = null != i ? (e - i) / 1000 : 0;
                    null == r || r(n, a), (eo.current = null);
                }
            }
        }, [B]),
        S(L, B, w),
        A(r, B, G);
    let eu = B ? c.PauseIcon : c.PlayIcon,
        ec = B ? y.intl.string(y.t.ZcgDJS) : y.intl.string(y.t.RscU7O);
    'Safari' === platform.name
        ? (n = (0, a.jsx)(o.Suspense, {
              children: (0, a.jsx)(I, {
                  ref: L,
                  className: b.audioElement,
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
              className: b.audioElement,
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
        className: l()(b.container, { [b.playing]: B }),
        onMouseEnter: Q,
        children: [
            (0, a.jsx)('div', {
                className: b.rippleContainer,
                children: (0, a.jsx)('div', { className: l()(b.ripple, { [b.reducedMotion]: ed }) })
            }),
            (0, a.jsx)(c.Clickable, {
                className: b.playButtonContainer,
                onClick: q,
                'aria-label': ec,
                children: (0, a.jsx)(eu, {
                    className: l()(b.playIcon, { [b.oldPlayIconSpacing]: !ef && !B }),
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 18
                })
            }),
            (0, a.jsx)(E.Z, {
                className: b.waveform,
                waveform: _,
                currentTime: x,
                duration: null != P ? P : 1,
                playing: B,
                played: V,
                onDrag: ea,
                onDragStart: er,
                onDragEnd: ei
            }),
            (0, a.jsx)(T, {
                played: V,
                currentTime: x,
                duration: P
            }),
            (0, a.jsx)(h.Z, {
                className: b.volumeButton,
                iconClassName: b.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: b.volumeSlider,
                muted: k,
                value: (0, g.P)(W, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: et,
                onToggleMute: en,
                onVolumeShow: C,
                onVolumeHide: N
            }),
            n
        ]
    });
});
