"use strict";
let i;
n.d(t, { A: () => c });
var r = n(17928),
    s = n(228366),
    a = n(423764);
let o = (0, a.rE)();
function l(e) {
    let { countryCode: t } = e;
    null != t && (o = (0, a.XF)(t) ?? (0, a.rE)());
}
class u extends r.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
        null != e && (i = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: i };
    }
    getCountryCode() {
        return null != i ? i : o;
    }
}
let c = new u(s.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        i = t;
    },
    CONNECTION_OPEN: l,
    SET_LOCATION_METADATA: l,
});
