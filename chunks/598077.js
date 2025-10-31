n.d(t, { Z: () => y }), n(415506), n(997841);
var r = n(149765),
    i = n(81825),
    a = n(864106),
    o = n(131016),
    s = n(602210),
    l = n(4242),
    c = n(921383),
    u = n(768581),
    d = n(630388),
    f = n(111361),
    _ = n(709054),
    p = n(981631),
    h = n(474936);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
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
function b(e, t) {
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
class y extends i.Z {
    get createdAt() {
        return new Date(_.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.$k,
            i = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != i && null != e
            ? u.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: i,
                  userId: this.id,
                  canAnimate: n,
                  canWebP: r,
              })
            : u.ZP.getUserAvatarURL(this, n, t, null, r);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = b(g({}, this.guildMemberAvatars), { [e]: t });
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = b(g({}, this.guildMemberAvatars), { [e]: void 0 });
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return u.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    u.ZP.makeSource(
                        u.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n,
                        }),
                    ),
                );
        }
        return u.ZP.getAnimatableSourceWithFallback(t, (e) => u.ZP.getUserAvatarSource(this, e, n));
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
        return (0, d.yE)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (0, d.yE)(this.premiumUsageFlags, e);
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
            case h.PremiumTypes.TIER_0:
                return t;
            case h.PremiumTypes.TIER_1:
                return n;
            case h.PremiumTypes.TIER_2:
                return r;
            default:
                return t || n || r;
        }
    }
    hadPremiumSubscription() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return !(0, f.I5)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(p.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(p.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === p.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === p.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(p.xW$.VERIFIED_BOT);
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
        return this.hasFlag(p.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, a.FG)(e);
    }
    get nameplate() {
        var e;
        return (0, l.Pb)(null == (e = this.collectibles) ? void 0 : e.nameplate);
    }
    constructor(e) {
        var t, n, i, a, l, u, d, f, _, h, g, E, b, y, O, v, I, T, S, A, C, N, R, P, w, D, x, L, M, j, k, U, G, B;
        super(),
            m(this, "id", void 0),
            m(this, "username", void 0),
            m(this, "discriminator", void 0),
            m(this, "avatar", void 0),
            m(this, "avatarDecorationData", void 0),
            m(this, "banner", void 0),
            m(this, "email", void 0),
            m(this, "verified", void 0),
            m(this, "bot", void 0),
            m(this, "system", void 0),
            m(this, "mfaEnabled", void 0),
            m(this, "mobile", void 0),
            m(this, "desktop", void 0),
            m(this, "premiumType", void 0),
            m(this, "flags", void 0),
            m(this, "publicFlags", void 0),
            m(this, "purchasedFlags", void 0),
            m(this, "premiumUsageFlags", void 0),
            m(this, "phone", void 0),
            m(this, "nsfwAllowed", void 0),
            m(this, "ageVerificationStatus", void 0),
            m(this, "guildMemberAvatars", void 0),
            m(this, "hasBouncedEmail", void 0),
            m(this, "personalConnectionId", void 0),
            m(this, "globalName", void 0),
            m(this, "primaryGuild", void 0),
            m(this, "collectibles", void 0),
            m(this, "displayNameStyles", void 0),
            m(this, "premiumState", void 0),
            m(this, "hasFlag", (e) => !1),
            m(this, "isStaff", () => !1),
            m(this, "isStaffPersonal", () => !1),
            m(this, "hasAnyStaffLevel", () => !1);
        let Z = null != (n = e.premium_type) ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null != (i = e.username) ? i : ""),
            (this.discriminator = null != (a = e.discriminator) ? a : p.fo$),
            (this.avatar = null != (l = e.avatar) ? l : null),
            (this.avatarDecoration = null != (u = e.avatar_decoration_data) ? u : e.avatarDecorationData),
            (this.email = null != (d = e.email) ? d : null),
            (this.verified = null != (f = e.verified) && f),
            (this.bot = null != (_ = e.bot) && _),
            (this.system = null != (h = e.system) && h),
            (this.mfaEnabled = null != (E = null != (g = e.mfa_enabled) ? g : e.mfaEnabled) && E),
            (this.mobile = null != (b = e.mobile) && b),
            (this.desktop = null != (y = e.desktop) && y),
            (this.premiumType = Z === p.WND ? null : Z),
            (this.flags = null != (O = e.flags) ? O : 0),
            (this.publicFlags = null != (I = null != (v = e.public_flags) ? v : e.publicFlags) ? I : 0),
            (this.purchasedFlags = null != (S = null != (T = e.purchased_flags) ? T : e.purchasedFlags) ? S : 0),
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
            (this.primaryGuild = (0, s.l)(null != (U = null != (k = e.primary_guild) ? k : e.primaryGuild) ? U : null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, o.bN)(e.display_name_styles)),
            (this.premiumState = null != (B = e.premiumState) ? B : (0, c.C)(e.premium_state)),
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
                    value: () => this.hasFlag(p.xW$.STAFF),
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => !this.hasFlag(p.xW$.STAFF) && null != this.personalConnectionId,
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () =>
                        this.hasFlag(p.xW$.STAFF) ||
                        this.hasFlag(p.xW$.COLLABORATOR) ||
                        this.hasFlag(p.xW$.RESTRICTED_COLLABORATOR),
                },
            }),
            (null == (t = this.globalName) ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new y({ id: "0" });
