let r;
n.d(t, { Z: () => p });
var i,
    l = n(442837),
    a = n(570140),
    o = n(133080);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = (0, o.K4)();
function u(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (c = null != (t = (0, o.Zz)(n)) ? t : (0, o.K4)());
}
class d extends (i = l.ZP.DeviceSettingsStore) {
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
s(d, 'displayName', 'PhoneStore'), s(d, 'persistKey', 'PhoneStore');
let p = new d(a.Z, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        r = t;
    },
    CONNECTION_OPEN: u,
    SET_LOCATION_METADATA: u
});
