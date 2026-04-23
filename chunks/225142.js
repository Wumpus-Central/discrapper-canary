n.d(t, { aW: () => S, ag: () => T, bN: () => N, eC: () => R, qo: () => O });
var i = n(636537),
    r = n(228366),
    a = n(720149),
    s = n(56562),
    _ = n(164956),
    l = n(378570),
    o = n(734057),
    E = n(954571),
    d = n(935208),
    c = n(701785),
    u = n(374084),
    I = n(65995),
    A = n(652215);
let T = async (e) => {
        r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: e });
        try {
            let t = await i.Bo.get({ url: A.Rsh.GUILD_HOME_SETTINGS(e), oldFormErrors: !0, rejectWithError: !0 }),
                n = (0, u.Xu)(t.body);
            return r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: e, homeSettings: n }), n;
        } catch (t) {
            r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: e });
        }
    },
    S = async (e) => {
        if (!_.A.isFullServerPreview(e)) {
            r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: e });
            try {
                let t = await i.Bo.get({ url: A.Rsh.GUILD_MEMBER_ACTIONS(e), oldFormErrors: !0, rejectWithError: !0 }),
                    n = (0, u.xr)(t.body);
                return (
                    r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: e, memberActions: n }), n
                );
            } catch (t) {
                r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: e });
            }
        }
    },
    N = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == t) return;
        let i = o.A.getChannel(t),
            r = c.h.getResourceForChannel(e, t);
        null == e ||
            _.A.isFullServerPreview(e) ||
            null == i ||
            null == r ||
            E.default.track(A.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: i.id,
                server_guide_channel_type: "resource",
                channel_action_type: -1,
            }),
            n && (0, l.iN)(t, { navigationReplace: !1 }),
            a.A.jumpToMessage({
                channelId: t,
                messageId: d.default.castChannelIdAsMessageId(t),
                flash: !1,
                jumpType: s.US.INSTANT,
            });
    },
    O = (e, t) => {
        let n = o.A.getChannel(t),
            i = c.h.getActionForChannel(e, t);
        null == e ||
            _.A.isFullServerPreview(e) ||
            null == n ||
            null == i ||
            E.default.track(A.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: "member action",
                channel_action_type: i.actionType,
            }),
            (0, l.iN)(t);
    },
    R = (e, t) => {
        if (
            (r.h.dispatch({ type: "COMPLETE_NEW_MEMBER_ACTION", guildId: e, channelId: t }), _.A.isFullServerPreview(e))
        )
            return;
        let n = o.A.getChannel(t),
            a = c.h.getActionForChannel(e, t);
        if (null != n && null != a) {
            let t = d.default.keys(I.A.getCompletedActions(e) ?? {}),
                i = c.h.getNewMemberActions(e) ?? [];
            E.default.track(A.HAw.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: a.actionType,
                has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0),
            });
        }
        i.Bo.post({ url: A.Rsh.GUILD_MEMBER_ACTION_UPDATE(e, t), rejectWithError: !0 });
    };
