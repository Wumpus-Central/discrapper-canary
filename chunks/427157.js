n.d(t, {
    A: () => v,
}),
    n(65821),
    n(938796);
var r = n(136722),
    i = n(665260),
    a = n(988506),
    o = n(315069),
    s = n(507698),
    l = n(945096),
    c = n(47537),
    u = n(369496),
    d = n(244284),
    f = n(392737),
    p = n(486020),
    _ = n(474090),
    h = n(661191),
    m = n(652215),
    g = n(788868);

function E(e, t, n) {
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

function y(e) {
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
                E(e, t, n[t]);
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

function O(e, t) {
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
class v extends o.A {
    get createdAt() {
        return new Date(h.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.QB,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? p.Ay.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n,
                  canWebP: r,
              })
            : p.Ay.getUserAvatarURL(this, n, t, null, r);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = O(y({}, this.guildMemberAvatars), {
            [e]: t,
        });
        return this.merge({
            guildMemberAvatars: n,
        });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = O(y({}, this.guildMemberAvatars), {
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
                return p.Ay.getAnimatableSourceWithFallback(t, (t) =>
                    p.Ay.makeSource(
                        p.Ay.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n,
                        }),
                    ),
                );
        }
        return p.Ay.getAnimatableSourceWithFallback(t, (e) => p.Ay.getUserAvatarSource(this, e, n));
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
        let t = g.OO[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_0),
            n = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_1),
            r = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_2);
        switch (e) {
            case g.PremiumTypes.TIER_0:
                return t;
            case g.PremiumTypes.TIER_1:
                return n;
            case g.PremiumTypes.TIER_2:
                return r;
            default:
                return t || n || r;
        }
    }
    hadPremiumSubscription() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return !(0, _.ki)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(m.nhx.PARTNER) || this.isStaffPersonal();
    }
    isPremiumWithPremiumGroup() {
        var e;
        return (
            (0, _.ki)(this, g.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === a.fE.SUBSCRIPTION_GROUP
        );
    }
    isPremiumWithFractionalPremiumOnly() {
        var e, t, n;
        return (
            (0, _.ki)(this, g.PremiumTypes.TIER_2) &&
            ((null == (e = this.premiumState) ? void 0 : e.premiumSubscriptionType) === a.jK.NONE_UNSPECIFIED ||
                (null == (t = this.premiumState) ? void 0 : t.premiumSubscriptionType) === a.jK.BOOST_ONLY) &&
            (null == (n = this.premiumState) ? void 0 : n.premiumSource) === a.fE.FRACTIONAL_NITRO
        );
    }
    isFractionalPremiumWithNoStandardSub() {
        var e;
        return (
            (0, _.ki)(this, g.PremiumTypes.TIER_2) &&
            (null == (e = this.premiumState) ? void 0 : e.premiumSource) === a.fE.FRACTIONAL_NITRO &&
            this.premiumState.premiumSubscriptionType !== a.jK.TIER_2
        );
    }
    hasUrgentMessages() {
        return this.hasFlag(m.nhx.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === m.h3J);
    }
    isLocalBot() {
        return this.bot && this.id === m.oIV;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(m.nhx.VERIFIED_BOT);
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
        return this.hasFlag(m.nhx.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, s.Xq)(e);
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
        var t,
            n,
            i,
            a,
            o,
            s,
            u,
            p,
            _,
            h,
            g,
            y,
            b,
            O,
            v,
            A,
            I,
            S,
            T,
            C,
            N,
            w,
            R,
            P,
            D,
            L,
            x,
            M,
            j,
            k,
            U,
            G,
            V,
            F,
            B,
            H,
            Y;
        super(),
            E(this, "id", void 0),
            E(this, "username", void 0),
            E(this, "discriminator", void 0),
            E(this, "avatar", void 0),
            E(this, "avatarDecorationData", void 0),
            E(this, "banner", void 0),
            E(this, "email", void 0),
            E(this, "verified", void 0),
            E(this, "bot", void 0),
            E(this, "system", void 0),
            E(this, "mfaEnabled", void 0),
            E(this, "mobile", void 0),
            E(this, "desktop", void 0),
            E(this, "premiumType", void 0),
            E(this, "flags", void 0),
            E(this, "publicFlags", void 0),
            E(this, "purchasedFlags", void 0),
            E(this, "premiumUsageFlags", void 0),
            E(this, "phone", void 0),
            E(this, "nsfwAllowed", void 0),
            E(this, "ageVerificationStatus", void 0),
            E(this, "guildMemberAvatars", void 0),
            E(this, "hasBouncedEmail", void 0),
            E(this, "personalConnectionId", void 0),
            E(this, "globalName", void 0),
            E(this, "primaryGuild", void 0),
            E(this, "collectibles", void 0),
            E(this, "displayNameStyles", void 0),
            E(this, "premiumState", void 0),
            E(this, "restrictedSchedule", void 0),
            E(this, "appTransactionIds", void 0),
            E(this, "hasFlag", (e) => !1),
            E(this, "isStaff", () => !1),
            E(this, "isStaffPersonal", () => !1),
            E(this, "hasAnyStaffLevel", () => !1);
        const W = null != (t = e.premium_type) ? t : e.premiumType;
        (this.id = e.id),
            (this.username = null != (n = e.username) ? n : ""),
            (this.discriminator = null != (i = e.discriminator) ? i : m.h3J),
            (this.avatar = null != (a = e.avatar) ? a : null),
            (this.avatarDecoration = null != (o = e.avatar_decoration_data) ? o : e.avatarDecorationData),
            (this.email = null != (s = e.email) ? s : null),
            (this.verified = null != (u = e.verified) && u),
            (this.bot = null != (p = e.bot) && p),
            (this.system = null != (_ = e.system) && _),
            (this.mfaEnabled = null != (h = null != (g = e.mfa_enabled) ? g : e.mfaEnabled) && h),
            (this.mobile = null != (y = e.mobile) && y),
            (this.desktop = null != (b = e.desktop) && b),
            (this.premiumType = W === m.oA2 ? null : W),
            (this.flags = null != (O = e.flags) ? O : 0),
            (this.publicFlags = null != (v = null != (A = e.public_flags) ? A : e.publicFlags) ? v : 0),
            (this.purchasedFlags = null != (I = null != (S = e.purchased_flags) ? S : e.purchasedFlags) ? I : 0),
            (this.premiumUsageFlags =
                null != (T = null != (C = e.premium_usage_flags) ? C : e.premiumUsageFlags) ? T : 0),
            (this.phone = null != (N = e.phone) ? N : null),
            (this.nsfwAllowed = null != (w = e.nsfw_allowed) ? w : e.nsfwAllowed),
            (this.ageVerificationStatus = null != (R = e.age_verification_status) ? R : e.ageVerificationStatus),
            (this.guildMemberAvatars = null != (P = e.guildMemberAvatars) ? P : {}),
            (this.hasBouncedEmail = null != (D = null != (L = e.has_bounced_email) ? L : e.hasBouncedEmail) && D),
            (this.personalConnectionId =
                null != (x = null != (M = e.personal_connection_id) ? M : e.personalConnectionId) ? x : null),
            (this.globalName = null != (j = e.global_name) ? j : e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, c.j)(null != (k = null != (U = e.primary_guild) ? U : e.primaryGuild) ? k : null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, l.mT)(e.display_name_styles)),
            (this.premiumState = null != (V = e.premiumState) ? V : (0, f.f)(e.premium_state)),
            (this.restrictedSchedule = (0, d.QU)(null != (F = e.restricted_schedule) ? F : e.restrictedSchedule)),
            (this.appTransactionIds =
                null != (B = null != (H = e.appTransactionIds) ? H : e.app_transaction_ids) ? B : null),
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
                    value: () => this.hasFlag(m.nhx.STAFF),
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => !this.hasFlag(m.nhx.STAFF) && null != this.personalConnectionId,
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () =>
                        this.hasFlag(m.nhx.STAFF) ||
                        this.hasFlag(m.nhx.COLLABORATOR) ||
                        this.hasFlag(m.nhx.RESTRICTED_COLLABORATOR),
                },
            }),
            (null == (Y = this.globalName) ? void 0 : Y.length) === 0 && (this.globalName = null);
    }
}
new v({
    id: "0",
});
