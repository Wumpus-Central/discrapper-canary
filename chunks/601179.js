r.d(t, { A: () => i }), r(321073);
var s = r(64700),
    n = r(85109),
    l = r(470654);
function a() {
    return n.A.getSavedMessages().map((e) => e.saveData);
}
function i() {
    let [e, t] = s.useState(a),
        r = s.useRef(n.A.getIsStale());
    return (
        s.useEffect(() => {
            let e = n.A.getLastChanged();
            function s() {
                let s = n.A.getLastChanged();
                if (e !== s) {
                    if (((e = s), r.current && !n.A.getIsStale())) {
                        (r.current = !1), t(a());
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            r = new Map(n.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let s of e) r.has(s.messageId) ? r.delete(s.messageId) : t.splice(t.indexOf(s), 1);
                        for (let e of r.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                n.A.addChangeListener(s),
                () => {
                    n.A.removeChangeListener(s);
                }
            );
        }, []),
        (0, l.A)(),
        e
    );
}
