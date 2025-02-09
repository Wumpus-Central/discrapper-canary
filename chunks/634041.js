n.d(t, { Z: () => A }), n(724458);
var i,
    r = n(442837),
    a = n(46973),
    s = n(570140),
    o = n(581883),
    l = n(131951),
    u = n(944486),
    c = n(594174),
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
let _ = !1,
    p = null,
    h = !1,
    m = {};
function g(e) {
    let { assets: t } = e;
    m = t.reduce(
        (e, t) => ({
            ...e,
            [t.id]: t
        }),
        {}
    );
}
function E(e) {
    let { videoFilterAsset: t } = e;
    m = {
        ...m,
        [t.id]: t
    };
}
function v(e) {
    let { videoFilterAsset: t } = e;
    (m = { ...m }), delete m[t.id];
}
function y(e) {
    var t;
    let n = c.default.getCurrentUser();
    if (null == n) return !1;
    let i = null != e ? e : (0, d.Gx)(null === (t = o.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != u.Z.getVoiceChannelId() && l.Z.isVideoEnabled() && null != i;
}
function I(e) {
    let { backgroundOption: t } = e;
    y(t) && (h = !0);
}
function T(e) {
    let { settings: t } = e;
    a.TO.CAMERA_BACKGROUND_LIVE in t && (_ = !0);
}
function b() {
    p !== u.Z.getVoiceChannelId() && (h = !1), y() && (h = !0), (p = u.Z.getVoiceChannelId());
}
class S extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, u.Z, l.Z), this.syncWith([u.Z, l.Z], b);
    }
    get videoFilterAssets() {
        return m;
    }
    get hasBeenApplied() {
        return _;
    }
    get hasUsedBackgroundInCall() {
        return h;
    }
}
f(S, 'displayName', 'VideoBackgroundStore');
let A = new S(s.Z, {
    VIDEO_FILTER_ASSETS_FETCH_SUCCESS: g,
    VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: E,
    VIDEO_FILTER_ASSET_DELETE_SUCCESS: v,
    VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: I,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: T
});
