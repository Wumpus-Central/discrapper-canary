"use strict";
n.d(t, {
    Kg: () => u,
    LO: () => c,
    P: () => _,
    TX: () => d,
    U5: () => E,
    XC: () => h,
    mv: () => l,
    tC: () => p,
    uS: () => f,
});
var i = n(967198),
    r = n(174459),
    s = n(5180),
    a = n(652215);
let o = "manual_browsing";
function l(e) {
    (0, s.ai)(i.A.getGuildId()) || (o = e);
}
function u() {
    let e = o;
    return (o = "manual_browsing"), e;
}
function c(e, t, n) {
    r.default.track(a.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, { source: e, channel_type: t, total_favorites: n });
}
function d(e, t) {
    r.default.track(a.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, { channel_type: e, total_favorites: t });
}
function _() {
    r.default.track(a.HAw.FAVORITES_GUILD_ORDER_UPDATED);
}
function f(e, t) {
    r.default.track(a.HAw.FAVORITES_GUILD_SETTING_TOGGLED, { source: e, is_visible: t });
}
function h(e) {
    r.default.track(a.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: e });
}
function p(e) {
    r.default.track(a.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: e });
}
function E(e, t, n, i) {
    r.default.track(a.HAw.FAVORITES_GUILD_VIEWED, {
        source: e,
        total_favorites: t,
        is_xp_enabled: n,
        is_premium_tier_2: i,
    });
}
