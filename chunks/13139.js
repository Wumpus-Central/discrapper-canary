"use strict";
n.d(t, { A: () => S });
var r = n(397927),
    i = n(73153),
    s = n(15285),
    a = n(616356),
    o = n(430452),
    l = n(837921),
    u = n(366598),
    c = n(274372),
    d = n(915618),
    _ = n(572164),
    f = n(399925);
n(63389);
var p = n(696016),
    h = n(731854),
    m = n(985018);
let E = "CLIPS_IN_CALL_WARNING",
    g = !1,
    A = null;
function I() {
    return g
        ? Promise.resolve()
        : null != A
          ? A
          : (A = (async () => {
                try {
                    await l.Ay.ensureModule("discord_clips");
                    let e = l.Ay.requireModule("discord_clips").getModulePath();
                    o.Ay.getMediaEngine().setClipsModulePath(e),
                        (g = !0),
                        p.nx.info("discord_clips module loaded, path: " + e);
                } catch (e) {
                    (A = null), p.nx.error("Failed to load discord_clips module", e);
                }
            })());
}
class T extends u.A {
    showClipsToast() {
        (0, r.showToast)({
            id: E,
            message: m.intl.string(m.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: p.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, d.A)(o.Ay)) return;
        let t = o.Ay.getMediaEngine(),
            n = () => {
                let n = c.A.getSettings(),
                    r = (0, _.TD)();
                if (
                    (t.setClipBufferLength(r ? n.clipsLength / 1e3 : 0),
                    e?.settings.decoupledClipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: r, resolution: i } = n.clipsQuality,
                        s = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                        a = i;
                    t.setClipsQualitySettings(s, a, r) || null == e || this.fireClipsInitEvent();
                }
            };
        g || !t.supports(h.O5.CLIPS_V3) ? n() : I().then(n);
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
let S = new T();
