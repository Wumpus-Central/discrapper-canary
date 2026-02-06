n.d(t, { v: () => o });
var _ = n(735438),
    a = n(562465),
    r = n(73153),
    d = n(198982),
    s = n(972441),
    l = n(652215);
let i = (e) =>
        (0, _.isObject)(e)
            ? (0, _.isArray)(e)
                ? e.map(i)
                : (0, _.reduce)(e, (e, t, n) => ({ ...e, [(0, _.camelCase)(n)]: i(t) }), {})
            : e,
    o = async (e) => {
        let { tenantId: t, layoutId: n, abortSignal: _ } = e;
        if (!s.A.isFetchingLayout(n))
            try {
                r.h.dispatch({ type: "CMS_LAYOUT_FETCH", layoutId: n });
                let e = await a.Bo.get({ url: l.Rsh.CMS_LAYOUT(t, n), rejectWithError: !0, signal: _ });
                r.h.dispatch({ type: "CMS_LAYOUT_FETCH_SUCCESS", layout: i(e.body) });
            } catch (t) {
                let e = new d.LG(t);
                throw (r.h.dispatch({ type: "CMS_LAYOUT_FETCH_FAILURE", layoutId: n, apiError: e }), e);
            }
    };
