function i(e) {
    let n = {};
    return void 0 !== e.pendingBanner && (n.banner = e.pendingBanner), null != e.pendingBio && (n.bio = e.pendingBio), null != e.pendingPronouns && (n.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors), void 0 !== e.pendingProfileEffectId && (n.profile_effect_id = null != e.pendingProfileEffectId ? e.pendingProfileEffectId : null), n;
}
function a(e) {
    let n = {};
    return void 0 !== e.pendingGlobalName && (n.globalName = e.pendingGlobalName), void 0 !== e.pendingAvatar && (n.avatar = e.pendingAvatar), void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), n;
}
function o(e) {
    let n = {};
    if ((void 0 !== e.pendingAvatar && (n.avatar = e.pendingAvatar), void 0 !== e.pendingNickname)) {
        var r;
        n.nick = null !== (r = e.pendingNickname) && void 0 !== r ? r : '';
    }
    return void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), n;
}
r.d(n, {
    ED: function () {
        return a;
    },
    Jo: function () {
        return o;
    },
    g9: function () {
        return i;
    }
});
