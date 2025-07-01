(n.d(t, { Z: () => i }), n(388685), n(539854));
var r = n(73800),
    s = n(768943),
    l = n(429828);
function a() {
    return s.Z.getSavedMessages().map((e) => e.saveData);
}
function i() {
    let [e, t] = r.useState(a),
        n = r.useRef(s.Z.getIsStale());
    return (
        r.useEffect(() => {
            let e = s.Z.getLastChanged();
            function r() {
                let r = s.Z.getLastChanged();
                if (e !== r) {
                    if (((e = r), n.current && !s.Z.getIsStale())) {
                        ((n.current = !1), t(a()));
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(s.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                s.Z.addChangeListener(r),
                () => {
                    s.Z.removeChangeListener(r);
                }
            );
        }, []),
        (0, l.Z)(),
        e
    );
}
