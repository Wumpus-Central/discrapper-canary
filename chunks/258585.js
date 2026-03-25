"use strict";
n.d(t, { X5: () => h, eO: () => p, pn: () => m });
var r = n(311907),
    i = n(506774),
    s = n(401843),
    a = n(250105),
    o = n(217222),
    l = n(929921),
    u = n(753070);
let c = { allowAutoQuality: !1, defaultAutoQuality: !1, migrateAutoQuality: !1 },
    d = "GoLiveAutoQualityMigrationVersion",
    _ = 1,
    f = (0, a.Ay)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: c,
        variations: {
            1: { ...c, allowAutoQuality: !0, migrateAutoQuality: !0 },
            2: { ...c, allowAutoQuality: !0, defaultAutoQuality: !0 },
        },
    });
function p(e) {
    let { location: t } = e;
    return f.getConfig({ location: t });
}
function h(e) {
    let { location: t } = e;
    return (0, r.bG)([o.A], () => p({ location: t }));
}
function m() {
    let e = f.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        t = Number(i.w.get(d) ?? 0);
    if (!e || t >= _) return;
    let n = l.A.getState();
    if (n.preset !== u.jQ.PRESET_CUSTOM) {
        (0, s.Xd)({
            preset: u.jQ.PRESET_AUTO,
            resolution: n.resolution,
            frameRate: n.fps,
            soundshareEnabled: n.soundshareEnabled,
            noTrack: !0,
        }),
            i.w.set(d, _);
        return;
    }
}
