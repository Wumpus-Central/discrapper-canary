e.d(i, { yX: () => d, Sk: () => o, C5: () => p, yg: () => s }), e(321073);
var a = e(575593),
    l = e(469054),
    t = e(287809),
    r = e(321191);
function d(n, i) {
    let e = {};
    void 0 !== n.pendingBanner &&
        ((e.banner = n.pendingBanner?.imageUri ?? null),
        null !== n.pendingBanner && (e.bannerOriginalMd5 = n.pendingBanner.originalMd5 ?? null)),
        null != n.pendingBio && (e.bio = n.pendingBio),
        null != n.pendingPronouns && (e.pronouns = n.pendingPronouns),
        void 0 !== n.pendingAccentColor && (e.accent_color = n.pendingAccentColor),
        void 0 !== n.pendingThemeColors && (e.theme_colors = n.pendingThemeColors);
    let l = (function (n, i) {
        let e,
            { pendingProfileEffect: l, pendingProfileFrame: d } = n;
        if (void 0 === l && void 0 === d) return {};
        let o =
                null == (e = t.default.getCurrentUser())
                    ? null
                    : null != i
                      ? r.A.getGuildMemberProfile(e.id, i)
                      : r.A.getUserProfile(e.id),
            p = [...(o?.collectibles ?? [])];
        return (
            void 0 !== l &&
                ((p = p.filter((n) => {
                    let { type: i } = n;
                    return i !== a.R.PROFILE_EFFECT;
                })),
                null !== l && p.push({ skuId: l.skuId, type: a.R.PROFILE_EFFECT })),
            void 0 !== d &&
                ((p = p.filter((n) => {
                    let { type: i } = n;
                    return i !== a.R.PROFILE_FRAME;
                })),
                null !== d && p.push(d)),
            {
                collectibles_sku_ids: p.map((n) => {
                    let { skuId: i } = n;
                    return i;
                }),
            }
        );
    })(n, i);
    return void 0 !== l.collectibles_sku_ids && (e.collectibles_sku_ids = l.collectibles_sku_ids), e;
}
function o(n) {
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
        void 0 !== n.pendingCustomTypingIndicatorStyle &&
            (i.typingIndicatorStyle = n.pendingCustomTypingIndicatorStyle),
        i
    );
}
function p(n) {
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
function s(n) {
    let i = {};
    return void 0 !== n.pendingPrimaryGuildId && (i.primaryGuildId = n.pendingPrimaryGuildId), i;
}
