l.d(t, { A: () => j });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(939249),
    u = l(29080),
    o = l(782134),
    d = l(834730),
    c = l(927813),
    m = l(904054),
    f = l(236972),
    h = l(677202),
    g = l(667920);
l(980504);
var x = l(40566);
let v = { startPositionMs: 0, endPositionMs: 2 * (10 * c.A.Millis.SECOND), playheadPositionMs: 0 },
    j = a.memo(function (e) {
        let { className: t, volume: l, disabled: i = !1, onChange: j } = e,
            { audio: p } = (0, f.L)(),
            [N, A] = a.useState(!1),
            [C, b] = a.useState(v),
            { playheadPositionMs: y, endPositionMs: w, startPositionMs: E } = C,
            S = null != p,
            M = w - E,
            k = M > 5 * c.A.Millis.SECOND;
        a.useEffect(() => {
            if (null != p)
                return (
                    b({ playheadPositionMs: 0, endPositionMs: p.duration * c.A.Millis.SECOND, startPositionMs: 0 }),
                    () => {
                        p.pause(), A(!1);
                    }
                );
        }, [p]);
        let P = a.useCallback(
                (e) => {
                    null != p && (p.pause(), null != e && (p.currentTime = e), A(!1));
                },
                [p],
            ),
            T = a.useCallback(() => {
                if (null != p) {
                    if (N) return void P();
                    y >= w ? (p.currentTime = (0, g.fP)(E)) : (p.currentTime = (0, g.fP)(y)),
                        (p.volume = (0, m.A)(l)),
                        p.play(),
                        A(!0);
                }
            }, [p, w, P, y, N, E, l]),
            I = a.useCallback(
                (e) => {
                    b(e), j?.({ startMs: e.startPositionMs, endMs: e.endPositionMs });
                },
                [j],
            ),
            D = a.useCallback(
                (e) => {
                    null != p && (p.currentTime = e);
                },
                [p],
            );
        return (0, n.jsxs)("div", {
            className: s()(x.kL, { [x.J_]: S, [x.r9]: !S || i }, t),
            children: [
                (0, n.jsxs)("div", {
                    className: x.k0,
                    children: [
                        (0, n.jsx)(r.D, {
                            className: x.Rr,
                            onClick: S ? T : void 0,
                            children: N
                                ? (0, n.jsx)(u.w, { size: "xs", color: "currentColor", className: x.CJ })
                                : (0, n.jsx)(o.u, { size: "xs", color: "currentColor", className: x.CJ }),
                        }),
                        (0, n.jsx)("div", {
                            className: x.aq,
                            children: (0, n.jsx)(d.E, {
                                className: x.__invalid_duration,
                                variant: "text-xs/normal",
                                color: k ? "text-feedback-warning" : "text-feedback-positive",
                                children: `${(0, g.fP)(M).toFixed(2)}s`,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(h.A, {
                    playing: N,
                    onPlaybackChange: D,
                    onPausePlayback: P,
                    onChangePosition: I,
                    disabled: i,
                }),
            ],
        });
    });
