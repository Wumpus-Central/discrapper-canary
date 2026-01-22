t.d(n, { A: () => b }), t(896048), t(693327), t(554719), t(680155), t(323874), t(14289), t(35956);
var r,
    l = t(735438),
    i = t.n(l),
    o = t(311907),
    _ = t(73153),
    c = t(701785),
    s = t(555337);
function E(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
function a(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                E(e, n, t[n]);
            });
    }
    return e;
}
let u = { enabled: !1 },
    I = null,
    N = Object.assign({}, u),
    S = !1,
    d = {},
    O = {};
function T(e) {
    try {
        return new URL(null != e ? e : ""), !0;
    } catch (e) {
        return !1;
    }
}
function h() {
    (I = null),
        (N = Object.assign({}, u)),
        (S = !1),
        (O = {}),
        (I = s.A.getGuildId()),
        (N = i().cloneDeep(Object.assign({}, c.h.getSettings(I))));
}
function D(e, n) {
    if (null == N.newMemberActions) return !1;
    let t = N.newMemberActions.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (N.newMemberActions[t] = a({}, n)), (N.newMemberActions = [...N.newMemberActions]);
}
function G(e, n) {
    if (null == N.resourceChannels) return !1;
    let t = N.resourceChannels.findIndex((n) => n.channelId === e);
    if (t < 0) return !1;
    (N.resourceChannels[t] = a({}, n)), (N.resourceChannels = [...N.resourceChannels]);
}
function A() {
    (S = !1), (N = i().cloneDeep(Object.assign({}, c.h.getSettings(I))));
}
class f extends (r = o.Ay.PersistedStore) {
    initialize(e) {
        null != e && (d = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(s.A, c.h);
    }
    getState() {
        return { dismissedSuggestedChannelIdsByGuildId: d };
    }
    getSettings() {
        return null != N ? N : u;
    }
    hasChanges() {
        return null != I && !i().isEqual(N, c.h.getSettings(I));
    }
    canCloseEarly() {
        return !this.hasChanges();
    }
    showNotice() {
        return this.hasChanges();
    }
    getSubmitting() {
        return S;
    }
    getDismissedSuggestedChannelIds(e) {
        var n;
        return null == e ? [] : null != (n = d[e]) ? n : [];
    }
    getResourceChannel(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = N.resourceChannels) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getNewMemberAction(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = N.newMemberActions) ? void 0 : n.find((n) => n.channelId === e);
        return null == t ? null : t;
    }
    getPendingData() {
        return O;
    }
    getPendingDataForChannel(e) {
        if (null != e) return O[e];
    }
}
E(f, "displayName", "GuildSettingsOnboardingHomeSettingsStore"),
    E(f, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let b = new f(_.h, {
    GUILD_SETTINGS_INIT: h,
    GUILD_SETTINGS_SET_SECTION: h,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: h,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
        N = i().cloneDeep(Object.assign({}, c.h.getSettings(I)));
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function () {
        S = !0;
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: A,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: A,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
        let { action: n } = e;
        return D(n.channelId, n);
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
        let { resourceChannel: n } = e;
        G(n.channelId, n);
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
        let { welcomeMessage: n } = e;
        if (null == n) N.welcomeMessage = void 0;
        else {
            var t, r, l, i, o, _;
            N.welcomeMessage = {
                authorIds:
                    null != (t = null != (r = n.authorIds) ? r : null == (o = N.welcomeMessage) ? void 0 : o.authorIds)
                        ? t
                        : [],
                message:
                    null != (l = null != (i = n.message) ? i : null == (_ = N.welcomeMessage) ? void 0 : _.message)
                        ? l
                        : "",
            };
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n, action: t } = e;
        return D(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
        var n;
        let { action: t, pendingData: r } = e;
        (N.newMemberActions = null != (n = N.newMemberActions) ? n : []),
            (N.newMemberActions = [...N.newMemberActions, t]),
            (O[t.channelId] = {
                iconData: r.icon,
                isUrl: T(r.icon),
                emoji: r.emoji,
            });
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: n, pendingData: t } = e;
        O[n] = {
            iconData: t.icon,
            isUrl: T(t.icon),
            emoji: t.emoji,
        };
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function (e) {
        let { channelId: n } = e;
        null == n ? (O = {}) : delete O[n];
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
        let { channelId: n } = e;
        if (null == N.newMemberActions) return !1;
        (N.newMemberActions = [...N.newMemberActions.filter((e) => e.channelId !== n)]), delete O[n];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
        let { actions: n } = e;
        N.newMemberActions = n;
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
        let { channelId: n, resourceChannel: t } = e;
        G(n, t);
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
        var n;
        let { resourceChannel: t } = e;
        (N.resourceChannels = (null != (n = N.resourceChannels) ? n : []).filter((e) => e.channelId !== t.channelId)),
            (N.resourceChannels = [...N.resourceChannels, t]);
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
        let { resourceChannelId: n } = e;
        if (null == N.resourceChannels) return !1;
        N.resourceChannels = [...N.resourceChannels.filter((e) => e.channelId !== n)];
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
        let { resourceChannels: n } = e;
        N.resourceChannels = n;
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
        var n;
        let { guildId: t, channelIds: r } = e;
        d[t] = [...(null != (n = d[t]) ? n : []), ...r];
    },
});
