var i = n(582128),
    s = n(451988),
    a = n(811091),
    l = n(820672);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = null != e ? a.default.extractTimestamp(e) + l.M : null,
                n = i.useCallback(
                    (e) => {
                        if (null == t) return () => {};
                        let n = new s.Ep();
                        return (
                            !(function i() {
                                let s = t - Date.now();
                                s > 0 ? n.start(s, i) : e();
                            })(),
                            () => n.stop()
                        );
                    },
                    [t],
                );
            return i.useSyncExternalStore(n, () => null != t && t <= Date.now());
        },
    },
);
