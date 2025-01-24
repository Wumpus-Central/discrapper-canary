n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(653041),
    n(47120);
var i = n(192379),
    l = n(911969),
    r = n(822245),
    o = n(675478),
    a = n(358085),
    u = n(194188),
    c = n(761122);
function d(e) {
    o.DZ.loadIfNecessary();
    let { enabled: t } = u.x.getCurrentConfig({ location: 'useActivityShelfItemsSorting' }, { autoTrackExposure: !1 });
    return i.useMemo(() => {
        let n = [];
        e.forEach((e) => n.push(e.application.id));
        let i = [...n];
        return (
            i.sort((e, i) => {
                if (!t) {
                    let t = r.Z.getScoreWithoutLoadingLatest(e),
                        n = r.Z.getScoreWithoutLoadingLatest(i);
                    if (t !== n) return n - t;
                }
                return n.findIndex((t) => t === e) < n.findIndex((e) => e === i) ? -1 : 1;
            }),
            f(e, i)
        );
    }, [e, t]);
}
let f = (e, t) => {
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
                    r = null === (n = i.application.embeddedActivityConfig) || void 0 === n ? void 0 : null === (t = n.client_platform_config[(0, c.Z)((0, a.getOS)())]) || void 0 === t ? void 0 : t.label_type;
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
