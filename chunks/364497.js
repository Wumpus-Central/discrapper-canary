n.d(t, { W: () => l });
var a = n(945810),
    i = n(792620);
let s = (0, a.mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e, t) {
    let n = s.useConfig({ location: t }).enabled,
        a = null != e.config.ctaConfig;
    return n && a && !(0, i.g5)(e);
}
