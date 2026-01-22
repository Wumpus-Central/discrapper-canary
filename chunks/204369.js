n.d(t, { A: () => u }), n(896048);
var r = n(919395),
    i = n(486020),
    a = n(927578),
    s = n(289173),
    o = n(788868);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e, t) {
    return null == t || "" === t ? e : t;
}
class u {
    get premiumSince() {
        return this._userProfile.premiumSince;
    }
    get premiumGuildSince() {
        return this._userProfile.premiumGuildSince;
    }
    get premiumType() {
        return this._userProfile.premiumType;
    }
    get widgets() {
        return this._userProfile.widgets;
    }
    get gameWidgets() {
        var e;
        return null == (e = this._userProfile.widgets) ? void 0 : e.filter(s.fu);
    }
    get primaryColor() {
        var e, t;
        return null != (e = null == (t = this.themeColors) ? void 0 : t[0]) ? e : this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return a.Ay.isPremiumAtLeast(this.premiumType, o.PremiumTypes.TIER_2);
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
        var e, t;
        return (
            (null == (e = this.themeColors) ? void 0 : e[0]) != null ||
            (null == (t = this.themeColors) ? void 0 : t[1]) != null
        );
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
        var e;
        return (null == (e = this._guildMemberProfile) ? void 0 : e.banner) != null;
    }
    isUsingGuildMemberBio() {
        var e, t;
        return (
            (null == (e = this._guildMemberProfile) ? void 0 : e.bio) != null &&
            (null == (t = this._guildMemberProfile) ? void 0 : t.bio) !== ""
        );
    }
    isUsingGuildMemberPronouns() {
        var e, t;
        return (
            (null == (e = this._guildMemberProfile) ? void 0 : e.pronouns) != null &&
            (null == (t = this._guildMemberProfile) ? void 0 : t.pronouns) !== ""
        );
    }
    getBannerURL(e) {
        let { canAnimate: t, size: n } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, i.ns)({
                  id: this.userId,
                  guildId: this.guildId,
                  banner: this.banner,
                  canAnimate: t,
                  size: n,
              })
            : (0, i.z)({
                  id: this.userId,
                  banner: this.banner,
                  canAnimate: t,
                  size: n,
              });
    }
    getPreviewBanner(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, i.z)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: t,
                        size: n,
                    })
                  : null
              : this.getBannerURL({
                    canAnimate: t,
                    size: n,
                });
    }
    getPreviewBio(e) {
        var t;
        return (0, r.lw)({
            pendingValue: e,
            userValue: this._userProfile.bio,
            guildValue: null == (t = this._guildMemberProfile) ? void 0 : t.bio,
            guildId: this.guildId,
        });
    }
    getPreviewThemeColors(e) {
        return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null
            ? e
            : void 0 !== e
              ? this._userProfile.themeColors
              : this.themeColors;
    }
    getBadges() {
        var e, t, n;
        return [
            ...(null != (e = this._userProfile.badges) ? e : []),
            ...(null != (t = null == (n = this._guildMemberProfile) ? void 0 : n.badges) ? t : []),
        ];
    }
    getLegacyUsername() {
        return this._userProfile.legacyUsername;
    }
    constructor(e, t) {
        var n, r, i, a;
        l(this, "userId", void 0),
            l(this, "guildId", void 0),
            l(this, "banner", void 0),
            l(this, "bio", void 0),
            l(this, "pronouns", void 0),
            l(this, "accentColor", void 0),
            l(this, "themeColors", void 0),
            l(this, "profileEffect", void 0),
            l(this, "popoutAnimationParticleType", void 0),
            l(this, "fetchStartedAt", void 0),
            l(this, "fetchEndedAt", void 0),
            l(this, "_userProfile", void 0),
            l(this, "_guildMemberProfile", void 0),
            (this.userId = e.userId),
            (this.guildId = null == t ? void 0 : t.guildId),
            (this.banner = null != (n = null == t ? void 0 : t.banner) ? n : e.banner),
            (this.bio = c(e.bio, null == t ? void 0 : t.bio)),
            (this.pronouns = c(e.pronouns, null == t ? void 0 : t.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors = null != (r = null == t ? void 0 : t.themeColors) ? r : e.themeColors),
            (this.profileEffect = null != (i = null == t ? void 0 : t.profileEffect) ? i : e.profileEffect),
            (this.popoutAnimationParticleType =
                null != (a = null == t ? void 0 : t.popoutAnimationParticleType) ? a : e.popoutAnimationParticleType),
            (this.fetchStartedAt = e.fetchStartedAt),
            (this.fetchEndedAt = e.fetchEndedAt),
            (this._userProfile = e),
            (this._guildMemberProfile = t);
    }
}
