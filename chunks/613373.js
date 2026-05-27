n.d(t, {
    nY: () => u.nY,
    OH: () => u.OH,
    zZ: () => l.A,
    DQ: () => i.A,
    uI: () => a.Ay,
    lx: () => u.lx,
    Yr: () => m,
    KP: () => u.KP,
    C1: () => v.A,
    pK: () => u.pK,
    _4: () => d,
    O7: () => p.O7,
    P8: () => h.A,
    A7: () => p.A7,
    Ft: () => r.default,
    Kb: () => u.Kb,
    KI: () => c,
    rB: () => x.rB,
    zj: () => u.zj,
    bq: () => p.bq,
    Ce: () => f.C,
});
var r = n(664111),
    l = n(671897),
    a = n(275664);
n(565164), n(408121);
var i = n(931853);
n(91034), n(710434), n(634156);
var s = n(876230),
    u = n(831056),
    o = n(64700);
let c = 4e3,
    d = 2e3;
function m(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: r, minSegmentDurationMs: l } = e,
        [a, i] = o.useState(null),
        [u, c] = o.useState(!1),
        [d, m] = o.useState(!1),
        [h, f] = o.useState(!1),
        p = (0, o.useRef)(null),
        v = (0, o.useRef)(Date.now()),
        x = (0, o.useRef)(!1),
        g = (0, o.useCallback)(
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
        E = (0, o.useCallback)(() => {
            let e = t();
            if (null != e && d && h) {
                let t = Date.now();
                i({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (x.current = !0);
            }
        }, [t, d, h]),
        b = (0, o.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - v.current < r ||
                e - a.segmentStartSec < l / 1e3 ||
                (g({ ...a, endTimeMs: n, segmentEndSec: e }),
                i({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (v.current = n));
        }, [a, g, r, l, t]);
    (0, o.useEffect)(() => {
        (d && h) || (i(null), (x.current = !1));
    }, [d, h]),
        (0, o.useEffect)(() => {
            if (u && d && h)
                x.current || E(),
                    (p.current = window.setInterval(() => {
                        b();
                    }, 200));
            else {
                let e = t();
                if (null != a && null != e) {
                    let t = Date.now();
                    e - a.segmentStartSec > 0.2 && g({ ...a, endTimeMs: t, segmentEndSec: e });
                }
                i(null), (x.current = !1), null != p.current && (clearInterval(p.current), (p.current = null));
            }
            return () => {
                null != p.current && (clearInterval(p.current), (p.current = null));
            };
        }, [u, d, h, a, b, g, E, t]);
    let S = (0, o.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                e - a.segmentStartSec > 0.2 && g({ ...a, endTimeMs: t, segmentEndSec: e }), i(null), (x.current = !1);
            }
        }, [a, g, t]),
        w = (0, o.useRef)(S);
    w.current = S;
    let C = (0, o.useCallback)((e, t) => {
            switch (e) {
                case s.Q6.PLAYING:
                    c(!0);
                    break;
                case s.Q6.PAUSED:
                case s.Q6.ENDED:
                    w.current(), c(!1);
            }
        }, []),
        N = (0, o.useCallback)((e) => {
            m(!0);
        }, []);
    return {
        handlePlayerStateChange: C,
        handleLoadEnd: N,
        handleFirstFrame: (0, o.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, o.useCallback)(() => {
            w.current();
        }, []),
    };
}
var h = n(23590),
    f = n(984212),
    p = n(739416),
    v = n(920228),
    x = n(61491);
n(645577);
