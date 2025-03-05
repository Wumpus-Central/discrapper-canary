n.d(t, { Z: () => b }), n(411104), n(789020);
var r = n(149765),
    i = n(81825),
    o = n(864106),
    a = n(578976),
    s = n(4242),
    l = n(768581),
    c = n(630388),
    u = n(111361),
    d = n(709054),
    f = n(981631),
    _ = n(308083),
    p = n(377668),
    h = n(474936);
function g(e, t, n) {
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
function m(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class b extends i.Z {
    get createdAt() {
        return new Date(d.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != r && null != e
            ? l.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: r,
                  userId: this.id,
                  canAnimate: n
              })
            : l.ZP.getUserAvatarURL(this, n, t);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = v(m({}, this.guildMemberAvatars), { [e]: t });
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = v(m({}, this.guildMemberAvatars), { [e]: void 0 });
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return l.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    l.ZP.makeSource(
                        l.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n
                        })
                    )
                );
        }
        return l.ZP.getAnimatableSourceWithFallback(t, (e) => l.ZP.getUserAvatarSource(this, e, n));
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
        return (0, c.yE)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (0, c.yE)(this.premiumUsageFlags, e);
    }
    hasHadSKU(e) {
        let t = h.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasPurchasedFlag(h.in.PREMIUM_TIER_0),
            n = this.hasPurchasedFlag(h.in.PREMIUM_TIER_1),
            r = this.hasPurchasedFlag(h.in.PREMIUM_TIER_2);
        switch (e) {
            case h.p9.TIER_0:
                return t;
            case h.p9.TIER_1:
                return n;
            case h.p9.TIER_2:
                return r;
            default:
                return t || n || r;
        }
    }
    hadPremiumSubscription() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return !(0, u.I5)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(f.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(f.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === f.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === f.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(f.xW$.VERIFIED_BOT);
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
        return this.hasFlag(f.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, o.FG)(e);
    }
    get nameplate() {
        var e;
        let t = null === (e = this.collectibles) || void 0 === e ? void 0 : e.nameplate;
        return null == t
            ? null
            : {
                  src: (0, a.lc)(t.asset),
                  animatedSrc: t.asset,
                  palette: (0, s.t1)(t.palette),
                  imgAlt: t.label
              };
    }
    constructor(e) {
        var t, n, i, o, a, s, l, c, u, d, p, h, m, E, v, b, y, O, S, I, T, N, A, C, R, P, D, w, L, x, M, k;
        super(), g(this, 'id', void 0), g(this, 'username', void 0), g(this, 'discriminator', void 0), g(this, 'avatar', void 0), g(this, 'avatarDecorationData', void 0), g(this, 'banner', void 0), g(this, 'email', void 0), g(this, 'verified', void 0), g(this, 'bot', void 0), g(this, 'system', void 0), g(this, 'mfaEnabled', void 0), g(this, 'mobile', void 0), g(this, 'desktop', void 0), g(this, 'premiumType', void 0), g(this, 'flags', void 0), g(this, 'publicFlags', void 0), g(this, 'purchasedFlags', void 0), g(this, 'premiumUsageFlags', void 0), g(this, 'phone', void 0), g(this, 'nsfwAllowed', void 0), g(this, 'ageVerificationStatus', void 0), g(this, 'guildMemberAvatars', void 0), g(this, 'hasBouncedEmail', void 0), g(this, 'personalConnectionId', void 0), g(this, 'globalName', void 0), g(this, 'primaryGuild', void 0), g(this, 'collectibles', void 0), g(this, 'hasFlag', (e) => !1), g(this, 'isStaff', () => !1), g(this, 'isStaffPersonal', () => !1), g(this, 'hasAnyStaffLevel', () => !1);
        let j = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null !== (i = e.username) && void 0 !== i ? i : ''),
            (this.discriminator = null !== (o = e.discriminator) && void 0 !== o ? o : f.fo$),
            (this.avatar = null !== (a = e.avatar) && void 0 !== a ? a : null),
            (this.avatarDecoration = null !== (s = e.avatar_decoration_data) && void 0 !== s ? s : e.avatarDecorationData),
            (this.email = null !== (l = e.email) && void 0 !== l ? l : null),
            (this.verified = null !== (c = e.verified) && void 0 !== c && c),
            (this.bot = null !== (u = e.bot) && void 0 !== u && u),
            (this.system = null !== (d = e.system) && void 0 !== d && d),
            (this.mfaEnabled = null !== (h = null !== (p = e.mfa_enabled) && void 0 !== p ? p : e.mfaEnabled) && void 0 !== h && h),
            (this.mobile = null !== (m = e.mobile) && void 0 !== m && m),
            (this.desktop = null !== (E = e.desktop) && void 0 !== E && E),
            (this.premiumType = j === f.WND ? null : j),
            (this.flags = null !== (v = e.flags) && void 0 !== v ? v : 0),
            (this.publicFlags = null !== (y = null !== (b = e.public_flags) && void 0 !== b ? b : e.publicFlags) && void 0 !== y ? y : 0),
            (this.purchasedFlags = null !== (S = null !== (O = e.purchased_flags) && void 0 !== O ? O : e.purchasedFlags) && void 0 !== S ? S : 0),
            (this.premiumUsageFlags = null !== (T = null !== (I = e.premium_usage_flags) && void 0 !== I ? I : e.premiumUsageFlags) && void 0 !== T ? T : 0),
            (this.phone = null !== (N = e.phone) && void 0 !== N ? N : null),
            (this.nsfwAllowed = null !== (A = e.nsfw_allowed) && void 0 !== A ? A : e.nsfwAllowed),
            (this.ageVerificationStatus = null !== (C = e.age_verification_status) && void 0 !== C ? C : e.ageVerificationStatus),
            (this.guildMemberAvatars = null !== (R = e.guildMemberAvatars) && void 0 !== R ? R : {}),
            (this.hasBouncedEmail = null !== (D = null !== (P = e.has_bounced_email) && void 0 !== P ? P : e.hasBouncedEmail) && void 0 !== D && D),
            (this.personalConnectionId = null !== (L = null !== (w = e.personal_connection_id) && void 0 !== w ? w : e.personalConnectionId) && void 0 !== L ? L : null),
            (this.globalName = null !== (x = e.global_name) && void 0 !== x ? x : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, _.lt)(null !== (k = null !== (M = e.primary_guild) && void 0 !== M ? M : e.primaryGuild) && void 0 !== k ? k : null)),
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
                    value: () => this.hasFlag(f.xW$.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(f.xW$.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(f.xW$.STAFF) || this.hasFlag(f.xW$.COLLABORATOR) || this.hasFlag(f.xW$.RESTRICTED_COLLABORATOR)
                }
            }),
            (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new b({ id: '0' });
