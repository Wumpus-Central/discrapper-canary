"use strict";
n.d(t, { P3: () => _, Sg: () => d });
var i = n(702841),
    r = n(554146),
    s = n(495544),
    a = n(927813),
    o = n(935208),
    l = n(199773);
let u = {
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
    },
    c = a.A.Millis.DAY;
function d(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, i.cf)([s.default, l.A], () => ({
        userId: s.default.getId(),
        newUserMinAgeRequiredOverridden: l.A.newUserMinAgeRequiredOverridden,
    }));
    return n ? e : e.filter((e) => h(t, e));
}
function _(e) {
    return !l.A.newUserMinAgeRequiredOverridden && !h(s.default.getId(), e);
}
function h(e, t) {
    return null != e && o.default.age(e) >= (u[t] ?? c);
}
