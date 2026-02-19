"use strict";
n.d(t, { A: () => A }), n(938796);
var r = n(136722),
    i = n(665260),
    s = n(988506),
    a = n(315069),
    o = n(507698),
    l = n(698574),
    u = n(945096),
    c = n(47537),
    d = n(369496),
    _ = n(244284),
    f = n(392737),
    p = n(486020),
    h = n(474090),
    m = n(661191),
    E = n(652215),
    g = n(788868);
class A extends a.A {
    id;
    username;
    discriminator;
    avatar;
    avatarDecorationData;
    banner;
    email;
    verified;
    bot;
    system;
    mfaEnabled;
    mobile;
    desktop;
    premiumType;
    flags;
    publicFlags;
    purchasedFlags;
    premiumUsageFlags;
    phone;
    nsfwAllowed;
    ageVerificationStatus;
    guildMemberAvatars;
    hasBouncedEmail;
    personalConnectionId;
    globalName;
    primaryGuild;
    collectibles;
    displayNameStyles;
    premiumState;
    restrictedSchedule;
    appTransactionIds;
    storeCountry;
    hasFlag = (e) => !1;
    isStaff = () => !1;
    isStaffPersonal = () => !1;
    hasAnyStaffLevel = () => !1;
    constructor(e) {
        super();
        const t = e.premium_type ?? e.premiumType;
        (this.id = e.id),
            (this.username = e.username ?? ""),
            (this.discriminator = e.discriminator ?? E.h3J),
            (this.avatar = e.avatar ?? null),
            (this.avatarDecoration = e.avatar_decoration_data ?? e.avatarDecorationData),
            (this.email = e.email ?? null),
            (this.verified = e.verified ?? !1),
            (this.bot = e.bot ?? !1),
            (this.system = e.system ?? !1),
            (this.mfaEnabled = e.mfa_enabled ?? e.mfaEnabled ?? !1),
            (this.mobile = e.mobile ?? !1),
            (this.desktop = e.desktop ?? !1),
            (this.premiumType = t === E.oA2 ? null : t),
            (this.flags = e.flags ?? 0),
            (this.publicFlags = e.public_flags ?? e.publicFlags ?? 0),
            (this.purchasedFlags = e.purchased_flags ?? e.purchasedFlags ?? 0),
            (this.premiumUsageFlags = e.premium_usage_flags ?? e.premiumUsageFlags ?? 0),
            (this.phone = e.phone ?? null),
            (this.nsfwAllowed = e.nsfw_allowed ?? e.nsfwAllowed),
            (this.ageVerificationStatus = e.age_verification_status ?? e.ageVerificationStatus),
            (this.guildMemberAvatars = e.guildMemberAvatars ?? {}),
            (this.hasBouncedEmail = e.has_bounced_email ?? e.hasBouncedEmail ?? !1),
            (this.personalConnectionId = e.personal_connection_id ?? e.personalConnectionId ?? null),
            (this.globalName = e.global_name ?? e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, c.j)(e.primary_guild ?? e.primaryGuild ?? null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = e.displayNameStyles ?? (0, u.mT)(e.display_name_styles)),
            (this.premiumState = e.premiumState ?? (0, f.f)(e.premium_state)),
            (this.restrictedSchedule = (0, _.QU)(e.restricted_schedule ?? e.restrictedSchedule)),
            (this.appTransactionIds = e.appTransactionIds ?? e.app_transaction_ids ?? null),
            (this.storeCountry = (0, l.P)(e.store_country ?? e.storeCountry)),
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
                isStaff: { writable: !1, configurable: !1, enumerable: !1, value: () => this.hasFlag(E.nhx.STAFF) },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => !this.hasFlag(E.nhx.STAFF) && null != this.personalConnectionId,
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () =>
                        this.hasFlag(E.nhx.STAFF) ||
                        this.hasFlag(E.nhx.COLLABORATOR) ||
                        this.hasFlag(E.nhx.RESTRICTED_COLLABORATOR),
                },
            }),
            this.globalName?.length === 0 && (this.globalName = null);
    }
    get createdAt() {
        return new Date(m.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.QB,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? p.Ay.getGuildMemberAvatarURLSimple({ guildId: e, avatar: i, userId: this.id, canAnimate: n, canWebP: r })
            : p.Ay.getUserAvatarURL(this, n, t, null, r);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = { ...this.guildMemberAvatars, [e]: t };
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = { ...this.guildMemberAvatars, [e]: void 0 };
        return this.merge({ guildMemberAvatars: t });
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
        return `${this.username}#${`${this.discriminator}`.padStart(4, "0")}`;
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
        return !(0, h.ki)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(E.nhx.PARTNER) || this.isStaffPersonal();
    }
    isPremiumWithPremiumGroup() {
        return (0, h.ki)(this, g.PremiumTypes.TIER_2) && this.premiumState?.premiumSource === s.fE.SUBSCRIPTION_GROUP;
    }
    isPremiumWithFractionalPremiumOnly() {
        return (
            (0, h.ki)(this, g.PremiumTypes.TIER_2) &&
            (this.premiumState?.premiumSubscriptionType === s.jK.NONE_UNSPECIFIED ||
                this.premiumState?.premiumSubscriptionType === s.jK.BOOST_ONLY) &&
            this.premiumState?.premiumSource === s.fE.FRACTIONAL_NITRO
        );
    }
    isFractionalPremiumWithNoStandardSub() {
        return (
            (0, h.ki)(this, g.PremiumTypes.TIER_2) &&
            this.premiumState?.premiumSource === s.fE.FRACTIONAL_NITRO &&
            this.premiumState.premiumSubscriptionType !== s.jK.TIER_2
        );
    }
    hasUrgentMessages() {
        return this.hasFlag(E.nhx.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === E.h3J);
    }
    isLocalBot() {
        return this.bot && this.id === E.oIV;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(E.nhx.VERIFIED_BOT);
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
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === s.qT.MEMBER;
    }
    isPremiumGroupPrimary() {
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === s.qT.PRIMARY;
    }
    get isProvisional() {
        return this.hasFlag(E.nhx.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, o.Xq)(e);
    }
    get nameplate() {
        return (0, d.WK)(this.collectibles?.nameplate);
    }
    get premiumGroupRole() {
        return this.premiumState?.premiumSubscriptionGroupRole ?? s.qT.UNSPECIFIED;
    }
}
new A({ id: "0" });
