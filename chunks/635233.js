n.d(t, { Kg: () => d, LO: () => c, P: () => _, TX: () => u, mv: () => o, uS: () => E });
var i = n(967198),
    r = n(174459),
    a = n(5180),
    s = n(652215);
let l = "manual_browsing";
function o(e) {
    (0, a.ai)(i.A.getGuildId()) || (l = e);
}
function d() {
    let e = l;
    return (l = "manual_browsing"), e;
}
function c(e, t, n) {
    r.default.track(s.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, { source: e, channel_type: t, total_favorites: n });
}
function u(e, t) {
    r.default.track(s.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, { channel_type: e, total_favorites: t });
}
function _() {
    r.default.track(s.HAw.FAVORITES_GUILD_ORDER_UPDATED);
}
function E(e, t) {
    r.default.track(s.HAw.FAVORITES_GUILD_SETTING_TOGGLED, { source: e, is_visible: t });
}
