n.d(t, { Z: () => b });
var r = n(481060),
    i = n(570140),
    a = n(594190),
    o = n(199902),
    s = n(131951),
    l = n(822742),
    c = n(474639),
    u = n(725547),
    d = n(435064),
    f = n(779618),
    p = n(341569),
    _ = n(39604);
n(600349);
var h = n(356659),
    m = n(388032);
let g = "CLIPS_IN_CALL_WARNING";
class E extends c.Z {
    showClipsToast() {
        (0, r.showToast)({
            id: g,
            message: m.intl.string(m.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: h.G$ },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, f.Z)(s.Z)) return;
        let t = d.Z.getSettings(),
            n = (0, p.LI)(),
            r = s.Z.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1000 : 0),
            r.setClipsMaxPendingTasks(u.Z.getConfig({ location: "applyNativeClipsSettings" }).count),
            r.setClipsBufferSize(l.Z.getConfig({ location: "applyNativeClipsSettings" }).size),
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
                ? setTimeout(() => this.fireClipsInitEvent(), h.jp)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, p.LI)() || null != o.Z.getCurrentUserActiveStream()) return;
        let e = a.ZP.getVisibleGame();
        if (
            (null == e ? void 0 : e.pid) == null ||
            (null == e ? void 0 : e.windowHandle) == null ||
            null == e.name ||
            "" === e.name
        )
            return;
        let t = d.Z.getSettings();
        i.Z.dispatch({
            type: "CLIPS_INIT",
            sourceId: "window:".concat(null == e ? void 0 : e.windowHandle),
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = d.Z.getSettings().storageLocation;
        "" !== e &&
            _.jv(e).catch((e) => {
                h.jF.error("Failed to load clips directory on connection open", e);
            });
    }
}
let b = new E();
