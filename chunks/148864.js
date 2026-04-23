let i;
n.d(t, { A: () => u });
var r = n(311907),
    a = n(73153),
    l = n(518977);
let s = (0, l.rE)();
function o(e) {
    let { countryCode: t } = e;
    null != t && (s = (0, l.XF)(t) ?? (0, l.rE)());
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
        return null != i ? i : s;
    }
}
let u = new d(a.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        i = t;
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o,
});
