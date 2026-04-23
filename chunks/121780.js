"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    s = n(518977);
let a = null;
function o(e) {
    let { countryCode: t } = e;
    null != t && (a = (0, s.XF)(t) ?? (0, s.rE)());
}
class l extends r.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return a;
    }
}
let u = new l(i.h, { CONNECTION_OPEN: o, SET_LOCATION_METADATA: o });
