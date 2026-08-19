n.d(t, {
    nY: () => o.nY,
    OH: () => o.OH,
    zZ: () => l.A,
    DQ: () => u.A,
    uI: () => a.Ay,
    lx: () => o.lx,
    Yr: () => f,
    KP: () => o.KP,
    C1: () => x.A,
    pK: () => o.pK,
    _4: () => m,
    O7: () => v.O7,
    xx: () => i.xx,
    P8: () => h.A,
    A7: () => v.A7,
    Ft: () => r.default,
    Kb: () => o.Kb,
    KI: () => d,
    rB: () => g.rB,
    B8: () => i.B8,
    zj: () => o.zj,
    bq: () => v.bq,
    Ce: () => p.C,
});
var r = n(664111),
    l = n(671897),
    a = n(275664),
    i = n(565164);
n(408121);
var u = n(931853);
n(91034), n(710434), n(634156);
var s = n(876230),
    o = n(831056),
    c = n(582128);
let d = 4e3,
    m = 2e3;
function f(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: r, minSegmentDurationMs: l } = e,
        [a, i] = c.useState(null),
        [u, o] = c.useState(!1),
        [d, m] = c.useState(!1),
        [f, h] = c.useState(!1),
        p = (0, c.useRef)(null),
        v = (0, c.useRef)(Date.now()),
        x = (0, c.useRef)(!1),
        g = (0, c.useCallback)(
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
        E = (0, c.useCallback)(() => {
            let e = t();
            if (null != e && d && f) {
                let t = Date.now();
                i({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (x.current = !0);
            }
        }, [t, d, f]),
        b = (0, c.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - v.current < r ||
                e - a.segmentStartSec < l / 1e3 ||
                (g({ ...a, endTimeMs: n, segmentEndSec: e }),
                i({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (v.current = n));
        }, [a, g, r, l, t]);
    (0, c.useEffect)(() => {
        (d && f) || (i(null), (x.current = !1));
    }, [d, f]),
        (0, c.useEffect)(() => {
            if (u && d && f)
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
        }, [u, d, f, a, b, g, E, t]);
    let S = (0, c.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                e - a.segmentStartSec > 0.2 && g({ ...a, endTimeMs: t, segmentEndSec: e }), i(null), (x.current = !1);
            }
        }, [a, g, t]),
        C = (0, c.useRef)(S);
    C.current = S;
    let w = (0, c.useCallback)((e, t) => {
            switch (e) {
                case s.Q6.PLAYING:
                    o(!0);
                    break;
                case s.Q6.PAUSED:
                case s.Q6.ENDED:
                    C.current(), o(!1);
            }
        }, []),
        y = (0, c.useCallback)((e) => {
            m(!0);
        }, []);
    return {
        handlePlayerStateChange: w,
        handleLoadEnd: y,
        handleFirstFrame: (0, c.useCallback)((e) => {
            h(!0);
        }, []),
        handleSeek: (0, c.useCallback)(() => {
            C.current();
        }, []),
    };
}
var h = n(23590),
    p = n(984212),
    v = n(739416),
    x = n(920228),
    g = n(61491);
n(645577);
