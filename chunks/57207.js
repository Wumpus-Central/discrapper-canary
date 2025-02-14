n.d(t, {
    B: () => f,
    i: () => d
});
var i = n(399606),
    r = n(704215),
    a = n(314897),
    s = n(70956),
    o = n(709054),
    l = n(68985);
let u = {
        [r.z.MJ_NEW_USER_CHAT_BAR]: 0,
        [r.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
        [r.z.SEEN_LAUNCH_WELCOME]: 0,
        [r.z.SEEN_OLD_DESIGN]: 0,
        [r.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
        [r.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
        [r.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
        [r.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
        [r.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
        [r.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
        [r.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
        [r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR]: 0,
        [r.z.REFERRAL_INCENTIVE_AWARDED_INFO]: 0,
        [r.z.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
        [r.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
        [r.z.TRIAL_NUX_EMOJI_BUTTON]: 0,
        [r.z.TRIAL_NUX_EMOJI_PICKER]: 0,
        [r.z.TRIAL_NUX_STREAM_COACH_MARK]: 0,
        [r.z.OVERLAY_OOP_SETTINGS_NUX]: 0,
        [r.z.OVERLAY_OOP_WELCOME_NUX]: 0,
        [r.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
        [r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
        [r.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0
    },
    c = s.Z.Millis.DAY;
function d(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, i.cj)([a.default, l.Z], () => ({
        userId: a.default.getId(),
        newUserMinAgeRequiredOverridden: l.Z.newUserMinAgeRequiredOverridden
    }));
    if (n) return e;
    let r = null != t ? o.default.age(t) : 0;
    return e.filter((e) => {
        var t;
        return r > (null !== (t = u[e]) && void 0 !== t ? t : c);
    });
}
function f(e) {
    var t;
    return !l.Z.newUserMinAgeRequiredOverridden && (null != a.default.getId() ? o.default.age(a.default.getId()) : 0) < (null !== (t = u[e]) && void 0 !== t ? t : c);
}
