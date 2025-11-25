n.r(t), n.d(t, { default: () => g });
var r,
    i = n(442837),
    a = n(570140),
    o = n(241601),
    s = n(579806),
    l = n(581883),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
async function d() {
    var e;
    if ((null === s.Z || void 0 === s.Z || null == (e = s.Z.app) ? void 0 : e.getPreferredSystemLanguages) != null) {
        let e = await s.Z.app.getPreferredSystemLanguages().then((e) => e[0]);
        if (null != e && "" !== e) return e;
    }
    return c.systemLocale;
}
let f = c.intl.currentLocale,
    _ = c.systemLocale;
function p() {
    var e, t;
    let n = null == (t = l.Z.settings.localization) || null == (e = t.locale) ? void 0 : e.value;
    return null != n && "" !== n && n !== f && ((f = n), (0, o._2)(f), !0);
}
function h(e) {
    (f = e.locale), (0, o._2)(f);
}
d().then((e) => {
    _ = e;
});
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z), p(), (0, o._2)(f);
    }
    get locale() {
        return f;
    }
    get systemLocale() {
        return _;
    }
}
u(m, "displayName", "LocaleStore");
let g = new m(a.Z, {
    OVERLAY_INITIALIZE: p,
    CACHE_LOADED: p,
    CONNECTION_OPEN: p,
    USER_SETTINGS_PROTO_UPDATE: p,
    USER_SETTINGS_LOCALE_OVERRIDE: h,
});
