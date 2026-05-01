n.d(t, { A: () => o });
var i = n(17928),
    a = n(228366);
let r = [],
    s = null;
class l extends i.Ay.Store {
    static displayName = "ApplicationDirectoryCategoriesStore";
    getLastFetchTimeMs() {
        return s;
    }
    getCategories() {
        return r;
    }
    getCategory(e) {
        return r.find((t) => t.id === e);
    }
}
let o = new l(a.h, {
    APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function (e) {
        let { categories: t } = e;
        (r = t), (s = Date.now());
    },
});
