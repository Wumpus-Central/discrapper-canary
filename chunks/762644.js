n.d(t, { A: () => r });
var i = n(582128),
    a = n(451988),
    s = n(935208),
    l = n(820672);
function r(e) {
    let t = null != e ? s.default.extractTimestamp(e) + l.M : null,
        n = i.useCallback(
            (e) => {
                if (null == t) return () => {};
                let n = new a.Ep();
                return (
                    !(function i() {
                        let a = t - Date.now();
                        a > 0 ? n.start(a, i) : e();
                    })(),
                    () => n.stop()
                );
            },
            [t],
        );
    return i.useSyncExternalStore(n, () => null != t && t <= Date.now());
}
