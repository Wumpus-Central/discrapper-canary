l.d(t, { A: () => c });
var r = l(64700),
    n = l(17928),
    a = l(736056),
    s = l(409013),
    i = l(972441);
let c = (e, t, l) => {
    let c = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [d, o, u] = (0, n.yK)([i.A], () => [
            i.A.getTemplateLayout(e, t, l),
            i.A.isFetchingTemplate(e, t, l),
            i.A.getTemplateFetchError(e, t, l),
        ]),
        h = null == d && null != t && c && !o && null == u;
    return (
        r.useEffect(() => {
            h && (0, s.J)({ tenantId: e, templateId: t, requestParams: l }).catch(() => {});
        }, [h, e, t, l]),
        { layout: d, loading: o, error: u }
    );
};
