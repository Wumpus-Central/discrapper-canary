t.d(l, { J: () => h, v: () => u });
var r = t(735438),
    o = t(562465),
    n = t(73153),
    a = t(198982),
    i = t(194822),
    d = t(652215);
let s = ["request_params"],
    c = (e) =>
        (0, r.isObject)(e)
            ? (0, r.isArray)(e)
                ? e.map(c)
                : (0, r.reduce)(
                      e,
                      (e, l, t) => {
                          let o = (0, r.camelCase)(t);
                          return s.includes(t) ? { ...e, [o]: l } : { ...e, [o]: c(l) };
                      },
                      {},
                  )
            : e,
    u = async (e) => {
        let { tenantId: l, layoutId: t, abortSignal: r } = e;
        if (!i.A.isFetchingLayout(l, t))
            try {
                n.h.dispatch({ type: "CMS_LAYOUT_FETCH", tenantId: l, layoutId: t });
                let e = await o.Bo.get({ url: d.Rsh.CMS_LAYOUT(l, t), rejectWithError: !0, signal: r });
                n.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", tenantId: l, layout: c(e.body) });
            } catch (r) {
                let e = new a.LG(r);
                throw (n.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", tenantId: l, layoutId: t, apiError: e }), e);
            }
    },
    h = async (e) => {
        let { tenantId: l, templateId: t, abortSignal: r, requestParams: s } = e;
        if (!i.A.isFetchingTemplate(l, t))
            try {
                n.h.dispatch({ type: "CMS_TEMPLATE_FETCH", tenantId: l, templateId: t });
                let e = await o.Bo.get({ url: d.Rsh.CMS_TEMPLATE(l, t), rejectWithError: !0, signal: r, query: s });
                n.h.dispatch({ type: "CMS_TEMPLATE_FETCH_SUCCESS", tenantId: l, templateId: t, layout: c(e.body) });
            } catch (r) {
                let e = new a.LG(r);
                throw (
                    (n.h.dispatch({ type: "CMS_TEMPLATE_FETCH_FAILURE", tenantId: l, templateId: t, apiError: e }), e)
                );
            }
    };
