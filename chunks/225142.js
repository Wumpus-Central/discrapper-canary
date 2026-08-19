"use strict";
n.d(t, { aW: () => f, ag: () => I, bN: () => p, eC: () => m, qo: () => T });
var i = n(636537),
    r = n(228366),
    a = n(148494),
    s = n(56562),
    l = n(164956),
    o = n(378570),
    d = n(734057),
    c = n(174459),
    u = n(935208),
    _ = n(701785),
    E = n(374084),
    A = n(65995),
    h = n(652215);
async function I(e) {
    r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: e });
    try {
        let t = await i.Bo.get({ url: h.Rsh.GUILD_HOME_SETTINGS(e), oldFormErrors: !0, rejectWithError: !0 }),
            n = (0, E.Xu)(t.body);
        return r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: e, homeSettings: n }), n;
    } catch (t) {
        r.h.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: e });
    }
}
async function f(e) {
    if (!l.A.isFullServerPreview(e)) {
        r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: e });
        try {
            let t = await i.Bo.get({ url: h.Rsh.GUILD_MEMBER_ACTIONS(e), oldFormErrors: !0, rejectWithError: !0 }),
                n = (0, E.xr)(t.body);
            return r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: e, memberActions: n }), n;
        } catch (t) {
            r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: e });
        }
    }
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == t) return;
    let i = d.A.getChannel(t),
        r = _.h.getResourceForChannel(e, t);
    null == e ||
        l.A.isFullServerPreview(e) ||
        null == i ||
        null == r ||
        c.default.track(h.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: i.id,
            server_guide_channel_type: "resource",
            channel_action_type: -1,
        }),
        n && (0, o.iN)(t, { navigationReplace: !1 }),
        a.A.jumpToMessage({
            channelId: t,
            messageId: u.default.castChannelIdAsMessageId(t),
            flash: !1,
            jumpType: s.vx.INSTANT,
        });
}
function T(e, t) {
    let n = d.A.getChannel(t),
        i = _.h.getActionForChannel(e, t);
    null == e ||
        l.A.isFullServerPreview(e) ||
        null == n ||
        null == i ||
        c.default.track(h.HAw.SERVER_GUIDE_CHANNEL_SELECTED, {
            guild_id: e,
            channel_id: n.id,
            server_guide_channel_type: "member action",
            channel_action_type: i.actionType,
        }),
        (0, o.iN)(t);
}
function m(e, t) {
    if ((r.h.dispatch({ type: "COMPLETE_NEW_MEMBER_ACTION", guildId: e, channelId: t }), l.A.isFullServerPreview(e)))
        return;
    let n = d.A.getChannel(t),
        a = _.h.getActionForChannel(e, t);
    if (null != n && null != a) {
        let t = u.default.keys(A.A.getCompletedActions(e) ?? {}),
            i = _.h.getNewMemberActions(e) ?? [];
        c.default.track(h.HAw.SERVER_GUIDE_ACTION_COMPLETED, {
            guild_id: n.guild_id,
            channel_id: n.id,
            channel_action_type: a.actionType,
            has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0),
        });
    }
    i.Bo.post({ url: h.Rsh.GUILD_MEMBER_ACTION_UPDATE(e, t), rejectWithError: !0 });
}
