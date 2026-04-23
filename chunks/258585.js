"use strict";
n.d(t, { X5: () => p, eO: () => f, pn: () => h });
var r = n(311907),
    i = n(506774),
    s = n(401843),
    a = n(250105),
    o = n(217222),
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
function f(e) {
    let { location: t } = e;
    return _.getConfig({ location: t });
}
function p(e) {
    let { location: t } = e;
    return (0, r.bG)([o.A], () => f({ location: t }));
}
function h() {
    let e = _.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        t = Number(i.w.get(d) ?? 0);
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
            i.w.set(d, 1);
        return;
    }
}
