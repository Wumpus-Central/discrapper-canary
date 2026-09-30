n.d(t, {
    nY: () => o.nY,
    OH: () => o.OH,
    zZ: () => l.A,
    DQ: () => s.A,
    uI: () => a.Ay,
    lx: () => o.lx,
    Yr: () => h,
    KP: () => o.KP,
    C1: () => g.A,
    pK: () => o.pK,
    _4: () => m,
    O7: () => v.O7,
    xx: () => i.xx,
    P8: () => f.A,
    A7: () => v.A7,
    Ft: () => r.default,
    Kb: () => o.Kb,
    KI: () => d,
    rB: () => x.rB,
    B8: () => i.B8,
    zj: () => o.zj,
    bq: () => v.bq,
    Ce: () => p.C,
});
var r = n(266546),
    l = n(671897),
    a = n(275664),
    i = n(565164);
n(408121);
var s = n(931853);
(n(246047), n(91034), n(710434), n(634156));
var u = n(876230),
    o = n(831056),
    c = n(582128);
let d = 4e3,
    m = 2e3;
function h(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: r, minSegmentDurationMs: l } = e,
        [a, i] = c.useState(null),
        [s, o] = c.useState(!1),
        [d, m] = c.useState(!1),
        [h, f] = c.useState(!1),
        p = (0, c.useRef)(null),
        v = (0, c.useRef)(Date.now()),
        g = (0, c.useRef)(!1),
        x = (0, c.useCallback)(
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
            if (null != e && d && h) {
                let t = Date.now();
                (i({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (g.current = !0));
            }
        }, [t, d, h]),
        b = (0, c.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - v.current < r ||
                e - a.segmentStartSec < l / 1e3 ||
                (x({ ...a, endTimeMs: n, segmentEndSec: e }),
                i({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (v.current = n));
        }, [a, x, r, l, t]);
    ((0, c.useEffect)(() => {
        (d && h) || (i(null), (g.current = !1));
    }, [d, h]),
        (0, c.useEffect)(() => {
            if (s && d && h)
                (g.current || E(),
                    (p.current = window.setInterval(() => {
                        b();
                    }, 200)));
            else {
                let e = t();
                if (null != a && null != e) {
                    let t = Date.now();
                    e - a.segmentStartSec > 0.2 && x({ ...a, endTimeMs: t, segmentEndSec: e });
                }
                (i(null), (g.current = !1), null != p.current && (clearInterval(p.current), (p.current = null)));
            }
            return () => {
                null != p.current && (clearInterval(p.current), (p.current = null));
            };
        }, [s, d, h, a, b, x, E, t]));
    let S = (0, c.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                (e - a.segmentStartSec > 0.2 && x({ ...a, endTimeMs: t, segmentEndSec: e }), i(null), (g.current = !1));
            }
        }, [a, x, t]),
        C = (0, c.useRef)(S);
    C.current = S;
    let y = (0, c.useCallback)((e, t) => {
            switch (e) {
                case u.Q6.PLAYING:
                    o(!0);
                    break;
                case u.Q6.PAUSED:
                case u.Q6.ENDED:
                    (C.current(), o(!1));
            }
        }, []),
        w = (0, c.useCallback)((e) => {
            m(!0);
        }, []);
    return {
        handlePlayerStateChange: y,
        handleLoadEnd: w,
        handleFirstFrame: (0, c.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, c.useCallback)(() => {
            C.current();
        }, []),
    };
}
var f = n(23590),
    p = n(984212),
    v = n(739416),
    g = n(920228),
    x = n(61491);
n(645577);
