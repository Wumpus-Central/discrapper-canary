n.d(t, { C$: () => o, Oh: () => s, vV: () => a });
var r = n(192444),
    u = n(710969),
    l = n(723702),
    i = n(929482);
function o() {
    return r.Se.getConfig({ location: "quest_ios_attribution" }).enabled && (0, l.isIOS)();
}
function s(e, t) {
    return (0, u.vZ)(e, t)?.is_campaign_ios_attribution_enabled === !0;
}
function a(e, t, n) {
    return o() && e && s(t, n) ? (0, i.BU)() : null;
}
