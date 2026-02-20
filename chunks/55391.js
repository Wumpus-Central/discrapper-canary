t.d(l, { A: () => c });
var r = t(64700),
    o = t(311907),
    i = t(49463),
    n = t(409013),
    a = t(972441);
let c = (e, l, t) => {
    let c = (0, o.bG)([i.A], () => i.A.hasLoadedExperiments),
        [d, s, u] = (0, o.yK)([a.A], () => [
            a.A.getTemplateLayout(e, l),
            a.A.isFetchingTemplate(e, l),
            a.A.getTemplateFetchError(e, l),
        ]),
        h = null == d && null != l && c && !s && null == u;
    return (
        r.useEffect(() => {
            h && (0, n.J)({ tenantId: e, templateId: l, requestParams: t }).catch(() => {});
        }, [h, e, l, t]),
        { layout: d, loading: s, error: u }
    );
};
