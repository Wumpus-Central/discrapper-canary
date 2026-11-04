var _ = n(435558),
    E = n.n(_),
    i = n(620632),
    r = n(73153),
    o = n(157559),
    a = n(701785),
    s = n(374084),
    c = n(129230),
    h = n(515718),
    N = n(856383),
    l = n(132514),
    I = n(652215),
    T = n(792996);
function d(t) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA", channelId: t });
}
async function S(t, e, n) {
    let _ = {};
    null != n.emoji ? (_.emoji = n.emoji) : (_.icon = n.icon);
    try {
        let n = await i.Bo.patch({
                url: I.Rsh.NEW_MEMBER_ACTION(t, e),
                body: _,
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            }),
            E = (0, s.kk)(n.body);
        return (
            r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS", guildId: t, action: E }),
            Promise.resolve(n.body)
        );
    } catch (e) {
        let t = E().flatMap(e.body ?? {}, (t) => t);
        return (
            o.A.show({
                title: T.intl.string(T.t["6nCZyG"]),
                body: T.intl.format(T.t.dYCPD2, { errorMessage: t.join(", ") }),
            }),
            N.A.addBreadcrumb({ message: "Error updating new member action icon" }),
            Promise.reject()
        );
    }
}
async function G(t, e) {
    r.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_START" });
    let n = l.A.getPendingData();
    try {
        let _ = await i.Bo.put({
                url: I.Rsh.GUILD_HOME_SETTINGS(t),
                body: (0, s.Y4)(t, e),
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            }),
            E = (0, s.Xu)(_.body);
        return (
            r.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS", guildId: t, homeSettings: E }),
            Object.entries(n).forEach((e) => {
                let [n, _] = e;
                null == _ ||
                    (null != _.iconData
                        ? (async function (t, e, n) {
                              let { iconData: _, isUrl: E, emoji: i } = n;
                              if (null != i) return;
                              let r =
                                  null != _ && E
                                      ? await (async function (t) {
                                            let e = await fetch(t),
                                                n = await e.blob();
                                            return await (0, h.We)(n);
                                        })(_)
                                      : _;
                              await S(t, e, { icon: r, emoji: null });
                          })(t, n, _).finally(() => {
                              d(n);
                          })
                        : d(n));
            }),
            c.default.track(I.HAw.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: t,
                welcome_message_author_id: (E?.welcomeMessage?.authorIds ?? [])[0],
                welcome_message_length: E?.welcomeMessage?.message?.length ?? 0,
                member_action_channel_ids: (E?.newMemberActions ?? []).map((t) => t.channelId),
                member_action_channel_actions: (E?.newMemberActions ?? []).map((t) => t.actionType),
                resource_channel_ids: (E?.resourceChannels ?? []).map((t) => t.channelId),
                enabled: E?.enabled,
            }),
            _.body
        );
    } catch (e) {
        let t = E().flatMap(e.body ?? {}, (t) => t);
        (d(),
            r.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_FAIL" }),
            o.A.show({
                title: T.intl.string(T.t["6nCZyG"]),
                body: T.intl.format(T.t.dYCPD2, { errorMessage: t.join(", ") }),
            }));
    }
}
n.d(
    e,
    {},
    {
        A4: function (t, e) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION", channelId: t, action: e });
        },
        DE: function (t) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION", actions: t });
        },
        E0: async function (t, e, n) {
            try {
                let _ = await i.Bo.put({
                        url: I.Rsh.RESOURCE_CHANNEL(t, e),
                        body: { icon: n },
                        oldFormErrors: !0,
                        rejectWithError: (0, i.fT)(),
                    }),
                    E = (0, s.RR)(_.body);
                return (
                    r.h.dispatch({ type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS", guildId: t, resourceChannel: E }),
                    _.body
                );
            } catch (e) {
                let t = E().flatMap(e.body ?? {}, (t) => t);
                o.A.show({
                    title: T.intl.string(T.t["6nCZyG"]),
                    body: T.intl.format(T.t.dYCPD2, { errorMessage: t.join(", ") }),
                });
            }
        },
        G$: function (t, e) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION", action: t, pendingData: e });
        },
        J4: function (t, e) {
            r.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
                channelId: t,
                pendingData: e,
            });
        },
        Rp: d,
        UP: function (t, e) {
            let n = a.h.getSettings(t);
            return e && !(0, s.Ic)(n)
                ? void o.A.show({ title: T.intl.string(T.t["6nCZyG"]), body: T.intl.string(T.t.JuhUTS) })
                : (r.h.dispatch({ type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED", guildId: t, enabled: e }),
                  G(t, { ...n, enabled: e }));
        },
        W5: function (t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n || l.A.hasChanges()
                ? a.h.getEnabled(t) && !(0, s.Ic)(e)
                    ? (o.A.show({ title: T.intl.string(T.t["6nCZyG"]), body: T.intl.string(T.t.JuhUTS) }),
                      N.A.addBreadcrumb({ message: "Error saving home settings" }),
                      Promise.reject())
                    : G(t, e)
                : Promise.resolve();
        },
        WA: function (t) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL", resourceChannels: t });
        },
        Wh: S,
        XD: function (t) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL", resourceChannelId: t });
        },
        hL: function (t) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE", welcomeMessage: t });
        },
        kO: function (t, e) {
            null != t &&
                r.h.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
                    guildId: t,
                    channelIds: e,
                });
        },
        px: function (t) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL", resourceChannel: t });
        },
        sd: function (t) {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION", channelId: t });
        },
        sk: function () {
            r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET" });
        },
        z4: function (t, e) {
            r.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
                channelId: t,
                resourceChannel: e,
            });
        },
    },
);
