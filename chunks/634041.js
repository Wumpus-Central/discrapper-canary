n.d(t, { Z: () => C });
var r,
    i = n(442837),
    o = n(46973),
    a = n(570140),
    s = n(581883),
    l = n(131951),
    c = n(944486),
    u = n(594174),
    d = n(647177);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = !1,
    g = null,
    E = !1,
    v = {};
function b(e) {
    let { assets: t } = e;
    v = t.reduce((e, t) => h(p({}, e), { [t.id]: t }), {});
}
function y(e) {
    let { videoFilterAsset: t } = e;
    v = h(p({}, v), { [t.id]: t });
}
function O(e) {
    let { videoFilterAsset: t } = e;
    (v = p({}, v)), delete v[t.id];
}
function S(e) {
    var t;
    let n = u.default.getCurrentUser();
    if (null == n) return !1;
    let r = null != e ? e : (0, d.Gx)(null === (t = s.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != c.Z.getVoiceChannelId() && l.Z.isVideoEnabled() && null != r;
}
function I(e) {
    let { backgroundOption: t } = e;
    S(t) && (E = !0);
}
function T(e) {
    let { settings: t } = e;
    o.TO.CAMERA_BACKGROUND_LIVE in t && (m = !0);
}
function N() {
    g !== c.Z.getVoiceChannelId() && (E = !1), S() && (E = !0), (g = c.Z.getVoiceChannelId());
}
class A extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z, l.Z), this.syncWith([c.Z, l.Z], N);
    }
    get videoFilterAssets() {
        return v;
    }
    get hasBeenApplied() {
        return m;
    }
    get hasUsedBackgroundInCall() {
        return E;
    }
}
f(A, 'displayName', 'VideoBackgroundStore');
let C = new A(a.Z, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: b,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: y,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: O,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: I,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: T
});
