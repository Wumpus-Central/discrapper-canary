"use strict";
n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(228366),
    l = n(701785),
    o = n(555337);
let c = { enabled: !1 },
    d = null,
    u = Object.assign({}, c),
    _ = !1,
    h = {},
    f = {};
function g(e) {
    try {
        return new URL(e ?? ""), !0;
    } catch (e) {
        return !1;
    }
}
function m() {
    (d = null),
        (u = Object.assign({}, c)),
        (_ = !1),
        (f = {}),
        (d = o.A.getGuildId()),
        (u = a().cloneDeep(Object.assign({}, l.h.getSettings(d))));
}
function p(e, t) {
    if (null == u.newMemberActions) return !1;
    let n = u.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (u.newMemberActions[n] = { ...t }), (u.newMemberActions = [...u.newMemberActions]);
}
function E(e, t) {
    if (null == u.resourceChannels) return !1;
    let n = u.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (u.resourceChannels[n] = { ...t }), (u.resourceChannels = [...u.resourceChannels]);
}
function A() {
    (_ = !1), (u = a().cloneDeep(Object.assign({}, l.h.getSettings(d))));
}
class S extends r.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (h = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(o.A, l.h);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: h };
    }
    getSettings() {
        return u ?? c;
    }
    hasChanges() {
        return null != d && !a().isEqual(u, l.h.getSettings(d));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return _;
    }
    getDismissedSuggestedChannelIds(e) {
        return null == e ? [] : (h[e] ?? []);
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let t = u.resourceChannels?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let t = u.newMemberActions?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getPendingData() {
        return f;
    }
    getPendingDataForChannel(e) {
        if (null != e) return f[e];
    }
}
let I = new S(s.h, {
    GUILD_SETTINGS_INIT: m,
    GUILD_SETTINGS_SET_SECTION: m,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: m,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        u = a().cloneDeep(Object.assign({}, l.h.getSettings(d)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        _ = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: A,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: A,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return p(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        E(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        null == t
            ? (u.welcomeMessage = void 0)
            : (u.welcomeMessage = {
                  authorIds: t.authorIds ?? u.welcomeMessage?.authorIds ?? [],
                  message: t.message ?? u.welcomeMessage?.message ?? "",
              });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: n } = e;
        return p(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        let { action: t, pendingData: n } = e;
        (u.newMemberActions = u.newMemberActions ?? []),
            (u.newMemberActions = [...u.newMemberActions, t]),
            (f[t.channelId] = { iconData: n.icon, isUrl: g(n.icon), emoji: n.emoji });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t, pendingData: n } = e;
        f[t] = { iconData: n.icon, isUrl: g(n.icon), emoji: n.emoji };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t } = e;
        null == t ? (f = {}) : delete f[t];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == u.newMemberActions) return !1;
        (u.newMemberActions = [...u.newMemberActions.filter((e) => e.channelId !== t)]), delete f[t];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        u.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: n } = e;
        E(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        let { resourceChannel: t } = e;
        (u.resourceChannels = (u.resourceChannels ?? []).filter((e) => e.channelId !== t.channelId)),
            (u.resourceChannels = [...u.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == u.resourceChannels) return !1;
        u.resourceChannels = [...u.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        u.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        let { guildId: t, channelIds: n } = e;
        h[t] = [...(h[t] ?? []), ...n];
    },
});
