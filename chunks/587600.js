"use strict";
n.d(t, { C5: () => d, Sk: () => s, yX: () => l, yg: () => o }), n(321073);
var a = n(575593),
    i = n(392107),
    r = n(546145);
function l(e, t) {
    let n = {};
    void 0 !== e.pendingBanner && (n.banner = e.pendingBanner),
        null != e.pendingBio && (n.bio = e.pendingBio),
        null != e.pendingPronouns && (n.pronouns = e.pendingPronouns),
        void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor),
        void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
    let i = (function (e, t) {
        let { pendingProfileEffect: n, pendingProfileFrame: i } = e;
        if (void 0 === n && void 0 === i) return {};
        let l = (0, r.A)(t),
            s = [...(l?.collectibles ?? [])];
        return (
            void 0 !== n &&
                ((s = s.filter((e) => {
                    let { type: t } = e;
                    return t !== a.R.PROFILE_EFFECT;
                })),
                null !== n && s.push({ skuId: n.skuId, type: a.R.PROFILE_EFFECT })),
            void 0 !== i &&
                ((s = s.filter((e) => {
                    let { type: t } = e;
                    return t !== a.R.PROFILE_FRAME;
                })),
                null !== i && s.push(i)),
            {
                collectibles_sku_ids: s.map((e) => {
                    let { skuId: t } = e;
                    return t;
                }),
            }
        );
    })(e, t);
    return void 0 !== i.collectibles_sku_ids && (n.collectibles_sku_ids = i.collectibles_sku_ids), n;
}
function s(e) {
    let t = {};
    if (
        (void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName),
        void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate),
        void 0 !== e.pendingAvatar)
    ) {
        let { pendingAvatar: n } = e;
        null === n
            ? (t.avatar = null)
            : n.assetOrigin === i.E.ARCHIVED_ASSET
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
            : n.assetOrigin === i.E.ARCHIVED_ASSET
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
function o(e) {
    let t = {};
    return void 0 !== e.pendingPrimaryGuildId && (t.primaryGuildId = e.pendingPrimaryGuildId), t;
}
