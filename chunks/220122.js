n.d(t, { Z: () => g });
var r = n(481060),
    i = n(570140),
    o = n(594190),
    a = n(199902),
    s = n(131951),
    l = n(924557),
    c = n(474639),
    u = n(435064),
    d = n(779618),
    f = n(39604),
    _ = n(356659),
    p = n(388032);
let h = 'CLIPS_IN_CALL_WARNING';
class m extends c.Z {
    showClipsToast() {
        (0, r.showToast)({
            id: h,
            message: p.NW.string(p.t['d+41qK']),
            type: r.ToastType.CLIP,
            options: { duration: _.G$ }
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, d.Z)(s.Z)) return;
        let t = (0, l.ln)(),
            n = u.Z.getSettings(),
            r = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
            i = s.Z.getMediaEngine();
        if ((i.setClipBufferLength(r ? n.clipsLength / 1000 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null)) {
            let { frameRate: t, resolution: r } = n.clipsQuality,
                o = r <= 480 ? (r / 3) * 4 : (r / 9) * 16,
                a = r;
            i.setClipsQualitySettings(o, a, t) || null == e || this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let t = o.ZP.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = o.ZP.getVisibleGame();
        null != t && (e.added.find((e) => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), _.jp) : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, d.Z)(s.Z)) return;
        let e = (0, l.ln)(),
            t = u.Z.getSettings();
        if (!(t.clipsEnabled && e) || null != a.Z.getCurrentUserActiveStream()) return;
        let n = o.ZP.getVisibleGame();
        (null == n ? void 0 : n.pid) != null &&
            (null == n ? void 0 : n.windowHandle) != null &&
            null != n.name &&
            '' !== n.name &&
            i.Z.dispatch({
                type: 'CLIPS_INIT',
                sourceId: 'window:'.concat(null == n ? void 0 : n.windowHandle),
                applicationName: n.name,
                quality: t.clipsQuality
            });
    }
    handleMediaEngineSetHardwareEncoding(e) {
        let { enabled: t } = e;
        if (!t) {
            let { clipsEnabled: e } = u.Z.getSettings();
            e && f.em({ clipsEnabled: !1 });
        }
    }
    disableClips() {
        f.em({
            clipsEnabled: !1,
            trackAnalytics: !1
        });
    }
}
let g = new m();
