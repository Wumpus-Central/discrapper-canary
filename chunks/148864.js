"use strict";
let i;
n.d(t, { A: () => c });
var r = n(17928),
    a = n(228366),
    s = n(423764);
let l = (0, s.rE)();
function o(e) {
    let { countryCode: t } = e;
    null != t && (l = (0, s.XF)(t) ?? (0, s.rE)());
}
class d extends r.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
        null != e && (i = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: i };
    }
    getCountryCode() {
        return null != i ? i : l;
    }
}
let c = new d(a.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        i = t;
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o,
});
