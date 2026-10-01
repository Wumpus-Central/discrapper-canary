t.d(n, {
    nY: () => i.nY,
    OH: () => i.OH,
    zZ: () => l.A,
    DQ: () => c.A,
    uI: () => r.Ay,
    lx: () => i.lx,
    Yr: () => S,
    KP: () => i.KP,
    C1: () => h.A,
    pK: () => i.pK,
    _4: () => o,
    O7: () => x.O7,
    xx: () => a.xx,
    P8: () => f.A,
    A7: () => x.A7,
    Ft: () => s.default,
    Kb: () => i.Kb,
    KI: () => d,
    rB: () => j.rB,
    B8: () => a.B8,
    zj: () => i.zj,
    bq: () => x.bq,
    Ce: () => g.C,
});
var s = t(266546),
    l = t(671897),
    r = t(275664),
    a = t(565164);
t(408121);
var c = t(931853);
(t(246047), t(91034), t(710434), t(634156));
var u = t(876230),
    i = t(831056),
    m = t(582128);
let d = 4e3,
    o = 2e3;
function S(e) {
    let { getCurrentVideoTime: n, onAnalytics: t, emitIntervalMs: s, minSegmentDurationMs: l } = e,
        [r, a] = m.useState(null),
        [c, i] = m.useState(!1),
        [d, o] = m.useState(!1),
        [S, f] = m.useState(!1),
        g = (0, m.useRef)(null),
        x = (0, m.useRef)(Date.now()),
        h = (0, m.useRef)(!1),
        j = (0, m.useCallback)(
            (e) => {
                e.segmentEndSec < e.segmentStartSec ||
                    t({
                        start_time: e.startTimeMs,
                        end_time: e.endTimeMs,
                        duration: e.endTimeMs - e.startTimeMs,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                    });
            },
            [t],
        ),
        b = (0, m.useCallback)(() => {
            let e = n();
            if (null != e && d && S) {
                let n = Date.now();
                (a({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }), (h.current = !0));
            }
        }, [n, d, S]),
        v = (0, m.useCallback)(() => {
            let e = n();
            if (null == e || null == r) return;
            let t = Date.now();
            t - x.current < s ||
                e - r.segmentStartSec < l / 1e3 ||
                (j({ ...r, endTimeMs: t, segmentEndSec: e }),
                a({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }),
                (x.current = t));
        }, [r, j, s, l, n]);
    ((0, m.useEffect)(() => {
        (d && S) || (a(null), (h.current = !1));
    }, [d, S]),
        (0, m.useEffect)(() => {
            if (c && d && S)
                (h.current || b(),
                    (g.current = window.setInterval(() => {
                        v();
                    }, 200)));
            else {
                let e = n();
                if (null != r && null != e) {
                    let n = Date.now();
                    e - r.segmentStartSec > 0.2 && j({ ...r, endTimeMs: n, segmentEndSec: e });
                }
                (a(null), (h.current = !1), null != g.current && (clearInterval(g.current), (g.current = null)));
            }
            return () => {
                null != g.current && (clearInterval(g.current), (g.current = null));
            };
        }, [c, d, S, r, v, j, b, n]));
    let M = (0, m.useCallback)(() => {
            let e = n();
            if (null != r && null != e) {
                let n = Date.now();
                (e - r.segmentStartSec > 0.2 && j({ ...r, endTimeMs: n, segmentEndSec: e }), a(null), (h.current = !1));
            }
        }, [r, j, n]),
        C = (0, m.useRef)(M);
    C.current = M;
    let N = (0, m.useCallback)((e, n) => {
            switch (e) {
                case u.Q6.PLAYING:
                    i(!0);
                    break;
                case u.Q6.PAUSED:
                case u.Q6.ENDED:
                    (C.current(), i(!1));
            }
        }, []),
        k = (0, m.useCallback)((e) => {
            o(!0);
        }, []);
    return {
        handlePlayerStateChange: N,
        handleLoadEnd: k,
        handleFirstFrame: (0, m.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, m.useCallback)(() => {
            C.current();
        }, []),
    };
}
var f = t(23590),
    g = t(984212),
    x = t(739416),
    h = t(920228),
    j = t(61491);
t(645577);
