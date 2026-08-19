"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
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
        (a = t), (s = Date.now());
    },
});
