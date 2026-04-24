"use strict";
r.d(t, { A: () => c });
var l = r(64700),
    s = r(17928),
    n = r(736056),
    a = r(409013),
    i = r(972441);
let c = (e, t, r) => {
    let c = (0, s.bG)([n.A], () => n.A.hasLoadedExperiments),
        [u, d, o] = (0, s.yK)([i.A], () => [
            i.A.getTemplateLayout(e, t, r),
            i.A.isFetchingTemplate(e, t, r),
            i.A.getTemplateFetchError(e, t, r),
        ]),
        h = null == u && null != t && c && !d && null == o;
    return (
        l.useEffect(() => {
            h && (0, a.J)({ tenantId: e, templateId: t, requestParams: r }).catch(() => {});
        }, [h, e, t, r]),
        { layout: u, loading: d, error: o }
    );
};
