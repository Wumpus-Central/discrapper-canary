n.d(t, {
    Bh: () => f,
    G5: () => _,
    ig: () => d
});
var r = n(399606),
    i = n(704215),
    a = n(314897),
    o = n(70956),
    s = n(709054),
    l = n(68985);
let c = {
        [i.z.MJ_NEW_USER_CHAT_BAR]: 0,
        [i.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
        [i.z.SEEN_LAUNCH_WELCOME]: 0,
        [i.z.SEEN_OLD_DESIGN]: 0,
        [i.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
        [i.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
        [i.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
        [i.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
        [i.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
        [i.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
        [i.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
        [i.z.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
        [i.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
        [i.z.TRIAL_NUX_EMOJI_BUTTON]: 0,
        [i.z.TRIAL_NUX_EMOJI_PICKER]: 0,
        [i.z.TRIAL_NUX_STREAM_COACH_MARK]: 0,
        [i.z.OVERLAY_OOP_SETTINGS_NUX]: 0,
        [i.z.OVERLAY_OOP_WELCOME_NUX]: 0,
        [i.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
        [i.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
        [i.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
        [i.z.Q1_2025_REVERSE_TRIAL]: 0,
        [i.z.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER]: 0,
        [i.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
        [i.z.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
        [i.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
        [i.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2]: 0,
        [i.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]: 0,
        [i.z.Q2_2025_MARKETING_MOMENT_FIRST_IMPRESSION_MODAL]: 0,
        [i.z.BOGO_2025_ANNOUNCEMENT_MODAL]: 0
    },
    u = o.Z.Millis.DAY;
function d(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, r.cj)([a.default, l.Z], () => ({
        userId: a.default.getId(),
        newUserMinAgeRequiredOverridden: l.Z.newUserMinAgeRequiredOverridden
    }));
    return n ? e : e.filter((e) => _(t, e));
}
function f(e) {
    return !l.Z.newUserMinAgeRequiredOverridden && !_(a.default.getId(), e);
}
function _(e, t) {
    var n;
    return null != e && s.default.age(e) >= (null != (n = c[t]) ? n : u);
}
