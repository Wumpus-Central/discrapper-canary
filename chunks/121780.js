n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    l = n(518977);
let a = null;
function s(e) {
    let { countryCode: t } = e;
    null != t && (a = (0, l.XF)(t) ?? (0, l.rE)());
}
class o extends i.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return a;
    }
}
let d = new o(r.h, { CONNECTION_OPEN: s, SET_LOCATION_METADATA: s });
