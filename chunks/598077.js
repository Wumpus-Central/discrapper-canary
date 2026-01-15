n.d(t, { Z: () => O }), n(415506), n(997841);
var r = n(149765),
    i = n(95015),
    a = n(813820),
    o = n(81825),
    s = n(864106),
    l = n(131016),
    c = n(602210),
    u = n(4242),
    d = n(921383),
    f = n(768581),
    p = n(111361),
    _ = n(709054),
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
class O extends o.Z {
    get createdAt() {
        return new Date(_.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.$k,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? f.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n,
                  canWebP: r,
              })
            : f.ZP.getUserAvatarURL(this, n, t, null, r);
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
                return f.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    f.ZP.makeSource(
                        f.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n,
                        }),
                    ),
                );
        }
        return f.ZP.getAnimatableSourceWithFallback(t, (e) => f.ZP.getUserAvatarSource(this, e, n));
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
        return (0, i.yE)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (0, i.yE)(this.premiumUsageFlags, e);
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
        return !(0, p.I5)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(h.xW$.PARTNER) || this.isStaffPersonal();
    }
    isPremiumWithPremiumGroup() {
        var e;
        return (
            (0, p.I5)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === a.d3.SUBSCRIPTION_GROUP
        );
    }
    isPremiumWithFractionalPremiumOnly() {
        var e, t, n;
        return (
            (0, p.I5)(this, m.PremiumTypes.TIER_2) &&
            ((null == (e = this.premiumState) ? void 0 : e.premiumSubscriptionType) === a.W$.NONE_UNSPECIFIED ||
                (null == (t = this.premiumState) ? void 0 : t.premiumSubscriptionType) === a.W$.BOOST_ONLY) &&
            (null == (n = this.premiumState) ? void 0 : n.premiumSource) === a.d3.FRACTIONAL_NITRO
        );
    }
    isFractionalPremiumWithNoStandardSub() {
        var e;
        return (
            (0, p.I5)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === a.d3.FRACTIONAL_NITRO &&
            this.premiumState.premiumSubscriptionType !== a.W$.TIER_2
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
    isPremiumGroupMember() {
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === a.bF.MEMBER;
    }
    isPremiumGroupPrimary() {
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === a.bF.PRIMARY;
    }
    get isProvisional() {
        return this.hasFlag(h.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, s.FG)(e);
    }
    get nameplate() {
        var e;
        return (0, u.Pb)(null == (e = this.collectibles) ? void 0 : e.nameplate);
    }
    get premiumGroupRole() {
        var e, t;
        return null != (t = null == (e = this.premiumState) ? void 0 : e.premiumSubscriptionGroupRole)
            ? t
            : a.bF.UNSPECIFIED;
    }
    constructor(e) {
        var t, n, i, a, o, s, u, f, p, _, m, E, b, y, O, v, S, I, T, C, A, N, P, w, R, D, x, L, j, M, k, U, G, Z;
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
        let F = null != (n = e.premium_type) ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null != (i = e.username) ? i : ""),
            (this.discriminator = null != (a = e.discriminator) ? a : h.fo$),
            (this.avatar = null != (o = e.avatar) ? o : null),
            (this.avatarDecoration = null != (s = e.avatar_decoration_data) ? s : e.avatarDecorationData),
            (this.email = null != (u = e.email) ? u : null),
            (this.verified = null != (f = e.verified) && f),
            (this.bot = null != (p = e.bot) && p),
            (this.system = null != (_ = e.system) && _),
            (this.mfaEnabled = null != (E = null != (m = e.mfa_enabled) ? m : e.mfaEnabled) && E),
            (this.mobile = null != (b = e.mobile) && b),
            (this.desktop = null != (y = e.desktop) && y),
            (this.premiumType = F === h.WND ? null : F),
            (this.flags = null != (O = e.flags) ? O : 0),
            (this.publicFlags = null != (S = null != (v = e.public_flags) ? v : e.publicFlags) ? S : 0),
            (this.purchasedFlags = null != (T = null != (I = e.purchased_flags) ? I : e.purchasedFlags) ? T : 0),
            (this.premiumUsageFlags =
                null != (A = null != (C = e.premium_usage_flags) ? C : e.premiumUsageFlags) ? A : 0),
            (this.phone = null != (N = e.phone) ? N : null),
            (this.nsfwAllowed = null != (P = e.nsfw_allowed) ? P : e.nsfwAllowed),
            (this.ageVerificationStatus = null != (w = e.age_verification_status) ? w : e.ageVerificationStatus),
            (this.guildMemberAvatars = null != (R = e.guildMemberAvatars) ? R : {}),
            (this.hasBouncedEmail = null != (x = null != (D = e.has_bounced_email) ? D : e.hasBouncedEmail) && x),
            (this.personalConnectionId =
                null != (j = null != (L = e.personal_connection_id) ? L : e.personalConnectionId) ? j : null),
            (this.globalName = null != (M = e.global_name) ? M : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, c.l)(null != (U = null != (k = e.primary_guild) ? k : e.primaryGuild) ? U : null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, l.bN)(e.display_name_styles)),
            (this.premiumState = null != (Z = e.premiumState) ? Z : (0, d.C)(e.premium_state)),
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
