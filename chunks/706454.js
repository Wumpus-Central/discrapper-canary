r.r(n);
var i,
    a = r(442837),
    o = r(570140),
    s = r(241601),
    l = r(424395),
    u = r(581883),
    c = r(388032);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = l.vJ ? c.intl.currentLocale : c.intl.defaultLocale;
function p() {
    var e, n;
    let r = null === (n = u.Z.settings.localization) || void 0 === n ? void 0 : null === (e = n.locale) || void 0 === e ? void 0 : e.value;
    return null != r && '' !== r && r !== f && ((f = r), (0, s._2)(f), !0);
}
function h(e) {
    (f = e.locale), (0, s._2)(f);
}
class _ extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z), p(), (0, s._2)(f);
    }
    get locale() {
        return f;
    }
}
d(_, 'displayName', 'LocaleStore'),
    (n.default = new _(o.Z, {
        OVERLAY_INITIALIZE: p,
        CACHE_LOADED: p,
        CONNECTION_OPEN: p,
        USER_SETTINGS_PROTO_UPDATE: p,
        USER_SETTINGS_LOCALE_OVERRIDE: h
    }));
