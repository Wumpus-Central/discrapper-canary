r.d(t, { A: () => f });
var l = r(311907),
    d = r(73153),
    c = r(403362),
    a = r(41770);
let n = (0, c.m6)() ? { [a.C8]: { "dummy-shop-home": a.uG, "dummy-orb-shelf": a.oP, "dummy-sku-list": a.Ej } } : {},
    o = (0, c.m6)() ? ["dummy-skeleton"] : [],
    u = (0, c.m6)() ? { [a.C8]: { "dummy-popular-picks": a.Ot } } : {},
    s = (0, c.m6)() ? ["dummy-skeleton-template"] : [],
    i = (e, t) => `${e}/${t}`,
    h = n,
    m = new Set(o),
    p = {},
    k = u,
    b = new Set(s),
    A = {};
class S extends l.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (h[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && m.has(i(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (p[i(e, t)] ?? null);
    }
    getTemplateLayout(e, t) {
        return null == e || null == t ? null : (k[e]?.[t] ?? null);
    }
    isFetchingTemplate(e, t) {
        return null != e && null != t && b.has(i(e, t));
    }
    getTemplateFetchError(e, t) {
        return null == e || null == t ? null : (A[i(e, t)] ?? null);
    }
}
let f = new S(d.h, {
    CMS_LAYOUT_FETCH: (e) => {
        let { tenantId: t, layoutId: r } = e;
        m.add(i(t, r));
    },
    CMS_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tenantId: t, layout: r } = e;
        ((h[t] ??= {})[r.id] = r), delete p[i(t, r.id)], m.delete(i(t, r.id));
    },
    CMS_LAYOUT_FETCH_FAILURE: (e) => {
        let { tenantId: t, layoutId: r, apiError: l } = e;
        (p[i(t, r)] = l), m.delete(i(t, r));
    },
    CMS_TEMPLATE_FETCH: (e) => {
        let { tenantId: t, templateId: r } = e;
        b.add(i(t, r));
    },
    CMS_TEMPLATE_FETCH_SUCCESS: (e) => {
        let { tenantId: t, templateId: r, layout: l } = e;
        ((k[t] ??= {})[r] = l), delete A[i(t, r)], b.delete(i(t, r));
    },
    CMS_TEMPLATE_FETCH_FAILURE: (e) => {
        let { tenantId: t, templateId: r, apiError: l } = e;
        (A[i(t, r)] = l), b.delete(i(t, r));
    },
    LOGOUT: function () {
        (h = {}), (m = new Set()), (p = {}), (k = {}), (b = new Set()), (A = {});
    },
});
