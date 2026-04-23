t.d(n, { p: () => a });
var i = t(945810),
    r = t(395504);
let l = (0, i.mj)({
    name: "2026-04-channel-pinning",
    kind: "user",
    defaultConfig: { canPinEverywhere: !1 },
    variations: { 1: { canPinEverywhere: !0 } },
});
function a(e) {
    let n = (0, r.jN)(e),
        { canPinEverywhere: t } = l.useConfig({ location: "useCanPinChannelsInGuild" });
    return { canPin: n || t, pinningNewlyAvailable: !n && t };
}
