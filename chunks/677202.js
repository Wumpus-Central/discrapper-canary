l.d(t, { A: () => h });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(147925),
    u = l(927813),
    o = l(236972),
    d = l(667920),
    c = l(381106),
    m = l(335416),
    f = l(872088);
let h = a.memo(function (e) {
    let { playing: t, onPausePlayback: l, onPlaybackChange: i, onChangePosition: h, disabled: g = !1 } = e,
        x = { ...m.Jh },
        { audio: v } = (0, o.L)(),
        j = null != v,
        p = a.useRef(null),
        N = a.useRef(null),
        b = a.useRef(null),
        [y, C] = a.useState(0),
        [A, w] = a.useState(0),
        [S, M] = a.useState(0),
        [E, T] = a.useState(!1),
        [k, P] = a.useState(!1),
        [D, I] = a.useState(!1),
        [O, F] = a.useState(0),
        [L, R] = a.useState(-1),
        U = a.useMemo(() => O / x.fineTuningScale, [x.fineTuningScale, O]);
    a.useEffect(() => {
        if (null == v) return;
        let e = v.duration * u.A.Millis.SECOND;
        C(0), w(0), M(e), F(e);
    }, [v]);
    let _ = a.useCallback(
            (e, t) => {
                if ((l(), 0 === e.button))
                    switch (t) {
                        case 0:
                            T(!0);
                            break;
                        case 1:
                            P(!0);
                            break;
                        case 2:
                            I(!0);
                    }
            },
            [l],
        ),
        J = a.useCallback((e) => {
            switch (e) {
                case 0:
                    T(!1);
                    break;
                case 1:
                    P(!1);
                    break;
                case 2:
                    I(!1);
            }
            R(-1);
        }, []),
        $ = a.useCallback(
            (e) => {
                if (null == v || !E) return;
                let t = parseInt(e.target.value),
                    l = t > S ? S : t;
                i((0, d.fP)(l)), C(l), w(l);
            },
            [v, i, S, E],
        ),
        G = a.useCallback(
            (e) => {
                if (null == v || !k) return;
                let t = parseInt(e.target.value);
                t < y ? (i((0, d.fP)(y)), w(y)) : t > S ? (i((0, d.fP)(S)), w(S)) : (i((0, d.fP)(t)), w(t));
            },
            [v, i, S, k, y],
        ),
        V = a.useCallback(
            (e) => {
                if (null == v || !D) return;
                let t = parseInt(e.target.value),
                    l = t > y ? t : y;
                i((0, d.fP)(y)), w(y), M(l);
            },
            [v, i, D, y],
        );
    return (
        a.useEffect(() => {
            null != h && j && h({ startPositionMs: y, endPositionMs: S, playheadPositionMs: A });
        }, [y, S, h, j, A]),
        a.useEffect(() => {
            let e;
            if (null != v)
                return (
                    t &&
                        (e = setInterval(() => {
                            v.currentTime < (0, d.fP)(S)
                                ? v.currentTime >= (0, d.fP)(A) && w(v.currentTime * u.A.Millis.SECOND)
                                : (l((0, d.fP)(y)), w(y));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [v, S, l, A, t, y]),
        a.useEffect(() => {
            if (x.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                E && y == y && -1 === L ? R(y) : D && S == S && -1 === L ? R(S) : k && A == A && -1 === L && R(A);
            }, x.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [x.fineTuningDelay, D, S, L, k, A, E, y]),
        (0, n.jsxs)("div", {
            className: s()(f.IO, { [f.J_]: j }),
            children: [
                (0, n.jsxs)("div", {
                    className: f.Rn,
                    children: [
                        (0, n.jsxs)("div", {
                            className: f.Dn,
                            children: [
                                (0, n.jsx)("input", {
                                    ref: p,
                                    className: s()(f.Os, f.YT),
                                    type: "range",
                                    min: (0, d.Y0)(L, U, O),
                                    max: (0, d.gP)(L, U, O),
                                    value: y,
                                    onChange: $,
                                    onMouseDown: (e) => _(e, 0),
                                    onMouseUp: () => J(0),
                                    disabled: !j || g,
                                }),
                                (0, n.jsx)("input", {
                                    ref: b,
                                    className: s()(f.Os, f.BC),
                                    type: "range",
                                    min: (0, d.Y0)(L, U, O),
                                    max: (0, d.gP)(L, U, O),
                                    value: S,
                                    onChange: V,
                                    onMouseDown: (e) => _(e, 2),
                                    onMouseUp: () => J(2),
                                    disabled: !j || g,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: f.__invalid_handlePlayheadTrack,
                            children: (0, n.jsx)("input", {
                                ref: N,
                                className: s()(f.Os, f.GO),
                                type: "range",
                                min: (0, d.Y0)(L, U, O),
                                max: (0, d.gP)(L, U, O),
                                value: A,
                                onChange: G,
                                onMouseDown: (e) => _(e, 1),
                                onMouseUp: () => J(1),
                                disabled: !j || g,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: f.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(f.Wm, { [f.Em]: E, [f.z6]: D }),
                            style: { left: `${(0, d.y)(y, L, U, O)}%`, right: `${(0, d.N7)(S, L, U, O)}%` },
                            children: [
                                (0, n.jsx)("div", {
                                    className: s()(f.P, f.RC),
                                    children: (0, n.jsx)("div", {
                                        className: s()(f.Xd, f.__invalid_start),
                                        children: (0, n.jsx)(r.A, {
                                            direction: r.A.Directions.RIGHT,
                                            className: f.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: s()(f.P, f.SE),
                                    children: (0, n.jsx)("div", {
                                        className: s()(f.Xd, f.__invalid_end),
                                        children: (0, n.jsx)(r.A, {
                                            direction: r.A.Directions.LEFT,
                                            className: f.OD,
                                            width: 16,
                                            height: 16,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: f.i0,
                            children: (0, n.jsx)("div", {
                                className: s()(f.lG, { [f.cB]: k || E || D || t }),
                                style: { left: `${(0, d.y)(A, L, U, O)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: f.FU,
                    children: (0, n.jsx)(c.A, { fineTuning: L, fineTuningResolution: U, duration: O }),
                }),
            ],
        })
    );
});
