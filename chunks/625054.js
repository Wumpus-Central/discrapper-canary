n.d(t, { Z: () => a });
var i = n(525654),
    r = n.n(i),
    l = n(643191);
let a = {
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
                    name: r().name,
                    version: r().version
                },
                os: {
                    name: r().os.family,
                    version: r().os.version
                },
                memory: t
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - l.mb
};
