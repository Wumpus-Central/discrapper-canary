r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(411104);
var a = r(789020);
var o = r(149765),
    s = r(81825),
    l = r(864106),
    u = r(768581),
    c = r(709054),
    d = r(981631),
    f = r(308083),
    p = r(377668),
    h = r(474936);
function _(e, n, r) {
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
class m extends s.Z {
    get createdAt() {
        return new Date(c.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? u.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: r
              })
            : u.ZP.getUserAvatarURL(this, r, n);
    }
    addGuildAvatarHash(e, n) {
        if (this.guildMemberAvatars[e] === n) return this;
        let r = {
            ...this.guildMemberAvatars,
            [e]: n
        };
        return this.merge({ guildMemberAvatars: r });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let n = {
            ...this.guildMemberAvatars,
            [e]: void 0
        };
        return this.merge({ guildMemberAvatars: n });
    }
    getAvatarSource(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let i = this.guildMemberAvatars[e];
            if (null != i)
                return u.ZP.getAnimatableSourceWithFallback(n, (n) =>
                    u.ZP.makeSource(
                        u.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: i,
                            userId: this.id,
                            canAnimate: n,
                            size: r
                        })
                    )
                );
        }
        return u.ZP.getAnimatableSourceWithFallback(n, (e) => u.ZP.getUserAvatarSource(this, e, r));
    }
    isClaimed() {
        return null != this.email || null != this.phone;
    }
    isPhoneVerified() {
        return null != this.phone;
    }
    toString() {
        return '' !== this.username ? this.username : '???';
    }
    get tag() {
        return ''.concat(this.username, '#').concat(''.concat(this.discriminator).padStart(4, '0'));
    }
    hasPurchasedFlag(e) {
        return (this.purchasedFlags & e) === e;
    }
    hasPremiumUsageFlag(e) {
        return (this.premiumUsageFlags & e) === e;
    }
    hasHadSKU(e) {
        let n = h.vL[e];
        return null != n && this.hasPurchasedFlag(n);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = this.hasHadSKU(h.Si.TIER_0),
            r = this.hasHadSKU(h.Si.TIER_1),
            i = this.hasHadSKU(h.Si.TIER_2);
        if (e === h.p9.TIER_1) return r;
        if (e === h.p9.TIER_2) return i;
        if (e === h.p9.TIER_0) return n;
        else return n || r || i;
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(d.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(d.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === d.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === d.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(d.xW$.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    isClyde() {
        return this.id === p.fL;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    isPomelo() {
        return '0' === this.discriminator;
    }
    get isProvisional() {
        return this.hasFlag(d.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, l.FG)(e);
    }
    constructor(e) {
        var n, r, i, a, s, l, u, c, p, h, m, g, E, v, y, b, I, T, S, A, C, N, R, O, D, x, L, w, P, M, k;
        super(), _(this, 'id', void 0), _(this, 'username', void 0), _(this, 'discriminator', void 0), _(this, 'avatar', void 0), _(this, 'avatarDecorationData', void 0), _(this, 'banner', void 0), _(this, 'email', void 0), _(this, 'verified', void 0), _(this, 'bot', void 0), _(this, 'system', void 0), _(this, 'mfaEnabled', void 0), _(this, 'mobile', void 0), _(this, 'desktop', void 0), _(this, 'premiumType', void 0), _(this, 'flags', void 0), _(this, 'publicFlags', void 0), _(this, 'purchasedFlags', void 0), _(this, 'premiumUsageFlags', void 0), _(this, 'phone', void 0), _(this, 'nsfwAllowed', void 0), _(this, 'guildMemberAvatars', void 0), _(this, 'hasBouncedEmail', void 0), _(this, 'personalConnectionId', void 0), _(this, 'globalName', void 0), _(this, 'primaryGuild', void 0), _(this, 'hasFlag', (e) => !1), _(this, 'isStaff', () => !1), _(this, 'isStaffPersonal', () => !1), _(this, 'hasAnyStaffLevel', () => !1);
        let U = null !== (r = e.premium_type) && void 0 !== r ? r : e.premiumType;
        (this.id = e.id),
            (this.username = null !== (i = e.username) && void 0 !== i ? i : ''),
            (this.discriminator = null !== (a = e.discriminator) && void 0 !== a ? a : d.fo$),
            (this.avatar = null !== (s = e.avatar) && void 0 !== s ? s : null),
            (this.avatarDecoration = null !== (l = e.avatar_decoration_data) && void 0 !== l ? l : e.avatarDecorationData),
            (this.email = null !== (u = e.email) && void 0 !== u ? u : null),
            (this.verified = null !== (c = e.verified) && void 0 !== c && c),
            (this.bot = null !== (p = e.bot) && void 0 !== p && p),
            (this.system = null !== (h = e.system) && void 0 !== h && h),
            (this.mfaEnabled = null !== (g = null !== (m = e.mfa_enabled) && void 0 !== m ? m : e.mfaEnabled) && void 0 !== g && g),
            (this.mobile = null !== (E = e.mobile) && void 0 !== E && E),
            (this.desktop = null !== (v = e.desktop) && void 0 !== v && v),
            (this.premiumType = U === d.WND ? null : U),
            (this.flags = null !== (y = e.flags) && void 0 !== y ? y : 0),
            (this.publicFlags = null !== (I = null !== (b = e.public_flags) && void 0 !== b ? b : e.publicFlags) && void 0 !== I ? I : 0),
            (this.purchasedFlags = null !== (S = null !== (T = e.purchased_flags) && void 0 !== T ? T : e.purchasedFlags) && void 0 !== S ? S : 0),
            (this.premiumUsageFlags = null !== (C = null !== (A = e.premium_usage_flags) && void 0 !== A ? A : e.premiumUsageFlags) && void 0 !== C ? C : 0),
            (this.phone = null !== (N = e.phone) && void 0 !== N ? N : null),
            (this.nsfwAllowed = null !== (R = e.nsfw_allowed) && void 0 !== R ? R : e.nsfwAllowed),
            (this.guildMemberAvatars = null !== (O = e.guildMemberAvatars) && void 0 !== O ? O : {}),
            (this.hasBouncedEmail = null !== (x = null !== (D = e.has_bounced_email) && void 0 !== D ? D : e.hasBouncedEmail) && void 0 !== x && x),
            (this.personalConnectionId = null !== (w = null !== (L = e.personal_connection_id) && void 0 !== L ? L : e.personalConnectionId) && void 0 !== w ? w : null),
            (this.globalName = null !== (P = e.global_name) && void 0 !== P ? P : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, f.lt)(null !== (k = null !== (M = e.primary_guild) && void 0 !== M ? M : e.primaryGuild) && void 0 !== k ? k : null)),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: (e) => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let n = o.vB(this.flags),
                            r = o.vB(this.publicFlags),
                            i = o.vB(e);
                        return o.e$(o.$e(n, r), i);
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(d.xW$.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(d.xW$.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(d.xW$.STAFF) || this.hasFlag(d.xW$.COLLABORATOR) || this.hasFlag(d.xW$.RESTRICTED_COLLABORATOR)
                }
            }),
            (null === (n = this.globalName) || void 0 === n ? void 0 : n.length) === 0 && (this.globalName = null);
    }
}
new m({ id: '0' });
