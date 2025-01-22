var i,
    a = r(442837),
    o = r(570140),
    s = r(37113),
    l = r(65154);
function u(e, n, r) {
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
let c = s.tI.PRESET_VIDEO,
    d = s.LY.RESOLUTION_720,
    f = s.ws.FPS_30,
    p = !0;
function h(e) {
    let { settings: n } = e;
    if ((null == n ? void 0 : n.context) === l.Yn.STREAM) {
        if ((null == n ? void 0 : n.qualityOptions) == null || (null == n ? void 0 : n.qualityOptions.resolution) == null || (null == n ? void 0 : n.qualityOptions.frameRate) == null) return !1;
        (d = n.qualityOptions.resolution), (f = n.qualityOptions.frameRate);
    }
}
function _(e) {
    let { preset: n, resolution: r, frameRate: i, soundshareEnabled: a } = e,
        o = !1;
    return null != n && ((c = n), (o = !0)), null != r && ((d = r), (o = !0)), null != i && ((f = i), (o = !0)), null != a && ((p = a), (o = !0)), o;
}
class m extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n, r;
            (c = null !== (n = e.preset) && void 0 !== n ? n : s.tI.PRESET_VIDEO), (d = e.resolution), (f = e.fps), (p = null === (r = e.soundshareEnabled) || void 0 === r || r);
        }
    }
    getState() {
        return {
            preset: c,
            resolution: d,
            fps: f,
            soundshareEnabled: p
        };
    }
}
u(m, 'displayName', 'ApplicationStreamingSettingsStore'),
    u(m, 'persistKey', 'ApplicationStreamingSettingStore'),
    (n.Z = new m(o.Z, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: h,
        STREAM_UPDATE_SETTINGS: _
    }));
