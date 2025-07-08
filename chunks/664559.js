(n.d(t, { Z: () => i }), n(388685), n(539854));
var r = n(73800),
    l = n(768943),
    s = n(429828);
function a() {
    return l.Z.getSavedMessages().map((e) => e.saveData);
}
function i() {
    let [e, t] = r.useState(a),
        n = r.useRef(l.Z.getIsStale());
    return (
        r.useEffect(() => {
            let e = l.Z.getLastChanged();
            function r() {
                let r = l.Z.getLastChanged();
                if (e !== r) {
                    if (((e = r), n.current && !l.Z.getIsStale())) {
                        ((n.current = !1), t(a()));
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(l.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                l.Z.addChangeListener(r),
                () => {
                    l.Z.removeChangeListener(r);
                }
            );
        }, []),
        (0, s.Z)(),
        e
    );
}
