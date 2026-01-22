n.d(t, {
    A4: () => O,
    DE: () => v,
    E0: () => T,
    G$: () => x,
    J4: () => h,
    Rp: () => j,
    UP: () => C,
    W5: () => I,
    WA: () => S,
    Wh: () => A,
    XD: () => _,
    hL: () => p,
    kO: () => D,
    px: () => E,
    sd: () => y,
    sk: () => G,
    z4: () => N,
}),
    n(114821),
    n(339614),
    n(896048),
    n(492834);
var r = n(735438),
    i = n.n(r),
    l = n(562465),
    s = n(73153),
    a = n(157559),
    c = n(701785),
    o = n(374084),
    d = n(954571),
    u = n(515718),
    f = n(728458),
    g = n(132514),
    b = n(652215),
    m = n(985018);
function p(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
        welcomeMessage: e,
    });
}
function x(e, t) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
        action: e,
        pendingData: t,
    });
}
function h(e, t) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
        pendingData: t,
    });
}
function j(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
    });
}
function O(e, t) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
        channelId: e,
        action: t,
    });
}
function y(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
        channelId: e,
    });
}
function v(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
        actions: e,
    });
}
async function A(e, t, n) {
    let r = {};
    null != n.emoji ? (r.emoji = n.emoji) : (r.icon = n.icon);
    try {
        let n = await l.Bo.patch({
                url: b.Rsh.NEW_MEMBER_ACTION(e, t),
                body: r,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            i = (0, o.kk)(n.body);
        return (
            s.h.dispatch({
                type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
                guildId: e,
                action: i,
            }),
            Promise.resolve(n.body)
        );
    } catch (t) {
        var c;
        let e = i().flatMap(null != (c = t.body) ? c : {}, (e) => e);
        return (
            a.A.show({
                title: m.intl.string(m.t["6nCZyG"]),
                body: m.intl.format(m.t.dYCPD2, { errorMessage: e.join(", ") }),
            }),
            f.A.addBreadcrumb({ message: "Error updating new member action icon" }),
            Promise.reject()
        );
    }
}
function E(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
        resourceChannel: e,
    });
}
function N(e, t) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
        channelId: e,
        resourceChannel: t,
    });
}
function _(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
        resourceChannelId: e,
    });
}
function S(e) {
    s.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
        resourceChannels: e,
    });
}
async function T(e, t, n) {
    try {
        let r = await l.Bo.put({
                url: b.Rsh.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            i = (0, o.RR)(r.body);
        return (
            s.h.dispatch({
                type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
                guildId: e,
                resourceChannel: i,
            }),
            r.body
        );
    } catch (t) {
        var r;
        let e = i().flatMap(null != (r = t.body) ? r : {}, (e) => e);
        a.A.show({
            title: m.intl.string(m.t["6nCZyG"]),
            body: m.intl.format(m.t.dYCPD2, { errorMessage: e.join(", ") }),
        });
    }
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || g.A.hasChanges()
        ? c.h.getEnabled(e) && !(0, o.Ic)(t)
            ? (a.A.show({
                  title: m.intl.string(m.t["6nCZyG"]),
                  body: m.intl.string(m.t.JuhUTS),
              }),
              f.A.addBreadcrumb({ message: "Error saving home settings" }),
              Promise.reject())
            : P(e, t)
        : Promise.resolve();
}
function C(e, t) {
    var n, r;
    let i = c.h.getSettings(e);
    return t && !(0, o.Ic)(i)
        ? void a.A.show({
              title: m.intl.string(m.t["6nCZyG"]),
              body: m.intl.string(m.t.JuhUTS),
          })
        : (s.h.dispatch({
              type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
              guildId: e,
              enabled: t,
          }),
          P(
              e,
              ((n = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, i)),
              (r = r = { enabled: t }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              n),
          ));
}
async function P(e, t) {
    var n, r, c, u, f, p, x, h, O;
    s.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_START" });
    let y = g.A.getPendingData();
    try {
        let i = await l.Bo.put({
                url: b.Rsh.GUILD_HOME_SETTINGS(e),
                body: (0, o.Y4)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            a = (0, o.Xu)(i.body);
        return (
            s.h.dispatch({
                type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
                guildId: e,
                homeSettings: a,
            }),
            Object.entries(y).forEach((t) => {
                let [n, r] = t;
                null == r ||
                    (null != r.iconData
                        ? w(e, n, r).finally(() => {
                              j(n);
                          })
                        : j(n));
            }),
            d.default.track(b.HAw.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null !=
                (n = null == a || null == (p = a.welcomeMessage) ? void 0 : p.authorIds)
                    ? n
                    : [])[0],
                welcome_message_length:
                    null !=
                    (r = null == a || null == (h = a.welcomeMessage) || null == (x = h.message) ? void 0 : x.length)
                        ? r
                        : 0,
                member_action_channel_ids: (null != (c = null == a ? void 0 : a.newMemberActions) ? c : []).map(
                    (e) => e.channelId,
                ),
                member_action_channel_actions: (null != (u = null == a ? void 0 : a.newMemberActions) ? u : []).map(
                    (e) => e.actionType,
                ),
                resource_channel_ids: (null != (f = null == a ? void 0 : a.resourceChannels) ? f : []).map(
                    (e) => e.channelId,
                ),
                enabled: null == a ? void 0 : a.enabled,
            }),
            i.body
        );
    } catch (t) {
        let e = i().flatMap(null != (O = t.body) ? O : {}, (e) => e);
        j(),
            s.h.dispatch({ type: "GUILD_HOME_SETTINGS_UPDATE_FAIL" }),
            a.A.show({
                title: m.intl.string(m.t["6nCZyG"]),
                body: m.intl.format(m.t.dYCPD2, { errorMessage: e.join(", ") }),
            });
    }
}
async function w(e, t, n) {
    let { iconData: r, isUrl: i, emoji: l } = n;
    if (null != l) return;
    let s = null != r && i ? await R(r) : r;
    await A(e, t, {
        icon: s,
        emoji: null,
    });
}
async function R(e) {
    let t = await fetch(e),
        n = await t.blob();
    return await (0, u.We)(n);
}
function D(e, t) {
    null != e &&
        s.h.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
            guildId: e,
            channelIds: t,
        });
}
function G() {
    s.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET" });
}
