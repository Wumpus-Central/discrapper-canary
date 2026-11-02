n.d(t, {
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
var s = n(266546);
n(530567);
var l = n(671897),
    r = n(275664),
    a = n(565164);
n(408121);
var c = n(931853);
(n(246047), n(91034), n(710434), n(634156));
var u = n(876230),
    i = n(831056),
    m = n(582128);
let d = 4e3,
    o = 2e3;
function S(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: s, minSegmentDurationMs: l } = e,
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
        v = (0, m.useCallback)(() => {
            let e = t();
            if (null != e && d && S) {
                let t = Date.now();
                (a({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (h.current = !0));
            }
        }, [t, d, S]),
        b = (0, m.useCallback)(() => {
            let e = t();
            if (null == e || null == r) return;
            let n = Date.now();
            n - x.current < s ||
                e - r.segmentStartSec < l / 1e3 ||
                (j({ ...r, endTimeMs: n, segmentEndSec: e }),
                a({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (x.current = n));
        }, [r, j, s, l, t]);
    ((0, m.useEffect)(() => {
        (d && S) || (a(null), (h.current = !1));
    }, [d, S]),
        (0, m.useEffect)(() => {
            if (c && d && S)
                (h.current || v(),
                    (g.current = window.setInterval(() => {
                        b();
                    }, 200)));
            else {
                let e = t();
                if (null != r && null != e) {
                    let t = Date.now();
                    e - r.segmentStartSec > 0.2 && j({ ...r, endTimeMs: t, segmentEndSec: e });
                }
                (a(null), (h.current = !1), null != g.current && (clearInterval(g.current), (g.current = null)));
            }
            return () => {
                null != g.current && (clearInterval(g.current), (g.current = null));
            };
        }, [c, d, S, r, b, j, v, t]));
    let M = (0, m.useCallback)(() => {
            let e = t();
            if (null != r && null != e) {
                let t = Date.now();
                (e - r.segmentStartSec > 0.2 && j({ ...r, endTimeMs: t, segmentEndSec: e }), a(null), (h.current = !1));
            }
        }, [r, j, t]),
        C = (0, m.useRef)(M);
    C.current = M;
    let N = (0, m.useCallback)((e, t) => {
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
var f = n(23590),
    g = n(984212),
    x = n(739416),
    h = n(920228),
    j = n(61491);
n(645577);
