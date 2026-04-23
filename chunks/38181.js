"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = [],
    a = null;
class o extends r.Ay.Store {
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
let l = new o(i.h, {
    APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function (e) {
        let { categories: t } = e;
        (s = t), (a = Date.now());
    },
});
