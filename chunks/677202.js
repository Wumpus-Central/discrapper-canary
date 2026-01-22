n.d(t, {
    A: () => g,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(147925),
    u = n(927813),
    o = n(236972),
    c = n(667920),
    d = n(381106),
    f = n(335416),
    m = n(872088);
let g = i.memo(function (e) {
    let { playing: t, onPausePlayback: n, onPlaybackChange: a, onChangePosition: g, disabled: h = !1 } = e,
        v = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({}, f.Jh),
        { audio: b } = (0, o.L)(),
        x = null != b,
        p = i.useRef(null),
        j = i.useRef(null),
        y = i.useRef(null),
        [w, N] = i.useState(0),
        [O, A] = i.useState(0),
        [C, S] = i.useState(0),
        [P, E] = i.useState(!1),
        [M, k] = i.useState(!1),
        [T, D] = i.useState(!1),
        [I, F] = i.useState(0),
        [L, R] = i.useState(-1),
        U = i.useMemo(() => I / v.fineTuningScale, [v.fineTuningScale, I]);
    i.useEffect(() => {
        if (null == b) return;
        let e = b.duration * u.A.Millis.SECOND;
        N(0), A(0), S(e), F(e);
    }, [b]);
    let _ = i.useCallback(
            (e, t) => {
                if ((n(), 0 === e.button))
                    switch (t) {
                        case 0:
                            E(!0);
                            break;
                        case 1:
                            k(!0);
                            break;
                        case 2:
                            D(!0);
                    }
            },
            [n],
        ),
        J = i.useCallback((e) => {
            switch (e) {
                case 0:
                    E(!1);
                    break;
                case 1:
                    k(!1);
                    break;
                case 2:
                    D(!1);
            }
            R(-1);
        }, []),
        G = i.useCallback(
            (e) => {
                if (null == b || !P) return;
                let t = parseInt(e.target.value),
                    n = t > C ? C : t;
                a((0, c.fP)(n)), N(n), A(n);
            },
            [b, a, C, P],
        ),
        V = i.useCallback(
            (e) => {
                if (null == b || !M) return;
                let t = parseInt(e.target.value);
                t < w ? (a((0, c.fP)(w)), A(w)) : t > C ? (a((0, c.fP)(C)), A(C)) : (a((0, c.fP)(t)), A(t));
            },
            [b, a, C, M, w],
        ),
        z = i.useCallback(
            (e) => {
                if (null == b || !T) return;
                let t = parseInt(e.target.value),
                    n = t > w ? t : w;
                a((0, c.fP)(w)), A(w), S(n);
            },
            [b, a, T, w],
        );
    return (
        i.useEffect(() => {
            null != g &&
                x &&
                g({
                    startPositionMs: w,
                    endPositionMs: C,
                    playheadPositionMs: O,
                });
        }, [w, C, g, x, O]),
        i.useEffect(() => {
            let e;
            if (null != b)
                return (
                    t &&
                        (e = setInterval(() => {
                            b.currentTime < (0, c.fP)(C)
                                ? b.currentTime >= (0, c.fP)(O) && A(b.currentTime * u.A.Millis.SECOND)
                                : (n((0, c.fP)(w)), A(w));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [b, C, n, O, t, w]),
        i.useEffect(() => {
            if (v.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                P && w == w && -1 === L ? R(w) : T && C == C && -1 === L ? R(C) : M && O == O && -1 === L && R(O);
            }, v.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [v.fineTuningDelay, T, C, L, M, O, P, w]),
        (0, l.jsxs)("div", {
            className: r()(m.IO, {
                [m.J_]: x,
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: m.Rn,
                    children: [
                        (0, l.jsxs)("div", {
                            className: m.Dn,
                            children: [
                                (0, l.jsx)("input", {
                                    ref: p,
                                    className: r()(m.Os, m.YT),
                                    type: "range",
                                    min: (0, c.Y0)(L, U, I),
                                    max: (0, c.gP)(L, U, I),
                                    value: w,
                                    onChange: G,
                                    onMouseDown: (e) => _(e, 0),
                                    onMouseUp: () => J(0),
                                    disabled: !x || h,
                                }),
                                (0, l.jsx)("input", {
                                    ref: y,
                                    className: r()(m.Os, m.BC),
                                    type: "range",
                                    min: (0, c.Y0)(L, U, I),
                                    max: (0, c.gP)(L, U, I),
                                    value: C,
                                    onChange: z,
                                    onMouseDown: (e) => _(e, 2),
                                    onMouseUp: () => J(2),
                                    disabled: !x || h,
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: m.__invalid_handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: j,
                                className: r()(m.Os, m.GO),
                                type: "range",
                                min: (0, c.Y0)(L, U, I),
                                max: (0, c.gP)(L, U, I),
                                value: O,
                                onChange: V,
                                onMouseDown: (e) => _(e, 1),
                                onMouseUp: () => J(1),
                                disabled: !x || h,
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: m.wo,
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(m.Wm, {
                                [m.Em]: P,
                                [m.z6]: T,
                            }),
                            style: {
                                left: "".concat((0, c.y)(w, L, U, I), "%"),
                                right: "".concat((0, c.N7)(C, L, U, I), "%"),
                            },
                            children: [
                                (0, l.jsx)("div", {
                                    className: r()(m.P, m.RC),
                                    children: (0, l.jsx)("div", {
                                        className: r()(m.Xd, m.__invalid_start),
                                        children: (0, l.jsx)(s.A, {
                                            direction: s.A.Directions.RIGHT,
                                            className: m.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: r()(m.P, m.SE),
                                    children: (0, l.jsx)("div", {
                                        className: r()(m.Xd, m.__invalid_end),
                                        children: (0, l.jsx)(s.A, {
                                            direction: s.A.Directions.LEFT,
                                            className: m.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: m.i0,
                            children: (0, l.jsx)("div", {
                                className: r()(m.lG, {
                                    [m.cB]: M || P || T || t,
                                }),
                                style: {
                                    left: "".concat((0, c.y)(O, L, U, I), "%"),
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: m.FU,
                    children: (0, l.jsx)(d.A, {
                        fineTuning: L,
                        fineTuningResolution: U,
                        duration: I,
                    }),
                }),
            ],
        })
    );
});
