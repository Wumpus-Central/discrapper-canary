n.d(t, {
    Bg: () => p,
    ZP: () => f
}),
    n(47120),
    n(266796);
var r = n(81825),
    i = n(768581),
    o = n(709054),
    a = n(624138),
    s = n(981631),
    l = n(185923),
    c = n(474936);
function u(e, t, n) {
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
class f extends r.Z {
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
        return i.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: t,
            lossless: n
        });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return i.ZP.getAnimatableSourceWithFallback(t, (t) =>
            i.ZP.getGuildIconSource({
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
        return (0, a.Zg)(this.name);
    }
    isOwner(e) {
        let t = 'string' == typeof e ? e : null != e ? e.id : null;
        return this.ownerId === t;
    }
    isOwnerWithRequiredMfaLevel(e) {
        return (!!e.mfaEnabled || this.mfaLevel !== s.BpS.ELEVATED) && this.isOwner(e);
    }
    isNew() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
            t = o.default.extractTimestamp(this.id);
        return Date.now() - t < 86400000 * e;
    }
    isLurker() {
        return null == this.joinedAt;
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    getEveryoneRoleId() {
        return o.default.castGuildIdAsEveryoneGuildRoleId(this.id);
    }
    getMaxEmojiSlots() {
        return Math.max(this.hasFeature(s.oNc.MORE_EMOJI) ? d : l.jZ, c.HO[this.premiumTier].limits.emoji);
    }
    getMaxRoleSubscriptionEmojiSlots() {
        return 25;
    }
    getMaxSoundboardSlots() {
        return c.HO[this.premiumTier].limits.soundboardSounds;
    }
    isCommunity() {
        return this.hasFeature(s.oNc.COMMUNITY);
    }
    hasVerificationGate() {
        return this.hasFeature(s.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(s.oNc.COMMUNITY) || this.hasFeature(s.oNc.CLAN));
    }
    hasCommunityInfoSubheader() {
        return this.hasFeature(s.oNc.COMMUNITY) && this.hasFeature(s.oNc.DISCOVERABLE);
    }
    canHaveRaidActivityAlerts() {
        return (!this.hasFeature(s.oNc.COMMUNITY) && this.hasFeature(s.oNc.NON_COMMUNITY_RAID_ALERTS)) || (this.hasFeature(s.oNc.COMMUNITY) && !this.hasFeature(s.oNc.RAID_ALERTS_DISABLED));
    }
    updateJoinedAt(e) {
        return this.set('joinedAt', 'string' == typeof e ? new Date(e) : e);
    }
    constructor(e) {
        var t, n, r;
        super(), u(this, 'id', void 0), u(this, 'name', void 0), u(this, 'description', void 0), u(this, 'ownerId', void 0), u(this, 'icon', void 0), u(this, 'splash', void 0), u(this, 'banner', void 0), u(this, 'homeHeader', void 0), u(this, 'preferredLocale', void 0), u(this, 'features', void 0), u(this, 'afkChannelId', void 0), u(this, 'afkTimeout', void 0), u(this, 'systemChannelId', void 0), u(this, 'verificationLevel', void 0), u(this, 'joinedAt', void 0), u(this, 'defaultMessageNotifications', void 0), u(this, 'mfaLevel', void 0), u(this, 'application_id', void 0), u(this, 'explicitContentFilter', void 0), u(this, 'vanityURLCode', void 0), u(this, 'premiumTier', void 0), u(this, 'premiumSubscriberCount', void 0), u(this, 'premiumProgressBarEnabled', void 0), u(this, 'systemChannelFlags', void 0), u(this, 'rulesChannelId', void 0), u(this, 'safetyAlertsChannelId', void 0), u(this, 'discoverySplash', void 0), u(this, 'publicUpdatesChannelId', void 0), u(this, 'maxStageVideoChannelUsers', void 0), u(this, 'maxVideoChannelUsers', void 0), u(this, 'maxMembers', void 0), u(this, 'nsfwLevel', void 0), u(this, 'hubType', void 0), u(this, 'latestOnboardingQuestionId', void 0), u(this, 'profile', void 0);
        let i = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
        (this.id = e.id), (this.name = e.name || ''), (this.description = e.description || null), (this.ownerId = e.ownerId || null), (this.icon = e.icon || null), (this.splash = e.splash || null), (this.banner = e.banner || null), (this.homeHeader = e.homeHeader || null), (this.features = i), (this.preferredLocale = e.preferredLocale || 'en-US'), (this.afkChannelId = e.afkChannelId || null), (this.afkTimeout = e.afkTimeout), (this.systemChannelId = e.systemChannelId || null), (this.verificationLevel = e.verificationLevel || s.sFg.NONE), (this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt)), (this.defaultMessageNotifications = e.defaultMessageNotifications || s.bL.ALL_MESSAGES), (this.mfaLevel = e.mfaLevel || s.BpS.NONE), (this.application_id = e.application_id || null), (this.explicitContentFilter = e.explicitContentFilter || s.lxg.DISABLED), (this.vanityURLCode = e.vanityURLCode || void 0), (this.premiumTier = e.premiumTier || s.Eu4.NONE), (this.premiumSubscriberCount = e.premiumSubscriberCount || 0), (this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1), (this.systemChannelFlags = e.systemChannelFlags), (this.discoverySplash = e.discoverySplash || null), (this.rulesChannelId = e.rulesChannelId || null), (this.safetyAlertsChannelId = e.safetyAlertsChannelId || null), (this.publicUpdatesChannelId = e.publicUpdatesChannelId || null), (this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1), (this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1), (this.maxMembers = e.maxMembers || -1), (this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : s.V_K.DEFAULT), (this.hubType = e.hubType), (this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null), (this.profile = null !== (r = e.profile) && void 0 !== r ? r : null);
    }
}
class p extends f {
    constructor(e) {
        var t;
        super(e),
            u(this, 'roles', void 0),
            u(this, 'member', void 0),
            (this.roles = null !== (t = e.roles) && void 0 !== t ? t : {}),
            e.member && e.member.userId && e.member.roles
                ? (this.member = {
                      roles: e.member.roles,
                      userId: e.member.userId
                  })
                : (this.member = null);
    }
}
