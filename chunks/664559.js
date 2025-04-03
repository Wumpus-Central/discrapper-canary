n.d(t, { Z: () => o }), n(47120), n(653041);
var r = n(192379),
    i = n(768943),
    a = n(429828);
function l() {
    return i.Z.getSavedMessages().map((e) => e.saveData);
}
function o() {
    let [e, t] = r.useState(l),
        n = r.useRef(i.Z.getIsStale());
    return (
        r.useEffect(() => {
            let e = i.Z.getLastChanged();
            function r() {
                let r = i.Z.getLastChanged();
                if (e !== r) {
                    if (((e = r), n.current && !i.Z.getIsStale())) {
                        (n.current = !1), t(l());
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(i.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                i.Z.addChangeListener(r),
                () => {
                    i.Z.removeChangeListener(r);
                }
            );
        }, []),
        (0, a.Z)(),
        e
    );
}
