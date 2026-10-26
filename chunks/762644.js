n.d(e, { A: () => r });
var i = n(582128),
    a = n(451988),
    l = n(935208),
    s = n(820672);
function r(t) {
    let e = null != t ? l.default.extractTimestamp(t) + s.M : null,
        n = i.useCallback(
            (t) => {
                if (null == e) return () => {};
                let n = new a.Ep();
                return (
                    !(function i() {
                        let a = e - Date.now();
                        a > 0 ? n.start(a, i) : t();
                    })(),
                    () => n.stop()
                );
            },
            [e],
        );
    return i.useSyncExternalStore(n, () => null != e && e <= Date.now());
}
