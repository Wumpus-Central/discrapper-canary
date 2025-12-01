n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(524437),
    o = n(570140),
    s = n(48481);
function l(e, t, n) {
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
let c = !1,
    u = {},
    d = {};
function f() {
    c = !0;
}
function p(e) {
    let { userId: t, settings: n, consents: r } = e;
    null != n && (u[t] = (0, s.ac)(n)), null != r && (d[t] = r), (c = !1);
}
function _(e) {
    let { userId: t, consents: n } = e;
    d[t] = n;
}
function m(e) {
    let { userId: t, settings: n } = e,
        r = (0, s.ac)(n);
    u[t] = (0, s.re)(a.o8, u[t], r);
}
function h() {
    (u = {}), (d = {}), (c = !1);
}
class g extends (r = i.ZP.Store) {
    getSettings(e) {
        return u[e];
    }
    getControlledSettings(e) {
        return u[e];
    }
    hasSettingsForUser(e) {
        return null != u[e];
    }
    getConsents(e) {
        return d[e];
    }
    hasConsented(e, t) {
        if (null == e) return !1;
        let n = d[e];
        return null != n && null != n[t] && n[t].consented;
    }
    get isLoading() {
        return c;
    }
}
l(g, "displayName", "FamilyCenterControlledSettingsStore");
let E = new g(o.Z, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: f,
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: p,
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: _,
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: m,
    LOGOUT: h,
});
