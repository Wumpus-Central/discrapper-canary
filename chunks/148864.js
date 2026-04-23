"use strict";
let i;
n.d(t, { A: () => c });
var s = n(17928),
    l = n(228366),
    r = n(518977);
let a = (0, r.rE)();
function o(e) {
    let { countryCode: t } = e;
    null != t && (a = (0, r.XF)(t) ?? (0, r.rE)());
}
class d extends s.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
        null != e && (i = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: i };
    }
    getCountryCode() {
        return null != i ? i : a;
    }
}
let c = new d(l.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        i = t;
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o,
});
