n.d(t, { E: () => r });
var l = n(945810);
let i = { enabled: !1 },
    s = (0, l.mj)({
        name: "2026-08-game-profiles-vc",
        kind: "user",
        defaultConfig: i,
        variations: { 0: i, 1: { enabled: !0 } },
    });
function r(e) {
    let { location: t } = e;
    return s.useConfig({ location: t }).enabled;
}
