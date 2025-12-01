n.d(t, { Z: () => g });
var r = n(481060),
    i = n(570140),
    a = n(594190),
    o = n(199902),
    s = n(131951),
    l = n(474639),
    c = n(435064),
    u = n(779618),
    d = n(341569),
    f = n(39604);
n(600349);
var p = n(356659),
    _ = n(388032);
let m = "CLIPS_IN_CALL_WARNING";
class h extends l.Z {
    showClipsToast() {
        (0, r.showToast)({
            id: m,
            message: _.intl.string(_.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: p.G$ },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, u.Z)(s.Z)) return;
        let t = c.Z.getSettings(),
            n = (0, d.LI)(),
            r = s.Z.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1000 : 0),
            (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(),
            null == e || (null == e ? void 0 : e.settings.clipsQuality) != null)
        ) {
            let { frameRate: n, resolution: i } = t.clipsQuality,
                a = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                o = i;
            r.setClipsQualitySettings(a, o, n) || null == e || this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let t = a.ZP.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = a.ZP.getVisibleGame();
        null != t &&
            (e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), p.jp)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, d.LI)() || null != o.Z.getCurrentUserActiveStream()) return;
        let e = a.ZP.getVisibleGame();
        if (
            (null == e ? void 0 : e.pid) == null ||
            (null == e ? void 0 : e.windowHandle) == null ||
            null == e.name ||
            "" === e.name
        )
            return;
        let t = c.Z.getSettings();
        i.Z.dispatch({
            type: "CLIPS_INIT",
            sourceId: "window:".concat(null == e ? void 0 : e.windowHandle),
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = c.Z.getSettings().storageLocation;
        "" !== e &&
            f.jv(e).catch((e) => {
                p.jF.error("Failed to load clips directory on connection open", e);
            });
    }
}
let g = new h();
