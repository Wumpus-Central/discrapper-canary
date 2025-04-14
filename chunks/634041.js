n.d(t, { Z: () => R });
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
function _(e) {
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
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = !1,
    g = null,
    E = !1,
    b = {};
function y(e) {
    let { assets: t } = e,
        n = {};
    t.forEach((e) => (n[e.id] = e)), (b = n);
}
function v(e) {
    let { videoFilterAsset: t } = e;
    b = h(_({}, b), { [t.id]: t });
}
function O(e) {
    let { videoFilterAsset: t } = e;
    (b = _({}, b)), delete b[t.id];
}
function I(e) {
    var t;
    let n = u.default.getCurrentUser();
    if (null == n) return !1;
    let r = null != e ? e : (0, d.Gx)(null == (t = s.Z.settings.voiceAndVideo) ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != c.Z.getVoiceChannelId() && l.Z.isVideoEnabled() && null != r;
}
function S(e) {
    let { backgroundOption: t } = e;
    I(t) && (E = !0);
}
function T(e) {
    let { settings: t } = e;
    o.TO.CAMERA_BACKGROUND_LIVE in t && (m = !0);
}
function N() {
    g !== c.Z.getVoiceChannelId() && (E = !1), I() && (E = !0), (g = c.Z.getVoiceChannelId());
}
function A() {
    (m = !1), (E = !1), (g = null), (b = {});
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z, l.Z), this.syncWith([c.Z, l.Z], N);
    }
    get videoFilterAssets() {
        return b;
    }
    get hasBeenApplied() {
        return m;
    }
    get hasUsedBackgroundInCall() {
        return E;
    }
}
f(C, 'displayName', 'VideoBackgroundStore');
let R = new C(a.Z, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: y,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: v,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: O,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: S,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: T,
    LOGOUT: A
});
