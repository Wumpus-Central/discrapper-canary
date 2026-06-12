"use strict";
n.d(t, { X5: () => f, eO: () => h, pn: () => p });
var i = n(17928),
    r = n(506774),
    s = n(401843),
    a = n(240921),
    o = n(710195),
    l = n(929921),
    u = n(753070);
let c = { allowAutoQuality: !1, defaultAutoQuality: !1, migrateAutoQuality: !1 },
    d = "GoLiveAutoQualityMigrationVersion",
    _ = (0, a.Ay)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: c,
        variations: {
            1: { ...c, allowAutoQuality: !0, migrateAutoQuality: !0 },
            2: { ...c, allowAutoQuality: !0, defaultAutoQuality: !0 },
        },
    });
function h(e) {
    let { location: t } = e;
    return _.getConfig({ location: t });
}
function f(e) {
    let { location: t } = e;
    return (0, i.bG)([o.A], () => h({ location: t }));
}
function p() {
    let e = _.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        t = Number(r.w.get(d) ?? 0);
    if (!e || t >= 1) return;
    let n = l.A.getState();
    if (n.preset !== u.jQ.PRESET_CUSTOM) {
        (0, s.Xd)({
            preset: u.jQ.PRESET_AUTO,
            resolution: n.resolution,
            frameRate: n.fps,
            soundshareEnabled: n.soundshareEnabled,
            noTrack: !0,
        }),
            r.w.set(d, 1);
        return;
    }
}
