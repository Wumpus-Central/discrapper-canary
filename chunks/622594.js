t.d(n, { Z: () => g }), t(388685);
var l = t(951288),
    a = t(647438),
    i = t(120356),
    r = t.n(i),
    s = t(259580),
    o = t(70956),
    u = t(586826),
    c = t(174727),
    d = t(882126),
    f = t(943351),
    m = t(513726);
let g = a.memo(function (e) {
    let { playing: n, onPausePlayback: t, onPlaybackChange: i, onChangePosition: g, disabled: h = !1 } = e,
        v = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })({}, f.nl),
        { audio: p } = (0, u.p)(),
        b = null != p,
        y = a.useRef(null),
        j = a.useRef(null),
        x = a.useRef(null),
        [N, w] = a.useState(0),
        [C, S] = a.useState(0),
        [O, Z] = a.useState(0),
        [P, M] = a.useState(!1),
        [E, k] = a.useState(!1),
        [I, T] = a.useState(!1),
        [D, F] = a.useState(0),
        [R, B] = a.useState(-1),
        _ = a.useMemo(() => D / v.fineTuningScale, [v.fineTuningScale, D]);
    a.useEffect(() => {
        if (null == p) return;
        let e = p.duration * o.Z.Millis.SECOND;
        w(0), S(0), Z(e), F(e);
    }, [p]);
    let U = a.useCallback(
            (e, n) => {
                if ((t(), 0 === e.button))
                    switch (n) {
                        case 0:
                            M(!0);
                            break;
                        case 1:
                            k(!0);
                            break;
                        case 2:
                            T(!0);
                    }
            },
            [t],
        ),
        z = a.useCallback((e) => {
            switch (e) {
                case 0:
                    M(!1);
                    break;
                case 1:
                    k(!1);
                    break;
                case 2:
                    T(!1);
            }
            B(-1);
        }, []),
        G = a.useCallback(
            (e) => {
                if (null == p || !P) return;
                let n = parseInt(e.target.value),
                    t = n > O ? O : n;
                i((0, c.my)(t)), w(t), S(t);
            },
            [p, i, O, P],
        ),
        L = a.useCallback(
            (e) => {
                if (null == p || !E) return;
                let n = parseInt(e.target.value);
                n < N ? (i((0, c.my)(N)), S(N)) : n > O ? (i((0, c.my)(O)), S(O)) : (i((0, c.my)(n)), S(n));
            },
            [p, i, O, E, N],
        ),
        H = a.useCallback(
            (e) => {
                if (null == p || !I) return;
                let n = parseInt(e.target.value),
                    t = n > N ? n : N;
                i((0, c.my)(N)), S(N), Z(t);
            },
            [p, i, I, N],
        );
    return (
        a.useEffect(() => {
            null != g &&
                b &&
                g({
                    startPositionMs: N,
                    endPositionMs: O,
                    playheadPositionMs: C,
                });
        }, [N, O, g, b, C]),
        a.useEffect(() => {
            let e;
            if (null != p)
                return (
                    n &&
                        (e = setInterval(() => {
                            p.currentTime < (0, c.my)(O)
                                ? p.currentTime >= (0, c.my)(C) && S(p.currentTime * o.Z.Millis.SECOND)
                                : (t((0, c.my)(N)), S(N));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [p, O, t, C, n, N]),
        a.useEffect(() => {
            if (v.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                P && N == N && -1 === R ? B(N) : I && O == O && -1 === R ? B(O) : E && C == C && -1 === R && B(C);
            }, v.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [v.fineTuningDelay, I, O, R, E, C, P, N]),
        (0, l.jsxs)("div", {
            className: r()(m.timeline, { [m.initialized]: b }),
            children: [
                (0, l.jsxs)("div", {
                    className: m.rangeHandleContainer,
                    children: [
                        (0, l.jsxs)("div", {
                            className: m.rangeHandleFrame,
                            children: [
                                (0, l.jsx)("input", {
                                    ref: y,
                                    className: r()(m.rangeHandle, m.rangeHandleStart),
                                    type: "range",
                                    min: (0, c.ao)(R, _, D),
                                    max: (0, c.MN)(R, _, D),
                                    value: N,
                                    onChange: G,
                                    onMouseDown: (e) => U(e, 0),
                                    onMouseUp: () => z(0),
                                    disabled: !b || h,
                                }),
                                (0, l.jsx)("input", {
                                    ref: x,
                                    className: r()(m.rangeHandle, m.rangeHandleEnd),
                                    type: "range",
                                    min: (0, c.ao)(R, _, D),
                                    max: (0, c.MN)(R, _, D),
                                    value: O,
                                    onChange: H,
                                    onMouseDown: (e) => U(e, 2),
                                    onMouseUp: () => z(2),
                                    disabled: !b || h,
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: j,
                                className: r()(m.rangeHandle, m.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.ao)(R, _, D),
                                max: (0, c.MN)(R, _, D),
                                value: C,
                                onChange: L,
                                onMouseDown: (e) => U(e, 1),
                                onMouseUp: () => z(1),
                                disabled: !b || h,
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: m.handleContainer,
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(m.handleFrame, {
                                [m.startDragging]: P,
                                [m.endDragging]: I,
                            }),
                            style: {
                                left: "".concat((0, c.pN)(N, R, _, D), "%"),
                                right: "".concat((0, c.kD)(O, R, _, D), "%"),
                            },
                            children: [
                                (0, l.jsx)("div", {
                                    className: r()(m.handleIconFrame, m.handleIconFrameStart),
                                    children: (0, l.jsx)("div", {
                                        className: r()(m.handleIconContainer, m.__invalid_start),
                                        children: (0, l.jsx)(s.Z, {
                                            direction: s.Z.Directions.RIGHT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: r()(m.handleIconFrame, m.handleIconFrameEnd),
                                    children: (0, l.jsx)("div", {
                                        className: r()(m.handleIconContainer, m.__invalid_end),
                                        children: (0, l.jsx)(s.Z, {
                                            direction: s.Z.Directions.LEFT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: m.playheadTrack,
                            children: (0, l.jsx)("div", {
                                className: r()(m.playhead, { [m.dragging]: E || P || I || n }),
                                style: { left: "".concat((0, c.pN)(C, R, _, D), "%") },
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: m.waveformContainer,
                    children: (0, l.jsx)(d.Z, {
                        fineTuning: R,
                        fineTuningResolution: _,
                        duration: D,
                    }),
                }),
            ],
        })
    );
});
