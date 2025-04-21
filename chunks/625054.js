n.d(t, { Z: () => s });
var r = n(525654),
    i = n.n(r),
    l = n(643191);
let s = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize
            }),
            e({
                browser: {
                    name: i().name,
                    version: i().version
                },
                os: {
                    name: i().os.family,
                    version: i().os.version
                },
                memory: t
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - l.mb
};
