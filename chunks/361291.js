n.d(t, { Z: () => h });
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = o.ApplicationStreamPresets.PRESET_VIDEO,
    u = o.ApplicationStreamResolutions.RESOLUTION_720,
    d = o.ApplicationStreamFPS.FPS_30,
    f = !0;
function p(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.context) !== s.Yn.STREAM || (null == t ? void 0 : t.qualityOptions) == null) return !1;
    let n = !1;
    return (
        c !== t.qualityOptions.preset && ((c = t.qualityOptions.preset), (n = !0)),
        u !== t.qualityOptions.resolution && ((u = t.qualityOptions.resolution), (n = !0)),
        d !== t.qualityOptions.frameRate && ((d = t.qualityOptions.frameRate), (n = !0)),
        n
    );
}
function _(e) {
    let { preset: t, resolution: n, frameRate: r, soundshareEnabled: i } = e,
        a = !1;
    return (
        null != t && t !== c && ((c = t), (a = !0)),
        null != n && n !== u && ((u = n), (a = !0)),
        null != r && r !== d && ((d = r), (a = !0)),
        null != i && i !== f && ((f = i), (a = !0)),
        a
    );
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (c = null != (t = e.preset) ? t : o.ApplicationStreamPresets.PRESET_VIDEO),
                (u = e.resolution),
                (d = e.fps),
                (f = null == (n = e.soundshareEnabled) || n);
        }
    }
    getState() {
        return {
            preset: c,
            resolution: u,
            fps: d,
            soundshareEnabled: f,
        };
    }
}
l(m, "displayName", "ApplicationStreamingSettingsStore"), l(m, "persistKey", "ApplicationStreamingSettingStore");
let h = new m(a.Z, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: p,
    STREAM_UPDATE_SETTINGS: _,
});
