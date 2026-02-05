"use strict";
n.d(t, {
    A4: () => j,
    DE: () => E,
    E0: () => S,
    G$: () => A,
    J4: () => p,
    Rp: () => f,
    UP: () => R,
    W5: () => y,
    WA: () => v,
    Wh: () => b,
    XD: () => I,
    hL: () => _,
    kO: () => D,
    px: () => T,
    sd: () => N,
    sk: () => M,
    z4: () => C,
});
var i = n(735438),
    s = n.n(i),
    l = n(562465),
    r = n(73153),
    a = n(157559),
    o = n(701785),
    d = n(374084),
    c = n(954571),
    u = n(515718),
    m = n(728458),
    g = n(132514),
    x = n(652215),
    h = n(985018);
function _(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE", welcomeMessage: e });
}
function A(e, t) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION", action: e, pendingData: t });
}
function p(e, t) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
        pendingData: t,
    });
}
function f(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA", channelId: e });
}
function j(e, t) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION", channelId: e, action: t });
}
function N(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION", channelId: e });
}
function E(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION", actions: e });
}
async function b(e, t, n) {
    let i = {};
    null != n.emoji ? (i.emoji = n.emoji) : (i.icon = n.icon);
    try {
        let n = await l.Bo.patch({
                url: x.Rsh.NEW_MEMBER_ACTION(e, t),
                body: i,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            s = (0, d.kk)(n.body);
        return (
            r.h.dispatch({ type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS", guildId: e, action: s }),
            Promise.resolve(n.body)
        );
    } catch (t) {
        let e = s().flatMap(t.body ?? {}, (e) => e);
        return (
            a.A.show({
                title: h.intl.string(h.t["6nCZyG"]),
                body: h.intl.format(h.t.dYCPD2, { errorMessage: e.join(", ") }),
            }),
            m.A.addBreadcrumb({ message: "Error updating new member action icon" }),
            Promise.reject()
        );
    }
}
function T(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL", resourceChannel: e });
}
function C(e, t) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL", channelId: e, resourceChannel: t });
}
function I(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL", resourceChannelId: e });
}
function v(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL", resourceChannels: e });
}
async function S(e, t, n) {
    try {
        let i = await l.Bo.put({
                url: x.Rsh.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            s = (0, d.RR)(i.body);
        return r.h.dispatch({ type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS", guildId: e, resourceChannel: s }), i.body;
    } catch (t) {
        let e = s().flatMap(t.body ?? {}, (e) => e);
        a.A.show({
            title: h.intl.string(h.t["6nCZyG"]),
            body: h.intl.format(h.t.dYCPD2, { errorMessage: e.join(", ") }),
        });
    }
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || g.A.hasChanges()
        ? o.h.getEnabled(e) && !(0, d.Ic)(t)
            ? (a.A.show({ title: h.intl.string(h.t["6nCZyG"]), body: h.intl.string(h.t.JuhUTS) }),
              m.A.addBreadcrumb({ message: "Error saving home settings" }),
              Promise.reject())
            : O(e, t)
        : Promise.resolve();
}
function R(e, t) {
    let n = o.h.getSettings(e);
    return t && !(0, d.Ic)(n)
        ? void a.A.show({ title: h.intl.string(h.t["6nCZyG"]), body: h.intl.string(h.t.JuhUTS) })
        : (r.h.dispatch({ type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED", guildId: e, enabled: t }),
          O(e, { ...n, enabled: t }));
}
async function O(e, t) {
    r.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_START" });
    let n = g.A.getPendingData();
    try {
        let i = await l.Bo.put({
                url: x.Rsh.GUILD_HOME_SETTINGS(e),
                body: (0, d.Y4)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            s = (0, d.Xu)(i.body);
        return (
            r.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS", guildId: e, homeSettings: s }),
            Object.entries(n).forEach((t) => {
                let [n, i] = t;
                null == i ||
                    (null != i.iconData
                        ? G(e, n, i).finally(() => {
                              f(n);
                          })
                        : f(n));
            }),
            c.default.track(x.HAw.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (s?.welcomeMessage?.authorIds ?? [])[0],
                welcome_message_length: s?.welcomeMessage?.message?.length ?? 0,
                member_action_channel_ids: (s?.newMemberActions ?? []).map((e) => e.channelId),
                member_action_channel_actions: (s?.newMemberActions ?? []).map((e) => e.actionType),
                resource_channel_ids: (s?.resourceChannels ?? []).map((e) => e.channelId),
                enabled: s?.enabled,
            }),
            i.body
        );
    } catch (t) {
        let e = s().flatMap(t.body ?? {}, (e) => e);
        f(),
            r.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_FAIL" }),
            a.A.show({
                title: h.intl.string(h.t["6nCZyG"]),
                body: h.intl.format(h.t.dYCPD2, { errorMessage: e.join(", ") }),
            });
    }
}
async function G(e, t, n) {
    let { iconData: i, isUrl: s, emoji: l } = n;
    if (null != l) return;
    let r = null != i && s ? await L(i) : i;
    await b(e, t, { icon: r, emoji: null });
}
async function L(e) {
    let t = await fetch(e),
        n = await t.blob();
    return await (0, u.We)(n);
}
function D(e, t) {
    null != e &&
        r.h.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
            guildId: e,
            channelIds: t,
        });
}
function M() {
    r.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET" });
}
