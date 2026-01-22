n.d(t, {
    A: () => O,
}),
    n(65821),
    n(938796);
var r = n(136722),
    i = n(665260),
    a = n(988506),
    s = n(315069),
    o = n(507698),
    l = n(945096),
    c = n(47537),
    u = n(369496),
    d = n(392737),
    f = n(486020),
    p = n(474090),
    _ = n(661191),
    h = n(652215),
    m = n(788868);

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
class O extends s.A {
    get createdAt() {
        return new Date(_.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.QB,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? f.Ay.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n,
                  canWebP: r,
              })
            : f.Ay.getUserAvatarURL(this, n, t, null, r);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = y(E({}, this.guildMemberAvatars), {
            [e]: t,
        });
        return this.merge({
            guildMemberAvatars: n,
        });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = y(E({}, this.guildMemberAvatars), {
            [e]: void 0,
        });
        return this.merge({
            guildMemberAvatars: t,
        });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return f.Ay.getAnimatableSourceWithFallback(t, (t) =>
                    f.Ay.makeSource(
                        f.Ay.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n,
                        }),
                    ),
                );
        }
        return f.Ay.getAnimatableSourceWithFallback(t, (e) => f.Ay.getUserAvatarSource(this, e, n));
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
        return (0, i.Lt)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (0, i.Lt)(this.premiumUsageFlags, e);
    }
    hasHadSKU(e) {
        let t = m.OO[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasPurchasedFlag(m.lA.PREMIUM_TIER_0),
            n = this.hasPurchasedFlag(m.lA.PREMIUM_TIER_1),
            r = this.hasPurchasedFlag(m.lA.PREMIUM_TIER_2);
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
        return !(0, p.ki)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(h.nhx.PARTNER) || this.isStaffPersonal();
    }
    isPremiumWithPremiumGroup() {
        var e;
        return (
            (0, p.ki)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === a.fE.SUBSCRIPTION_GROUP
        );
    }
    isPremiumWithFractionalPremiumOnly() {
        var e, t, n;
        return (
            (0, p.ki)(this, m.PremiumTypes.TIER_2) &&
            ((null == (e = this.premiumState) ? void 0 : e.premiumSubscriptionType) === a.jK.NONE_UNSPECIFIED ||
                (null == (t = this.premiumState) ? void 0 : t.premiumSubscriptionType) === a.jK.BOOST_ONLY) &&
            (null == (n = this.premiumState) ? void 0 : n.premiumSource) === a.fE.FRACTIONAL_NITRO
        );
    }
    isFractionalPremiumWithNoStandardSub() {
        var e;
        return (
            (0, p.ki)(this, m.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === a.fE.FRACTIONAL_NITRO &&
            this.premiumState.premiumSubscriptionType !== a.jK.TIER_2
        );
    }
    hasUrgentMessages() {
        return this.hasFlag(h.nhx.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === h.h3J);
    }
    isLocalBot() {
        return this.bot && this.id === h.oIV;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(h.nhx.VERIFIED_BOT);
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
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === a.qT.MEMBER;
    }
    isPremiumGroupPrimary() {
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === a.qT.PRIMARY;
    }
    get isProvisional() {
        return this.hasFlag(h.nhx.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, o.Xq)(e);
    }
    get nameplate() {
        var e;
        return (0, u.WK)(null == (e = this.collectibles) ? void 0 : e.nameplate);
    }
    get premiumGroupRole() {
        var e, t;
        return null != (e = null == (t = this.premiumState) ? void 0 : t.premiumSubscriptionGroupRole)
            ? e
            : a.qT.UNSPECIFIED;
    }
    constructor(e) {
        var t, n, i, a, s, o, u, f, p, _, m, E, b, y, O, A, v, S, I, T, C, N, R, w, P, D, x, L, j, M, k, U, G, V;
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
        const F = null != (t = e.premium_type) ? t : e.premiumType;
        (this.id = e.id),
            (this.username = null != (n = e.username) ? n : ""),
            (this.discriminator = null != (i = e.discriminator) ? i : h.h3J),
            (this.avatar = null != (a = e.avatar) ? a : null),
            (this.avatarDecoration = null != (s = e.avatar_decoration_data) ? s : e.avatarDecorationData),
            (this.email = null != (o = e.email) ? o : null),
            (this.verified = null != (u = e.verified) && u),
            (this.bot = null != (f = e.bot) && f),
            (this.system = null != (p = e.system) && p),
            (this.mfaEnabled = null != (_ = null != (m = e.mfa_enabled) ? m : e.mfaEnabled) && _),
            (this.mobile = null != (E = e.mobile) && E),
            (this.desktop = null != (b = e.desktop) && b),
            (this.premiumType = F === h.oA2 ? null : F),
            (this.flags = null != (y = e.flags) ? y : 0),
            (this.publicFlags = null != (O = null != (A = e.public_flags) ? A : e.publicFlags) ? O : 0),
            (this.purchasedFlags = null != (v = null != (S = e.purchased_flags) ? S : e.purchasedFlags) ? v : 0),
            (this.premiumUsageFlags =
                null != (I = null != (T = e.premium_usage_flags) ? T : e.premiumUsageFlags) ? I : 0),
            (this.phone = null != (C = e.phone) ? C : null),
            (this.nsfwAllowed = null != (N = e.nsfw_allowed) ? N : e.nsfwAllowed),
            (this.ageVerificationStatus = null != (R = e.age_verification_status) ? R : e.ageVerificationStatus),
            (this.guildMemberAvatars = null != (w = e.guildMemberAvatars) ? w : {}),
            (this.hasBouncedEmail = null != (P = null != (D = e.has_bounced_email) ? D : e.hasBouncedEmail) && P),
            (this.personalConnectionId =
                null != (x = null != (L = e.personal_connection_id) ? L : e.personalConnectionId) ? x : null),
            (this.globalName = null != (j = e.global_name) ? j : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, c.j)(null != (M = null != (k = e.primary_guild) ? k : e.primaryGuild) ? M : null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = null != (U = e.displayNameStyles) ? U : (0, l.mT)(e.display_name_styles)),
            (this.premiumState = null != (G = e.premiumState) ? G : (0, d.f)(e.premium_state)),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: (e) => {
                        if (e <= 0x40000000) return ((this.flags | this.publicFlags) & e) === e;
                        let t = r.iu(this.flags),
                            n = r.iu(this.publicFlags),
                            i = r.iu(e);
                        return r.zy(r.kg(t, n), i);
                    },
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => this.hasFlag(h.nhx.STAFF),
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => !this.hasFlag(h.nhx.STAFF) && null != this.personalConnectionId,
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () =>
                        this.hasFlag(h.nhx.STAFF) ||
                        this.hasFlag(h.nhx.COLLABORATOR) ||
                        this.hasFlag(h.nhx.RESTRICTED_COLLABORATOR),
                },
            }),
            (null == (V = this.globalName) ? void 0 : V.length) === 0 && (this.globalName = null);
    }
}
new O({
    id: "0",
});
