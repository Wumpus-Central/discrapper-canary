n.d(t, {
    B7: () => A,
    Iq: () => m,
    My: () => O,
    eK: () => b,
    hS: () => g,
    jI: () => y,
    xA: () => E,
}),
    n(896048);
var r = n(73153),
    i = n(508675),
    a = n(734057),
    s = n(309010),
    o = n(954571),
    l = n(242919),
    c = n(806246),
    u = n(60821),
    d = n(708455),
    f = n(652215);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h() {
    var e;
    return (0, c.A)(null != (e = s.A.getVoiceChannelId()) ? e : void 0);
}

function m(e, t) {
    var n;
    let i = null == (n = a.A.getChannel(s.A.getVoiceChannelId())) ? void 0 : n.guild_id;
    null == e || null == i
        ? b(!1, t)
        : (r.h.dispatch({
              type: "UPDATE_HANG_STATUS",
              status: e,
              guildId: i,
              saveAsDefault: t,
          }),
          o.default.track(
              f.HAw.SET_HANG_STATUS,
              _(
                  {
                      status_type: e,
                      manual_update: !!t,
                  },
                  h(),
              ),
          ));
}

function g(e, t, n) {
    "" === e || null == t
        ? b(!1, n)
        : (r.h.dispatch({
              type: "UPDATE_HANG_STATUS_CUSTOM",
              emoji: t,
              status: e,
              saveAsDefault: n,
          }),
          o.default.track(
              f.HAw.SET_HANG_STATUS,
              _(
                  {
                      status_type: d.Kk.CUSTOM,
                      custom_status_text: e,
                      custom_status_emoji_id: t.id,
                      custom_status_emoji_name: t.name,
                      manual_update: !!n,
                  },
                  h(),
              ),
          ));
}

function E(e, t) {
    null == e
        ? b(!1, t)
        : (r.h.dispatch({
              type: "UPDATE_HANG_STATUS_GAME_ACTIVITY",
              applicationId: e,
              saveAsDefault: t,
          }),
          o.default.track(
              f.HAw.SET_HANG_STATUS,
              _(
                  {
                      status_type: "game_activity",
                      manual_update: !!t,
                  },
                  h(),
              ),
          ));
}

function b(e, t) {
    r.h.dispatch({
        type: "CLEAR_HANG_STATUS",
        saveAsDefault: t,
    }),
        o.default.track(
            f.HAw.CLEAR_HANG_STATUS,
            _(
                {
                    manual_update: !!e,
                },
                h(),
            ),
        );
}

function y() {
    let e = [l.A.getCustomHangStatus(), ...l.A.getRecentStatuses(), ...l.A.getFavoritedStatuses()].filter((e) => {
        var t;
        return (
            !(null == e || (0, u.A)(e)) &&
            null != e.emoji &&
            (null == (t = e.emoji) ? void 0 : t.id) != null &&
            null == i.Ay.getCustomEmojiById(e.emoji.id)
        );
    });
    e.length > 0 &&
        r.h.dispatch({
            type: "DELETE_INVALID_HANG_STATUSES",
            statuses: e,
        });
}

function O(e, t) {
    r.h.dispatch({
        type: "UPDATE_FAVORITE_HANG_STATUS",
        status: e,
        emoji: t,
    });
}

function A() {
    r.h.dispatch({
        type: "RESET_HANG_STATUS_STATE",
    });
}
