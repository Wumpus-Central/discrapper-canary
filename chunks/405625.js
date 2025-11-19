n.d(t, { Z: () => l }), n(539854), n(388685), n(642613);
var r = n(473749),
    i = n(911969),
    a = n(675478),
    o = n(358085),
    s = n(761122);
function l(e) {
    return (
        a.DZ.loadIfNecessary(),
        r.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return n.sort((e, n) => (t.findIndex((t) => t === e) < t.findIndex((e) => e === n) ? -1 : 1)), c(e, n);
        }, [e])
    );
}
let c = (e, t) => {
    let n = [...e],
        r = 0;
    return (
        t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = n[t];
                n.splice(t, 1), (n = [...n.slice(0, r), e, ...n.slice(r)]), ++r;
            }
        }),
        n
            .map((e, t) => [e, t])
            .filter((e) => {
                var t, n;
                let [r] = e,
                    a =
                        null == (n = r.application.embeddedActivityConfig) ||
                        null == (t = n.client_platform_config[(0, s.Z)((0, o.getOS)())])
                            ? void 0
                            : t.label_type;
                return !!a && (a === i.ww.NEW || a === i.ww.UPDATED);
            })
            .forEach((e) => {
                let [t, r] = e,
                    i =
                        null != t.application.embeddedActivityConfig &&
                        null != t.application.embeddedActivityConfig.shelf_rank
                            ? t.application.embeddedActivityConfig.shelf_rank - 1
                            : r;
                if (i < r) {
                    let e = n[r];
                    n.splice(r, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]);
                }
            }),
        n
    );
};
