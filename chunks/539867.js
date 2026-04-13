n.d(t, { Ay: () => l, KI: () => i, _4: () => a });
var r = n(64700),
    s = n(876230);
let i = 4e3,
    a = 2e3;
function l(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: i, minSegmentDurationMs: a } = e,
        [l, u] = r.useState(null),
        [o, c] = r.useState(!1),
        [d, E] = r.useState(!1),
        [m, _] = r.useState(!1),
        f = (0, r.useRef)(null),
        p = (0, r.useRef)(Date.now()),
        S = (0, r.useRef)(!1),
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
        h = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && d && m) {
                let t = Date.now();
                u({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (S.current = !0);
            }
        }, [t, d, m]),
        g = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == l) return;
            let n = Date.now();
            n - p.current < i ||
                e - l.segmentStartSec < a / 1e3 ||
                (v({ ...l, endTimeMs: n, segmentEndSec: e }),
                u({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (p.current = n));
        }, [l, v, i, a, t]);
    (0, r.useEffect)(() => {
        (d && m) || (u(null), (S.current = !1));
    }, [d, m]),
        (0, r.useEffect)(() => {
            if (o && d && m)
                S.current || h(),
                    (f.current = window.setInterval(() => {
                        g();
                    }, 200));
            else {
                let e = t();
                if (null != l && null != e) {
                    let t = Date.now();
                    e - l.segmentStartSec > 0.2 && v({ ...l, endTimeMs: t, segmentEndSec: e });
                }
                u(null), (S.current = !1), null != f.current && (clearInterval(f.current), (f.current = null));
            }
            return () => {
                null != f.current && (clearInterval(f.current), (f.current = null));
            };
        }, [o, d, m, l, g, v, h, t]);
    let A = (0, r.useCallback)(() => {
            let e = t();
            if (null != l && null != e) {
                let t = Date.now();
                e - l.segmentStartSec > 0.2 && v({ ...l, endTimeMs: t, segmentEndSec: e }), u(null), (S.current = !1);
            }
        }, [l, v, t]),
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
            _(!0);
        }, []),
        handleSeek: (0, r.useCallback)(() => {
            C.current();
        }, []),
    };
}
