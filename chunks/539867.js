n.d(t, { Ay: () => i, KI: () => a, _4: () => l });
var r = n(64700),
    s = n(876230);
let a = 4e3,
    l = 2e3;
function i(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: a, minSegmentDurationMs: l } = e,
        [i, u] = r.useState(null),
        [o, c] = r.useState(!1),
        [d, E] = r.useState(!1),
        [m, f] = r.useState(!1),
        _ = (0, r.useRef)(null),
        S = (0, r.useRef)(Date.now()),
        p = (0, r.useRef)(!1),
        v = (0, r.useCallback)(
            (e) => {
                e.segmentEndSec < e.segmentStartSec ||
                    n({
                        start_time: e.startTimeMs,
                        end_time: e.endTimeMs,
                        duration: e.endTimeMs - e.startTimeMs,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                    });
            },
            [n],
        ),
        g = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && d && m) {
                let t = Date.now();
                u({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (p.current = !0);
            }
        }, [t, d, m]),
        h = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == i) return;
            let n = Date.now();
            n - S.current < a ||
                e - i.segmentStartSec < l / 1e3 ||
                (v({ ...i, endTimeMs: n, segmentEndSec: e }),
                u({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (S.current = n));
        }, [i, v, a, l, t]);
    (0, r.useEffect)(() => {
        (d && m) || (u(null), (p.current = !1));
    }, [d, m]),
        (0, r.useEffect)(() => {
            if (o && d && m)
                p.current || g(),
                    (_.current = window.setInterval(() => {
                        h();
                    }, 200));
            else {
                let e = t();
                if (null != i && null != e) {
                    let t = Date.now();
                    e - i.segmentStartSec > 0.2 && v({ ...i, endTimeMs: t, segmentEndSec: e });
                }
                u(null), (p.current = !1), null != _.current && (clearInterval(_.current), (_.current = null));
            }
            return () => {
                null != _.current && (clearInterval(_.current), (_.current = null));
            };
        }, [o, d, m, i, h, v, g, t]);
    let A = (0, r.useCallback)(() => {
            let e = t();
            if (null != i && null != e) {
                let t = Date.now();
                e - i.segmentStartSec > 0.2 && v({ ...i, endTimeMs: t, segmentEndSec: e }), u(null), (p.current = !1);
            }
        }, [i, v, t]),
        C = (0, r.useRef)(A);
    C.current = A;
    let x = (0, r.useCallback)((e, t) => {
            switch (e) {
                case s.Q6.PLAYING:
                    c(!0);
                    break;
                case s.Q6.PAUSED:
                case s.Q6.ENDED:
                    C.current(), c(!1);
            }
        }, []),
        D = (0, r.useCallback)((e) => {
            E(!0);
        }, []);
    return {
        handlePlayerStateChange: x,
        handleLoadEnd: D,
        handleFirstFrame: (0, r.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, r.useCallback)(() => {
            C.current();
        }, []),
    };
}
