n.d(t, { Z: () => d }), n(653041), n(47120), n(230036);
var i = n(192379),
    r = n(911969),
    l = n(822245),
    o = n(675478),
    c = n(358085),
    a = n(194188),
    u = n(761122);
function d(e) {
    o.DZ.loadIfNecessary();
    let { enabled: t } = a.x.getCurrentConfig({ location: 'useActivityShelfItemsSorting' }, { autoTrackExposure: !1 });
    return i.useMemo(() => {
        let n = [];
        e.forEach((e) => n.push(e.application.id));
        let i = [...n];
        return (
            i.sort((e, i) => {
                if (!t) {
                    let t = l.Z.getScoreWithoutLoadingLatest(e),
                        n = l.Z.getScoreWithoutLoadingLatest(i);
                    if (t !== n) return n - t;
                }
                return n.findIndex((t) => t === e) < n.findIndex((e) => e === i) ? -1 : 1;
            }),
            p(e, i)
        );
    }, [e, t]);
}
let p = (e, t) => {
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
                    l = null === (n = i.application.embeddedActivityConfig) || void 0 === n ? void 0 : null === (t = n.client_platform_config[(0, u.Z)((0, c.getOS)())]) || void 0 === t ? void 0 : t.label_type;
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
