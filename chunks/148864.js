let r;
n.d(t, { A: () => p });
var i,
    l = n(311907),
    a = n(73153),
    s = n(518977);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = (0, s.rE)();
function u(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (c = null != (t = (0, s.XF)(n)) ? t : (0, s.rE)());
}
class d extends (i = l.Ay.DeviceSettingsStore) {
    initialize(e) {
        null != e && (r = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: r };
    }
    getCountryCode() {
        return null != r ? r : c;
    }
}
o(d, "displayName", "PhoneStore"), o(d, "persistKey", "PhoneStore");
let p = new d(a.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        r = t;
    },
    CONNECTION_OPEN: u,
    SET_LOCATION_METADATA: u,
});
