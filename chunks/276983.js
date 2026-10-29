(n.d(t, { Et: () => d, Us: () => c, de: () => o, jQ: () => l, yG: () => a }), n(205816));
var r = n(723702),
    s = n(87501),
    i = n(105292);
let u = {
        screen_capture: { isSupported: r.isDesktop, getLabel: () => i.intl.string(s.default["2KIefJ"]) },
        connect_user_to_voice: { isSupported: () => !0, getLabel: () => i.intl.string(s.default["5Hp3Nx"]) },
    },
    l = Object.keys(u);
function o(e) {
    return "string" == typeof e && Object.hasOwn(u, e);
}
function a(e) {
    return u[e].isSupported();
}
function c(e) {
    return u[e].getLabel();
}
function d(e) {
    return i.intl.formatToPlainString(s.default.vBSfKU, { app: e });
}
