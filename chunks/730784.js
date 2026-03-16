n.d(t, { R: () => s });
let i = (0, n(945810).mj)({
    name: "2026-03-enable-premium-home-premium-group-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return n;
}
