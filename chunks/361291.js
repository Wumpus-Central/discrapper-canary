n.d(t, { Z: () => m });
var r,
    i = n(442837),
    o = n(570140),
    a = n(37113),
    s = n(65154);
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
let c = a.tI.PRESET_VIDEO,
    u = a.LY.RESOLUTION_720,
    d = a.ws.FPS_30,
    f = !0;
function _(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.context) === s.Yn.STREAM) {
        if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
        (u = t.qualityOptions.resolution), (d = t.qualityOptions.frameRate);
    }
}
function p(e) {
    let { preset: t, resolution: n, frameRate: r, soundshareEnabled: i } = e,
        o = !1;
    return null != t && ((c = t), (o = !0)), null != n && ((u = n), (o = !0)), null != r && ((d = r), (o = !0)), null != i && ((f = i), (o = !0)), o;
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (c = null != (t = e.preset) ? t : a.tI.PRESET_VIDEO), (u = e.resolution), (d = e.fps), (f = null == (n = e.soundshareEnabled) || n);
        }
    }
    getState() {
        return {
            preset: c,
            resolution: u,
            fps: d,
            soundshareEnabled: f
        };
    }
}
l(h, 'displayName', 'ApplicationStreamingSettingsStore'), l(h, 'persistKey', 'ApplicationStreamingSettingStore');
let m = new h(o.Z, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: _,
    STREAM_UPDATE_SETTINGS: p
});
