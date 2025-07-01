(n.d(t, { Z: () => s }), n(539854), n(388685), n(642613));
var l = n(73800),
    i = n(911969),
    r = n(675478),
    a = n(358085),
    o = n(761122);
function s(e) {
    return (
        r.DZ.loadIfNecessary(),
        l.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return (n.sort((e, n) => (t.findIndex((t) => t === e) < t.findIndex((e) => e === n) ? -1 : 1)), c(e, n));
        }, [e])
    );
}
let c = (e, t) => {
    let n = [...e],
        l = 0;
    return (
        t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = n[t];
                (n.splice(t, 1), (n = [...n.slice(0, l), e, ...n.slice(l)]), ++l);
            }
        }),
        n
            .map((e, t) => [e, t])
            .filter((e) => {
                var t, n;
                let [l] = e,
                    r = null == (n = l.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, o.Z)((0, a.getOS)())]) ? void 0 : t.label_type;
                return !!r && (r === i.ww.NEW || r === i.ww.UPDATED);
            })
            .forEach((e) => {
                let [t, l] = e,
                    i = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
                if (i < l) {
                    let e = n[l];
                    (n.splice(l, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]));
                }
            }),
        n
    );
};
