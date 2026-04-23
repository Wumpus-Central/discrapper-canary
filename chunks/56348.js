n.d(t, { yX: () => s, Sk: () => o, C5: () => d, yg: () => c }), n(321073);
var l = n(575593),
    a = n(392107),
    i = n(287809),
    r = n(841595);
function s(e, t) {
    let n = {};
    void 0 !== e.pendingBanner && (n.banner = e.pendingBanner),
        null != e.pendingBio && (n.bio = e.pendingBio),
        null != e.pendingPronouns && (n.pronouns = e.pendingPronouns),
        void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor),
        void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
    let a = (function (e, t) {
        let n,
            { pendingProfileEffect: a, pendingProfileFrame: s } = e;
        if (void 0 === a && void 0 === s) return {};
        let o =
                null == (n = i.default.getCurrentUser())
                    ? null
                    : null != t
                      ? r.A.getGuildMemberProfile(n.id, t)
                      : r.A.getUserProfile(n.id),
            d = [...(o?.collectibles ?? [])];
        return (
            void 0 !== a &&
                ((d = d.filter((e) => {
                    let { type: t } = e;
                    return t !== l.R.PROFILE_EFFECT;
                })),
                null !== a && d.push({ skuId: a.skuId, type: l.R.PROFILE_EFFECT })),
            void 0 !== s &&
                ((d = d.filter((e) => {
                    let { type: t } = e;
                    return t !== l.R.PROFILE_FRAME;
                })),
                null !== s && d.push(s)),
            {
                collectibles_sku_ids: d.map((e) => {
                    let { skuId: t } = e;
                    return t;
                }),
            }
        );
    })(e, t);
    return void 0 !== a.collectibles_sku_ids && (n.collectibles_sku_ids = a.collectibles_sku_ids), n;
}
function o(e) {
    let t = {};
    if (
        (void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName),
        void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate),
        void 0 !== e.pendingAvatar)
    ) {
        let { pendingAvatar: n } = e;
        null === n
            ? (t.avatar = null)
            : n.assetOrigin === a.E.ARCHIVED_ASSET
              ? (t.avatarId = n.originalAsset.id)
              : ((t.avatar = n.imageUri), (t.avatarDescription = n.description));
    }
    return (
        void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration),
        void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles),
        t
    );
}
function d(e) {
    let t = {};
    if (void 0 !== e.pendingAvatar) {
        let { pendingAvatar: n } = e;
        null === n
            ? (t.avatar = null)
            : n.assetOrigin === a.E.ARCHIVED_ASSET
              ? (t.avatarId = n.originalAsset.id)
              : ((t.avatar = n.imageUri), (t.avatarDescription = n.description));
    }
    return (
        void 0 !== e.pendingNickname && (t.nick = e.pendingNickname ?? ""),
        void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration),
        void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate),
        void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles),
        t
    );
}
function c(e) {
    let t = {};
    return void 0 !== e.pendingPrimaryGuildId && (t.primaryGuildId = e.pendingPrimaryGuildId), t;
}
