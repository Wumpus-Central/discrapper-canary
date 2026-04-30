"use strict";
n.d(t, { aW: () => m, ag: () => E, bN: () => g, eC: () => I, qo: () => A });
var i = n(636537),
    r = n(228366),
    s = n(720149),
    a = n(56562),
    o = n(164956),
    l = n(378570),
    u = n(734057),
    c = n(174459),
    d = n(935208),
    _ = n(701785),
    f = n(374084),
    h = n(65995),
    p = n(652215);
let E = async (e) => {
        r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: e });
        try {
            let t = await i.Bo.get({ url: p.Rsh.GUILD_HOME_SETTINGS(e), oldFormErrors: !0, rejectWithError: !0 }),
                n = (0, f.Xu)(t.body);
            return r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: e, homeSettings: n }), n;
        } catch (t) {
            r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: e });
        }
    },
    m = async (e) => {
        if (!o.A.isFullServerPreview(e)) {
            r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: e });
            try {
                let t = await i.Bo.get({ url: p.Rsh.GUILD_MEMBER_ACTIONS(e), oldFormErrors: !0, rejectWithError: !0 }),
                    n = (0, f.xr)(t.body);
                return (
                    r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: e, memberActions: n }), n
                );
            } catch (t) {
                r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: e });
            }
        }
    },
    g = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == t) return;
        let i = u.A.getChannel(t),
            r = _.h.getResourceForChannel(e, t);
        null == e ||
            o.A.isFullServerPreview(e) ||
            null == i ||
            null == r ||
            c.default.track(p.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: i.id,
                server_guide_channel_type: "resource",
                channel_action_type: -1,
            }),
            n && (0, l.iN)(t, { navigationReplace: !1 }),
            s.A.jumpToMessage({
                channelId: t,
                messageId: d.default.castChannelIdAsMessageId(t),
                flash: !1,
                jumpType: a.US.INSTANT,
            });
    },
    A = (e, t) => {
        let n = u.A.getChannel(t),
            i = _.h.getActionForChannel(e, t);
        null == e ||
            o.A.isFullServerPreview(e) ||
            null == n ||
            null == i ||
            c.default.track(p.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: "member action",
                channel_action_type: i.actionType,
            }),
            (0, l.iN)(t);
    },
    I = (e, t) => {
        if (
            (r.h.dispatch({ type: "COMPLETE_NEW_MEMBER_ACTION", guildId: e, channelId: t }), o.A.isFullServerPreview(e))
        )
            return;
        let n = u.A.getChannel(t),
            s = _.h.getActionForChannel(e, t);
        if (null != n && null != s) {
            let t = d.default.keys(h.A.getCompletedActions(e) ?? {}),
                i = _.h.getNewMemberActions(e) ?? [];
            c.default.track(p.HAw.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: s.actionType,
                has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0),
            });
        }
        i.Bo.post({ url: p.Rsh.GUILD_MEMBER_ACTION_UPDATE(e, t), rejectWithError: !0 });
    };
