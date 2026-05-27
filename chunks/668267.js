e.d(t, {
    Kg: () => u,
    LO: () => s,
    P: () => _,
    TX: () => c,
    U5: () => d,
    XC: () => p,
    mv: () => f,
    tC: () => A,
    uS: () => E,
});
var i = e(967198),
    a = e(174459),
    o = e(5180),
    l = e(652215);
let r = "manual_browsing";
function f(n) {
    (0, o.ai)(i.A.getGuildId()) || (r = n);
}
function u() {
    let n = r;
    return (r = "manual_browsing"), n;
}
function s(n, t, e) {
    a.default.track(l.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, { source: n, channel_type: t, total_favorites: e });
}
function c(n, t) {
    a.default.track(l.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, { channel_type: n, total_favorites: t });
}
function _() {
    a.default.track(l.HAw.FAVORITES_GUILD_ORDER_UPDATED);
}
function E(n, t) {
    a.default.track(l.HAw.FAVORITES_GUILD_SETTING_TOGGLED, { source: n, is_visible: t });
}
function p(n) {
    a.default.track(l.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: n });
}
function A(n) {
    a.default.track(l.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: n });
}
function d(n, t, e, i) {
    a.default.track(l.HAw.FAVORITES_GUILD_VIEWED, {
        source: n,
        total_favorites: t,
        is_xp_enabled: e,
        is_premium_tier_2: i,
    });
}
