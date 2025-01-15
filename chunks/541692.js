let r;
var i,
    l = n(442837),
    u = n(570140),
    o = n(133080);
function a(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let c = (0, o.K4)();
function s(t) {
    var e;
    let { countryCode: n } = t;
    if (null != n) c = null !== (e = (0, o.Zz)(n)) && void 0 !== e ? e : (0, o.K4)();
}
class _ extends (i = l.ZP.DeviceSettingsStore) {
    initialize(t) {
        if (null != t) r = t.selectedCountryCode;
    }
    getUserAgnosticState() {
        return { selectedCountryCode: r };
    }
    getCountryCode() {
        return null != r ? r : c;
    }
}
a(_, 'displayName', 'PhoneStore'),
    a(_, 'persistKey', 'PhoneStore'),
    (e.Z = new _(u.Z, {
        PHONE_SET_COUNTRY_CODE: function (t) {
            let { countryCode: e } = t;
            r = e;
        },
        CONNECTION_OPEN: s,
        SET_LOCATION_METADATA: s
    }));
