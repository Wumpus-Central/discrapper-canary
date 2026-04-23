n.d(t, { A: () => N }), n(323874), n(14289), n(35956);
var o = n(735438),
    l = n.n(o),
    i = n(311907),
    r = n(73153),
    a = n(701785),
    s = n(555337);
let _ = { enabled: !1 },
    d = null,
    c = Object.assign({}, _),
    u = !1,
    I = {},
    S = {};
function b(e) {
    try {
        return new URL(e ?? ""), !0;
    } catch (e) {
        return !1;
    }
}
function m() {
    (d = null),
        (c = Object.assign({}, _)),
        (u = !1),
        (S = {}),
        (d = s.A.getGuildId()),
        (c = l().cloneDeep(Object.assign({}, a.h.getSettings(d))));
}
function E(e, t) {
    if (null == c.newMemberActions) return !1;
    let n = c.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (c.newMemberActions[n] = { ...t }), (c.newMemberActions = [...c.newMemberActions]);
}
function g(e, t) {
    if (null == c.resourceChannels) return !1;
    let n = c.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (c.resourceChannels[n] = { ...t }), (c.resourceChannels = [...c.resourceChannels]);
}
function f() {
    (u = !1), (c = l().cloneDeep(Object.assign({}, a.h.getSettings(d))));
}
class h extends i.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (I = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(s.A, a.h);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: I };
    }
    getSettings() {
        return c ?? _;
    }
    hasChanges() {
        return null != d && !l().isEqual(c, a.h.getSettings(d));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return u;
    }
    getDismissedSuggestedChannelIds(e) {
        return null == e ? [] : (I[e] ?? []);
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let t = c.resourceChannels?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let t = c.newMemberActions?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getPendingData() {
        return S;
    }
    getPendingDataForChannel(e) {
        if (null != e) return S[e];
    }
}
let N = new h(r.h, {
    GUILD_SETTINGS_INIT: m,
    GUILD_SETTINGS_SET_SECTION: m,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: m,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        c = l().cloneDeep(Object.assign({}, a.h.getSettings(d)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        u = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: f,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: f,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return E(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        g(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        null == t
            ? (c.welcomeMessage = void 0)
            : (c.welcomeMessage = {
                  authorIds: t.authorIds ?? c.welcomeMessage?.authorIds ?? [],
                  message: t.message ?? c.welcomeMessage?.message ?? "",
              });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: n } = e;
        return E(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        let { action: t, pendingData: n } = e;
        (c.newMemberActions = c.newMemberActions ?? []),
            (c.newMemberActions = [...c.newMemberActions, t]),
            (S[t.channelId] = { iconData: n.icon, isUrl: b(n.icon), emoji: n.emoji });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t, pendingData: n } = e;
        S[t] = { iconData: n.icon, isUrl: b(n.icon), emoji: n.emoji };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t } = e;
        null == t ? (S = {}) : delete S[t];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == c.newMemberActions) return !1;
        (c.newMemberActions = [...c.newMemberActions.filter((e) => e.channelId !== t)]), delete S[t];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        c.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: n } = e;
        g(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        let { resourceChannel: t } = e;
        (c.resourceChannels = (c.resourceChannels ?? []).filter((e) => e.channelId !== t.channelId)),
            (c.resourceChannels = [...c.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == c.resourceChannels) return !1;
        c.resourceChannels = [...c.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        c.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        let { guildId: t, channelIds: n } = e;
        I[t] = [...(I[t] ?? []), ...n];
    },
});
