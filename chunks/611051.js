n.d(t, {
    nY: () => u.nY,
    OH: () => u.OH,
    zZ: () => s.A,
    DQ: () => l.A,
    uI: () => a.Ay,
    lx: () => u.lx,
    Yr: () => E,
    KP: () => u.KP,
    pK: () => u.pK,
    _4: () => d,
    O7: () => S.O7,
    P8: () => f,
    A7: () => S.A7,
    Ft: () => r.default,
    Kb: () => u.Kb,
    KI: () => c,
    rB: () => p.rB,
    zj: () => u.zj,
    bq: () => S.bq,
    Ce: () => _.C,
});
var r = n(664111),
    s = n(671897),
    a = n(513986);
n(408121);
var l = n(931853);
n(91034), n(710434), n(634156);
var i = n(876230),
    u = n(831056),
    o = n(64700);
let c = 4e3,
    d = 2e3;
function E(e) {
    let { getCurrentVideoTime: t, onAnalytics: n, emitIntervalMs: r, minSegmentDurationMs: s } = e,
        [a, l] = o.useState(null),
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
                l({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }), (p.current = !0);
            }
        }, [t, d, m]),
        h = (0, o.useCallback)(() => {
            let e = t();
            if (null == e || null == a) return;
            let n = Date.now();
            n - S.current < r ||
                e - a.segmentStartSec < s / 1e3 ||
                (v({ ...a, endTimeMs: n, segmentEndSec: e }),
                l({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }),
                (S.current = n));
        }, [a, v, r, s, t]);
    (0, o.useEffect)(() => {
        (d && m) || (l(null), (p.current = !1));
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
                l(null), (p.current = !1), null != _.current && (clearInterval(_.current), (_.current = null));
            }
            return () => {
                null != _.current && (clearInterval(_.current), (_.current = null));
            };
        }, [u, d, m, a, h, v, g, t]);
    let C = (0, o.useCallback)(() => {
            let e = t();
            if (null != a && null != e) {
                let t = Date.now();
                e - a.segmentStartSec > 0.2 && v({ ...a, endTimeMs: t, segmentEndSec: e }), l(null), (p.current = !1);
            }
        }, [a, v, t]),
        A = (0, o.useRef)(C);
    A.current = C;
    let x = (0, o.useCallback)((e, t) => {
            switch (e) {
                case i.Q6.PLAYING:
                    c(!0);
                    break;
                case i.Q6.PAUSED:
                case i.Q6.ENDED:
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
var m = n(297752);
function f(e) {
    let { videoRef: t, hlsRef: n, enabled: r, contentMetadata: s, isHls: a, debug: l } = e,
        i = o.useRef(null);
    o.useEffect(() => {
        if (!r || null == t.current || (a && null == n.current)) return;
        let e = {
            debug: l ?? !1,
            videoElement: t.current,
            hlsInstance: a ? (n.current ?? void 0) : void 0,
            feature: s.contentType,
            contentMetadata: s,
        };
        return (
            (i.current = new m.Gb(e)),
            i.current.initialize(),
            () => {
                null != i.current && (i.current.endSession(), i.current.destroy(), (i.current = null));
            }
        );
    }, [r, a, n, t, s, l]);
}
var _ = n(984212),
    S = n(739416),
    p = n(61491);
n(645577);
