(n.d(t, {
    Bg: () => y,
    EB: () => f,
    Y2: () => b,
    ZP: () => d,
    eM: () => p,
    gM: () => _,
    kH: () => E,
    lV: () => g,
    yn: () => h,
    zN: () => m
}),
    n(415506),
    n(953529));
var r = n(843991),
    i = n(81825),
    a = n(768581),
    o = n(960048),
    s = n(709054),
    l = n(624138),
    c = n(981631);
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
class d extends i.Z {
    merge(e) {
        let { features: t } = e;
        if (null != t) {
            let n = (0, r.G)(t);
            (0, r.z)(n, this.features) && (e.features = this.features);
        }
        return super.merge.call(this, e);
    }
    toString() {
        var e;
        let t = Error('GuildRecord.toString() should not be called, access GuildRecord.name instead');
        return (o.Z.captureException(t), null != (e = this.name) ? e : '');
    }
    constructor(e) {
        var t, n, i, a, o, s;
        (super(), u(this, 'id', void 0), u(this, 'name', void 0), u(this, 'description', void 0), u(this, 'ownerId', void 0), u(this, 'icon', void 0), u(this, 'splash', void 0), u(this, 'banner', void 0), u(this, 'homeHeader', void 0), u(this, 'preferredLocale', void 0), u(this, 'features', void 0), u(this, 'afkChannelId', void 0), u(this, 'afkTimeout', void 0), u(this, 'systemChannelId', void 0), u(this, 'verificationLevel', void 0), u(this, 'joinedAt', void 0), u(this, 'defaultMessageNotifications', void 0), u(this, 'mfaLevel', void 0), u(this, 'application_id', void 0), u(this, 'explicitContentFilter', void 0), u(this, 'vanityURLCode', void 0), u(this, 'premiumTier', void 0), u(this, 'premiumSubscriberCount', void 0), u(this, 'premiumProgressBarEnabled', void 0), u(this, 'systemChannelFlags', void 0), u(this, 'rulesChannelId', void 0), u(this, 'safetyAlertsChannelId', void 0), u(this, 'discoverySplash', void 0), u(this, 'publicUpdatesChannelId', void 0), u(this, 'maxStageVideoChannelUsers', void 0), u(this, 'maxVideoChannelUsers', void 0), u(this, 'maxMembers', void 0), u(this, 'nsfwLevel', void 0), u(this, 'ownerConfiguredContentLevel', void 0), u(this, 'hubType', void 0), u(this, 'latestOnboardingQuestionId', void 0), u(this, 'profile', void 0), u(this, 'premiumFeatures', void 0), u(this, 'moderatorReporting', void 0), (this.id = e.id), (this.name = e.name || ''), (this.description = e.description || null), (this.ownerId = e.ownerId || null), (this.icon = e.icon || null), (this.splash = e.splash || null), (this.banner = e.banner || null), (this.homeHeader = e.homeHeader || null), (this.features = (0, r.G)(e.features)), (this.preferredLocale = e.preferredLocale || 'en-US'), (this.afkChannelId = e.afkChannelId || null), (this.afkTimeout = e.afkTimeout), (this.systemChannelId = e.systemChannelId || null), (this.verificationLevel = e.verificationLevel || c.sFg.NONE), (this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt), (this.defaultMessageNotifications = e.defaultMessageNotifications || c.bL.ALL_MESSAGES), (this.mfaLevel = e.mfaLevel || c.BpS.NONE), (this.application_id = e.application_id || null), (this.explicitContentFilter = e.explicitContentFilter || c.lxg.DISABLED), (this.vanityURLCode = e.vanityURLCode || null), (this.premiumTier = e.premiumTier || c.Eu4.NONE), (this.premiumSubscriberCount = e.premiumSubscriberCount || 0), (this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1), (this.systemChannelFlags = e.systemChannelFlags), (this.discoverySplash = e.discoverySplash || null), (this.rulesChannelId = e.rulesChannelId || null), (this.safetyAlertsChannelId = e.safetyAlertsChannelId || null), (this.publicUpdatesChannelId = e.publicUpdatesChannelId || null), (this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1), (this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1), (this.maxMembers = e.maxMembers || -1), (this.nsfwLevel = null != (t = e.nsfwLevel) ? t : c.V_K.DEFAULT), (this.ownerConfiguredContentLevel = null != (n = e.ownerConfiguredContentLevel) ? n : null), (this.hubType = e.hubType), (this.latestOnboardingQuestionId = null != (i = e.latestOnboardingQuestionId) ? i : null), (this.profile = null != (a = e.profile) ? a : null), (this.premiumFeatures = null != (o = e.premiumFeatures) ? o : null), (this.moderatorReporting = null != (s = e.moderatorReporting) ? s : null));
    }
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return a.ZP.getGuildIconURL({
        id: e.id,
        size: t,
        icon: e.icon,
        canAnimate: n,
        lossless: r
    });
}
function _(e) {
    return (0, l.Zg)(e.name);
}
function p(e, t) {
    let n = 'string' == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
function h(e, t) {
    return (!!t.mfaEnabled || e.mfaLevel !== c.BpS.ELEVATED) && p(e, t);
}
function m(e) {
    return null == e.joinedAt;
}
function g(e) {
    return s.default.castGuildIdAsEveryoneGuildRoleId(e.id);
}
function E(e, t) {
    return e.set('joinedAt', 'string' == typeof t ? new Date(t) : t);
}
function b(e) {
    return e.nsfwLevel === c.V_K.EXPLICIT || e.nsfwLevel === c.V_K.AGE_RESTRICTED;
}
class y extends d {
    constructor(e) {
        var t;
        (super(e),
            u(this, 'roles', void 0),
            u(this, 'member', void 0),
            (this.roles = null != (t = e.roles) ? t : {}),
            e.member && e.member.userId && e.member.roles
                ? (this.member = {
                      roles: e.member.roles,
                      userId: e.member.userId
                  })
                : (this.member = null));
    }
}
