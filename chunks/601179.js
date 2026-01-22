n.d(t, { A: () => o }), n(896048), n(321073);
var r = n(64700),
    i = n(85109),
    a = n(470654);
function s() {
    return i.A.getSavedMessages().map((e) => e.saveData);
}
function o() {
    let [e, t] = r.useState(s),
        n = r.useRef(i.A.getIsStale());
    return (
        r.useEffect(() => {
            let e = i.A.getLastChanged();
            function r() {
                let r = i.A.getLastChanged();
                if (e !== r) {
                    if (((e = r), n.current && !i.A.getIsStale())) {
                        (n.current = !1), t(s());
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(i.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                i.A.addChangeListener(r),
                () => {
                    i.A.removeChangeListener(r);
                }
            );
        }, []),
        (0, a.A)(),
        e
    );
}
