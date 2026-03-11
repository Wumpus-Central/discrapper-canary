a.d(t, { A: () => r });
let n = (0, a(945810).mj)({
    name: "2026-03-enable-premium-group-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e,
        { enabled: a } = n.useConfig({ location: t });
    return a;
}
