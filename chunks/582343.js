n.d(t, {
    A: () => v,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    u = n(927813),
    o = n(904054),
    c = n(236972),
    d = n(677202),
    f = n(667920),
    m = n(980504),
    g = n(461555);
let h = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * u.A.Millis.SECOND),
        playheadPositionMs: 0,
    },
    v = i.memo(function (e) {
        let { className: t, volume: n, disabled: a = !1, onChange: v } = e,
            { audio: b } = (0, c.L)(),
            [x, p] = i.useState(!1),
            [j, y] = i.useState(h),
            { playheadPositionMs: w, endPositionMs: N, startPositionMs: O } = j,
            A = null != b,
            C = N - O,
            S = C > m.cT * u.A.Millis.SECOND;
        i.useEffect(() => {
            if (null != b)
                return (
                    y({
                        playheadPositionMs: 0,
                        endPositionMs: b.duration * u.A.Millis.SECOND,
                        startPositionMs: 0,
                    }),
                    () => {
                        b.pause(), p(!1);
                    }
                );
        }, [b]);
        let P = i.useCallback(
                (e) => {
                    null != b && (b.pause(), null != e && (b.currentTime = e), p(!1));
                },
                [b],
            ),
            E = i.useCallback(() => {
                if (null != b) {
                    if (x) return void P();
                    w >= N ? (b.currentTime = (0, f.fP)(O)) : (b.currentTime = (0, f.fP)(w)),
                        (b.volume = (0, o.A)(n)),
                        b.play(),
                        p(!0);
                }
            }, [b, N, P, w, x, O, n]),
            M = i.useCallback(
                (e) => {
                    y(e),
                        null == v ||
                            v({
                                startMs: e.startPositionMs,
                                endMs: e.endPositionMs,
                            });
                },
                [v],
            ),
            k = i.useCallback(
                (e) => {
                    null != b && (b.currentTime = e);
                },
                [b],
            );
        return (0, l.jsxs)("div", {
            className: r()(
                g.kL,
                {
                    [g.J_]: A,
                    [g.r9]: !A || a,
                },
                t,
            ),
            children: [
                (0, l.jsxs)("div", {
                    className: g.k0,
                    children: [
                        (0, l.jsx)(s.DUT, {
                            className: g.Rr,
                            onClick: A ? E : void 0,
                            children: x
                                ? (0, l.jsx)(s.wFz, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.CJ,
                                  })
                                : (0, l.jsx)(s.udU, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.CJ,
                                  }),
                        }),
                        (0, l.jsx)("div", {
                            className: g.aq,
                            children: (0, l.jsx)(s.Text, {
                                className: g.__invalid_duration,
                                variant: "text-xs/normal",
                                color: S ? "text-feedback-warning" : "text-feedback-positive",
                                children: "".concat((0, f.fP)(C).toFixed(2), "s"),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(d.A, {
                    playing: x,
                    onPlaybackChange: k,
                    onPausePlayback: P,
                    onChangePosition: M,
                    disabled: a,
                }),
            ],
        });
    });
