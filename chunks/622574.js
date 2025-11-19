_.d(e, { N: () => a });
let a = (t, e, _) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            let a = new PerformanceObserver((t) => {
                Promise.resolve().then(() => {
                    e(t.getEntries());
                });
            });
            return (
                a.observe(
                    Object.assign(
                        {
                            type: t,
                            buffered: !0,
                        },
                        _ || {},
                    ),
                ),
                a
            );
        }
    } catch (t) {}
};
