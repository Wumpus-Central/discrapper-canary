n.d(t, { Z: () => _ }), n(411104), n(789020);
var i = n(149765),
    r = n(81825),
    a = n(864106),
    s = n(768581),
    o = n(709054),
    l = n(981631),
    u = n(308083),
    c = n(377668),
    d = n(474936);
function f(e, t, n) {
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
class _ extends r.Z {
    get createdAt() {
        return new Date(o.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? s.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n
              })
            : s.ZP.getUserAvatarURL(this, n, t);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = {
            ...this.guildMemberAvatars,
            [e]: t
        };
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = {
            ...this.guildMemberAvatars,
            [e]: void 0
        };
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let i = this.guildMemberAvatars[e];
            if (null != i)
                return s.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    s.ZP.makeSource(
                        s.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: i,
                            userId: this.id,
                            canAnimate: t,
                            size: n
                        })
                    )
                );
        }
        return s.ZP.getAnimatableSourceWithFallback(t, (e) => s.ZP.getUserAvatarSource(this, e, n));
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
        let t = d.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasHadSKU(d.Si.TIER_0),
            n = this.hasHadSKU(d.Si.TIER_1),
            i = this.hasHadSKU(d.Si.TIER_2);
        return e === d.p9.TIER_1 ? n : e === d.p9.TIER_2 ? i : e === d.p9.TIER_0 ? t : t || n || i;
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(l.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(l.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === l.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === l.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(l.xW$.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    isClyde() {
        return this.id === c.fL;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    isPomelo() {
        return '0' === this.discriminator;
    }
    get isProvisional() {
        return this.hasFlag(l.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, a.FG)(e);
    }
    constructor(e) {
        var t, n, r, a, s, o, c, d, _, p, h, m, g, E, v, y, I, T, b, S, A, N, C, R, O, D, L, x, P, w, M;
        super(), f(this, 'id', void 0), f(this, 'username', void 0), f(this, 'discriminator', void 0), f(this, 'avatar', void 0), f(this, 'avatarDecorationData', void 0), f(this, 'banner', void 0), f(this, 'email', void 0), f(this, 'verified', void 0), f(this, 'bot', void 0), f(this, 'system', void 0), f(this, 'mfaEnabled', void 0), f(this, 'mobile', void 0), f(this, 'desktop', void 0), f(this, 'premiumType', void 0), f(this, 'flags', void 0), f(this, 'publicFlags', void 0), f(this, 'purchasedFlags', void 0), f(this, 'premiumUsageFlags', void 0), f(this, 'phone', void 0), f(this, 'nsfwAllowed', void 0), f(this, 'guildMemberAvatars', void 0), f(this, 'hasBouncedEmail', void 0), f(this, 'personalConnectionId', void 0), f(this, 'globalName', void 0), f(this, 'primaryGuild', void 0), f(this, 'hasFlag', (e) => !1), f(this, 'isStaff', () => !1), f(this, 'isStaffPersonal', () => !1), f(this, 'hasAnyStaffLevel', () => !1);
        let k = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null !== (r = e.username) && void 0 !== r ? r : ''),
            (this.discriminator = null !== (a = e.discriminator) && void 0 !== a ? a : l.fo$),
            (this.avatar = null !== (s = e.avatar) && void 0 !== s ? s : null),
            (this.avatarDecoration = null !== (o = e.avatar_decoration_data) && void 0 !== o ? o : e.avatarDecorationData),
            (this.email = null !== (c = e.email) && void 0 !== c ? c : null),
            (this.verified = null !== (d = e.verified) && void 0 !== d && d),
            (this.bot = null !== (_ = e.bot) && void 0 !== _ && _),
            (this.system = null !== (p = e.system) && void 0 !== p && p),
            (this.mfaEnabled = null !== (m = null !== (h = e.mfa_enabled) && void 0 !== h ? h : e.mfaEnabled) && void 0 !== m && m),
            (this.mobile = null !== (g = e.mobile) && void 0 !== g && g),
            (this.desktop = null !== (E = e.desktop) && void 0 !== E && E),
            (this.premiumType = k === l.WND ? null : k),
            (this.flags = null !== (v = e.flags) && void 0 !== v ? v : 0),
            (this.publicFlags = null !== (I = null !== (y = e.public_flags) && void 0 !== y ? y : e.publicFlags) && void 0 !== I ? I : 0),
            (this.purchasedFlags = null !== (b = null !== (T = e.purchased_flags) && void 0 !== T ? T : e.purchasedFlags) && void 0 !== b ? b : 0),
            (this.premiumUsageFlags = null !== (A = null !== (S = e.premium_usage_flags) && void 0 !== S ? S : e.premiumUsageFlags) && void 0 !== A ? A : 0),
            (this.phone = null !== (N = e.phone) && void 0 !== N ? N : null),
            (this.nsfwAllowed = null !== (C = e.nsfw_allowed) && void 0 !== C ? C : e.nsfwAllowed),
            (this.guildMemberAvatars = null !== (R = e.guildMemberAvatars) && void 0 !== R ? R : {}),
            (this.hasBouncedEmail = null !== (D = null !== (O = e.has_bounced_email) && void 0 !== O ? O : e.hasBouncedEmail) && void 0 !== D && D),
            (this.personalConnectionId = null !== (x = null !== (L = e.personal_connection_id) && void 0 !== L ? L : e.personalConnectionId) && void 0 !== x ? x : null),
            (this.globalName = null !== (P = e.global_name) && void 0 !== P ? P : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, u.lt)(null !== (M = null !== (w = e.primary_guild) && void 0 !== w ? w : e.primaryGuild) && void 0 !== M ? M : null)),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: (e) => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let t = i.vB(this.flags),
                            n = i.vB(this.publicFlags),
                            r = i.vB(e);
                        return i.e$(i.$e(t, n), r);
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(l.xW$.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(l.xW$.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(l.xW$.STAFF) || this.hasFlag(l.xW$.COLLABORATOR) || this.hasFlag(l.xW$.RESTRICTED_COLLABORATOR)
                }
            }),
            (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new _({ id: '0' });
