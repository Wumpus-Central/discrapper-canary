r.d(n, {
    C3: function () {
        return T;
    },
    Fg: function () {
        return I;
    },
    Oh: function () {
        return y;
    },
    cP: function () {
        return v;
    },
    gp: function () {
        return b;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(544891),
    o = r(570140),
    l = r(904245),
    u = r(593472),
    c = r(160404),
    d = r(359110),
    f = r(592125),
    _ = r(626135),
    h = r(709054),
    p = r(563534),
    m = r(734893),
    g = r(846121),
    E = r(981631);
let v = async (e) => {
        o.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_FETCH_START',
            guildId: e
        });
        try {
            let n = await s.tn.get({
                    url: E.ANM.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
                r = (0, m.tB)(n.body);
            return (
                o.Z.dispatch({
                    type: 'GUILD_HOME_SETTINGS_FETCH_SUCCESS',
                    guildId: e,
                    homeSettings: r
                }),
                r
            );
        } catch (n) {
            o.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_FETCH_FAIL',
                guildId: e
            });
        }
    },
    I = async (e) => {
        if (!c.Z.isFullServerPreview(e)) {
            o.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START',
                guildId: e
            });
            try {
                let n = await s.tn.get({
                        url: E.ANM.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    }),
                    r = (0, m.rk)(n.body);
                return (
                    o.Z.dispatch({
                        type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS',
                        guildId: e,
                        memberActions: r
                    }),
                    r
                );
            } catch (n) {
                o.Z.dispatch({
                    type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL',
                    guildId: e
                });
            }
        }
    },
    T = function (e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
            (o.Z.dispatch({
                type: 'SELECT_HOME_RESOURCE_CHANNEL',
                guildId: e,
                channelId: n
            }),
            null == n)
        )
            return;
        let i = f.Z.getChannel(n),
            a = p.Z.getResourceForChannel(e, n);
        null != e &&
            !c.Z.isFullServerPreview(e) &&
            null != i &&
            null != a &&
            _.default.track(E.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: i.id,
                server_guide_channel_type: 'resource',
                channel_action_type: -1
            }),
            r && (0, d.Kh)(n, { navigationReplace: !1 });
        l.Z.jumpToMessage({
            channelId: n,
            messageId: h.default.castChannelIdAsMessageId(n),
            flash: !1,
            jumpType: u.SR.INSTANT
        });
    },
    b = (e, n) => {
        o.Z.dispatch({
            type: 'SELECT_NEW_MEMBER_ACTION_CHANNEL',
            guildId: e,
            channelId: n
        });
        let r = f.Z.getChannel(n),
            i = p.Z.getActionForChannel(e, n);
        null != e &&
            !c.Z.isFullServerPreview(e) &&
            null != r &&
            null != i &&
            _.default.track(E.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: r.id,
                server_guide_channel_type: 'member action',
                channel_action_type: i.actionType
            }),
            (0, d.Kh)(n);
    },
    y = (e, n) => {
        if (
            (o.Z.dispatch({
                type: 'COMPLETE_NEW_MEMBER_ACTION',
                guildId: e,
                channelId: n
            }),
            c.Z.isFullServerPreview(e))
        )
            return;
        let r = f.Z.getChannel(n),
            i = p.Z.getActionForChannel(e, n);
        if (null != r && null != i) {
            var a, l;
            let n = h.default.keys(null !== (a = g.Z.getCompletedActions(e)) && void 0 !== a ? a : {}),
                s = null !== (l = p.Z.getNewMemberActions(e)) && void 0 !== l ? l : [];
            _.default.track(E.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_action_type: i.actionType,
                has_completed_all: s.reduce((e, r) => e && n.includes(r.channelId), !0)
            });
        }
        s.tn.post({
            url: E.ANM.GUILD_MEMBER_ACTION_UPDATE(e, n),
            rejectWithError: !0
        });
    };
