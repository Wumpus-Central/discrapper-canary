"use strict";
n.d(t, { A: () => E });
var r = n(397927),
    i = n(73153),
    s = n(15285),
    a = n(616356),
    o = n(430452),
    l = n(366598),
    u = n(274372),
    c = n(915618),
    d = n(572164),
    _ = n(399925);
n(63389);
var f = n(696016),
    p = n(985018);
let h = "CLIPS_IN_CALL_WARNING";
class m extends l.A {
    showClipsToast() {
        (0, r.showToast)({
            id: h,
            message: p.intl.string(p.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: f.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, c.A)(o.Ay)) return;
        let t = u.A.getSettings(),
            n = (0, d.TD)(),
            r = o.Ay.getMediaEngine();
        if (
            (r.setClipBufferLength(n ? t.clipsLength / 1e3 : 0),
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
                ? setTimeout(() => this.fireClipsInitEvent(), f.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, d.TD)() || null != a.A.getCurrentUserActiveStream()) return;
        let e = s.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = u.A.getSettings();
        i.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = u.A.getSettings().storageLocation;
        "" !== e &&
            _.Fb(e).catch((e) => {
                f.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let E = new m();
