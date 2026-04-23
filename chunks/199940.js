n.d(t, {
    A4: () => j,
    DE: () => A,
    E0: () => T,
    G$: () => p,
    J4: () => E,
    Rp: () => f,
    UP: () => R,
    W5: () => y,
    WA: () => v,
    Wh: () => C,
    XD: () => S,
    hL: () => _,
    kO: () => G,
    px: () => I,
    sd: () => N,
    sk: () => M,
    z4: () => b,
});
var i = n(735438),
    l = n.n(i),
    s = n(636537),
    a = n(228366),
    r = n(157559),
    o = n(701785),
    d = n(374084),
    c = n(954571),
    u = n(515718),
    m = n(38405),
    g = n(132514),
    h = n(652215),
    x = n(985018);
function _(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE", welcomeMessage: e });
}
function p(e, t) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION", action: e, pendingData: t });
}
function E(e, t) {
    a.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
        pendingData: t,
    });
}
function f(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA", channelId: e });
}
function j(e, t) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION", channelId: e, action: t });
}
function N(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION", channelId: e });
}
function A(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION", actions: e });
}
async function C(e, t, n) {
    let i = {};
    null != n.emoji ? (i.emoji = n.emoji) : (i.icon = n.icon);
    try {
        let n = await s.Bo.patch({
                url: h.Rsh.NEW_MEMBER_ACTION(e, t),
                body: i,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            l = (0, d.kk)(n.body);
        return (
            a.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS", guildId: e, action: l }),
            Promise.resolve(n.body)
        );
    } catch (t) {
        let e = l().flatMap(t.body ?? {}, (e) => e);
        return (
            r.A.show({
                title: x.intl.string(x.t["6nCZyG"]),
                body: x.intl.format(x.t.dYCPD2, { errorMessage: e.join(", ") }),
            }),
            m.A.addBreadcrumb({ message: "Error updating new member action icon" }),
            Promise.reject()
        );
    }
}
function I(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL", resourceChannel: e });
}
function b(e, t) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL", channelId: e, resourceChannel: t });
}
function S(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL", resourceChannelId: e });
}
function v(e) {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL", resourceChannels: e });
}
async function T(e, t, n) {
    try {
        let i = await s.Bo.put({
                url: h.Rsh.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            l = (0, d.RR)(i.body);
        return a.h.dispatch({ type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS", guildId: e, resourceChannel: l }), i.body;
    } catch (t) {
        let e = l().flatMap(t.body ?? {}, (e) => e);
        r.A.show({
            title: x.intl.string(x.t["6nCZyG"]),
            body: x.intl.format(x.t.dYCPD2, { errorMessage: e.join(", ") }),
        });
    }
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || g.A.hasChanges()
        ? o.h.getEnabled(e) && !(0, d.Ic)(t)
            ? (r.A.show({ title: x.intl.string(x.t["6nCZyG"]), body: x.intl.string(x.t.JuhUTS) }),
              m.A.addBreadcrumb({ message: "Error saving home settings" }),
              Promise.reject())
            : L(e, t)
        : Promise.resolve();
}
function R(e, t) {
    let n = o.h.getSettings(e);
    return t && !(0, d.Ic)(n)
        ? void r.A.show({ title: x.intl.string(x.t["6nCZyG"]), body: x.intl.string(x.t.JuhUTS) })
        : (a.h.dispatch({ type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED", guildId: e, enabled: t }),
          L(e, { ...n, enabled: t }));
}
async function L(e, t) {
    a.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_START" });
    let n = g.A.getPendingData();
    try {
        let i = await s.Bo.put({
                url: h.Rsh.GUILD_HOME_SETTINGS(e),
                body: (0, d.Y4)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            l = (0, d.Xu)(i.body);
        return (
            a.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS", guildId: e, homeSettings: l }),
            Object.entries(n).forEach((t) => {
                let [n, i] = t;
                null == i ||
                    (null != i.iconData
                        ? D(e, n, i).finally(() => {
                              f(n);
                          })
                        : f(n));
            }),
            c.default.track(h.HAw.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (l?.welcomeMessage?.authorIds ?? [])[0],
                welcome_message_length: l?.welcomeMessage?.message?.length ?? 0,
                member_action_channel_ids: (l?.newMemberActions ?? []).map((e) => e.channelId),
                member_action_channel_actions: (l?.newMemberActions ?? []).map((e) => e.actionType),
                resource_channel_ids: (l?.resourceChannels ?? []).map((e) => e.channelId),
                enabled: l?.enabled,
            }),
            i.body
        );
    } catch (t) {
        let e = l().flatMap(t.body ?? {}, (e) => e);
        f(),
            a.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_FAIL" }),
            r.A.show({
                title: x.intl.string(x.t["6nCZyG"]),
                body: x.intl.format(x.t.dYCPD2, { errorMessage: e.join(", ") }),
            });
    }
}
async function D(e, t, n) {
    let { iconData: i, isUrl: l, emoji: s } = n;
    if (null != s) return;
    let a = null != i && l ? await O(i) : i;
    await C(e, t, { icon: a, emoji: null });
}
async function O(e) {
    let t = await fetch(e),
        n = await t.blob();
    return await (0, u.We)(n);
}
function G(e, t) {
    null != e &&
        a.h.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
            guildId: e,
            channelIds: t,
        });
}
function M() {
    a.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET" });
}
