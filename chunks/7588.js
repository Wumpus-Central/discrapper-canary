n.d(t, { C$: () => l, Oh: () => s, vV: () => a });
var r = n(192444),
    u = n(710969),
    i = n(723702),
    o = n(929482);
function l() {
    return r.Se.getConfig({ location: "quest_ios_attribution" }).enabled && (0, i.isIOS)();
}
function s(e, t) {
    return (0, u.vZ)(e, t)?.is_campaign_ios_attribution_enabled === !0;
}
function a(e, t, n) {
    return l() && e && s(t, n) ? (0, o.BU)() : null;
}
