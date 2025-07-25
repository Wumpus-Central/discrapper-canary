n.d(t, {
    I0: () => d,
    O2: () => f,
    OQ: () => c,
    V_: () => g,
    Vc: () => p,
    fn: () => m,
    lg: () => u,
    ms: () => h,
    qh: () => _
});
var r = n(704215);
let i = [r.z.COLLECTIBLES_SHOP_ENTRY_MARKETING, r.z.GIFTING_PROMOTION_ICON, r.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, r.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, r.z.GIFTING_PROMOTION_REMINDER, r.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, r.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK],
    a = [r.z.GIFTING_INTENT_FRIENDS_TAB_BADGE, r.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL, r.z.GUILD_TAG_AVAILABLE_COACHMARK, r.z.GUILD_POWERUP_NOTIFICATION, r.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, r.z.NITRO_TENURE_BADGE_LEVEL_UP, r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, r.z.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET],
    o = [r.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, r.z.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET],
    s = [r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION],
    l = [];
function c(e) {
    return a.includes(e);
}
function u(e) {
    return i.includes(e);
}
function d(e) {
    return o.includes(e);
}
function _(e) {
    return c(e) || u(e) || d(e);
}
function f(e) {
    return !_(e);
}
function p(e) {
    return s.includes(e);
}
function h(e) {
    return l.includes(e);
}
function m(e) {
    return p(e) || h(e);
}
let g = Object.keys(r.z)
    .map((e) => parseInt(e))
    .filter((e) => !isNaN(e));
g.filter(f);
