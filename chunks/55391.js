t.d(l, { A: () => d });
var r = t(64700),
    o = t(311907),
    n = t(49463),
    a = t(409013),
    i = t(194822);
let d = (e, l, t) => {
    let d = (0, o.bG)([n.A], () => n.A.hasLoadedExperiments),
        [s, c, u] = (0, o.yK)([i.A], () => [
            i.A.getTemplateLayout(e, l),
            i.A.isFetchingTemplate(e, l),
            i.A.getTemplateFetchError(e, l),
        ]),
        h = null == s && null != l && d && !c && null == u;
    return (
        r.useEffect(() => {
            h && (0, a.J)({ tenantId: e, templateId: l, requestParams: t }).catch(() => {});
        }, [h, e, l, t]),
        { layout: s, loading: c, error: u }
    );
};
