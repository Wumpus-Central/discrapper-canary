n.d(t, {
    ED: () => o,
    Jo: () => a,
    g9: () => i
}),
    n(266796);
var r = n(72703);
function i(e) {
    let t = {};
    return void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), null != e.pendingBio && (t.bio = e.pendingBio), null != e.pendingPronouns && (t.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), void 0 !== e.pendingProfileEffectId && (t.profile_effect_id = null != e.pendingProfileEffectId ? e.pendingProfileEffectId : null), t;
}
function o(e) {
    let t = {};
    if ((void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName), void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), void 0 !== e.pendingAvatar)) {
        let { pendingAvatar: n } = e;
        null === n ? (t.avatar = null) : n.assetOrigin === r.q.ARCHIVED_ASSET ? (t.avatarId = n.originalAsset.id) : ((t.avatar = n.imageUri), (t.avatarDescription = n.description));
    }
    return void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), t;
}
function a(e) {
    let t = {};
    if (void 0 !== e.pendingAvatar) {
        let { pendingAvatar: n } = e;
        null === n ? (t.avatar = null) : n.assetOrigin === r.q.ARCHIVED_ASSET ? (t.avatarId = n.originalAsset.id) : ((t.avatar = n.imageUri), (t.avatarDescription = n.description));
    }
    if (void 0 !== e.pendingNickname) {
        var n;
        t.nick = null != (n = e.pendingNickname) ? n : '';
    }
    return void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), t;
}
