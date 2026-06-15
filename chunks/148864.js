let n;
s.d(t, { A: () => d });
var r = s(17928),
    a = s(228366),
    i = s(423764);
let l = (0, i.rE)();
function o(e) {
    let { countryCode: t } = e;
    null != t && (l = (0, i.XF)(t) ?? (0, i.rE)());
}
class c extends r.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
        null != e && (n = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: n };
    }
    getCountryCode() {
        return null != n ? n : l;
    }
}
let d = new c(a.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        n = t;
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o,
});
