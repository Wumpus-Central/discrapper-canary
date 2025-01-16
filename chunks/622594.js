t(47120);
var l,
    a,
    i = t(200651),
    r = t(192379),
    s = t(120356),
    o = t.n(s),
    u = t(259580),
    c = t(70956),
    d = t(586826),
    f = t(174727),
    m = t(882126),
    h = t(943351),
    g = t(22962);
((a = l || (l = {}))[(a.START = 0)] = 'START'),
    (a[(a.PLAYHEAD = 1)] = 'PLAYHEAD'),
    (a[(a.END = 2)] = 'END'),
    (n.Z = r.memo(function (e) {
        let { playing: n, onPausePlayback: t, onPlaybackChange: l, onChangePosition: a, disabled: s = !1 } = e,
            p = { ...h.nl },
            { audio: v } = (0, d.p)(),
            x = null != v,
            N = r.useRef(null),
            y = r.useRef(null),
            b = r.useRef(null),
            [j, C] = r.useState(0),
            [w, S] = r.useState(0),
            [I, E] = r.useState(0),
            [M, Z] = r.useState(!1),
            [T, _] = r.useState(!1),
            [k, P] = r.useState(!1),
            [R, F] = r.useState(0),
            [O, D] = r.useState(-1),
            A = r.useMemo(() => R / p.fineTuningScale, [p.fineTuningScale, R]);
        r.useEffect(() => {
            if (null == v) return;
            let e = v.duration * c.Z.Millis.SECOND;
            C(0), S(0), E(e), F(e);
        }, [v]);
        let B = r.useCallback(
                (e, n) => {
                    if ((t(), 0 === e.button))
                        switch (n) {
                            case 0:
                                Z(!0);
                                break;
                            case 1:
                                _(!0);
                                break;
                            case 2:
                                P(!0);
                        }
                },
                [t]
            ),
            L = r.useCallback((e) => {
                switch (e) {
                    case 0:
                        Z(!1);
                        break;
                    case 1:
                        _(!1);
                        break;
                    case 2:
                        P(!1);
                }
                D(-1);
            }, []),
            U = r.useCallback(
                (e) => {
                    if (null == v || !M) return;
                    let n = parseInt(e.target.value),
                        t = n > I ? I : n;
                    l((0, f.my)(t)), C(t), S(t);
                },
                [v, l, I, M]
            ),
            G = r.useCallback(
                (e) => {
                    if (null == v || !T) return;
                    let n = parseInt(e.target.value);
                    n < j ? (l((0, f.my)(j)), S(j)) : n > I ? (l((0, f.my)(I)), S(I)) : (l((0, f.my)(n)), S(n));
                },
                [v, l, I, T, j]
            ),
            z = r.useCallback(
                (e) => {
                    if (null == v || !k) return;
                    let n = parseInt(e.target.value),
                        t = n > j ? n : j;
                    l((0, f.my)(j)), S(j), E(t);
                },
                [v, l, k, j]
            );
        return (
            r.useEffect(() => {
                null != a &&
                    x &&
                    a({
                        startPositionMs: j,
                        endPositionMs: I,
                        playheadPositionMs: w
                    });
            }, [j, I, a, x, w]),
            r.useEffect(() => {
                let e;
                if (null != v)
                    return (
                        n &&
                            (e = setInterval(() => {
                                v.currentTime < (0, f.my)(I) ? v.currentTime >= (0, f.my)(w) && S(v.currentTime * c.Z.Millis.SECOND) : (t((0, f.my)(j)), S(j));
                            }, 16)),
                        () => {
                            clearInterval(e);
                        }
                    );
            }, [v, I, t, w, n, j]),
            r.useEffect(() => {
                if (p.fineTuningDelay <= 0) return;
                let e = setTimeout(() => {
                    M && j == j && -1 === O ? D(j) : k && I == I && -1 === O ? D(I) : T && w == w && -1 === O && D(w);
                }, p.fineTuningDelay);
                return () => {
                    clearTimeout(e);
                };
            }, [p.fineTuningDelay, k, I, O, T, w, M, j]),
            (0, i.jsxs)('div', {
                className: o()(g.timeline, { [g.initialized]: x }),
                children: [
                    (0, i.jsxs)('div', {
                        className: g.rangeHandleContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.rangeHandleFrame,
                                children: [
                                    (0, i.jsx)('input', {
                                        ref: N,
                                        className: o()(g.rangeHandle, g.rangeHandleStart),
                                        type: 'range',
                                        min: (0, f.ao)(O, A, R),
                                        max: (0, f.MN)(O, A, R),
                                        value: j,
                                        onChange: U,
                                        onMouseDown: (e) => B(e, 0),
                                        onMouseUp: () => L(0),
                                        disabled: !x || s
                                    }),
                                    (0, i.jsx)('input', {
                                        ref: b,
                                        className: o()(g.rangeHandle, g.rangeHandleEnd),
                                        type: 'range',
                                        min: (0, f.ao)(O, A, R),
                                        max: (0, f.MN)(O, A, R),
                                        value: I,
                                        onChange: z,
                                        onMouseDown: (e) => B(e, 2),
                                        onMouseUp: () => L(2),
                                        disabled: !x || s
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: g.__invalid_handlePlayheadTrack,
                                children: (0, i.jsx)('input', {
                                    ref: y,
                                    className: o()(g.rangeHandle, g.rangeHandlePlayhead),
                                    type: 'range',
                                    min: (0, f.ao)(O, A, R),
                                    max: (0, f.MN)(O, A, R),
                                    value: w,
                                    onChange: G,
                                    onMouseDown: (e) => B(e, 1),
                                    onMouseUp: () => L(1),
                                    disabled: !x || s
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.handleContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: o()(g.handleFrame, {
                                    [g.startDragging]: M,
                                    [g.endDragging]: k
                                }),
                                style: {
                                    left: ''.concat((0, f.pN)(j, O, A, R), '%'),
                                    right: ''.concat((0, f.kD)(I, O, A, R), '%')
                                },
                                children: [
                                    (0, i.jsx)('div', {
                                        className: o()(g.handleIconFrame, g.handleIconFrameStart),
                                        children: (0, i.jsx)('div', {
                                            className: o()(g.handleIconContainer, g.__invalid_start),
                                            children: (0, i.jsx)(u.Z, {
                                                direction: u.Z.Directions.RIGHT,
                                                className: g.handleIcon,
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: o()(g.handleIconFrame, g.handleIconFrameEnd),
                                        children: (0, i.jsx)('div', {
                                            className: o()(g.handleIconContainer, g.__invalid_end),
                                            children: (0, i.jsx)(u.Z, {
                                                direction: u.Z.Directions.LEFT,
                                                className: g.handleIcon,
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: g.playheadTrack,
                                children: (0, i.jsx)('div', {
                                    className: o()(g.playhead, { [g.dragging]: T || M || k || n }),
                                    style: { left: ''.concat((0, f.pN)(w, O, A, R), '%') }
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: g.waveformContainer,
                        children: (0, i.jsx)(m.Z, {
                            fineTuning: O,
                            fineTuningResolution: A,
                            duration: R
                        })
                    })
                ]
            })
        );
    }));
