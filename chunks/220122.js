n.d(t, { Z: () => E });
var r = n(481060),
    i = n(570140),
    a = n(594190),
    o = n(199902),
    s = n(131951),
    l = n(474639),
    c = n(725547),
    u = n(435064),
    d = n(779618),
    f = n(341569),
    p = n(39604);
n(600349);
var _ = n(356659),
    h = n(388032);
let m = "CLIPS_IN_CALL_WARNING";
class g extends l.Z {
    showClipsToast() {
        (0, r.showToast)({
            id: m,
            message: h.intl.string(h.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: _.G$ },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, d.Z)(s.Z)) return;
        let t = u.Z.getSettings(),
            n = (0, f.LI)(),
            r = s.Z.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1000 : 0),
            r.setClipsMaxPendingTasks(c.Z.getConfig({ location: "applyNativeClipsSettings" }).count),
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
                ? setTimeout(() => this.fireClipsInitEvent(), _.jp)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, f.LI)() || null != o.Z.getCurrentUserActiveStream()) return;
        let e = a.ZP.getVisibleGame();
        if (
            (null == e ? void 0 : e.pid) == null ||
            (null == e ? void 0 : e.windowHandle) == null ||
            null == e.name ||
            "" === e.name
        )
            return;
        let t = u.Z.getSettings();
        i.Z.dispatch({
            type: "CLIPS_INIT",
            sourceId: "window:".concat(null == e ? void 0 : e.windowHandle),
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = u.Z.getSettings().storageLocation;
        "" !== e &&
            p.jv(e).catch((e) => {
                _.jF.error("Failed to load clips directory on connection open", e);
            });
    }
}
let E = new g();
