"use strict";
n.d(t, {
    b9: () => p,
    yN: () => N,
    Yh: () => m,
    zT: () => _,
    Wj: () => E,
    Y1: () => I,
    kI: () => h,
    dangerouslyConstructGuildRecordFromUntypedObject: () => S,
    xi: () => T,
    DY: () => f,
    Me: () => A,
    tJ: () => O,
    fh: () => u,
    yF: () => g,
    $O: () => C,
});
var i = n(284009),
    r = n.n(i),
    a = n(357758),
    s = n(867051);
function l(e) {
    return (
        null == e.raidDetectedAt &&
        null == e.dmSpamDetectedAt &&
        null == e.dmsDisabledUntil &&
        null == e.invitesDisabledUntil &&
        null == e.lockdownDurationHours
    );
}
var o = n(679787),
    d = n(260509),
    c = n(652215);
function u(e) {
    return (0, s.Wj)(d.vI, e);
}
function _(e, t, n) {
    var i, r, c, u;
    return (0, s.e)(d.vI, n, {
        id: e.id,
        joinedAt: t.joinedAt,
        premiumSubscriberCount: t.premiumSubscriberCount,
        name: e.name,
        description: e.description ?? null,
        icon: e.icon ?? null,
        splash: e.splash ?? null,
        banner: e.banner ?? null,
        homeHeader: e.home_header ?? null,
        features: (0, a.y)(e.features),
        preferredLocale: e.preferred_locale ?? d.do.preferredLocale,
        ownerId: e.owner_id,
        application_id: e.application_id ?? null,
        afkChannelId: e.afk_channel_id ?? null,
        afkTimeout: e.afk_timeout ?? d.do.afkTimeout,
        systemChannelId: e.system_channel_id ?? null,
        verificationLevel: e.verification_level ?? d.do.verificationLevel,
        explicitContentFilter: e.explicit_content_filter ?? d.do.explicitContentFilter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: e.mfa_level ?? d.do.mfaLevel,
        vanityURLCode: e.vanity_url_code ?? null,
        premiumTier: e.premium_tier ?? d.do.premiumTier,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled || d.do.premiumProgressBarEnabled,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premium_progress_bar_enabled_user_updated_at
                ? new Date(e.premium_progress_bar_enabled_user_updated_at)
                : null,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: e.discovery_splash ?? null,
        rulesChannelId: e.rules_channel_id ?? null,
        safetyAlertsChannelId: e.safety_alerts_channel_id ?? null,
        publicUpdatesChannelId: e.public_updates_channel_id ?? null,
        maxStageVideoChannelUsers: e.max_stage_video_channel_users ?? d.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.max_video_channel_users ?? d.do.maxVideoChannelUsers,
        maxMembers: e.max_members ?? d.do.maxMembers,
        nsfwLevel: e.nsfw_level ?? d.do.nsfwLevel,
        ownerConfiguredContentLevel: e.owner_configured_content_level ?? null,
        hubType: e.hub_type ?? null,
        latestOnboardingQuestionId: e.latest_onboarding_question_id ?? null,
        profile: e.profile ?? null,
        guildTheme:
            ((i = e.theme),
            (r = n),
            void 0 === i
                ? (r?.guildTheme ?? null)
                : null != i
                  ? ((0, o.UW)(i) ?? { enabled: !1, themeSettings: null })
                  : null),
        premiumFeatures:
            null != e.premium_features
                ? {
                      features: (c = e.premium_features).features,
                      additionalEmojiSlots: c.additional_emoji_slots,
                      additionalStickerSlots: c.additional_sticker_slots,
                      additionalSoundSlots: c.additional_sound_slots,
                  }
                : null,
        moderatorReporting:
            null != e.moderator_reporting
                ? {
                      moderatorReportingEnabled: (u = e.moderator_reporting).moderator_reporting_enabled,
                      moderatorReportChannelId: u.moderator_report_channel_id,
                  }
                : null,
        verificationRoleId: e.verification_role_id ?? null,
        gameApplicationIds: e.game_application_ids ?? null,
        officialMessageColor: e.official_message_color ?? null,
        incidentsData: (function (e) {
            if (null == e || 0 === Object.keys(e).length) return null;
            let t = {
                raidDetectedAt: e.raid_detected_at ?? null,
                dmSpamDetectedAt: e.dm_spam_detected_at ?? null,
                dmsDisabledUntil: e.dms_disabled_until ?? null,
                invitesDisabledUntil: e.invites_disabled_until ?? null,
                lockdownDurationHours: e.lockdown_duration_hours ?? null,
            };
            return l(t) ? null : t;
        })(e.incidents_data),
    });
}
function E(e, t) {
    let n = null != e.joined_at ? new Date(e.joined_at) : (t?.joinedAt ?? null),
        i = e.premium_subscription_count ?? 0;
    return null == e.properties
        ? (r()(null != t, "If guild.properties is null, existingGuild must be passed in"),
          (0, s.h1)(t, { joinedAt: n, premiumSubscriberCount: i }))
        : _(e.properties, { joinedAt: n, premiumSubscriberCount: i }, t);
}
function A(e, t, n) {
    return {
        ...e,
        joinedAt: null != e.joinedAt ? e.joinedAt.toISOString() : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? e.premiumProgressBarEnabledUserUpdatedAt.toISOString()
                : null,
        features: Array.from(e.features),
        roles: t,
        member: null != n ? { userId: n.userId, roles: n.roles } : null,
    };
}
function h(e, t) {
    return null == e.properties
        ? t
        : _(e.properties, { joinedAt: t.joinedAt, premiumSubscriberCount: t.premiumSubscriberCount }, t);
}
function I(e, t) {
    return _(
        e,
        {
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : (t?.joinedAt ?? null),
            premiumSubscriberCount: e.premium_subscription_count,
        },
        t,
    );
}
function f(e) {
    return O({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        features: (0, a.y)(e.features),
        verificationLevel: e.verification_level,
        vanityURLCode: e.vanity_url_code,
        premiumSubscriberCount: e.premium_subscription_count,
        nsfwLevel: e.nsfw_level,
        premiumTier: e.premium_tier,
        homeHeader: e.home_header,
    });
}
function p(e) {
    return O({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        premiumSubscriberCount: e.premiumSubscriberCount ?? d.do.premiumSubscriberCount,
        premiumTier: e.premiumTier ?? d.do.premiumTier,
        features: (0, a.y)(e.features),
    });
}
function T(e) {
    return O({
        id: e.guildId,
        name: e.name ?? "",
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        features: (0, a.y)(e.features),
    });
}
function m(e) {
    return O({
        id: e.id,
        name: e.name,
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        features: (0, a.y)(e.features),
        verificationLevel: e.verification_level ?? d.do.verificationLevel,
    });
}
function g(e) {
    return O({
        id: e.id,
        name: e.name,
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        discoverySplash: e.discovery_splash ?? null,
        features: (0, a.y)(e.features),
    });
}
function S(e) {
    return R({
        id: e.id,
        name: e.name || "",
        description: e.description || null,
        ownerId: e.ownerId || null,
        icon: e.icon || null,
        splash: e.splash || null,
        banner: e.banner || null,
        homeHeader: e.homeHeader || null,
        features: (0, a.y)(e.features),
        preferredLocale: e.preferredLocale || d.do.preferredLocale,
        afkChannelId: e.afkChannelId || null,
        afkTimeout: e.afkTimeout,
        systemChannelId: e.systemChannelId || null,
        verificationLevel: e.verificationLevel || d.do.verificationLevel,
        joinedAt: e.joinedAt instanceof Date ? e.joinedAt : null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt,
        defaultMessageNotifications: e.defaultMessageNotifications || d.do.defaultMessageNotifications,
        mfaLevel: e.mfaLevel || d.do.mfaLevel,
        application_id: e.application_id || null,
        explicitContentFilter: e.explicitContentFilter || d.do.explicitContentFilter,
        vanityURLCode: e.vanityURLCode || null,
        premiumTier: e.premiumTier || d.do.premiumTier,
        premiumSubscriberCount: e.premiumSubscriberCount || d.do.premiumSubscriberCount,
        premiumProgressBarEnabled: e.premiumProgressBarEnabled || d.do.premiumProgressBarEnabled,
        premiumProgressBarEnabledUserUpdatedAt:
            e.premiumProgressBarEnabledUserUpdatedAt instanceof Date
                ? e.premiumProgressBarEnabledUserUpdatedAt
                : null != e.premiumProgressBarEnabledUserUpdatedAt
                  ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                  : null,
        systemChannelFlags: e.systemChannelFlags,
        discoverySplash: e.discoverySplash || null,
        rulesChannelId: e.rulesChannelId || null,
        safetyAlertsChannelId: e.safetyAlertsChannelId || null,
        publicUpdatesChannelId: e.publicUpdatesChannelId || null,
        maxStageVideoChannelUsers: e.maxStageVideoChannelUsers || d.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.maxVideoChannelUsers || d.do.maxVideoChannelUsers,
        maxMembers: e.maxMembers || d.do.maxMembers,
        nsfwLevel: e.nsfwLevel ?? d.do.nsfwLevel,
        ownerConfiguredContentLevel: e.ownerConfiguredContentLevel ?? null,
        hubType: e.hubType,
        latestOnboardingQuestionId: e.latestOnboardingQuestionId ?? null,
        profile: e.profile ?? null,
        guildTheme: e.guildTheme ?? null,
        premiumFeatures: e.premiumFeatures ?? null,
        moderatorReporting: e.moderatorReporting ?? null,
        gameApplicationIds: e.gameApplicationIds ?? null,
        officialMessageColor: e.officialMessageColor ?? null,
        verificationRoleId: e.verificationRoleId ?? null,
        incidentsData: e.incidentsData ?? null,
    });
}
function N(e) {
    var t, n, i, r;
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
        vanity_url_code: e.vanityURLCode ?? null,
        premium_tier: e.premiumTier,
        premium_progress_bar_enabled: e.premiumProgressBarEnabled,
        premium_progress_bar_enabled_user_updated_at: e.premiumProgressBarEnabledUserUpdatedAt?.toISOString() ?? null,
        premium_features:
            null != e.premiumFeatures
                ? {
                      features: (n = e.premiumFeatures).features,
                      additional_emoji_slots: n.additionalEmojiSlots,
                      additional_sticker_slots: n.additionalStickerSlots,
                      additional_sound_slots: n.additionalSoundSlots,
                  }
                : null,
        system_channel_flags: e.systemChannelFlags,
        discovery_splash: e.discoverySplash,
        rules_channel_id: e.rulesChannelId,
        safety_alerts_channel_id: e.safetyAlertsChannelId,
        public_updates_channel_id: e.publicUpdatesChannelId,
        max_stage_video_channel_users: e.maxStageVideoChannelUsers,
        max_video_channel_users: e.maxVideoChannelUsers,
        max_members: e.maxMembers,
        nsfw_level: e.nsfwLevel,
        nsfw: [c.ftr.AGE_RESTRICTED, c.ftr.EXPLICIT].includes(e.nsfwLevel),
        owner_configured_content_level: e.ownerConfiguredContentLevel,
        hub_type: e.hubType,
        latest_onboarding_question_id: e.latestOnboardingQuestionId,
        profile: e.profile,
        theme: null != e.guildTheme ? { enabled: (i = e.guildTheme).enabled, ...(0, o.QK)(i.themeSettings) } : null,
        moderator_reporting:
            null != e.moderatorReporting
                ? {
                      moderator_reporting_enabled: (r = e.moderatorReporting).moderatorReportingEnabled,
                      moderator_report_channel_id: r.moderatorReportChannelId,
                  }
                : null,
        official_message_color: e.officialMessageColor,
        incidents_data:
            null == (t = e.incidentsData) || l(t)
                ? null
                : {
                      raid_detected_at: t.raidDetectedAt ?? null,
                      dm_spam_detected_at: t.dmSpamDetectedAt ?? null,
                      dms_disabled_until: t.dmsDisabledUntil ?? null,
                      invites_disabled_until: t.invitesDisabledUntil ?? null,
                      lockdown_duration_hours: t.lockdownDurationHours ?? null,
                  },
        game_application_ids: e.gameApplicationIds,
        verification_role_id: e.verificationRoleId,
    };
}
function C(e) {
    let t = {
        ...d.do,
        ...e,
        features: (0, a.y)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                : null,
    };
    return delete t.roles, delete t.member, R(t);
}
function O(e) {
    return R({ ...d.do, ...e });
}
function R(e) {
    return (0, s.yE)(d.vI, e);
}
