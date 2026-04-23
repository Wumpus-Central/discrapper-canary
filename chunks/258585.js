"use strict";
n.d(t, { X5: () => h, eO: () => E, pn: () => m });
var i = n(17928),
    r = n(506774),
    s = n(401843),
    a = n(250105),
    o = n(710195),
    l = n(929921),
    d = n(753070);
let _ = { allowAutoQuality: !1, defaultAutoQuality: !1, migrateAutoQuality: !1 },
    u = "GoLiveAutoQualityMigrationVersion",
    c = (0, a.Ay)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: _,
        variations: {
            1: { ..._, allowAutoQuality: !0, migrateAutoQuality: !0 },
            2: { ..._, allowAutoQuality: !0, defaultAutoQuality: !0 },
        },
    });
function E(e) {
    let { location: t } = e;
    return c.getConfig({ location: t });
}
function h(e) {
    let { location: t } = e;
    return (0, i.bG)([o.A], () => E({ location: t }));
}
function m() {
    let e = c.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        t = Number(r.w.get(u) ?? 0);
    if (!e || t >= 1) return;
    let n = l.A.getState();
    if (n.preset !== d.jQ.PRESET_CUSTOM) {
        (0, s.Xd)({
            preset: d.jQ.PRESET_AUTO,
            resolution: n.resolution,
            frameRate: n.fps,
            soundshareEnabled: n.soundshareEnabled,
            noTrack: !0,
        }),
            r.w.set(u, 1);
        return;
    }
}
