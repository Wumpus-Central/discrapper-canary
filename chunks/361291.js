n.d(t, { Z: () => m });
var r,
    i = n(442837),
    a = n(570140),
    o = n(37113),
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
let c = o.tI.PRESET_VIDEO,
    u = o.LY.RESOLUTION_720,
    d = o.ws.FPS_30,
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
        a = !1;
    return null != t && ((c = t), (a = !0)), null != n && ((u = n), (a = !0)), null != r && ((d = r), (a = !0)), null != i && ((f = i), (a = !0)), a;
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (c = null != (t = e.preset) ? t : o.tI.PRESET_VIDEO), (u = e.resolution), (d = e.fps), (f = null == (n = e.soundshareEnabled) || n);
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
let m = new h(a.Z, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: _,
    STREAM_UPDATE_SETTINGS: p
});
