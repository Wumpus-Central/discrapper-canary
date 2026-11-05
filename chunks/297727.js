let l = new Set();
t.d(
    e,
    {},
    {
        n0: function (n) {
            let { getImpressionId: e, onEmit: t, initialWatchedSeconds: o = 0, thresholdSeconds: i = 5 } = n,
                r = Math.max(0, o),
                a = null,
                s = null,
                u = !1;
            function d() {
                let n = e();
                return null != n && n.length > 0 ? n : null;
            }
            function c() {
                a = null;
            }
            return {
                onProgress(n) {
                    let { positionSeconds: e, durationSeconds: o, isPlaying: x } = n,
                        h = d();
                    if (null == h) return void c();
                    if ((null != s && s !== h && ((r = 0), c()), (s = h), !l.has(h) && !u)) {
                        if (!x) return void c();
                        if (null != a) {
                            let n = e - a;
                            n > 0 && n <= 1.5 && (r += n);
                        }
                        ((a = e),
                            r < i ||
                                l.has(h) ||
                                u ||
                                ((u = !0),
                                Promise.resolve(
                                    t({ video_watch_seconds: r, video_position_seconds: e, video_duration_seconds: o }),
                                )
                                    .then(() => {
                                        l.add(h);
                                    })
                                    .catch(() => {})
                                    .finally(() => {
                                        u = !1;
                                    })));
                    }
                },
                pause: c,
                getWatchedSeconds: () => r,
                hasEmitted: () => {
                    let n = d();
                    return u || (null != n && l.has(n));
                },
            };
        },
    },
);
