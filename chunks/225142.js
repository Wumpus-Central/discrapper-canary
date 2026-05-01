n.d(t, { aW: () => h, ag: () => T, bN: () => S, eC: () => f, qo: () => N });
var i = n(636537),
    a = n(228366),
    r = n(720149),
    s = n(56562),
    l = n(164956),
    o = n(378570),
    d = n(734057),
    c = n(954571),
    _ = n(935208),
    E = n(701785),
    u = n(374084),
    A = n(65995),
    I = n(652215);
let T = async (e) => {
        a.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: e });
        try {
            let t = await i.Bo.get({ url: I.Rsh.GUILD_HOME_SETTINGS(e), oldFormErrors: !0, rejectWithError: !0 }),
                n = (0, u.Xu)(t.body);
            return a.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: e, homeSettings: n }), n;
        } catch (t) {
            a.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: e });
        }
    },
    h = async (e) => {
        if (!l.A.isFullServerPreview(e)) {
            a.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: e });
            try {
                let t = await i.Bo.get({ url: I.Rsh.GUILD_MEMBER_ACTIONS(e), oldFormErrors: !0, rejectWithError: !0 }),
                    n = (0, u.xr)(t.body);
                return (
                    a.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: e, memberActions: n }), n
                );
            } catch (t) {
                a.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: e });
            }
        }
    },
    S = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == t) return;
        let i = d.A.getChannel(t),
            a = E.h.getResourceForChannel(e, t);
        null == e ||
            l.A.isFullServerPreview(e) ||
            null == i ||
            null == a ||
            c.default.track(I.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: i.id,
                server_guide_channel_type: "resource",
                channel_action_type: -1,
            }),
            n && (0, o.iN)(t, { navigationReplace: !1 }),
            r.A.jumpToMessage({
                channelId: t,
                messageId: _.default.castChannelIdAsMessageId(t),
                flash: !1,
                jumpType: s.US.INSTANT,
            });
    },
    N = (e, t) => {
        let n = d.A.getChannel(t),
            i = E.h.getActionForChannel(e, t);
        null == e ||
            l.A.isFullServerPreview(e) ||
            null == n ||
            null == i ||
            c.default.track(I.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: "member action",
                channel_action_type: i.actionType,
            }),
            (0, o.iN)(t);
    },
    f = (e, t) => {
        if (
            (a.h.dispatch({ type: "COMPLETE_NEW_MEMBER_ACTION", guildId: e, channelId: t }), l.A.isFullServerPreview(e))
        )
            return;
        let n = d.A.getChannel(t),
            r = E.h.getActionForChannel(e, t);
        if (null != n && null != r) {
            let t = _.default.keys(A.A.getCompletedActions(e) ?? {}),
                i = E.h.getNewMemberActions(e) ?? [];
            c.default.track(I.HAw.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: r.actionType,
                has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0),
            });
        }
        i.Bo.post({ url: I.Rsh.GUILD_MEMBER_ACTION_UPDATE(e, t), rejectWithError: !0 });
    };
