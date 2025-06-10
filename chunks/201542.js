n.d(t, { Z: () => C }), n(388685), n(704826), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    E = n(347312),
    b = n(94432),
    y = n(981631),
    O = n(388032),
    v = n(182525);
let I = i.lazy(() => n.e('89792').then(n.bind(n, 711635)));
function T(e) {
    let t = (b.TC.indexOf(e) + 1) % b.TC.length,
        n = b.TC[t];
    (0, u.C)(n, d.Ir.VOICE_MESSAGE);
}
function S(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? '--:--' : t ? (0, _.yv)(Math.ceil(n - i)) : (0, _.yv)(Math.ceil(n));
    return (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        className: v.duration,
        tabularNumbers: !0,
        children: a
    });
}
function A(e, t, n) {
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
function N(e, t, n) {
    i.useEffect(() => {
        if (t)
            return (
                h.S.dispatch(y.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                h.S.subscribe(y.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    h.S.unsubscribe(y.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );
        function r(t) {
            let { src: r } = t;
            e !== r && n(!1);
        }
    }, [e, t, n]);
}
let C = i.memo(function (e) {
    let t,
        { src: n, volume: a = 1, onVolumeChange: _, onMute: h, waveform: b, durationSecs: y, onVolumeShow: C, onVolumeHide: R, onPlay: P, onPause: w, onError: D, playbackCacheKey: L } = e,
        x = i.useRef(null),
        M = i.useMemo(() => (null != L ? d.ZP.getPlaybackPosition(L) : 0), [L]),
        k = (0, s.e7)([d.ZP], () => d.ZP.getPlaybackRate(d.Ir.VOICE_MESSAGE)),
        [j, U] = i.useState(M > 0),
        [G, B] = i.useState(M),
        [F, V] = i.useState(y),
        [Z, H] = i.useState(!1),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState(!1),
        [q, X] = i.useState(!1),
        [Q, J] = i.useState('none'),
        [$, ee] = i.useState(() => ('function' == typeof a ? a() : a)),
        et = i.useRef(void 0),
        en = i.useCallback(() => {
            W((e) => !e), X(!0);
        }, []),
        er = i.useCallback(() => {
            J('metadata');
        }, []),
        ei = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || V(t);
        }, []),
        ea = i.useCallback(
            (e) => {
                null != y && null != L && (0, u.U)(L, e, y);
            },
            [L, y]
        ),
        eo = i.useCallback(() => {
            W(!1),
                null == et.current &&
                    (et.current = setTimeout(() => {
                        U(!1), X(!1), (et.current = void 0);
                    }, 500));
        }, []),
        es = i.useCallback(() => {
            K || (ea(0), eo());
        }, [eo, K, ea]),
        el = i.useCallback((e) => {
            let t = x.current;
            null != t && (B(e), (t.currentTime = e), U(!0));
        }, []),
        ec = i.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.error;
            null == D || D(t);
        }, [D]),
        eu = i.useCallback(
            (e) => {
                let t = (0, g.A)(e, 1);
                H(0 === t), ee(t), null == _ || _(t);
            },
            [_]
        ),
        ed = i.useCallback(() => {
            H(!Z), null == h || h(!Z);
        }, [Z, h]),
        ef = i.useCallback(() => {
            z(!0);
        }, []),
        e_ = i.useCallback(() => {
            z(!1), G === F && eo(), ea(G);
        }, [G, F, eo, ea]),
        ep = i.useCallback(
            (e) => {
                let t = x.current;
                null != F && null != t && (el(e * F), clearTimeout(et.current), (et.current = void 0));
            },
            [F, el]
        );
    i.useEffect(() => {
        !j && Y && U(!0);
    }, [Y, j]);
    let eh = i.useRef(null),
        em = {
            played: q,
            currentTime: G,
            onPause: w,
            onPlay: P
        },
        eg = i.useRef(em);
    i.useEffect(() => {
        eg.current = em;
    }),
        i.useEffect(() => {
            M > 0 && el(M);
        }, [M, el]),
        i.useEffect(() => {
            let e;
            return (
                Y &&
                    !K &&
                    (e = setInterval(() => {
                        var e, t;
                        ea(null != (t = null == (e = x.current) ? void 0 : e.currentTime) ? t : 0);
                    }, m.Z.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [Y, K, ea]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eg.current;
            if (e || Y)
                if (Y) {
                    var i, a;
                    (eh.current = performance.now()), null == r || r(!1, t, (null != (a = null == (i = x.current) ? void 0 : i.duration) ? a : 0) * m.Z.Millis.SECOND);
                } else {
                    let e = performance.now(),
                        r = eh.current,
                        i = null != r ? (e - r) / 1000 : 0;
                    null == n || n(t, i), ea(t), (eh.current = null);
                }
        }, [Y, n, F, ea]),
        A(x, Y, B),
        N(n, Y, W);
    let eE = Y ? l.fpf : l.o1U,
        eb = Y ? O.intl.string(O.t.ZcgDJS) : O.intl.string(O.t.RscU7O),
        ey = O.intl.formatToPlainString(O.t.LgCPMj, { playbackRate: k }),
        eO = ''.concat(k.toString().replace(/^0/, ''), 'X');
    t =
        'Safari' === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(I, {
                      ref: x,
                      className: v.audioElement,
                      src: n,
                      preload: Q,
                      playing: Y && !K,
                      onEnded: es,
                      onLoadedMetadata: ei,
                      onError: ec,
                      muted: Z,
                      volume: $,
                      playbackRate: k
                  })
              })
            : (0, r.jsx)(f.Z, {
                  ref: x,
                  className: v.audioElement,
                  controls: !1,
                  preload: Q,
                  onEnded: es,
                  onLoadedMetadata: ei,
                  onError: ec,
                  muted: Z,
                  volume: $,
                  playbackRate: k,
                  playing: Y && !K,
                  children: (0, r.jsx)('source', { src: n })
              });
    let ev = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: o()(v.container, { [v.playing]: Y }),
        onMouseEnter: er,
        children: [
            (0, r.jsx)('div', {
                className: v.rippleContainer,
                children: (0, r.jsx)('div', { className: o()(v.ripple, { [v.reducedMotion]: ev }) })
            }),
            (0, r.jsx)(l.P3F, {
                className: v.playButtonContainer,
                onClick: en,
                'aria-label': eb,
                children: (0, r.jsx)(eE, {
                    className: v.playIcon,
                    color: 'currentColor',
                    size: 'sm'
                })
            }),
            (0, r.jsx)(E.Z, {
                className: v.waveform,
                waveform: b,
                currentTime: G,
                duration: null != F ? F : 1,
                playing: Y,
                played: j,
                onDrag: ep,
                onDragStart: ef,
                onDragEnd: e_
            }),
            (0, r.jsx)(S, {
                played: j,
                currentTime: G,
                duration: F
            }),
            (0, r.jsx)(l.P3F, {
                className: v.playbackRateContainer,
                onClick: () => T(k),
                'aria-label': ey,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    className: v.playbackRate,
                    children: eO
                })
            }),
            (0, r.jsx)(p.Z, {
                className: v.volumeButton,
                iconClassName: v.volumeButtonIcon,
                iconColor: 'currentColor',
                sliderWrapperClassName: v.volumeSlider,
                muted: Z,
                value: (0, g.P)($, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: eu,
                onToggleMute: ed,
                onVolumeShow: C,
                onVolumeHide: R
            }),
            t
        ]
    });
});
