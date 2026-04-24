"use strict";
r.d(t, { J: () => h, v: () => o });
var l = r(735438),
    s = r(636537),
    n = r(228366),
    a = r(845584),
    i = r(972441),
    c = r(652215);
let u = ["request_params"],
    d = (e) =>
        (0, l.isObject)(e)
            ? (0, l.isArray)(e)
                ? e.map(d)
                : (0, l.reduce)(
                      e,
                      (e, t, r) => {
                          let s = (0, l.camelCase)(r);
                          return u.includes(r) ? { ...e, [s]: t } : { ...e, [s]: d(t) };
                      },
                      {},
                  )
            : e,
    o = async (e) => {
        let { tenantId: t, layoutId: r, abortSignal: l } = e;
        if (!i.A.isFetchingLayout(t, r))
            try {
                n.h.dispatch({ type: "CMS_LAYOUT_FETCH", tenantId: t, layoutId: r });
                let e = await s.Bo.get({ url: c.Rsh.CMS_LAYOUT(t, r), rejectWithError: !0, signal: l });
                n.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", tenantId: t, layout: d(e.body) });
            } catch (l) {
                let e = new a.LG(l);
                throw (n.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", tenantId: t, layoutId: r, apiError: e }), e);
            }
    },
    h = async (e) => {
        let { tenantId: t, templateId: r, abortSignal: l, requestParams: u } = e;
        if (!i.A.isFetchingTemplate(t, r, u))
            try {
                n.h.dispatch({ type: "CMS_TEMPLATE_FETCH", tenantId: t, templateId: r, requestParams: u });
                let e = await s.Bo.get({ url: c.Rsh.CMS_TEMPLATE(t, r), rejectWithError: !0, signal: l, query: u });
                n.h.dispatch({
                    type: "CMS_TEMPLATE_FETCH_SUCCESS",
                    tenantId: t,
                    templateId: r,
                    requestParams: u,
                    layout: d(e.body),
                });
            } catch (l) {
                let e = new a.LG(l);
                throw (
                    (n.h.dispatch({
                        type: "CMS_TEMPLATE_FETCH_FAILURE",
                        tenantId: t,
                        templateId: r,
                        requestParams: u,
                        apiError: e,
                    }),
                    e)
                );
            }
    };
