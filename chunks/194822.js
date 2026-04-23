l.d(t, { A: () => x });
var r = l(311907),
    n = l(73153),
    a = l(403362),
    s = l(41770);
let c = (0, a.m6)() ? { [s.C8]: { "dummy-shop-home": s.uG, "dummy-orb-shelf": s.oP, "dummy-sku-list": s.Ej } } : {},
    i = (0, a.m6)() ? ["dummy-skeleton"] : [],
    d = (0, a.m6)() ? { [s.C8]: { "dummy-popular-picks": s.Ot } } : {},
    o = (0, a.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, t) => `${e}/${t}`,
    m = c,
    h = new Set(i),
    p = {},
    A = d,
    f = new Set(o),
    E = {},
    g = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = Object.entries(t)
                .sort((e, t) => {
                    let [l] = e,
                        [r] = t;
                    return l.localeCompare(r);
                })
                .map((e) => {
                    let [t, l] = e;
                    return `${t}:${l}`;
                })
                .join("-");
        return "" !== l ? `${e}-${l}` : e;
    };
class v extends r.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (m[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && h.has(u(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (p[u(e, t)] ?? null);
    }
    getTemplateLayout(e, t, l) {
        if (null == e || null == t) return null;
        let r = g(t, l);
        return A[e]?.[r] ?? null;
    }
    isFetchingTemplate(e, t, l) {
        let r = g(t ?? "", l);
        return null != e && null != t && f.has(u(e, r));
    }
    getTemplateFetchError(e, t, l) {
        return null == e || null == t ? null : (E[u(e, g(t ?? "", l))] ?? null);
    }
}
let x = new v(n.h, {
    CMS_LAYOUT_FETCH: (e) => {
        let { tenantId: t, layoutId: l } = e;
        h.add(u(t, l));
    },
    CMS_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tenantId: t, layout: l } = e;
        ((m[t] ??= {})[l.id] = l), delete p[u(t, l.id)], h.delete(u(t, l.id));
    },
    CMS_LAYOUT_FETCH_FAILURE: (e) => {
        let { tenantId: t, layoutId: l, apiError: r } = e;
        (p[u(t, l)] = r), h.delete(u(t, l));
    },
    CMS_TEMPLATE_FETCH: (e) => {
        let { tenantId: t, templateId: l, requestParams: r } = e;
        f.add(u(t, g(l, r)));
    },
    CMS_TEMPLATE_FETCH_SUCCESS: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, layout: n } = e,
            a = g(l, r);
        ((A[t] ??= {})[a] = n), delete E[u(t, a)], f.delete(u(t, a));
    },
    CMS_TEMPLATE_FETCH_FAILURE: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, apiError: n } = e,
            a = g(l, r);
        (E[u(t, a)] = n), f.delete(u(t, a));
    },
    LOGOUT: function () {
        (m = {}), (h = new Set()), (p = {}), (A = {}), (f = new Set()), (E = {});
    },
});
