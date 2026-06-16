i.d(e, { yX: () => d, Sk: () => o, C5: () => p, yg: () => s }), i(321073);
var a = i(575593),
    l = i(392107),
    r = i(287809),
    t = i(841595);
function d(n, e) {
    let i = {};
    void 0 !== n.pendingBanner &&
        ((i.banner = n.pendingBanner),
        null !== n.pendingBanner && (i.bannerOriginalMd5 = n.pendingBannerOriginalMd5 ?? null)),
        null != n.pendingBio && (i.bio = n.pendingBio),
        null != n.pendingPronouns && (i.pronouns = n.pendingPronouns),
        void 0 !== n.pendingAccentColor && (i.accent_color = n.pendingAccentColor),
        void 0 !== n.pendingThemeColors && (i.theme_colors = n.pendingThemeColors);
    let l = (function (n, e) {
        let i,
            { pendingProfileEffect: l, pendingProfileFrame: d } = n;
        if (void 0 === l && void 0 === d) return {};
        let o =
                null == (i = r.default.getCurrentUser())
                    ? null
                    : null != e
                      ? t.A.getGuildMemberProfile(i.id, e)
                      : t.A.getUserProfile(i.id),
            p = [...(o?.collectibles ?? [])];
        return (
            void 0 !== l &&
                ((p = p.filter((n) => {
                    let { type: e } = n;
                    return e !== a.R.PROFILE_EFFECT;
                })),
                null !== l && p.push({ skuId: l.skuId, type: a.R.PROFILE_EFFECT })),
            void 0 !== d &&
                ((p = p.filter((n) => {
                    let { type: e } = n;
                    return e !== a.R.PROFILE_FRAME;
                })),
                null !== d && p.push(d)),
            {
                collectibles_sku_ids: p.map((n) => {
                    let { skuId: e } = n;
                    return e;
                }),
            }
        );
    })(n, e);
    return void 0 !== l.collectibles_sku_ids && (i.collectibles_sku_ids = l.collectibles_sku_ids), i;
}
function o(n) {
    let e = {};
    if (
        (void 0 !== n.pendingGlobalName && (e.globalName = n.pendingGlobalName),
        void 0 !== n.pendingNameplate && (e.nameplate = n.pendingNameplate),
        void 0 !== n.pendingAvatar)
    ) {
        let { pendingAvatar: i } = n;
        null === i
            ? (e.avatar = null)
            : i.assetOrigin === l.E.ARCHIVED_ASSET
              ? (e.avatarId = i.originalAsset.id)
              : ((e.avatar = i.imageUri), (e.avatarDescription = i.description), (e.avatarOriginalMd5 = i.originalMd5));
    }
    return (
        void 0 !== n.pendingAvatarDecoration && (e.avatarDecoration = n.pendingAvatarDecoration),
        void 0 !== n.pendingDisplayNameStyles && (e.displayNameStyles = n.pendingDisplayNameStyles),
        e
    );
}
function p(n) {
    let e = {};
    if (void 0 !== n.pendingAvatar) {
        let { pendingAvatar: i } = n;
        null === i
            ? (e.avatar = null)
            : i.assetOrigin === l.E.ARCHIVED_ASSET
              ? (e.avatarId = i.originalAsset.id)
              : ((e.avatar = i.imageUri), (e.avatarDescription = i.description), (e.avatarOriginalMd5 = i.originalMd5));
    }
    return (
        void 0 !== n.pendingNickname && (e.nick = n.pendingNickname ?? ""),
        void 0 !== n.pendingAvatarDecoration && (e.avatarDecoration = n.pendingAvatarDecoration),
        void 0 !== n.pendingNameplate && (e.nameplate = n.pendingNameplate),
        void 0 !== n.pendingDisplayNameStyles && (e.displayNameStyles = n.pendingDisplayNameStyles),
        e
    );
}
function s(n) {
    let e = {};
    return void 0 !== n.pendingPrimaryGuildId && (e.primaryGuildId = n.pendingPrimaryGuildId), e;
}
