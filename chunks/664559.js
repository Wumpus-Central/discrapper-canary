(r.d(t, { Z: () => i }), r(388685), r(539854));
var n = r(73800),
    s = r(768943),
    l = r(429828);
function a() {
    return s.Z.getSavedMessages().map((e) => e.saveData);
}
function i() {
    let [e, t] = n.useState(a),
        r = n.useRef(s.Z.getIsStale());
    return (
        n.useEffect(() => {
            let e = s.Z.getLastChanged();
            function n() {
                let n = s.Z.getLastChanged();
                if (e !== n) {
                    if (((e = n), r.current && !s.Z.getIsStale())) {
                        ((r.current = !1), t(a()));
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            r = new Map(s.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let n of e) r.has(n.messageId) ? r.delete(n.messageId) : t.splice(t.indexOf(n), 1);
                        for (let e of r.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                s.Z.addChangeListener(n),
                () => {
                    s.Z.removeChangeListener(n);
                }
            );
        }, []),
        (0, l.Z)(),
        e
    );
}
