"use strict";
n.d(t, { P3: () => _, Sg: () => u });
var i = n(702841),
    r = n(554146),
    a = n(280450),
    s = n(927813),
    l = n(935208),
    o = n(199773);
let d = {
        [r.M.MJ_NEW_USER_CHAT_BAR]: 0,
        [r.M.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
        [r.M.SEEN_LAUNCH_WELCOME]: 0,
        [r.M.SEEN_OLD_DESIGN]: 0,
        [r.M.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
        [r.M.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
        [r.M.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
        [r.M.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
        [r.M.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
        [r.M.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
        [r.M.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
        [r.M.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
        [r.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
        [r.M.TRIAL_NUX_EMOJI_BUTTON]: 0,
        [r.M.TRIAL_NUX_EMOJI_PICKER]: 0,
        [r.M.TRIAL_NUX_STREAM_COACH_MARK]: 0,
        [r.M.OVERLAY_OOP_SETTINGS_NUX]: 0,
        [r.M.OVERLAY_OOP_WELCOME_NUX]: 0,
        [r.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
        [r.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
        [r.M.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
        [r.M.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
        [r.M.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
        [r.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
        [r.M.PROFILE_FRAMES_NITRO_TAB_NEW_BADGE]: 0,
        [r.M.BOGO_2025_ANNOUNCEMENT_MODAL]: 0,
        [r.M.NITRO_DROP_REWARD]: 0,
        [r.M.BOUNTIES_SWIPE_UP_NUX]: 0,
    },
    c = s.A.Millis.DAY;
function u(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, i.cf)([a.default, o.A], () => ({
        userId: a.default.getId(),
        newUserMinAgeRequiredOverridden: o.A.newUserMinAgeRequiredOverridden,
    }));
    return n ? e : e.filter((e) => E(t, e));
}
function _(e) {
    return !o.A.newUserMinAgeRequiredOverridden && !E(a.default.getId(), e);
}
function E(e, t) {
    return null != e && l.default.age(e) >= (d[t] ?? c);
}
