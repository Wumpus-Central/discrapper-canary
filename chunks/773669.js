"use strict";
n.r(t), n.d(t, { default: () => h });
var r = n(311907),
    i = n(73153),
    a = n(11057),
    s = n(77729),
    o = n(617617),
    l = n(985018);
async function u() {
    if (s.A?.app?.getPreferredSystemLanguages != null) {
        let e = await s.A.app.getPreferredSystemLanguages().then((e) => e[0]);
        if (null != e && "" !== e) return e;
    }
    return l.systemLocale;
}
let c = l.intl.currentLocale,
    d = l.systemLocale;
function _() {
    let e = o.A.settings.localization?.locale?.value;
    return null != e && "" !== e && e !== c && ((c = e), (0, a.Av)(c), !0);
}
function f(e) {
    (c = e.locale), (0, a.Av)(c);
}
u().then((e) => {
    d = e;
});
class p extends r.Ay.Store {
    static displayName = "LocaleStore";
    initialize() {
        this.waitFor(o.A), _(), (0, a.Av)(c);
    }
    get locale() {
        return c;
    }
    get systemLocale() {
        return d;
    }
}
let h = new p(i.h, {
    OVERLAY_INITIALIZE: _,
    CACHE_LOADED: _,
    CONNECTION_OPEN: _,
    USER_SETTINGS_PROTO_UPDATE: _,
    USER_SETTINGS_LOCALE_OVERRIDE: f,
});
