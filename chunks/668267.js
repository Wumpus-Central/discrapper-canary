t.d(e, {
    Kg: () => f,
    LO: () => c,
    P: () => _,
    TX: () => s,
    U5: () => A,
    XC: () => E,
    mv: () => u,
    tC: () => d,
    uS: () => p,
});
var i = t(967198),
    a = t(174459),
    l = t(5180),
    o = t(652215);
let r = "manual_browsing";
function u(n) {
    (0, l.ai)(i.A.getGuildId()) || (r = n);
}
function f() {
    let n = r;
    return (r = "manual_browsing"), n;
}
function c(n, e, t) {
    a.default.track(o.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, { source: n, channel_type: e, total_favorites: t });
}
function s(n, e) {
    a.default.track(o.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, { channel_type: n, total_favorites: e });
}
function _() {
    a.default.track(o.HAw.FAVORITES_GUILD_ORDER_UPDATED);
}
function p(n, e) {
    a.default.track(o.HAw.FAVORITES_GUILD_SETTING_TOGGLED, { source: n, is_visible: e });
}
function E(n) {
    a.default.track(o.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: n });
}
function d(n) {
    a.default.track(o.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: n });
}
function A(n, e, t, i) {
    a.default.track(o.HAw.FAVORITES_GUILD_VIEWED, {
        source: n,
        total_favorites: e,
        is_xp_enabled: t,
        is_premium_tier_2: i,
    });
}
