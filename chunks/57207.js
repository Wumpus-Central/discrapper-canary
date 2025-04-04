n.d(t, {
    B: () => f,
    i: () => d
});
var r = n(399606),
    i = n(704215),
    o = n(314897),
    a = n(70956),
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
        [i.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0
    },
    u = a.Z.Millis.DAY;
function d(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, r.cj)([o.default, l.Z], () => ({
        userId: o.default.getId(),
        newUserMinAgeRequiredOverridden: l.Z.newUserMinAgeRequiredOverridden
    }));
    if (n) return e;
    let i = null != t ? s.default.age(t) : 0;
    return e.filter((e) => {
        var t;
        return i > (null != (t = c[e]) ? t : u);
    });
}
function f(e) {
    var t;
    return !l.Z.newUserMinAgeRequiredOverridden && (null != o.default.getId() ? s.default.age(o.default.getId()) : 0) < (null != (t = c[e]) ? t : u);
}
