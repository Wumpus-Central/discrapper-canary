"use strict";
n.r(t), n.d(t, { default: () => h });
var i = n(17928),
    r = n(228366),
    s = n(724066),
    a = n(77729),
    o = n(617617),
    l = n(985018);
async function d() {
    if (a.A?.app?.getPreferredSystemLanguages != null) {
        let e = await a.A.app.getPreferredSystemLanguages().then((e) => e[0]);
        if (null != e && "" !== e) return e;
    }
    return l.systemLocale;
}
let _ = l.intl.currentLocale,
    u = l.systemLocale;
function c() {
    let e = o.A.settings.localization?.locale?.value;
    return null != e && "" !== e && e !== _ && ((_ = e), (0, s.Av)(_), !0);
}
d().then((e) => {
    u = e;
});
class E extends i.Ay.Store {
    static displayName = "LocaleStore";
    initialize() {
        this.waitFor(o.A), c(), (0, s.Av)(_);
    }
    get locale() {
        return _;
    }
    get systemLocale() {
        return u;
    }
}
let h = new E(r.h, {
    OVERLAY_INITIALIZE: c,
    CACHE_LOADED: c,
    CONNECTION_OPEN: c,
    USER_SETTINGS_PROTO_UPDATE: c,
    USER_SETTINGS_LOCALE_OVERRIDE: function (e) {
        (_ = e.locale), (0, s.Av)(_);
    },
});
