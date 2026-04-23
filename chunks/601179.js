t.d(s, { A: () => r }), t(321073);
var a = t(64700),
    n = t(85109),
    l = t(470654);
function i() {
    return n.A.getSavedMessages().map((e) => e.saveData);
}
function r() {
    let [e, s] = a.useState(i),
        t = a.useRef(n.A.getIsStale());
    return (
        a.useEffect(() => {
            let e = n.A.getLastChanged();
            function a() {
                let a = n.A.getLastChanged();
                if (e !== a) {
                    if (((e = a), t.current && !n.A.getIsStale())) {
                        (t.current = !1), s(i());
                        return;
                    }
                    s((e) => {
                        let s = [...e],
                            t = new Map(n.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let a of e) t.has(a.messageId) ? t.delete(a.messageId) : s.splice(s.indexOf(a), 1);
                        for (let e of t.values()) s.push(e.saveData);
                        return s;
                    });
                }
            }
            return (
                n.A.addChangeListener(a),
                () => {
                    n.A.removeChangeListener(a);
                }
            );
        }, []),
        (0, l.A)(),
        e
    );
}
