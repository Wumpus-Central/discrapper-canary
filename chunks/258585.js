"use strict";
n.d(t, { X5: () => A, eO: () => E, pn: () => h });
var i = n(17928),
    r = n(506774),
    a = n(401843),
    s = n(240921),
    l = n(710195),
    o = n(929921),
    d = n(753070);
let c = { allowAutoQuality: !1, defaultAutoQuality: !1, migrateAutoQuality: !1 },
    u = "GoLiveAutoQualityMigrationVersion",
    _ = (0, s.Ay)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: c,
        variations: {
            1: { ...c, allowAutoQuality: !0, migrateAutoQuality: !0 },
            2: { ...c, allowAutoQuality: !0, defaultAutoQuality: !0 },
        },
    });
function E(e) {
    let { location: t } = e;
    return _.getConfig({ location: t });
}
function A(e) {
    let { location: t } = e;
    return (0, i.bG)([l.A], () => E({ location: t }));
}
function h() {
    let e = _.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        t = Number(r.w.get(u) ?? 0);
    if (!e || t >= 1) return;
    let n = o.A.getState();
    if (n.preset !== d.jQ.PRESET_CUSTOM) {
        (0, a.Xd)({
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
