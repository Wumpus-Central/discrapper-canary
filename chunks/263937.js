n.d(t, { Z: () => v }), n(47120);
var i,
    r = n(442837),
    a = n(433517),
    s = n(570140),
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
let u = {},
    c = {};
function d() {
    var e, t, n, i, r, a;
    let s = o.Z.settings;
    return {
        gifAutoPlay: null === (t = s.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
        animateEmoji: null === (i = s.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
        animateStickers: null === (a = s.textAndImages) || void 0 === a ? void 0 : null === (r = a.animateStickers) || void 0 === r ? void 0 : r.value
    };
}
function f() {
    return (c = d()), !1;
}
function _() {
    u = {};
}
function p() {
    u = {};
}
function h(e) {
    let { settings: t } = e;
    u = {
        ...u,
        ...t
    };
}
function m(e) {
    let { settings: t } = e;
    for (let e of t) delete u[e];
}
function g() {
    let e = d(),
        t = !1;
    for (let n in e) {
        let i = n;
        e[i] !== c[i] && (delete u[i], (t = !0));
    }
    return t;
}
class E extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        (u = null != e ? e : {}), this.syncWith([o.Z], f);
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
l(E, 'displayName', 'UserSettingsOverridesStore'),
    l(E, 'persistKey', 'UserSettingsOverridesStore'),
    l(E, 'migrations', [
        () => {
            var e;
            let t = null !== (e = a.K.get('UserSettingsStoreOverrides')) && void 0 !== e ? e : {};
            return a.K.remove('UserSettingsStoreOverrides'), t;
        }
    ]);
let v = new E(s.Z, {
    USER_SETTINGS_PROTO_UPDATE: g,
    USER_SETTINGS_OVERRIDE_APPLY: h,
    USER_SETTINGS_OVERRIDE_CLEAR: m,
    LOGOUT: _,
    LOGIN_SUCCESS: p
});
