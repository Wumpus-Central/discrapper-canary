t.d(e, { n0: () => i });
let o = new Set();
function i(n) {
    let { getImpressionId: e, onEmit: t, initialWatchedSeconds: i = 0, thresholdSeconds: l = 5 } = n,
        r = Math.max(0, i),
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
            let { positionSeconds: e, durationSeconds: i, isPlaying: x } = n,
                h = d();
            if (null == h) return void c();
            if ((null != s && s !== h && ((r = 0), c()), (s = h), !o.has(h) && !u)) {
                if (!x) return void c();
                if (null != a) {
                    let n = e - a;
                    n > 0 && n <= 1.5 && (r += n);
                }
                ((a = e),
                    r < l ||
                        o.has(h) ||
                        u ||
                        ((u = !0),
                        Promise.resolve(
                            t({ video_watch_seconds: r, video_position_seconds: e, video_duration_seconds: i }),
                        )
                            .then(() => {
                                o.add(h);
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
            return u || (null != n && o.has(n));
        },
    };
}
