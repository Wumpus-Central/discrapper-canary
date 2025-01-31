n.r(t), n.d(t, { default: () => _ });
var i,
    r = n(442837),
    a = n(570140),
    s = n(241601),
    o = n(581883);
function l(e, t, n) {
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
let u = n(388032).intl.currentLocale;
function c() {
    var e, t;
    let n = null === (t = o.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
    return null != n && '' !== n && n !== u && ((u = n), (0, s._2)(u), !0);
}
function d(e) {
    (u = e.locale), (0, s._2)(u);
}
class f extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), c(), (0, s._2)(u);
    }
    get locale() {
        return u;
    }
}
l(f, 'displayName', 'LocaleStore');
let _ = new f(a.Z, {
    OVERLAY_INITIALIZE: c,
    CACHE_LOADED: c,
    CONNECTION_OPEN: c,
    USER_SETTINGS_PROTO_UPDATE: c,
    USER_SETTINGS_LOCALE_OVERRIDE: d
});
