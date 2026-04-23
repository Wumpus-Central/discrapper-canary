l.d(t, { A: () => i });
var r = l(64700),
    n = l(311907),
    a = l(49463),
    s = l(409013),
    c = l(194822);
let i = (e, t, l) => {
    let i = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [d, o, u] = (0, n.yK)([c.A], () => [
            c.A.getTemplateLayout(e, t, l),
            c.A.isFetchingTemplate(e, t, l),
            c.A.getTemplateFetchError(e, t, l),
        ]),
        m = null == d && null != t && i && !o && null == u;
    return (
        r.useEffect(() => {
            m && (0, s.J)({ tenantId: e, templateId: t, requestParams: l }).catch(() => {});
        }, [m, e, t, l]),
        { layout: d, loading: o, error: u }
    );
};
