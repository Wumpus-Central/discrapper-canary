let s;
n.d(t, { A: () => d });
var r = n(17928),
    a = n(228366),
    i = n(423764);
let l = (0, i.rE)();
function o(e) {
    let { countryCode: t } = e;
    null != t && (l = (0, i.XF)(t) ?? (0, i.rE)());
}
class c extends r.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
        null != e && (s = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: s };
    }
    getCountryCode() {
        return null != s ? s : l;
    }
}
let d = new c(a.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        s = t;
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o,
});
