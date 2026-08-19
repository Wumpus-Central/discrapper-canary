n.d(t, { Rv: () => a });
let i = (0, n(240921).Ay)({
    name: "2026-04-inappropriate-conversations-default-on",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function a(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return n;
}
