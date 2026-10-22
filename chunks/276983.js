(n.d(t, { Et: () => d, Us: () => c, de: () => a, jQ: () => u, yG: () => o }), n(205816));
var l = n(723702),
    r = n(248675),
    s = n(105292);
let i = {
        screen_capture: { isSupported: l.isDesktop, getLabel: () => s.intl.string(r.default["2KIefJ"]) },
        connect_user_to_voice: { isSupported: () => !0, getLabel: () => s.intl.string(r.default["5Hp3Nx"]) },
    },
    u = Object.keys(i);
function a(e) {
    return "string" == typeof e && Object.hasOwn(i, e);
}
function o(e) {
    return i[e].isSupported();
}
function c(e) {
    return i[e].getLabel();
}
function d(e) {
    return s.intl.formatToPlainString(r.default.vBSfKU, { app: e });
}
