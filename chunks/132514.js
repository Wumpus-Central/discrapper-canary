t.d(n, { A: () => C }), t(323874), t(14289), t(35956);
var s = t(735438),
    r = t.n(s),
    l = t(17928),
    i = t(228366),
    _ = t(701785),
    E = t(555337);
let u = { enabled: !1 },
    c = null,
    I = Object.assign({}, u),
    o = !1,
    S = {},
    N = {};
function a(e) {
    try {
        return new URL(e ?? ""), !0;
    } catch (e) {
        return !1;
    }
}
function T() {
    (c = null),
        (I = Object.assign({}, u)),
        (o = !1),
        (N = {}),
        (c = E.A.getGuildId()),
        (I = r().cloneDeep(Object.assign({}, _.h.getSettings(c))));
}
function A(e, n) {
    if (null == I.newMemberActions) return !1;
    let t = I.newMemberActions.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (I.newMemberActions[t] = { ...n }), (I.newMemberActions = [...I.newMemberActions]);
}
function D(e, n) {
    if (null == I.resourceChannels) return !1;
    let t = I.resourceChannels.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (I.resourceChannels[t] = { ...n }), (I.resourceChannels = [...I.resourceChannels]);
}
function G() {
    (o = !1), (I = r().cloneDeep(Object.assign({}, _.h.getSettings(c))));
}
class O extends l.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (S = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(E.A, _.h);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: S };
    }
    getSettings() {
        return I ?? u;
    }
    hasChanges() {
        return null != c && !r().isEqual(I, _.h.getSettings(c));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return o;
    }
    getDismissedSuggestedChannelIds(e) {
        return null == e ? [] : (S[e] ?? []);
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let n = I.resourceChannels?.find((n) => n.channelId === e);
        return null == n ? null : n;
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let n = I.newMemberActions?.find((n) => n.channelId === e);
        return null == n ? null : n;
    }
    getPendingData() {
        return N;
    }
    getPendingDataForChannel(e) {
        if (null != e) return N[e];
    }
}
let C = new O(i.h, {
    GUILD_SETTINGS_INIT: T,
    GUILD_SETTINGS_SET_SECTION: T,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: T,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        I = r().cloneDeep(Object.assign({}, _.h.getSettings(c)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        o = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: G,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: G,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: n } = e;
        return A(n.channelId, n);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: n } = e;
        D(n.channelId, n);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: n } = e;
        null == n
            ? (I.welcomeMessage = void 0)
            : (I.welcomeMessage = {
                  authorIds: n.authorIds ?? I.welcomeMessage?.authorIds ?? [],
                  message: n.message ?? I.welcomeMessage?.message ?? "",
              });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n, action: t } = e;
        return A(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        let { action: n, pendingData: t } = e;
        (I.newMemberActions = I.newMemberActions ?? []),
            (I.newMemberActions = [...I.newMemberActions, n]),
            (N[n.channelId] = { iconData: t.icon, isUrl: a(t.icon), emoji: t.emoji });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: n, pendingData: t } = e;
        N[n] = { iconData: t.icon, isUrl: a(t.icon), emoji: t.emoji };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: n } = e;
        null == n ? (N = {}) : delete N[n];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n } = e;
        if (null == I.newMemberActions) return !1;
        (I.newMemberActions = [...I.newMemberActions.filter((e) => e.channelId !== n)]), delete N[n];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: n } = e;
        I.newMemberActions = n;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: n, resourceChannel: t } = e;
        D(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        let { resourceChannel: n } = e;
        (I.resourceChannels = (I.resourceChannels ?? []).filter((e) => e.channelId !== n.channelId)),
            (I.resourceChannels = [...I.resourceChannels, n]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: n } = e;
        if (null == I.resourceChannels) return !1;
        I.resourceChannels = [...I.resourceChannels.filter((e) => e.channelId !== n)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: n } = e;
        I.resourceChannels = n;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        let { guildId: n, channelIds: t } = e;
        S[n] = [...(S[n] ?? []), ...t];
    },
});
