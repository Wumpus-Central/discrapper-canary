"use strict";
n.d(t, { A: () => I });
var r = n(397927),
    i = n(73153),
    a = n(15285),
    s = n(616356),
    o = n(430452),
    l = n(431767),
    u = n(366598),
    c = n(647785),
    d = n(274372),
    _ = n(915618),
    f = n(572164),
    h = n(399925);
n(63389);
var p = n(696016),
    g = n(985018);
let E = "CLIPS_IN_CALL_WARNING";
class A extends u.A {
    showClipsToast() {
        (0, r.showToast)({
            id: E,
            message: g.intl.string(g.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: p.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, _.A)(o.Ay)) return;
        let t = d.A.getSettings(),
            n = (0, f.TD)(),
            r = o.Ay.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1e3 : 0),
            r.setClipsMaxPendingTasks(c.A.getConfig({ location: "applyNativeClipsSettings" }).count),
            r.setClipsBufferSize(l.A.getConfig({ location: "applyNativeClipsSettings" }).size),
            e?.settings.decoupledClipsEnabled === !0 && this.fireClipsInitEvent(),
            null == e || e?.settings.clipsQuality != null)
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
                ? setTimeout(() => this.fireClipsInitEvent(), p.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, f.TD)() || null != s.A.getCurrentUserActiveStream()) return;
        let e = a.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = d.A.getSettings();
        i.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = d.A.getSettings().storageLocation;
        "" !== e &&
            h.Fb(e).catch((e) => {
                p.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let I = new A();
