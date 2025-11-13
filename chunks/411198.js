n.d(t, {
    $5: () => y,
    B3: () => O,
    Ee: () => p,
    Qs: () => b,
    R: () => E,
    Rj: () => I,
    cL: () => C,
    dS: () => A,
    dangerouslyConstructGuildRecordFromUntypedObject: () => S,
    e: () => v,
    lM: () => _,
    rk: () => m,
    sp: () => g,
    wD: () => h,
    yS: () => T,
    z$: () => N,
}),
    n(953529);
var r = n(512722),
    i = n.n(r),
    a = n(843991),
    o = n(311929),
    s = n(601964),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    return (0, o.Wh)(s.VI, e);
}
function p(e, t, n) {
    var r, i, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, C, N, R, D, x, L;
    return (0, o.oI)(s.VI, n, {
        id: e.id,
        joinedAt: t.joinedAt,
        premiumSubscriberCount: t.premiumSubscriberCount,
        name: e.name,
        description: null != (r = e.description) ? r : null,
        icon: null != (i = e.icon) ? i : null,
        splash: null != (l = e.splash) ? l : null,
        banner: null != (c = e.banner) ? c : null,
        homeHeader: null != (u = e.home_header) ? u : null,
        features: (0, a.G)(e.features),
        preferredLocale: null != (d = e.preferred_locale) ? d : s.Cx.preferredLocale,
        ownerId: e.owner_id,
        application_id: null != (f = e.application_id) ? f : null,
        afkChannelId: null != (_ = e.afk_channel_id) ? _ : null,
        afkTimeout: null != (p = e.afk_timeout) ? p : s.Cx.afkTimeout,
        systemChannelId: null != (h = e.system_channel_id) ? h : null,
        verificationLevel: null != (m = e.verification_level) ? m : s.Cx.verificationLevel,
        explicitContentFilter: null != (g = e.explicit_content_filter) ? g : s.Cx.explicitContentFilter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: null != (E = e.mfa_level) ? E : s.Cx.mfaLevel,
        vanityURLCode: null != (b = e.vanity_url_code) ? b : null,
        premiumTier: null != (y = e.premium_tier) ? y : s.Cx.premiumTier,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled || s.Cx.premiumProgressBarEnabled,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: null != (O = e.discovery_splash) ? O : null,
        rulesChannelId: null != (v = e.rules_channel_id) ? v : null,
        safetyAlertsChannelId: null != (I = e.safety_alerts_channel_id) ? I : null,
        publicUpdatesChannelId: null != (T = e.public_updates_channel_id) ? T : null,
        maxStageVideoChannelUsers: null != (S = e.max_stage_video_channel_users) ? S : s.Cx.maxStageVideoChannelUsers,
        maxVideoChannelUsers: null != (A = e.max_video_channel_users) ? A : s.Cx.maxVideoChannelUsers,
        maxMembers: null != (C = e.max_members) ? C : s.Cx.maxMembers,
        nsfwLevel: null != (N = e.nsfw_level) ? N : s.Cx.nsfwLevel,
        ownerConfiguredContentLevel: null != (R = e.owner_configured_content_level) ? R : null,
        hubType: null != (D = e.hub_type) ? D : null,
        latestOnboardingQuestionId: null != (x = e.latest_onboarding_question_id) ? x : null,
        profile: null != (L = e.profile) ? L : null,
        premiumFeatures: null != e.premium_features ? P(e.premium_features) : null,
        moderatorReporting: null != e.moderator_reporting ? w(e.moderator_reporting) : null,
    });
}
function h(e, t) {
    var n, r;
    let a = null != e.joined_at ? new Date(e.joined_at) : null != (n = null == t ? void 0 : t.joinedAt) ? n : null,
        s = null != (r = e.premium_subscription_count) ? r : 0;
    return null == e.properties
        ? (i()(null != t, "If guild.properties is null, existingGuild must be passed in"),
          (0, o.TS)(t, {
              joinedAt: a,
              premiumSubscriberCount: s,
          }))
        : p(
              e.properties,
              {
                  joinedAt: a,
                  premiumSubscriberCount: s,
              },
              t,
          );
}
function m(e, t, n) {
    return f(u({}, e), {
        joinedAt: null != e.joinedAt ? e.joinedAt.toISOString() : null,
        features: Array.from(e.features),
        roles: t,
        member:
            null != n
                ? {
                      userId: n.userId,
                      roles: n.roles,
                  }
                : null,
    });
}
function g(e, t) {
    return null == e.properties
        ? t
        : p(
              e.properties,
              {
                  joinedAt: t.joinedAt,
                  premiumSubscriberCount: t.premiumSubscriberCount,
              },
              t,
          );
}
function E(e, t) {
    var n;
    return p(
        e,
        {
            joinedAt:
                null != e.joined_at ? new Date(e.joined_at) : null != (n = null == t ? void 0 : t.joinedAt) ? n : null,
            premiumSubscriberCount: e.premium_subscription_count,
        },
        t,
    );
}
function b(e) {
    return N({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        features: (0, a.G)(e.features),
        verificationLevel: e.verification_level,
        vanityURLCode: e.vanity_url_code,
        premiumSubscriberCount: e.premium_subscription_count,
        nsfwLevel: e.nsfw_level,
        premiumTier: e.premium_tier,
        homeHeader: e.home_header,
    });
}
function y(e) {
    var t, n;
    return N({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        premiumSubscriberCount: null != (t = e.premiumSubscriberCount) ? t : s.Cx.premiumSubscriberCount,
        premiumTier: null != (n = e.premiumTier) ? n : s.Cx.premiumTier,
        features: (0, a.G)(e.features),
    });
}
function O(e) {
    var t;
    return N({
        id: e.id,
        name: e.name,
        icon: null != (t = e.icon) ? t : null,
    });
}
function v(e) {
    var t, n, r, i;
    return N({
        id: e.guildId,
        name: null != (t = e.name) ? t : "",
        icon: null != (n = e.icon) ? n : null,
        description: null != (r = e.description) ? r : null,
        splash: null != (i = e.splash) ? i : null,
        features: (0, a.G)(e.features),
    });
}
function I(e) {
    var t, n, r, i;
    return N({
        id: e.id,
        name: e.name,
        icon: null != (t = e.icon) ? t : null,
        description: null != (n = e.description) ? n : null,
        splash: null != (r = e.splash) ? r : null,
        features: (0, a.G)(e.features),
        verificationLevel: null != (i = e.verification_level) ? i : s.Cx.verificationLevel,
    });
}
function T(e) {
    var t, n, r, i;
    return N({
        id: e.id,
        name: e.name,
        icon: null != (t = e.icon) ? t : null,
        description: null != (n = e.description) ? n : null,
        splash: null != (r = e.splash) ? r : null,
        discoverySplash: null != (i = e.discovery_splash) ? i : null,
        features: (0, a.G)(e.features),
    });
}
function S(e) {
    var t, n, r, i, o, l;
    return R({
        id: e.id,
        name: e.name || "",
        description: e.description || null,
        ownerId: e.ownerId || null,
        icon: e.icon || null,
        splash: e.splash || null,
        banner: e.banner || null,
        homeHeader: e.homeHeader || null,
        features: (0, a.G)(e.features),
        preferredLocale: e.preferredLocale || s.Cx.preferredLocale,
        afkChannelId: e.afkChannelId || null,
        afkTimeout: e.afkTimeout,
        systemChannelId: e.systemChannelId || null,
        verificationLevel: e.verificationLevel || s.Cx.verificationLevel,
        joinedAt: e.joinedAt instanceof Date ? e.joinedAt : null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt,
        defaultMessageNotifications: e.defaultMessageNotifications || s.Cx.defaultMessageNotifications,
        mfaLevel: e.mfaLevel || s.Cx.mfaLevel,
        application_id: e.application_id || null,
        explicitContentFilter: e.explicitContentFilter || s.Cx.explicitContentFilter,
        vanityURLCode: e.vanityURLCode || null,
        premiumTier: e.premiumTier || s.Cx.premiumTier,
        premiumSubscriberCount: e.premiumSubscriberCount || s.Cx.premiumSubscriberCount,
        premiumProgressBarEnabled: e.premiumProgressBarEnabled || s.Cx.premiumProgressBarEnabled,
        systemChannelFlags: e.systemChannelFlags,
        discoverySplash: e.discoverySplash || null,
        rulesChannelId: e.rulesChannelId || null,
        safetyAlertsChannelId: e.safetyAlertsChannelId || null,
        publicUpdatesChannelId: e.publicUpdatesChannelId || null,
        maxStageVideoChannelUsers: e.maxStageVideoChannelUsers || s.Cx.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.maxVideoChannelUsers || s.Cx.maxVideoChannelUsers,
        maxMembers: e.maxMembers || s.Cx.maxMembers,
        nsfwLevel: null != (t = e.nsfwLevel) ? t : s.Cx.nsfwLevel,
        ownerConfiguredContentLevel: null != (n = e.ownerConfiguredContentLevel) ? n : null,
        hubType: e.hubType,
        latestOnboardingQuestionId: null != (r = e.latestOnboardingQuestionId) ? r : null,
        profile: null != (i = e.profile) ? i : null,
        premiumFeatures: null != (o = e.premiumFeatures) ? o : null,
        moderatorReporting: null != (l = e.moderatorReporting) ? l : null,
    });
}
function A(e) {
    var t;
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
        vanity_url_code: null != (t = e.vanityURLCode) ? t : null,
        premium_tier: e.premiumTier,
        premium_progress_bar_enabled: e.premiumProgressBarEnabled,
        premium_features: null != e.premiumFeatures ? D(e.premiumFeatures) : null,
        system_channel_flags: e.systemChannelFlags,
        discovery_splash: e.discoverySplash,
        rules_channel_id: e.rulesChannelId,
        safety_alerts_channel_id: e.safetyAlertsChannelId,
        public_updates_channel_id: e.publicUpdatesChannelId,
        max_stage_video_channel_users: e.maxStageVideoChannelUsers,
        max_video_channel_users: e.maxVideoChannelUsers,
        max_members: e.maxMembers,
        nsfw_level: e.nsfwLevel,
        nsfw: [l.V_K.AGE_RESTRICTED, l.V_K.EXPLICIT].includes(e.nsfwLevel),
        owner_configured_content_level: e.ownerConfiguredContentLevel,
        hub_type: e.hubType,
        latest_onboarding_question_id: e.latestOnboardingQuestionId,
        profile: e.profile,
        moderator_reporting: null != e.moderatorReporting ? x(e.moderatorReporting) : null,
        incidents_data: null,
    };
}
function C(e) {
    let t = f(u({}, e), {
        features: (0, a.G)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
    });
    return delete t.roles, delete t.member, R(t);
}
function N(e) {
    return R(u({}, s.Cx, e));
}
function R(e) {
    return (0, o.bk)(s.VI, e);
}
function P(e) {
    return {
        features: e.features,
        additionalEmojiSlots: e.additional_emoji_slots,
        additionalStickerSlots: e.additional_sticker_slots,
        additionalSoundSlots: e.additional_sound_slots,
    };
}
function D(e) {
    return {
        features: e.features,
        additional_emoji_slots: e.additionalEmojiSlots,
        additional_sticker_slots: e.additionalStickerSlots,
        additional_sound_slots: e.additionalSoundSlots,
    };
}
function w(e) {
    return {
        moderatorReportingEnabled: e.moderator_reporting_enabled,
        moderatorReportChannelId: e.moderator_report_channel_id,
    };
}
function x(e) {
    return {
        moderator_reporting_enabled: e.moderatorReportingEnabled,
        moderator_report_channel_id: e.moderatorReportChannelId,
    };
}
