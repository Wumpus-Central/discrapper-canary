"use strict";
n.d(t, { A: () => S });
var r = n(691540),
    i = n(97483),
    s = n(73153),
    a = n(15285),
    o = n(616356),
    l = n(430452),
    u = n(837921),
    c = n(366598),
    d = n(274372),
    _ = n(746781),
    f = n(915618),
    p = n(572164),
    h = n(399925);
n(63389);
var E = n(696016),
    m = n(731854),
    g = n(985018);
let A = !1,
    I = null;
class T extends c.A {
    showClipsToast() {
        (0, r.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: g.intl.string(g.t["d+41qJ"]),
            type: i.Ck.CLIP,
            options: { duration: E.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, f.A)(l.Ay)) return;
        let t = l.Ay.getMediaEngine(),
            n = () => {
                let n = d.A.getSettings(),
                    r = (0, p.TD)();
                if (
                    (t.setClipBufferLength(r ? n.clipsLength / 1e3 : 0),
                    e?.settings.decoupledClipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: r, resolution: i } = n.clipsQuality;
                    t.setClipsQualitySettings(i <= 480 ? (i / 3) * 4 : (i / 9) * 16, i, r) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
            };
        A || !t.supports(m.O5.CLIPS_V3)
            ? n()
            : (A
                  ? Promise.resolve()
                  : null != I
                    ? I
                    : (I = (async () => {
                          try {
                              await u.Ay.ensureModule("discord_clips");
                              let e = u.Ay.requireModule("discord_clips").getModulePath(),
                                  t = l.Ay.getMediaEngine(),
                                  n = u.Ay.getClipsDataDirSync();
                              t.setClipsDataPath(n),
                                  _.A.start(),
                                  t.setClipsModulePath(e),
                                  (A = !0),
                                  E.nx.info("discord_clips module loaded, path: " + e);
                          } catch (e) {
                              (I = null), E.nx.error("Failed to load discord_clips module", e);
                          }
                      })())
              ).then(n);
    }
    handleClipsInitOnToggleDetection(e) {
        let t = a.Ay.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = a.Ay.getVisibleGame();
        null == t ||
            (e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), E.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, p.TD)() || null != o.A.getCurrentUserActiveStream()) return;
        let e = a.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = d.A.getSettings();
        s.h.dispatch({
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
                E.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let S = new T();
