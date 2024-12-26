r.d(n, {
    EO: function () {
        return E;
    },
    Qs: function () {
        return p;
    },
    cL: function () {
        return g;
    },
    di: function () {
        return h;
    },
    rk: function () {
        return f;
    },
    sp: function () {
        return _;
    },
    tK: function () {
        return m;
    },
    wD: function () {
        return d;
    }
});
var i = r(47120);
var a = r(512722),
    s = r.n(a),
    o = r(283693),
    l = r(601964),
    u = r(625137),
    c = r(981631);
function d(e, n) {
    var r, i, a, u, d, f, _, h, p, m, g, E, v;
    let I = null != e.joined_at ? new Date(e.joined_at) : null == n ? void 0 : n.joinedAt,
        T = null !== (r = e.premium_subscription_count) && void 0 !== r ? r : 0;
    if (null == e.properties) {
        s()(null != n, 'If guild.properties is null, existingGuild must be passed in');
        let e = n.joinedAt instanceof Date ? n.joinedAt.getTime() : n.joinedAt,
            r = I instanceof Date ? I.getTime() : I;
        return T === n.premiumSubscriberCount && e === r
            ? n
            : n.merge({
                  joinedAt: I,
                  premiumSubscriberCount: T
              });
    }
    let b = {
        id: e.id,
        joinedAt: I,
        premiumSubscriberCount: T,
        name: null !== (i = e.properties.name) && void 0 !== i ? i : '',
        description: e.properties.description,
        icon: e.properties.icon,
        splash: e.properties.splash,
        banner: e.properties.banner,
        homeHeader: e.properties.home_header,
        features: new Set(null !== (a = e.properties.features) && void 0 !== a ? a : []),
        preferredLocale: null !== (u = e.properties.preferred_locale) && void 0 !== u ? u : 'en-us',
        ownerId: e.properties.owner_id,
        application_id: e.properties.application_id,
        afkChannelId: e.properties.afk_channel_id,
        afkTimeout: e.properties.afk_timeout,
        systemChannelId: e.properties.system_channel_id,
        verificationLevel: null !== (d = e.properties.verification_level) && void 0 !== d ? d : c.sFg.NONE,
        explicitContentFilter: null !== (f = e.properties.explicit_content_filter) && void 0 !== f ? f : c.lxg.DISABLED,
        defaultMessageNotifications: null !== (_ = e.properties.default_message_notifications) && void 0 !== _ ? _ : c.bL.ALL_MESSAGES,
        mfaLevel: null !== (h = e.properties.mfa_level) && void 0 !== h ? h : c.BpS.NONE,
        vanityURLCode: e.properties.vanity_url_code,
        premiumTier: null !== (p = e.properties.premium_tier) && void 0 !== p ? p : c.Eu4.NONE,
        premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
        systemChannelFlags: e.properties.system_channel_flags,
        discoverySplash: e.properties.discovery_splash,
        rulesChannelId: e.properties.rules_channel_id,
        safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
        publicUpdatesChannelId: e.properties.public_updates_channel_id,
        maxStageVideoChannelUsers: null !== (m = e.properties.max_stage_video_channel_users) && void 0 !== m ? m : -1,
        maxVideoChannelUsers: null !== (g = e.properties.max_video_channel_users) && void 0 !== g ? g : -1,
        maxMembers: null !== (E = e.properties.max_members) && void 0 !== E ? E : -1,
        nsfwLevel: null !== (v = e.properties.nsfw_level) && void 0 !== v ? v : c.V_K.DEFAULT,
        hubType: e.properties.hub_type,
        latestOnboardingQuestionId: e.properties.latest_onboarding_question_id,
        profile: e.properties.profile
    };
    return null == n ? (0, o.gh)(b, l.ZP) : n.merge(b);
}
function f(e, n) {
    return new l.Bg({
        ...e,
        ...n
    });
}
function _(e, n) {
    var r, i, a, s, o, l, u, d, f, _, h, p, g;
    let E = null !== (r = e.properties) && void 0 !== r ? r : m(n),
        v = {
            id: e.id,
            name: null !== (i = E.name) && void 0 !== i ? i : '',
            description: E.description,
            icon: E.icon,
            splash: E.splash,
            banner: E.banner,
            homeHeader: E.home_header,
            features: new Set(null !== (a = E.features) && void 0 !== a ? a : []),
            preferredLocale: null !== (s = E.preferred_locale) && void 0 !== s ? s : 'en-us',
            ownerId: E.owner_id,
            application_id: E.application_id,
            afkChannelId: E.afk_channel_id,
            afkTimeout: E.afk_timeout,
            systemChannelId: E.system_channel_id,
            verificationLevel: null !== (o = E.verification_level) && void 0 !== o ? o : c.sFg.NONE,
            explicitContentFilter: null !== (l = E.explicit_content_filter) && void 0 !== l ? l : c.lxg.DISABLED,
            defaultMessageNotifications: null !== (u = E.default_message_notifications) && void 0 !== u ? u : c.bL.ALL_MESSAGES,
            mfaLevel: null !== (d = E.mfa_level) && void 0 !== d ? d : c.BpS.NONE,
            vanityURLCode: E.vanity_url_code,
            premiumTier: null !== (f = E.premium_tier) && void 0 !== f ? f : c.Eu4.NONE,
            premiumProgressBarEnabled: E.premium_progress_bar_enabled || !1,
            systemChannelFlags: E.system_channel_flags,
            discoverySplash: E.discovery_splash,
            rulesChannelId: E.rules_channel_id,
            safetyAlertsChannelId: E.safety_alerts_channel_id,
            publicUpdatesChannelId: E.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (_ = E.max_stage_video_channel_users) && void 0 !== _ ? _ : -1,
            maxVideoChannelUsers: null !== (h = E.max_video_channel_users) && void 0 !== h ? h : -1,
            maxMembers: null !== (p = E.max_members) && void 0 !== p ? p : -1,
            nsfwLevel: null !== (g = E.nsfw_level) && void 0 !== g ? g : c.V_K.DEFAULT,
            hubType: E.hub_type,
            latestOnboardingQuestionId: E.latest_onboarding_question_id,
            profile: E.profile
        };
    return n.merge(v);
}
function h(e, n) {
    let r = {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        homeHeader: e.home_header,
        features: e.features,
        preferredLocale: e.preferred_locale,
        ownerId: e.owner_id,
        application_id: e.application_id,
        roles: (0, u.C5)(e.id, e.roles),
        afkChannelId: e.afk_channel_id,
        afkTimeout: e.afk_timeout,
        systemChannelId: e.system_channel_id,
        joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == n ? void 0 : n.joinedAt,
        verificationLevel: e.verification_level,
        explicitContentFilter: e.explicit_content_filter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: e.mfa_level,
        vanityURLCode: e.vanity_url_code,
        premiumTier: e.premium_tier,
        premiumSubscriberCount: e.premium_subscription_count,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: e.discovery_splash,
        rulesChannelId: e.rules_channel_id,
        safetyAlertsChannelId: e.safety_alerts_channel_id,
        publicUpdatesChannelId: e.public_updates_channel_id,
        maxStageVideoChannelUsers: e.max_stage_video_channel_users,
        maxVideoChannelUsers: e.max_video_channel_users,
        maxMembers: e.max_members,
        nsfwLevel: e.nsfw_level,
        hubType: e.hub_type,
        latestOnboardingQuestionId: e.latest_onboarding_question_id,
        profile: e.profile
    };
    return null == n ? new l.ZP(r) : n.merge(r);
}
function p(e) {
    let n = {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        features: e.features,
        verificationLevel: e.verification_level,
        vanityURLCode: e.vanity_url_code,
        premiumSubscriberCount: e.premium_subscription_count,
        nsfwLevel: e.nsfw_level,
        memberCount: e.approximate_member_count
    };
    return new l.ZP(n);
}
function m(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        home_header: e.homeHeader,
        features: Array.from(e.features),
        preferred_locale: e.preferredLocale,
        owner_id: e.ownerId,
        application_id: e.application_id,
        afk_channel_id: e.afkChannelId,
        afk_timeout: e.afkTimeout,
        system_channel_id: e.systemChannelId,
        verification_level: e.verificationLevel,
        explicit_content_filter: e.explicitContentFilter,
        default_message_notifications: e.defaultMessageNotifications,
        mfa_level: e.mfaLevel,
        vanity_url_code: e.vanityURLCode,
        premium_tier: e.premiumTier,
        premium_progress_bar_enabled: e.premiumProgressBarEnabled,
        system_channel_flags: e.systemChannelFlags,
        discovery_splash: e.discoverySplash,
        rules_channel_id: e.rulesChannelId,
        safety_alerts_channel_id: e.safetyAlertsChannelId,
        public_updates_channel_id: e.publicUpdatesChannelId,
        max_stage_video_channel_users: e.maxStageVideoChannelUsers,
        max_video_channel_users: e.maxVideoChannelUsers,
        unavailable: !1,
        max_members: e.maxMembers,
        nsfw_level: e.nsfwLevel,
        hub_type: e.hubType,
        latest_onboarding_question_id: e.latestOnboardingQuestionId,
        profile: e.profile
    };
}
function g(e) {
    var n;
    for (let r in (null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), (e.features = new Set(null !== (n = e.features) && void 0 !== n ? n : [])), e.roles)) (0, u.cf)(e.roles[r]);
    return (0, o.gh)(e, l.ZP);
}
function E(e, n, r, i) {
    let a = (null != i && i.length > 0) || (null != r && r.length > 0);
    if ((a && (n = { ...n }), null != i)) for (let e of i) delete n[e];
    if (null != r && r.length > 0) for (let e of r) n[e.id] = (0, u.CL)(e);
    return a ? (0, u.iw)(e, Object.values(n)) : n;
}
