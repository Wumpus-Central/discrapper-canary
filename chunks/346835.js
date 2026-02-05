"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    a = n(469036);
let s = {};
function o(e) {
    let { applicationId: t, link: n } = e;
    null == s[t] && (s[t] = Object.create(null)), (s[t][n.link_id] = new a.A(n));
}
function l() {
    s = {};
}
class u extends r.Ay.Store {
    static displayName = "CustomActivityLinksStore";
    getOne(e, t) {
        if (null != s[e]) return s[e][t];
    }
}
let c = new u(i.h, { CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: o, LOGOUT: l });
