t.d(n, { Z: () => h }), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    r = t(259580),
    u = t(70956),
    o = t(586826),
    d = t(174727),
    c = t(882126),
    f = t(943351),
    m = t(246800);
let h = a.memo(function (e) {
    let { playing: n, onPausePlayback: t, onPlaybackChange: i, onChangePosition: h, disabled: g = !1 } = e,
        p = { ...f.nl },
        { audio: x } = (0, o.p)(),
        v = null != x,
        y = a.useRef(null),
        b = a.useRef(null),
        N = a.useRef(null),
        [j, w] = a.useState(0),
        [C, S] = a.useState(0),
        [Z, M] = a.useState(0),
        [k, E] = a.useState(!1),
        [I, P] = a.useState(!1),
        [_, R] = a.useState(!1),
        [T, F] = a.useState(0),
        [D, z] = a.useState(-1),
        O = a.useMemo(() => T / p.fineTuningScale, [p.fineTuningScale, T]);
    a.useEffect(() => {
        if (null == x) return;
        let e = x.duration * u.Z.Millis.SECOND;
        w(0), S(0), M(e), F(e);
    }, [x]);
    let A = a.useCallback(
            (e, n) => {
                if ((t(), 0 === e.button))
                    switch (n) {
                        case 0:
                            E(!0);
                            break;
                        case 1:
                            P(!0);
                            break;
                        case 2:
                            R(!0);
                    }
            },
            [t]
        ),
        L = a.useCallback((e) => {
            switch (e) {
                case 0:
                    E(!1);
                    break;
                case 1:
                    P(!1);
                    break;
                case 2:
                    R(!1);
            }
            z(-1);
        }, []),
        B = a.useCallback(
            (e) => {
                if (null == x || !k) return;
                let n = parseInt(e.target.value),
                    t = n > Z ? Z : n;
                i((0, d.my)(t)), w(t), S(t);
            },
            [x, i, Z, k]
        ),
        U = a.useCallback(
            (e) => {
                if (null == x || !I) return;
                let n = parseInt(e.target.value);
                n < j ? (i((0, d.my)(j)), S(j)) : n > Z ? (i((0, d.my)(Z)), S(Z)) : (i((0, d.my)(n)), S(n));
            },
            [x, i, Z, I, j]
        ),
        G = a.useCallback(
            (e) => {
                if (null == x || !_) return;
                let n = parseInt(e.target.value),
                    t = n > j ? n : j;
                i((0, d.my)(j)), S(j), M(t);
            },
            [x, i, _, j]
        );
    return (
        a.useEffect(() => {
            null != h &&
                v &&
                h({
                    startPositionMs: j,
                    endPositionMs: Z,
                    playheadPositionMs: C
                });
        }, [j, Z, h, v, C]),
        a.useEffect(() => {
            let e;
            if (null != x)
                return (
                    n &&
                        (e = setInterval(() => {
                            x.currentTime < (0, d.my)(Z) ? x.currentTime >= (0, d.my)(C) && S(x.currentTime * u.Z.Millis.SECOND) : (t((0, d.my)(j)), S(j));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [x, Z, t, C, n, j]),
        a.useEffect(() => {
            if (p.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                k && j == j && -1 === D ? z(j) : _ && Z == Z && -1 === D ? z(Z) : I && C == C && -1 === D && z(C);
            }, p.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [p.fineTuningDelay, _, Z, D, I, C, k, j]),
        (0, l.jsxs)('div', {
            className: s()(m.timeline, { [m.initialized]: v }),
            children: [
                (0, l.jsxs)('div', {
                    className: m.rangeHandleContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: m.rangeHandleFrame,
                            children: [
                                (0, l.jsx)('input', {
                                    ref: y,
                                    className: s()(m.rangeHandle, m.rangeHandleStart),
                                    type: 'range',
                                    min: (0, d.ao)(D, O, T),
                                    max: (0, d.MN)(D, O, T),
                                    value: j,
                                    onChange: B,
                                    onMouseDown: (e) => A(e, 0),
                                    onMouseUp: () => L(0),
                                    disabled: !v || g
                                }),
                                (0, l.jsx)('input', {
                                    ref: N,
                                    className: s()(m.rangeHandle, m.rangeHandleEnd),
                                    type: 'range',
                                    min: (0, d.ao)(D, O, T),
                                    max: (0, d.MN)(D, O, T),
                                    value: Z,
                                    onChange: G,
                                    onMouseDown: (e) => A(e, 2),
                                    onMouseUp: () => L(2),
                                    disabled: !v || g
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, l.jsx)('input', {
                                ref: b,
                                className: s()(m.rangeHandle, m.rangeHandlePlayhead),
                                type: 'range',
                                min: (0, d.ao)(D, O, T),
                                max: (0, d.MN)(D, O, T),
                                value: C,
                                onChange: U,
                                onMouseDown: (e) => A(e, 1),
                                onMouseUp: () => L(1),
                                disabled: !v || g
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: m.handleContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: s()(m.handleFrame, {
                                [m.startDragging]: k,
                                [m.endDragging]: _
                            }),
                            style: {
                                left: ''.concat((0, d.pN)(j, D, O, T), '%'),
                                right: ''.concat((0, d.kD)(Z, D, O, T), '%')
                            },
                            children: [
                                (0, l.jsx)('div', {
                                    className: s()(m.handleIconFrame, m.handleIconFrameStart),
                                    children: (0, l.jsx)('div', {
                                        className: s()(m.handleIconContainer, m.__invalid_start),
                                        children: (0, l.jsx)(r.Z, {
                                            direction: r.Z.Directions.RIGHT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: s()(m.handleIconFrame, m.handleIconFrameEnd),
                                    children: (0, l.jsx)('div', {
                                        className: s()(m.handleIconContainer, m.__invalid_end),
                                        children: (0, l.jsx)(r.Z, {
                                            direction: r.Z.Directions.LEFT,
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
                                className: s()(m.playhead, { [m.dragging]: I || k || _ || n }),
                                style: { left: ''.concat((0, d.pN)(C, D, O, T), '%') }
                            })
                        })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: m.waveformContainer,
                    children: (0, l.jsx)(c.Z, {
                        fineTuning: D,
                        fineTuningResolution: O,
                        duration: T
                    })
                })
            ]
        })
    );
});
