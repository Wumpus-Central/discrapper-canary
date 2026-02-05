"use strict";
n.d(t, { X5: () => m, eO: () => h, pn: () => g });
var r = n(311907),
    i = n(506774),
    a = n(401843),
    s = n(250105),
    o = n(217222),
    l = n(128319),
    u = n(929921),
    c = n(753070);
let d = { allowAutoQuality: !1, defaultAutoQuality: !1, migrateAutoQuality: !1 },
    _ = "GoLiveAutoQualityMigrationVersion",
    f = 1,
    p = (0, s.Ay)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: d,
        variations: {
            1: { ...d, allowAutoQuality: !0, migrateAutoQuality: !0 },
            2: { ...d, allowAutoQuality: !0, defaultAutoQuality: !0 },
        },
    });
function h(e) {
    let { location: t } = e,
        { isInHoldout: n } = l.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? p.definition.defaultConfig : p.getConfig({ location: t });
}
function m(e) {
    let { location: t } = e;
    return (0, r.bG)([o.A], () => h({ location: t }));
}
function g() {
    let e = p.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        t = Number(i.w.get(_) ?? 0);
    if (!e || t >= f) return;
    let n = u.A.getState();
    if (n.preset !== c.jQ.PRESET_CUSTOM) {
        (0, a.Xd)({
            preset: c.jQ.PRESET_AUTO,
            resolution: n.resolution,
            frameRate: n.fps,
            soundshareEnabled: n.soundshareEnabled,
            noTrack: !0,
        }),
            i.w.set(_, f);
        return;
    }
}
