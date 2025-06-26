n.d(t, { Z: () => c }), n(539854), n(388685), n(642613);
var i = n(73800),
    l = n(911969),
    r = n(675478),
    o = n(358085),
    a = n(761122);
function c(e) {
    return (
        r.DZ.loadIfNecessary(),
        i.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return n.sort((e, n) => (t.findIndex((t) => t === e) < t.findIndex((e) => e === n) ? -1 : 1)), s(e, n);
        }, [e])
    );
}
let s = (e, t) => {
    let n = [...e],
        i = 0;
    return (
        t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = n[t];
                n.splice(t, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]), ++i;
            }
        }),
        n
            .map((e, t) => [e, t])
            .filter((e) => {
                var t, n;
                let [i] = e,
                    r = null == (n = i.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, a.Z)((0, o.getOS)())]) ? void 0 : t.label_type;
                return !!r && (r === l.ww.NEW || r === l.ww.UPDATED);
            })
            .forEach((e) => {
                let [t, i] = e,
                    l = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : i;
                if (l < i) {
                    let e = n[i];
                    n.splice(i, 1), (n = [...n.slice(0, l), e, ...n.slice(l)]);
                }
            }),
        n
    );
};
