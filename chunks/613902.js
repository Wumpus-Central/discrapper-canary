n.d(t, { E: () => r });
var i = n(945810);
let l = { enabled: !1 },
    s = (0, i.mj)({
        name: "2026-08-game-profiles-vc",
        kind: "user",
        defaultConfig: l,
        variations: { 0: l, 1: { enabled: !0 } },
    });
function r(e) {
    let { location: t } = e;
    return s.useConfig({ location: t }).enabled;
}
