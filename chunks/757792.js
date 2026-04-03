"use strict";
n.d(t, { P3: () => _, Sg: () => d });
var r = n(417597),
    i = n(554146),
    s = n(961350),
    a = n(927813),
    o = n(661191),
    l = n(199773);
let u = {
        [i.M.MJ_NEW_USER_CHAT_BAR]: 0,
        [i.M.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
        [i.M.SEEN_LAUNCH_WELCOME]: 0,
        [i.M.SEEN_OLD_DESIGN]: 0,
        [i.M.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
        [i.M.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
        [i.M.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
        [i.M.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
        [i.M.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
        [i.M.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
        [i.M.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
        [i.M.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
        [i.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
        [i.M.TRIAL_NUX_EMOJI_BUTTON]: 0,
        [i.M.TRIAL_NUX_EMOJI_PICKER]: 0,
        [i.M.TRIAL_NUX_STREAM_COACH_MARK]: 0,
        [i.M.OVERLAY_OOP_SETTINGS_NUX]: 0,
        [i.M.OVERLAY_OOP_WELCOME_NUX]: 0,
        [i.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
        [i.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
        [i.M.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
        [i.M.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
        [i.M.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
        [i.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
        [i.M.BOGO_2025_ANNOUNCEMENT_MODAL]: 0,
        [i.M.NITRO_DROP_REWARD]: 0,
    },
    c = a.A.Millis.DAY;
function d(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, r.cf)([s.default, l.A], () => ({
        userId: s.default.getId(),
        newUserMinAgeRequiredOverridden: l.A.newUserMinAgeRequiredOverridden,
    }));
    return n ? e : e.filter((e) => f(t, e));
}
function _(e) {
    return !l.A.newUserMinAgeRequiredOverridden && !f(s.default.getId(), e);
}
function f(e, t) {
    return null != e && o.default.age(e) >= (u[t] ?? c);
}
