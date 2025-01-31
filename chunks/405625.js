i.d(t, { Z: () => c }), i(653041), i(47120);
var l = i(192379),
    n = i(911969),
    a = i(822245),
    r = i(675478),
    d = i(358085),
    o = i(194188),
    u = i(761122);
function c(e) {
    r.DZ.loadIfNecessary();
    let { enabled: t } = o.x.getCurrentConfig({ location: 'useActivityShelfItemsSorting' }, { autoTrackExposure: !1 });
    return l.useMemo(() => {
        let i = [];
        e.forEach((e) => i.push(e.application.id));
        let l = [...i];
        return (
            l.sort((e, l) => {
                if (!t) {
                    let t = a.Z.getScoreWithoutLoadingLatest(e),
                        i = a.Z.getScoreWithoutLoadingLatest(l);
                    if (t !== i) return i - t;
                }
                return i.findIndex((t) => t === e) < i.findIndex((e) => e === l) ? -1 : 1;
            }),
            s(e, l)
        );
    }, [e, t]);
}
let s = (e, t) => {
    let i = [...e],
        l = 0;
    return (
        t.forEach((e) => {
            let t = i.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = i[t];
                i.splice(t, 1), (i = [...i.slice(0, l), e, ...i.slice(l)]), ++l;
            }
        }),
        i
            .map((e, t) => [e, t])
            .filter((e) => {
                var t, i;
                let [l] = e,
                    a = null === (i = l.application.embeddedActivityConfig) || void 0 === i ? void 0 : null === (t = i.client_platform_config[(0, u.Z)((0, d.getOS)())]) || void 0 === t ? void 0 : t.label_type;
                return !!a && (a === n.ww.NEW || a === n.ww.UPDATED);
            })
            .forEach((e) => {
                let [t, l] = e,
                    n = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
                if (n < l) {
                    let e = i[l];
                    i.splice(l, 1), (i = [...i.slice(0, n), e, ...i.slice(n)]);
                }
            }),
        i
    );
};
