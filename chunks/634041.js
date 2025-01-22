var i,
    a = r(724458);
var o = r(442837),
    s = r(46973),
    l = r(570140),
    u = r(581883),
    c = r(131951),
    d = r(944486),
    f = r(594174),
    p = r(647177);
function h(e, n, r) {
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
let _ = !1,
    m = null,
    g = !1,
    E = {};
function v(e) {
    let { assets: n } = e;
    E = n.reduce(
        (e, n) => ({
            ...e,
            [n.id]: n
        }),
        {}
    );
}
function y(e) {
    let { videoFilterAsset: n } = e;
    E = {
        ...E,
        [n.id]: n
    };
}
function b(e) {
    let { videoFilterAsset: n } = e;
    (E = { ...E }), delete E[n.id];
}
function I(e) {
    var n;
    let r = f.default.getCurrentUser();
    if (null == r) return !1;
    let i = null != e ? e : (0, p.Gx)(null === (n = u.Z.settings.voiceAndVideo) || void 0 === n ? void 0 : n.videoBackgroundFilterDesktop, r.id);
    return null != d.Z.getVoiceChannelId() && c.Z.isVideoEnabled() && null != i;
}
function T(e) {
    let { backgroundOption: n } = e;
    I(n) && (g = !0);
}
function S(e) {
    let { settings: n } = e;
    s.TO.CAMERA_BACKGROUND_LIVE in n && (_ = !0);
}
function A() {
    m !== d.Z.getVoiceChannelId() && (g = !1), I() && (g = !0), (m = d.Z.getVoiceChannelId());
}
class C extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.Z, c.Z), this.syncWith([d.Z, c.Z], A);
    }
    get videoFilterAssets() {
        return E;
    }
    get hasBeenApplied() {
        return _;
    }
    get hasUsedBackgroundInCall() {
        return g;
    }
}
h(C, 'displayName', 'VideoBackgroundStore'),
    (n.Z = new C(l.Z, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: v,
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: y,
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: b,
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: T,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: S
    }));
