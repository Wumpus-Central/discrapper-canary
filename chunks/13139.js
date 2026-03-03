"use strict";
n.d(t, { A: () => g });
var r = n(397927),
    i = n(73153),
    s = n(15285),
    a = n(616356),
    o = n(430452),
    l = n(431767),
    u = n(366598),
    c = n(274372),
    d = n(915618),
    _ = n(572164),
    f = n(399925);
n(63389);
var p = n(696016),
    h = n(985018);
let m = "CLIPS_IN_CALL_WARNING";
class E extends u.A {
    showClipsToast() {
        (0, r.showToast)({
            id: m,
            message: h.intl.string(h.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: p.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, d.A)(o.Ay)) return;
        let t = c.A.getSettings(),
            n = (0, _.TD)(),
            r = o.Ay.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1e3 : 0),
            r.setClipsBufferSize(l.A.getConfig({ location: "applyNativeClipsSettings" }).size),
            e?.settings.decoupledClipsEnabled === !0 && this.fireClipsInitEvent(),
            null == e || e?.settings.clipsQuality != null)
        ) {
            let { frameRate: n, resolution: i } = t.clipsQuality,
                s = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                a = i;
            r.setClipsQualitySettings(s, a, n) || null == e || this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let t = s.Ay.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = s.Ay.getVisibleGame();
        null == t ||
            (e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), p.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, _.TD)() || null != a.A.getCurrentUserActiveStream()) return;
        let e = s.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = c.A.getSettings();
        i.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = c.A.getSettings().storageLocation;
        "" !== e &&
            f.Fb(e).catch((e) => {
                p.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let g = new E();
