var i = n(855986),
    r = n(73153);
let a = [],
    s = null;
class l extends i.Ay.Store {
    static displayName = "ApplicationDirectoryCategoriesStore";
    getLastFetchTimeMs() {
        return s;
    }
    getCategories() {
        return a;
    }
    getCategory(e) {
        return a.find((t) => t.id === e);
    }
}
let o = new l(r.h, {
    APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function (e) {
        let { categories: t } = e;
        ((a = t), (s = Date.now()));
    },
});
n.d(t, {}, { A: o });
