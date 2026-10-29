t.d(e, { n0: () => l });
let i = new Set();
function l(n) {
    let { getImpressionId: e, onEmit: t, initialWatchedSeconds: l = 0, thresholdSeconds: o = 5 } = n,
        r = Math.max(0, l),
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
            let { positionSeconds: e, durationSeconds: l, isPlaying: x } = n,
                h = d();
            if (null == h) return void c();
            if ((null != s && s !== h && ((r = 0), c()), (s = h), !i.has(h) && !u)) {
                if (!x) return void c();
                if (null != a) {
                    let n = e - a;
                    n > 0 && n <= 1.5 && (r += n);
                }
                ((a = e),
                    r < o ||
                        i.has(h) ||
                        u ||
                        ((u = !0),
                        Promise.resolve(
                            t({ video_watch_seconds: r, video_position_seconds: e, video_duration_seconds: l }),
                        )
                            .then(() => {
                                i.add(h);
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
            return u || (null != n && i.has(n));
        },
    };
}
