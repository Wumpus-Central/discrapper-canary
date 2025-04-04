n.d(t, {
    EO: () => b,
    Qs: () => m,
    cL: () => E,
    di: () => p,
    rk: () => f,
    sp: () => _,
    tK: () => g,
    wD: () => d
}),
    n(266796),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(283693),
    a = n(601964),
    s = n(625137),
    l = n(981631);
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n, r, s, c, u, d, f, _, p, m, g, E, b;
    let y = null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
        v = null != (n = e.premium_subscription_count) ? n : 0;
    if (null == e.properties) {
        i()(null != t, 'If guild.properties is null, existingGuild must be passed in');
        let e = t.joinedAt instanceof Date ? t.joinedAt.getTime() : t.joinedAt,
            n = y instanceof Date ? y.getTime() : y;
        return v === t.premiumSubscriberCount && e === n
            ? t
            : t.merge({
                  joinedAt: y,
                  premiumSubscriberCount: v
              });
    }
    let O = {
        id: e.id,
        joinedAt: y,
        premiumSubscriberCount: v,
        name: null != (r = e.properties.name) ? r : '',
        description: e.properties.description,
        icon: e.properties.icon,
        splash: e.properties.splash,
        banner: e.properties.banner,
        homeHeader: e.properties.home_header,
        features: new Set(null != (s = e.properties.features) ? s : []),
        preferredLocale: null != (c = e.properties.preferred_locale) ? c : 'en-us',
        ownerId: e.properties.owner_id,
        application_id: e.properties.application_id,
        afkChannelId: e.properties.afk_channel_id,
        afkTimeout: e.properties.afk_timeout,
        systemChannelId: e.properties.system_channel_id,
        verificationLevel: null != (u = e.properties.verification_level) ? u : l.sFg.NONE,
        explicitContentFilter: null != (d = e.properties.explicit_content_filter) ? d : l.lxg.DISABLED,
        defaultMessageNotifications: null != (f = e.properties.default_message_notifications) ? f : l.bL.ALL_MESSAGES,
        mfaLevel: null != (_ = e.properties.mfa_level) ? _ : l.BpS.NONE,
        vanityURLCode: e.properties.vanity_url_code,
        premiumTier: null != (p = e.properties.premium_tier) ? p : l.Eu4.NONE,
        premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
        systemChannelFlags: e.properties.system_channel_flags,
        discoverySplash: e.properties.discovery_splash,
        rulesChannelId: e.properties.rules_channel_id,
        safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
        publicUpdatesChannelId: e.properties.public_updates_channel_id,
        maxStageVideoChannelUsers: null != (m = e.properties.max_stage_video_channel_users) ? m : -1,
        maxVideoChannelUsers: null != (g = e.properties.max_video_channel_users) ? g : -1,
        maxMembers: null != (E = e.properties.max_members) ? E : -1,
        nsfwLevel: null != (b = e.properties.nsfw_level) ? b : l.V_K.DEFAULT,
        hubType: e.properties.hub_type,
        latestOnboardingQuestionId: e.properties.latest_onboarding_question_id,
        profile: e.properties.profile,
        premiumFeatures: null != e.properties.premium_features ? h(e.properties.premium_features) : null
    };
    return null == t ? (0, o.gh)(O, a.ZP) : t.merge(O);
}
function f(e, t) {
    return new a.Bg(u({}, e, t));
}
function _(e, t) {
    var n, r, i, o, a, s, c, u, d, f, _, p, h;
    let m = null != (n = e.properties) ? n : g(t),
        E = {
            id: e.id,
            name: null != (r = m.name) ? r : '',
            description: m.description,
            icon: m.icon,
            splash: m.splash,
            banner: m.banner,
            homeHeader: m.home_header,
            features: new Set(null != (i = m.features) ? i : []),
            preferredLocale: null != (o = m.preferred_locale) ? o : 'en-us',
            ownerId: m.owner_id,
            application_id: m.application_id,
            afkChannelId: m.afk_channel_id,
            afkTimeout: m.afk_timeout,
            systemChannelId: m.system_channel_id,
            verificationLevel: null != (a = m.verification_level) ? a : l.sFg.NONE,
            explicitContentFilter: null != (s = m.explicit_content_filter) ? s : l.lxg.DISABLED,
            defaultMessageNotifications: null != (c = m.default_message_notifications) ? c : l.bL.ALL_MESSAGES,
            mfaLevel: null != (u = m.mfa_level) ? u : l.BpS.NONE,
            vanityURLCode: m.vanity_url_code,
            premiumTier: null != (d = m.premium_tier) ? d : l.Eu4.NONE,
            premiumProgressBarEnabled: m.premium_progress_bar_enabled || !1,
            systemChannelFlags: m.system_channel_flags,
            discoverySplash: m.discovery_splash,
            rulesChannelId: m.rules_channel_id,
            safetyAlertsChannelId: m.safety_alerts_channel_id,
            publicUpdatesChannelId: m.public_updates_channel_id,
            maxStageVideoChannelUsers: null != (f = m.max_stage_video_channel_users) ? f : -1,
            maxVideoChannelUsers: null != (_ = m.max_video_channel_users) ? _ : -1,
            maxMembers: null != (p = m.max_members) ? p : -1,
            nsfwLevel: null != (h = m.nsfw_level) ? h : l.V_K.DEFAULT,
            hubType: m.hub_type,
            latestOnboardingQuestionId: m.latest_onboarding_question_id,
            profile: m.profile
        };
    return t.merge(E);
}
function p(e, t) {
    let n = {
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
        roles: (0, s.C5)(e.id, e.roles),
        afkChannelId: e.afk_channel_id,
        afkTimeout: e.afk_timeout,
        systemChannelId: e.system_channel_id,
        joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
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
        profile: e.profile,
        premiumFeatures: null != e.premium_features ? h(e.premium_features) : null
    };
    return null == t ? new a.ZP(n) : t.merge(n);
}
function h(e) {
    return {
        features: e.features,
        additionalEmojiSlots: e.additional_emoji_slots,
        additionalStickerSlots: e.additional_sticker_slots,
        additionalSoundSlots: e.additional_sound_slots
    };
}
function m(e) {
    let t = {
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
        memberCount: e.approximate_member_count,
        premiumTier: e.premium_tier
    };
    return new a.ZP(t);
}
function g(e) {
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
function E(e) {
    var t;
    for (let n in (null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), (e.features = new Set(null != (t = e.features) ? t : [])), e.roles)) (0, s.cf)(e.roles[n]);
    return (0, o.gh)(e, a.ZP);
}
function b(e, t, n, r) {
    let i = (null != r && r.length > 0) || (null != n && n.length > 0);
    if ((i && (t = u({}, t)), null != r)) for (let e of r) delete t[e];
    if (null != n && n.length > 0) for (let e of n) t[e.id] = (0, s.CL)(e);
    return i ? (0, s.iw)(e, Object.values(t)) : t;
}
