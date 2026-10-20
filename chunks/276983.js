(n.d(e, { Et: () => d, Us: () => o, de: () => a, jQ: () => p, yG: () => c }), n(205816));
var r = n(723702),
    i = n(261425),
    s = n(105292);
let u = { screen_capture: { isSupported: r.isDesktop, getLabel: () => s.intl.string(i.default["2KIefJ"]) } },
    p = Object.keys(u);
function a(t) {
    return "string" == typeof t && Object.hasOwn(u, t);
}
function c(t) {
    return u[t].isSupported();
}
function o(t) {
    return u[t].getLabel();
}
function d(t) {
    return s.intl.formatToPlainString(i.default.vBSfKU, { app: t });
}
