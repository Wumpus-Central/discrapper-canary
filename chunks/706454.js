n.r(t), n.d(t, { default: () => p });
var r,
    i = n(442837),
    o = n(570140),
    a = n(241601),
    s = n(581883),
    l = n(388032);
function c(e, t, n) {
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
let u = l.intl.currentLocale;
function d() {
    var e, t;
    let n = null == (t = s.Z.settings.localization) || null == (e = t.locale) ? void 0 : e.value;
    return null != n && '' !== n && n !== u && ((u = n), (0, a._2)(u), !0);
}
function f(e) {
    (u = e.locale), (0, a._2)(u);
}
class _ extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), d(), (0, a._2)(u);
    }
    get locale() {
        return u;
    }
    get systemLocale() {
        return l.systemLocale;
    }
}
c(_, 'displayName', 'LocaleStore');
let p = new _(o.Z, {
    OVERLAY_INITIALIZE: d,
    CACHE_LOADED: d,
    CONNECTION_OPEN: d,
    USER_SETTINGS_PROTO_UPDATE: d,
    USER_SETTINGS_LOCALE_OVERRIDE: f
});
