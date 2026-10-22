(n.d(t, { Et: () => c, Us: () => d, de: () => a, jQ: () => u, yG: () => o }), n(205816));
var l = n(723702),
    s = n(248675),
    r = n(105292);
let i = { screen_capture: { isSupported: l.isDesktop, getLabel: () => r.intl.string(s.default["2KIefJ"]) } },
    u = Object.keys(i);
function a(e) {
    return "string" == typeof e && Object.hasOwn(i, e);
}
function o(e) {
    return i[e].isSupported();
}
function d(e) {
    return i[e].getLabel();
}
function c(e) {
    return r.intl.formatToPlainString(s.default.vBSfKU, { app: e });
}
