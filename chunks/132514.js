n.d(t, {
    A: () => h,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var l,
    i = n(735438),
    r = n.n(i),
    u = n(311907),
    a = n(73153),
    s = n(701785),
    c = n(555337);

function o(e, t, n) {
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

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let _ = {
        enabled: !1,
    },
    S = null,
    f = Object.assign({}, _),
    E = !1,
    g = {},
    A = {};

function b(e) {
    try {
        return new URL(null != e ? e : ""), !0;
    } catch (e) {
        return !1;
    }
}

function N() {
    (S = null),
        (f = Object.assign({}, _)),
        (E = !1),
        (A = {}),
        (S = c.A.getGuildId()),
        (f = r().cloneDeep(Object.assign({}, s.h.getSettings(S))));
}

function I(e, t) {
    if (null == f.newMemberActions) return !1;
    let n = f.newMemberActions.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (f.newMemberActions[n] = d({}, t)), (f.newMemberActions = [...f.newMemberActions]);
}

function O(e, t) {
    if (null == f.resourceChannels) return !1;
    let n = f.resourceChannels.findIndex((t) => t.channelId === e);
    if (n < 0) return !1;
    (f.resourceChannels[n] = d({}, t)), (f.resourceChannels = [...f.resourceChannels]);
}

function T() {
    (E = !1), (f = r().cloneDeep(Object.assign({}, s.h.getSettings(S))));
}
class m extends (l = u.Ay.PersistedStore) {
    initialize(e) {
        null != e && (g = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.A, s.h);
    }
    getState() {
        return {
            dismissedSuggestedChannelIdsByGuildId: g,
        };
    }
    getSettings() {
        return null != f ? f : _;
    }
    hasChanges() {
        return null != S && !r().isEqual(f, s.h.getSettings(S));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return E;
    }
    getDismissedSuggestedChannelIds(e) {
        var t;
        return null == e ? [] : null != (t = g[e]) ? t : [];
    }
    getResourceChannel(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = f.resourceChannels) ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
    getNewMemberAction(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = f.newMemberActions) ? void 0 : t.find((t) => t.channelId === e);
        return null == n ? null : n;
    }
    getPendingData() {
        return A;
    }
    getPendingDataForChannel(e) {
        if (null != e) return A[e];
    }
}
o(m, "displayName", "GuildSettingsOnboardingHomeSettingsStore"),
    o(m, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let h = new m(a.h, {
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: N,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        f = r().cloneDeep(Object.assign({}, s.h.getSettings(S)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        E = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: T,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: T,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: t } = e;
        return I(t.channelId, t);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: t } = e;
        O(t.channelId, t);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: t } = e;
        if (null == t) f.welcomeMessage = void 0;
        else {
            var n, l, i, r, u, a;
            f.welcomeMessage = {
                authorIds:
                    null != (n = null != (l = t.authorIds) ? l : null == (u = f.welcomeMessage) ? void 0 : u.authorIds)
                        ? n
                        : [],
                message:
                    null != (i = null != (r = t.message) ? r : null == (a = f.welcomeMessage) ? void 0 : a.message)
                        ? i
                        : "",
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t, action: n } = e;
        return I(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        var t;
        let { action: n, pendingData: l } = e;
        (f.newMemberActions = null != (t = f.newMemberActions) ? t : []),
            (f.newMemberActions = [...f.newMemberActions, n]),
            (A[n.channelId] = {
                iconData: l.icon,
                isUrl: b(l.icon),
                emoji: l.emoji,
            });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t, pendingData: n } = e;
        A[t] = {
            iconData: n.icon,
            isUrl: b(n.icon),
            emoji: n.emoji,
        };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: t } = e;
        null == t ? (A = {}) : delete A[t];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: t } = e;
        if (null == f.newMemberActions) return !1;
        (f.newMemberActions = [...f.newMemberActions.filter((e) => e.channelId !== t)]), delete A[t];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: t } = e;
        f.newMemberActions = t;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: t, resourceChannel: n } = e;
        O(t, n);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var t;
        let { resourceChannel: n } = e;
        (f.resourceChannels = (null != (t = f.resourceChannels) ? t : []).filter((e) => e.channelId !== n.channelId)),
            (f.resourceChannels = [...f.resourceChannels, n]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: t } = e;
        if (null == f.resourceChannels) return !1;
        f.resourceChannels = [...f.resourceChannels.filter((e) => e.channelId !== t)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: t } = e;
        f.resourceChannels = t;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var t;
        let { guildId: n, channelIds: l } = e;
        g[n] = [...(null != (t = g[n]) ? t : []), ...l];
    },
});
