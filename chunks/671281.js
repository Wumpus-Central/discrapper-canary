n.d(t, { A: () => x });
var r = n(17928),
    l = n(228366),
    a = n(403362),
    s = n(817934);
let i = (0, a.m6)() ? { [s.C8]: { "dummy-shop-home": s.uG, "dummy-orb-shelf": s.oP, "dummy-sku-list": s.Ej } } : {},
    c = (0, a.m6)() ? ["dummy-skeleton"] : [],
    o = (0, a.m6)() ? { [s.C8]: { "dummy-popular-picks": s.Ot } } : {},
    u = (0, a.m6)() ? ["dummy-skeleton-template"] : [];
function d(e, t) {
    return `${e}/${t}`;
}
let h = i,
    m = new Set(c),
    p = {},
    f = o,
    g = new Set(u),
    E = {};
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Object.entries(t)
            .sort((e, t) => {
                let [n] = e,
                    [r] = t;
                return n.localeCompare(r);
            })
            .map((e) => {
                let [t, n] = e;
                return `${t}:${n}`;
            })
            .join("-");
    return "" !== n ? `${e}-${n}` : e;
}
class v extends r.Ay.Store {
    static displayName = "LayoutSystemStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (h[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && m.has(d(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (p[d(e, t)] ?? null);
    }
    getTemplateLayout(e, t, n) {
        if (null == e || null == t) return null;
        let r = A(t, n);
        return f[e]?.[r] ?? null;
    }
    isFetchingTemplate(e, t, n) {
        let r = A(t ?? "", n);
        return null != e && null != t && g.has(d(e, r));
    }
    getTemplateFetchError(e, t, n) {
        return null == e || null == t ? null : (E[d(e, A(t ?? "", n))] ?? null);
    }
}
let x = new v(l.h, {
    LAYOUT_SYSTEM_FETCH: function (e) {
        let { tenantId: t, layoutId: n } = e;
        m.add(d(t, n));
    },
    LAYOUT_SYSTEM_FETCH_SUCCESS: function (e) {
        let { tenantId: t, layout: n } = e;
        ((h[t] ??= {})[n.id] = n), delete p[d(t, n.id)], m.delete(d(t, n.id));
    },
    LAYOUT_SYSTEM_FETCH_FAILURE: function (e) {
        let { tenantId: t, layoutId: n, apiError: r } = e;
        (p[d(t, n)] = r), m.delete(d(t, n));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH: function (e) {
        let { tenantId: t, templateId: n, requestParams: r } = e;
        g.add(d(t, A(n, r)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS: function (e) {
        let { tenantId: t, templateId: n, requestParams: r, layout: l } = e,
            a = A(n, r);
        ((f[t] ??= {})[a] = l), delete E[d(t, a)], g.delete(d(t, a));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE: function (e) {
        let { tenantId: t, templateId: n, requestParams: r, apiError: l } = e,
            a = A(n, r);
        (E[d(t, a)] = l), g.delete(d(t, a));
    },
    LOGOUT: function () {
        (h = {}), (m = new Set()), (p = {}), (f = {}), (g = new Set()), (E = {});
    },
});
