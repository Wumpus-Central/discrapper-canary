n.d(t, { Z: () => E }), n(411104), n(789020);
var r = n(149765),
    i = n(81825),
    o = n(864106),
    a = n(768581),
    s = n(630388),
    l = n(111361),
    c = n(709054),
    u = n(981631),
    d = n(308083),
    f = n(377668),
    _ = n(474936);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class E extends i.Z {
    get createdAt() {
        return new Date(c.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != r && null != e
            ? a.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: r,
                  userId: this.id,
                  canAnimate: n
              })
            : a.ZP.getUserAvatarURL(this, n, t);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = m(h({}, this.guildMemberAvatars), { [e]: t });
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = m(h({}, this.guildMemberAvatars), { [e]: void 0 });
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return a.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    a.ZP.makeSource(
                        a.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n
                        })
                    )
                );
        }
        return a.ZP.getAnimatableSourceWithFallback(t, (e) => a.ZP.getUserAvatarSource(this, e, n));
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
        return (0, s.yE)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (this.premiumUsageFlags & e) === e;
    }
    hasHadSKU(e) {
        let t = _.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasHadSKU(_.Si.TIER_0),
            n = this.hasHadSKU(_.Si.TIER_1),
            r = this.hasHadSKU(_.Si.TIER_2);
        switch (e) {
            case _.p9.TIER_0:
                return t;
            case _.p9.TIER_1:
                return n;
            case _.p9.TIER_2:
                return r;
            default:
                return t || n || r;
        }
    }
    hadPremiumSubscription() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return !(0, l.I5)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(u.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(u.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === u.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === u.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(u.xW$.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    isClyde() {
        return this.id === f.fL;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    isPomelo() {
        return '0' === this.discriminator;
    }
    get isProvisional() {
        return this.hasFlag(u.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, o.FG)(e);
    }
    constructor(e) {
        var t, n, i, o, a, s, l, c, f, _, h, g, m, E, v, b, y, O, S, I, T, N, A, C, R, P, D, w, L, x, M;
        super(), p(this, 'id', void 0), p(this, 'username', void 0), p(this, 'discriminator', void 0), p(this, 'avatar', void 0), p(this, 'avatarDecorationData', void 0), p(this, 'banner', void 0), p(this, 'email', void 0), p(this, 'verified', void 0), p(this, 'bot', void 0), p(this, 'system', void 0), p(this, 'mfaEnabled', void 0), p(this, 'mobile', void 0), p(this, 'desktop', void 0), p(this, 'premiumType', void 0), p(this, 'flags', void 0), p(this, 'publicFlags', void 0), p(this, 'purchasedFlags', void 0), p(this, 'premiumUsageFlags', void 0), p(this, 'phone', void 0), p(this, 'nsfwAllowed', void 0), p(this, 'guildMemberAvatars', void 0), p(this, 'hasBouncedEmail', void 0), p(this, 'personalConnectionId', void 0), p(this, 'globalName', void 0), p(this, 'primaryGuild', void 0), p(this, 'collectibles', void 0), p(this, 'hasFlag', (e) => !1), p(this, 'isStaff', () => !1), p(this, 'isStaffPersonal', () => !1), p(this, 'hasAnyStaffLevel', () => !1);
        let k = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null !== (i = e.username) && void 0 !== i ? i : ''),
            (this.discriminator = null !== (o = e.discriminator) && void 0 !== o ? o : u.fo$),
            (this.avatar = null !== (a = e.avatar) && void 0 !== a ? a : null),
            (this.avatarDecoration = null !== (s = e.avatar_decoration_data) && void 0 !== s ? s : e.avatarDecorationData),
            (this.email = null !== (l = e.email) && void 0 !== l ? l : null),
            (this.verified = null !== (c = e.verified) && void 0 !== c && c),
            (this.bot = null !== (f = e.bot) && void 0 !== f && f),
            (this.system = null !== (_ = e.system) && void 0 !== _ && _),
            (this.mfaEnabled = null !== (g = null !== (h = e.mfa_enabled) && void 0 !== h ? h : e.mfaEnabled) && void 0 !== g && g),
            (this.mobile = null !== (m = e.mobile) && void 0 !== m && m),
            (this.desktop = null !== (E = e.desktop) && void 0 !== E && E),
            (this.premiumType = k === u.WND ? null : k),
            (this.flags = null !== (v = e.flags) && void 0 !== v ? v : 0),
            (this.publicFlags = null !== (y = null !== (b = e.public_flags) && void 0 !== b ? b : e.publicFlags) && void 0 !== y ? y : 0),
            (this.purchasedFlags = null !== (S = null !== (O = e.purchased_flags) && void 0 !== O ? O : e.purchasedFlags) && void 0 !== S ? S : 0),
            (this.premiumUsageFlags = null !== (T = null !== (I = e.premium_usage_flags) && void 0 !== I ? I : e.premiumUsageFlags) && void 0 !== T ? T : 0),
            (this.phone = null !== (N = e.phone) && void 0 !== N ? N : null),
            (this.nsfwAllowed = null !== (A = e.nsfw_allowed) && void 0 !== A ? A : e.nsfwAllowed),
            (this.guildMemberAvatars = null !== (C = e.guildMemberAvatars) && void 0 !== C ? C : {}),
            (this.hasBouncedEmail = null !== (P = null !== (R = e.has_bounced_email) && void 0 !== R ? R : e.hasBouncedEmail) && void 0 !== P && P),
            (this.personalConnectionId = null !== (w = null !== (D = e.personal_connection_id) && void 0 !== D ? D : e.personalConnectionId) && void 0 !== w ? w : null),
            (this.globalName = null !== (L = e.global_name) && void 0 !== L ? L : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, d.lt)(null !== (M = null !== (x = e.primary_guild) && void 0 !== x ? x : e.primaryGuild) && void 0 !== M ? M : null)),
            (this.collectibles = e.collectibles),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: (e) => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let t = r.vB(this.flags),
                            n = r.vB(this.publicFlags),
                            i = r.vB(e);
                        return r.e$(r.$e(t, n), i);
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(u.xW$.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(u.xW$.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(u.xW$.STAFF) || this.hasFlag(u.xW$.COLLABORATOR) || this.hasFlag(u.xW$.RESTRICTED_COLLABORATOR)
                }
            }),
            (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new E({ id: '0' });
