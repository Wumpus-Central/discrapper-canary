"use strict";
n.d(t, {
    nY: () => d.nY,
    OH: () => d.OH,
    zZ: () => r.A,
    DQ: () => l.A,
    uI: () => a.Ay,
    lx: () => d.lx,
    Yr: () => E,
    KP: () => d.KP,
    C1: () => f.A,
    pK: () => d.pK,
    _4: () => _,
    O7: () => I.O7,
    xx: () => s.xx,
    P8: () => A.A,
    A7: () => I.A7,
    Ft: () => i.default,
    Kb: () => d.Kb,
    KI: () => u,
    rB: () => p.rB,
    B8: () => s.B8,
    zj: () => d.zj,
    bq: () => I.bq,
    Ce: () => h.C,
});
var i = n(664111),
    r = n(671897),
    a = n(275664),
    s = n(565164);
n(408121);
var l = n(931853);
n(91034), n(710434), n(634156);
var o = n(876230),
    d = n(831056),
    c = n(64700);
let u = 4e3,
    _ = 2e3;
function E(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: i, minSegmentDurationMs: r } = e,
        [a, s] = c.useState(null),
        [l, d] = c.useState(!1),
        [u, _] = c.useState(!1),
        [E, A] = c.useState(!1),
        h = (0, c.useRef)(null),
        I = (0, c.useRef)(Date.now()),
        f = (0, c.useRef)(!1),
        p = (0, c.useCallback)(
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
        T = (0, c.useCallback)(() => {
            let e = t();
            if (null != e && u && E) {
                let t = Date.now();
                s({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (f.current = !0);
            }
        }, [t, u, E]),
        m = (0, c.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - I.current < i ||
                e - a.segmentStartSec < r / 1e3 ||
                (p({ ...a, endTimeMs: n, segmentEndSec: e }),
                s({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (I.current = n));
        }, [a, p, i, r, t]);
    (0, c.useEffect)(() => {
        (u && E) || (s(null), (f.current = !1));
    }, [u, E]),
        (0, c.useEffect)(() => {
            if (l && u && E)
                f.current || T(),
                    (h.current = window.setInterval(() => {
                        m();
                    }, 200));
            else {
                let e = t();
                if (null != a && null != e) {
                    let t = Date.now();
                    e - a.segmentStartSec > 0.2 && p({ ...a, endTimeMs: t, segmentEndSec: e });
                }
                s(null), (f.current = !1), null != h.current && (clearInterval(h.current), (h.current = null));
            }
            return () => {
                null != h.current && (clearInterval(h.current), (h.current = null));
            };
        }, [l, u, E, a, m, p, T, t]);
    let g = (0, c.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                e - a.segmentStartSec > 0.2 && p({ ...a, endTimeMs: t, segmentEndSec: e }), s(null), (f.current = !1);
            }
        }, [a, p, t]),
        S = (0, c.useRef)(g);
    S.current = g;
    let N = (0, c.useCallback)((e, t) => {
            switch (e) {
                case o.Q6.PLAYING:
                    d(!0);
                    break;
                case o.Q6.PAUSED:
                case o.Q6.ENDED:
                    S.current(), d(!1);
            }
        }, []),
        C = (0, c.useCallback)((e) => {
            _(!0);
        }, []);
    return {
        handlePlayerStateChange: N,
        handleLoadEnd: C,
        handleFirstFrame: (0, c.useCallback)((e) => {
            A(!0);
        }, []),
        handleSeek: (0, c.useCallback)(() => {
            S.current();
        }, []),
    };
}
var A = n(23590),
    h = n(984212),
    I = n(739416),
    f = n(920228),
    p = n(61491);
n(645577);
