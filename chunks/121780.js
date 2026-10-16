n.d(t, { A: () => c });
var i = n(17928),
    r = n(73153),
    a = n(423764);
let s = null,
    l = null;
function o(e) {
    return null != e && ((s = (0, a.XF)(e) ?? (0, a.rE)()), !0);
}
class d extends i.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
        return s;
    }
    getMinimumAge() {
        return l;
    }
}
let c = new d(r.h, {
    CONNECTION_OPEN: function (e) {
        let { countryCode: t } = e;
        return o(t);
    },
    SET_LOCATION_METADATA: function (e) {
        let { countryCode: t, minimumAge: n } = e,
            i = o(t),
            r = n ?? null;
        return r === l ? i : ((l = r), !0);
    },
    LOGOUT: function () {
        return null != l && ((l = null), !0);
    },
});
