n.d(t, { Z: () => s }), n(47120), n(653041);
var i = n(192379),
    l = n(768943),
    a = n(429828);
function r() {
    return l.Z.getSavedMessages().map((e) => e.saveData);
}
function s() {
    let [e, t] = i.useState(r),
        n = i.useRef(l.Z.getIsStale());
    return (
        i.useEffect(() => {
            let e = l.Z.getLastChanged();
            function i() {
                let i = l.Z.getLastChanged();
                if (e !== i) {
                    if (((e = i), n.current && !l.Z.getIsStale())) {
                        (n.current = !1), t(r());
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(l.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let i of e) n.has(i.messageId) ? n.delete(i.messageId) : t.splice(t.indexOf(i), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                l.Z.addChangeListener(i),
                () => {
                    l.Z.removeChangeListener(i);
                }
            );
        }, []),
        (0, a.Z)(),
        e
    );
}
