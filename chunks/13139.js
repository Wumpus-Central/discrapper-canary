n.d(t, {
    A: () => b,
});
var r = n(397927),
    i = n(73153),
    a = n(15285),
    s = n(616356),
    o = n(430452),
    l = n(431767),
    c = n(366598),
    u = n(647785),
    d = n(274372),
    f = n(915618),
    p = n(572164),
    _ = n(399925);
n(63389);
var h = n(696016),
    m = n(985018);
let g = "CLIPS_IN_CALL_WARNING";
class E extends c.A {
    showClipsToast() {
        (0, r.showToast)({
            id: g,
            message: m.intl.string(m.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: {
                duration: h.Vi,
            },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, f.A)(o.A)) return;
        let t = d.A.getSettings(),
            n = (0, p.TD)(),
            r = o.A.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1e3 : 0),
            r.setClipsMaxPendingTasks(
                u.A.getConfig({
                    location: "applyNativeClipsSettings",
                }).count,
            ),
            r.setClipsBufferSize(
                l.A.getConfig({
                    location: "applyNativeClipsSettings",
                }).size,
            ),
            (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(),
            null == e || (null == e ? void 0 : e.settings.clipsQuality) != null)
        ) {
            let { frameRate: n, resolution: i } = t.clipsQuality,
                a = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                s = i;
            r.setClipsQualitySettings(a, s, n) || null == e || this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let t = a.Ay.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = a.Ay.getVisibleGame();
        null == t ||
            (e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), h.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, p.TD)() || null != s.A.getCurrentUserActiveStream()) return;
        let e = a.Ay.getVisibleGame();
        if (
            (null == e ? void 0 : e.pid) == null ||
            (null == e ? void 0 : e.windowHandle) == null ||
            null == e.name ||
            "" === e.name
        )
            return;
        let t = d.A.getSettings();
        i.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: "window:".concat(null == e ? void 0 : e.windowHandle),
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = d.A.getSettings().storageLocation;
        "" !== e &&
            _.Fb(e).catch((e) => {
                h.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let b = new E();
