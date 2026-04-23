"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(469036);
let a = {};
class o extends r.Ay.Store {
    static displayName = "CustomActivityLinksStore";
    getOne(e, t) {
        if (null != a[e]) return a[e][t];
    }
}
let l = new o(i.h, {
    CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function (e) {
        let { applicationId: t, link: n } = e;
        null == a[t] && (a[t] = Object.create(null)), (a[t][n.link_id] = new s.A(n));
    },
    LOGOUT: function () {
        a = {};
    },
});
