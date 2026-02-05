"use strict";
n.d(t, { aW: () => g, ag: () => m, bN: () => E, eC: () => I, qo: () => A });
var r = n(562465),
    i = n(73153),
    a = n(843472),
    s = n(56562),
    o = n(164956),
    l = n(378570),
    u = n(734057),
    c = n(954571),
    d = n(661191),
    _ = n(701785),
    f = n(374084),
    p = n(65995),
    h = n(652215);
let m = async (e) => {
        i.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: e });
        try {
            let t = await r.Bo.get({ url: h.Rsh.GUILD_HOME_SETTINGS(e), oldFormErrors: !0, rejectWithError: !0 }),
                n = (0, f.Xu)(t.body);
            return i.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: e, homeSettings: n }), n;
        } catch (t) {
            i.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: e });
        }
    },
    g = async (e) => {
        if (!o.A.isFullServerPreview(e)) {
            i.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: e });
            try {
                let t = await r.Bo.get({ url: h.Rsh.GUILD_MEMBER_ACTIONS(e), oldFormErrors: !0, rejectWithError: !0 }),
                    n = (0, f.xr)(t.body);
                return (
                    i.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: e, memberActions: n }), n
                );
            } catch (t) {
                i.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: e });
            }
        }
    },
    E = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if ((i.h.dispatch({ type: "SELECT_HOME_RESOURCE_CHANNEL", guildId: e, channelId: t }), null == t)) return;
        let r = u.A.getChannel(t),
            f = _.h.getResourceForChannel(e, t);
        null == e ||
            o.A.isFullServerPreview(e) ||
            null == r ||
            null == f ||
            c.default.track(h.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: r.id,
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
    A = (e, t) => {
        i.h.dispatch({ type: "SELECT_NEW_MEMBER_ACTION_CHANNEL", guildId: e, channelId: t });
        let n = u.A.getChannel(t),
            r = _.h.getActionForChannel(e, t);
        null == e ||
            o.A.isFullServerPreview(e) ||
            null == n ||
            null == r ||
            c.default.track(h.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: "member action",
                channel_action_type: r.actionType,
            }),
            (0, l.iN)(t);
    },
    I = (e, t) => {
        if (
            (i.h.dispatch({ type: "COMPLETE_NEW_MEMBER_ACTION", guildId: e, channelId: t }), o.A.isFullServerPreview(e))
        )
            return;
        let n = u.A.getChannel(t),
            a = _.h.getActionForChannel(e, t);
        if (null != n && null != a) {
            let t = d.default.keys(p.A.getCompletedActions(e) ?? {}),
                r = _.h.getNewMemberActions(e) ?? [];
            c.default.track(h.HAw.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: a.actionType,
                has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), !0),
            });
        }
        r.Bo.post({ url: h.Rsh.GUILD_MEMBER_ACTION_UPDATE(e, t), rejectWithError: !0 });
    };
