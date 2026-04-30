n.d(t, { A: () => c });
var r = n(17928),
    i = n(228366),
    l = n(518977);
let s = null;
function u(e) {
    let { countryCode: t } = e;
    null != t && (s = (0, l.XF)(t) ?? (0, l.rE)());
}
class a extends r.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return s;
    }
}
let c = new a(i.h, { CONNECTION_OPEN: u, SET_LOCATION_METADATA: u });
