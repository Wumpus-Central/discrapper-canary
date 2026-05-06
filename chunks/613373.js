n.d(t, {
    nY: () => u.nY,
    OH: () => u.OH,
    zZ: () => l.A,
    DQ: () => a.A,
    uI: () => s.Ay,
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
    l = n(671897),
    s = n(275664);
n(408121);
var a = n(931853);
n(91034), n(710434), n(634156);
var i = n(876230),
    u = n(831056),
    o = n(64700);
let c = 4e3,
    d = 2e3;
function E(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: r, minSegmentDurationMs: l } = e,
        [s, a] = o.useState(null),
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
        C = (0, o.useCallback)(() => {
            let e = t();
            if (null != e && d && m) {
                let t = Date.now();
                a({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (p.current = !0);
            }
        }, [t, d, m]),
        g = (0, o.useCallback)(() => {
            let e = t();
            if (null == e || null == s) return;
            let n = Date.now();
            n - S.current < r ||
                e - s.segmentStartSec < l / 1e3 ||
                (v({ ...s, endTimeMs: n, segmentEndSec: e }),
                a({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (S.current = n));
        }, [s, v, r, l, t]);
    (0, o.useEffect)(() => {
        (d && m) || (a(null), (p.current = !1));
    }, [d, m]),
        (0, o.useEffect)(() => {
            if (u && d && m)
                p.current || C(),
                    (_.current = window.setInterval(() => {
                        g();
                    }, 200));
            else {
                let e = t();
                if (null != s && null != e) {
                    let t = Date.now();
                    e - s.segmentStartSec > 0.2 && v({ ...s, endTimeMs: t, segmentEndSec: e });
                }
                a(null), (p.current = !1), null != _.current && (clearInterval(_.current), (_.current = null));
            }
            return () => {
                null != _.current && (clearInterval(_.current), (_.current = null));
            };
        }, [u, d, m, s, g, v, C, t]);
    let A = (0, o.useCallback)(() => {
            let e = t();
            if (null != s && null != e) {
                let t = Date.now();
                e - s.segmentStartSec > 0.2 && v({ ...s, endTimeMs: t, segmentEndSec: e }), a(null), (p.current = !1);
            }
        }, [s, v, t]),
        h = (0, o.useRef)(A);
    h.current = A;
    let D = (0, o.useCallback)((e, t) => {
            switch (e) {
                case i.Q6.PLAYING:
                    c(!0);
                    break;
                case i.Q6.PAUSED:
                case i.Q6.ENDED:
                    h.current(), c(!1);
            }
        }, []),
        x = (0, o.useCallback)((e) => {
            E(!0);
        }, []);
    return {
        handlePlayerStateChange: D,
        handleLoadEnd: x,
        handleFirstFrame: (0, o.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, o.useCallback)(() => {
            h.current();
        }, []),
    };
}
var m = n(23590),
    f = n(984212),
    _ = n(739416),
    S = n(61491);
n(645577);
