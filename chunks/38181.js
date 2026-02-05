"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let a = [],
    s = null;
function o(e) {
    let { categories: t } = e;
    (a = t), (s = Date.now());
}
class l extends r.Ay.Store {
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
let u = new l(i.h, { APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: o });
