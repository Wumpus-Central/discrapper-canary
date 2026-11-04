var i = n(855986),
    r = n(73153),
    a = n(449275),
    s = n(77729),
    l = n(617617),
    o = n(792996);
let d = o.intl.currentLocale,
    c = o.systemLocale;
function u() {
    let e = l.A.settings.localization?.locale?.value;
    return null != e && "" !== e && e !== d && ((d = e), (0, a.Av)(d), !0);
}
(async function () {
    if (s.A?.app?.getPreferredSystemLanguages != null) {
        let e = await s.A.app.getPreferredSystemLanguages().then((e) => e[0]);
        if (null != e && "" !== e) return e;
    }
    return o.systemLocale;
})().then((e) => {
    c = e;
});
class _ extends i.Ay.Store {
    static displayName = "LocaleStore";
    initialize() {
        (this.waitFor(l.A), u(), (0, a.Av)(d));
    }
    get locale() {
        return d;
    }
    get systemLocale() {
        return c;
    }
}
let E = new _(r.h, {
    OVERLAY_INITIALIZE: u,
    CACHE_LOADED: u,
    CONNECTION_OPEN: u,
    USER_SETTINGS_PROTO_UPDATE: u,
    USER_SETTINGS_LOCALE_OVERRIDE: function (e) {
        ((d = e.locale), (0, a.Av)(d));
    },
});
n.d(t, {}, { default: E });
