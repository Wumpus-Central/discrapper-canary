"use strict";
n.d(t, { A: () => y });
var r = n(397927),
    i = n(73153),
    s = n(15285),
    a = n(616356),
    o = n(430452),
    l = n(837921),
    u = n(366598),
    c = n(274372),
    d = n(746781),
    _ = n(915618),
    f = n(572164),
    p = n(399925);
n(63389);
var h = n(696016),
    m = n(731854),
    E = n(985018);
let g = "CLIPS_IN_CALL_WARNING",
    A = !1,
    I = null;
function T() {
    return A
        ? Promise.resolve()
        : null != I
          ? I
          : (I = (async () => {
                try {
                    await l.Ay.ensureModule("discord_clips");
                    let e = l.Ay.requireModule("discord_clips").getModulePath(),
                        t = o.Ay.getMediaEngine(),
                        n = l.Ay.getClipsDataDirSync();
                    t.setClipsDataPath(n),
                        d.A.start(),
                        t.setClipsModulePath(e),
                        (A = !0),
                        h.nx.info("discord_clips module loaded, path: " + e);
                } catch (e) {
                    (I = null), h.nx.error("Failed to load discord_clips module", e);
                }
            })());
}
class S extends u.A {
    showClipsToast() {
        (0, r.showToast)({
            id: g,
            message: E.intl.string(E.t["d+41qJ"]),
            type: r.ToastType.CLIP,
            options: { duration: h.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, _.A)(o.Ay)) return;
        let t = o.Ay.getMediaEngine(),
            n = () => {
                let n = c.A.getSettings(),
                    r = (0, f.TD)();
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
        A || !t.supports(m.O5.CLIPS_V3) ? n() : T().then(n);
    }
    handleClipsInitOnToggleDetection(e) {
        let t = s.Ay.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = s.Ay.getVisibleGame();
        null == t ||
            (e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), h.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, f.TD)() || null != a.A.getCurrentUserActiveStream()) return;
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
            p.Fb(e).catch((e) => {
                h.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let y = new S();
