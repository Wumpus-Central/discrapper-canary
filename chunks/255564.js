n.d(t, { Z: () => c }), n(47120);
var r = n(150039),
    i = n(768581),
    o = n(74538),
    a = n(474936);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e, t) {
    return null == t || '' === t ? e : t;
}
class c {
    get premiumSince() {
        return this._userProfile.premiumSince;
    }
    get premiumGuildSince() {
        return this._userProfile.premiumGuildSince;
    }
    get premiumType() {
        return this._userProfile.premiumType;
    }
    get primaryColor() {
        var e, t;
        return null != (t = null == (e = this.themeColors) ? void 0 : e[0]) ? t : this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return o.ZP.isPremiumAtLeast(this.premiumType, a.p9.TIER_2);
    }
    get canEditThemes() {
        return this.canUsePremiumProfileCustomization;
    }
    get application() {
        return this._userProfile.application;
    }
    hasThemeColors() {
        var e, t;
        return (null == (e = this.themeColors) ? void 0 : e[0]) != null || (null == (t = this.themeColors) ? void 0 : t[1]) != null;
    }
    hasPremiumCustomization() {
        return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType;
    }
    hasFullProfile() {
        return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile);
    }
    isUsingGuildMemberBanner() {
        var e;
        return (null == (e = this._guildMemberProfile) ? void 0 : e.banner) != null;
    }
    isUsingGuildMemberBio() {
        var e, t;
        return (null == (e = this._guildMemberProfile) ? void 0 : e.bio) != null && (null == (t = this._guildMemberProfile) ? void 0 : t.bio) !== '';
    }
    isUsingGuildMemberPronouns() {
        var e, t;
        return (null == (e = this._guildMemberProfile) ? void 0 : e.pronouns) != null && (null == (t = this._guildMemberProfile) ? void 0 : t.pronouns) !== '';
    }
    getBannerURL(e) {
        let { canAnimate: t, size: n } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, i.tp)({
                  id: this.userId,
                  guildId: this.guildId,
                  banner: this.banner,
                  canAnimate: t,
                  size: n
              })
            : (0, i.aN)({
                  id: this.userId,
                  banner: this.banner,
                  canAnimate: t,
                  size: n
              });
    }
    getPreviewBanner(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, i.aN)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: t,
                        size: n
                    })
                  : null
              : this.getBannerURL({
                    canAnimate: t,
                    size: 480
                });
    }
    getPreviewBio(e) {
        var t;
        return (0, r.Wx)(e, null == (t = this._guildMemberProfile) ? void 0 : t.bio, this._userProfile.bio, null != this.guildId);
    }
    getPreviewThemeColors(e) {
        return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors;
    }
    getBadges() {
        var e, t, n;
        return [...(null != (t = this._userProfile.badges) ? t : []), ...(null != (n = null == (e = this._guildMemberProfile) ? void 0 : e.badges) ? n : [])];
    }
    getLegacyUsername() {
        return this._userProfile.legacyUsername;
    }
    constructor(e, t) {
        var n, r, i;
        s(this, 'userId', void 0), s(this, 'guildId', void 0), s(this, 'banner', void 0), s(this, 'bio', void 0), s(this, 'pronouns', void 0), s(this, 'accentColor', void 0), s(this, 'themeColors', void 0), s(this, 'popoutAnimationParticleType', void 0), s(this, 'profileEffectId', void 0), s(this, 'profileEffectExpiresAt', void 0), s(this, '_userProfile', void 0), s(this, '_guildMemberProfile', void 0), (this.userId = e.userId), (this.guildId = null == t ? void 0 : t.guildId), (this.banner = null != (n = null == t ? void 0 : t.banner) ? n : e.banner), (this.bio = l(e.bio, null == t ? void 0 : t.bio)), (this.pronouns = l(e.pronouns, null == t ? void 0 : t.pronouns)), (this.accentColor = e.accentColor), (this.themeColors = null != (r = null == t ? void 0 : t.themeColors) ? r : e.themeColors), (this.popoutAnimationParticleType = null != (i = null == t ? void 0 : t.popoutAnimationParticleType) ? i : e.popoutAnimationParticleType), (null == t ? void 0 : t.profileEffectId) != null ? ((this.profileEffectId = t.profileEffectId), (this.profileEffectExpiresAt = t.profileEffectExpiresAt)) : null != e.profileEffectId && ((this.profileEffectId = e.profileEffectId), (this.profileEffectExpiresAt = e.profileEffectExpiresAt)), (this._userProfile = e), (this._guildMemberProfile = t);
    }
}
