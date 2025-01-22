var i = r(481060),
    a = r(570140),
    o = r(594190),
    s = r(199902),
    l = r(131951),
    u = r(924557),
    c = r(474639),
    d = r(435064),
    f = r(779618),
    p = r(39604),
    h = r(356659),
    _ = r(388032);
let m = 'CLIPS_IN_CALL_WARNING';
class g extends c.Z {
    showClipsToast() {
        (0, i.showToast)({
            id: m,
            message: _.intl.string(_.t['d+41qK']),
            type: i.ToastType.CLIP,
            options: { duration: h.G$ }
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, f.Z)(l.Z)) return;
        let n = (0, u.ln)(),
            r = d.Z.getSettings(),
            i = (r.clipsEnabled || r.decoupledClipsEnabled) && n,
            a = l.Z.getMediaEngine();
        if ((a.setClipBufferLength(i ? r.clipsLength / 1000 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null)) {
            let { frameRate: n, resolution: i } = r.clipsQuality,
                o = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                s = i;
            !a.setClipsQualitySettings(o, s, n) && null != e && this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let n = o.ZP.getVisibleGame();
        null != n && n.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let n = o.ZP.getVisibleGame();
        if (null != n) e.added.find((e) => e.pid === n.pid) ? setTimeout(() => this.fireClipsInitEvent(), h.jp) : this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        if (!(0, f.Z)(l.Z)) return;
        let e = (0, u.ln)(),
            n = d.Z.getSettings();
        if (!(n.clipsEnabled && e) || null != s.Z.getCurrentUserActiveStream()) return;
        let r = o.ZP.getVisibleGame();
        if ((null == r ? void 0 : r.pid) != null && (null == r ? void 0 : r.windowHandle) != null && null != r.name && '' !== r.name)
            a.Z.dispatch({
                type: 'CLIPS_INIT',
                sourceId: 'window:'.concat(null == r ? void 0 : r.windowHandle),
                applicationName: r.name,
                quality: n.clipsQuality
            });
    }
    handleMediaEngineSetHardwareEncoding(e) {
        let { enabled: n } = e;
        if (!n) {
            let { clipsEnabled: e } = d.Z.getSettings();
            e && p.em({ clipsEnabled: !1 });
        }
    }
    disableClips() {
        p.em({
            clipsEnabled: !1,
            trackAnalytics: !1
        });
    }
}
n.Z = new g();
