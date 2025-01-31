n.d(t, { Z: () => g });
var i = n(481060),
    r = n(570140),
    a = n(594190),
    s = n(199902),
    o = n(131951),
    l = n(924557),
    u = n(474639),
    c = n(435064),
    d = n(779618),
    f = n(39604),
    _ = n(356659),
    p = n(388032);
let h = 'CLIPS_IN_CALL_WARNING';
class m extends u.Z {
    showClipsToast() {
        (0, i.showToast)({
            id: h,
            message: p.intl.string(p.t['d+41qK']),
            type: i.ToastType.CLIP,
            options: { duration: _.G$ }
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, d.Z)(o.Z)) return;
        let t = (0, l.ln)(),
            n = c.Z.getSettings(),
            i = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
            r = o.Z.getMediaEngine();
        if ((r.setClipBufferLength(i ? n.clipsLength / 1000 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null)) {
            let { frameRate: t, resolution: i } = n.clipsQuality,
                a = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                s = i;
            r.setClipsQualitySettings(a, s, t) || null == e || this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let t = a.ZP.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = a.ZP.getVisibleGame();
        null != t && (e.added.find((e) => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), _.jp) : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, d.Z)(o.Z)) return;
        let e = (0, l.ln)(),
            t = c.Z.getSettings();
        if (!(t.clipsEnabled && e) || null != s.Z.getCurrentUserActiveStream()) return;
        let n = a.ZP.getVisibleGame();
        (null == n ? void 0 : n.pid) != null &&
            (null == n ? void 0 : n.windowHandle) != null &&
            null != n.name &&
            '' !== n.name &&
            r.Z.dispatch({
                type: 'CLIPS_INIT',
                sourceId: 'window:'.concat(null == n ? void 0 : n.windowHandle),
                applicationName: n.name,
                quality: t.clipsQuality
            });
    }
    handleMediaEngineSetHardwareEncoding(e) {
        let { enabled: t } = e;
        if (!t) {
            let { clipsEnabled: e } = c.Z.getSettings();
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
