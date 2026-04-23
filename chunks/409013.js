l.d(t, { J: () => m, v: () => u });
var r = l(735438),
    n = l(562465),
    a = l(73153),
    s = l(198982),
    c = l(194822),
    i = l(652215);
let d = ["request_params"],
    o = (e) =>
        (0, r.isObject)(e)
            ? (0, r.isArray)(e)
                ? e.map(o)
                : (0, r.reduce)(
                      e,
                      (e, t, l) => {
                          let n = (0, r.camelCase)(l);
                          return d.includes(l) ? { ...e, [n]: t } : { ...e, [n]: o(t) };
                      },
                      {},
                  )
            : e,
    u = async (e) => {
        let { tenantId: t, layoutId: l, abortSignal: r } = e;
        if (!c.A.isFetchingLayout(t, l))
            try {
                a.h.dispatch({ type: "CMS_LAYOUT_FETCH", tenantId: t, layoutId: l });
                let e = await n.Bo.get({ url: i.Rsh.CMS_LAYOUT(t, l), rejectWithError: !0, signal: r });
                a.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", tenantId: t, layout: o(e.body) });
            } catch (r) {
                let e = new s.LG(r);
                throw (a.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", tenantId: t, layoutId: l, apiError: e }), e);
            }
    },
    m = async (e) => {
        let { tenantId: t, templateId: l, abortSignal: r, requestParams: d } = e;
        if (!c.A.isFetchingTemplate(t, l, d))
            try {
                a.h.dispatch({ type: "CMS_TEMPLATE_FETCH", tenantId: t, templateId: l, requestParams: d });
                let e = await n.Bo.get({ url: i.Rsh.CMS_TEMPLATE(t, l), rejectWithError: !0, signal: r, query: d });
                a.h.dispatch({
                    type: "CMS_TEMPLATE_FETCH_SUCCESS",
                    tenantId: t,
                    templateId: l,
                    requestParams: d,
                    layout: o(e.body),
                });
            } catch (r) {
                let e = new s.LG(r);
                throw (
                    (a.h.dispatch({
                        type: "CMS_TEMPLATE_FETCH_FAILURE",
                        tenantId: t,
                        templateId: l,
                        requestParams: d,
                        apiError: e,
                    }),
                    e)
                );
            }
    };
