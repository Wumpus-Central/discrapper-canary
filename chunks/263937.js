n.d(t, { Z: () => b }), n(47120);
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
    s = n(581883);
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {},
    d = {};
function f() {
    var e, t, n, r, i, o;
    let a = s.Z.settings;
    return {
        gifAutoPlay: null === (t = a.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
        animateEmoji: null === (r = a.textAndImages) || void 0 === r ? void 0 : null === (n = r.animateEmoji) || void 0 === n ? void 0 : n.value,
        animateStickers: null === (o = a.textAndImages) || void 0 === o ? void 0 : null === (i = o.animateStickers) || void 0 === i ? void 0 : i.value
    };
}
function p() {
    return (d = f()), !1;
}
function _() {
    u = {};
}
function h() {
    u = {};
}
function m(e) {
    let { settings: t } = e;
    u = c({}, u, t);
}
function g(e) {
    let { settings: t } = e;
    for (let e of t) delete u[e];
}
function E() {
    let e = f(),
        t = !1;
    for (let n in e) {
        let r = n;
        e[r] !== d[r] && (delete u[r], (t = !0));
    }
    return t;
}
class v extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (u = null != e ? e : {}), this.syncWith([s.Z], p);
    }
    getState() {
        return u;
    }
    getAppliedOverrideReasonKey(e) {
        var t;
        return null === (t = u[e]) || void 0 === t ? void 0 : t.reasonKey;
    }
    getOverride(e) {
        return u[e];
    }
}
l(v, 'displayName', 'UserSettingsOverridesStore'),
    l(v, 'persistKey', 'UserSettingsOverridesStore'),
    l(v, 'migrations', [
        () => {
            var e;
            let t = null !== (e = o.K.get('UserSettingsStoreOverrides')) && void 0 !== e ? e : {};
            return o.K.remove('UserSettingsStoreOverrides'), t;
        }
    ]);
let b = new v(a.Z, {
    USER_SETTINGS_PROTO_UPDATE: E,
    USER_SETTINGS_OVERRIDE_APPLY: m,
    USER_SETTINGS_OVERRIDE_CLEAR: g,
    LOGOUT: _,
    LOGIN_SUCCESS: h
});
