"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(518977);
let s = null;
function o(e) {
    let { countryCode: t } = e;
    null != t && (s = (0, a.XF)(t) ?? (0, a.rE)());
}
class l extends r.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return s;
    }
}
let u = new l(i.h, { CONNECTION_OPEN: o, SET_LOCATION_METADATA: o });
