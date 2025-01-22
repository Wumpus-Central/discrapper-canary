r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(150039),
    o = r(768581),
    s = r(74538),
    l = r(474936);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function c(e, n) {
    return null == n || '' === n ? e : n;
}
class d {
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
        var e, n;
        return null !== (n = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return s.ZP.isPremiumAtLeast(this.premiumType, l.p9.TIER_2);
    }
    get canEditThemes() {
        return this.canUsePremiumProfileCustomization;
    }
    get application() {
        return this._userProfile.application;
    }
    hasThemeColors() {
        var e, n;
        return (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) != null || (null === (n = this.themeColors) || void 0 === n ? void 0 : n[1]) != null;
    }
    hasPremiumCustomization() {
        return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType;
    }
    hasFullProfile() {
        return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile);
    }
    isUsingGuildMemberBanner() {
        var e;
        return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.banner) != null;
    }
    isUsingGuildMemberBio() {
        var e, n;
        return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) != null && (null === (n = this._guildMemberProfile) || void 0 === n ? void 0 : n.bio) !== '';
    }
    isUsingGuildMemberPronouns() {
        var e, n;
        return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) != null && (null === (n = this._guildMemberProfile) || void 0 === n ? void 0 : n.pronouns) !== '';
    }
    getBannerURL(e) {
        let { canAnimate: n, size: r } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, o.tp)({
                  id: this.userId,
                  guildId: this.guildId,
                  banner: this.banner,
                  canAnimate: n,
                  size: r
              })
            : (0, o.aN)({
                  id: this.userId,
                  banner: this.banner,
                  canAnimate: n,
                  size: r
              });
    }
    getPreviewBanner(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, o.aN)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: n,
                        size: r
                    })
                  : null
              : this.getBannerURL({
                    canAnimate: n,
                    size: 480
                });
    }
    getPreviewBio(e) {
        var n;
        return (0, a.Wx)(e, null === (n = this._guildMemberProfile) || void 0 === n ? void 0 : n.bio, this._userProfile.bio, null != this.guildId);
    }
    getPreviewThemeColors(e) {
        return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors;
    }
    getBadges() {
        var e, n, r;
        return [...(null !== (n = this._userProfile.badges) && void 0 !== n ? n : []), ...(null !== (r = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== r ? r : [])];
    }
    getLegacyUsername() {
        return this._userProfile.legacyUsername;
    }
    constructor(e, n) {
        var r, i, a;
        u(this, 'userId', void 0), u(this, 'guildId', void 0), u(this, 'banner', void 0), u(this, 'bio', void 0), u(this, 'pronouns', void 0), u(this, 'accentColor', void 0), u(this, 'themeColors', void 0), u(this, 'popoutAnimationParticleType', void 0), u(this, 'profileEffectId', void 0), u(this, 'profileEffectExpiresAt', void 0), u(this, '_userProfile', void 0), u(this, '_guildMemberProfile', void 0), (this.userId = e.userId), (this.guildId = null == n ? void 0 : n.guildId), (this.banner = null !== (r = null == n ? void 0 : n.banner) && void 0 !== r ? r : e.banner), (this.bio = c(e.bio, null == n ? void 0 : n.bio)), (this.pronouns = c(e.pronouns, null == n ? void 0 : n.pronouns)), (this.accentColor = e.accentColor), (this.themeColors = null !== (i = null == n ? void 0 : n.themeColors) && void 0 !== i ? i : e.themeColors), (this.popoutAnimationParticleType = null !== (a = null == n ? void 0 : n.popoutAnimationParticleType) && void 0 !== a ? a : e.popoutAnimationParticleType), (null == n ? void 0 : n.profileEffectId) != null ? ((this.profileEffectId = n.profileEffectId), (this.profileEffectExpiresAt = n.profileEffectExpiresAt)) : null != e.profileEffectId && ((this.profileEffectId = e.profileEffectId), (this.profileEffectExpiresAt = e.profileEffectExpiresAt)), (this._userProfile = e), (this._guildMemberProfile = n);
    }
}
