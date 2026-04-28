i.d(n, { yX: () => d, Sk: () => o, C5: () => p, yg: () => s }), i(321073);
var a = i(575593),
    l = i(392107),
    t = i(287809),
    r = i(841595);
function d(e, n) {
    let i = {};
    void 0 !== e.pendingBanner && (i.banner = e.pendingBanner),
        null != e.pendingBio && (i.bio = e.pendingBio),
        null != e.pendingPronouns && (i.pronouns = e.pendingPronouns),
        void 0 !== e.pendingAccentColor && (i.accent_color = e.pendingAccentColor),
        void 0 !== e.pendingThemeColors && (i.theme_colors = e.pendingThemeColors);
    let l = (function (e, n) {
        let i,
            { pendingProfileEffect: l, pendingProfileFrame: d } = e;
        if (void 0 === l && void 0 === d) return {};
        let o =
                null == (i = t.default.getCurrentUser())
                    ? null
                    : null != n
                      ? r.A.getGuildMemberProfile(i.id, n)
                      : r.A.getUserProfile(i.id),
            p = [...(o?.collectibles ?? [])];
        return (
            void 0 !== l &&
                ((p = p.filter((e) => {
                    let { type: n } = e;
                    return n !== a.R.PROFILE_EFFECT;
                })),
                null !== l && p.push({ skuId: l.skuId, type: a.R.PROFILE_EFFECT })),
            void 0 !== d &&
                ((p = p.filter((e) => {
                    let { type: n } = e;
                    return n !== a.R.PROFILE_FRAME;
                })),
                null !== d && p.push(d)),
            {
                collectibles_sku_ids: p.map((e) => {
                    let { skuId: n } = e;
                    return n;
                }),
            }
        );
    })(e, n);
    return void 0 !== l.collectibles_sku_ids && (i.collectibles_sku_ids = l.collectibles_sku_ids), i;
}
function o(e) {
    let n = {};
    if (
        (void 0 !== e.pendingGlobalName && (n.globalName = e.pendingGlobalName),
        void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate),
        void 0 !== e.pendingAvatar)
    ) {
        let { pendingAvatar: i } = e;
        null === i
            ? (n.avatar = null)
            : i.assetOrigin === l.E.ARCHIVED_ASSET
              ? (n.avatarId = i.originalAsset.id)
              : ((n.avatar = i.imageUri), (n.avatarDescription = i.description));
    }
    return (
        void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration),
        void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles),
        n
    );
}
function p(e) {
    let n = {};
    if (void 0 !== e.pendingAvatar) {
        let { pendingAvatar: i } = e;
        null === i
            ? (n.avatar = null)
            : i.assetOrigin === l.E.ARCHIVED_ASSET
              ? (n.avatarId = i.originalAsset.id)
              : ((n.avatar = i.imageUri), (n.avatarDescription = i.description));
    }
    return (
        void 0 !== e.pendingNickname && (n.nick = e.pendingNickname ?? ""),
        void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration),
        void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate),
        void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles),
        n
    );
}
function s(e) {
    let n = {};
    return void 0 !== e.pendingPrimaryGuildId && (n.primaryGuildId = e.pendingPrimaryGuildId), n;
}
