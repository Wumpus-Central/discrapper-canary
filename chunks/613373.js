n.d(t, {
    nY: () => a.nY,
    OH: () => a.OH,
    lx: () => a.lx,
    Yr: () => m,
    KP: () => a.KP,
    pK: () => a.pK,
    _4: () => i,
    xx: () => l.xx,
    P8: () => d.A,
    B8: () => l.B8,
    Ft: () => s.default,
    Kb: () => a.Kb,
    KI: () => u,
    rB: () => S.rB,
    zj: () => a.zj,
    bq: () => o.bq,
});
var s = n(944597);
(n(530567), n(671897), n(275664));
var l = n(565164);
(n(408121), n(931853), n(246047), n(91034), n(710434), n(634156));
var r = n(876230),
    a = n(831056),
    c = n(582128);
let u = 4e3,
    i = 2e3;
function m(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: s, minSegmentDurationMs: l } = e,
        [a, u] = c.useState(null),
        [i, m] = c.useState(!1),
        [d, o] = c.useState(!1),
        [S, f] = c.useState(!1),
        x = (0, c.useRef)(null),
        g = (0, c.useRef)(Date.now()),
        h = (0, c.useRef)(!1),
        v = (0, c.useCallback)(
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
        j = (0, c.useCallback)(() => {
            let e = t();
            if (null != e && d && S) {
                let t = Date.now();
                (u({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (h.current = !0));
            }
        }, [t, d, S]),
        b = (0, c.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - g.current < s ||
                e - a.segmentStartSec < l / 1e3 ||
                (v({ ...a, endTimeMs: n, segmentEndSec: e }),
                u({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (g.current = n));
        }, [a, v, s, l, t]);
    ((0, c.useEffect)(() => {
        (d && S) || (u(null), (h.current = !1));
    }, [d, S]),
        (0, c.useEffect)(() => {
            if (i && d && S)
                (h.current || j(),
                    (x.current = window.setInterval(() => {
                        b();
                    }, 200)));
            else {
                let e = t();
                if (null != a && null != e) {
                    let t = Date.now();
                    e - a.segmentStartSec > 0.2 && v({ ...a, endTimeMs: t, segmentEndSec: e });
                }
                (u(null), (h.current = !1), null != x.current && (clearInterval(x.current), (x.current = null)));
            }
            return () => {
                null != x.current && (clearInterval(x.current), (x.current = null));
            };
        }, [i, d, S, a, b, v, j, t]));
    let M = (0, c.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                (e - a.segmentStartSec > 0.2 && v({ ...a, endTimeMs: t, segmentEndSec: e }), u(null), (h.current = !1));
            }
        }, [a, v, t]),
        N = (0, c.useRef)(M);
    N.current = M;
    let k = (0, c.useCallback)((e, t) => {
            switch (e) {
                case r.Q6.PLAYING:
                    m(!0);
                    break;
                case r.Q6.PAUSED:
                case r.Q6.ENDED:
                    (N.current(), m(!1));
            }
        }, []),
        p = (0, c.useCallback)((e) => {
            o(!0);
        }, []);
    return {
        handlePlayerStateChange: k,
        handleLoadEnd: p,
        handleFirstFrame: (0, c.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, c.useCallback)(() => {
            N.current();
        }, []),
    };
}
var d = n(23590);
n(984212);
var o = n(739416);
n(920228);
var S = n(61491);
n(645577);
