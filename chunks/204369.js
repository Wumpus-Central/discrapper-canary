"use strict";
n.d(t, { A: () => u });
var r = n(919395),
    i = n(486020),
    s = n(927578),
    a = n(289173),
    o = n(788868);
function l(e, t) {
    return null == t || "" === t ? e : t;
}
class u {
    userId;
    guildId;
    banner;
    bio;
    pronouns;
    accentColor;
    themeColors;
    profileEffect;
    profileFrame;
    popoutAnimationParticleType;
    fetchStartedAt;
    fetchEndedAt;
    _userProfile;
    _guildMemberProfile;
    constructor(e, t) {
        (this.userId = e.userId),
            (this.guildId = t?.guildId),
            (this.banner = t?.banner ?? e.banner),
            (this.bio = l(e.bio, t?.bio)),
            (this.pronouns = l(e.pronouns, t?.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors = t?.themeColors ?? e.themeColors),
            (this.profileEffect = t?.profileEffect ?? e.profileEffect),
            (this.profileFrame = t?.profileFrame ?? e.profileFrame),
            (this.popoutAnimationParticleType = t?.popoutAnimationParticleType ?? e.popoutAnimationParticleType),
            (this.fetchStartedAt = e.fetchStartedAt),
            (this.fetchEndedAt = e.fetchEndedAt),
            (this._userProfile = e),
            (this._guildMemberProfile = t);
    }
    get premiumSince() {
        return this._userProfile.premiumSince;
    }
    get premiumGuildSince() {
        return this._userProfile.premiumGuildSince;
    }
    get premiumType() {
        return this._userProfile.premiumType;
    }
    get private() {
        return this._userProfile.private;
    }
    get widgets() {
        return this._userProfile.widgets;
    }
    get gameWidgets() {
        return this._userProfile.widgets?.filter(a.fu);
    }
    get primaryColor() {
        return this.themeColors?.[0] ?? this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return s.Ay.isPremiumAtLeast(this.premiumType, o.PremiumTypes.TIER_2);
    }
    get canEditThemes() {
        return this.canUsePremiumProfileCustomization;
    }
    get application() {
        return this._userProfile.application;
    }
    get isLoaded() {
        return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile);
    }
    hasThemeColors() {
        return this.themeColors?.[0] != null || this.themeColors?.[1] != null;
    }
    hasPremiumCustomization() {
        return (
            this.isUsingGuildMemberBanner() ||
            this.isUsingGuildMemberBio() ||
            null != this.banner ||
            this.hasThemeColors() ||
            null != this.popoutAnimationParticleType
        );
    }
    isUsingGuildMemberBanner() {
        return this._guildMemberProfile?.banner != null;
    }
    isUsingGuildMemberBio() {
        return this._guildMemberProfile?.bio != null && this._guildMemberProfile?.bio !== "";
    }
    isUsingGuildMemberPronouns() {
        return this._guildMemberProfile?.pronouns != null && this._guildMemberProfile?.pronouns !== "";
    }
    getBannerURL(e) {
        let { canAnimate: t, size: n } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, i.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: t, size: n })
            : (0, i.z)({ id: this.userId, banner: this.banner, canAnimate: t, size: n });
    }
    getPreviewBanner(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, i.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: t, size: n })
                  : null
              : this.getBannerURL({ canAnimate: t, size: n });
    }
    getPreviewBio(e) {
        return (0, r.lw)({
            pendingValue: e,
            userValue: this._userProfile.bio,
            guildValue: this._guildMemberProfile?.bio,
            guildId: this.guildId,
        });
    }
    getPreviewThemeColors(e) {
        return e?.[0] != null && e?.[1] != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors;
    }
    getBadges() {
        return [...(this._userProfile.badges ?? []), ...(this._guildMemberProfile?.badges ?? [])];
    }
    getLegacyUsername() {
        return this._userProfile.legacyUsername;
    }
}
