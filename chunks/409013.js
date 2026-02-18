t.d(r, { v: () => u });
var d = t(735438),
    l = t(562465),
    c = t(73153),
    o = t(198982),
    a = t(972441),
    n = t(652215);
let s = (e) =>
        (0, d.isObject)(e)
            ? (0, d.isArray)(e)
                ? e.map(s)
                : (0, d.reduce)(e, (e, r, t) => ({ ...e, [(0, d.camelCase)(t)]: s(r) }), {})
            : e,
    u = async (e) => {
        let { tenantId: r, layoutId: t, abortSignal: d, requestParams: u } = e;
        if (!a.A.isFetchingLayout(t))
            try {
                c.h.dispatch({ type: "CMS_LAYOUT_FETCH", layoutId: t });
                let e = await l.Bo.get({ url: n.Rsh.CMS_LAYOUT(r, t), rejectWithError: !0, signal: d, query: u });
                c.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", layout: s(e.body) });
            } catch (r) {
                let e = new o.LG(r);
                throw (c.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", layoutId: t, apiError: e }), e);
            }
    };
