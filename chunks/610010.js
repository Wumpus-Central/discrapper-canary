"use strict";
n.d(t, { Bp: () => E, EX: () => _, TF: () => A });
var i = n(582128),
    r = n(17928),
    a = n(363487),
    s = n(71393),
    l = n(576705),
    o = n(498480),
    d = n(831617),
    c = n(475669);
function u(e, t, n) {
    let i = !0 === (0, a.G)(t, e),
        r = (0, d.TS)(e.id, n);
    return i && r;
}
function _(e) {
    return (0, r.yK)([s.A, l.A], () => s.A.getGuildsArray().filter((t) => u(t, l.A, e)));
}
function E(e) {
    return (0, r.bG)([s.A, l.A], () => s.A.getGuildsArray().some((t) => u(t, l.A, e)));
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldFetch: n = !1 } = t,
        a = (0, r.bG)([c.A], () => {
            if (null == e) return !1;
            let { catalog: t } = c.A.getGlobalCatalogState();
            return Object.values(t).some((t) => t.gameId === e);
        }, [e]),
        s = (0, r.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
        i.useEffect(() => {
            null != e && n && s && (0, o.K)();
        }, [e, n, s]),
        a
    );
}
