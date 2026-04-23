a.d(t, { Fr: () => u, JX: () => d, YR: () => c, eM: () => r, kq: () => o }), a(323874), a(14289), a(35956);
var n = a(976860),
    l = a(767599),
    i = a(310419),
    s = a(652215);
let r = () => {
        let e = { previousView: (0, i.R4)() };
        (0, n.pX)(s.BVt.GLOBAL_DISCOVERY_APPS, { state: e });
    },
    o = (e) => {
        let { categoryId: t } = e,
            a = { previousView: (0, i.R4)() };
        (0, n.pX)(s.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: a });
    },
    c = (e) => {
        let { applicationId: t } = e,
            a = { previousView: (0, i.R4)() };
        (0, n.pX)(s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: a });
    },
    d = function () {
        let { query: e, categoryId: t, page: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = { previousView: (0, i.R4)() },
            o = new URLSearchParams();
        null != e && "" !== e && o.set("q", e),
            null != t && t !== l.lj && o.set("category_id", t.toString()),
            null != a && a > 1 && o.set("page", a.toString()),
            (0, n.pX)(s.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: r, search: o.toString() });
    },
    u = (e) => {
        let {
            location: { state: t },
        } = (0, n.JK)();
        (0, n.bG)(e, t);
    };
