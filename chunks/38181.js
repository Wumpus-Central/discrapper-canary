"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = [],
    a = null;
class o extends i.Ay.Store {
    static displayName = "ApplicationDirectoryCategoriesStore";
    getLastFetchTimeMs() {
        return a;
    }
    getCategories() {
        return s;
    }
    getCategory(e) {
        return s.find((t) => t.id === e);
    }
}
let l = new o(r.h, {
    APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function (e) {
        let { categories: t } = e;
        (s = t), (a = Date.now());
    },
});
