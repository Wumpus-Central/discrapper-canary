let i = new Set();
t.d(
    n,
    {},
    {
        n0: function (e) {
            let { getImpressionId: n, onEmit: t, initialWatchedSeconds: l = 0, thresholdSeconds: a = 5 } = e,
                o = Math.max(0, l),
                r = null,
                s = null,
                d = !1;
            function u() {
                let e = n();
                return null != e && e.length > 0 ? e : null;
            }
            function c() {
                r = null;
            }
            return {
                onProgress(e) {
                    let { positionSeconds: n, durationSeconds: l, isPlaying: x } = e,
                        h = u();
                    if (null == h) return void c();
                    if ((null != s && s !== h && ((o = 0), c()), (s = h), !i.has(h) && !d)) {
                        if (!x) return void c();
                        if (null != r) {
                            let e = n - r;
                            e > 0 && e <= 1.5 && (o += e);
                        }
                        ((r = n),
                            o < a ||
                                i.has(h) ||
                                d ||
                                ((d = !0),
                                Promise.resolve(
                                    t({ video_watch_seconds: o, video_position_seconds: n, video_duration_seconds: l }),
                                )
                                    .then(() => {
                                        i.add(h);
                                    })
                                    .catch(() => {})
                                    .finally(() => {
                                        d = !1;
                                    })));
                    }
                },
                pause: c,
                getWatchedSeconds: () => o,
                hasEmitted: () => {
                    let e = u();
                    return d || (null != e && i.has(e));
                },
            };
        },
    },
);
