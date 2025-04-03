n.d(t, { Z: () => u });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let s = {};
class c extends (a = l.ZP.Store) {
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
let u = new c(o.Z, {
    MANAGED_ACTIVITY_LINK_FETCH_SUCCESS: function (e) {
        let { applicationId: t, link: n } = e;
        null == s[t] ? (s[t] = { [n.link_id]: n }) : (s[t][n.link_id] = n);
    },
    LOGOUT: function () {
        s = {};
    }
});
