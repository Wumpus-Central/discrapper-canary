n.d(t, { A: () => d });
var r,
    i = n(311907),
    a = n(73153),
    s = n(518977);
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
let l = null;
function c(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (l = null != (t = (0, s.XF)(n)) ? t : (0, s.rE)());
}
class u extends (r = i.Ay.Store) {
    getCountryCode() {
        return l;
    }
}
o(u, "displayName", "LocationMetadataStore");
let d = new u(a.h, {
    CONNECTION_OPEN: c,
    SET_LOCATION_METADATA: c,
});
