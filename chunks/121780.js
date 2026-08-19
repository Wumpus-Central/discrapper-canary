"use strict";
n.d(t, { A: () => u });
var l = n(17928),
    i = n(228366),
    s = n(423764);
let r = null;
function a(e) {
    let { countryCode: t } = e;
    null != t && (r = (0, s.XF)(t) ?? (0, s.rE)());
}
class o extends l.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return r;
    }
}
let u = new o(i.h, { CONNECTION_OPEN: a, SET_LOCATION_METADATA: a });
