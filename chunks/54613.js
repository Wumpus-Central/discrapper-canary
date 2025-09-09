n.d(t, { Z: () => d });
var r,
    i = n(442837),
    a = n(570140),
    o = n(133080);
function s(e, t, n) {
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
    null != n && (l = null != (t = (0, o.Zz)(n)) ? t : (0, o.K4)());
}
class u extends (r = i.ZP.Store) {
    getCountryCode() {
        return l;
    }
}
s(u, "displayName", "LocationMetadataStore");
let d = new u(a.Z, {
    CONNECTION_OPEN: c,
    SET_LOCATION_METADATA: c,
});
