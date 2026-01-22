n.d(t, {
    A: () => o,
});
var a,
    i,
    r = n(311907),
    s = n(73153);
let l = {};
class d extends (i = r.Ay.Store) {
    getEULA(e) {
        return l[e];
    }
}
(a = "displayName") in d
    ? Object.defineProperty(d, a, {
          value: "EULAStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[a] = "EULAStore");
let o = new d(s.h, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: t } = e;
        l[t.id] = t;
    },
});
