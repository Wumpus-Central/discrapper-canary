n.d(t, { A: () => d });
var i = n(17928),
    r = n(73153),
    a = n(423764);
let s = null;
function l(e) {
    let { countryCode: t } = e;
    null != t && (s = (0, a.XF)(t) ?? (0, a.rE)());
}
class o extends i.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return s;
    }
}
let d = new o(r.h, { CONNECTION_OPEN: l, SET_LOCATION_METADATA: l });
