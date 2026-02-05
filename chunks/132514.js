"use strict";
n.d(t, { A: () => S }), n(323874), n(14289), n(35956);
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    s = n(73153),
    o = n(701785),
    l = n(555337);
let c = { enabled: !1 },
    _ = null,
    d = Object.assign({}, c),
    u = !1,
    b = {},
    m = {};
function h(e) {
    try {
        return new URL(e ?? ""), !0;
    } catch (e) {
        return !1;
    }
}
function E() {
    (_ = null),
        (d = Object.assign({}, c)),
        (u = !1),
        (m = {}),
        (_ = l.A.getGuildId()),
        (d = r().cloneDeep(Object.assign({}, o.h.getSettings(_))));
}
function g(e, t) {
    if (null == d.newMemberActions) return !1;
    let n = d.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (d.newMemberActions[n] = { ...t }), (d.newMemberActions = [...d.newMemberActions]);
}
function f(e, t) {
    if (null == d.resourceChannels) return !1;
    let n = d.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (d.resourceChannels[n] = { ...t }), (d.resourceChannels = [...d.resourceChannels]);
}
function I() {
    (u = !1), (d = r().cloneDeep(Object.assign({}, o.h.getSettings(_))));
}
class A extends a.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (b = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(l.A, o.h);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: b };
    }
    getSettings() {
        return d ?? c;
    }
    hasChanges() {
        return null != _ && !r().isEqual(d, o.h.getSettings(_));
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
        return null == e ? [] : (b[e] ?? []);
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let t = d.resourceChannels?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let t = d.newMemberActions?.find((t) => t.channelId === e);
        return null == t ? null : t;
    }
    getPendingData() {
        return m;
    }
    getPendingDataForChannel(e) {
        if (null != e) return m[e];
    }
}
let S = new A(s.h, {
    GUILD_SETTINGS_INIT: E,
    GUILD_SETTINGS_SET_SECTION: E,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: E,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        d = r().cloneDeep(Object.assign({}, o.h.getSettings(_)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        u = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: I,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: I,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return g(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        f(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        null == t
            ? (d.welcomeMessage = void 0)
            : (d.welcomeMessage = {
                  authorIds: t.authorIds ?? d.welcomeMessage?.authorIds ?? [],
                  message: t.message ?? d.welcomeMessage?.message ?? "",
              });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: n } = e;
        return g(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        let { action: t, pendingData: n } = e;
        (d.newMemberActions = d.newMemberActions ?? []),
            (d.newMemberActions = [...d.newMemberActions, t]),
            (m[t.channelId] = { iconData: n.icon, isUrl: h(n.icon), emoji: n.emoji });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t, pendingData: n } = e;
        m[t] = { iconData: n.icon, isUrl: h(n.icon), emoji: n.emoji };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t } = e;
        null == t ? (m = {}) : delete m[t];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == d.newMemberActions) return !1;
        (d.newMemberActions = [...d.newMemberActions.filter((e) => e.channelId !== t)]), delete m[t];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        d.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: n } = e;
        f(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        let { resourceChannel: t } = e;
        (d.resourceChannels = (d.resourceChannels ?? []).filter((e) => e.channelId !== t.channelId)),
            (d.resourceChannels = [...d.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == d.resourceChannels) return !1;
        d.resourceChannels = [...d.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        d.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        let { guildId: t, channelIds: n } = e;
        b[t] = [...(b[t] ?? []), ...n];
    },
});
