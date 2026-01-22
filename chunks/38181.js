n.d(t, { A: () => d });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = [],
    l = null;
function c(e) {
    let { categories: t } = e;
    (o = t), (l = Date.now());
}
class u extends (r = i.Ay.Store) {
    getLastFetchTimeMs() {
        return l;
    }
    getCategories() {
        return o;
    }
    getCategory(e) {
        return o.find((t) => t.id === e);
    }
}
s(u, "displayName", "ApplicationDirectoryCategoriesStore");
let d = new u(a.h, { APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: c });
