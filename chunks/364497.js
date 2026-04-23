s.d(t, { W: () => l });
var n = s(945810),
    i = s(792620);
let a = (0, n.mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e, t) {
    let s = a.useConfig({ location: t }).enabled,
        n = null != e.config.ctaConfig;
    return s && n && !(0, i.g5)(e);
}
