n.d(t, { Z: () => d });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140),
    s = n(731725);
let c = {};
class u extends (a = l.ZP.Store) {
    getOne(e, t) {
        if (null != c[e]) return c[e][t];
    }
}
(i = 'CustomActivityLinksStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = i);
let d = new u(o.Z, {
    CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function (e) {
        let { applicationId: t, link: n } = e;
        null == c[t] ? (c[t] = { [n.link_id]: new s.Z(n) }) : (c[t][n.link_id] = new s.Z(n));
    },
    LOGOUT: function () {
        c = {};
    }
});
