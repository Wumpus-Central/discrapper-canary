n.d(t, {
    C3: () => E,
    Fg: () => g,
    Oh: () => y,
    cP: () => m,
    gp: () => b
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    o = n(904245),
    a = n(593472),
    s = n(160404),
    l = n(359110),
    c = n(592125),
    u = n(626135),
    d = n(709054),
    f = n(563534),
    _ = n(734893),
    p = n(846121),
    h = n(981631);
let m = async (e) => {
        i.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_FETCH_START',
            guildId: e
        });
        try {
            let t = await r.tn.get({
                    url: h.ANM.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                n = (0, _.tB)(t.body);
            return (
                i.Z.dispatch({
                    type: 'GUILD_HOME_SETTINGS_FETCH_SUCCESS',
                    guildId: e,
                    homeSettings: n
                }),
                n
            );
        } catch (t) {
            i.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_FETCH_FAIL',
                guildId: e
            });
        }
    },
    g = async (e) => {
        if (!s.Z.isFullServerPreview(e)) {
            i.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START',
                guildId: e
            });
            try {
                let t = await r.tn.get({
                        url: h.ANM.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    }),
                    n = (0, _.rk)(t.body);
                return (
                    i.Z.dispatch({
                        type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS',
                        guildId: e,
                        memberActions: n
                    }),
                    n
                );
            } catch (t) {
                i.Z.dispatch({
                    type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL',
                    guildId: e
                });
            }
        }
    },
    E = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
            (i.Z.dispatch({
                type: 'SELECT_HOME_RESOURCE_CHANNEL',
                guildId: e,
                channelId: t
            }),
            null == t)
        )
            return;
        let r = c.Z.getChannel(t),
            _ = f.Z.getResourceForChannel(e, t);
        null == e ||
            s.Z.isFullServerPreview(e) ||
            null == r ||
            null == _ ||
            u.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: r.id,
                server_guide_channel_type: 'resource',
                channel_action_type: -1
            }),
            n && (0, l.Kh)(t, { navigationReplace: !1 }),
            o.Z.jumpToMessage({
                channelId: t,
                messageId: d.default.castChannelIdAsMessageId(t),
                flash: !1,
                jumpType: a.SR.INSTANT
            });
    },
    b = (e, t) => {
        i.Z.dispatch({
            type: 'SELECT_NEW_MEMBER_ACTION_CHANNEL',
            guildId: e,
            channelId: t
        });
        let n = c.Z.getChannel(t),
            r = f.Z.getActionForChannel(e, t);
        null == e ||
            s.Z.isFullServerPreview(e) ||
            null == n ||
            null == r ||
            u.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: 'member action',
                channel_action_type: r.actionType
            }),
            (0, l.Kh)(t);
    },
    y = (e, t) => {
        if (
            (i.Z.dispatch({
                type: 'COMPLETE_NEW_MEMBER_ACTION',
                guildId: e,
                channelId: t
            }),
            s.Z.isFullServerPreview(e))
        )
            return;
        let n = c.Z.getChannel(t),
            o = f.Z.getActionForChannel(e, t);
        if (null != n && null != o) {
            var a, l;
            let t = d.default.keys(null != (a = p.Z.getCompletedActions(e)) ? a : {}),
                r = null != (l = f.Z.getNewMemberActions(e)) ? l : [];
            u.default.track(h.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: o.actionType,
                has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), !0)
            });
        }
        r.tn.post({
            url: h.ANM.GUILD_MEMBER_ACTION_UPDATE(e, t),
            rejectWithError: !0
        });
    };
