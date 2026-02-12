"use strict";
n.d(t, { v: () => c });
var r = n(735438),
    i = n(562465),
    a = n(73153),
    s = n(198982),
    o = n(972441),
    l = n(652215);
let u = (e) =>
        (0, r.isObject)(e)
            ? (0, r.isArray)(e)
                ? e.map(u)
                : (0, r.reduce)(e, (e, t, n) => ({ ...e, [(0, r.camelCase)(n)]: u(t) }), {})
            : e,
    c = async (e) => {
        let { tenantId: t, layoutId: n, abortSignal: r, requestParams: c } = e;
        if (!o.A.isFetchingLayout(n))
            try {
                a.h.dispatch({ type: "CMS_LAYOUT_FETCH", layoutId: n });
                let e = await i.Bo.get({ url: l.Rsh.CMS_LAYOUT(t, n), rejectWithError: !0, signal: r, query: c });
                a.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", layout: u(e.body) });
            } catch (t) {
                let e = new s.LG(t);
                throw (a.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", layoutId: n, apiError: e }), e);
            }
    };
