n.d(t, {
    A: () => f,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(469036);

function o(e, t, n) {
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
let l = {};

function c(e) {
    let { applicationId: t, link: n } = e;
    null == l[t] && (l[t] = Object.create(null)), (l[t][n.link_id] = new s.A(n));
}

function u() {
    l = {};
}
class d extends (r = i.Ay.Store) {
    getOne(e, t) {
        if (null != l[e]) return l[e][t];
    }
}
o(d, "displayName", "CustomActivityLinksStore");
let f = new d(a.h, {
    CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: c,
    LOGOUT: u,
});
