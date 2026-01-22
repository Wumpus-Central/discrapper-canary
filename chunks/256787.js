n.d(t, {
    IL: () => f,
    Jq: () => _,
    L0: () => d,
    PN: () => g,
    XQ: () => m,
    Zm: () => p,
    ef: () => h,
    ki: () => u,
    vf: () => E,
    zd: () => b,
});
var r = n(554146);
let i = [
        r.M.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        r.M.GIFTING_PROMOTION_ICON,
        r.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
        r.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
        r.M.GIFTING_PROMOTION_REMINDER,
        r.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
        r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        r.M.COLLECTIBLES_SHOP_WIDE_BANNER,
        r.M.GAME_SHOP_ANNOUNCEMENT_MODAL,
    ],
    a = [
        r.M.GIFTING_INTENT_FRIENDS_TAB_BADGE,
        r.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL,
        r.M.GUILD_TAG_AVAILABLE_COACHMARK,
        r.M.GUILD_POWERUP_NOTIFICATION,
        r.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK,
        r.M.NITRO_TENURE_BADGE_LEVEL_UP,
        r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING,
        r.M.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        r.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        r.M.DO_NOT_DISTURB_REMINDER_POPOVER,
        r.M.NOTIFICATION_NUDGE_DM_HOME_BANNER,
        r.M.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER,
        r.M.NOTIFICATION_NUDGE_APP_START_BOTTOM_SHEET,
        r.M.GUILD_TAG_UPDATED_COACHMARK,
    ],
    s = [
        r.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        r.M.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        r.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
        r.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        r.M.DISCOUNT_OFFER_ACTION_SHEET,
        r.M.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
        r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER,
    ],
    o = [r.M.GAME_SHOP_NEW_BADGE],
    l = [
        r.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        r.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION,
        r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        r.M.GAME_SERVER_HOSTING_NEW_BADGE,
        r.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        r.M.GUILD_TAG_AVAILABLE_COACHMARK_V2,
    ],
    c = [];

function u(e) {
    return a.includes(e);
}

function d(e) {
    return i.includes(e);
}

function f(e) {
    return s.includes(e);
}

function p(e) {
    return u(e) || d(e) || f(e);
}

function _(e) {
    return !p(e);
}

function h(e) {
    return l.includes(e);
}

function m(e) {
    return c.includes(e);
}

function g(e) {
    return o.includes(e);
}

function E(e) {
    return h(e) || m(e) || g(e);
}
let b = Object.keys(r.M)
    .map((e) => parseInt(e))
    .filter((e) => !isNaN(e));
b.filter(_);
