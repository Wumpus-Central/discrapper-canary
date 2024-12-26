r.d(n, {
    Bg: function () {
        return p;
    },
    ZP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(81825),
    s = r(768581),
    o = r(709054),
    l = r(624138),
    u = r(981631),
    c = r(185923),
    d = r(474936);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = 200;
class h extends a.Z {
    merge(e) {
        let { features: n } = e;
        if (null != n) {
            let r = new Set(n);
            if (r.size === this.features.size) {
                let n = !1;
                for (let e of r)
                    if (!this.features.has(e)) {
                        n = !0;
                        break;
                    }
                !n && (e.features = this.features);
            }
        }
        return super.merge.call(this, e);
    }
    getSafetyAlertsChannelId() {
        var e;
        return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId;
    }
    getIconURL(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return s.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: n
        });
    }
    getIconSource(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return s.ZP.getAnimatableSourceWithFallback(n, (n) =>
            s.ZP.getGuildIconSource({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: n
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
        return (0, l.Zg)(this.name);
    }
    isOwner(e) {
        let n = 'string' == typeof e ? e : null != e ? e.id : null;
        return this.ownerId === n;
    }
    isOwnerWithRequiredMfaLevel(e) {
        return (!!e.mfaEnabled || this.mfaLevel !== u.BpS.ELEVATED) && this.isOwner(e);
    }
    isNew() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
            n = o.default.extractTimestamp(this.id);
        return Date.now() - n < 86400000 * e;
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
        return Math.max(this.hasFeature(u.oNc.MORE_EMOJI) ? _ : c.jZ, d.HO[this.premiumTier].limits.emoji);
    }
    getMaxRoleSubscriptionEmojiSlots() {
        return 25;
    }
    getMaxSoundboardSlots() {
        return d.HO[this.premiumTier].limits.soundboardSounds;
    }
    isCommunity() {
        return this.hasFeature(u.oNc.COMMUNITY);
    }
    hasVerificationGate() {
        return this.hasFeature(u.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(u.oNc.COMMUNITY) || this.hasFeature(u.oNc.CLAN));
    }
    hasCommunityInfoSubheader() {
        return this.hasFeature(u.oNc.COMMUNITY) && this.hasFeature(u.oNc.DISCOVERABLE);
    }
    canHaveRaidActivityAlerts() {
        return (!this.hasFeature(u.oNc.COMMUNITY) && this.hasFeature(u.oNc.NON_COMMUNITY_RAID_ALERTS)) || (this.hasFeature(u.oNc.COMMUNITY) && !this.hasFeature(u.oNc.RAID_ALERTS_DISABLED));
    }
    updateJoinedAt(e) {
        return this.set('joinedAt', 'string' == typeof e ? new Date(e) : e);
    }
    constructor(e) {
        var n, r, i;
        super(), f(this, 'id', void 0), f(this, 'name', void 0), f(this, 'description', void 0), f(this, 'ownerId', void 0), f(this, 'icon', void 0), f(this, 'splash', void 0), f(this, 'banner', void 0), f(this, 'homeHeader', void 0), f(this, 'preferredLocale', void 0), f(this, 'features', void 0), f(this, 'afkChannelId', void 0), f(this, 'afkTimeout', void 0), f(this, 'systemChannelId', void 0), f(this, 'verificationLevel', void 0), f(this, 'joinedAt', void 0), f(this, 'defaultMessageNotifications', void 0), f(this, 'mfaLevel', void 0), f(this, 'application_id', void 0), f(this, 'explicitContentFilter', void 0), f(this, 'vanityURLCode', void 0), f(this, 'premiumTier', void 0), f(this, 'premiumSubscriberCount', void 0), f(this, 'premiumProgressBarEnabled', void 0), f(this, 'systemChannelFlags', void 0), f(this, 'rulesChannelId', void 0), f(this, 'safetyAlertsChannelId', void 0), f(this, 'discoverySplash', void 0), f(this, 'publicUpdatesChannelId', void 0), f(this, 'maxStageVideoChannelUsers', void 0), f(this, 'maxVideoChannelUsers', void 0), f(this, 'maxMembers', void 0), f(this, 'nsfwLevel', void 0), f(this, 'hubType', void 0), f(this, 'latestOnboardingQuestionId', void 0), f(this, 'profile', void 0);
        let a = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
        (this.id = e.id), (this.name = e.name || ''), (this.description = e.description || null), (this.ownerId = e.ownerId || null), (this.icon = e.icon || null), (this.splash = e.splash || null), (this.banner = e.banner || null), (this.homeHeader = e.homeHeader || null), (this.features = a), (this.preferredLocale = e.preferredLocale || 'en-US'), (this.afkChannelId = e.afkChannelId || null), (this.afkTimeout = e.afkTimeout), (this.systemChannelId = e.systemChannelId || null), (this.verificationLevel = e.verificationLevel || u.sFg.NONE), (this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt)), (this.defaultMessageNotifications = e.defaultMessageNotifications || u.bL.ALL_MESSAGES), (this.mfaLevel = e.mfaLevel || u.BpS.NONE), (this.application_id = e.application_id || null), (this.explicitContentFilter = e.explicitContentFilter || u.lxg.DISABLED), (this.vanityURLCode = e.vanityURLCode || void 0), (this.premiumTier = e.premiumTier || u.Eu4.NONE), (this.premiumSubscriberCount = e.premiumSubscriberCount || 0), (this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1), (this.systemChannelFlags = e.systemChannelFlags), (this.discoverySplash = e.discoverySplash || null), (this.rulesChannelId = e.rulesChannelId || null), (this.safetyAlertsChannelId = e.safetyAlertsChannelId || null), (this.publicUpdatesChannelId = e.publicUpdatesChannelId || null), (this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1), (this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1), (this.maxMembers = e.maxMembers || -1), (this.nsfwLevel = null !== (n = e.nsfwLevel) && void 0 !== n ? n : u.V_K.DEFAULT), (this.hubType = e.hubType), (this.latestOnboardingQuestionId = null !== (r = e.latestOnboardingQuestionId) && void 0 !== r ? r : null), (this.profile = null !== (i = e.profile) && void 0 !== i ? i : null);
    }
}
class p extends h {
    constructor(e) {
        var n;
        super(e),
            f(this, 'roles', void 0),
            f(this, 'member', void 0),
            (this.roles = null !== (n = e.roles) && void 0 !== n ? n : {}),
            e.member && e.member.userId && e.member.roles
                ? (this.member = {
                      roles: e.member.roles,
                      userId: e.member.userId
                  })
                : (this.member = null);
    }
}
