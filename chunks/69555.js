"use strict";
n.d(t, { B7: () => I, Iq: () => p, My: () => A, eK: () => g, hS: () => h, jI: () => E, xA: () => m });
var r = n(73153),
    i = n(508675),
    a = n(734057),
    s = n(309010),
    o = n(954571),
    l = n(242919),
    u = n(806246),
    c = n(60821),
    d = n(708455),
    _ = n(652215);
function f() {
    return (0, u.A)(s.A.getVoiceChannelId() ?? void 0);
}
function p(e, t) {
    let n = a.A.getChannel(s.A.getVoiceChannelId())?.guild_id;
    null == e || null == n
        ? g(!1, t)
        : (r.h.dispatch({ type: "UPDATE_HANG_STATUS", status: e, guildId: n, saveAsDefault: t }),
          o.default.track(_.HAw.SET_HANG_STATUS, { status_type: e, manual_update: !!t, ...f() }));
}
function h(e, t, n) {
    "" === e || null == t
        ? g(!1, n)
        : (r.h.dispatch({ type: "UPDATE_HANG_STATUS_CUSTOM", emoji: t, status: e, saveAsDefault: n }),
          o.default.track(_.HAw.SET_HANG_STATUS, {
              status_type: d.Kk.CUSTOM,
              custom_status_text: e,
              custom_status_emoji_id: t.id,
              custom_status_emoji_name: t.name,
              manual_update: !!n,
              ...f(),
          }));
}
function m(e, t) {
    null == e
        ? g(!1, t)
        : (r.h.dispatch({ type: "UPDATE_HANG_STATUS_GAME_ACTIVITY", applicationId: e, saveAsDefault: t }),
          o.default.track(_.HAw.SET_HANG_STATUS, { status_type: "game_activity", manual_update: !!t, ...f() }));
}
function g(e, t) {
    r.h.dispatch({ type: "CLEAR_HANG_STATUS", saveAsDefault: t }),
        o.default.track(_.HAw.CLEAR_HANG_STATUS, { manual_update: !!e, ...f() });
}
function E() {
    let e = [l.A.getCustomHangStatus(), ...l.A.getRecentStatuses(), ...l.A.getFavoritedStatuses()].filter(
        (e) =>
            !(null == e || (0, c.A)(e)) &&
            null != e.emoji &&
            e.emoji?.id != null &&
            null == i.Ay.getCustomEmojiById(e.emoji.id),
    );
    e.length > 0 && r.h.dispatch({ type: "DELETE_INVALID_HANG_STATUSES", statuses: e });
}
function A(e, t) {
    r.h.dispatch({ type: "UPDATE_FAVORITE_HANG_STATUS", status: e, emoji: t });
}
function I() {
    r.h.dispatch({ type: "RESET_HANG_STATUS_STATE" });
}
