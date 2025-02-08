let i;
n.d(t, { Z: () => h });
var r,
    a = n(442837),
    l = n(570140),
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
function d(e) {
    var t;
    let { countryCode: n } = e;
    null != n && (c = null !== (t = (0, o.Zz)(n)) && void 0 !== t ? t : (0, o.K4)());
}
class u extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (i = e.selectedCountryCode);
    }
    getUserAgnosticState() {
        return { selectedCountryCode: i };
    }
    getCountryCode() {
        return null != i ? i : c;
    }
}
s(u, 'displayName', 'PhoneStore'), s(u, 'persistKey', 'PhoneStore');
let h = new u(l.Z, {
    PHONE_SET_COUNTRY_CODE: function (e) {
        let { countryCode: t } = e;
        i = t;
    },
    CONNECTION_OPEN: d,
    SET_LOCATION_METADATA: d
});
