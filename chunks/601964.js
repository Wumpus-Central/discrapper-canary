n.d(t, {
    Bg: () => _,
    ZP: () => f
}),
    n(47120);
var i = n(81825),
    r = n(768581),
    a = n(709054),
    s = n(624138),
    o = n(981631),
    l = n(185923),
    u = n(474936);
function c(e, t, n) {
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
let d = 200;
class f extends i.Z {
    merge(e) {
        let { features: t } = e;
        if (null != t) {
            let n = new Set(t);
            if (n.size === this.features.size) {
                let t = !1;
                for (let e of n)
                    if (!this.features.has(e)) {
                        t = !0;
                        break;
                    }
                t || (e.features = this.features);
            }
        }
        return super.merge.call(this, e);
    }
    getSafetyAlertsChannelId() {
        var e;
        return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId;
    }
    getIconURL(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: t,
            lossless: n
        });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return r.ZP.getAnimatableSourceWithFallback(t, (t) =>
            r.ZP.getGuildIconSource({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: t
            })
        );
    }
    getApplicationId() {
        return this.application_id;
    }
    toString() {
        var e;
        return null !== (e = this.name) && void 0 !== e ? e : '';
    }
    get acronym() {
        return (0, s.Zg)(this.name);
    }
    isOwner(e) {
        let t = 'string' == typeof e ? e : null != e ? e.id : null;
        return this.ownerId === t;
    }
    isOwnerWithRequiredMfaLevel(e) {
        return (!!e.mfaEnabled || this.mfaLevel !== o.BpS.ELEVATED) && this.isOwner(e);
    }
    isNew() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
            t = a.default.extractTimestamp(this.id);
        return Date.now() - t < 86400000 * e;
    }
    isLurker() {
        return null == this.joinedAt;
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    getEveryoneRoleId() {
        return a.default.castGuildIdAsEveryoneGuildRoleId(this.id);
    }
    getMaxEmojiSlots() {
        return Math.max(this.hasFeature(o.oNc.MORE_EMOJI) ? d : l.jZ, u.HO[this.premiumTier].limits.emoji);
    }
    getMaxRoleSubscriptionEmojiSlots() {
        return 25;
    }
    getMaxSoundboardSlots() {
        return u.HO[this.premiumTier].limits.soundboardSounds;
    }
    isCommunity() {
        return this.hasFeature(o.oNc.COMMUNITY);
    }
    hasVerificationGate() {
        return this.hasFeature(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(o.oNc.COMMUNITY) || this.hasFeature(o.oNc.CLAN));
    }
    hasCommunityInfoSubheader() {
        return this.hasFeature(o.oNc.COMMUNITY) && this.hasFeature(o.oNc.DISCOVERABLE);
    }
    canHaveRaidActivityAlerts() {
        return (!this.hasFeature(o.oNc.COMMUNITY) && this.hasFeature(o.oNc.NON_COMMUNITY_RAID_ALERTS)) || (this.hasFeature(o.oNc.COMMUNITY) && !this.hasFeature(o.oNc.RAID_ALERTS_DISABLED));
    }
    updateJoinedAt(e) {
        return this.set('joinedAt', 'string' == typeof e ? new Date(e) : e);
    }
    constructor(e) {
        var t, n, i;
        super(), c(this, 'id', void 0), c(this, 'name', void 0), c(this, 'description', void 0), c(this, 'ownerId', void 0), c(this, 'icon', void 0), c(this, 'splash', void 0), c(this, 'banner', void 0), c(this, 'homeHeader', void 0), c(this, 'preferredLocale', void 0), c(this, 'features', void 0), c(this, 'afkChannelId', void 0), c(this, 'afkTimeout', void 0), c(this, 'systemChannelId', void 0), c(this, 'verificationLevel', void 0), c(this, 'joinedAt', void 0), c(this, 'defaultMessageNotifications', void 0), c(this, 'mfaLevel', void 0), c(this, 'application_id', void 0), c(this, 'explicitContentFilter', void 0), c(this, 'vanityURLCode', void 0), c(this, 'premiumTier', void 0), c(this, 'premiumSubscriberCount', void 0), c(this, 'premiumProgressBarEnabled', void 0), c(this, 'systemChannelFlags', void 0), c(this, 'rulesChannelId', void 0), c(this, 'safetyAlertsChannelId', void 0), c(this, 'discoverySplash', void 0), c(this, 'publicUpdatesChannelId', void 0), c(this, 'maxStageVideoChannelUsers', void 0), c(this, 'maxVideoChannelUsers', void 0), c(this, 'maxMembers', void 0), c(this, 'nsfwLevel', void 0), c(this, 'hubType', void 0), c(this, 'latestOnboardingQuestionId', void 0), c(this, 'profile', void 0);
        let r = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
        (this.id = e.id), (this.name = e.name || ''), (this.description = e.description || null), (this.ownerId = e.ownerId || null), (this.icon = e.icon || null), (this.splash = e.splash || null), (this.banner = e.banner || null), (this.homeHeader = e.homeHeader || null), (this.features = r), (this.preferredLocale = e.preferredLocale || 'en-US'), (this.afkChannelId = e.afkChannelId || null), (this.afkTimeout = e.afkTimeout), (this.systemChannelId = e.systemChannelId || null), (this.verificationLevel = e.verificationLevel || o.sFg.NONE), (this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt)), (this.defaultMessageNotifications = e.defaultMessageNotifications || o.bL.ALL_MESSAGES), (this.mfaLevel = e.mfaLevel || o.BpS.NONE), (this.application_id = e.application_id || null), (this.explicitContentFilter = e.explicitContentFilter || o.lxg.DISABLED), (this.vanityURLCode = e.vanityURLCode || void 0), (this.premiumTier = e.premiumTier || o.Eu4.NONE), (this.premiumSubscriberCount = e.premiumSubscriberCount || 0), (this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1), (this.systemChannelFlags = e.systemChannelFlags), (this.discoverySplash = e.discoverySplash || null), (this.rulesChannelId = e.rulesChannelId || null), (this.safetyAlertsChannelId = e.safetyAlertsChannelId || null), (this.publicUpdatesChannelId = e.publicUpdatesChannelId || null), (this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1), (this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1), (this.maxMembers = e.maxMembers || -1), (this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : o.V_K.DEFAULT), (this.hubType = e.hubType), (this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null), (this.profile = null !== (i = e.profile) && void 0 !== i ? i : null);
    }
}
class _ extends f {
    constructor(e) {
        var t;
        super(e),
            c(this, 'roles', void 0),
            c(this, 'member', void 0),
            (this.roles = null !== (t = e.roles) && void 0 !== t ? t : {}),
            e.member && e.member.userId && e.member.roles
                ? (this.member = {
                      roles: e.member.roles,
                      userId: e.member.userId
                  })
                : (this.member = null);
    }
}
