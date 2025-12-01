n.d(t, { Z: () => P });
var r,
    i = n(442837),
    a = n(46973),
    o = n(570140),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function m(e, t) {
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
let h = !1,
    g = null,
    E = !1,
    b = {};
function y(e) {
    let { assets: t } = e,
        n = {};
    t.forEach((e) => (n[e.id] = e)), (b = n);
}
function O(e) {
    let { videoFilterAsset: t } = e;
    b = m(p({}, b), { [t.id]: t });
}
function v(e) {
    let { videoFilterAsset: t } = e;
    (b = p({}, b)), delete b[t.id];
}
function S(e) {
    var t;
    let n = u.default.getCurrentUser();
    if (null == n) return !1;
    let r =
        null != e
            ? e
            : (0, d.Gx)(null == (t = s.Z.settings.voiceAndVideo) ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != c.Z.getVoiceChannelId() && l.Z.isVideoEnabled() && null != r;
}
function I(e) {
    let { backgroundOption: t } = e;
    S(t) && (E = !0);
}
function T(e) {
    let { settings: t } = e;
    a.TO.CAMERA_BACKGROUND_LIVE in t && (h = !0);
}
function A() {
    g !== c.Z.getVoiceChannelId() && (E = !1), S() && (E = !0), (g = c.Z.getVoiceChannelId());
}
function C() {
    (h = !1), (E = !1), (g = null), (b = {});
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.Z, s.Z, u.default), this.syncWith([c.Z, l.Z], A);
    }
    get videoFilterAssets() {
        return b;
    }
    get hasBeenApplied() {
        return h;
    }
    get hasUsedBackgroundInCall() {
        return E;
    }
}
f(N, "displayName", "VideoBackgroundStore");
let P = new N(o.Z, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: y,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: O,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: v,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: I,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: T,
    LOGOUT: C,
});
