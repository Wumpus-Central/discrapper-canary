n.d(t, { Z: () => m }), n(411104), n(789020);
var r = n(149765),
    i = n(81825),
    o = n(864106),
    a = n(768581),
    s = n(709054),
    l = n(981631),
    c = n(308083),
    u = n(377668),
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class m extends i.Z {
    get createdAt() {
        return new Date(s.default.extractTimestamp(this.id));
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
        let n = h(p({}, this.guildMemberAvatars), { [e]: t });
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = h(p({}, this.guildMemberAvatars), { [e]: void 0 });
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
            r = this.hasHadSKU(d.Si.TIER_2);
        return e === d.p9.TIER_1 ? n : e === d.p9.TIER_2 ? r : e === d.p9.TIER_0 ? t : t || n || r;
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
        return this.id === u.fL;
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
        this.avatarDecorationData = (0, o.FG)(e);
    }
    constructor(e) {
        var t, n, i, o, a, s, u, d, p, _, h, m, g, E, v, b, y, O, S, I, T, N, A, C, R, P, w, D, x, L, M;
        super(), f(this, 'id', void 0), f(this, 'username', void 0), f(this, 'discriminator', void 0), f(this, 'avatar', void 0), f(this, 'avatarDecorationData', void 0), f(this, 'banner', void 0), f(this, 'email', void 0), f(this, 'verified', void 0), f(this, 'bot', void 0), f(this, 'system', void 0), f(this, 'mfaEnabled', void 0), f(this, 'mobile', void 0), f(this, 'desktop', void 0), f(this, 'premiumType', void 0), f(this, 'flags', void 0), f(this, 'publicFlags', void 0), f(this, 'purchasedFlags', void 0), f(this, 'premiumUsageFlags', void 0), f(this, 'phone', void 0), f(this, 'nsfwAllowed', void 0), f(this, 'guildMemberAvatars', void 0), f(this, 'hasBouncedEmail', void 0), f(this, 'personalConnectionId', void 0), f(this, 'globalName', void 0), f(this, 'primaryGuild', void 0), f(this, 'collectibles', void 0), f(this, 'hasFlag', (e) => !1), f(this, 'isStaff', () => !1), f(this, 'isStaffPersonal', () => !1), f(this, 'hasAnyStaffLevel', () => !1);
        let k = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null !== (i = e.username) && void 0 !== i ? i : ''),
            (this.discriminator = null !== (o = e.discriminator) && void 0 !== o ? o : l.fo$),
            (this.avatar = null !== (a = e.avatar) && void 0 !== a ? a : null),
            (this.avatarDecoration = null !== (s = e.avatar_decoration_data) && void 0 !== s ? s : e.avatarDecorationData),
            (this.email = null !== (u = e.email) && void 0 !== u ? u : null),
            (this.verified = null !== (d = e.verified) && void 0 !== d && d),
            (this.bot = null !== (p = e.bot) && void 0 !== p && p),
            (this.system = null !== (_ = e.system) && void 0 !== _ && _),
            (this.mfaEnabled = null !== (m = null !== (h = e.mfa_enabled) && void 0 !== h ? h : e.mfaEnabled) && void 0 !== m && m),
            (this.mobile = null !== (g = e.mobile) && void 0 !== g && g),
            (this.desktop = null !== (E = e.desktop) && void 0 !== E && E),
            (this.premiumType = k === l.WND ? null : k),
            (this.flags = null !== (v = e.flags) && void 0 !== v ? v : 0),
            (this.publicFlags = null !== (y = null !== (b = e.public_flags) && void 0 !== b ? b : e.publicFlags) && void 0 !== y ? y : 0),
            (this.purchasedFlags = null !== (S = null !== (O = e.purchased_flags) && void 0 !== O ? O : e.purchasedFlags) && void 0 !== S ? S : 0),
            (this.premiumUsageFlags = null !== (T = null !== (I = e.premium_usage_flags) && void 0 !== I ? I : e.premiumUsageFlags) && void 0 !== T ? T : 0),
            (this.phone = null !== (N = e.phone) && void 0 !== N ? N : null),
            (this.nsfwAllowed = null !== (A = e.nsfw_allowed) && void 0 !== A ? A : e.nsfwAllowed),
            (this.guildMemberAvatars = null !== (C = e.guildMemberAvatars) && void 0 !== C ? C : {}),
            (this.hasBouncedEmail = null !== (P = null !== (R = e.has_bounced_email) && void 0 !== R ? R : e.hasBouncedEmail) && void 0 !== P && P),
            (this.personalConnectionId = null !== (D = null !== (w = e.personal_connection_id) && void 0 !== w ? w : e.personalConnectionId) && void 0 !== D ? D : null),
            (this.globalName = null !== (x = e.global_name) && void 0 !== x ? x : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, c.lt)(null !== (M = null !== (L = e.primary_guild) && void 0 !== L ? L : e.primaryGuild) && void 0 !== M ? M : null)),
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
new m({ id: '0' });
