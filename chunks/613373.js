n.d(t, {
    nY: () => u.nY,
    OH: () => u.OH,
    zZ: () => s.A,
    DQ: () => i.A,
    uI: () => a.Ay,
    lx: () => u.lx,
    Yr: () => E,
    KP: () => u.KP,
    pK: () => u.pK,
    _4: () => d,
    O7: () => _.O7,
    P8: () => m.A,
    A7: () => _.A7,
    Ft: () => r.default,
    Kb: () => u.Kb,
    KI: () => c,
    rB: () => S.rB,
    zj: () => u.zj,
    bq: () => _.bq,
    Ce: () => f.C,
});
var r = n(664111),
    s = n(671897),
    a = n(275664);
n(408121);
var i = n(931853);
n(91034), n(710434), n(634156);
var l = n(876230),
    u = n(831056),
    o = n(64700);
let c = 4e3,
    d = 2e3;
function E(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: r, minSegmentDurationMs: s } = e,
        [a, i] = o.useState(null),
        [u, c] = o.useState(!1),
        [d, E] = o.useState(!1),
        [m, f] = o.useState(!1),
        _ = (0, o.useRef)(null),
        S = (0, o.useRef)(Date.now()),
        p = (0, o.useRef)(!1),
        v = (0, o.useCallback)(
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
        g = (0, o.useCallback)(() => {
            let e = t();
            if (null != e && d && m) {
                let t = Date.now();
                i({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (p.current = !0);
            }
        }, [t, d, m]),
        h = (0, o.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - S.current < r ||
                e - a.segmentStartSec < s / 1e3 ||
                (v({ ...a, endTimeMs: n, segmentEndSec: e }),
                i({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (S.current = n));
        }, [a, v, r, s, t]);
    (0, o.useEffect)(() => {
        (d && m) || (i(null), (p.current = !1));
    }, [d, m]),
        (0, o.useEffect)(() => {
            if (u && d && m)
                p.current || g(),
                    (_.current = window.setInterval(() => {
                        h();
                    }, 200));
            else {
                let e = t();
                if (null != a && null != e) {
                    let t = Date.now();
                    e - a.segmentStartSec > 0.2 && v({ ...a, endTimeMs: t, segmentEndSec: e });
                }
                i(null), (p.current = !1), null != _.current && (clearInterval(_.current), (_.current = null));
            }
            return () => {
                null != _.current && (clearInterval(_.current), (_.current = null));
            };
        }, [u, d, m, a, h, v, g, t]);
    let C = (0, o.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                e - a.segmentStartSec > 0.2 && v({ ...a, endTimeMs: t, segmentEndSec: e }), i(null), (p.current = !1);
            }
        }, [a, v, t]),
        A = (0, o.useRef)(C);
    A.current = C;
    let x = (0, o.useCallback)((e, t) => {
            switch (e) {
                case l.Q6.PLAYING:
                    c(!0);
                    break;
                case l.Q6.PAUSED:
                case l.Q6.ENDED:
                    A.current(), c(!1);
            }
        }, []),
        D = (0, o.useCallback)((e) => {
            E(!0);
        }, []);
    return {
        handlePlayerStateChange: x,
        handleLoadEnd: D,
        handleFirstFrame: (0, o.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, o.useCallback)(() => {
            A.current();
        }, []),
    };
}
var m = n(801209),
    f = n(984212),
    _ = n(739416),
    S = n(61491);
n(645577);
