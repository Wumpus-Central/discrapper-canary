"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    s = n(423764);
let a = null;
function o(e) {
    let { countryCode: t } = e;
    null != t && (a = (0, s.XF)(t) ?? (0, s.rE)());
}
class l extends i.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return a;
    }
}
let u = new l(r.h, { CONNECTION_OPEN: o, SET_LOCATION_METADATA: o });
