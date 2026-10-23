(n.d(t, { Et: () => c, Us: () => d, de: () => a, jQ: () => u, yG: () => o }), n(205816));
var l = n(723702),
    r = n(248675),
    i = n(105292);
let s = {
        screen_capture: { isSupported: l.isDesktop, getLabel: () => i.intl.string(r.default["2KIefJ"]) },
        connect_user_to_voice: { isSupported: () => !0, getLabel: () => i.intl.string(r.default["5Hp3Nx"]) },
    },
    u = Object.keys(s);
function a(e) {
    return "string" == typeof e && Object.hasOwn(s, e);
}
function o(e) {
    return s[e].isSupported();
}
function d(e) {
    return s[e].getLabel();
}
function c(e) {
    return i.intl.formatToPlainString(r.default.vBSfKU, { app: e });
}
