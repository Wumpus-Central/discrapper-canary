l.d(t, { A: () => g });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(397927),
    u = l(927813),
    o = l(904054),
    d = l(236972),
    c = l(677202),
    m = l(667920);
l(980504);
var f = l(20137);
let h = { startPositionMs: 0, endPositionMs: 2 * (10 * u.A.Millis.SECOND), playheadPositionMs: 0 },
    g = a.memo(function (e) {
        let { className: t, volume: l, disabled: i = !1, onChange: g } = e,
            { audio: x } = (0, d.L)(),
            [v, j] = a.useState(!1),
            [p, N] = a.useState(h),
            { playheadPositionMs: b, endPositionMs: y, startPositionMs: C } = p,
            A = null != x,
            w = y - C,
            S = w > 5 * u.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != x)
                return (
                    N({ playheadPositionMs: 0, endPositionMs: x.duration * u.A.Millis.SECOND, startPositionMs: 0 }),
                    () => {
                        x.pause(), j(!1);
                    }
                );
        }, [x]);
        let M = a.useCallback(
                (e) => {
                    null != x && (x.pause(), null != e && (x.currentTime = e), j(!1));
                },
                [x],
            ),
            E = a.useCallback(() => {
                if (null != x) {
                    if (v) return void M();
                    b >= y ? (x.currentTime = (0, m.fP)(C)) : (x.currentTime = (0, m.fP)(b)),
                        (x.volume = (0, o.A)(l)),
                        x.play(),
                        j(!0);
                }
            }, [x, y, M, b, v, C, l]),
            T = a.useCallback(
                (e) => {
                    N(e), g?.({ startMs: e.startPositionMs, endMs: e.endPositionMs });
                },
                [g],
            ),
            k = a.useCallback(
                (e) => {
                    null != x && (x.currentTime = e);
                },
                [x],
            );
        return (0, n.jsxs)("div", {
            className: s()(f.kL, { [f.J_]: A, [f.r9]: !A || i }, t),
            children: [
                (0, n.jsxs)("div", {
                    className: f.k0,
                    children: [
                        (0, n.jsx)(r.DUT, {
                            className: f.Rr,
                            onClick: A ? E : void 0,
                            children: v
                                ? (0, n.jsx)(r.wFz, { size: "xs", color: "currentColor", className: f.CJ })
                                : (0, n.jsx)(r.udU, { size: "xs", color: "currentColor", className: f.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: f.aq,
                            children: (0, n.jsx)(r.Text, {
                                className: f.__invalid_duration,
                                variant: "text-xs/normal",
                                color: S ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${(0, m.fP)(w).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(c.A, {
                    playing: v,
                    onPlaybackChange: k,
                    onPausePlayback: M,
                    onChangePosition: T,
                    disabled: i,
                }),
            ],
        });
    });
