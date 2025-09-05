t.d(n, { Z: () => g }), t(388685);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(259580),
    s = t(70956),
    u = t(586826),
    c = t(174727),
    d = t(882126),
    f = t(943351),
    m = t(21243);
let g = l.memo(function (e) {
    let { playing: n, onPausePlayback: t, onPlaybackChange: i, onChangePosition: g, disabled: h = !1 } = e,
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
        { audio: y } = (0, u.p)(),
        b = null != y,
        v = l.useRef(null),
        x = l.useRef(null),
        w = l.useRef(null),
        [j, _] = l.useState(0),
        [N, C] = l.useState(0),
        [S, O] = l.useState(0),
        [E, P] = l.useState(!1),
        [I, k] = l.useState(!1),
        [M, Z] = l.useState(!1),
        [T, F] = l.useState(0),
        [D, R] = l.useState(-1),
        B = l.useMemo(() => T / p.fineTuningScale, [p.fineTuningScale, T]);
    l.useEffect(() => {
        if (null == y) return;
        let e = y.duration * s.Z.Millis.SECOND;
        _(0), C(0), O(e), F(e);
    }, [y]);
    let H = l.useCallback(
            (e, n) => {
                if ((t(), 0 === e.button))
                    switch (n) {
                        case 0:
                            P(!0);
                            break;
                        case 1:
                            k(!0);
                            break;
                        case 2:
                            Z(!0);
                    }
            },
            [t],
        ),
        A = l.useCallback((e) => {
            switch (e) {
                case 0:
                    P(!1);
                    break;
                case 1:
                    k(!1);
                    break;
                case 2:
                    Z(!1);
            }
            R(-1);
        }, []),
        U = l.useCallback(
            (e) => {
                if (null == y || !E) return;
                let n = parseInt(e.target.value),
                    t = n > S ? S : n;
                i((0, c.my)(t)), _(t), C(t);
            },
            [y, i, S, E],
        ),
        z = l.useCallback(
            (e) => {
                if (null == y || !I) return;
                let n = parseInt(e.target.value);
                n < j ? (i((0, c.my)(j)), C(j)) : n > S ? (i((0, c.my)(S)), C(S)) : (i((0, c.my)(n)), C(n));
            },
            [y, i, S, I, j],
        ),
        L = l.useCallback(
            (e) => {
                if (null == y || !M) return;
                let n = parseInt(e.target.value),
                    t = n > j ? n : j;
                i((0, c.my)(j)), C(j), O(t);
            },
            [y, i, M, j],
        );
    return (
        l.useEffect(() => {
            null != g &&
                b &&
                g({
                    startPositionMs: j,
                    endPositionMs: S,
                    playheadPositionMs: N,
                });
        }, [j, S, g, b, N]),
        l.useEffect(() => {
            let e;
            if (null != y)
                return (
                    n &&
                        (e = setInterval(() => {
                            y.currentTime < (0, c.my)(S)
                                ? y.currentTime >= (0, c.my)(N) && C(y.currentTime * s.Z.Millis.SECOND)
                                : (t((0, c.my)(j)), C(j));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [y, S, t, N, n, j]),
        l.useEffect(() => {
            if (p.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                E && j == j && -1 === D ? R(j) : M && S == S && -1 === D ? R(S) : I && N == N && -1 === D && R(N);
            }, p.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [p.fineTuningDelay, M, S, D, I, N, E, j]),
        (0, a.jsxs)("div", {
            className: r()(m.timeline, { [m.initialized]: b }),
            children: [
                (0, a.jsxs)("div", {
                    className: m.rangeHandleContainer,
                    children: [
                        (0, a.jsxs)("div", {
                            className: m.rangeHandleFrame,
                            children: [
                                (0, a.jsx)("input", {
                                    ref: v,
                                    className: r()(m.rangeHandle, m.rangeHandleStart),
                                    type: "range",
                                    min: (0, c.ao)(D, B, T),
                                    max: (0, c.MN)(D, B, T),
                                    value: j,
                                    onChange: U,
                                    onMouseDown: (e) => H(e, 0),
                                    onMouseUp: () => A(0),
                                    disabled: !b || h,
                                }),
                                (0, a.jsx)("input", {
                                    ref: w,
                                    className: r()(m.rangeHandle, m.rangeHandleEnd),
                                    type: "range",
                                    min: (0, c.ao)(D, B, T),
                                    max: (0, c.MN)(D, B, T),
                                    value: S,
                                    onChange: L,
                                    onMouseDown: (e) => H(e, 2),
                                    onMouseUp: () => A(2),
                                    disabled: !b || h,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, a.jsx)("input", {
                                ref: x,
                                className: r()(m.rangeHandle, m.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.ao)(D, B, T),
                                max: (0, c.MN)(D, B, T),
                                value: N,
                                onChange: z,
                                onMouseDown: (e) => H(e, 1),
                                onMouseUp: () => A(1),
                                disabled: !b || h,
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: m.handleContainer,
                    children: [
                        (0, a.jsxs)("div", {
                            className: r()(m.handleFrame, {
                                [m.startDragging]: E,
                                [m.endDragging]: M,
                            }),
                            style: {
                                left: "".concat((0, c.pN)(j, D, B, T), "%"),
                                right: "".concat((0, c.kD)(S, D, B, T), "%"),
                            },
                            children: [
                                (0, a.jsx)("div", {
                                    className: r()(m.handleIconFrame, m.handleIconFrameStart),
                                    children: (0, a.jsx)("div", {
                                        className: r()(m.handleIconContainer, m.__invalid_start),
                                        children: (0, a.jsx)(o.Z, {
                                            direction: o.Z.Directions.RIGHT,
                                            className: m.handleIcon,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: r()(m.handleIconFrame, m.handleIconFrameEnd),
                                    children: (0, a.jsx)("div", {
                                        className: r()(m.handleIconContainer, m.__invalid_end),
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
                                className: r()(m.playhead, { [m.dragging]: I || E || M || n }),
                                style: { left: "".concat((0, c.pN)(N, D, B, T), "%") },
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
