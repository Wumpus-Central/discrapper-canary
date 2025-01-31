n.d(t, {
    C3: () => E,
    Fg: () => g,
    Oh: () => y,
    cP: () => m,
    gp: () => v
}),
    n(47120),
    n(724458);
var i = n(544891),
    r = n(570140),
    a = n(904245),
    s = n(593472),
    o = n(160404),
    l = n(359110),
    u = n(592125),
    c = n(626135),
    d = n(709054),
    f = n(563534),
    _ = n(734893),
    p = n(846121),
    h = n(981631);
let m = async (e) => {
        r.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_FETCH_START',
            guildId: e
        });
        try {
            let t = await i.tn.get({
                    url: h.ANM.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                n = (0, _.tB)(t.body);
            return (
                r.Z.dispatch({
                    type: 'GUILD_HOME_SETTINGS_FETCH_SUCCESS',
                    guildId: e,
                    homeSettings: n
                }),
                n
            );
        } catch (t) {
            r.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_FETCH_FAIL',
                guildId: e
            });
        }
    },
    g = async (e) => {
        if (!o.Z.isFullServerPreview(e)) {
            r.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START',
                guildId: e
            });
            try {
                let t = await i.tn.get({
                        url: h.ANM.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    }),
                    n = (0, _.rk)(t.body);
                return (
                    r.Z.dispatch({
                        type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS',
                        guildId: e,
                        memberActions: n
                    }),
                    n
                );
            } catch (t) {
                r.Z.dispatch({
                    type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL',
                    guildId: e
                });
            }
        }
    },
    E = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
            (r.Z.dispatch({
                type: 'SELECT_HOME_RESOURCE_CHANNEL',
                guildId: e,
                channelId: t
            }),
            null == t)
        )
            return;
        let i = u.Z.getChannel(t),
            _ = f.Z.getResourceForChannel(e, t);
        null == e ||
            o.Z.isFullServerPreview(e) ||
            null == i ||
            null == _ ||
            c.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: i.id,
                server_guide_channel_type: 'resource',
                channel_action_type: -1
            }),
            n && (0, l.Kh)(t, { navigationReplace: !1 }),
            a.Z.jumpToMessage({
                channelId: t,
                messageId: d.default.castChannelIdAsMessageId(t),
                flash: !1,
                jumpType: s.SR.INSTANT
            });
    },
    v = (e, t) => {
        r.Z.dispatch({
            type: 'SELECT_NEW_MEMBER_ACTION_CHANNEL',
            guildId: e,
            channelId: t
        });
        let n = u.Z.getChannel(t),
            i = f.Z.getActionForChannel(e, t);
        null == e ||
            o.Z.isFullServerPreview(e) ||
            null == n ||
            null == i ||
            c.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: 'member action',
                channel_action_type: i.actionType
            }),
            (0, l.Kh)(t);
    },
    y = (e, t) => {
        if (
            (r.Z.dispatch({
                type: 'COMPLETE_NEW_MEMBER_ACTION',
                guildId: e,
                channelId: t
            }),
            o.Z.isFullServerPreview(e))
        )
            return;
        let n = u.Z.getChannel(t),
            a = f.Z.getActionForChannel(e, t);
        if (null != n && null != a) {
            var s, l;
            let t = d.default.keys(null !== (s = p.Z.getCompletedActions(e)) && void 0 !== s ? s : {}),
                i = null !== (l = f.Z.getNewMemberActions(e)) && void 0 !== l ? l : [];
            c.default.track(h.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: a.actionType,
                has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0)
            });
        }
        i.tn.post({
            url: h.ANM.GUILD_MEMBER_ACTION_UPDATE(e, t),
            rejectWithError: !0
        });
    };
