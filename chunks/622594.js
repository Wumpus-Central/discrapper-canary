t.d(n, { Z: () => g }), t(388685);
var a = t(951288),
    l = t(647438),
    r = t(120356),
    i = t.n(r),
    o = t(259580),
    s = t(70956),
    u = t(586826),
    c = t(174727),
    d = t(882126),
    f = t(943351),
    m = t(21243);
let g = l.memo(function (e) {
    let { playing: n, onPausePlayback: t, onPlaybackChange: r, onChangePosition: g, disabled: h = !1 } = e,
        p = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    a = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    a.forEach(function (n) {
                        var a;
                        (a = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = a);
                    });
            }
            return e;
        })({}, f.nl),
        { audio: b } = (0, u.p)(),
        y = null != b,
        v = l.useRef(null),
        x = l.useRef(null),
        j = l.useRef(null),
        [w, _] = l.useState(0),
        [C, N] = l.useState(0),
        [S, O] = l.useState(0),
        [E, P] = l.useState(!1),
        [I, M] = l.useState(!1),
        [Z, k] = l.useState(!1),
        [T, F] = l.useState(0),
        [D, R] = l.useState(-1),
        B = l.useMemo(() => T / p.fineTuningScale, [p.fineTuningScale, T]);
    l.useEffect(() => {
        if (null == b) return;
        let e = b.duration * s.Z.Millis.SECOND;
        _(0), N(0), O(e), F(e);
    }, [b]);
    let A = l.useCallback(
            (e, n) => {
                if ((t(), 0 === e.button))
                    switch (n) {
                        case 0:
                            P(!0);
                            break;
                        case 1:
                            M(!0);
                            break;
                        case 2:
                            k(!0);
                    }
            },
            [t],
        ),
        U = l.useCallback((e) => {
            switch (e) {
                case 0:
                    P(!1);
                    break;
                case 1:
                    M(!1);
                    break;
                case 2:
                    k(!1);
            }
            R(-1);
        }, []),
        H = l.useCallback(
            (e) => {
                if (null == b || !E) return;
                let n = parseInt(e.target.value),
                    t = n > S ? S : n;
                r((0, c.my)(t)), _(t), N(t);
            },
            [b, r, S, E],
        ),
        z = l.useCallback(
            (e) => {
                if (null == b || !I) return;
                let n = parseInt(e.target.value);
                n < w ? (r((0, c.my)(w)), N(w)) : n > S ? (r((0, c.my)(S)), N(S)) : (r((0, c.my)(n)), N(n));
            },
            [b, r, S, I, w],
        ),
        L = l.useCallback(
            (e) => {
                if (null == b || !Z) return;
                let n = parseInt(e.target.value),
                    t = n > w ? n : w;
                r((0, c.my)(w)), N(w), O(t);
            },
            [b, r, Z, w],
        );
    return (
        l.useEffect(() => {
            null != g &&
                y &&
                g({
                    startPositionMs: w,
                    endPositionMs: S,
                    playheadPositionMs: C,
                });
        }, [w, S, g, y, C]),
        l.useEffect(() => {
            let e;
            if (null != b)
                return (
                    n &&
                        (e = setInterval(() => {
                            b.currentTime < (0, c.my)(S)
                                ? b.currentTime >= (0, c.my)(C) && N(b.currentTime * s.Z.Millis.SECOND)
                                : (t((0, c.my)(w)), N(w));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [b, S, t, C, n, w]),
        l.useEffect(() => {
            if (p.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                E && w == w && -1 === D ? R(w) : Z && S == S && -1 === D ? R(S) : I && C == C && -1 === D && R(C);
            }, p.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [p.fineTuningDelay, Z, S, D, I, C, E, w]),
        (0, a.jsxs)("div", {
            className: i()(m.timeline, { [m.initialized]: y }),
            children: [
                (0, a.jsxs)("div", {
                    className: m.rangeHandleContainer,
                    children: [
                        (0, a.jsxs)("div", {
                            className: m.rangeHandleFrame,
                            children: [
                                (0, a.jsx)("input", {
                                    ref: v,
                                    className: i()(m.rangeHandle, m.rangeHandleStart),
                                    type: "range",
                                    min: (0, c.ao)(D, B, T),
                                    max: (0, c.MN)(D, B, T),
                                    value: w,
                                    onChange: H,
                                    onMouseDown: (e) => A(e, 0),
                                    onMouseUp: () => U(0),
                                    disabled: !y || h,
                                }),
                                (0, a.jsx)("input", {
                                    ref: j,
                                    className: i()(m.rangeHandle, m.rangeHandleEnd),
                                    type: "range",
                                    min: (0, c.ao)(D, B, T),
                                    max: (0, c.MN)(D, B, T),
                                    value: S,
                                    onChange: L,
                                    onMouseDown: (e) => A(e, 2),
                                    onMouseUp: () => U(2),
                                    disabled: !y || h,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, a.jsx)("input", {
                                ref: x,
                                className: i()(m.rangeHandle, m.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.ao)(D, B, T),
                                max: (0, c.MN)(D, B, T),
                                value: C,
                                onChange: z,
                                onMouseDown: (e) => A(e, 1),
                                onMouseUp: () => U(1),
                                disabled: !y || h,
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: m.handleContainer,
                    children: [
                        (0, a.jsxs)("div", {
                            className: i()(m.handleFrame, {
                                [m.startDragging]: E,
                                [m.endDragging]: Z,
                            }),
                            style: {
                                left: "".concat((0, c.pN)(w, D, B, T), "%"),
                                right: "".concat((0, c.kD)(S, D, B, T), "%"),
                            },
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(m.handleIconFrame, m.handleIconFrameStart),
                                    children: (0, a.jsx)("div", {
                                        className: i()(m.handleIconContainer, m.__invalid_start),
                                        children: (0, a.jsx)(o.Z, {
                                            direction: o.Z.Directions.RIGHT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(m.handleIconFrame, m.handleIconFrameEnd),
                                    children: (0, a.jsx)("div", {
                                        className: i()(m.handleIconContainer, m.__invalid_end),
                                        children: (0, a.jsx)(o.Z, {
                                            direction: o.Z.Directions.LEFT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: m.playheadTrack,
                            children: (0, a.jsx)("div", {
                                className: i()(m.playhead, { [m.dragging]: I || E || Z || n }),
                                style: { left: "".concat((0, c.pN)(C, D, B, T), "%") },
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: m.waveformContainer,
                    children: (0, a.jsx)(d.Z, {
                        fineTuning: D,
                        fineTuningResolution: B,
                        duration: T,
                    }),
                }),
            ],
        })
    );
});
