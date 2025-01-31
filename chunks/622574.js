a.d(e, { N: () => r });
let r = (t, e, a) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            let r = new PerformanceObserver((t) => {
                Promise.resolve().then(() => {
                    e(t.getEntries());
                });
            });
            return (
                r.observe(
                    Object.assign(
                        {
                            type: t,
                            buffered: !0
                        },
                        a || {}
                    )
                ),
                r
            );
        }
    } catch (t) {}
};
