l.d(t, { A: () => T });
var r = l(17928),
    n = l(228366),
    a = l(403362),
    s = l(817934);
let i = (0, a.m6)() ? { [s.C8]: { "dummy-shop-home": s.uG, "dummy-orb-shelf": s.oP, "dummy-sku-list": s.Ej } } : {},
    c = (0, a.m6)() ? ["dummy-skeleton"] : [],
    d = (0, a.m6)() ? { [s.C8]: { "dummy-popular-picks": s.Ot } } : {},
    o = (0, a.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, t) => `${e}/${t}`,
    m = i,
    h = new Set(c),
    p = {},
    g = d,
    E = new Set(o),
    A = {},
    f = function (e) {
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
    static displayName = "LayoutSystemStore";
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
        let r = f(t, l);
        return g[e]?.[r] ?? null;
    }
    isFetchingTemplate(e, t, l) {
        let r = f(t ?? "", l);
        return null != e && null != t && E.has(u(e, r));
    }
    getTemplateFetchError(e, t, l) {
        return null == e || null == t ? null : (A[u(e, f(t ?? "", l))] ?? null);
    }
}
let T = new v(n.h, {
    LAYOUT_SYSTEM_FETCH: (e) => {
        let { tenantId: t, layoutId: l } = e;
        h.add(u(t, l));
    },
    LAYOUT_SYSTEM_FETCH_SUCCESS: (e) => {
        let { tenantId: t, layout: l } = e;
        ((m[t] ??= {})[l.id] = l), delete p[u(t, l.id)], h.delete(u(t, l.id));
    },
    LAYOUT_SYSTEM_FETCH_FAILURE: (e) => {
        let { tenantId: t, layoutId: l, apiError: r } = e;
        (p[u(t, l)] = r), h.delete(u(t, l));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH: (e) => {
        let { tenantId: t, templateId: l, requestParams: r } = e;
        E.add(u(t, f(l, r)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, layout: n } = e,
            a = f(l, r);
        ((g[t] ??= {})[a] = n), delete A[u(t, a)], E.delete(u(t, a));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, apiError: n } = e,
            a = f(l, r);
        (A[u(t, a)] = n), E.delete(u(t, a));
    },
    LOGOUT: function () {
        (m = {}), (h = new Set()), (p = {}), (g = {}), (E = new Set()), (A = {});
    },
});
