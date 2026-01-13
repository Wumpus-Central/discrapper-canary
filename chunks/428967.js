n.d(t, {
    I0: () => f,
    O2: () => _,
    OQ: () => u,
    V_: () => b,
    Vc: () => m,
    cn: () => E,
    cz: () => g,
    lg: () => d,
    ms: () => h,
    qh: () => p,
});
var r = n(704215);
let i = [
        r.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        r.z.GIFTING_PROMOTION_ICON,
        r.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
        r.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
        r.z.GIFTING_PROMOTION_REMINDER,
        r.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
        r.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        r.z.COLLECTIBLES_SHOP_WIDE_BANNER,
        r.z.GAME_SHOP_ANNOUNCEMENT_MODAL,
    ],
    a = [
        r.z.GIFTING_INTENT_FRIENDS_TAB_BADGE,
        r.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL,
        r.z.GUILD_TAG_AVAILABLE_COACHMARK,
        r.z.GUILD_POWERUP_NOTIFICATION,
        r.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK,
        r.z.NITRO_TENURE_BADGE_LEVEL_UP,
        r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING,
        r.z.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        r.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        r.z.DO_NOT_DISTURB_REMINDER_POPOVER,
        r.z.NOTIFICATION_NUDGE_DM_HOME_BANNER,
        r.z.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER,
        r.z.NOTIFICATION_NUDGE_APP_START_BOTTOM_SHEET,
        r.z.GUILD_TAG_UPDATED_COACHMARK,
    ],
    o = [
        r.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        r.z.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        r.z.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
        r.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        r.z.DISCOUNT_OFFER_ACTION_SHEET,
        r.z.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
    ],
    s = [r.z.GAME_SHOP_NEW_BADGE],
    l = [
        r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        r.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION,
        r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        r.z.GAME_SERVER_HOSTING_NEW_BADGE,
        r.z.GAME_SERVER_HOSTING_NEW_COACHMARK,
        r.z.GUILD_TAG_AVAILABLE_COACHMARK_V2,
    ],
    c = [];
function u(e) {
    return a.includes(e);
}
function d(e) {
    return i.includes(e);
}
function f(e) {
    return o.includes(e);
}
function p(e) {
    return u(e) || d(e) || f(e);
}
function _(e) {
    return !p(e);
}
function m(e) {
    return l.includes(e);
}
function h(e) {
    return c.includes(e);
}
function g(e) {
    return s.includes(e);
}
function E(e) {
    return m(e) || h(e) || g(e);
}
let b = Object.keys(r.z)
    .map((e) => parseInt(e))
    .filter((e) => !isNaN(e));
b.filter(_);
