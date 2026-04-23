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
    f = l(346973);
let h = a.memo(function (e) {
    let { playing: t, onPausePlayback: l, onPlaybackChange: i, onChangePosition: h, disabled: g = !1 } = e,
        x = { ...m.Jh },
        { audio: v } = (0, o.L)(),
        j = null != v,
        p = a.useRef(null),
        N = a.useRef(null),
        A = a.useRef(null),
        [C, b] = a.useState(0),
        [y, w] = a.useState(0),
        [E, S] = a.useState(0),
        [M, k] = a.useState(!1),
        [P, T] = a.useState(!1),
        [I, D] = a.useState(!1),
        [F, L] = a.useState(0),
        [R, O] = a.useState(-1),
        _ = a.useMemo(() => F / x.fineTuningScale, [x.fineTuningScale, F]);
    a.useEffect(() => {
        if (null == v) return;
        let e = v.duration * u.A.Millis.SECOND;
        b(0), w(0), S(e), L(e);
    }, [v]);
    let J = a.useCallback(
            (e, t) => {
                if ((l(), 0 === e.button))
                    switch (t) {
                        case 0:
                            k(!0);
                            break;
                        case 1:
                            T(!0);
                            break;
                        case 2:
                            D(!0);
                    }
            },
            [l],
        ),
        U = a.useCallback((e) => {
            switch (e) {
                case 0:
                    k(!1);
                    break;
                case 1:
                    T(!1);
                    break;
                case 2:
                    D(!1);
            }
            O(-1);
        }, []),
        G = a.useCallback(
            (e) => {
                if (null == v || !M) return;
                let t = parseInt(e.target.value),
                    l = t > E ? E : t;
                i((0, d.fP)(l)), b(l), w(l);
            },
            [v, i, E, M],
        ),
        B = a.useCallback(
            (e) => {
                if (null == v || !P) return;
                let t = parseInt(e.target.value);
                t < C ? (i((0, d.fP)(C)), w(C)) : t > E ? (i((0, d.fP)(E)), w(E)) : (i((0, d.fP)(t)), w(t));
            },
            [v, i, E, P, C],
        ),
        V = a.useCallback(
            (e) => {
                if (null == v || !I) return;
                let t = parseInt(e.target.value),
                    l = t > C ? t : C;
                i((0, d.fP)(C)), w(C), S(l);
            },
            [v, i, I, C],
        );
    return (
        a.useEffect(() => {
            null != h && j && h({ startPositionMs: C, endPositionMs: E, playheadPositionMs: y });
        }, [C, E, h, j, y]),
        a.useEffect(() => {
            let e;
            if (null != v)
                return (
                    t &&
                        (e = setInterval(() => {
                            v.currentTime < (0, d.fP)(E)
                                ? v.currentTime >= (0, d.fP)(y) && w(v.currentTime * u.A.Millis.SECOND)
                                : (l((0, d.fP)(C)), w(C));
                        }, 16)),
                    () => {
                        clearInterval(e);
                    }
                );
        }, [v, E, l, y, t, C]),
        a.useEffect(() => {
            if (x.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
                M && C == C && -1 === R ? O(C) : I && E == E && -1 === R ? O(E) : P && y == y && -1 === R && O(y);
            }, x.fineTuningDelay);
            return () => {
                clearTimeout(e);
            };
        }, [x.fineTuningDelay, I, E, R, P, y, M, C]),
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
                                    min: (0, d.Y0)(R, _, F),
                                    max: (0, d.gP)(R, _, F),
                                    value: C,
                                    onChange: G,
                                    onMouseDown: (e) => J(e, 0),
                                    onMouseUp: () => U(0),
                                    disabled: !j || g,
                                }),
                                (0, n.jsx)("input", {
                                    ref: A,
                                    className: s()(f.Os, f.BC),
                                    type: "range",
                                    min: (0, d.Y0)(R, _, F),
                                    max: (0, d.gP)(R, _, F),
                                    value: E,
                                    onChange: V,
                                    onMouseDown: (e) => J(e, 2),
                                    onMouseUp: () => U(2),
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
                                min: (0, d.Y0)(R, _, F),
                                max: (0, d.gP)(R, _, F),
                                value: y,
                                onChange: B,
                                onMouseDown: (e) => J(e, 1),
                                onMouseUp: () => U(1),
                                disabled: !j || g,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: f.wo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(f.Wm, { [f.Em]: M, [f.z6]: I }),
                            style: { left: `${(0, d.y)(C, R, _, F)}%`, right: `${(0, d.N7)(E, R, _, F)}%` },
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
                                className: s()(f.lG, { [f.cB]: P || M || I || t }),
                                style: { left: `${(0, d.y)(y, R, _, F)}%` },
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: f.FU,
                    children: (0, n.jsx)(c.A, { fineTuning: R, fineTuningResolution: _, duration: F }),
                }),
            ],
        })
    );
});
