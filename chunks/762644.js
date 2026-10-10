n.d(e, { A: () => o });
var i = n(582128),
    s = n(451988),
    a = n(935208),
    l = n(820672);
function o(t) {
    let e = null != t ? a.default.extractTimestamp(t) + l.M : null,
        n = i.useCallback(
            (t) => {
                if (null == e) return () => {};
                let n = new s.Ep();
                return (
                    !(function i() {
                        let s = e - Date.now();
                        s > 0 ? n.start(s, i) : t();
                    })(),
                    () => n.stop()
                );
            },
            [e],
        );
    return i.useSyncExternalStore(n, () => null != e && e <= Date.now());
}
