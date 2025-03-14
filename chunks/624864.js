n.d(t, { Z: () => p });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l() {
    return d();
}
function c() {
    return { gameSettings: {} };
}
let u = c();
function d() {
    u = c();
}
function f(e) {
    let { applicationId: t, enabled: n } = e;
    return (u.gameSettings[t] = { limitedInteractionOverride: n }), !0;
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        u = s({}, c(), null != e ? e : {});
    }
    getState() {
        return u;
    }
    isLimitedInteractionOverrideEnabled(e) {
        var t, n;
        return null != e && null !== (n = null === (t = u.gameSettings[e]) || void 0 === t ? void 0 : t.limitedInteractionOverride) && void 0 !== n && n;
    }
}
a(_, 'displayName', 'OverlaySettingsStore'), a(_, 'persistKey', 'OverlaySettingsStore');
let p = new _(o.Z, {
    LOGOUT: l,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: f
});
