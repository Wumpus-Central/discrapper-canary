n.d(t, { Z: () => R }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(621593),
    d = n(177751),
    f = n(62170),
    _ = n(640108),
    p = n(793148),
    h = n(585483),
    m = n(70956),
    g = n(36703),
    E = n(953221),
    b = n(347312),
    y = n(94432),
    O = n(981631),
    v = n(388032),
    I = n(182525);
let S = i.lazy(() => n.e('89792').then(n.bind(n, 711635)));
function T(e) {
    let t = (y.TC.indexOf(e) + 1) % y.TC.length,
        n = y.TC[t];
    (0, u.C)(n, d.Ir.VOICE_MESSAGE);
}
function A(e) {
    let { played: t, duration: n, currentTime: i } = e,
        o = null == n ? '--:--' : t ? (0, _.yv)(Math.ceil(n - i)) : (0, _.yv)(Math.ceil(n));
    return (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        className: I.duration,
        tabularNumbers: !0,
        children: o
    });
}
function N(e, t, n) {
    i.useEffect(() => {
        let r;
        function i() {
            let o = e.current;
            null != o && (n(o.currentTime), t && (r = requestAnimationFrame(i)));
        }
        return (
            i(),
            () => {
                null != r && cancelAnimationFrame(r);
            }
        );
    }, [e, t, n]);
}
function C(e, t, n) {
    i.useEffect(() => {
        if (t)
            return (
                h.S.dispatch(O.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                h.S.subscribe(O.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    h.S.unsubscribe(O.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );
        function r(t) {
            let { src: r } = t;
            e !== r && n(!1);
        }
    }, [e, t, n]);
}
let R = i.memo(function (e) {
    let t,
        { src: n, volume: o = 1, onVolumeChange: _, onMute: h, waveform: y, durationSecs: O, onVolumeShow: R, onVolumeHide: P, onPlay: w, onPause: D, onError: L, playbackCacheKey: x } = e,
        { playbackSettingsEnabled: M } = (0, E.t)('VoiceMessagePlayer'),
        k = i.useRef(null),
        j = i.useMemo(() => (null != x && M ? d.ZP.getPlaybackPosition(x) : 0), [x, M]),
        U = (0, s.e7)([d.ZP], () => (M ? d.ZP.getPlaybackRate(d.Ir.VOICE_MESSAGE) : 1)),
        [G, B] = i.useState(j > 0),
        [V, F] = i.useState(j),
        [Z, H] = i.useState(O),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState(!1),
        [q, Q] = i.useState(!1),
        [X, J] = i.useState(!1),
        [$, ee] = i.useState('none'),
        [et, en] = i.useState(() => ('function' == typeof o ? o() : o)),
        er = i.useRef(void 0),
        ei = i.useCallback(() => {
            z((e) => !e), J(!0);
        }, []),
        eo = i.useCallback(() => {
            ee('metadata');
        }, []),
        ea = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || H(t);
        }, []),
        es = i.useCallback(
            (e) => {
                null != O && null != x && M && (0, u.U)(x, e, O);
            },
            [x, O, M]
        ),
        el = i.useCallback(() => {
            z(!1),
                null == er.current &&
                    (er.current = setTimeout(() => {
                        B(!1), J(!1), (er.current = void 0);
                    }, 500));
        }, []),
        ec = i.useCallback(() => {
            q || (es(0), el());
        }, [el, q, es]),
        eu = i.useCallback((e) => {
            let t = k.current;
            null != t && (F(e), (t.currentTime = e), B(!0));
        }, []),
        ed = i.useCallback(() => {
            let e = k.current;
            if (null == e) return;
            let t = e.error;
            null == L || L(t);
        }, [L]),
        ef = i.useCallback(
            (e) => {
                let t = (0, g.A)(e, 1);
                W(0 === t), en(t), null == _ || _(t);
            },
            [_]
        ),
        e_ = i.useCallback(() => {
            W(!Y), null == h || h(!Y);
        }, [Y, h]),
        ep = i.useCallback(() => {
            Q(!0);
        }, []),
        eh = i.useCallback(() => {
            Q(!1), V === Z && el(), es(V);
        }, [V, Z, el, es]),
        em = i.useCallback(
            (e) => {
                let t = k.current;
                null != Z && null != t && (eu(e * Z), clearTimeout(er.current), (er.current = void 0));
            },
            [Z, eu]
        );
    i.useEffect(() => {
        !G && K && B(!0);
    }, [K, G]);
    let eg = i.useRef(null),
        eE = {
            played: X,
            currentTime: V,
            onPause: D,
            onPlay: w
        },
        eb = i.useRef(eE);
    i.useEffect(() => {
        eb.current = eE;
    }),
        i.useEffect(() => {
            j > 0 && eu(j);
        }, [j, eu]),
        i.useEffect(() => {
            let e;
            return (
                K &&
                    !q &&
                    (e = setInterval(() => {
                        var e, t;
                        es(null != (t = null == (e = k.current) ? void 0 : e.currentTime) ? t : 0);
                    }, m.Z.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [K, q, es]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eb.current;
            if (e || K)
                if (K) {
                    var i, o;
                    (eg.current = performance.now()), null == r || r(!1, t, (null != (o = null == (i = k.current) ? void 0 : i.duration) ? o : 0) * m.Z.Millis.SECOND);
                } else {
                    let e = performance.now(),
                        r = eg.current,
                        i = null != r ? (e - r) / 1000 : 0;
                    null == n || n(t, i), es(t), (eg.current = null);
                }
        }, [K, n, Z, es]),
        N(k, K, F),
        C(n, K, z);
    let ey = K ? l.fpf : l.o1U,
        eO = K ? v.intl.string(v.t.ZcgDJS) : v.intl.string(v.t.RscU7O),
        ev = v.intl.formatToPlainString(v.t.LgCPMj, { playbackRate: U });
    t =
        'Safari' === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(S, {
                      ref: k,
                      className: I.audioElement,
                      src: n,
                      preload: $,
                      playing: K && !q,
                      onEnded: ec,
                      onLoadedMetadata: ea,
                      onError: ed,
                      muted: Y,
                      volume: et,
                      playbackRate: U
                  })
              })
            : (0, r.jsx)(f.Z, {
                  ref: k,
                  className: I.audioElement,
                  controls: !1,
                  preload: $,
                  onEnded: ec,
                  onLoadedMetadata: ea,
                  onError: ed,
                  muted: Y,
                  volume: et,
                  playbackRate: U,
                  playing: K && !q,
                  children: (0, r.jsx)('source', { src: n })
              });
    let eI = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: a()(I.container, { [I.playing]: K }),
        onMouseEnter: eo,
        children: [
            (0, r.jsx)('div', {
                className: I.rippleContainer,
                children: (0, r.jsx)('div', { className: a()(I.ripple, { [I.reducedMotion]: eI }) })
            }),
            (0, r.jsx)(l.P3F, {
                className: I.playButtonContainer,
                onClick: ei,
                'aria-label': eO,
                children: (0, r.jsx)(ey, {
                    className: I.playIcon,
                    color: 'currentColor',
                    size: 'sm'
                })
            }),
            (0, r.jsx)(b.Z, {
                className: I.waveform,
                waveform: y,
                currentTime: V,
                duration: null != Z ? Z : 1,
                playing: K,
                played: G,
                onDrag: em,
                onDragStart: ep,
                onDragEnd: eh
            }),
            (0, r.jsx)(A, {
                played: G,
                currentTime: V,
                duration: Z
            }),
            M &&
                (0, r.jsx)(l.P3F, {
                    className: I.playbackRateContainer,
                    onClick: () => T(U),
                    'aria-label': ev,
                    children: (0, r.jsx)(l.Text, {
                        variant: 'text-xs/semibold',
                        className: I.playbackRate,
                        children: ''.concat(U, 'x')
                    })
                }),
            (0, r.jsx)(p.Z, {
                className: I.volumeButton,
                iconClassName: I.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: I.volumeSlider,
                muted: Y,
                value: (0, g.P)(et, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ef,
                onToggleMute: e_,
                onVolumeShow: R,
                onVolumeHide: P
            }),
            t
        ]
    });
});
