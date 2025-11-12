n.d(t, { Z: () => O }), n(415506), n(997841);
var r = n(149765),
    i = n(813820),
    a = n(81825),
    o = n(864106),
    s = n(131016),
    l = n(602210),
    c = n(4242),
    u = n(921383),
    d = n(768581),
    f = n(630388),
    _ = n(111361),
    p = n(709054),
    h = n(981631),
    m = n(474936);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class O extends a.Z {
    get createdAt() {
        return new Date(p.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.$k,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? d.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n,
                  canWebP: r,
              })
            : d.ZP.getUserAvatarURL(this, n, t, null, r);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = y(E({}, this.guildMemberAvatars), { [e]: t });
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = y(E({}, this.guildMemberAvatars), { [e]: void 0 });
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return d.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    d.ZP.makeSource(
                        d.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n,
                        }),
                    ),
                );
        }
        return d.ZP.getAnimatableSourceWithFallback(t, (e) => d.ZP.getUserAvatarSource(this, e, n));
    }
    isClaimed() {
        return null != this.email || null != this.phone;
    }
    isPhoneVerified() {
        return null != this.phone;
    }
    toString() {
        return "" !== this.username ? this.username : "???";
    }
    get tag() {
        return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"));
    }
    hasPurchasedFlag(e) {
        return (0, f.yE)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (0, f.yE)(this.premiumUsageFlags, e);
    }
    hasHadSKU(e) {
        let t = m.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasPurchasedFlag(m.in.PREMIUM_TIER_0),
            n = this.hasPurchasedFlag(m.in.PREMIUM_TIER_1),
            r = this.hasPurchasedFlag(m.in.PREMIUM_TIER_2);
        switch (e) {
            case m.PremiumTypes.TIER_0:
                return t;
            case m.PremiumTypes.TIER_1:
                return n;
            case m.PremiumTypes.TIER_2:
                return r;
            default:
                return t || n || r;
        }
    }
    hadPremiumSubscription() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return !(0, _.I5)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(h.xW$.PARTNER) || this.isStaffPersonal();
    }
    isPremiumWithFractionalPremium() {
        var e;
        return (
            (0, _.I5)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === i.d3.FRACTIONAL_NITRO
        );
    }
    isPremiumWithPremiumGroup() {
        var e;
        return (
            (0, _.I5)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === i.d3.SUBSCRIPTION_GROUP
        );
    }
    isFractionalPremiumWithNoSubscription() {
        var e;
        return (
            (0, _.I5)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === i.d3.FRACTIONAL_NITRO &&
            this.premiumState.premiumSubscriptionType !== i.W$.TIER_2
        );
    }
    hasUrgentMessages() {
        return this.hasFlag(h.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === h.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === h.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(h.xW$.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    hasUniqueUsername() {
        return "0" === this.discriminator;
    }
    get isProvisional() {
        return this.hasFlag(h.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, o.FG)(e);
    }
    get nameplate() {
        var e;
        return (0, c.Pb)(null == (e = this.collectibles) ? void 0 : e.nameplate);
    }
    get premiumGroupRole() {
        var e, t;
        return null != (t = null == (e = this.premiumState) ? void 0 : e.premiumSubscriptionGroupRole)
            ? t
            : i.bF.UNSPECIFIED;
    }
    constructor(e) {
        var t, n, i, a, o, c, d, f, _, p, m, E, b, y, O, v, I, S, T, A, C, N, R, P, w, D, x, L, M, j, k, U, G, B;
        super(),
            g(this, "id", void 0),
            g(this, "username", void 0),
            g(this, "discriminator", void 0),
            g(this, "avatar", void 0),
            g(this, "avatarDecorationData", void 0),
            g(this, "banner", void 0),
            g(this, "email", void 0),
            g(this, "verified", void 0),
            g(this, "bot", void 0),
            g(this, "system", void 0),
            g(this, "mfaEnabled", void 0),
            g(this, "mobile", void 0),
            g(this, "desktop", void 0),
            g(this, "premiumType", void 0),
            g(this, "flags", void 0),
            g(this, "publicFlags", void 0),
            g(this, "purchasedFlags", void 0),
            g(this, "premiumUsageFlags", void 0),
            g(this, "phone", void 0),
            g(this, "nsfwAllowed", void 0),
            g(this, "ageVerificationStatus", void 0),
            g(this, "guildMemberAvatars", void 0),
            g(this, "hasBouncedEmail", void 0),
            g(this, "personalConnectionId", void 0),
            g(this, "globalName", void 0),
            g(this, "primaryGuild", void 0),
            g(this, "collectibles", void 0),
            g(this, "displayNameStyles", void 0),
            g(this, "premiumState", void 0),
            g(this, "hasFlag", (e) => !1),
            g(this, "isStaff", () => !1),
            g(this, "isStaffPersonal", () => !1),
            g(this, "hasAnyStaffLevel", () => !1);
        let Z = null != (n = e.premium_type) ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null != (i = e.username) ? i : ""),
            (this.discriminator = null != (a = e.discriminator) ? a : h.fo$),
            (this.avatar = null != (o = e.avatar) ? o : null),
            (this.avatarDecoration = null != (c = e.avatar_decoration_data) ? c : e.avatarDecorationData),
            (this.email = null != (d = e.email) ? d : null),
            (this.verified = null != (f = e.verified) && f),
            (this.bot = null != (_ = e.bot) && _),
            (this.system = null != (p = e.system) && p),
            (this.mfaEnabled = null != (E = null != (m = e.mfa_enabled) ? m : e.mfaEnabled) && E),
            (this.mobile = null != (b = e.mobile) && b),
            (this.desktop = null != (y = e.desktop) && y),
            (this.premiumType = Z === h.WND ? null : Z),
            (this.flags = null != (O = e.flags) ? O : 0),
            (this.publicFlags = null != (I = null != (v = e.public_flags) ? v : e.publicFlags) ? I : 0),
            (this.purchasedFlags = null != (T = null != (S = e.purchased_flags) ? S : e.purchasedFlags) ? T : 0),
            (this.premiumUsageFlags =
                null != (C = null != (A = e.premium_usage_flags) ? A : e.premiumUsageFlags) ? C : 0),
            (this.phone = null != (N = e.phone) ? N : null),
            (this.nsfwAllowed = null != (R = e.nsfw_allowed) ? R : e.nsfwAllowed),
            (this.ageVerificationStatus = null != (P = e.age_verification_status) ? P : e.ageVerificationStatus),
            (this.guildMemberAvatars = null != (w = e.guildMemberAvatars) ? w : {}),
            (this.hasBouncedEmail = null != (x = null != (D = e.has_bounced_email) ? D : e.hasBouncedEmail) && x),
            (this.personalConnectionId =
                null != (M = null != (L = e.personal_connection_id) ? L : e.personalConnectionId) ? M : null),
            (this.globalName = null != (j = e.global_name) ? j : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, l.l)(null != (U = null != (k = e.primary_guild) ? k : e.primaryGuild) ? U : null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, s.bN)(e.display_name_styles)),
            (this.premiumState = null != (B = e.premiumState) ? B : (0, u.C)(e.premium_state)),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: (e) => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let t = r.vB(this.flags),
                            n = r.vB(this.publicFlags),
                            i = r.vB(e);
                        return r.e$(r.$e(t, n), i);
                    },
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => this.hasFlag(h.xW$.STAFF),
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => !this.hasFlag(h.xW$.STAFF) && null != this.personalConnectionId,
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () =>
                        this.hasFlag(h.xW$.STAFF) ||
                        this.hasFlag(h.xW$.COLLABORATOR) ||
                        this.hasFlag(h.xW$.RESTRICTED_COLLABORATOR),
                },
            }),
            (null == (t = this.globalName) ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new O({ id: "0" });
