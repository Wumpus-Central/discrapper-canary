n.d(t, { Z: () => i }), n(47120);
var r = n(192379);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
function i(e) {
    let { getCurrentVideoTime: t, isPlaying: n, isMetadataLoaded: i, isInitialSeekComplete: s, onAnalytics: a, emitIntervalMs: c, minSegmentDurationMs: u } = e,
        [d, m] = r.useState(null),
        p = (0, r.useRef)(null),
        f = (0, r.useRef)(Date.now()),
        v = (0, r.useRef)(!1),
        g = (0, r.useCallback)(
            (e) => {
                !(e.segmentEndSec < e.segmentStartSec) &&
                    a({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec
                    });
            },
            [a]
        ),
        E = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && i && s) {
                let t = Date.now();
                m({
                    startTime: t,
                    endTime: t,
                    segmentStartSec: e,
                    segmentEndSec: e
                }),
                    (v.current = !0);
            }
        }, [t, i, s]),
        b = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == d) return;
            let n = Date.now();
            !(n - f.current < c) &&
                !(e - d.segmentStartSec < u / 1000) &&
                (g(
                    l(o({}, d), {
                        endTime: n,
                        segmentEndSec: e
                    })
                ),
                m({
                    startTime: n,
                    endTime: n,
                    segmentStartSec: e,
                    segmentEndSec: e
                }),
                (f.current = n));
        }, [d, g, c, u, t]);
    return (
        (0, r.useEffect)(() => {
            (i && s) || (m(null), (v.current = !1));
        }, [i, s]),
        (0, r.useEffect)(() => {
            if (n && i && s)
                v.current || E(),
                    (p.current = window.setInterval(() => {
                        b();
                    }, 200));
            else {
                let e = t();
                if (null != d && null != e) {
                    let t = Date.now();
                    e - d.segmentStartSec > 0.2 &&
                        g(
                            l(o({}, d), {
                                endTime: t,
                                segmentEndSec: e
                            })
                        );
                }
                m(null), (v.current = !1), null != p.current && (clearInterval(p.current), (p.current = null));
            }
            return () => {
                null != p.current && (clearInterval(p.current), (p.current = null));
            };
        }, [n, i, s, d, b, g, E, t]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                let e = t();
                if (null != d && null != e) {
                    let t = Date.now();
                    e - d.segmentStartSec > 0.2 &&
                        g(
                            l(o({}, d), {
                                endTime: t,
                                segmentEndSec: e
                            })
                        ),
                        m(null),
                        (v.current = !1);
                }
            }, [d, g, t]),
            isInitialized: v.current
        }
    );
}
