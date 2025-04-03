t.d(n, { Z: () => h }), t(47120);
var l = t(200651),
    a = t(192379),
    r = t(120356),
    i = t.n(r),
    s = t(259580),
    o = t(70956),
    u = t(586826),
    c = t(174727),
    d = t(882126),
    f = t(943351),
    m = t(862370);
let h = a.memo(function (e) {
    let { playing: n, onPausePlayback: t, onPlaybackChange: r, onChangePosition: h, disabled: g = !1 } = e,
        p = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })({}, f.nl),
        { audio: b } = (0, u.p)(),
        y = null != b,
        v = a.useRef(null),
        x = a.useRef(null),
        j = a.useRef(null),
        [N, w] = a.useState(0),
        [C, S] = a.useState(0),
        [O, P] = a.useState(0),
        [k, Z] = a.useState(!1),
        [M, E] = a.useState(!1),
        [I, _] = a.useState(!1),
        [R, T] = a.useState(0),
        [D, W] = a.useState(-1),
        F = a.useMemo(() => R / p.fineTuningScale, [p.fineTuningScale, R]);
    a.useEffect(() => {
        if (null == b) return;
        let e = b.duration * o.Z.Millis.SECOND;
        w(0), S(0), P(e), T(e);
    }, [b]);
    let z = a.useCallback(
            (e, n) => {
                if ((t(), 0 === e.button))
                    switch (n) {
                        case 0:
                            Z(!0);
                            break;
                        case 1:
                            E(!0);
                            break;
                        case 2:
                            _(!0);
                    }
            },
            [t]
        ),
        A = a.useCallback((e) => {
            switch (e) {
                case 0:
                    Z(!1);
                    break;
                case 1:
                    E(!1);
                    break;
                case 2:
                    _(!1);
            }
            W(-1);
        }, []),
        L = a.useCallback(
            (e) => {
                if (null == b || !k) return;
                let n = parseInt(e.target.value),
                    t = n > O ? O : n;
                r((0, c.my)(t)), w(t), S(t);
            },
            [b, r, O, k]
        ),
        B = a.useCallback(
            (e) => {
                if (null == b || !M) return;
                let n = parseInt(e.target.value);
                n < N ? (r((0, c.my)(N)), S(N)) : n > O ? (r((0, c.my)(O)), S(O)) : (r((0, c.my)(n)), S(n));
            },
            [b, r, O, M, N]
        ),
        U = a.useCallback(
            (e) => {
                if (null == b || !I) return;
                let n = parseInt(e.target.value),
                    t = n > N ? n : N;
                r((0, c.my)(N)), S(N), P(t);
            },
            [b, r, I, N]
        );
    return (
        a.useEffect(() => {
            null != h &&
                y &&
                h({
                    startPositionMs: N,
                    endPositionMs: O,
                    playheadPositionMs: C
                });
        }, [N, O, h, y, C]),
        a.useEffect(() => {
            let e;
            if (null != b)
                return (
                    n &&
                        (e = setInterval(() => {
                            b.currentTime < (0, c.my)(O) ? b.currentTime >= (0, c.my)(C) && S(b.currentTime * o.Z.Millis.SECOND) : (t((0, c.my)(N)), S(N));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [b, O, t, C, n, N]),
        a.useEffect(() => {
            if (p.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                k && N == N && -1 === D ? W(N) : I && O == O && -1 === D ? W(O) : M && C == C && -1 === D && W(C);
            }, p.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [p.fineTuningDelay, I, O, D, M, C, k, N]),
        (0, l.jsxs)('div', {
            className: i()(m.timeline, { [m.initialized]: y }),
            children: [
                (0, l.jsxs)('div', {
                    className: m.rangeHandleContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: m.rangeHandleFrame,
                            children: [
                                (0, l.jsx)('input', {
                                    ref: v,
                                    className: i()(m.rangeHandle, m.rangeHandleStart),
                                    type: 'range',
                                    min: (0, c.ao)(D, F, R),
                                    max: (0, c.MN)(D, F, R),
                                    value: N,
                                    onChange: L,
                                    onMouseDown: (e) => z(e, 0),
                                    onMouseUp: () => A(0),
                                    disabled: !y || g
                                }),
                                (0, l.jsx)('input', {
                                    ref: j,
                                    className: i()(m.rangeHandle, m.rangeHandleEnd),
                                    type: 'range',
                                    min: (0, c.ao)(D, F, R),
                                    max: (0, c.MN)(D, F, R),
                                    value: O,
                                    onChange: U,
                                    onMouseDown: (e) => z(e, 2),
                                    onMouseUp: () => A(2),
                                    disabled: !y || g
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, l.jsx)('input', {
                                ref: x,
                                className: i()(m.rangeHandle, m.rangeHandlePlayhead),
                                type: 'range',
                                min: (0, c.ao)(D, F, R),
                                max: (0, c.MN)(D, F, R),
                                value: C,
                                onChange: B,
                                onMouseDown: (e) => z(e, 1),
                                onMouseUp: () => A(1),
                                disabled: !y || g
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: m.handleContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: i()(m.handleFrame, {
                                [m.startDragging]: k,
                                [m.endDragging]: I
                            }),
                            style: {
                                left: ''.concat((0, c.pN)(N, D, F, R), '%'),
                                right: ''.concat((0, c.kD)(O, D, F, R), '%')
                            },
                            children: [
                                (0, l.jsx)('div', {
                                    className: i()(m.handleIconFrame, m.handleIconFrameStart),
                                    children: (0, l.jsx)('div', {
                                        className: i()(m.handleIconContainer, m.__invalid_start),
                                        children: (0, l.jsx)(s.Z, {
                                            direction: s.Z.Directions.RIGHT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: i()(m.handleIconFrame, m.handleIconFrameEnd),
                                    children: (0, l.jsx)('div', {
                                        className: i()(m.handleIconContainer, m.__invalid_end),
                                        children: (0, l.jsx)(s.Z, {
                                            direction: s.Z.Directions.LEFT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: m.playheadTrack,
                            children: (0, l.jsx)('div', {
                                className: i()(m.playhead, { [m.dragging]: M || k || I || n }),
                                style: { left: ''.concat((0, c.pN)(C, D, F, R), '%') }
                            })
                        })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: m.waveformContainer,
                    children: (0, l.jsx)(d.Z, {
                        fineTuning: D,
                        fineTuningResolution: F,
                        duration: R
                    })
                })
            ]
        })
    );
});
