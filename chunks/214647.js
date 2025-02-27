n.d(t, { Z: () => d });
var r,
    i,
    a,
    o = n(442837),
    l = n(570140);
let s = {};
class c extends (a = o.ZP.Store) {
    getOne(e, t) {
        if (null != s[e]) return s[e][t];
    }
}
(i = 'ManagedActivityLinksStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let d = new c(l.Z, {
    MANAGED_ACTIVITY_LINK_FETCH_SUCCESS: function (e) {
        let { applicationId: t, link: n } = e;
        null == s[t] ? (s[t] = { [n.link_id]: n }) : (s[t][n.link_id] = n);
    },
    LOGOUT: function () {
        s = {};
    }
});
