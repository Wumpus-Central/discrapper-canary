(n.d(t, { Et: () => u, Us: () => c, de: () => o, jQ: () => l, yG: () => d }), n(205816));
var i = n(723702),
    r = n(809526),
    a = n(105292);
let s = {
        screen_capture: { isSupported: i.isDesktop, getLabel: () => a.intl.string(r.default["2KIefJ"]) },
        connect_user_to_voice: { isSupported: () => !0, getLabel: () => a.intl.string(r.default["5Hp3Nx"]) },
    },
    l = Object.keys(s);
function o(e) {
    return "string" == typeof e && Object.hasOwn(s, e);
}
function d(e) {
    return s[e].isSupported();
}
function c(e) {
    return s[e].getLabel();
}
function u(e) {
    return a.intl.formatToPlainString(r.default.vBSfKU, { app: e });
}
