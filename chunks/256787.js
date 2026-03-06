"use strict";
n.d(t, {
    IL: () => _,
    Jq: () => p,
    L0: () => d,
    PN: () => E,
    XQ: () => m,
    Zm: () => f,
    ef: () => h,
    ki: () => c,
    vf: () => g,
    zd: () => A,
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
        r.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD,
        r.M.GAME_SHOP_ORBS_REWARD_BANNER,
        r.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT,
        r.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
    ],
    s = [
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
        r.M.GIFT_INTENT_MESSAGE,
        r.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        r.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
        r.M.FIRST_BOOSTER_UPSELL_OVERSEER,
    ],
    a = [
        r.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        r.M.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        r.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
        r.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        r.M.DISCOUNT_OFFER_ACTION_SHEET,
        r.M.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
        r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER,
        r.M.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE,
        r.M.REFERRAL_PROGRAM_POPOVER_V2,
    ],
    o = [r.M.GAME_SHOP_NEW_BADGE],
    l = [
        r.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        r.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION,
        r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        r.M.GAME_SERVER_HOSTING_NEW_BADGE,
        r.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        r.M.GUILD_TAG_AVAILABLE_COACHMARK_V2,
        r.M.GAME_CLAIM_COACHMARK,
        r.M.FIRST_BOOSTER_UPSELL,
    ],
    u = [r.M.BOOST_TO_UNLOCK_COACHMARK, r.M.EXPIRING_POWERUP_COACHMARK];
function c(e) {
    return s.includes(e);
}
function d(e) {
    return i.includes(e);
}
function _(e) {
    return a.includes(e);
}
function f(e) {
    return c(e) || d(e) || _(e);
}
function p(e) {
    return !f(e);
}
function h(e) {
    return l.includes(e);
}
function m(e) {
    return u.includes(e);
}
function E(e) {
    return o.includes(e);
}
function g(e) {
    return h(e) || m(e) || E(e);
}
let A = Object.keys(r.M)
    .map((e) => parseInt(e))
    .filter((e) => !isNaN(e));
A.filter(p);
