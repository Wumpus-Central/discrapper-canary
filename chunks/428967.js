n.d(t, {
    I0: () => d,
    OQ: () => c,
    Vc: () => _,
    fn: () => h,
    lg: () => u,
    ms: () => m,
    qh: () => f,
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
    ],
    o = [
        r.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        r.z.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        r.z.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
        r.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        r.z.DISCOUNT_OFFER_ACTION_SHEET,
        r.z.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
        r.z.GAME_SHOP_NEW_BADGE,
    ],
    s = [
        r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        r.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION,
        r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        r.z.GAME_SERVER_HOSTING_NEW_BADGE,
        r.z.GAME_SERVER_HOSTING_NEW_COACHMARK,
    ],
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
function f(e) {
    return c(e) || u(e) || d(e);
}
function p(e) {
    return !f(e);
}
function _(e) {
    return s.includes(e);
}
function m(e) {
    return l.includes(e);
}
function h(e) {
    return _(e) || m(e);
}
Object.keys(r.z)
    .map((e) => parseInt(e))
    .filter((e) => !isNaN(e))
    .filter(p);
