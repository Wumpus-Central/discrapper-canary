e.d(i, { C5: () => o, Sk: () => d, yX: () => r, yg: () => p }), e(321073);
var a = e(575593),
    l = e(392107),
    t = e(546145);
function r(n, i) {
    let e = {};
    void 0 !== n.pendingBanner &&
        ((e.banner = n.pendingBanner),
        null !== n.pendingBanner && (e.bannerOriginalMd5 = n.pendingBannerOriginalMd5 ?? null)),
        null != n.pendingBio && (e.bio = n.pendingBio),
        null != n.pendingPronouns && (e.pronouns = n.pendingPronouns),
        void 0 !== n.pendingAccentColor && (e.accent_color = n.pendingAccentColor),
        void 0 !== n.pendingThemeColors && (e.theme_colors = n.pendingThemeColors);
    let l = (function (n, i) {
        let { pendingProfileEffect: e, pendingProfileFrame: l } = n;
        if (void 0 === e && void 0 === l) return {};
        let r = (0, t.A)(i),
            d = [...(r?.collectibles ?? [])];
        return (
            void 0 !== e &&
                ((d = d.filter((n) => {
                    let { type: i } = n;
                    return i !== a.R.PROFILE_EFFECT;
                })),
                null !== e && d.push({ skuId: e.skuId, type: a.R.PROFILE_EFFECT })),
            void 0 !== l &&
                ((d = d.filter((n) => {
                    let { type: i } = n;
                    return i !== a.R.PROFILE_FRAME;
                })),
                null !== l && d.push(l)),
            {
                collectibles_sku_ids: d.map((n) => {
                    let { skuId: i } = n;
                    return i;
                }),
            }
        );
    })(n, i);
    return void 0 !== l.collectibles_sku_ids && (e.collectibles_sku_ids = l.collectibles_sku_ids), e;
}
function d(n) {
    let i = {};
    if (
        (void 0 !== n.pendingGlobalName && (i.globalName = n.pendingGlobalName),
        void 0 !== n.pendingNameplate && (i.nameplate = n.pendingNameplate),
        void 0 !== n.pendingAvatar)
    ) {
        let { pendingAvatar: e } = n;
        null === e
            ? (i.avatar = null)
            : e.assetOrigin === l.E.ARCHIVED_ASSET
              ? (i.avatarId = e.originalAsset.id)
              : ((i.avatar = e.imageUri), (i.avatarDescription = e.description), (i.avatarOriginalMd5 = e.originalMd5));
    }
    return (
        void 0 !== n.pendingAvatarDecoration && (i.avatarDecoration = n.pendingAvatarDecoration),
        void 0 !== n.pendingDisplayNameStyles && (i.displayNameStyles = n.pendingDisplayNameStyles),
        i
    );
}
function o(n) {
    let i = {};
    if (void 0 !== n.pendingAvatar) {
        let { pendingAvatar: e } = n;
        null === e
            ? (i.avatar = null)
            : e.assetOrigin === l.E.ARCHIVED_ASSET
              ? (i.avatarId = e.originalAsset.id)
              : ((i.avatar = e.imageUri), (i.avatarDescription = e.description), (i.avatarOriginalMd5 = e.originalMd5));
    }
    return (
        void 0 !== n.pendingNickname && (i.nick = n.pendingNickname ?? ""),
        void 0 !== n.pendingAvatarDecoration && (i.avatarDecoration = n.pendingAvatarDecoration),
        void 0 !== n.pendingNameplate && (i.nameplate = n.pendingNameplate),
        void 0 !== n.pendingDisplayNameStyles && (i.displayNameStyles = n.pendingDisplayNameStyles),
        i
    );
}
function p(n) {
    let i = {};
    return void 0 !== n.pendingPrimaryGuildId && (i.primaryGuildId = n.pendingPrimaryGuildId), i;
}
