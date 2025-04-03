n.d(t, { Z: () => c }), n(653041), n(47120), n(230036);
var i = n(192379),
    r = n(911969),
    l = n(675478),
    a = n(358085),
    o = n(761122);
function c(e) {
    return (
        l.DZ.loadIfNecessary(),
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
                    l = null == (n = i.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, o.Z)((0, a.getOS)())]) ? void 0 : t.label_type;
                return !!l && (l === r.ww.NEW || l === r.ww.UPDATED);
            })
            .forEach((e) => {
                let [t, i] = e,
                    r = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : i;
                if (r < i) {
                    let e = n[i];
                    n.splice(i, 1), (n = [...n.slice(0, r), e, ...n.slice(r)]);
                }
            }),
        n
    );
};
