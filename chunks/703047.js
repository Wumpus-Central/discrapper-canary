n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140),
    a = n(731725);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {};
function c(e) {
    let { applicationId: t, link: n } = e;
    null == l[t] ? (l[t] = { [n.link_id]: new a.Z(n) }) : (l[t][n.link_id] = new a.Z(n));
}
function u() {
    l = {};
}
class d extends (r = i.ZP.Store) {
    getOne(e, t) {
        if (null != l[e]) return l[e][t];
    }
}
s(d, 'displayName', 'CustomActivityLinksStore');
let f = new d(o.Z, {
    CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: c,
    LOGOUT: u
});
