"use strict";
a.d(t, { A: () => I }), a(323874), a(14289), a(35956);
var n = a(735438),
    r = a.n(n),
    i = a(311907),
    s = a(73153),
    l = a(701785),
    o = a(555337);
let d = { enabled: !1 },
    c = null,
    _ = Object.assign({}, d),
    u = !1,
    h = {},
    p = {};
function b(e) {
    try {
        return new URL(e ?? ""), !0;
    } catch (e) {
        return !1;
    }
}
function g() {
    (c = null),
        (_ = Object.assign({}, d)),
        (u = !1),
        (p = {}),
        (c = o.A.getGuildId()),
        (_ = r().cloneDeep(Object.assign({}, l.h.getSettings(c))));
}
function f(e, t) {
    if (null == _.newMemberActions) return !1;
    let a = _.newMemberActions.findIndex((t) => t.channelId === e);
    if (a < 0) return !1;
    (_.newMemberActions[a] = { ...t }), (_.newMemberActions = [..._.newMemberActions]);
}
function m(e, t) {
    if (null == _.resourceChannels) return !1;
    let a = _.resourceChannels.findIndex((t) => t.channelId === e);
    if (a < 0) return !1;
    (_.resourceChannels[a] = { ...t }), (_.resourceChannels = [..._.resourceChannels]);
}
function A() {
    (u = !1), (_ = r().cloneDeep(Object.assign({}, l.h.getSettings(c))));
}
class E extends i.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (h = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(o.A, l.h);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: h };
    }
    getSettings() {
        return _ ?? d;
    }
    hasChanges() {
        return null != c && !r().isEqual(_, l.h.getSettings(c));
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
        return null == e ? [] : (h[e] ?? []);
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let t = _.resourceChannels?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let t = _.newMemberActions?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getPendingData() {
        return p;
    }
    getPendingDataForChannel(e) {
        if (null != e) return p[e];
    }
}
let I = new E(s.h, {
    GUILD_SETTINGS_INIT: g,
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: g,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        _ = r().cloneDeep(Object.assign({}, l.h.getSettings(c)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        u = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: A,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: A,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return f(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        m(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        null == t
            ? (_.welcomeMessage = void 0)
            : (_.welcomeMessage = {
                  authorIds: t.authorIds ?? _.welcomeMessage?.authorIds ?? [],
                  message: t.message ?? _.welcomeMessage?.message ?? "",
              });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: a } = e;
        return f(t, a);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        let { action: t, pendingData: a } = e;
        (_.newMemberActions = _.newMemberActions ?? []),
            (_.newMemberActions = [..._.newMemberActions, t]),
            (p[t.channelId] = { iconData: a.icon, isUrl: b(a.icon), emoji: a.emoji });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t, pendingData: a } = e;
        p[t] = { iconData: a.icon, isUrl: b(a.icon), emoji: a.emoji };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t } = e;
        null == t ? (p = {}) : delete p[t];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == _.newMemberActions) return !1;
        (_.newMemberActions = [..._.newMemberActions.filter((e) => e.channelId !== t)]), delete p[t];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        _.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: a } = e;
        m(t, a);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        let { resourceChannel: t } = e;
        (_.resourceChannels = (_.resourceChannels ?? []).filter((e) => e.channelId !== t.channelId)),
            (_.resourceChannels = [..._.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == _.resourceChannels) return !1;
        _.resourceChannels = [..._.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        _.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        let { guildId: t, channelIds: a } = e;
        h[t] = [...(h[t] ?? []), ...a];
    },
});
