n.d(t, {
    C5: () => s,
    Sk: () => a,
    yX: () => i,
    yg: () => o,
}),
    n(228524);
var r = n(392107);
function i(e) {
    let t = {};
    if (
        (void 0 !== e.pendingBanner && (t.banner = e.pendingBanner),
        null != e.pendingBio && (t.bio = e.pendingBio),
        null != e.pendingPronouns && (t.pronouns = e.pendingPronouns),
        void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor),
        void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors),
        void 0 !== e.pendingProfileEffect)
    ) {
        var n, r;
        t.profile_effect_sku_id = null != (n = null == (r = e.pendingProfileEffect) ? void 0 : r.skuId) ? n : null;
    }
    return t;
}
function a(e) {
    let t = {};
    if (
        (void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName),
        void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate),
        void 0 !== e.pendingAvatar)
    ) {
        let { pendingAvatar: n } = e;
        null === n
            ? (t.avatar = null)
            : n.assetOrigin === r.E.ARCHIVED_ASSET
              ? (t.avatarId = n.originalAsset.id)
              : ((t.avatar = n.imageUri), (t.avatarDescription = n.description));
    }
    return (
        void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration),
        void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles),
        t
    );
}
function s(e) {
    let t = {};
    if (void 0 !== e.pendingAvatar) {
        let { pendingAvatar: n } = e;
        null === n
            ? (t.avatar = null)
            : n.assetOrigin === r.E.ARCHIVED_ASSET
              ? (t.avatarId = n.originalAsset.id)
              : ((t.avatar = n.imageUri), (t.avatarDescription = n.description));
    }
    if (void 0 !== e.pendingNickname) {
        var n;
        t.nick = null != (n = e.pendingNickname) ? n : "";
    }
    return (
        void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration),
        void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate),
        void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles),
        t
    );
}
function o(e) {
    let t = {};
    return void 0 !== e.pendingPrimaryGuildId && (t.primaryGuildId = e.pendingPrimaryGuildId), t;
}
