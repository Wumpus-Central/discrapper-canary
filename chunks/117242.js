n.d(t, { Z: () => a }), n(388685);
var r = n(647438);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function a(e) {
    let {
            getCurrentVideoTime: t,
            isPlaying: n,
            isMetadataLoaded: a,
            isInitialSeekComplete: i,
            onAnalytics: s,
            emitIntervalMs: c,
            minSegmentDurationMs: u,
        } = e,
        [d, f] = r.useState(null),
        m = (0, r.useRef)(null),
        p = (0, r.useRef)(Date.now()),
        v = (0, r.useRef)(!1),
        C = (0, r.useCallback)(
            (e) => {
                e.segmentEndSec < e.segmentStartSec ||
                    s({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                    });
            },
            [s],
        ),
        E = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && a && i) {
                let t = Date.now();
                f({
                    startTime: t,
                    endTime: t,
                    segmentStartSec: e,
                    segmentEndSec: e,
                }),
                    (v.current = !0);
            }
        }, [t, a, i]),
        _ = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == d) return;
            let n = Date.now();
            !(n - p.current < c) &&
                (e - d.segmentStartSec < u / 1000 ||
                    (C(
                        l(o({}, d), {
                            endTime: n,
                            segmentEndSec: e,
                        }),
                    ),
                    f({
                        startTime: n,
                        endTime: n,
                        segmentStartSec: e,
                        segmentEndSec: e,
                    }),
                    (p.current = n)));
        }, [d, C, c, u, t]);
    return (
        (0, r.useEffect)(() => {
            (a && i) || (f(null), (v.current = !1));
        }, [a, i]),
        (0, r.useEffect)(() => {
            if (n && a && i)
                v.current || E(),
                    (m.current = window.setInterval(() => {
                        _();
                    }, 200));
            else {
                let e = t();
                if (null != d && null != e) {
                    let t = Date.now();
                    e - d.segmentStartSec > 0.2 &&
                        C(
                            l(o({}, d), {
                                endTime: t,
                                segmentEndSec: e,
                            }),
                        );
                }
                f(null), (v.current = !1), null != m.current && (clearInterval(m.current), (m.current = null));
            }
            return () => {
                null != m.current && (clearInterval(m.current), (m.current = null));
            };
        }, [n, a, i, d, _, C, E, t]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                let e = t();
                if (null != d && null != e) {
                    let t = Date.now();
                    e - d.segmentStartSec > 0.2 &&
                        C(
                            l(o({}, d), {
                                endTime: t,
                                segmentEndSec: e,
                            }),
                        ),
                        f(null),
                        (v.current = !1);
                }
            }, [d, C, t]),
            isInitialized: v.current,
        }
    );
}
