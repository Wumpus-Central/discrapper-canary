n.d(t, { Z: () => b }), n(415506), n(997841);
var r = n(149765),
    i = n(81825),
    a = n(864106),
    o = n(602210),
    s = n(4242),
    l = n(768581),
    c = n(630388),
    u = n(111361),
    d = n(709054),
    f = n(981631),
    _ = n(377668),
    p = n(474936);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
function E(e, t) {
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
class b extends i.Z {
    get createdAt() {
        return new Date(d.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.$k,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? l.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n,
                  canWebP: r
              })
            : l.ZP.getUserAvatarURL(this, n, t, null, r);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = E(m({}, this.guildMemberAvatars), { [e]: t });
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = E(m({}, this.guildMemberAvatars), { [e]: void 0 });
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
        let t = p.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasPurchasedFlag(p.in.PREMIUM_TIER_0),
            n = this.hasPurchasedFlag(p.in.PREMIUM_TIER_1),
            r = this.hasPurchasedFlag(p.in.PREMIUM_TIER_2);
        switch (e) {
            case p.p9.TIER_0:
                return t;
            case p.p9.TIER_1:
                return n;
            case p.p9.TIER_2:
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
        return this.id === _.fL;
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
        this.avatarDecorationData = (0, a.FG)(e);
    }
    get nameplate() {
        var e;
        let t = null == (e = this.collectibles) ? void 0 : e.nameplate;
        return null == t
            ? null
            : {
                  src: t.asset,
                  palette: (0, s.t1)(t.palette),
                  imgAlt: t.label
              };
    }
    constructor(e) {
        var t, n, i, a, s, l, c, u, d, _, p, m, g, E, b, y, v, O, I, S, T, A, N, C, R, P, w, D, L, x, M, k;
        super(), h(this, 'id', void 0), h(this, 'username', void 0), h(this, 'discriminator', void 0), h(this, 'avatar', void 0), h(this, 'avatarDecorationData', void 0), h(this, 'banner', void 0), h(this, 'email', void 0), h(this, 'verified', void 0), h(this, 'bot', void 0), h(this, 'system', void 0), h(this, 'mfaEnabled', void 0), h(this, 'mobile', void 0), h(this, 'desktop', void 0), h(this, 'premiumType', void 0), h(this, 'flags', void 0), h(this, 'publicFlags', void 0), h(this, 'purchasedFlags', void 0), h(this, 'premiumUsageFlags', void 0), h(this, 'phone', void 0), h(this, 'nsfwAllowed', void 0), h(this, 'ageVerificationStatus', void 0), h(this, 'guildMemberAvatars', void 0), h(this, 'hasBouncedEmail', void 0), h(this, 'personalConnectionId', void 0), h(this, 'globalName', void 0), h(this, 'primaryGuild', void 0), h(this, 'collectibles', void 0), h(this, 'hasFlag', (e) => !1), h(this, 'isStaff', () => !1), h(this, 'isStaffPersonal', () => !1), h(this, 'hasAnyStaffLevel', () => !1);
        let j = null != (n = e.premium_type) ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null != (i = e.username) ? i : ''),
            (this.discriminator = null != (a = e.discriminator) ? a : f.fo$),
            (this.avatar = null != (s = e.avatar) ? s : null),
            (this.avatarDecoration = null != (l = e.avatar_decoration_data) ? l : e.avatarDecorationData),
            (this.email = null != (c = e.email) ? c : null),
            (this.verified = null != (u = e.verified) && u),
            (this.bot = null != (d = e.bot) && d),
            (this.system = null != (_ = e.system) && _),
            (this.mfaEnabled = null != (m = null != (p = e.mfa_enabled) ? p : e.mfaEnabled) && m),
            (this.mobile = null != (g = e.mobile) && g),
            (this.desktop = null != (E = e.desktop) && E),
            (this.premiumType = j === f.WND ? null : j),
            (this.flags = null != (b = e.flags) ? b : 0),
            (this.publicFlags = null != (v = null != (y = e.public_flags) ? y : e.publicFlags) ? v : 0),
            (this.purchasedFlags = null != (I = null != (O = e.purchased_flags) ? O : e.purchasedFlags) ? I : 0),
            (this.premiumUsageFlags = null != (T = null != (S = e.premium_usage_flags) ? S : e.premiumUsageFlags) ? T : 0),
            (this.phone = null != (A = e.phone) ? A : null),
            (this.nsfwAllowed = null != (N = e.nsfw_allowed) ? N : e.nsfwAllowed),
            (this.ageVerificationStatus = null != (C = e.age_verification_status) ? C : e.ageVerificationStatus),
            (this.guildMemberAvatars = null != (R = e.guildMemberAvatars) ? R : {}),
            (this.hasBouncedEmail = null != (w = null != (P = e.has_bounced_email) ? P : e.hasBouncedEmail) && w),
            (this.personalConnectionId = null != (L = null != (D = e.personal_connection_id) ? D : e.personalConnectionId) ? L : null),
            (this.globalName = null != (x = e.global_name) ? x : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, o.l)(null != (k = null != (M = e.primary_guild) ? M : e.primaryGuild) ? k : null)),
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
            (null == (t = this.globalName) ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new b({ id: '0' });
