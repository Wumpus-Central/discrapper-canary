var i,
    a = r(47120);
var o = r(442837),
    s = r(433517),
    l = r(570140),
    u = r(581883);
function c(e, n, r) {
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
let d = {},
    f = {};
function p() {
    var e, n, r, i, a, o;
    let s = u.Z.settings;
    return {
        gifAutoPlay: null === (n = s.textAndImages) || void 0 === n ? void 0 : null === (e = n.gifAutoPlay) || void 0 === e ? void 0 : e.value,
        animateEmoji: null === (i = s.textAndImages) || void 0 === i ? void 0 : null === (r = i.animateEmoji) || void 0 === r ? void 0 : r.value,
        animateStickers: null === (o = s.textAndImages) || void 0 === o ? void 0 : null === (a = o.animateStickers) || void 0 === a ? void 0 : a.value
    };
}
function h() {
    return (f = p()), !1;
}
function _() {
    d = {};
}
function m() {
    d = {};
}
function g(e) {
    let { settings: n } = e;
    d = {
        ...d,
        ...n
    };
}
function E(e) {
    let { settings: n } = e;
    for (let e of n) delete d[e];
}
function v() {
    let e = p(),
        n = !1;
    for (let r in e) {
        let i = r;
        e[i] !== f[i] && (delete d[i], (n = !0));
    }
    return n;
}
class y extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        (d = null != e ? e : {}), this.syncWith([u.Z], h);
    }
    getState() {
        return d;
    }
    getAppliedOverrideReasonKey(e) {
        var n;
        return null === (n = d[e]) || void 0 === n ? void 0 : n.reasonKey;
    }
    getOverride(e) {
        return d[e];
    }
}
c(y, 'displayName', 'UserSettingsOverridesStore'),
    c(y, 'persistKey', 'UserSettingsOverridesStore'),
    c(y, 'migrations', [
        () => {
            var e;
            let n = null !== (e = s.K.get('UserSettingsStoreOverrides')) && void 0 !== e ? e : {};
            return s.K.remove('UserSettingsStoreOverrides'), n;
        }
    ]),
    (n.Z = new y(l.Z, {
        USER_SETTINGS_PROTO_UPDATE: v,
        USER_SETTINGS_OVERRIDE_APPLY: g,
        USER_SETTINGS_OVERRIDE_CLEAR: E,
        LOGOUT: _,
        LOGIN_SUCCESS: m
    }));
