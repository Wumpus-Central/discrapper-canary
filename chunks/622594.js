n.d(t, { Z: () => h }), n(388685);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(259580),
    o = n(70956),
    u = n(586826),
    c = n(174727),
    d = n(882126),
    f = n(943351),
    m = n(862370);
let h = a.memo(function (e) {
    let { playing: t, onPausePlayback: n, onPlaybackChange: i, onChangePosition: h, disabled: g = !1 } = e,
        p = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({}, f.nl),
        { audio: y } = (0, u.p)(),
        b = null != y,
        v = a.useRef(null),
        x = a.useRef(null),
        j = a.useRef(null),
        [w, N] = a.useState(0),
        [C, S] = a.useState(0),
        [O, P] = a.useState(0),
        [E, k] = a.useState(!1),
        [Z, M] = a.useState(!1),
        [I, T] = a.useState(!1),
        [_, D] = a.useState(0),
        [R, F] = a.useState(-1),
        z = a.useMemo(() => _ / p.fineTuningScale, [p.fineTuningScale, _]);
    a.useEffect(() => {
        if (null == y) return;
        let e = y.duration * o.Z.Millis.SECOND;
        N(0), S(0), P(e), D(e);
    }, [y]);
    let A = a.useCallback(
            (e, t) => {
                if ((n(), 0 === e.button))
                    switch (t) {
                        case 0:
                            k(!0);
                            break;
                        case 1:
                            M(!0);
                            break;
                        case 2:
                            T(!0);
                    }
            },
            [n]
        ),
        B = a.useCallback((e) => {
            switch (e) {
                case 0:
                    k(!1);
                    break;
                case 1:
                    M(!1);
                    break;
                case 2:
                    T(!1);
            }
            F(-1);
        }, []),
        L = a.useCallback(
            (e) => {
                if (null == y || !E) return;
                let t = parseInt(e.target.value),
                    n = t > O ? O : t;
                i((0, c.my)(n)), N(n), S(n);
            },
            [y, i, O, E]
        ),
        U = a.useCallback(
            (e) => {
                if (null == y || !Z) return;
                let t = parseInt(e.target.value);
                t < w ? (i((0, c.my)(w)), S(w)) : t > O ? (i((0, c.my)(O)), S(O)) : (i((0, c.my)(t)), S(t));
            },
            [y, i, O, Z, w]
        ),
        G = a.useCallback(
            (e) => {
                if (null == y || !I) return;
                let t = parseInt(e.target.value),
                    n = t > w ? t : w;
                i((0, c.my)(w)), S(w), P(n);
            },
            [y, i, I, w]
        );
    return (
        a.useEffect(() => {
            null != h &&
                b &&
                h({
                    startPositionMs: w,
                    endPositionMs: O,
                    playheadPositionMs: C
                });
        }, [w, O, h, b, C]),
        a.useEffect(() => {
            let e;
            if (null != y)
                return (
                    t &&
                        (e = setInterval(() => {
                            y.currentTime < (0, c.my)(O) ? y.currentTime >= (0, c.my)(C) && S(y.currentTime * o.Z.Millis.SECOND) : (n((0, c.my)(w)), S(w));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [y, O, n, C, t, w]),
        a.useEffect(() => {
            if (p.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                E && w == w && -1 === R ? F(w) : I && O == O && -1 === R ? F(O) : Z && C == C && -1 === R && F(C);
            }, p.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [p.fineTuningDelay, I, O, R, Z, C, E, w]),
        (0, l.jsxs)('div', {
            className: r()(m.timeline, { [m.initialized]: b }),
            children: [
                (0, l.jsxs)('div', {
                    className: m.rangeHandleContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: m.rangeHandleFrame,
                            children: [
                                (0, l.jsx)('input', {
                                    ref: v,
                                    className: r()(m.rangeHandle, m.rangeHandleStart),
                                    type: 'range',
                                    min: (0, c.ao)(R, z, _),
                                    max: (0, c.MN)(R, z, _),
                                    value: w,
                                    onChange: L,
                                    onMouseDown: (e) => A(e, 0),
                                    onMouseUp: () => B(0),
                                    disabled: !b || g
                                }),
                                (0, l.jsx)('input', {
                                    ref: j,
                                    className: r()(m.rangeHandle, m.rangeHandleEnd),
                                    type: 'range',
                                    min: (0, c.ao)(R, z, _),
                                    max: (0, c.MN)(R, z, _),
                                    value: O,
                                    onChange: G,
                                    onMouseDown: (e) => A(e, 2),
                                    onMouseUp: () => B(2),
                                    disabled: !b || g
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, l.jsx)('input', {
                                ref: x,
                                className: r()(m.rangeHandle, m.rangeHandlePlayhead),
                                type: 'range',
                                min: (0, c.ao)(R, z, _),
                                max: (0, c.MN)(R, z, _),
                                value: C,
                                onChange: U,
                                onMouseDown: (e) => A(e, 1),
                                onMouseUp: () => B(1),
                                disabled: !b || g
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: m.handleContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: r()(m.handleFrame, {
                                [m.startDragging]: E,
                                [m.endDragging]: I
                            }),
                            style: {
                                left: ''.concat((0, c.pN)(w, R, z, _), '%'),
                                right: ''.concat((0, c.kD)(O, R, z, _), '%')
                            },
                            children: [
                                (0, l.jsx)('div', {
                                    className: r()(m.handleIconFrame, m.handleIconFrameStart),
                                    children: (0, l.jsx)('div', {
                                        className: r()(m.handleIconContainer, m.__invalid_start),
                                        children: (0, l.jsx)(s.Z, {
                                            direction: s.Z.Directions.RIGHT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: r()(m.handleIconFrame, m.handleIconFrameEnd),
                                    children: (0, l.jsx)('div', {
                                        className: r()(m.handleIconContainer, m.__invalid_end),
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
                                className: r()(m.playhead, { [m.dragging]: Z || E || I || t }),
                                style: { left: ''.concat((0, c.pN)(C, R, z, _), '%') }
                            })
                        })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: m.waveformContainer,
                    children: (0, l.jsx)(d.Z, {
                        fineTuning: R,
                        fineTuningResolution: z,
                        duration: _
                    })
                })
            ]
        })
    );
});
