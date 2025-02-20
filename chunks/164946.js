function r(e) {
    let t = {};
    return void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), null != e.pendingBio && (t.bio = e.pendingBio), null != e.pendingPronouns && (t.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), void 0 !== e.pendingProfileEffectId && (t.profile_effect_id = null != e.pendingProfileEffectId ? e.pendingProfileEffectId : null), t;
}
function i(e) {
    let t = {};
    return void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), t;
}
function o(e) {
    let t = {};
    if ((void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingNickname)) {
        var n;
        t.nick = null !== (n = e.pendingNickname) && void 0 !== n ? n : '';
    }
    return void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), t;
}
n.d(t, {
    ED: () => i,
    Jo: () => o,
    g9: () => r
});
