t.d(l, { J: () => h, v: () => u });
var r = t(735438),
    o = t(562465),
    i = t(73153),
    n = t(198982),
    a = t(972441),
    c = t(652215);
let d = ["request_params"],
    s = (e) =>
        (0, r.isObject)(e)
            ? (0, r.isArray)(e)
                ? e.map(s)
                : (0, r.reduce)(
                      e,
                      (e, l, t) => {
                          let o = (0, r.camelCase)(t);
                          return d.includes(t) ? { ...e, [o]: l } : { ...e, [o]: s(l) };
                      },
                      {},
                  )
            : e,
    u = async (e) => {
        let { tenantId: l, layoutId: t, abortSignal: r } = e;
        if (!a.A.isFetchingLayout(l, t))
            try {
                i.h.dispatch({ type: "CMS_LAYOUT_FETCH", tenantId: l, layoutId: t });
                let e = await o.Bo.get({ url: c.Rsh.CMS_LAYOUT(l, t), rejectWithError: !0, signal: r });
                i.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", tenantId: l, layout: s(e.body) });
            } catch (r) {
                let e = new n.LG(r);
                throw (i.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", tenantId: l, layoutId: t, apiError: e }), e);
            }
    },
    h = async (e) => {
        let { tenantId: l, templateId: t, abortSignal: r, requestParams: d } = e;
        if (!a.A.isFetchingTemplate(l, t))
            try {
                i.h.dispatch({ type: "CMS_TEMPLATE_FETCH", tenantId: l, templateId: t });
                let e = await o.Bo.get({ url: c.Rsh.CMS_TEMPLATE(l, t), rejectWithError: !0, signal: r, query: d });
                i.h.dispatch({ type: "CMS_TEMPLATE_FETCH_SUCCESS", tenantId: l, templateId: t, layout: s(e.body) });
            } catch (r) {
                let e = new n.LG(r);
                throw (
                    (i.h.dispatch({ type: "CMS_TEMPLATE_FETCH_FAILURE", tenantId: l, templateId: t, apiError: e }), e)
                );
            }
    };
